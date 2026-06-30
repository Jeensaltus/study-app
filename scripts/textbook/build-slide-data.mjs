#!/usr/bin/env node
/**
 * Build src/data/textbook/*.js from parsed JSON + syllabusMap.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { loadSyllabus, formatSource } from "./lib/syllabus.mjs";
import { OUT_DIR, PARSED_DIR } from "./lib/paths.mjs";

function loadParsedSection(subjectId, sectionId) {
  const path = join(PARSED_DIR, subjectId, `${sectionId}.json`);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8"));
}

function buildSubject(subjectId, subjectMeta) {
  const chapters = [];

  for (const chapter of subjectMeta.chapters ?? []) {
    const sections = [];
    for (const section of chapter.sections ?? []) {
      const parsed = loadParsedSection(subjectId, section.id);
      if (parsed) {
        const { chapterId, ...rest } = parsed;
        sections.push(rest);
      }
    }
    if (sections.length) {
      chapters.push({
        id: chapter.id,
        title: chapter.title,
        description: chapter.description ?? "",
        sections,
      });
    }
  }

  return chapters;
}

function serializeChapters(chapters) {
  return JSON.stringify(chapters, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"/g, '"');
}

function main() {
  const syllabus = loadSyllabus();
  mkdirSync(OUT_DIR, { recursive: true });

  const exports = [];
  const imports = [];

  for (const [subjectId, meta] of Object.entries(syllabus)) {
    if (subjectId.startsWith("_")) continue;
    const chapters = buildSubject(subjectId, meta);
    const exportName = `textbook${subjectId.charAt(0).toUpperCase()}${subjectId.slice(1)}`;
    const filePath = join(OUT_DIR, `${subjectId}.js`);

    const content = `/** Auto-generated from scripts/textbook/parsed — npm run build:slides */\nexport const ${exportName} = {\n  chapters: ${JSON.stringify(chapters, null, 2)}\n};\n`;
    writeFileSync(filePath, content, "utf8");
    exports.push(exportName);
    console.log(`Wrote ${filePath} (${chapters.reduce((n, c) => n + c.sections.length, 0)} sections)`);
  }

  const indexContent = `${exports.map((e, i) => {
    const sid = Object.keys(syllabus).filter((k) => !k.startsWith("_"))[i];
    return `import { ${e} } from "./${sid}.js";`;
  }).join("\n")}

const TEXTBOOK_MAP = {
${Object.keys(syllabus).filter((k) => !k.startsWith("_")).map((sid, i) => `  ${sid}: ${exports[i]}`).join(",\n")}
};

export function getTextbookEnhancement(subjectId) {
  return TEXTBOOK_MAP[subjectId] ?? null;
}
`;
  writeFileSync(join(OUT_DIR, "index.js"), indexContent, "utf8");
  console.log("Wrote index.js");
}

main();
