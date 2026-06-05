const data = window.GRAMMAR_APP_DATA;
const PROMPTS_PER_TYPE = 5;

const state = {
  current: Number(localStorage.getItem("grammarApp.current") || 1),
  view: "practice",
  done: new Set(JSON.parse(localStorage.getItem("grammarApp.done") || "[]")),
  mixedPage: JSON.parse(localStorage.getItem("grammarApp.mixedPage") || "{}"),
  mixedPassed: JSON.parse(localStorage.getItem("grammarApp.mixedPassed") || "{}"),
  sessionScore: {},
};

const els = {
  unitList: document.querySelector("#unitList"),
  unitSelect: document.querySelector("#unitSelect"),
  searchInput: document.querySelector("#searchInput"),
  doneCount: document.querySelector("#doneCount"),
  progressFill: document.querySelector("#progressFill"),
  tabs: [...document.querySelectorAll(".tab")],
  views: {
    vocab: document.querySelector("#vocabView"),
    practice: document.querySelector("#practiceView"),
  },
  unitNumber: document.querySelector("#unitNumber"),
  practiceTitle: document.querySelector("#practiceTitle"),
  unitChineseTitle: document.querySelector("#unitChineseTitle"),
  practiceSubtitle: document.querySelector("#practiceSubtitle"),
  wordChips: document.querySelector("#wordChips"),
  practiceList: document.querySelector("#practiceList"),
  vocabTitle: document.querySelector("#vocabTitle"),
  vocabSubtitle: document.querySelector("#vocabSubtitle"),
  vocabList: document.querySelector("#vocabList"),
  checkBtn: document.querySelector("#checkBtn"),
  showAnswersBtn: document.querySelector("#showAnswersBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  markDoneBtn: document.querySelector("#markDoneBtn"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
};

function currentUnit() {
  return data.units.find((unit) => unit.id === state.current) || data.units[0];
}

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
    .replace(/^答案示例：/, "")
    .replace(/^ตัวอย่างคำตอบ[:：]\s*/, "")
    .replace(/[，。？！、,.?!\s]/g, "")
    .replace(/->/g, "")
    .trim();
}

function isFreeChineseSentence(text) {
  const chineseChars = String(text || "").match(/[㐀-鿿]/g) || [];
  return chineseChars.length >= 4;
}

function promptSentenceText(prompt) {
  return String(prompt || "")
    .replace(/^[^:：]*[:：]\s*/, "")
    .replace(/\s*\(\d+\)\s*$/, "")
    .trim();
}

