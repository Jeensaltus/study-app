import { todayKey, updateProgress } from "./storage";
import { FLASHCARD_COUNTS } from "../data/flashcards/manifest.js";

const intervals = {
  good: 7,
  okay: 3,
  again: 1,
};

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return todayKey(next);
}

function stemCardTotal(subjectId) {
  if (subjectId) return FLASHCARD_COUNTS[subjectId] ?? 0;
  return Object.entries(FLASHCARD_COUNTS)
    .filter(([id]) => id !== "english")
    .reduce((sum, [, count]) => sum + count, 0);
}

/** Count due STEM cards without loading full deck (unreviewed + due today). */
export function getDueCountFromProgress(progress, subjectId) {
  const today = todayKey();
  const total = stemCardTotal(subjectId);
  if (!total) return 0;

  let scheduledFuture = 0;
  for (const state of Object.values(progress.flashcards)) {
    if (state.subjectId === "english") continue;
    if (subjectId && state.subjectId !== subjectId) continue;
    if (state.due && state.due > today) scheduledFuture += 1;
  }

  return total - scheduledFuture;
}

export function getDueCards(cards, progress, subjectId) {
  const today = todayKey();
  return cards.filter((card) => {
    if (card.subjectId === "english") return false;
    const state = progress.flashcards[card.id];
    return (!subjectId || card.subjectId === subjectId) && (!state?.due || state.due <= today);
  });
}

export function reviewCard(card, rating, subjectId) {
  const due = addDays(new Date(), intervals[rating] ?? 1);
  return updateProgress((progress) => {
    const previous = progress.flashcards[card.id] ?? { reviews: 0, streak: 0 };
    progress.flashcards[card.id] = {
      due,
      rating,
      reviews: previous.reviews + 1,
      streak: rating === "again" ? 0 : previous.streak + 1,
      lastReviewed: todayKey(),
      subjectId,
    };

    const key = todayKey();
    const day = progress.activity[key] ?? { flashcards: 0, quizzes: 0, sections: 0, subjects: [] };
    progress.activity[key] = {
      ...day,
      flashcards: (day.flashcards ?? 0) + 1,
      subjects: Array.from(new Set([...(day.subjects ?? []), subjectId])),
    };
    return progress;
  });
}

export function getFlashcardStats(progress, subjectId) {
  return {
    dueToday: getDueCountFromProgress(progress, subjectId),
    reviewed: Object.values(progress.flashcards).reduce((sum, card) => sum + (card.reviews ?? 0), 0),
  };
}
