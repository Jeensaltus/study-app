/**
 * Scan ../subject/ and generate src/data/knowledgeBaseManifest.js
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SUBJECT_ROOT = path.resolve(__dirname, "../../../subject");
const OUT_FILE = path.resolve(__dirname, "../../src/data/knowledgeBaseManifest.js");

const FOLDER_TO_SUBJECTS = {
  Math: ["calculus1", "calculus2"],
  Physics: ["physics1", "physics2"],
  Chemistry: ["chemistry"],
  Coding: ["programming"],
  English: ["english"],
};

const CATEGORY_LABELS = {
  textbook: "ตำราเรียน",
  summary: "สรุป/ทบทวน",
  exercise: "แบบฝึกหัด",
  midterm: "ข้อสอบกลางภาค",
  final: "ข้อสอบปลายภาค",
  mock: "ข้อสอบจำลอง",
  "past-exam": "แนวข้อสอบ",
  solutions: "เฉลย",
  other: "เอกสารอื่นๆ",
};

function cleanTitle(fileName) {
  return fileName.replace(/\.pdf$/i, "").replace(/_/g, " ").trim();
}

function inferCategory(relativePath, fileName) {
  const lowerPath = relativePath.toLowerCase();
  const lowerName = fileName.toLowerCase();

  if (lowerPath.includes("exercise")) return "exercise";
  if (lowerPath.includes("พร้อมเฉลย") || lowerName.includes("solution") || lowerName.includes("เฉลย")) return "solutions";
  if (lowerPath.includes("midterm") || /\bmid\b/i.test(fileName)) return "midterm";
  if (lowerPath.includes("/final/") || lowerPath.endsWith("/final") || /\bfinal\b/i.test(fileName)) return "final";
  if (/mock/i.test(fileName)) return "mock";
  if (lowerName.includes("สรุป") || lowerName.includes("summary")) return "summary";
  if (lowerName.includes("แนวข้อสอบ") || lowerPath.includes("/test/")) return "past-exam";

  if (
    /stewart|calculus early transcendentals|serway|central science|physics for scientists/i.test(fileName)
  ) {
    return "textbook";
  }

  if (/\bmid\b/i.test(fileName)) return "midterm";
  if (/\bfinal\b/i.test(fileName)) return "final";

  return "other";
}

function inferDescription(category, fileName, folder) {
  const title = cleanTitle(fileName);
  const folderLabel = { Math: "คณิตศาสตร์", Physics: "ฟิสิกส์", Chemistry: "เคมี", Coding: "การเขียนโปรแกรม", English: "ภาษาอังกฤษ" }[folder] ?? folder;

  switch (category) {
    case "textbook":
      if (/stewart|calculus/i.test(fileName)) return "ตำราแคลคูลัสหลัก (Stewart 9th Ed.) — เนื้อหาครบทุกบท";
      if (/serway|physics/i.test(fileName)) return "ตำราฟิสิกส์ Serway & Jewett — ฟิสิกส์ทั่วไปและ Modern Physics";
      if (/central science|chemistry/i.test(fileName)) return "ตำราเคมี Chemistry: The Central Science (12th Ed.)";
      return `ตำรา/เอกสารหลัก ${folderLabel}`;
    case "summary":
      return `สรุปเนื้อหา/ทบทวนสอบ — ${title}`;
    case "exercise":
      return `แบบฝึกหัด — ${title}`;
    case "midterm":
      return `ข้อสอบกลางภาค — ${title}`;
    case "final":
      return `ข้อสอบปลายภาค — ${title}`;
    case "mock":
      return `ข้อสอบจำลอง — ${title}`;
    case "past-exam":
      return `แนวข้อสอบ/ข้อสอบเก่า — ${title}`;
    case "solutions":
      return `เฉลยข้อสอบ — ${title}`;
    default:
      return `${folderLabel} — ${title}`;
  }
}

function kbUrl(relativePath) {
  return `/kb-files/${relativePath.split(path.sep).map(encodeURIComponent).join("/")}`;
}

async function walk(dir, baseFolder, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, baseFolder, acc);
      continue;
    }
    if (!entry.name.toLowerCase().endsWith(".pdf")) continue;
    const relative = path.relative(path.join(SUBJECT_ROOT, baseFolder), full);
    const st = await stat(full);
    acc.push({ relative, fileName: entry.name, sizeBytes: st.size });
  }
  return acc;
}

async function main() {
  const bySubject = {};

  for (const [folder, subjectIds] of Object.entries(FOLDER_TO_SUBJECTS)) {
    const folderPath = path.join(SUBJECT_ROOT, folder);
    let files;
    try {
      files = await walk(folderPath, folder);
    } catch {
      files = [];
    }

    for (const subjectId of subjectIds) {
      if (!bySubject[subjectId]) bySubject[subjectId] = [];
    }

    for (const file of files) {
      const category = inferCategory(file.relative, file.fileName);
      const item = {
        id: `${folder}-${file.relative}`.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase(),
        title: cleanTitle(file.fileName),
        description: inferDescription(category, file.fileName, folder),
        category,
        categoryLabel: CATEGORY_LABELS[category] ?? CATEGORY_LABELS.other,
        fileName: file.fileName,
        url: kbUrl(`${folder}/${file.relative}`),
        sizeBytes: file.sizeBytes,
        folder,
      };

      for (const subjectId of subjectIds) {
        bySubject[subjectId].push({ ...item, id: `${subjectId}-${item.id}` });
      }
    }
  }

  for (const id of Object.keys(bySubject)) {
    bySubject[id].sort((a, b) => {
      const order = ["textbook", "summary", "exercise", "midterm", "mock", "final", "past-exam", "solutions", "other"];
      const ca = order.indexOf(a.category);
      const cb = order.indexOf(b.category);
      if (ca !== cb) return ca - cb;
      return a.title.localeCompare(b.title, "th");
    });
  }

  const content = `/** Auto-generated by scripts/knowledge-base/build-manifest.mjs — do not edit by hand */
export const KNOWLEDGE_BASE_CATEGORY_LABELS = ${JSON.stringify(CATEGORY_LABELS, null, 2)};

export const knowledgeBaseBySubject = ${JSON.stringify(bySubject, null, 2)};

export function getKnowledgeBaseItems(subjectId) {
  return knowledgeBaseBySubject[subjectId] ?? [];
}

export function getKnowledgeBaseCount(subjectId) {
  return getKnowledgeBaseItems(subjectId).length;
}
`;

  await writeFile(OUT_FILE, content, "utf8");
  const total = Object.values(bySubject).reduce((n, arr) => n + arr.length, 0);
  console.log(`Wrote ${OUT_FILE}`);
  console.log(`Subjects: ${Object.keys(bySubject).length}, total entries (with duplicates across cal/phy): ${total}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
