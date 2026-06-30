import { readFileSync } from "fs";
import { SYLLABUS_PATH } from "./paths.mjs";

let cached = null;

export function loadSyllabus() {
  if (!cached) {
    cached = JSON.parse(readFileSync(SYLLABUS_PATH, "utf8"));
  }
  return cached;
}

export function listSubjects() {
  return Object.keys(loadSyllabus());
}

export function findSection(subjectId, sectionRef) {
  const subject = loadSyllabus()[subjectId];
  if (!subject) return null;

  for (const chapter of subject.chapters ?? []) {
    for (const section of chapter.sections ?? []) {
      if (section.id === sectionRef || section.ref === sectionRef) {
        return { subject, chapter, section };
      }
    }
  }
  return null;
}

export function* iterSections(subjectId = null) {
  const syllabus = loadSyllabus();
  const subjects = subjectId ? [subjectId] : Object.keys(syllabus);

  for (const sid of subjects) {
    const subject = syllabus[sid];
    for (const chapter of subject.chapters ?? []) {
      for (const section of chapter.sections ?? []) {
        yield { subjectId: sid, chapter, section };
      }
    }
  }
}

export function formatSource(subject, section) {
  const ref = section.textbookRef ?? section.stewart ?? section.serway ?? section.centralScience;
  if (!ref) return subject.textbook ?? "";
  const label = ref.section ?? ref.chapter ?? "";
  const pages = ref.pages ? `, p.${ref.pages[0]}${ref.pages[1] ? `–${ref.pages[1]}` : ""}` : "";
  return `${subject.textbook}, ${label}${pages}`;
}
