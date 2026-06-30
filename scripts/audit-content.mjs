import { createServer } from "vite";
import { fileURLToPath } from "url";
import path from "path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const server = await createServer({ root, server: { middlewareMode: true } });
const mod = await server.ssrLoadModule("/src/data/subjects.js");
await server.close();

const { subjects } = mod;

function exampleCount(section) {
  if (section.examples?.length) return section.examples.length;
  if (section.example) return 1;
  return 0;
}

const report = [];

for (const subject of subjects) {
  const subjectIssues = {
    id: subject.id,
    title: subject.title,
    noTitleChapters: [],
    thinSections: [],
    noExampleSections: [],
    duplicateSectionIds: [],
    duplicateChapterIds: [],
  };

  const genericTitles = [];
  for (const chapter of subject.chapters ?? []) {
    for (const section of chapter.sections ?? []) {
      const examples = section.examples ?? (section.example ? [section.example] : []);
      for (const ex of examples) {
        const t = ex.title?.trim();
        if (!t || /^basic example$/i.test(t)) {
          genericTitles.push(`${section.id}: ${t || "(empty)"}`);
        }
      }
    }
  }
  if (genericTitles.length) subjectIssues.genericTitles = genericTitles;
  const allSectionIds = new Map();

  for (const chapter of subject.chapters ?? []) {
    if (chapterIds.has(chapter.id)) subjectIssues.duplicateChapterIds.push(chapter.id);
    chapterIds.add(chapter.id);

    if (!chapter.title?.trim()) subjectIssues.noTitleChapters.push(chapter.id);

    for (const section of chapter.sections ?? []) {
      const prev = allSectionIds.get(section.id);
      if (prev) {
        subjectIssues.duplicateSectionIds.push(`${section.id} (${prev} + ${chapter.id})`);
      } else {
        allSectionIds.set(section.id, chapter.id);
      }

      const count = exampleCount(section);
      if (count === 0) {
        subjectIssues.noExampleSections.push(`${chapter.title || chapter.id} / ${section.title || section.id}`);
      } else if (count === 1) {
        subjectIssues.thinSections.push(`${chapter.title || chapter.id} / ${section.title || section.id}`);
      }
    }
  }

  const totalSections = (subject.chapters ?? []).reduce((n, c) => n + (c.sections?.length ?? 0), 0);
  const totalExamples = (subject.chapters ?? []).reduce(
    (n, c) => n + (c.sections ?? []).reduce((m, s) => m + exampleCount(s), 0),
    0
  );

  report.push({ ...subjectIssues, totalSections, totalExamples });
}

console.log(JSON.stringify(report, null, 2));