function filledBlankAnswers(prompt, answer) {
  const sentence = promptSentenceText(prompt);
  if (!sentence.includes("__")) return [];

  const answerText = String(answer || "");
  const blanks = sentence.match(/__/g) || [];
  const answerParts = answerText
    .split(/[、，,\/]/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (answerParts.length === blanks.length) {
    let partIndex = 0;
    return [normalize(sentence.replace(/__/g, () => answerParts[partIndex++] || ""))].filter(Boolean);
  }

  return [normalize(answerText)].filter(Boolean);
}

function chineseChars(text) {
  return String(text || "").match(/[㐀-鿿]/g) || [];
}

function uniqueChineseChars(text) {
  return [...new Set(chineseChars(text))];
}

function semanticChineseResult(input, answer) {
  const typedChars = chineseChars(input);
  const expectedChars = uniqueChineseChars(answer);
  if (!typedChars.length) {
    return { ok: false, message: "ยังไม่เห็นตัวอักษรจีนในคำตอบ ลองเขียนเป็นประโยคจีน" };
  }

  if (typedChars.length < Math.min(3, expectedChars.length)) {
    return { ok: false, message: "คำตอบสั้นเกินไป ยังไม่เป็นประโยคจีนที่สมบูรณ์" };
  }

  const typedSet = new Set(typedChars);
  const matched = expectedChars.filter((char) => typedSet.has(char));
  const missing = expectedChars.filter((char) => !typedSet.has(char));
  const minimumMatches = Math.max(2, Math.ceil(expectedChars.length * 0.72));

  if (matched.length >= minimumMatches) {
    return { ok: true, message: "ถูก ความหมายใกล้เคียงกับโจทย์แล้ว" };
  }

  return {
    ok: false,
    message: missing.length
      ? `ความหมายยังไม่ครบ ลองใส่คำสำคัญ เช่น ${missing.slice(0, 3).join("、")}`
      : "ลำดับหรือความหมายยังไม่ตรงกับโจทย์ ลองตรวจโครงสร้างประโยคอีกครั้ง",
  };
}

function exactInputResult(input, answer, mode, requiredText, prompt = "", bucket = "") {
  const typed = normalize(input);
  if (!typed) return { ok: false, message: "กรุณาพิมพ์คำตอบก่อนตรวจ" };

  if (mode === "sentence") {
    const ok = isFreeChineseSentence(input);
    return {
      ok,
      message: ok ? "ถูก ประโยคจีนมีความยาวพอสำหรับการฝึกแต่งประโยค" : "ลองเขียนเป็นประโยคจีนอย่างน้อย 4 ตัวอักษร",
    };
  }

  const expected = String(answer)
    .split("/")
    .map((part) => normalize(part))
    .filter(Boolean);
  const completedAnswers = filledBlankAnswers(prompt, answer);
  const accepted = [...expected, ...completedAnswers];
  const exactOk = accepted.includes(typed) || accepted.some((part) => typed.includes(part) || part.includes(typed));
  if (exactOk) return { ok: true, message: "ถูก" };

  if (bucket === "thai-zh") return semanticChineseResult(input, answer);

  if (chineseChars(answer).length && !chineseChars(input).length) {
    return { ok: false, message: "คำตอบนี้ต้องใช้ตัวอักษรจีน ลองดูเฉลยหรือกด提示" };
  }

  return { ok: false, message: "ยังไม่ตรงกับเฉลย ลองตรวจคำหรือพิมพ์ประโยคเต็มอีกครั้ง" };
}

function answerMatches(input, answer, mode, requiredText, prompt = "") {
  return exactInputResult(input, answer, mode, requiredText, prompt).ok;
}

function optionMatches(option, answer) {
  return normalize(option) === normalize(answer);
}

function saveProgress() {
  localStorage.setItem("grammarApp.current", String(state.current));
  localStorage.setItem("grammarApp.done", JSON.stringify([...state.done]));
  localStorage.setItem("grammarApp.mixedPage", JSON.stringify(state.mixedPage));
  localStorage.setItem("grammarApp.mixedPassed", JSON.stringify(state.mixedPassed));
}

function unitKey(unit) {
  return String(unit.id);
}

function signature(question) {
  return normalize(question.answer || question.prompt);
}

function renderProgress() {
  els.doneCount.textContent = state.done.size;
  els.progressFill.style.width = `${(state.done.size / data.units.length) * 100}%`;
}

function renderUnitList() {
  const query = normalize(els.searchInput.value);
  const units = data.units
    .filter((unit) => normalize(`${unit.id}${unit.thaiTitle}${unit.title}${unit.words.join("")}`).includes(query));

  els.unitList.innerHTML = "";
  units.forEach((unit) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `unit-btn${unit.id === state.current ? " is-active" : ""}`;
    btn.innerHTML = `
      <span class="num">${unit.id}</span>
      <span class="title">
        <strong>${escapeHtml(unit.thaiTitle)}</strong>
        <small>${escapeHtml(unit.title)}</small>
      </span>
      <span class="done">${state.done.has(unit.id) ? "✓" : ""}</span>
    `;
    btn.addEventListener("click", () => {
      state.current = unit.id;
      saveProgress();
      render();
    });
    els.unitList.appendChild(btn);
  });

  els.unitSelect.innerHTML = units.length
    ? units.map((unit) => `
      <option value="${unit.id}" ${unit.id === state.current ? "selected" : ""}>
        ${unit.id}. ${escapeHtml(unit.thaiTitle)} - ${escapeHtml(unit.title)}
      </option>
    `).join("")
    : `<option value="">ไม่พบบทเรียน</option>`;
  els.unitSelect.disabled = units.length === 0;
}

function addBucket(buckets, id, title, questions) {
  if (!questions.length) return;
  buckets.push({ id, title, questions: questions.slice(0, PROMPTS_PER_TYPE) });
}

