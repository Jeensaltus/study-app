import { loadSubject } from "../data/subjectLoader.js";
import { TOPIC_TO_CHAPTER_TITLE, topicToChapter, inferExamType, getTopicWeights, getDifficultyTierWeight, normalizeDifficultyMode } from "../data/examWeights";
import { enrichExamSolution } from "./examSolutionEnricher";
import { QuestionDedupeTracker } from "./quizDedup";
import { simplifyLatexText } from "./latexSimplify";

const LEVEL_TO_DIFFICULTY = {
  Basic: "easy",
  Medium: "medium",
  Hard: "hard",
  easy: "easy",
  medium: "medium",
  hard: "hard",
};

const QUESTION_TYPE_LABELS = {
  calculation: "Calculation",
  proof: "Proof",
  explain: "Explain",
  apply: "Apply",
};

const SOURCE_LABELS = {
  exam: "ข้อสอบจริง",
  generated: "คลังโจทย์",
  example: "ฐานข้อมูล",
  textbook: "ฐานข้อมูล",
  "static-quiz": "ฐานข้อมูล",
};

const bankCache = new Map();
let examSolutionsPromise = null;

function getExamSolutions() {
  if (!examSolutionsPromise) {
    examSolutionsPromise = import("../data/mathExamSolutions.js").then((m) => m.EXAM_SOLUTIONS);
  }
  return examSolutionsPromise;
}

async function loadPhysicsBank(subjectId) {
  const examModule = await import("../data/physicsExamProblems.js");
  const problems = subjectId === "physics1" ? examModule.phy1Problems : examModule.phy2Problems;
  return collectFromExamProblems(problems, subjectId, {});
}

async function loadCalculusBank(subjectId) {
  const [examModule, examSolutions] = await Promise.all([
    import("../data/mathExamProblems.js"),
    getExamSolutions(),
  ]);

  if (subjectId === "calculus1") {
    const [generatedModule, hardModule] = await Promise.all([
      import("../data/generated/cal1Generated.js"),
      import("../data/generated/cal1HardGenerated.js"),
    ]);
    return [
      ...collectFromExamProblems(examModule.cal1Problems, subjectId, examSolutions),
      ...collectFromGeneratedProblems(generatedModule.cal1Generated, subjectId),
      ...collectFromGeneratedProblems(hardModule.cal1HardGenerated, subjectId),
    ];
  }

  const [generatedModule, hardModule] = await Promise.all([
    import("../data/generated/cal2Generated.js"),
    import("../data/generated/cal2HardGenerated.js"),
  ]);
  return [
    ...collectFromExamProblems(examModule.cal2Problems, subjectId, examSolutions),
    ...collectFromGeneratedProblems(generatedModule.cal2Generated, subjectId),
    ...collectFromGeneratedProblems(hardModule.cal2HardGenerated, subjectId),
  ];
}

async function buildSubjectBank(subjectId) {
  if (bankCache.has(subjectId)) return bankCache.get(subjectId);

  const pending = (async () => {
    const subject = await loadSubject(subjectId);
    const entries = [...collectFromSubject(subject)];

    if (subjectId === "calculus1" || subjectId === "calculus2") {
      entries.push(...(await loadCalculusBank(subjectId)));
    }

    if (subjectId === "physics1" || subjectId === "physics2") {
      entries.push(...(await loadPhysicsBank(subjectId)));
    }

    return entries;
  })();

  bankCache.set(subjectId, pending);
  return pending;
}

function inferQuestionType(text = "") {
  const lower = text.toLowerCase();
  if (/พิสูจน์|prove|show that|แสดงว่า/.test(lower)) return "proof";
  if (/อธิบาย|explain|ทำไม|why/.test(lower)) return "explain";
  if (/ประยุกต์|apply|ใช้สูตร|real-world|จริง/.test(lower)) return "apply";
  return "calculation";
}

function stepsToSolution(steps, answer) {
  const body = Array.isArray(steps) ? steps.join("\n") : "";
  if (answer && body) return `${body}\n\nคำตอบ: ${answer}`;
  return answer || body || "ดูวิธีทำในหนังสือเรียน";
}

