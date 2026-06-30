import { subjectsMeta, subjectMetaMap } from "./subjectsMeta.js";
import { resolveSubjectMeta, resolveSubjectsMeta } from "./calTrack.js";
import { loadSubject, preloadSubject } from "./subjectLoader.js";
import { readProgress } from "../utils/storage.js";

export { loadSubject, preloadSubject };

/** Lightweight metadata for list pages (Home, Subjects, stats). */
export const subjects = subjectsMeta;

export function getSubjectMeta(subjectId, settings) {
  const base = subjectMetaMap[subjectId] ?? subjectsMeta[0];
  return resolveSubjectMeta(base, settings ?? readProgress().settings);
}

export function getSubjectsMeta(settings) {
  return resolveSubjectsMeta(subjectsMeta, settings ?? readProgress().settings);
}

/** Sync alias for lightweight metadata (no chapter content). */
export function getSubject(subjectId) {
  return getSubjectMeta(subjectId);
}

export async function getChapter(subjectId, chapterId) {
  const subject = await loadSubject(subjectId);
  return subject.chapters.find((chapter) => chapter.id === chapterId) ?? subject.chapters[0];
}

export function getAllQuizzes() {
  return subjectsMeta.flatMap((subject) =>
    (subject.quizzes ?? []).map((quiz) => ({ ...quiz, subjectId: subject.id }))
  );
}
