/**
 * Legacy supplements from textbookPdfContent (flashcards, formulas, quizzes only).
 * Chapter slide content is merged from src/data/textbook/ via subjectLoader.
 */
import { textbookEnhancements } from "./textbookPdfContent.js";

export function enrichSubjectSupplements(subject) {
  const extra = textbookEnhancements[subject.id];
  if (!extra) return subject;

  return {
    ...subject,
    formulas: [...(subject.formulas ?? []), ...(extra.formulas ?? [])],
    flashcards: [...(subject.flashcards ?? []), ...(extra.flashcards ?? [])],
    quizzes: [...(subject.quizzes ?? []), ...(extra.quizzes ?? [])],
  };
}
