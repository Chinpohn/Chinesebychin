const data = window.GRAMMAR_APP_DATA;
const PROMPTS_PER_TYPE = 8;
const MIN_PROMPTS_PER_UNIT = 30;
const TRANSLATION_TASK_TYPES = new Set([
  "แปลเป็นภาษาจีน",
  "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
]);
const urlParams = new URLSearchParams(window.location.search);
const requestedView = urlParams.get("view");
const initialView = ["vocab", "practice"].includes(requestedView) ? requestedView : "practice";
const requestedHsk = urlParams.get("hsk");

const state = {
  current: Number(localStorage.getItem("grammarApp.current") || 1),
  view: initialView,
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
    wordbank: document.querySelector("#wordbankView"),
    checkin: document.querySelector("#checkinView"),
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
  wordSearchInput: document.querySelector("#wordSearchInput"),
  wordbankLanding: document.querySelector("#wordbankLanding"),
  wordbankStudy: document.querySelector("#wordbankStudy"),
  wordbankBackBtn: document.querySelector("#wordbankBackBtn"),
  wordbankSubtitle: document.querySelector("#wordbankSubtitle"),
  wordbankList: document.querySelector("#wordbankList"),
  wordDetail: document.querySelector("#wordDetail"),
  dailyWordStatus: document.querySelector("#dailyWordStatus"),
  dailyQuiz: document.querySelector("#dailyQuiz"),
  levelBtns: [...document.querySelectorAll(".level-btn")],
  checkinSubtitle: document.querySelector("#checkinSubtitle"),
  checkinToday: document.querySelector("#checkinToday"),
  checkinStreak: document.querySelector("#checkinStreak"),
  checkinMonthTitle: document.querySelector("#checkinMonthTitle"),
  prevCheckinMonthBtn: document.querySelector("#prevCheckinMonthBtn"),
  nextCheckinMonthBtn: document.querySelector("#nextCheckinMonthBtn"),
  checkinGrid: document.querySelector("#checkinGrid"),
  checkBtn: document.querySelector("#checkBtn"),
  showAnswersBtn: document.querySelector("#showAnswersBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  markDoneBtn: document.querySelector("#markDoneBtn"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
};

let activeWordLevel = ["1", "2"].includes(requestedHsk) ? requestedHsk : "";
let selectedWord = null;
let dailyQueue = [];
let activeQuiz = null;

const MEMORY_INTERVALS = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30];
const DAILY_WORD_LIMIT = 10;
const CHECKIN_CALENDAR_YEAR = 2026;
const CHECKIN_MONTHS = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
];
const CHECKIN_WEEKDAYS = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
const currentDate = new Date();
let checkinMonthIndex = currentDate.getFullYear() === CHECKIN_CALENDAR_YEAR ? currentDate.getMonth() : 0;
const EXTRA_TOKEN_WORDS = [
  "干净", "好喝", "认真", "慢慢", "高高兴兴", "越来越", "一点也不", "新鲜",
  "热闹", "安静", "漂亮", "舒服", "方便", "清楚", "明白", "马上",
  "音乐", "作业", "周末", "回答", "聊天", "北京", "公园", "黑板", "灯",
  "练习", "有趣", "困难", "带", "放", "记住", "除了", "被", "把", "可以",
  "又", "才", "向", "如果", "以后", "难", "杯", "没", "兴趣", "写信",
  "记笔记", "笔记", "以外", "越", "越看越", "越说越", "越忙越", "越想越", "越学越",
];

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
    return { ok: false, message: "คำตอบนี้ต้องใช้ตัวอักษรจีน ลองดูเฉลยก่อนตอบอีกครั้ง" };
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

function isChineseText(text) {
  return chineseChars(text).length > 0;
}

function tokenSourceText(text) {
  return String(text || "")
    .replace(/^答案示例：/, "")
    .replace(/^ตัวอย่างคำตอบ[:：]\s*/, "")
    .replace(/[，。？！、,.?!]/g, "")
    .trim();
}

function displayAnswer(answer) {
  return String(answer || "")
    .replace(/^答案示例：/, "ตัวอย่างคำตอบ: ")
    .replace(/^ตัวอย่างคำตอบ[:：]\s*/, "ตัวอย่างคำตอบ: ");
}

function uniqueItems(items) {
  return [...new Set(items.filter(Boolean))];
}