function buildMixedQuestions(unit) {
  const buckets = [];
  const choiceQuestions = unit.tasks
    .flatMap((task) => task.prompts.filter((item) => item.mode === "choice"))
    .map((item) => ({ ...item, kind: "choice", title: "เลือกคำตอบ" }));
  addBucket(buckets, "choice", "เลือกคำตอบ", choiceQuestions);

  const sentenceTask = unit.tasks.find((task) => task.type === "แต่งประโยคเพิ่ม");
  if (sentenceTask) {
    addBucket(buckets, "sentence", sentenceTask.type, sentenceTask.prompts.map((item) => ({ ...item, kind: "input", title: sentenceTask.type })));
  }

  addBucket(
    buckets,
    "drag",
    "ลากเรียงประโยค",
    unit.dragTasks.map((item) => ({ ...item, kind: "drag", title: "ลากเรียงประโยค" }))
  );

  unit.tasks.forEach((task) => {
    if (task.type === "เลือกคำตอบ" || task.type === "แต่งประโยคเพิ่ม" || task.type === "เรียงคำให้เป็นประโยคจีน") return;
    const bucketId = task.type === "อ่านคำแปลไทยแล้วเขียนประโยคจีน" ? "thai-zh" : task.type;
    addBucket(buckets, bucketId, task.type, task.prompts.map((item) => ({ ...item, kind: "input", title: task.type })));
  });

  const sentenceBucket = buckets.find((bucket) => bucket.id === "sentence");
  const dragBucket = buckets.find((bucket) => bucket.id === "drag");
  if (sentenceBucket?.questions[0] && dragBucket?.questions[0] && signature(sentenceBucket.questions[0]) === signature(dragBucket.questions[0])) {
    const betterIndex = dragBucket.questions.findIndex((item) => signature(item) !== signature(sentenceBucket.questions[0]));
    if (betterIndex > 0) {
      const [betterFirst] = dragBucket.questions.splice(betterIndex, 1);
      dragBucket.questions.unshift(betterFirst);
    }
  }

  const ordered = [];
  for (let index = 0; index < PROMPTS_PER_TYPE; index += 1) {
    buckets.forEach((bucket) => {
      if (bucket.questions[index]) ordered.push({ ...bucket.questions[index], bucket: bucket.id, title: bucket.title });
    });
  }

  for (let index = 1; index < ordered.length; index += 1) {
    if (signature(ordered[index]) !== signature(ordered[index - 1])) continue;
    const swapIndex = ordered.findIndex((item, candidateIndex) => (
      candidateIndex > index &&
      signature(item) !== signature(ordered[index - 1]) &&
      (!ordered[index + 1] || signature(item) !== signature(ordered[index + 1]))
    ));
    if (swapIndex > index) {
      [ordered[index], ordered[swapIndex]] = [ordered[swapIndex], ordered[index]];
    }
  }

  return ordered;
}

function passedPages(unit) {
  return new Set(state.mixedPassed[unitKey(unit)] || []);
}

function currentPage(unit, total) {
  const key = unitKey(unit);
  const page = Math.min(state.mixedPage[key] || 0, Math.max(0, total - 1));
  state.mixedPage[key] = page;
  return page;
}

function markPagePassed(unit, page, total) {
  const key = unitKey(unit);
  const passed = passedPages(unit);
  passed.add(page);
  state.mixedPassed[key] = [...passed];
  if (passed.size >= total) state.done.add(unit.id);
  saveProgress();
}

function getPageResults(unit) {
  const key = unitKey(unit);
  if (!state.sessionScore[key]) {
    state.sessionScore[key] = new Array(buildMixedQuestions(unit).length).fill(null);
  }
  return state.sessionScore[key];
}

function setPageResult(unit, page, result) {
  const results = getPageResults(unit);
  if (results[page] !== "correct") results[page] = result;
}

