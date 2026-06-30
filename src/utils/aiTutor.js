import { loadSubject } from "../data/subjectLoader";
import { subjectsMeta } from "../data/subjectsMeta";
import { proxyGeminiChat, proxyNvidiaChat } from "./aiApiClient";

const NVIDIA_MODELS = {
  "minimax-m3": { id: "minimaxai/minimax-m3", name: "MiniMax M3" },
  "deepseek-v4-flash": { id: "deepseek-ai/deepseek-v4-flash", name: "DeepSeek V4 Flash" },
  "nemotron-super": { id: "nvidia/nemotron-3-super-120b-a12b", name: "Nemotron Super 120B" },
  "qwen3.5-122b": { id: "qwen/qwen3.5-122b-a10b", name: "Qwen 3.5 122B" },
};

function buildNvidiaSystemPrompt(modelName) {
  return (
    `You are ${modelName}, an AI assistant running on NVIDIA NIM. ` +
    "You are a helpful Thai-speaking tutor for first-year Engineering students at Chulalongkorn University. " +
    "Answer clearly in Thai with step-by-step explanations. " +
    "CRITICAL MATH FORMATTING: You MUST wrap ALL math in LaTeX delimiters — every variable, symbol, equation, and expression. " +
    "Use $...$ for inline math (e.g. $x$, $n=1,2,3$, $\\psi(0)=0$, $s=\\frac{1}{2}$, $E_n$). " +
    "Use $$...$$ for display equations on their own line. " +
    "NEVER write Greek letters, subscripts, fractions, or math symbols without $ delimiters. " +
    "Do not escape dollar signs, and do not use HTML tags such as <br>. " +
    "You can explain concepts, solve problems, check work, and create practice problems for Calculus, Physics, Chemistry, and Programming. " +
    "Do not reject normal first-year STEM questions just because they are broad; choose a useful interpretation and help."
  );
}

const systemPrompt =
  "You are a helpful Thai-speaking tutor for first-year Engineering students at Chulalongkorn University. " +
  "Answer clearly in Thai with step-by-step explanations. " +
  "CRITICAL MATH FORMATTING: You MUST wrap ALL math in LaTeX delimiters — every variable, symbol, equation, and expression. " +
  "Use $...$ for inline math (e.g. $x$, $n=1,2,3$, $\\psi(0)=0$, $s=\\frac{1}{2}$, $E_n$). " +
  "Use $$...$$ for display equations on their own line. " +
  "NEVER write Greek letters, subscripts, fractions, or math symbols without $ delimiters. " +
  "Do not escape dollar signs, and do not use HTML tags such as <br>. " +
  "You can explain concepts, solve problems, check work, and create practice problems for Calculus, Physics, Chemistry, and Programming. " +
  "When the user attaches images or PDFs, read them carefully and answer based on what you see. " +
  "Do not reject normal first-year STEM questions just because they are broad; choose a useful interpretation and help.";

const aliasTerms = [
  ["cal1", "calculus calculus1 แคล แคล1 แคลคูลัส limit derivative integral"],
  ["แคล1", "calculus calculus1 limit derivative integral"],
  ["แคล 1", "calculus calculus1 limit derivative integral"],
  ["อินทิเกรต", "integral integrate antiderivative ปริพันธ์"],
  ["ปริพันธ์", "integral integrate antiderivative อินทิเกรต"],
  ["ดิฟ", "derivative differentiate อนุพันธ์"],
  ["อนุพันธ์", "derivative differentiate ดิฟ"],
  ["ลิมิต", "limit continuity"],
  ["โจทย์", "practice exercise problem quiz"],
];

