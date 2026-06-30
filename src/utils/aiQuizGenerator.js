import { subjectMetaMap } from "../data/subjectsMeta";
import { fetchAiStatus, proxyGeminiGenerate, proxyNvidiaChat } from "./aiApiClient";
import {
  getTopicWeights,
  getExamModePreview,
  getExamModeChapterTitles,
  getDifficultyMixPreview,
  DIFFICULTY_LABELS,
  normalizeDifficultyMode,
} from "../data/examWeights";
import {
  bankEntryToQuizQuestion,
  pickFromPools,
  pickWeighted,
  queryBank,
} from "./quizBank";
import { QuestionDedupeTracker, dedupeQuestions } from "./quizDedup";
import { simplifyLatexText } from "./latexSimplify";
import { readQuizHistory } from "./quizGeneratorStorage";

const EXAM_RATIO = 0.15;
const GENERATED_RATIO = 0.7;
const AI_RATIO = 0.15;

const NVIDIA_FALLBACK_MODELS = [
  { id: "deepseek-v4-flash", apiId: "deepseek-ai/deepseek-v4-flash", name: "DeepSeek V4 Flash" },
  { id: "qwen3.5-122b", apiId: "qwen/qwen3.5-122b-a10b", name: "Qwen 3.5 122B" },
  { id: "nemotron-super", apiId: "nvidia/nemotron-3-super-120b-a12b", name: "Nemotron Super 120B" },
  { id: "minimax-m3", apiId: "minimaxai/minimax-m3", name: "MiniMax M3" },
];