function buildMcDistractors(correctText, index) {
  const correct = (correctText || `$x$`).trim();
  const numMatch = correct.match(/([+-]?\d+(?:\.\d+)?)/);
  if (numMatch) {
    const n = parseFloat(numMatch[1]);
    const variants = [
      correct,
      `$${Number.isInteger(n) ? n + 1 : (n + 0.5).toFixed(2)}$`,
      `$${Number.isInteger(n) ? n - 1 : (n - 0.5).toFixed(2)}$`,
      `$${-n}$`,
      `$${n * 2}$`,
    ];
    const unique = [...new Set(variants.map((v) => v.replace(/\.00(?=\$)/, "")))].slice(0, 4);
    while (unique.length < 4) {
      unique.push(`$${index + unique.length + 1}$`);
    }
    return unique;
  }

  const generic = [correct, `$0$`, `$\\text{ไม่มีคำตอบที่ถูกต้อง}$`, `$\\infty$`];
  return generic.slice(0, 4);
}

function makeEntry(partial) {
  return {
    id: partial.id,
    subjectId: partial.subjectId,
    chapterId: partial.chapterId,
    topic: partial.topic,
    examType: partial.examType ?? "all",
    difficulty: partial.difficulty ?? "medium",
    type: partial.type,
    questionType: partial.questionType ?? "calculation",
    source: partial.source,
    sourceRef: partial.sourceRef ?? "",
    question: partial.question,
    choices: partial.choices ?? [],
    correctAnswer: partial.correctAnswer ?? 0,
    solution: partial.solution ?? "",
  };
}

function collectFromSubject(subject) {
  const entries = [];

  for (const quiz of subject.quizzes ?? []) {
    const chapter = subject.chapters.find((c) => c.id === quiz.chapterId);
    entries.push(
      makeEntry({
        id: `${subject.id}-quiz-${quiz.id}`,
        subjectId: subject.id,
        chapterId: quiz.chapterId,
        topic: chapter?.title ?? quiz.chapterId,
        difficulty: "medium",
        type: "multiple-choice",
        questionType: inferQuestionType(quiz.question),
        source: "static-quiz",
        sourceRef: subject.code,
        question: quiz.question,
        choices: quiz.options ?? [],
        correctAnswer: quiz.answer ?? 0,
        solution: quiz.solution ?? "",
      })
    );

    entries.push(
      makeEntry({
        id: `${subject.id}-quiz-open-${quiz.id}`,
        subjectId: subject.id,
        chapterId: quiz.chapterId,
        topic: chapter?.title ?? quiz.chapterId,
        difficulty: "medium",
        type: "open-ended",
        questionType: inferQuestionType(quiz.question),
        source: "static-quiz",
        sourceRef: subject.code,
        question: quiz.question,
        choices: [],
        correctAnswer: 0,
        solution: quiz.solution ?? (quiz.options?.[quiz.answer] ? `คำตอบ: ${quiz.options[quiz.answer]}` : ""),
      })
    );
  }

  for (const chapter of subject.chapters ?? []) {
    for (const section of chapter.sections ?? []) {
      const examples = section.examples ?? (section.example ? [section.example] : []);
      for (const [ei, example] of examples.entries()) {
        const difficulty = LEVEL_TO_DIFFICULTY[example.level] ?? "medium";
        const solution = stepsToSolution(example.steps, example.answer);
        const question = example.problem ?? example.title ?? "";
        if (!question) continue;

        entries.push(
          makeEntry({
            id: `${subject.id}-${chapter.id}-${section.id}-ex-${ei}`,
            subjectId: subject.id,
            chapterId: chapter.id,
            topic: chapter.title,
            difficulty,
            type: "open-ended",
            questionType: inferQuestionType(question + " " + (example.title ?? "")),
            source: "example",
            sourceRef: section.source ?? section.title,
            question,
            choices: [],
            correctAnswer: 0,
            solution,
          })
        );

        const correctChoice = example.answer ?? solution.slice(0, 80);
        const distractors = buildMcDistractors(correctChoice, ei);
        entries.push(
          makeEntry({
            id: `${subject.id}-${chapter.id}-${section.id}-mc-${ei}`,
            subjectId: subject.id,
            chapterId: chapter.id,
            topic: chapter.title,
            difficulty,
            type: "multiple-choice",
            questionType: inferQuestionType(question),
            source: "example",
            sourceRef: section.source ?? section.title,
            question,
            choices: distractors,
            correctAnswer: 0,
            solution,
          })
        );
      }

      if (section.practice && !examples.length) {
        entries.push(
          makeEntry({
            id: `${subject.id}-${chapter.id}-${section.id}-practice`,
            subjectId: subject.id,
            chapterId: chapter.id,
            topic: chapter.title,
            difficulty: "medium",
            type: "open-ended",
            questionType: "apply",
            source: "textbook",
            sourceRef: section.source ?? section.title,
            question: section.practice,
            choices: [],
            solution: section.formula ? `ใช้สูตร $${section.formula}$` : "ดูแนวคิดในบทเรียน",
          })
        );
      }
    }
  }

  return entries;
}