const cal1ProblemSets = {
  easy: [
    { problem: "หา $\\lim_{x\\to 2}(x^2+3x-1)$", hint: "พหุนามต่อเนื่อง จึงแทนค่าได้ตรง ๆ", answer: "$9$" },
    { problem: "หา $\\frac{d}{dx}(3x^4-2x+5)$", hint: "ใช้ power rule ทีละพจน์", answer: "$12x^3-2$" },
    { problem: "หา $\\int 4x^3\\,dx$", hint: "เพิ่มเลขชี้กำลัง 1 แล้วหารด้วยเลขชี้กำลังใหม่", answer: "$x^4+C$" },
  ],
  medium: [
    { problem: "หา $\\lim_{x\\to 3}\\frac{x^2-9}{x-3}$", hint: "แยกตัวประกอบ $x^2-9=(x-3)(x+3)$", answer: "$6$" },
    { problem: "หา $\\frac{d}{dx}[x^2\\sin x]$", hint: "ใช้ product rule", answer: "$2x\\sin x+x^2\\cos x$" },
    { problem: "หา $\\int 2x\\cos(x^2)\\,dx$", hint: "ตั้ง $u=x^2$", answer: "$\\sin(x^2)+C$" },
  ],
  hard: [
    { problem: "หา $\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}$", hint: "ใช้ L'Hopital สองครั้ง หรือ Taylor expansion", answer: "$\\frac{1}{2}$" },
    { problem: "หาอนุพันธ์ของ $y=x^x$ เมื่อ $x>0$", hint: "ใช้ logarithmic differentiation", answer: "$y'=x^x(\\ln x+1)$" },
    { problem: "หา $\\int_1^e \\frac{\\ln x}{x}\\,dx$", hint: "ตั้ง $u=\\ln x$", answer: "$\\frac{1}{2}$" },
  ],
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalize(text) {
  return text.toLowerCase().trim();
}

function expandedQuery(text) {
  let query = normalize(text);
  for (const [alias, expansion] of aliasTerms) {
    if (query.includes(alias)) query += ` ${expansion}`;
  }
  return query;
}

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function requestedDifficulty(query) {
  if (includesAny(query, ["ยาก", "hard", "challenge", "advanced", "ท้าทาย"])) return "hard";
  if (includesAny(query, ["ง่าย", "easy", "basic", "พื้นฐาน"])) return "easy";
  return "medium";
}

function wantsPractice(query) {
  return includesAny(query, ["สร้างโจทย์", "ขอโจทย์", "หาโจทย์", "โจทย์", "practice", "exercise", "problem", "quiz"]);
}

function isCalculusQuery(query) {
  return includesAny(query, [
    "calculus",
    "cal1",
    "แคล",
    "ลิมิต",
    "limit",
    "ดิฟ",
    "อนุพันธ์",
    "derivative",
    "differentiate",
    "อินทิเกรต",
    "integral",
    "integrate",
    "ปริพันธ์",
    "1/x",
    "sin",
    "cos",
    "ln",
  ]);
}

function renderProblemSet(level) {
  const label = level === "hard" ? "ยาก" : level === "easy" ? "พื้นฐาน" : "ปานกลาง";
  return [
    `ได้ครับ นี่คือโจทย์ Calculus I ระดับ${label} 3 ข้อ`,
    "",
    ...cal1ProblemSets[level].flatMap((item, index) => [
      `${index + 1}. ${item.problem}`,
      `   Hint: ${item.hint}`,
      `   คำตอบ: ${item.answer}`,
      "",
    ]),
    "ถ้าอยากฝึกจริง ให้ลองทำเองก่อนดูคำตอบ แล้วส่งวิธีทำมาให้ผมเช็คได้ครับ",
  ].join("\n");
}

function scoreSection(section, chapter, subject, query) {
  const examples = section.examples ?? (section.example ? [section.example] : []);
  const haystack = [
    subject.title,
    subject.thaiTitle,
    subject.code,
    chapter.title,
    chapter.description ?? "",
    section.title,
    section.concept ?? "",
    section.formula ?? "",
    section.source ?? "",
    ...(examples.flatMap((example) => [example.title, example.problem, example.answer, ...(example.steps ?? [])])),
  ]
    .join(" ")
    .toLowerCase();

  const words = query.split(/\s+/).filter((word) => word.length > 2);
  const matchCount = words.filter((word) => haystack.includes(word)).length;
  const subjectBonus =
    query.includes(subject.id) ||
    query.includes(subject.title.toLowerCase().split(" ")[0]) ||
    query.includes(subject.code.toLowerCase()) ||
    (subject.id === "calculus1" && includesAny(query, ["cal1", "แคล1", "แคล 1"]))
      ? 2
      : 0;

  return matchCount + subjectBonus;
}

let contentPoolPromise = null;

async function getContentPool() {
  if (!contentPoolPromise) {
    contentPoolPromise = Promise.all(subjectsMeta.map((meta) => loadSubject(meta.id)));
  }
  return contentPoolPromise;
}

async function findRelevantContent(message) {
  const query = expandedQuery(message);
  const subjects = await getContentPool();
  const pool = subjects.flatMap((subject) =>
    subject.chapters.flatMap((chapter) =>
      (chapter.sections ?? []).map((section) => ({
        subject,
        chapter,
        section,
        score: scoreSection(section, chapter, subject, query),
      }))
    )
  );
  const best = pool.sort((a, b) => b.score - a.score)[0];
  return best && best.score > 0 ? best : null;
}

function firstExample(section) {
  if (section.example) return section.example;
  if (Array.isArray(section.examples) && section.examples.length > 0) return section.examples[0];
  return null;
}

async function contentSearchReply(message) {
  const match = await findRelevantContent(message);
  if (!match) return null;

  const { subject, chapter, section } = match;
  const example = firstExample(section);
  const source = section.source ? `\nที่มา: ${section.source}` : "";
  const steps =
    example?.steps?.map((step, index) => `${index + 1}. ${step}`).join("\n") ??
    "ลองเริ่มจากนิยามหรือสูตรหลักของหัวข้อนี้ก่อน แล้วค่อยแทนค่าตามโจทย์";

  return [
    "โหมด local tutor จากโน้ตและหนังสือในแอป",
    `หัวข้อ: ${subject.title} > ${chapter.title} > ${section.title}${source}`,
    "",
    section.concept,
    "",
    section.formula ? `สูตรหลัก: $${section.formula}$` : "",
    "",
    `ตัวอย่าง: ${example?.problem ?? "ยังไม่มีตัวอย่าง"}`,
    steps,
    "",
    `ลองฝึกต่อ: ${section.practice ?? "ทบทวนสูตรแล้วลองสร้างโจทย์เองหนึ่งข้อ"}`,
  ]
    .filter(Boolean)
    .join("\n");
}

async function localTutorReply(message) {
  const query = expandedQuery(message);
  const compact = query.replace(/\s+/g, "");

  if (isCalculusQuery(query) && wantsPractice(query)) return renderProblemSet(requestedDifficulty(query));

  if (includesAny(query, ["อินทิเกรต", "integral", "integrate", "ปริพันธ์", "∫"])) {
    if (compact.includes("1/x") || compact.includes("1÷x") || compact.includes("\\frac{1}{x}")) {
      return [
        "$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$",
        "",
        "เหตุผลคืออนุพันธ์ของ $\\ln|x|$ คือ $\\frac{1}{x}$ สำหรับ $x\\neq0$",
        "",
        "ต้องใส่ค่าสัมบูรณ์เพราะ $\\ln x$ นิยามตรง ๆ เฉพาะ $x>0$ แต่ $\\frac{1}{x}$ มี antiderivative ได้ทั้งช่วง $x>0$ และ $x<0$ จึงเขียนรวมเป็น $\\ln|x|+C$",
      ].join("\n");
    }
    if (compact.includes("e^x") || compact.includes("exp(x)")) return "$\\int e^x\\,dx=e^x+C$";
    if (compact.includes("sinx") || compact.includes("sin(x)")) return "$\\int \\sin x\\,dx=-\\cos x+C$";
    if (compact.includes("cosx") || compact.includes("cos(x)")) return "$\\int \\cos x\\,dx=\\sin x+C$";
    const powerMatch = compact.match(/x\^(-?\d+)/);
    if (powerMatch) {
      const n = Number(powerMatch[1]);
      if (n === -1) return "$\\int x^{-1}\\,dx=\\ln|x|+C$";
      return `$\\int x^{${n}}\\,dx=\\frac{x^{${n + 1}}}{${n + 1}}+C$ เมื่อ $n\\neq-1$`;
    }
  }

  if (includesAny(query, ["ดิฟ", "อนุพันธ์", "derivative", "differentiate"])) {
    if (compact.includes("lnx") || compact.includes("ln(x)")) return "$\\frac{d}{dx}\\ln|x|=\\frac{1}{x}$ สำหรับ $x\\neq0$";
    if (compact.includes("sinx") || compact.includes("sin(x)")) return "$\\frac{d}{dx}\\sin x=\\cos x$";
    if (compact.includes("cosx") || compact.includes("cos(x)")) return "$\\frac{d}{dx}\\cos x=-\\sin x$";
    if (compact.includes("e^x") || compact.includes("exp(x)")) return "$\\frac{d}{dx}e^x=e^x$";
    const powerMatch = compact.match(/x\^(-?\d+)/);
    if (powerMatch) {
      const n = Number(powerMatch[1]);
      return `$\\frac{d}{dx}x^{${n}}=${n}x^{${n - 1}}$ จาก power rule`;
    }
  }

  if (includesAny(query, ["ลิมิต", "limit"])) {
    return [
      "ลิมิตพื้นฐานที่ใช้บ่อย:",
      "",
      "- พหุนามและฟังก์ชันต่อเนื่อง: แทนค่าได้ตรง ๆ",
      "- $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$ โดยต้องใช้หน่วย radian",
      "- รูป $0/0$ ให้ลองแยกตัวประกอบ, rationalize, หรือใช้ L'Hopital เมื่อเรียนแล้ว",
      "- ลิมิตที่อนันต์ของ rational function ให้เทียบ degree สูงสุด",
    ].join("\n");
  }

  const contentReply = await contentSearchReply(message);
  if (contentReply) return contentReply;

  return [
    "ตอนนี้โหมด local ยังตอบคำถามนี้แบบมั่นใจไม่ได้ครับ แต่ผมช่วยได้ถ้าถามเป็นหัวข้อใน Calculus, Physics, Chemistry หรือ Programming",
    "",
    "ตัวอย่างที่ถามได้:",
    "- อินทิเกรต 1/x ได้อะไร",
    "- ขอสูตรอนุพันธ์พื้นฐาน",
    "- ช่วยสร้างโจทย์ cal1 ยาก ๆ",
    "- สรุป VSEPR",
  ].join("\n");
}

async function askGemini(messages, model = "gemini-2.5-flash") {
  return proxyGeminiChat({ model, systemInstruction: systemPrompt, messages });
}

async function askNvidia(messages, modelAlias) {
  const config = NVIDIA_MODELS[modelAlias];
  if (!config) throw new Error(`Unknown NVIDIA model: ${modelAlias}`);
  const latestMessage = messages[messages.length - 1].content;
  return proxyNvidiaChat({
    model: modelAlias,
    messages: [
      { role: "system", content: buildNvidiaSystemPrompt(config.name) },
      ...messages.slice(0, -1).map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content })),
      { role: "user", content: latestMessage },
    ],
  });
}