function compactItems(items) {
  return items.filter(Boolean);
}

function answerTokens(answer, unit) {
  const source = tokenSourceText(answer);
  if (!source) return [];

  if (!isChineseText(source)) {
    return compactItems(source.split(/\s+/).map((part) => part.trim()));
  }

  const words = [...EXTRA_TOKEN_WORDS, ...(unit.words || []), ...(unit.vocab || []).map((entry) => entry.word)]
    .concat((data.hskWords || []).map((entry) => entry.word))
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  const tokens = [];
  let index = 0;

  while (index < source.length) {
    const matched = words.find((word) => source.startsWith(word, index));
    if (matched) {
      tokens.push(matched);
      index += matched.length;
    } else {
      tokens.push(source[index]);
      index += 1;
    }
  }

  return compactItems(tokens);
}

function pinyinForAnswer(answer, unit) {
  const source = tokenSourceText(answer);
  const tokens = answerTokens(source, unit);
  const pinyinMap = new Map();
  [...(data.hskWords || []), ...(unit.vocab || [])].forEach((entry) => {
    if (entry.word) pinyinMap.set(entry.word, pinyinDisplay(entry.pinyin || entry.tone || ""));
  });
  Object.entries({
    的: "de",
    得: "de",
    地: "de",
    干净: "gān jìng",
    好喝: "hǎo hē",
    认真: "rèn zhēn",
    慢慢: "màn màn",
    高高兴兴: "gāo gāo xìng xìng",
    越来越: "yuè lái yuè",
    一点也不: "yì diǎn yě bù",
    新鲜: "xīn xiān",
    热闹: "rè nao",
    安静: "ān jìng",
    方便: "fāng biàn",
    清楚: "qīng chu",
    明白: "míng bai",
    马上: "mǎ shàng",
    音乐: "yīn yuè",
    作业: "zuò yè",
    周末: "zhōu mò",
    回答: "huí dá",
    聊天: "liáo tiān",
    北京: "běi jīng",
    公园: "gōng yuán",
    黑板: "hēi bǎn",
    练习: "liàn xí",
    有趣: "yǒu qù",
    困难: "kùn nan",
    带: "dài",
    放: "fàng",
    灯: "dēng",
    记住: "jì zhù",
    除了: "chú le",
    难: "nán",
    杯: "bēi",
    没: "méi",
    兴趣: "xìng qù",
    写信: "xiě xìn",
    记笔记: "jì bǐ jì",
    笔记: "bǐ jì",
    以外: "yǐ wài",
    越: "yuè",
    越看越: "yuè kàn yuè",
    越说越: "yuè shuō yuè",
    越忙越: "yuè máng yuè",
    越想越: "yuè xiǎng yuè",
    越学越: "yuè xué yuè",
    被: "bèi",
    把: "bǎ",
    又: "yòu",
    才: "cái",
    向: "xiàng",
    如果: "rú guǒ",
    以后: "yǐ hòu",
  }).forEach(([word, pinyin]) => pinyinMap.set(word, pinyin));
  return tokens.map((token) => pinyinMap.get(token) || token).join(" ").replace(/\s+/g, " ").trim();
}

