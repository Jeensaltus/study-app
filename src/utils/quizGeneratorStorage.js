import { getDeviceId, migrateLegacyStorage, scopedStorageKey } from "./deviceId";

const LEGACY_QUIZ_KEY = "freshman-ai-quiz-history-v1";
const LEGACY_SESSION_KEY = "freshman-ai-quiz-session-v1";
const MAX_HISTORY = 20;

function quizHistoryKey() {
  return scopedStorageKey(LEGACY_QUIZ_KEY, getDeviceId());
}

function activeSessionKey(subjectId) {
  return `${scopedStorageKey(LEGACY_SESSION_KEY, getDeviceId())}-${subjectId}`;
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

export function readActiveQuizSession(subjectId) {
  if (!subjectId) return null;
  try {
    const raw = localStorage.getItem(activeSessionKey(subjectId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.quiz?.questions?.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveActiveQuizSession(subjectId, session) {
  if (!subjectId || !session?.quiz) return;
  try {
    localStorage.setItem(
      activeSessionKey(subjectId),
      JSON.stringify({ ...session, savedAt: Date.now() })
    );
  } catch {
    // ignore storage errors
  }
}

export function clearActiveQuizSession(subjectId) {
  if (!subjectId) return;
  try {
    localStorage.removeItem(activeSessionKey(subjectId));
  } catch {
    // ignore storage errors
  }
}
