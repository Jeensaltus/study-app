import { CEFR_LEVELS, DOMAIN_CATEGORIES } from "../utils/englishFlashcardDeck";

export const DAILY_GOAL_OPTIONS = [15, 20, 30, 50];

export const AI_MODEL_OPTIONS = [
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash", provider: "Gemini" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro", provider: "Gemini" },
  { id: "minimax-m3", label: "MiniMax M2.7", provider: "NVIDIA NIM" },
  { id: "deepseek-v4-flash", label: "DeepSeek V4 Flash", provider: "NVIDIA NIM" },
  { id: "nemotron-super", label: "Nemotron Super 120B", provider: "NVIDIA NIM" },
  { id: "qwen3.5-122b", label: "Qwen 3.5 122B", provider: "NVIDIA NIM" },
];

export const VALID_AI_MODELS = new Set(AI_MODEL_OPTIONS.map((m) => m.id));

export const QUIZ_COUNT_OPTIONS = [5, 10, 15, 20];

export const QUIZ_DIFFICULTY_OPTIONS = [
  { id: "easy", label: "ง่าย" },
  { id: "normal", label: "ปกติ" },
  { id: "hard", label: "ยาก" },
];

export const QUIZ_FORMAT_OPTIONS = [
  { id: "multiple-choice", label: "Multiple Choice" },
  { id: "practice-card", label: "Practice Card" },
  { id: "pdf", label: "PDF Export" },
];

export const ENGLISH_FILTER_OPTIONS = [
  { id: "all", label: "รวมทั้งหมด" },
  ...CEFR_LEVELS.map((level) => ({ id: level, label: level })),
  ...DOMAIN_CATEGORIES.map((d) => ({ id: d.id, label: d.label })),
];

export const DEFAULT_APP_SETTINGS = {
  darkMode: false,
  calculusTrack: "engineering",
  dailyGoal: 30,
  aiModel: "gemini-2.5-flash",
  quizDefaults: {
    count: 5,
    difficulty: "normal",
    format: "multiple-choice",
  },
  englishDefaultFilter: "all",
};