function examProblemToDifficulty(source, subtopic) {
  const s = (subtopic ?? "").toLowerCase();
  if (/ซับซ้อน|พิเศษ|ขั้นสูง|อันดับสูง|king|leibniz|l.h.p/.test(s)) return "hard";
  if (/mock|final/.test((source ?? "").toLowerCase())) return "hard";
  if (/มิดเทอม|mid|exam/.test((source ?? "").toLowerCase())) return "medium";
  return "medium";
}

function collectFromExamProblems(problems, subjectId, examSolutions) {
  return problems.map((p) =>
    makeEntry({
      id: `${subjectId}-exam-${p.id}`,
      subjectId,
      chapterId: p.topic,
      topic: topicToChapter(subjectId, p.topic) ?? TOPIC_TO_CHAPTER_TITLE[p.topic] ?? p.subtopic ?? p.topic,
      examType: p.examType ?? inferExamType(p.source),
      difficulty: examProblemToDifficulty(p.source, p.subtopic),
      type: "open-ended",
      questionType: inferQuestionType(p.problem ?? ""),
      source: "exam",
      sourceRef: p.source,
      question: p.problem ?? "",
      choices: [],
      correctAnswer: 0,
      solution: examSolutions[p.id] ?? enrichExamSolution(p),
    })
  );
}

function collectFromGeneratedProblems(problems, subjectId) {
  return problems.map((p) =>
    makeEntry({
      id: `${subjectId}-gen-${p.id}`,
      subjectId,
      chapterId: p.topic,
      topic: topicToChapter(subjectId, p.topic) ?? TOPIC_TO_CHAPTER_TITLE[p.topic] ?? p.topic,
      examType: p.examType ?? "all",
      difficulty: p.difficulty ?? "medium",
      type: "open-ended",
      questionType: inferQuestionType(p.problem ?? ""),
      source: "generated",
      sourceRef: p.templateId ?? "template",
      question: p.problem ?? "",
      choices: [],
      correctAnswer: 0,
      solution: p.solution || (p.answer ? enrichExamSolution(p) : ""),
    })
  );
}

function matchesFormat(entry, format) {
  if (format === "multiple-choice") return entry.type === "multiple-choice";
  return entry.type === "open-ended";
}

function matchesExamMode(entry, examMode) {
  if (!examMode || examMode === "all") return true;
  if (entry.examType === "all") return true;
  return entry.examType === examMode;
}

function matchesSourcePool(entry, sourcePool) {
  if (!sourcePool) return true;
  if (sourcePool === "textbook") {
    return ["example", "textbook", "static-quiz"].includes(entry.source);
  }
  return entry.source === sourcePool;
}

export async function queryBank({
  subjectId,
  topicTitles = [],
  format,
  sourcePool,
  examMode = "all",
  limit = Infinity,
}) {
  const bank = await buildSubjectBank(subjectId);
  const filtered = bank.filter((entry) => {
    if (entry.subjectId !== subjectId) return false;
    if (topicTitles.length && !topicTitles.includes(entry.topic)) return false;
    if (format && !matchesFormat(entry, format)) return false;
    if (!matchesSourcePool(entry, sourcePool)) return false;
    if (!matchesExamMode(entry, examMode)) return false;
    return Boolean(entry.question?.trim());
  });
  return filtered.slice(0, limit);
}