function renderPractice(unit) {
  els.views.practice.classList.remove("is-score");
  const questions = buildMixedQuestions(unit);
  const page = currentPage(unit, questions.length);
  const item = questions[page];
  const passed = passedPages(unit).has(page);

  els.unitNumber.textContent = `บทฝึกที่ ${unit.id} / ${data.units.length}`;
  els.practiceTitle.textContent = unit.thaiTitle;
  els.unitChineseTitle.textContent = unit.title;
  els.practiceSubtitle.textContent = `รวมทุกประเภทเป็นชุดเดียว ${questions.length} ข้อ สลับโจทย์ไม่ให้จำแบบเดิม`;
  els.wordChips.innerHTML = unit.words.map((word) => `<span class="chip">${escapeHtml(word)}</span>`).join("");
  els.practiceList.innerHTML = "";

  if (item?.kind === "choice") renderChoiceQuestion(unit, item, page, questions.length, passed);
  if (item?.kind === "input") renderInputQuestion(unit, item, page, questions.length, passed);
  if (item?.kind === "drag") renderDragQuestion(unit, item, page, questions.length, passed);

  bindCurrentQuestion();
}

function cardTop(title, page, count, resultClass = "result quiz-result") {
  return `
    <div class="choice-quiz-top">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p class="choice-count">ข้อ ${page + 1} / ${count}</p>
      </div>
      <span class="${resultClass}"></span>
    </div>
  `;
}

function pagerHtml(page, count, passed) {
  const isLast = page === count - 1;
  return `
    <div class="choice-pager" data-count="${count}">
      <button class="secondary-btn page-prev" type="button" ${page === 0 ? "disabled" : ""}>ข้อก่อนหน้า</button>
      <button class="secondary-btn page-skip" type="button">ข้าม</button>
      <button class="secondary-btn page-next" type="button" ${!passed ? "disabled" : ""}>${isLast ? "ดูผลคะแนน" : "ข้อต่อไป"}</button>
    </div>
  `;
}

function renderChoiceQuestion(unit, item, page, count, passed) {
  const options = (item.options || []).map((option) => `
    <button class="choice-btn choice-option" data-value="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>
  `).join("");
  const card = document.createElement("article");
  card.className = "practice-card choice-quiz is-wide";
  card.dataset.type = "choice";
  card.innerHTML = `
    ${cardTop(item.title, page, count, "result choice-result")}
    <div class="choice-question">${escapeHtml(item.prompt)}</div>
    <div class="choice-options choice-options-stacked" data-answer="${escapeHtml(item.answer)}" data-selected="">${options}</div>
    <p class="answer choice-answer">เฉลย: ${escapeHtml(item.answer)}</p>
    ${pagerHtml(page, count, passed)}
  `;
  els.practiceList.appendChild(card);
}

function renderInputQuestion(unit, item, page, count, passed) {
  const answer = escapeHtml(item.answer);
  const mode = escapeHtml(item.mode || "exact");
  const required = escapeHtml((item.required || []).join("|"));
  const bucket = escapeHtml(item.bucket || "");
  const answerLabel = item.mode === "sentence" ? "ตัวอย่าง" : "ตัวอย่าง/เฉลย";
  const hint = escapeHtml(inputHintText(item));
  const card = document.createElement("article");
  card.className = "practice-card choice-quiz input-quiz is-wide";
  card.dataset.type = "input";
  card.innerHTML = `
    ${cardTop(item.title, page, count)}
    <label class="choice-question" for="mixedAnswer">${escapeHtml(item.prompt)}</label>
    <input id="mixedAnswer" data-answer="${answer}" data-mode="${mode}" data-required="${required}" data-prompt="${escapeHtml(item.prompt)}" data-bucket="${bucket}" autocomplete="off" aria-label="คำตอบ" />
    <div class="input-tools">
      <button class="secondary-btn hint-btn" type="button">提示</button>
      <p class="hint-text" aria-live="polite">${hint}</p>
    </div>
    <p class="feedback-text" aria-live="polite"></p>
    <p class="answer">${answerLabel}: ${answer}</p>
    ${pagerHtml(page, count, passed)}
  `;
  els.practiceList.appendChild(card);
}

function inputHintText(item) {
  if (item.bucket === "thai-zh") {
    return `เริ่มด้วยโครงสร้างจีนจากตัวอย่าง: ${uniqueChineseChars(item.answer).slice(0, 2).join("")}...`;
  }
  if (item.mode === "sentence") return `ลองใช้คำสำคัญจากบทนี้และเขียนให้เป็นประโยคจีนอย่างน้อย 4 ตัวอักษร`;
  return `ตัวช่วย: คำตอบขึ้นต้นด้วย ${String(item.answer || "").slice(0, 1) || "-"}`;
}