const DIFFICULTY_GUIDE = {
  easy: "ง่าย — ปนกันแต่ส่วนใหญ่ง่าย (~70% ง่าย · 25% ปานกลาง · 5% ยาก)",
  normal: "ปกติ — กระจายเหมือนข้อสอบจริง (~30% ง่าย · 40% ปานกลาง · 30% ยาก)",
  hard: "ยาก — ส่วนใหญ่ยากแต่ไม่ทั้งหมด (~10% ง่าย · 30% ปานกลาง · 60% ยาก)",
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resolveQuestionType(format) {
  if (format === "multiple-choice") return "multiple-choice";
  return "open-ended";
}

function seedTrackerFromRecentHistory(subjectId, topicTitles = []) {
  const tracker = new QuestionDedupeTracker();
  const history = readQuizHistory().slice(0, 5);

  for (const quiz of history) {
    if (quiz.subjectId !== subjectId) continue;
    const topics = quiz.topics ?? [];
    const overlap =
      !topicTitles.length || !topics.length || topics.some((title) => topicTitles.includes(title));
    if (!overlap) continue;

    for (const question of quiz.questions ?? []) {
      tracker.add(question);
    }
  }

  return tracker;
}

function computePoolCounts(total) {
  const exam = Math.max(0, Math.round(total * EXAM_RATIO));
  const generated = Math.max(0, Math.round(total * GENERATED_RATIO));
  const ai = Math.max(0, total - exam - generated);
  return { exam, generated, ai };
}

function buildContext(subject, topicTitles) {
  const chapters = subject.chapters.filter((chapter) => topicTitles.includes(chapter.title));
  const sections = chapters.flatMap((chapter) =>
    (chapter.sections ?? []).slice(0, 2).map((section) => ({
      chapter: chapter.title,
      title: section.title,
      concept: section.concept?.slice(0, 200) ?? "",
      formula: section.formula ?? "",
    }))
  );
  return sections
    .slice(0, 8)
    .map((s) => `- ${s.chapter} > ${s.title}: ${s.concept}${s.formula ? ` (สูตร: $${s.formula}$)` : ""}`)
    .join("\n");
}

function buildPrompt({ subject, topicTitles, count, difficulty, format, examMode, excludeQuestions = [] }) {
  const type = resolveQuestionType(format);
  const context = buildContext(subject, topicTitles);
  const difficultyMode = normalizeDifficultyMode(difficulty);
  const examHint =
    examMode && examMode !== "all"
      ? `\nจำลองข้อสอบ${examMode === "midterm" ? "กลางภาค" : "ปลายภาค"}: ${getExamModePreview(subject.id, examMode)}\n`
      : "";
  const difficultyHint = `\nระดับความยากของชุด: ${DIFFICULTY_GUIDE[difficultyMode]} — ผสมโจทย์หลายระดับตามสัดส่วนนี้ ไม่ใช่ทุกข้อระดับเดียวกัน\n`;
  const excludeBlock =
    excludeQuestions.length > 0
      ? `\nห้ามซ้ำกับโจทย์เหล่านี้:\n${excludeQuestions.map((q) => `- ${q.slice(0, 120)}`).join("\n")}\n`
      : "";

  const formatGuide =
    format === "pdf"
      ? "PDF Export — ข้อเขียนทั้งหมด (open-ended) หลาย questionType ปนกันได้: calculation, proof, explain, apply"
      : format === "practice-card"
        ? "Practice Card — ข้อเขียน (open-ended) ไม่มีตัวเลือก"
        : "Multiple Choice — 4 ตัวเลือก A-D";

  return `คุณเป็นอาจารย์ผู้เชี่ยวชาญในการออกข้อสอบสำหรับนิสิตวิศวกรรมศาสตร์ปี 1 จุฬาลงกรณ์มหาวิทยาลัย

จงสร้างข้อสอบ ${count} ข้อ ตอบกลับเป็น JSON เท่านั้น ห้ามมีข้อความอื่น ห้ามใช้ markdown code block

วิชา: ${subject.title} (${subject.code})
หัวข้อ: ${topicTitles.join(", ")}
รูปแบบ: ${formatGuide}
${difficultyHint}${examHint}
เนื้อหาอ้างอิงจากหลักสูตร:
${context || "- ใช้ความรู้มาตรฐานของวิชานี้"}
${excludeBlock}
JSON schema:
{
  "questions": [
    {
      "id": 1,
      "topic": "ชื่อหัวข้อ",
      "difficulty": "easy|medium|hard",
      "questionType": "calculation|proof|explain|apply",
      "question": "คำถามภาษาไทย ใช้ $...$ สำหรับ inline math และ $$...$$ สำหรับ display math",
      "type": "${type}",
      "choices": ${type === "multiple-choice" ? '["A", "B", "C", "D"]' : "[]"},
      "correctAnswer": 0,
      "solution": "วิธีทำแบบละเอียดทีละขั้นตอน ภาษาไทย พร้อม LaTeX"
    }
  ]
}

กฎสำคัญ:
- ทุกสูตรและตัวแปรต้องอยู่ใน $...$ หรือ $$...$$
- choices ต้องมี 4 ตัวเลือกเมื่อ type เป็น multiple-choice
- correctAnswer เป็น index 0-3
- เมื่อ type เป็น open-ended ให้ choices เป็น [] และ correctAnswer เป็น 0
- questionType ต้องหลากหลายเมื่อเป็นข้อเขียน
- แต่ละข้อต้องมี difficulty เป็น easy, medium หรือ hard ให้สัดส่วนรวมใกล้เคียงที่กำหนด
- โจทย์แต่ละข้อต้องไม่ซ้ำกันและสอดคล้องหัวข้อที่เลือก
- คำตอบและเฉลยต้องคิดเลขให้จบ (เช่น $4^2=16$ ไม่ใช่ $4^2$) และเศษส่วนต้องอยู่ในรูปอย่างต่ำ
- solution ต้องอธิบายทีละขั้นตอน`;
}

function extractJson(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) throw new Error("Empty AI response");

  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) return fenced[1].trim();

  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) return trimmed.slice(start, end + 1);

  return trimmed;
}

function normalizeQuestion(raw, index, difficulty, format, sourceLabel = "AI") {
  const type = resolveQuestionType(format);
  const choices = Array.isArray(raw.choices) ? raw.choices.slice(0, 4) : [];
  while (choices.length < 4 && type === "multiple-choice") {
    choices.push(`ตัวเลือก ${String.fromCharCode(65 + choices.length)}`);
  }

  return {
    id: raw.id ?? index + 1,
    topic: raw.topic ?? "General",
    difficulty: raw.difficulty ?? difficulty,
    questionType: raw.questionType ?? "calculation",
    question: String(raw.question ?? ""),
    type: type === "open-ended" ? "open-ended" : raw.type ?? type,
    choices: type === "open-ended" ? [] : choices,
    correctAnswer: Number.isInteger(raw.correctAnswer) ? raw.correctAnswer : 0,
    solution: simplifyLatexText(String(raw.solution ?? "")),
    source: "ai",
    sourceLabel,
  };
}