export async function getBankStats(subjectId, topicTitles = [], difficultyMode, format, examMode = "all") {
  const entries = await queryBank({ subjectId, topicTitles, format, examMode, limit: Infinity });
  const mode = normalizeDifficultyMode(difficultyMode);
  const eligible = entries.filter((e) => getDifficultyTierWeight(mode, e.difficulty) > 0);
  const bySource = eligible.reduce((acc, entry) => {
    acc[entry.source] = (acc[entry.source] ?? 0) + 1;
    return acc;
  }, {});
  return {
    total: eligible.length,
    byTopic: eligible.reduce((acc, entry) => {
      acc[entry.topic] = (acc[entry.topic] ?? 0) + 1;
      return acc;
    }, {}),
    bySource,
    exam: bySource.exam ?? 0,
    generated: bySource.generated ?? 0,
    textbook: (bySource.example ?? 0) + (bySource.textbook ?? 0) + (bySource["static-quiz"] ?? 0),
  };
}

export function pickRandom(entries, count, exclude = new QuestionDedupeTracker()) {
  const tracker = exclude instanceof QuestionDedupeTracker ? exclude : new QuestionDedupeTracker([...exclude].map((id) => ({ id })));
  const pool = entries.filter((e) => !tracker.has(e));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function pickWeighted(entries, count, topicWeights = {}, exclude = new QuestionDedupeTracker(), difficultyMode = "normal") {
  const tracker = exclude instanceof QuestionDedupeTracker ? exclude : new QuestionDedupeTracker([...exclude].map((id) => ({ id })));
  const picked = [];
  const mode = normalizeDifficultyMode(difficultyMode);

  for (let i = 0; i < count; i += 1) {
    const available = entries.filter((e) => !tracker.has(e));
    if (!available.length) break;

    const weights = available.map((e) => {
      const topicW = Math.max(topicWeights[e.topic] ?? 0.01, 0.01);
      const diffW = getDifficultyTierWeight(mode, e.difficulty);
      return topicW * diffW;
    });
    const total = weights.reduce((sum, w) => sum + w, 0);
    if (total <= 0) break;

    let roll = Math.random() * total;
    let chosen = available[available.length - 1];

    for (let j = 0; j < available.length; j += 1) {
      roll -= weights[j];
      if (roll <= 0) {
        chosen = available[j];
        break;
      }
    }

    picked.push(chosen);
    tracker.add(chosen);
  }

  return picked;
}

export async function pickFromPools(settings, counts, tracker = new QuestionDedupeTracker(), onStatus) {
  const { subject, topicTitles, difficulty, format, examMode = "all" } = settings;
  const topicWeights = getTopicWeights(subject.id, examMode);
  const result = { exam: [], generated: [], textbook: [] };

  const pools = [
    { key: "exam", sourcePool: "exam", count: counts.exam ?? 0 },
    { key: "generated", sourcePool: "generated", count: counts.generated ?? 0 },
    { key: "textbook", sourcePool: "textbook", count: counts.textbook ?? 0 },
  ];

  for (const { key, sourcePool, count } of pools) {
    if (count <= 0) continue;
    const pool = await queryBank({
      subjectId: subject.id,
      topicTitles,
      format,
      sourcePool,
      examMode,
    });
    const picked = pickWeighted(pool, count, topicWeights, tracker, difficulty);
    picked.forEach((entry) => tracker.add(entry));
    result[key] = picked;
    if (picked.length) onStatus?.(`ดึง${SOURCE_LABELS[sourcePool] ?? sourcePool} ${picked.length} ข้อ...`);
  }

  return { entries: [...result.exam, ...result.generated, ...result.textbook], tracker, breakdown: result };
}

export function bankEntryToQuizQuestion(entry, index) {
  return {
    id: index + 1,
    topic: entry.topic,
    difficulty: entry.difficulty,
    question: simplifyLatexText(entry.question),
    type: entry.type,
    questionType: entry.questionType,
    choices: entry.type === "multiple-choice" ? [...entry.choices] : [],
    correctAnswer: entry.correctAnswer ?? 0,
    solution: simplifyLatexText(entry.solution),
    source: entry.source,
    sourceLabel: SOURCE_LABELS[entry.source] ?? entry.source,
    bankId: entry.id,
  };
}

export { QUESTION_TYPE_LABELS, SOURCE_LABELS };