function shuffleTokens(tokens, seed) {
  const shuffled = tokens.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = (seed.charCodeAt(index % seed.length) + index) % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function asDragQuestion(unit, item, title) {
  const tokens = answerTokens(item.answer, unit);
  if (!tokens.length) return null;
  return {
    ...item,
    prompt: dragPromptText(item.prompt),
    kind: "drag",
    title,
    tokens: shuffleTokens(tokens, `${unit.id}${item.prompt}${item.answer}`),
  };
}

function dragPromptText(prompt) {
  return String(prompt || "")
    .replaceAll("พิมพ์", "ลาก")
    .replaceAll("เขียน", "เรียง")
    .replaceAll("เขียนตัวจีน", "เรียงตัวจีน");
}

function dragTitleForTask(taskType) {
  if (TRANSLATION_TASK_TYPES.has(taskType)) return "ลากแปลเป็นภาษาจีน";
  if (taskType === "อ่านพินอินแล้วเขียนตัวจีน") return "ลากคำจีนจากพินอิน";
  if (taskType === "เติมคำลงในช่องว่าง") return "ลากเติมคำ";
  return "ลากเรียงคำตอบ";
}

function derivedDragQuestions(unit) {
  const fromExamples = (unit.examples || []).map((example, index) => asDragQuestion(unit, {
    prompt: `เรียงประโยคจีนจากคำแปลไทย: ${example.thai}`,
    answer: example.zh,
  }, "ลากเรียงประโยค"));

  return fromExamples.filter(Boolean);
}

function supplementalReviewQuestions(unit, existingQuestions) {
  const used = new Set(existingQuestions.map(signature));
  const fallbackSentences = [
    "老师学习中文。",
    "朋友喝咖啡。",
    "同学写作业。",
    "妈妈看电影。",
    "我们去公园。",
    "他听音乐。",
    "今天老师很忙。",
    "周末朋友来我家。",
    "学生在教室学习。",
    "我和朋友一起练习。",
  ];
  const candidates = [
    ...(unit.dragTasks || []).map((item) => item.answer),
    ...(unit.examples || []).map((example) => example.zh),
    ...(unit.tasks || []).flatMap((task) => (task.prompts || []).map((item) => item.answer)),
    ...fallbackSentences,
  ];

  return mergeUniqueQuestions(candidates
    .filter((answer) => isChineseText(answer) && chineseChars(answer).length > 2)
    .map((answer, index) => asDragQuestion(unit, {
      prompt: `เรียงประโยคจีนเพิ่มเติม (${index + 1})`,
      answer,
    }, "ลากทบทวนประโยค"))
    .filter((question) => question && !used.has(signature(question))));
}

function mergeUniqueQuestions(questions) {
  const seen = new Set();
  return questions.filter((question) => {
    const key = `${normalize(question.prompt)}|${signature(question)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
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
        <small>${escapeHtml(unit.thai)}</small>
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
        ${unit.id}. ${escapeHtml(unit.thaiTitle)}
      </option>
    `).join("")
    : `<option value="">ไม่พบบทเรียน</option>`;
  els.unitSelect.disabled = units.length === 0;
}

function addBucket(buckets, id, title, questions) {
  if (!questions.length) return;
  buckets.push({ id, title, questions: questions.slice(0, PROMPTS_PER_TYPE) });
}

function importedExerciseQuestions(unit) {
  const rows = data.exerciseRows?.[String(unit.id)];
  if (!Array.isArray(rows) || !rows.length) return null;
  return rows.map((row) => {
    if (row.kind === "choice") {
      return {
        kind: "choice",
        title: row.title || "เลือกคำตอบ",
        bucket: row.bucket || "choice",
        prompt: row.prompt || "",
        answer: row.answer || row.answerThai || row.expectedAnswer || "",
        options: row.options || [],
        importNo: row.no,
      };
    }
    const answer = row.answer || row.answerChinese || "";
    const tokens = Array.isArray(row.tokens) && row.tokens.length ? row.tokens : answerTokens(answer, unit);
    const prompt = row.bucket === "อ่านพินอินแล้วเขียนตัวจีน" && row.answerPinyin
      ? `อ่านพินอินแล้วเรียงคำจีน: ${row.answerPinyin}`
      : (row.prompt || "");
    return {
      kind: "drag",
      title: row.title || dragTitleForTask(row.bucket || ""),
      bucket: row.bucket || "imported-drag",
      prompt,
      answer,
      tokens,
      importNo: row.no,
      answerPinyin: row.answerPinyin || "",
      thaiHint: row.thaiHint || "",
    };
  });
}

function buildMixedQuestions(unit) {
  const imported = importedExerciseQuestions(unit);
  if (imported) return imported;

  const buckets = [];
  const choiceQuestions = unit.tasks
    .flatMap((task) => task.prompts.filter((item) => item.mode === "choice"))
    .map((item) => ({ ...item, kind: "choice", title: "เลือกคำตอบ" }));
  addBucket(buckets, "choice", "เลือกคำตอบ", choiceQuestions);

  addBucket(
    buckets,
    "drag",
    "ลากเรียงประโยค",
    mergeUniqueQuestions([
      ...unit.dragTasks.map((item) => asDragQuestion(unit, item, "ลากเรียงประโยค")),
      ...derivedDragQuestions(unit),
    ].filter(Boolean))
  );

  unit.tasks.forEach((task) => {
    if (task.type === "เลือกคำตอบ" || task.type === "แต่งประโยคเพิ่ม" || task.type === "เรียงคำให้เป็นประโยคจีน" || task.type === "จำคำสำคัญ") return;
    const bucketId = TRANSLATION_TASK_TYPES.has(task.type) ? "translation-drag" : task.type;
    const title = dragTitleForTask(task.type);
    const prompts = task.type === "อ่านพินอินแล้วเขียนตัวจีน"
      ? task.prompts.map((item) => ({ ...item, prompt: `อ่านพินอินแล้วเรียงคำจีน: ${pinyinForAnswer(item.answer, unit)}` }))
      : task.prompts;
    addBucket(
      buckets,
      bucketId,
      title,
      mergeUniqueQuestions(prompts.map((item) => asDragQuestion(unit, item, title)).filter(Boolean))
    );
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

  if (ordered.length < MIN_PROMPTS_PER_UNIT) {
    supplementalReviewQuestions(unit, ordered)
      .slice(0, MIN_PROMPTS_PER_UNIT - ordered.length)
      .forEach((question) => ordered.push({ ...question, bucket: "supplemental-review" }));
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
  els.unitChineseTitle.textContent = unit.thaiExplanation || unit.thai || "";
  els.practiceSubtitle.textContent = `รวมทุกประเภทเป็นชุดเดียว ${questions.length} ข้อ สลับโจทย์ไม่ให้จำแบบเดิม`;
  els.wordChips.innerHTML = unit.words.map((word) => `<span class="chip">${escapeHtml(word)}</span>`).join("");
  els.practiceList.innerHTML = "";

  if (item?.kind === "choice") renderChoiceQuestion(unit, item, page, questions.length, passed);
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
    <div class="choice-question"><span>โจทย์</span><p>${escapeHtml(item.prompt)}</p></div>
    <span class="practice-options-label">เลือกคำตอบ</span>
    <div class="choice-options choice-options-stacked" data-answer="${escapeHtml(item.answer)}" data-selected="">${options}</div>
    <p class="answer choice-answer">เฉลย: ${escapeHtml(displayAnswer(item.answer))}</p>
    ${pagerHtml(page, count, passed)}
  `;
  els.practiceList.appendChild(card);
}

function renderDragQuestion(unit, item, page, count, passed) {
  const tokenHtml = item.tokens.map((token, tokenIndex) => tokenButton(token, `${unit.id}-${page}-${tokenIndex}`)).join("");
  const card = document.createElement("article");
  card.className = "practice-card choice-quiz drag-card is-wide";
  card.dataset.type = "drag";
  card.dataset.answer = item.answer;
  card.innerHTML = `
    ${cardTop(item.title, page, count, "drag-result quiz-result")}
    <div class="choice-question"><span>โจทย์</span><p>${escapeHtml(item.prompt)}</p></div>
    <p class="drag-hint">แตะหรือจับลากจากคลังคำลงในช่องคำตอบ</p>
    <span class="practice-options-label">คลังคำตอบ</span>
    <div class="drop-zone" data-role="answer" aria-label="พื้นที่คำตอบ"></div>
    <div class="token-bank" data-role="bank">${tokenHtml}</div>
    <p class="answer drag-answer">เฉลย: ${escapeHtml(displayAnswer(item.answer))}</p>
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

function allHskWords() {
  if (data.hskWords?.length) return data.hskWords;
  return data.units.flatMap((unit) => unit.vocab || []);
}

function wordsForLevel(level = activeWordLevel) {
  const words = allHskWords();
  if (!level) return words;
  return words.filter((entry) => String(entry.level || "").startsWith(String(level)));
}

function pinyinDisplay(pinyin) {
  const text = String(pinyin || "").trim();
  if (!text || /\s|[.,!?;:，。？！；：]/.test(text)) return text.replace(/\s+/g, " ");

  const initials = ["zh", "ch", "sh", "b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "z", "c", "s", "r", "y", "w", ""];
  const finals = [
    "iang", "iong", "uang", "uai", "iao", "ian", "ing", "ong", "ang", "eng",
    "uan", "uen", "uei", "ua", "uo", "ue", "ui", "un", "uo", "ou", "iu",
    "ie", "ve", "ai", "ei", "ao", "an", "en", "in", "ia", "io", "er",
    "a", "o", "e", "i", "u", "v", "m", "n", "ng",
  ];
  const valid = new Set();
  initials.forEach((initial) => finals.forEach((final) => valid.add(`${initial}${final}`)));
  const plain = text
    .toLowerCase()
    .replace(/[āáǎà]/g, "a")
    .replace(/[ēéěè]/g, "e")
    .replace(/[īíǐì]/g, "i")
    .replace(/[ōóǒò]/g, "o")
    .replace(/[ūúǔù]/g, "u")
    .replace(/[ǖǘǚǜü]/g, "v");

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
  if (!activeWordLevel) return [];
  const today = todayKey();
  const progress = wordProgress();
  const words = wordsForLevel();
  const due = words.filter((entry) => {
    const item = progress[entry.word];
    if (item?.learned) return false;
    return !item?.due || item.due <= today;
  });
  return due.slice(0, DAILY_WORD_LIMIT);
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
  if (Array.isArray(entry.examples) && entry.examples.length) {
    return entry.examples[index % entry.examples.length];
  }
  const word = entry.word;
  const fixed = {
    爸爸: ["爸爸在家喝茶。", "我爸爸今天很忙。"],
    妈妈: ["妈妈在超市买菜。", "我妈妈喜欢喝茶。"],
    老师: ["老师教我们汉语。", "老师在教室里。"],
    学生: ["学生在学校学习。", "学生写汉字。"],
    朋友: ["我和朋友一起学习。", "朋友喜欢看电影。"],
    爱: ["我爱我的家。", "妈妈爱我。"],
    喜欢: ["我喜欢中文。", "他喜欢喝咖啡。"],
    喝: ["我喝茶。", "爸爸喝咖啡。"],
    吃: ["我吃米饭。", "他们吃包子。"],
    买: ["妈妈买苹果。", "我想买一本书。"],
    看: ["我看电视。", "朋友看电影。"],
    听: ["你听音乐。", "学生听老师说话。"],
    写: ["学生写汉字。", "我写名字。"],
    学习: ["我学习中文。", "学生在教室学习。"],
  };
  if (fixed[word]) return fixed[word][index % fixed[word].length];
  if (/动/.test(entry.pos || "")) return [`我想${word}。`, `老师教我们${word}。`][index % 2];
  if (/形/.test(entry.pos || "")) return [`这个很${word}。`, `今天有点儿${word}。`][index % 2];
  if (/副/.test(entry.pos || "")) return [`我${word}想学习中文。`, `他${word}在学校。`][index % 2];
  if (/量/.test(entry.pos || "")) return [`我有一${word}书。`, `他买了两${word}本子。`][index % 2];
  if (/数/.test(entry.pos || "")) return [`我有${word}个朋友。`, `今天是${word}月。`][index % 2];
  return [`我学习“${word}”这个词。`, `请记住“${word}”的拼音。`][index % 2];
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
  if (!els.wordDetail) return;
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
      mode: "pinyin",
      prompt: `พินอินของคำนี้คือข้อใด: ${entry.word}`,
      answer: pinyinDisplay(entry.pinyin || entry.tone),
      options: quizOptions(pinyinDisplay(entry.pinyin || entry.tone), words.map((word) => pinyinDisplay(word.pinyin || word.tone))),
    };
  }
  if (mode === 1) {
    return {
      mode: "meaning",
      prompt: `ความหมายภาษาไทยของคำนี้คือข้อใด: ${entry.word}`,
      answer: wordMeanings(entry)[0],
      options: quizOptions(wordMeanings(entry)[0], words.map((word) => wordMeanings(word)[0])),
    };
  }
  return {
    mode: "hanzi",
    prompt: `ตัวอักษรจีนข้อใดมีความหมายว่า: ${wordMeanings(entry)[0]}`,
    answer: entry.word,
    options: quizOptions(entry.word, words.map((word) => word.word)),
  };
}

function renderDailyQuiz() {
  if (!els.dailyQuiz) return;
  if (!activeWordLevel) {
    activeQuiz = null;
    dailyQueue = [];
    if (els.dailyWordStatus) els.dailyWordStatus.textContent = "";
    els.dailyQuiz.innerHTML = "";
    return;
  }
  dailyQueue = dueWords();
  const progress = wordProgress();
  const learnedCount = Object.values(progress).filter((item) => item.learned).length;
  if (els.dailyWordStatus) {
    els.dailyWordStatus.textContent = `วันนี้ต้องทบทวน ${dailyQueue.length} คำ เรียนจบแล้ว ${learnedCount} คำ ต้องตอบถูกครบ 10 รอบตามวันที่กำหนดจึงถือว่าจำได้`;
  }
  if (!dailyQueue.length) {
    markTodayChecked(true);
    els.dailyQuiz.innerHTML = `<div class="daily-finished"><strong>วันนี้ท่องคำศัพท์ครบแล้ว</strong><span>ระบบเช็กอินให้อัตโนมัติแล้ว</span></div>`;
    return;
  }
  const entry = dailyQueue[0];
  activeQuiz = { entry, ...buildQuiz(entry) };
  const stats = memoryStats(entry, progress);
  const revealWord = activeQuiz.mode !== "hanzi";
  const nextRound = Math.min(stats.stage + 1, MEMORY_INTERVALS.length);
  els.dailyQuiz.innerHTML = `
    <div class="daily-quiz-head">
      <div class="daily-stat-card">
        <span class="daily-label">รอบทบทวน</span>
        <strong>${escapeHtml(nextRound)} / ${MEMORY_INTERVALS.length}</strong>
        <small>${revealWord ? `${escapeHtml(entry.word)} · ${escapeHtml(pinyinDisplay(entry.pinyin || entry.tone))}` : "เลือกตัวอักษรจีนจากความหมาย"}</small>
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
  if (!activeQuiz) return;
  const progress = wordProgress();
  const current = progress[activeQuiz.entry.word] || { stage: 0 };
  const ok = normalize(answer) === normalize(activeQuiz.answer);
  const feedback = els.dailyQuiz?.querySelector(".daily-feedback");
  if (ok) {
    const nextStage = (current.stage || 0) + 1;
    progress[activeQuiz.entry.word] = {
      stage: nextStage,
      due: nextStage >= MEMORY_INTERVALS.length ? "" : addDays(todayKey(), MEMORY_INTERVALS[nextStage - 1]),
      learned: nextStage >= MEMORY_INTERVALS.length,
      updated: todayKey(),
    };
    if (feedback) {
      feedback.textContent = nextStage >= MEMORY_INTERVALS.length ? "ถูก จำคำนี้ครบ 10 รอบแล้ว" : "ถูก รอบต่อไปจะมาในวันที่กำหนด";
      feedback.className = "daily-feedback ok";
    }
  } else {
    progress[activeQuiz.entry.word] = { stage: 0, due: todayKey(), learned: false, updated: todayKey() };
    if (feedback) {
      feedback.textContent = `ผิด เริ่มนับคำนี้ใหม่ คำตอบคือ ${activeQuiz.answer}`;
      feedback.className = "daily-feedback no";
    }
  }
  saveWordProgress(progress);
  window.setTimeout(() => {
    renderDailyQuiz();
    renderWordBank();
  }, 850);
}

function renderWordBank() {
  if (!activeWordLevel) {
    activeQuiz = null;
    selectedWord = null;
    els.wordbankLanding?.classList.remove("is-hidden");
    els.wordbankStudy?.classList.add("is-hidden");
    if (els.wordbankSubtitle) els.wordbankSubtitle.textContent = "เลือก HSK 1 หรือ HSK 2 จากหน้าหลักเพื่อเริ่มท่องคำศัพท์";
    if (els.dailyWordStatus) els.dailyWordStatus.textContent = "";
    if (els.dailyQuiz) els.dailyQuiz.innerHTML = "";
    if (els.wordDetail) {
      els.wordDetail.className = "word-detail is-empty";
      els.wordDetail.innerHTML = "";
    }
    if (els.wordbankList) els.wordbankList.innerHTML = "";
    return;
  }
  els.wordbankLanding?.classList.add("is-hidden");
  els.wordbankStudy?.classList.remove("is-hidden");
  const words = wordsForLevel();
  const progress = wordProgress();
  const query = normalize(els.wordSearchInput?.value || "");
  const filtered = words.filter((entry) => {
    const exampleText = Array.isArray(entry.examples) ? entry.examples.map((item) => `${item.zh || ""}${item.pinyin || ""}${item.thai || ""}`).join("") : "";
    const haystack = normalize(`${entry.word}${entry.pinyin}${entry.tone}${entry.thai}${entry.pos}${entry.usage || ""}${entry.note || ""}${exampleText}HSK${entry.level}`);
    return haystack.includes(query);
  });

  if (els.wordbankSubtitle) {
    const learnedCount = words.filter((entry) => memoryStats(entry, progress).learned).length;
    const overallPercent = Math.round(words.reduce((sum, entry) => sum + memoryStats(entry, progress).percent, 0) / Math.max(1, words.length));
    els.wordbankSubtitle.textContent = `HSK ${activeWordLevel}: ทั้งหมด ${words.length} คำ แสดง ${filtered.length} คำ ความคืบหน้าเฉลี่ย ${overallPercent}% เหลืออีก ${100 - overallPercent}% จำได้ครบแล้ว ${learnedCount} คำ`;
  }
  if (!els.wordbankList) return;
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

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

  if (els.checkinToday) els.checkinToday.textContent = today;
  if (els.checkinStreak) els.checkinStreak.textContent = `${streak} วัน`;
  if (els.checkinSubtitle) {
    els.checkinSubtitle.textContent = checkedToday
      ? "วันนี้เช็กอินแล้ว รักษาจังหวะเรียนต่อเนื่องไว้ให้ดี"
      : "เรียนคำศัพท์ประจำวันให้ครบ ระบบจะบันทึกเช็กอินให้อัตโนมัติ";
  }
  if (!els.checkinGrid) return;
  const monthName = CHECKIN_MONTHS[checkinMonthIndex];
  const firstDay = new Date(CHECKIN_CALENDAR_YEAR, checkinMonthIndex, 1).getDay();
  const daysInMonth = new Date(CHECKIN_CALENDAR_YEAR, checkinMonthIndex + 1, 0).getDate();
  const blanks = Array.from({ length: firstDay }, () => `<span class="calendar-day is-empty" aria-hidden="true"></span>`).join("");
  const dayCells = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const key = `${CHECKIN_CALENDAR_YEAR}-${String(checkinMonthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const className = [
      "calendar-day",
      days.has(key) ? "is-done" : "",
      key === today ? "is-today" : "",
    ].filter(Boolean).join(" ");
    const label = days.has(key) ? "เช็กอินแล้ว" : "ยังไม่เช็กอิน";
    return `<span class="${className}" aria-label="${escapeHtml(`${day} ${monthName} ${CHECKIN_CALENDAR_YEAR} ${label}`)}">${day}</span>`;
  }).join("");
  if (els.checkinMonthTitle) els.checkinMonthTitle.textContent = `${monthName} ${CHECKIN_CALENDAR_YEAR}`;
  if (els.prevCheckinMonthBtn) els.prevCheckinMonthBtn.disabled = checkinMonthIndex === 0;
  if (els.nextCheckinMonthBtn) els.nextCheckinMonthBtn.disabled = checkinMonthIndex === 11;
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

function bindCurrentQuestion() {
  els.practiceList.querySelectorAll(".choice-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".choice-options");
      group.dataset.selected = btn.dataset.value;
      group.querySelectorAll(".choice-btn").forEach((item) => item.classList.toggle("is-selected", item === btn));
      checkCurrentCard();
    });
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

  if (card.dataset.autoAdvance === "true") return;
  card.dataset.autoAdvance = "true";
  window.setTimeout(() => {
    const currentCard = els.practiceList.querySelector(".practice-card[data-type]");
    if (currentCard !== card) return;
    if (page >= count - 1) showScorePage(unit);
    else changeMixedPage(1);
  }, 650);
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
  renderWordBank();
  renderDailyQuiz();
  renderCheckin();
  renderPractice(unit);
  setView(state.view);
}

els.tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
els.searchInput.addEventListener("input", renderUnitList);
els.wordSearchInput?.addEventListener("input", renderWordBank);
els.wordbankBackBtn?.addEventListener("click", () => {
  activeWordLevel = "";
  selectedWord = null;
  activeQuiz = null;
  renderWordBank();
});
els.prevCheckinMonthBtn?.addEventListener("click", () => {
  checkinMonthIndex = Math.max(0, checkinMonthIndex - 1);
  renderCheckin();
});
els.nextCheckinMonthBtn?.addEventListener("click", () => {
  checkinMonthIndex = Math.min(11, checkinMonthIndex + 1);
  renderCheckin();
});
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