function geminiErrorStatus(error) {
  const message = error?.message ?? String(error);
  try {
    const parsed = JSON.parse(message);
    return parsed?.error?.status ?? parsed?.error?.code ?? message;
  } catch {
    return message;
  }
}

function isRetryableGeminiError(error) {
  const status = String(geminiErrorStatus(error)).toLowerCase();
  return status.includes("503") || status.includes("unavailable") || status.includes("overloaded") || status.includes("high demand") || status.includes("429") || status.includes("quota") || status.includes("rate limit") || status.includes("resource_exhausted");
}

function geminiFallbackNotice(error) {
  const status = String(geminiErrorStatus(error)).toLowerCase();
  if (status.includes("429") || status.includes("quota") || status.includes("rate limit") || status.includes("resource_exhausted")) {
    return "ตอนนี้ Gemini มีคำขอเยอะเกินกำหนด ผมจะใช้โหมด local tutor ตอบแทนก่อน";
  }
  if (isRetryableGeminiError(error)) {
    return "ตอนนี้ Gemini มีผู้ใช้งานเยอะ เลยตอบชั่วคราวไม่ได้ครับ ผมจะใช้โหมด local tutor ตอบแทนก่อน";
  }
  return "ตอนนี้ Gemini ตอบไม่ได้ชั่วคราวครับ ผมจะใช้โหมด local tutor ตอบแทนก่อน";
}

