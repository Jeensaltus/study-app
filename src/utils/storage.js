import { DEFAULT_APP_SETTINGS, VALID_AI_MODELS } from "../config/settingsOptions.js";
import { getDeviceId, migrateLegacyStorage, scopedStorageKey } from "./deviceId.js";

const LEGACY_STORAGE_KEY = "freshman-study-progress-v1";

function progressStorageKey() {
  return scopedStorageKey(LEGACY_STORAGE_KEY, getDeviceId());
}

const defaultProgress = {
  flashcards: {},
  quizHistory: [],
  activity: {},
  completedSections: {},
  settings: { ...DEFAULT_APP_SETTINGS },
};

export function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function readProgress() {
  try {
    migrateLegacyStorage(LEGACY_STORAGE_KEY, progressStorageKey());
    const raw = localStorage.getItem(progressStorageKey());
    if (!raw) return structuredClone(defaultProgress);
    const stored = JSON.parse(raw);
    return {
      ...structuredClone(defaultProgress),
      ...stored,
      settings: {
        ...structuredClone(defaultProgress.settings),
        ...(stored.settings ?? {}),
        quizDefaults: {
          ...defaultProgress.settings.quizDefaults,
          ...(stored.settings?.quizDefaults ?? {}),
        },
      },
    };
  } catch {
    return structuredClone(defaultProgress);
  }
}

export function writeProgress(nextProgress) {
  try {
    localStorage.setItem(progressStorageKey(), JSON.stringify(nextProgress));
    window.dispatchEvent(new Event("freshman-progress"));
  } catch {
    /* quota exceeded or private mode — keep in-memory state usable */
  }
}

export function updateProgress(updater) {
  const current = readProgress();
  const next = updater(current);
  writeProgress(next);
  return next;
}

export function resetProgress() {
  updateProgress((progress) => ({
    ...structuredClone(defaultProgress),
    settings: progress.settings,
  }));
}

export function markActivity(type, subjectId) {
  updateProgress((progress) => {
    const key = todayKey();
    const day = progress.activity[key] ?? { flashcards: 0, quizzes: 0, sections: 0, subjects: [] };
    const subjects = Array.from(new Set([...(day.subjects ?? []), subjectId].filter(Boolean)));
    progress.activity[key] = {
      ...day,
      [type]: (day[type] ?? 0) + 1,
      subjects,
    };
    return progress;
  });
}

export function sectionProgressKey(subjectId, chapterId, sectionId) {
  return `${subjectId}:${chapterId}:${sectionId}`;
}

export function isSectionComplete(progress, subjectId, chapterId, sectionId) {
  const key = sectionProgressKey(subjectId, chapterId, sectionId);
  return progress.completedSections[key] === todayKey();
}

export function toggleSection(subjectId, chapterId, sectionId) {
  return updateProgress((progress) => {
    const key = sectionProgressKey(subjectId, chapterId, sectionId);
    const today = todayKey();

    if (progress.completedSections[key] === today) {
      delete progress.completedSections[key];
      const day = progress.activity[today] ?? { flashcards: 0, quizzes: 0, sections: 0, subjects: [] };
      progress.activity[today] = {
        ...day,
        sections: Math.max(0, (day.sections ?? 0) - 1),
      };
      return progress;
    }

    progress.completedSections[key] = today;
    progress.activity[today] = {
      ...(progress.activity[today] ?? { flashcards: 0, quizzes: 0, sections: 0, subjects: [] }),
      sections: (progress.activity[today]?.sections ?? 0) + 1,
      subjects: Array.from(new Set([...(progress.activity[today]?.subjects ?? []), subjectId])),
    };
    return progress;
  });
}

export function saveQuizScore(subjectId, score, total) {
  updateProgress((progress) => {
    progress.quizHistory.push({
      id: crypto.randomUUID?.() ?? `${Date.now()}`,
      subjectId,
      score,
      total,
      date: todayKey(),
      timestamp: Date.now(),
    });
    if (progress.quizHistory.length > 500) {
      progress.quizHistory = progress.quizHistory.slice(-500);
    }
    const key = todayKey();
    const day = progress.activity[key] ?? { flashcards: 0, quizzes: 0, sections: 0, subjects: [] };
    progress.activity[key] = {
      ...day,
      quizzes: (day.quizzes ?? 0) + 1,
      subjects: Array.from(new Set([...(day.subjects ?? []), subjectId])),
    };
    return progress;
  });
}

export function updateSettings(settings) {
  return updateProgress((progress) => {
    const next = { ...progress.settings, ...settings };
    if (settings.quizDefaults) {
      next.quizDefaults = { ...progress.settings.quizDefaults, ...settings.quizDefaults };
    }
    if (next.aiModel && !VALID_AI_MODELS.has(next.aiModel)) {
      next.aiModel = DEFAULT_APP_SETTINGS.aiModel;
    }
    progress.settings = next;
    return progress;
  });
}