function renderDragQuestion(unit, item, page, count, passed) {
  const tokenHtml = item.tokens.map((token, tokenIndex) => tokenButton(token, `${unit.id}-${page}-${tokenIndex}`)).join("");
  const card = document.createElement("article");
  card.className = "practice-card choice-quiz drag-card is-wide";
  card.dataset.type = "drag";
  card.dataset.answer = item.answer;
  card.innerHTML = `
    ${cardTop(item.title, page, count, "drag-result quiz-result")}
    <div class="choice-question">${escapeHtml(item.prompt)}</div>
    <p class="drag-hint">แตะหรือจับลากจากคลังคำลงในช่องคำตอบ</p>
    <div class="drop-zone" data-role="answer" aria-label="พื้นที่คำตอบ"></div>
    <div class="token-bank" data-role="bank">${tokenHtml}</div>
    <p class="answer drag-answer">เฉลย: ${escapeHtml(item.answer)}</p>
    ${pagerHtml(page, count, passed)}
  `;
  els.practiceList.appendChild(card);
}

function renderVocab(unit) {
  els.vocabTitle.textContent = unit.thaiTitle;
  els.vocabSubtitle.textContent = `คำศัพท์ในบทนี้ ${unit.vocab.length} คำ พร้อมพินอินและคำแปลไทย`;
  els.vocabList.innerHTML = unit.vocab.map((entry) => `
    <article class="vocab-card">
      <div class="vocab-word">${escapeHtml(entry.word)}</div>
      <div>
        <div class="vocab-pinyin">${escapeHtml(entry.pinyin || "-")}</div>
        <div class="vocab-tone">${escapeHtml(entry.tone || "")}</div>
      </div>
      <div class="vocab-thai">${escapeHtml(entry.thai)}</div>
    </article>
  `).join("");
}

function bindCurrentQuestion() {
  els.practiceList.querySelectorAll(".choice-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".choice-options");
      group.dataset.selected = btn.dataset.value;
      group.querySelectorAll(".choice-btn").forEach((item) => item.classList.toggle("is-selected", item === btn));
      checkCurrentCard();
    });
  });
  els.practiceList.querySelector(".input-quiz input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkCurrentCard();
  });
  els.practiceList.querySelector(".hint-btn")?.addEventListener("click", (event) => {
    const hint = event.currentTarget.closest(".input-quiz")?.querySelector(".hint-text");
    hint?.classList.toggle("is-visible");
  });
  els.practiceList.querySelector(".page-prev")?.addEventListener("click", () => changeMixedPage(-1));
  els.practiceList.querySelector(".page-next")?.addEventListener("click", () => {
    const unit = currentUnit();
    const count = buildMixedQuestions(unit).length;
    const page = state.mixedPage[unitKey(unit)] || 0;
    if (page >= count - 1) {
      showScorePage(unit);
    } else {
      changeMixedPage(1);
    }
  });
  els.practiceList.querySelector(".page-skip")?.addEventListener("click", skipCurrentPage);
  bindDragEvents();
}

function changeMixedPage(delta) {
  const unit = currentUnit();
  const count = buildMixedQuestions(unit).length;
  const key = unitKey(unit);
  state.mixedPage[key] = Math.max(0, Math.min(count - 1, (state.mixedPage[key] || 0) + delta));
  saveProgress();
  renderPractice(unit);
}

function unlockNext(card, ok) {
  if (!ok) return;
  const unit = currentUnit();
  const count = buildMixedQuestions(unit).length;
  const page = state.mixedPage[unitKey(unit)] || 0;
  setPageResult(unit, page, "correct");
  markPagePassed(unit, page, count);
  const next = card.querySelector(".page-next");
  if (next) next.disabled = false;
  renderUnitList();
  renderProgress();
}

function skipCurrentPage() {
  const unit = currentUnit();
  const count = buildMixedQuestions(unit).length;
  const page = state.mixedPage[unitKey(unit)] || 0;
  setPageResult(unit, page, "skipped");
  if (page >= count - 1) {
    showScorePage(unit);
  } else {
    state.mixedPage[unitKey(unit)] = page + 1;
    saveProgress();
    renderPractice(unit);
  }
}