function parseQuizResponse(text, settings, generatedBy, providerId, startIndex = 0) {
  const parsed = JSON.parse(extractJson(text));
  if (!Array.isArray(parsed?.questions) || parsed.questions.length === 0) {
    throw new Error("Invalid quiz JSON: missing questions array");
  }
  return parsed.questions.map((q, i) =>
    normalizeQuestion(q, startIndex + i, settings.difficulty, settings.format, generatedBy === "ฐานข้อมูล" ? "ฐานข้อมูล" : "AI")
  );
}

function wrapQuiz(settings, questions, meta = {}) {
  const difficultyMode = normalizeDifficultyMode(settings.difficulty);
  return {
    subject: settings.subject.title,
    subjectId: settings.subject.id,
    topics: settings.topicTitles,
    examMode: settings.examMode ?? "all",
    difficulty: difficultyMode,
    difficultyLabel: DIFFICULTY_LABELS[difficultyMode] ?? difficultyMode,
    format: settings.format,
    generatedAt: Date.now(),
    generatedBy: meta.generatedBy ?? "ผสม (คลัง + AI)",
    providerId: meta.providerId ?? "hybrid",
    examCount: meta.examCount ?? 0,
    generatedCount: meta.generatedCount ?? 0,
    aiCount: meta.aiCount ?? 0,
    localCount: meta.localCount ?? 0,
    questions: questions.map((q, i) => ({ ...q, id: i + 1 })),
  };
}

function isRetryableError(error) {
  const message = String(error?.message ?? error).toLowerCase();
  return (
    message.includes("503") ||
    message.includes("429") ||
    message.includes("unavailable") ||
    message.includes("overloaded") ||
    message.includes("high demand") ||
    message.includes("quota") ||
    message.includes("resource_exhausted") ||
    message.includes("rate limit") ||
    message.includes("timeout") ||
    message.includes("network")
  );
}

async function callGemini(prompt) {
  return proxyGeminiGenerate({
    prompt,
    model: "gemini-2.5-flash",
    responseMimeType: "application/json",
    temperature: 0.9,
  });
}

async function callNvidia(prompt, modelConfig) {
  const systemPrompt =
    `You are ${modelConfig.name}, an AI assistant on NVIDIA NIM. ` +
    "Return ONLY valid JSON. No markdown, no explanation outside JSON. " +
    "All math must use LaTeX in $...$ or $$...$$ delimiters.";

  return proxyNvidiaChat({
    model: modelConfig.id,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: prompt },
    ],
    temperature: 0.85,
    max_tokens: 8192,
    top_p: 0.9,
  });
}

async function generateWithAI(settings, count, onStatus, excludeQuestions = []) {
  const aiSettings = { ...settings, count };
  const prompt = buildPrompt({ ...aiSettings, excludeQuestions });
  const failures = [];
  const { gemini: hasGemini, nvidia: hasNvidia } = await fetchAiStatus();

  if (hasGemini) {
    onStatus?.(`AI สร้าง ${count} ข้อ unique ด้วย Gemini...`);
    try {
      const text = await callGemini(prompt);
      return parseQuizResponse(text, aiSettings, "Gemini 2.5 Flash", "gemini-flash");
    } catch (error) {
      failures.push(error.message);
      if (isRetryableError(error)) {
        await wait(1200);
        try {
          const text = await callGemini(prompt);
          return parseQuizResponse(text, aiSettings, "Gemini 2.5 Flash", "gemini-flash");
        } catch (retryError) {
          failures.push(retryError.message);
        }
      }
    }
  }

  if (hasNvidia) {
    for (const model of NVIDIA_FALLBACK_MODELS) {
      onStatus?.(`AI สลับไป ${model.name}...`);
      try {
        const text = await callNvidia(prompt, model);
        return parseQuizResponse(text, aiSettings, model.name, model.id);
      } catch (error) {
        failures.push(error.message);
        if (isRetryableError(error)) await wait(800);
      }
    }
  }

  if (!hasGemini && !hasNvidia) return [];
  throw new Error("AI ตอบไม่ได้ชั่วคราว");
}