function nvidiaFallbackNotice(error, modelName = "NVIDIA model") {
  const lower = String(error?.message ?? error).toLowerCase();
  if (lower.includes("404")) {
    return `ตอนนี้เรียก ${modelName} ไม่สำเร็จ เพราะ endpoint หรือ model บน NVIDIA API ตอบกลับว่าไม่พบข้อมูล (404) ผมจะใช้โหมด local tutor ตอบแทนก่อน`;
  }
  if (lower.includes("401") || lower.includes("403")) {
    return "ตอนนี้ NVIDIA API ปฏิเสธ API key หรือสิทธิ์การใช้งานครับ ผมจะใช้โหมด local tutor ตอบแทนก่อน";
  }
  if (lower.includes("429") || lower.includes("rate")) {
    return "ตอนนี้ NVIDIA API ถูกจำกัด rate limit ชั่วคราวครับ ผมจะใช้โหมด local tutor ตอบแทนก่อน";
  }
  return "ตอนนี้เรียก NVIDIA API ไม่สำเร็จครับ ผมจะใช้โหมด local tutor ตอบแทนก่อน";
}

function localFallbackSuffix(messages) {
  const latest = messages[messages.length - 1];
  if (latest?.attachments?.length) {
    return "\n\n(โหมด local อ่านรูป/PDF ไม่ได้ — ลองใช้ Gemini เมื่อ API พร้อม)";
  }
  return "";
}

export async function askTutor(messages, model = "gemini-2.5-flash") {
  const latest = messages[messages.length - 1]?.content ?? "";

  if (NVIDIA_MODELS[model]) {
    const config = NVIDIA_MODELS[model];
    try {
      return await askNvidia(messages, model);
    } catch (error) {
      console.error("NVIDIA API Error:", error);
      return `${nvidiaFallbackNotice(error, config.name)}${localFallbackSuffix(messages)}\n\n---\n\n${await localTutorReply(latest)}`;
    }
  }

  if (model.startsWith("gemini")) {
    try {
      return await askGemini(messages, model);
    } catch (error) {
      console.error("Gemini API Error:", error);
      if (isRetryableGeminiError(error)) {
        await wait(900);
        try {
          return await askGemini(messages, model);
        } catch (retryError) {
          console.error("Gemini retry failed:", retryError);
          return `${geminiFallbackNotice(retryError)}${localFallbackSuffix(messages)}\n\n---\n\n${await localTutorReply(latest)}`;
        }
      }
      return `${geminiFallbackNotice(error)}${localFallbackSuffix(messages)}\n\n---\n\n${await localTutorReply(latest)}`;
    }
  }

  await wait(450);
  return await localTutorReply(latest);
}