function showScorePage(unit) {
  const results = getPageResults(unit);
  const total = results.length;
  const correct = results.filter((r) => r === "correct").length;
  const skipped = results.filter((r) => r === "skipped").length;
  const unanswered = results.filter((r) => r === null).length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const scoreClass = percentage >= 80 ? "score-great" : percentage >= 60 ? "score-good" : percentage >= 40 ? "score-ok" : "score-poor";
  const scoreMsg = percentage >= 80 ? "ยอดเยี่ยม!" : percentage >= 60 ? "ทำได้ดี!" : percentage >= 40 ? "พยายามอีกนิด" : "ลองฝึกอีกครั้ง";

  els.views.practice.classList.add("is-score");
  els.practiceList.innerHTML = "";

  const card = document.createElement("article");
  card.className = "practice-card score-card is-wide";
  card.innerHTML = `
    <div class="score-header">
      <h3>ผลการฝึกหัด บทที่ ${unit.id}</h3>
      <p class="score-subtitle">${escapeHtml(unit.thaiTitle)} — ${escapeHtml(scoreMsg)}</p>
    </div>
    <div class="score-circle-wrap">
      <div class="score-percent-box ${escapeHtml(scoreClass)}">
        <span class="score-pct">${percentage}%</span>
        <span class="score-pct-label">คะแนน</span>
      </div>
    </div>
    <div class="score-stats">
      <div class="score-stat correct">
        <span class="score-num">${correct}</span>
        <span class="score-lbl">ตอบถูก</span>
      </div>
      <div class="score-stat skipped">
        <span class="score-num">${skipped}</span>
        <span class="score-lbl">ข้ามไป</span>
      </div>
      <div class="score-stat missed">
        <span class="score-num">${unanswered}</span>
        <span class="score-lbl">ยังไม่ตอบ</span>
      </div>
    </div>
    <div class="score-footer">
      <button class="secondary-btn score-retry" type="button">ฝึกอีกครั้ง</button>
      <button class="primary-btn score-next-unit" type="button">บทถัดไป ›</button>
    </div>
  `;
  els.practiceList.appendChild(card);

  card.querySelector(".score-retry").addEventListener("click", () => {
    state.sessionScore[unitKey(unit)] = null;
    state.mixedPage[unitKey(unit)] = 0;
    saveProgress();
    renderPractice(unit);
  });
  card.querySelector(".score-next-unit").addEventListener("click", () => {
    state.current = state.current === data.units.length ? 1 : state.current + 1;
    saveProgress();
    render();
  });
}

function checkCurrentCard() {
  const card = els.practiceList.querySelector(".practice-card[data-type]");
  if (!card) return false;
  if (card.dataset.type === "choice") return checkChoiceCard(card);
  if (card.dataset.type === "input") return checkInputCard(card);
  if (card.dataset.type === "drag") return checkDragCard(card);
  return false;
}

function checkChoiceCard(card) {
  const group = card.querySelector(".choice-options");
  const result = card.querySelector(".choice-result");
  const ok = optionMatches(group.dataset.selected, group.dataset.answer);
  result.textContent = ok ? "ถูก" : "ลองอีก";
  result.className = `result choice-result ${ok ? "ok" : "no"}`;
  unlockNext(card, ok);
  return ok;
}

function checkInputCard(card) {
  const input = card.querySelector("input");
  const result = card.querySelector(".quiz-result");
  const feedback = card.querySelector(".feedback-text");
  const check = exactInputResult(input.value, input.dataset.answer, input.dataset.mode, input.dataset.required, input.dataset.prompt, input.dataset.bucket);
  result.textContent = check.ok ? "ถูก" : "ลองอีก";
  result.className = `result quiz-result ${check.ok ? "ok" : "no"}`;
  if (feedback) {
    feedback.textContent = check.message;
    feedback.className = `feedback-text is-visible ${check.ok ? "ok" : "no"}`;
  }
  unlockNext(card, check.ok);
  return check.ok;
}

function tokenButton(token, id) {
  return `<button class="token" draggable="true" data-token-id="${id}" type="button">${escapeHtml(token)}</button>`;
}

function moveToken(token, targetZone) {
  targetZone.appendChild(token);
}