async function fillFromBank(settings, count, tracker, onStatus) {
  const topicWeights = getTopicWeights(settings.subject.id, settings.examMode ?? "all");
  const pool = await queryBank({
    subjectId: settings.subject.id,
    topicTitles: settings.topicTitles,
    format: settings.format,
    examMode: settings.examMode ?? "all",
  });
  const picked = pickWeighted(pool, count, topicWeights, tracker, settings.difficulty);
  picked.forEach((entry) => tracker.add(entry));
  if (picked.length) onStatus?.(`เติมจากคลังเพิ่ม ${picked.length} ข้อ...`);
  return picked.map((entry, i) => bankEntryToQuizQuestion(entry, i));
}

export function hasQuizGenerator() {
  return true;
}

export async function generateQuiz(settings, onStatus) {
  const { count } = settings;
  const targets = computePoolCounts(count);
  const tracker = seedTrackerFromRecentHistory(settings.subject.id, settings.topicTitles);

  const { entries, breakdown } = await pickFromPools(settings, targets, tracker, onStatus);
  entries.forEach((entry) => tracker.add(entry));

  let bankQuestions = entries.map((entry, i) => bankEntryToQuizQuestion(entry, i));
  const { unique: uniqueBank, tracker: bankTracker } = dedupeQuestions(bankQuestions);
  bankQuestions = uniqueBank;
  bankTracker.ids.forEach((id) => tracker.ids.add(id));
  bankTracker.fingerprints.forEach((fp) => tracker.fingerprints.add(fp));

  let aiNeeded = count - bankQuestions.length;

  if (aiNeeded > 0 && targets.ai > 0) {
    try {
      const aiQuestions = await generateWithAI(
        settings,
        aiNeeded,
        onStatus,
        tracker.excludeQuestionTexts(20)
      );
      const { unique: uniqueAi } = dedupeQuestions(aiQuestions);
      const freshAi = uniqueAi.filter((q) => !tracker.has(q));
      freshAi.forEach((q) => tracker.add(q));
      bankQuestions = [...bankQuestions, ...freshAi];

      const stillNeeded = count - bankQuestions.length;
      if (stillNeeded > 0) {
        onStatus?.(`กรองโจทย์ซ้ำจาก AI — เติมจากคลัง ${stillNeeded} ข้อ...`);
        const fallbackAi = await fillFromBank(settings, stillNeeded, tracker, onStatus);
        bankQuestions = [...bankQuestions, ...fallbackAi];
      }
    } catch (error) {
      onStatus?.("AI ไม่ว่าง — เติมจากคลังแทน");
      const fallback = await fillFromBank(settings, aiNeeded, tracker, onStatus);
      bankQuestions = [...bankQuestions, ...fallback];
      if (!bankQuestions.length) throw error;
    }
  }

  if (bankQuestions.length < count) {
    const extra = await fillFromBank(settings, count - bankQuestions.length, tracker, onStatus);
    bankQuestions = [...bankQuestions, ...extra];
  }

  const { unique: finalQuestions } = dedupeQuestions(bankQuestions);
  const shuffled = [...finalQuestions].sort(() => Math.random() - 0.5).slice(0, count);
  const examCount = breakdown.exam.length;
  const generatedCount = breakdown.generated.length;
  const aiCount = shuffled.filter((q) => q.source === "ai").length;
  const removedDupes = bankQuestions.length - finalQuestions.length;

  if (removedDupes > 0) {
    onStatus?.(`กรองโจทย์ซ้ำ ${removedDupes} ข้อ`);
  }

  return wrapQuiz(settings, shuffled, {
    generatedBy:
      aiCount > 0
        ? `ผสม (ข้อสอบจริง ${examCount} + คลัง ${generatedCount} + AI ${aiCount})`
        : `คลัง (ข้อสอบจริง ${examCount} + generated ${generatedCount})`,
    providerId: aiCount > 0 ? "hybrid" : "local-bank",
    examCount,
    generatedCount,
    aiCount,
    localCount: shuffled.length - aiCount,
  });
}

export function getSubjectTopics(subjectOrId) {
  const chapters =
    (typeof subjectOrId === "object" && subjectOrId?.chapters) ||
    subjectMetaMap[typeof subjectOrId === "string" ? subjectOrId : subjectOrId?.id]?.chapters ||
    subjectMetaMap.calculus1.chapters;
  return chapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
  }));
}
export { DIFFICULTY_GUIDE, DIFFICULTY_LABELS, getExamModePreview, getExamModeChapterTitles, getDifficultyMixPreview };
