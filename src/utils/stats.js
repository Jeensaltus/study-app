import { subjectsMeta } from "../data/subjectsMeta";
import { DEFAULT_APP_SETTINGS } from "../config/settingsOptions";
import { todayKey } from "./storage";

function isSectionDoneToday(progress, key) {
  return progress.completedSections[key] === todayKey();
}

export function getDailyStudyProgress(progress) {
  const today = todayKey();
  const day = progress.activity[today] ?? {};
  const done = (day.flashcards ?? 0) + (day.sections ?? 0);
  const goal = progress.settings?.dailyGoal ?? DEFAULT_APP_SETTINGS.dailyGoal;
  return {
    done,
    goal,
    percent: goal > 0 ? Math.min(100, Math.round((done / goal) * 100)) : 0,
  };
}

export function getSubjectProgress(subjectOrMeta, progress) {
  if (subjectOrMeta.chapters?.length) {
    const allKeys = subjectOrMeta.chapters.flatMap((chapter) =>
      (chapter.sections ?? []).map((section) => `${subjectOrMeta.id}:${chapter.id}:${section.id}`)
    );
    if (allKeys.length) {
      const completed = allKeys.filter((key) => isSectionDoneToday(progress, key)).length;
      return Math.round((completed / allKeys.length) * 100);
    }
  }

  const sections = subjectOrMeta.progressSections ?? [];
  if (!sections.length) return 0;
  const completed = sections.filter((key) => isSectionDoneToday(progress, key)).length;
  return Math.round((completed / sections.length) * 100);
}

export function getAverageQuizScore(progress, subjectId) {
  const rows = progress.quizHistory.filter(
    (row) => (!subjectId || row.subjectId === subjectId) && row.total > 0
  );
  if (!rows.length) return 0;
  const percent = rows.reduce((sum, row) => sum + row.score / row.total, 0) / rows.length;
  return Math.round(percent * 100);
}

export function getStudyStreak(progress) {
  let streak = 0;
  const cursor = new Date();
  while (true) {
    const key = todayKey(cursor);
    const day = progress.activity[key];
    const active = day && ((day.flashcards ?? 0) + (day.quizzes ?? 0) + (day.sections ?? 0) > 0);
    if (!active) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function getDashboardRows(progress) {
  return subjectsMeta.map((subject) => ({
    name: subject.title.replace("General ", ""),
    score: getAverageQuizScore(progress, subject.id),
    progress: getSubjectProgress(subject, progress),
  }));
}

export function getActivitySeries(progress, days = 30) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - index - 1));
    const key = todayKey(date);
    const row = progress.activity[key] ?? {};
    return {
      date: key.slice(5),
      fullDate: key,
      activity: (row.flashcards ?? 0) + (row.quizzes ?? 0) + (row.sections ?? 0),
    };
  });
}

export function getTotalQuizzes(progress) {
  return progress.quizHistory.length;
}
