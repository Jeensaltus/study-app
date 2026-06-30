import { todayKey, updateProgress } from "./storage";

export function recordEnglishFlashcardReview(card, rating, subjectId = "english") {
  return updateProgress((progress) => {
    const previous = progress.flashcards[card.id] ?? { reviews: 0, streak: 0, englishPractice: true };
    progress.flashcards[card.id] = {
      ...previous,
      rating,
      reviews: (previous.reviews ?? 0) + 1,
      streak: rating === "again" ? 0 : (previous.streak ?? 0) + 1,
      lastReviewed: todayKey(),
      subjectId,
      englishPractice: true,
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
