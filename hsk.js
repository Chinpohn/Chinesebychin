const data = window.GRAMMAR_APP_DATA;
const urlParams = new URLSearchParams(window.location.search);
const activeWordLevel = ["1", "2"].includes(urlParams.get("hsk")) ? urlParams.get("hsk") : "1";
const MEMORY_INTERVALS = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30];
const DAILY_WORD_LIMIT = 10;
const CHECKIN_CALENDAR_YEAR = 2026;
const CHECKIN_MONTHS = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
];
const CHECKIN_WEEKDAYS = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

const now = new Date();
let checkinMonthIndex = now.getFullYear() === CHECKIN_CALENDAR_YEAR ? now.getMonth() : 0;
let selectedWord = null;
let dailyQueue = [];
let activeQuiz = null;

const els = {
  hskPageTitle: document.querySelector("#hskPageTitle"),
  hskHeroImage: document.querySelector("#hskHeroImage"),
  hskLinks: [...document.querySelectorAll("[data-hsk-link]")],
  wordSearchInput: document.querySelector("#wordSearchInput"),
  wordbankSubtitle: document.querySelector("#wordbankSubtitle"),
  wordbankList: document.querySelector("#wordbankList"),
  wordDetail: document.querySelector("#wordDetail"),
  dailyWordStatus: document.querySelector("#dailyWordStatus"),
  dailyQuiz: document.querySelector("#dailyQuiz"),
  checkinSubtitle: document.querySelector("#checkinSubtitle"),
  checkinToday: document.querySelector("#checkinToday"),
  checkinStreak: document.querySelector("#checkinStreak"),
  checkinMonthTitle: document.querySelector("#checkinMonthTitle"),
  prevCheckinMonthBtn: document.querySelector("#prevCheckinMonthBtn"),
  nextCheckinMonthBtn: document.querySelector("#nextCheckinMonthBtn"),
  checkinGrid: document.querySelector("#checkinGrid"),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[，。？！、,.?!\s]/g, "")
    .trim();
}

function todayKey() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function allHskWords() {
  return data.hskWords?.length ? data.hskWords : data.units.flatMap((unit) => unit.vocab || []);
}

function wordsForLevel() {
  return allHskWords().filter((entry) => String(entry.level || "").startsWith(activeWordLevel));
}

