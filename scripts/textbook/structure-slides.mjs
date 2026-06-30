#!/usr/bin/env node
/**
 * Structure raw text into slide section JSON via Gemini API (optional).
 * Reads GEMINI_API_KEY or VITE_GEMINI_API_KEY from study-app/.env
 * Usage: node scripts/textbook/structure-slides.mjs --subject calculus1 --section limit-laws [--delay 6000]
 */
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { findSection, formatSource } from "./lib/syllabus.mjs";
import { PARSED_DIR, RAW_DIR, TEXTBOOK_ROOT } from "./lib/paths.mjs";

function loadEnv() {
  const envPath = join(TEXTBOOK_ROOT, "../.env");
  if (!existsSync(envPath)) return {};
  const env = {};
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return env;
}

function parseArgs(argv) {
  const args = { subject: null, section: null, delay: 6000, model: "gemini-2.5-flash-lite" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--subject") args.subject = argv[++i];
    if (argv[i] === "--section") args.section = argv[++i];
    if (argv[i] === "--delay") args.delay = Number(argv[++i]) || 6000;
    if (argv[i] === "--model") args.model = argv[++i];
  }
  return args;
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const PROMPT = `You are building study slide content for a Thai university freshman app.
From the raw textbook excerpt, produce ONE section JSON object (not an array).

Rules:
- concept: 2-4 paragraphs in Thai, explain clearly for self-study. Do NOT copy long passages verbatim.
- formula: main LaTeX (no $ delimiters in this field)
- warning: common mistakes in Thai
- examples: exactly 2 items with title, level (Basic/Medium), tip, problem, steps (array), answer — use $...$ for inline math in strings
- practice: one practice problem string
- graph: optional one of limit|derivative|integral|motion|energy|null

Return ONLY valid JSON matching this shape:
{"concept":"...","formula":"...","warning":"...","graph":null,"examples":[...],"practice":"..."}`;

async function callGemini(apiKey, model, rawText, meta) {
  const { GoogleGenAI } = await import("@google/genai");
  const genAI = new GoogleGenAI({ apiKey });
  const response = await genAI.models.generateContent({
    model,
    contents: `${PROMPT}\n\nSection: ${meta.title}\nTextbook: ${meta.source}\n\nRAW TEXT:\n${rawText.slice(0, 12000)}`,
  });
  const text = response.text ?? "";
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("No JSON in Gemini response");
  return JSON.parse(text.slice(start, end + 1));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.subject || !args.section) {
    console.error("Usage: structure-slides.mjs --subject <id> --section <sectionId>");
    process.exit(1);
  }

  const found = findSection(args.subject, args.section);
  if (!found) {
    console.error("Section not found");
    process.exit(1);
  }

  const { subject, chapter, section } = found;
  const rawPath = join(RAW_DIR, args.subject, `${section.id}.txt`);
  const rawText = existsSync(rawPath) ? readFileSync(rawPath, "utf8") : section.title;

  const env = loadEnv();
  const apiKey = process.env.GEMINI_API_KEY ?? env.GEMINI_API_KEY ?? env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("No GEMINI_API_KEY or VITE_GEMINI_API_KEY — run seed-parsed.mjs instead");
    process.exit(1);
  }

  await wait(args.delay);
  const structured = await callGemini(apiKey, args.model, rawText, {
    title: section.title,
    source: formatSource(subject, section),
  });

  const payload = {
    id: section.id,
    title: section.title,
    source: formatSource(subject, section),
    chapterId: chapter.id,
    ...structured,
  };

  mkdirSync(join(PARSED_DIR, args.subject), { recursive: true });
  const outPath = join(PARSED_DIR, args.subject, `${section.id}.json`);
  writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
