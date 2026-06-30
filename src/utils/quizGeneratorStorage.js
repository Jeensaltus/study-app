import { getDeviceId, migrateLegacyStorage, scopedStorageKey } from "./deviceId";

const LEGACY_QUIZ_KEY = "freshman-ai-quiz-history-v1";
const MAX_HISTORY = 20;

function quizHistoryKey() {
  return scopedStorageKey(LEGACY_QUIZ_KEY, getDeviceId());
}

export function readQuizHistory() {
  try {
    migrateLegacyStorage(LEGACY_QUIZ_KEY, quizHistoryKey());
    const raw = localStorage.getItem(quizHistoryKey());
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY) : [];
  } catch {
    return [];
  }
}

export function saveQuizToHistory(quiz) {
  try {
    const history = readQuizHistory();
    const entry = { ...quiz, savedAt: Date.now() };
    localStorage.setItem(quizHistoryKey(), JSON.stringify([entry, ...history].slice(0, MAX_HISTORY)));
  } catch {
    // ignore storage errors
  }
}