function pinyinDisplay(pinyin) {
  const text = String(pinyin || "").trim();
  if (!text || /\s|[.,!?;:，。？！；：]/.test(text)) return text.replace(/\s+/g, " ");
  const initials = ["zh", "ch", "sh", "b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "z", "c", "s", "r", "y", "w", ""];
  const finals = ["iang", "iong", "uang", "uai", "iao", "ian", "ing", "ong", "ang", "eng", "uan", "uen", "uei", "ua", "uo", "ue", "ui", "un", "ou", "iu", "ie", "ve", "ai", "ei", "ao", "an", "en", "in", "ia", "io", "er", "a", "o", "e", "i", "u", "v", "m", "n", "ng"];
  const valid = new Set();
  initials.forEach((initial) => finals.forEach((final) => valid.add(`${initial}${final}`)));
  const plain = text.toLowerCase()
    .replace(/[āáǎà]/g, "a").replace(/[ēéěè]/g, "e").replace(/[īíǐì]/g, "i")
    .replace(/[ōóǒò]/g, "o").replace(/[ūúǔù]/g, "u").replace(/[ǖǘǚǜü]/g, "v");
  const memo = new Map();
  function splitAt(index) {
    if (index >= plain.length) return [];
    if (memo.has(index)) return memo.get(index);
    for (let end = Math.min(plain.length, index + 6); end > index; end -= 1) {
      const part = plain.slice(index, end);
      if (!valid.has(part)) continue;
      const rest = splitAt(end);
      if (rest) {
        const result = [text.slice(index, end), ...rest];
        memo.set(index, result);
        return result;
      }
    }
    memo.set(index, null);
    return null;
  }
  return (splitAt(0) || [text]).join(" ");
}

function wordProgress() {
  return JSON.parse(localStorage.getItem("grammarApp.wordProgress") || "{}");
}

function saveWordProgress(progress) {
  localStorage.setItem("grammarApp.wordProgress", JSON.stringify(progress));
}

function memoryStats(entry, progress = wordProgress()) {
  const item = progress[entry.word] || { stage: 0 };
  const stage = Math.min(Number(item.stage || 0), MEMORY_INTERVALS.length);
  const percent = Math.round((stage / MEMORY_INTERVALS.length) * 100);
  return {
    stage,
    percent,
    remaining: Math.max(0, 100 - percent),
    learned: Boolean(item.learned) || stage >= MEMORY_INTERVALS.length,
    due: item.due || "",
  };
}

function addDays(key, days) {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dueWords() {
  const today = todayKey();
  const progress = wordProgress();
  return wordsForLevel().filter((entry) => {
    const item = progress[entry.word];
    if (item?.learned) return false;
    return !item?.due || item.due <= today;
  }).slice(0, DAILY_WORD_LIMIT);
}

function wordMeanings(entry) {
  if (Array.isArray(entry.meanings) && entry.meanings.length) return entry.meanings.filter(Boolean);
  const text = entry.thai && !/^HSK\b/.test(entry.thai) ? entry.thai : (entry.pos || `HSK ${entry.level}`);
  return String(text || "คำศัพท์ HSK").split(/[\/、,，]/).map((part) => part.trim()).filter(Boolean);
}

function wordNote(entry) {
  if (entry.note) return `ข้อควรจำ: ${entry.note}`;
  if (/助/.test(entry.pos || "")) return "ข้อควรจำ: คำนี้เป็นคำช่วย มักวางท้ายประโยคหรือหลังส่วนที่ต้องการเน้น";
  if (/量/.test(entry.pos || "")) return "ข้อควรจำ: คำนี้ใช้เป็นลักษณนาม ต้องใช้คู่กับจำนวนหรือคำนาม";
  if (/副/.test(entry.pos || "")) return "ข้อควรจำ: คำนี้มักวางหน้าคำกริยาหรือคำคุณศัพท์";
  if (/介/.test(entry.pos || "")) return "ข้อควรจำ: คำนี้เป็นบุพบท ต้องดูคำที่ตามหลังให้ครบ";
  return "ข้อควรจำ: จำตัวจีน พินอิน และตำแหน่งในประโยคไปพร้อมกัน";
}

function examplesForMeaning(entry, meaning, index) {
  if (Array.isArray(entry.examples) && entry.examples.length) return entry.examples[index % entry.examples.length];
  if (/动/.test(entry.pos || "")) return [`我想${entry.word}。`, `老师教我们${entry.word}。`][index % 2];
  if (/形/.test(entry.pos || "")) return [`这个很${entry.word}。`, `今天有点儿${entry.word}。`][index % 2];
  if (/副/.test(entry.pos || "")) return [`我${entry.word}想学习中文。`, `他${entry.word}在学校。`][index % 2];
  return [`我学习“${entry.word}”这个词。`, `请记住“${entry.word}”的拼音。`][index % 2];
}

function renderExampleText(example) {
  if (typeof example === "string") return `<p>${escapeHtml(example)}</p>`;
  return `
    <p>${escapeHtml(example.zh || "")}</p>
    ${example.pinyin ? `<small>${escapeHtml(example.pinyin)}</small>` : ""}
    ${example.thai ? `<em>${escapeHtml(example.thai)}</em>` : ""}
  `;
}

function renderWordDetail(entry) {
  if (!entry) {
    els.wordDetail.className = "word-detail is-empty";
    els.wordDetail.innerHTML = `<p>เลือกคำศัพท์หนึ่งคำเพื่อดูวิธีใช้ ตัวอย่างประโยค และข้อควรจำ</p>`;
    return;
  }
  const meanings = wordMeanings(entry);
  const stats = memoryStats(entry);
  const examples = meanings.length > 1
    ? meanings.map((meaning, index) => ({ meaning, example: examplesForMeaning(entry, meaning, index) }))
    : [
      { meaning: meanings[0] || entry.pos || "คำศัพท์", example: examplesForMeaning(entry, meanings[0], 0) },
      { meaning: meanings[0] || entry.pos || "คำศัพท์", example: examplesForMeaning(entry, meanings[0], 1) },
    ];
  els.wordDetail.className = "word-detail";
  els.wordDetail.innerHTML = `
    <div class="word-detail-head">
      <strong>${escapeHtml(entry.word)}</strong>
      <span>${escapeHtml(pinyinDisplay(entry.pinyin || entry.tone))}</span>
      <em>HSK ${escapeHtml(entry.level || "-")}</em>
    </div>
    <div class="memory-progress is-detail">
      <div>
        <strong>${stats.percent}%</strong>
        <span>${stats.learned ? "จำได้แล้ว" : `เหลืออีก ${stats.remaining}% จึงจะจำได้`}</span>
      </div>
      <div class="memory-bar" aria-hidden="true"><span style="width: ${stats.percent}%"></span></div>
    </div>
    <p class="word-explain">วิธีใช้: ${escapeHtml(entry.usage || `${entry.word} เป็นคำ${entry.pos || "HSK"} ความหมายหลักคือ ${meanings.join(" / ")}`)}</p>
    <div class="word-examples">
      ${examples.map((item) => `
        <div>
          <span>${escapeHtml(item.meaning)}</span>
          ${renderExampleText(item.example)}
        </div>
      `).join("")}
    </div>
    <p class="word-note">${escapeHtml(wordNote(entry))}</p>
  `;
}

function quizOptions(correct, values) {
  const options = [correct];
  for (const value of values) {
    if (options.length >= 4) break;
    if (value && normalize(value) !== normalize(correct) && !options.some((item) => normalize(item) === normalize(value))) options.push(value);
  }
  return options.sort((a, b) => normalize(a).localeCompare(normalize(b)));
}

function buildQuiz(entry) {
  const words = wordsForLevel();
  const mode = (todayKey().charCodeAt(9) + entry.word.charCodeAt(0)) % 3;
  if (mode === 0) {
    return {
      prompt: `พินอินของคำนี้คือข้อใด: ${entry.word}`,
      answer: pinyinDisplay(entry.pinyin || entry.tone),
      options: quizOptions(pinyinDisplay(entry.pinyin || entry.tone), words.map((word) => pinyinDisplay(word.pinyin || word.tone))),
      reveal: `${entry.word} · ${pinyinDisplay(entry.pinyin || entry.tone)}`,
    };
  }
  if (mode === 1) {
    return {
      prompt: `ความหมายภาษาไทยของคำนี้คือข้อใด: ${entry.word}`,
      answer: wordMeanings(entry)[0],
      options: quizOptions(wordMeanings(entry)[0], words.map((word) => wordMeanings(word)[0])),
      reveal: `${entry.word} · ${pinyinDisplay(entry.pinyin || entry.tone)}`,
    };
  }
  return {
    prompt: `ตัวอักษรจีนข้อใดมีความหมายว่า: ${wordMeanings(entry)[0]}`,
    answer: entry.word,
    options: quizOptions(entry.word, words.map((word) => word.word)),
    reveal: "เลือกตัวอักษรจีนจากความหมาย",
  };
}

function renderDailyQuiz() {
  dailyQueue = dueWords();
  const progress = wordProgress();
  const levelWords = wordsForLevel();
  const learnedCount = levelWords.filter((entry) => memoryStats(entry, progress).learned).length;
  els.dailyWordStatus.textContent = `วันนี้ต้องทบทวน ${dailyQueue.length} คำ เรียนจบแล้ว ${learnedCount} คำ ต้องตอบถูกครบ 10 รอบตามวันที่กำหนดจึงถือว่าจำได้`;
  if (!dailyQueue.length) {
    markTodayChecked(true);
    els.dailyQuiz.innerHTML = `<div class="daily-finished"><strong>วันนี้ท่องคำศัพท์ครบแล้ว</strong><span>ระบบเช็กอินให้อัตโนมัติแล้ว</span></div>`;
    return;
  }
  const entry = dailyQueue[0];
  activeQuiz = { entry, ...buildQuiz(entry) };
  const stats = memoryStats(entry, progress);
  const nextRound = Math.min(stats.stage + 1, MEMORY_INTERVALS.length);
  els.dailyQuiz.innerHTML = `
    <div class="daily-quiz-head">
      <div class="daily-stat-card">
        <span class="daily-label">รอบทบทวน</span>
        <strong>${nextRound} / ${MEMORY_INTERVALS.length}</strong>
        <small>${escapeHtml(activeQuiz.reveal)}</small>
      </div>
      <div class="daily-stat-card">
        <span class="daily-label">ความคืบหน้า</span>
        <strong>${stats.percent}%</strong>
        <small>${stats.learned ? "จำได้แล้ว" : `เหลืออีก ${stats.remaining}% จึงจะจำได้`}</small>
      </div>
    </div>
    <div class="memory-progress">
      <div class="memory-bar" aria-hidden="true"><span style="width: ${stats.percent}%"></span></div>
    </div>
    <div class="daily-question">
      <span>โจทย์</span>
      <p>${escapeHtml(activeQuiz.prompt)}</p>
    </div>
    <span class="daily-options-label">เลือกคำตอบ</span>
    <div class="daily-options">
      ${activeQuiz.options.map((option) => `<button class="daily-option" type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
    </div>
    <p class="daily-feedback" aria-live="polite"></p>
  `;
  els.dailyQuiz.querySelectorAll(".daily-option").forEach((btn) => {
    btn.addEventListener("click", () => answerDailyQuiz(btn.dataset.answer));
  });
}

function answerDailyQuiz(answer) {
  const progress = wordProgress();
  const current = progress[activeQuiz.entry.word] || { stage: 0 };
  const ok = normalize(answer) === normalize(activeQuiz.answer);
  const feedback = els.dailyQuiz.querySelector(".daily-feedback");
  if (ok) {
    const nextStage = (current.stage || 0) + 1;
    progress[activeQuiz.entry.word] = {
      stage: nextStage,
      due: nextStage >= MEMORY_INTERVALS.length ? "" : addDays(todayKey(), MEMORY_INTERVALS[nextStage - 1]),
      learned: nextStage >= MEMORY_INTERVALS.length,
      updated: todayKey(),
    };
    feedback.textContent = nextStage >= MEMORY_INTERVALS.length ? "ถูก จำคำนี้ครบ 10 รอบแล้ว" : "ถูก รอบต่อไปจะมาในวันที่กำหนด";
    feedback.className = "daily-feedback ok";
  } else {
    progress[activeQuiz.entry.word] = { stage: 0, due: todayKey(), learned: false, updated: todayKey() };
    feedback.textContent = `ผิด เริ่มนับคำนี้ใหม่ คำตอบคือ ${activeQuiz.answer}`;
    feedback.className = "daily-feedback no";
  }
  saveWordProgress(progress);
  window.setTimeout(() => {
    renderDailyQuiz();
    renderWordBank();
  }, 850);
}

function renderWordBank() {
  const words = wordsForLevel();
  const progress = wordProgress();
  const query = normalize(els.wordSearchInput.value || "");
  const filtered = words.filter((entry) => {
    const exampleText = Array.isArray(entry.examples) ? entry.examples.map((item) => `${item.zh || ""}${item.pinyin || ""}${item.thai || ""}`).join("") : "";
    const haystack = normalize(`${entry.word}${entry.pinyin}${entry.tone}${entry.thai}${entry.pos}${entry.usage || ""}${entry.note || ""}${exampleText}HSK${entry.level}`);
    return haystack.includes(query);
  });
  const learnedCount = words.filter((entry) => memoryStats(entry, progress).learned).length;
  const overallPercent = Math.round(words.reduce((sum, entry) => sum + memoryStats(entry, progress).percent, 0) / Math.max(1, words.length));
  els.wordbankSubtitle.textContent = `HSK ${activeWordLevel}: ทั้งหมด ${words.length} คำ แสดง ${filtered.length} คำ ความคืบหน้าเฉลี่ย ${overallPercent}% เหลืออีก ${100 - overallPercent}% จำได้ครบแล้ว ${learnedCount} คำ`;
  els.wordbankList.innerHTML = filtered.map((entry) => {
    const stats = memoryStats(entry, progress);
    return `
      <article class="word-card${selectedWord === entry.word ? " is-selected" : ""}" tabindex="0" data-word="${escapeHtml(entry.word)}">
        <div class="word-main">${escapeHtml(entry.word)}</div>
        <div class="word-meta">
          <strong>${escapeHtml(pinyinDisplay(entry.pinyin || entry.tone || "-"))}</strong>
          <span>HSK ${escapeHtml(entry.level || "-")}</span>
        </div>
        <p>${escapeHtml(entry.thai || entry.pos || "")}</p>
        <div class="memory-progress is-compact">
          <div>
            <strong>${stats.percent}%</strong>
            <span>${stats.learned ? "จำได้แล้ว" : `เหลือ ${stats.remaining}%`}</span>
          </div>
          <div class="memory-bar" aria-hidden="true"><span style="width: ${stats.percent}%"></span></div>
        </div>
      </article>
    `;
  }).join("");
  els.wordbankList.querySelectorAll(".word-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedWord = card.dataset.word;
      renderWordDetail(words.find((entry) => entry.word === selectedWord));
      renderWordBank();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") card.click();
    });
  });
  renderWordDetail(words.find((entry) => entry.word === selectedWord) || null);
}

function storedCheckins() {
  return new Set(JSON.parse(localStorage.getItem("grammarApp.checkins") || "[]"));
}

function saveCheckins(days) {
  localStorage.setItem("grammarApp.checkins", JSON.stringify([...days].sort()));
}

function dayOffsetKey(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function currentStreak(days) {
  let streak = 0;
  for (let offset = 0; offset > -365; offset -= 1) {
    if (!days.has(dayOffsetKey(offset))) break;
    streak += 1;
  }
  return streak;
}

function renderCheckin() {
  const days = storedCheckins();
  const today = todayKey();
  const checkedToday = days.has(today);
  const streak = currentStreak(days);
  els.checkinToday.textContent = today;
  els.checkinStreak.textContent = `${streak} วัน`;
  els.checkinSubtitle.textContent = checkedToday
    ? "วันนี้เช็กอินแล้ว รักษาจังหวะเรียนต่อเนื่องไว้ให้ดี"
    : "เรียนคำศัพท์ประจำวันให้ครบ ระบบจะบันทึกเช็กอินให้อัตโนมัติ";
  const monthName = CHECKIN_MONTHS[checkinMonthIndex];
  const firstDay = new Date(CHECKIN_CALENDAR_YEAR, checkinMonthIndex, 1).getDay();
  const daysInMonth = new Date(CHECKIN_CALENDAR_YEAR, checkinMonthIndex + 1, 0).getDate();
  const blanks = Array.from({ length: firstDay }, () => `<span class="calendar-day is-empty" aria-hidden="true"></span>`).join("");
  const dayCells = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const key = `${CHECKIN_CALENDAR_YEAR}-${String(checkinMonthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const className = ["calendar-day", days.has(key) ? "is-done" : "", key === today ? "is-today" : ""].filter(Boolean).join(" ");
    const label = days.has(key) ? "เช็กอินแล้ว" : "ยังไม่เช็กอิน";
    return `<span class="${className}" aria-label="${escapeHtml(`${day} ${monthName} ${CHECKIN_CALENDAR_YEAR} ${label}`)}">${day}</span>`;
  }).join("");
  els.checkinMonthTitle.textContent = `${monthName} ${CHECKIN_CALENDAR_YEAR}`;
  els.prevCheckinMonthBtn.disabled = checkinMonthIndex === 0;
  els.nextCheckinMonthBtn.disabled = checkinMonthIndex === 11;
  els.checkinGrid.innerHTML = `
    <article class="checkin-month">
      <div class="calendar-weekdays" aria-hidden="true">
        ${CHECKIN_WEEKDAYS.map((day) => `<span>${escapeHtml(day)}</span>`).join("")}
      </div>
      <div class="calendar-days">${blanks}${dayCells}</div>
    </article>
  `;
}

function markTodayChecked(silent = false) {
  const days = storedCheckins();
  days.add(todayKey());
  saveCheckins(days);
  if (!silent) renderCheckin();
}

function setupHeader() {
  els.hskPageTitle.textContent = `ท่องคำศัพท์ HSK ${activeWordLevel}`;
  els.hskHeroImage.src = activeWordLevel === "1" ? "./assets/hsk1-cover.png" : "./assets/hsk2-cover.png";
  els.hskHeroImage.alt = `ท่องคำศัพท์ HSK ${activeWordLevel}`;
  els.hskLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.hskLink === activeWordLevel));
}

els.wordSearchInput.addEventListener("input", renderWordBank);
els.prevCheckinMonthBtn.addEventListener("click", () => {
  checkinMonthIndex = Math.max(0, checkinMonthIndex - 1);
  renderCheckin();
});
els.nextCheckinMonthBtn.addEventListener("click", () => {
  checkinMonthIndex = Math.min(11, checkinMonthIndex + 1);
  renderCheckin();
});

setupHeader();
renderWordBank();
renderDailyQuiz();
renderCheckin();