function bindDragEvents() {
  els.practiceList.querySelectorAll(".token").forEach((token) => {
    token.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", token.dataset.tokenId);
      token.classList.add("is-dragging");
    });
    token.addEventListener("dragend", () => token.classList.remove("is-dragging"));
    token.addEventListener("click", () => {
      const card = token.closest(".drag-card");
      const answerZone = card.querySelector(".drop-zone");
      const bank = card.querySelector(".token-bank");
      moveToken(token, token.parentElement === answerZone ? bank : answerZone);
      if (bank.querySelectorAll(".token").length === 0) checkCurrentCard();
    });
  });

  els.practiceList.querySelectorAll(".drop-zone, .token-bank").forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("is-over");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("is-over");
      const id = event.dataTransfer.getData("text/plain");
      const token = els.practiceList.querySelector(`[data-token-id="${CSS.escape(id)}"]`);
      if (token) {
        moveToken(token, zone);
        const dragCard = zone.closest(".drag-card");
        const bank = dragCard?.querySelector(".token-bank");
        if (bank && bank.querySelectorAll(".token").length === 0) checkCurrentCard();
      }
    });
  });
}

function checkDragCard(card) {
  const answer = normalize(card.dataset.answer);
  const current = [...card.querySelectorAll(".drop-zone .token")].map((token) => token.textContent).join("");
  const ok = normalize(current) === answer;
  const result = card.querySelector(".drag-result");
  result.textContent = ok ? "ถูก" : "ลองอีก";
  result.className = `drag-result quiz-result ${ok ? "ok" : "no"}`;
  unlockNext(card, ok);
  return ok;
}

function resetCurrentQuestion() {
  const card = els.practiceList.querySelector(".practice-card[data-type]");
  if (!card) return;
  card.querySelector("input")?.replaceChildren();
  const input = card.querySelector("input");
  if (input) input.value = "";
  const choiceGroup = card.querySelector(".choice-options");
  if (choiceGroup) {
    choiceGroup.dataset.selected = "";
    choiceGroup.querySelectorAll(".choice-btn").forEach((btn) => btn.classList.remove("is-selected"));
  }
  if (card.classList.contains("drag-card")) {
    const bank = card.querySelector(".token-bank");
    card.querySelectorAll(".drop-zone .token").forEach((token) => bank.appendChild(token));
  }
  card.querySelectorAll(".result, .drag-result").forEach((result) => {
    result.textContent = "";
    if (result.classList.contains("choice-result")) result.className = "result choice-result";
    else if (result.classList.contains("drag-result")) result.className = "drag-result quiz-result";
    else result.className = "result quiz-result";
  });
  card.querySelectorAll(".feedback-text, .hint-text").forEach((item) => {
    item.textContent = item.classList.contains("hint-text") ? item.textContent : "";
    item.classList.remove("is-visible", "ok", "no");
  });
}

function setView(view) {
  state.view = view;
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  Object.entries(els.views).forEach(([key, element]) => element.classList.toggle("is-active", key === view));
}

function render() {
  const unit = currentUnit();
  renderUnitList();
  renderProgress();
  renderVocab(unit);
  renderPractice(unit);
}

els.tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
els.searchInput.addEventListener("input", renderUnitList);
els.unitSelect.addEventListener("change", () => {
  const nextUnit = Number(els.unitSelect.value);
  if (!nextUnit) return;
  state.current = nextUnit;
  saveProgress();
  render();
});
els.checkBtn.addEventListener("click", checkCurrentCard);
els.showAnswersBtn.addEventListener("click", () => {
  els.practiceList.querySelectorAll(".answer").forEach((answer) => answer.classList.toggle("is-visible"));
});
els.resetBtn.addEventListener("click", resetCurrentQuestion);
els.markDoneBtn.addEventListener("click", () => {
  if (state.done.has(state.current)) {
    state.done.delete(state.current);
  } else {
    state.done.add(state.current);
  }
  saveProgress();
  renderUnitList();
  renderProgress();
});
els.prevBtn.addEventListener("click", () => {
  state.current = state.current === 1 ? data.units.length : state.current - 1;
  saveProgress();
  render();
});
els.nextBtn.addEventListener("click", () => {
  state.current = state.current === data.units.length ? 1 : state.current + 1;
  saveProgress();
  render();
});

render();
