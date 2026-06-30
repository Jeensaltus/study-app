/** Map problem topic key → bank topic label (English chapter title) */
export const TOPIC_TO_CHAPTER_TITLE = {
  limit: "Limits and Continuity",
  continuity: "Limits and Continuity",
  derivative: "Derivatives",
  integral: "Integrals",
  application: "Applications of Derivatives",
  transcendental: "Transcendental Functions",
  integration_technique: "Integration Techniques",
  techniques_cal1: "Techniques of Integration",
  app_integration: "Applications of Integration",
  induction: "Mathematical Induction",
  sequence: "Sequences and Series",
  series: "Sequences and Series",
  power_series: "Sequences and Series",
  vector: "Vectors and 3D Geometry",
  line_plane: "Vectors and 3D Geometry",
  curve: "Parametric & Polar Coordinates",
  multivariable: "Multivariable Calculus",
  double_integral: "Multiple Integrals",
  ode: "Introduction to Differential Equations",
  modeling_ode: "Modeling and Differential Equations",
  functions: "Functions and Models",
  kinematics: "Kinematics",
  newton: "Newton's Laws",
  rotation: "Rotation and Angular Motion",
  energy: "Work, Energy, and Power",
  momentum: "Momentum and Collisions",
  fluids: "Fluid Mechanics",
  waves: "Oscillations and Waves",
  thermo: "Thermodynamics and Kinetic Theory",
  gravitation: "Universal Gravitation",
  statics: "Statics and Elasticity",
  electricity: "Electric Charge and Field",
  capacitance: "Capacitance",
  circuits: "Electric Circuits",
  ac_circuits: "Electric Circuits",
  magnetism: "Magnetism",
  optics: "Geometric Optics",
  wave_optics: "Wave Optics",
  em_waves: "Waves and Electromagnetism",
  modern: "Modern Physics",
};

/** Subject-specific chapter title for a template topic key */
export function topicToChapter(subjectId, topic) {
  if (subjectId === "calculus1") {
    if (topic === "integration_technique") return "Techniques of Integration";
    if (topic === "ode") return "Modeling and Differential Equations";
  }
  if (subjectId === "calculus2" && topic === "integration_technique") {
    return "Integration Techniques";
  }
  return TOPIC_TO_CHAPTER_TITLE[topic] ?? topic;
}

/** Infer midterm/final/practice from PDF source string */
export function inferExamType(source = "") {
  const s = source.toLowerCase();
  if (/^mid|มิดเทอม|midterm/.test(s) || /\bmid\b/.test(s)) return "midterm";
  if (/^final|ปลายภาค|fin\b/.test(s) || /\bfinal\b/.test(s)) return "final";
  if (/mock/.test(s)) return "final";
  return "practice";
}

/** Topic weights by subject + exam mode (Chula engineering 2301107/1108 pattern) */
export const EXAM_TOPIC_WEIGHTS = {
  calculus1: {
    all: {
      "Functions and Models": 0.08,
      "Limits and Continuity": 0.22,
      Derivatives: 0.22,
      "Applications of Derivatives": 0.18,
      Integrals: 0.18,
      "Transcendental Functions": 0.06,
      "Techniques of Integration": 0.06,
    },
    midterm: {
      "Limits and Continuity": 0.33,
      Derivatives: 0.26,
      Integrals: 0.26,
      "Applications of Derivatives": 0.15,
    },
    final: {
      Integrals: 0.32,
      "Applications of Derivatives": 0.22,
      "Techniques of Integration": 0.18,
      "Transcendental Functions": 0.13,
      "Limits and Continuity": 0.15,
    },
  },
  calculus2: {
    all: {
      "Mathematical Induction": 0.06,
      "Integration Techniques": 0.12,
      "Applications of Integration": 0.08,
      "Sequences and Series": 0.28,
      "Parametric & Polar Coordinates": 0.08,
      "Vectors and 3D Geometry": 0.1,
      "Multivariable Calculus": 0.18,
      "Multiple Integrals": 0.1,
      "Introduction to Differential Equations": 0.1,
    },
    midterm: {
      "Sequences and Series": 0.5,
      "Vectors and 3D Geometry": 0.16,
      "Integration Techniques": 0.16,
      "Mathematical Induction": 0.1,
      "Applications of Integration": 0.08,
    },
    final: {
      "Multivariable Calculus": 0.52,
      "Introduction to Differential Equations": 0.21,
      "Multiple Integrals": 0.17,
      "Parametric & Polar Coordinates": 0.1,
    },
  },
  physics1: {
    all: {
      Kinematics: 0.14,
      "Newton's Laws": 0.14,
      "Rotation and Angular Motion": 0.12,
      "Work, Energy, and Power": 0.12,
      "Momentum and Collisions": 0.12,
      "Fluid Mechanics": 0.1,
      "Oscillations and Waves": 0.12,
      "Thermodynamics and Kinetic Theory": 0.14,
      "Universal Gravitation": 0.06,
      "Statics and Elasticity": 0.04,
    },
    midterm: {
      Kinematics: 0.22,
      "Newton's Laws": 0.22,
      "Rotation and Angular Motion": 0.18,
      "Work, Energy, and Power": 0.2,
      "Momentum and Collisions": 0.18,
    },
    final: {
      "Fluid Mechanics": 0.14,
      "Oscillations and Waves": 0.2,
      "Thermodynamics and Kinetic Theory": 0.24,
      "Universal Gravitation": 0.1,
      "Statics and Elasticity": 0.06,
      Kinematics: 0.06,
      "Newton's Laws": 0.06,
      "Rotation and Angular Motion": 0.06,
      "Work, Energy, and Power": 0.08,
      "Momentum and Collisions": 0.06,
    },
  },
  physics2: {
    all: {
      "Electric Charge and Field": 0.18,
      Capacitance: 0.1,
      "Electric Circuits": 0.18,
      Magnetism: 0.18,
      "Wave Optics": 0.1,
      "Waves and Electromagnetism": 0.08,
      "Geometric Optics": 0.08,
      "Modern Physics": 0.1,
    },
    midterm: {
      "Electric Charge and Field": 0.28,
      Capacitance: 0.12,
      "Electric Circuits": 0.32,
      Magnetism: 0.28,
    },
    final: {
      "Wave Optics": 0.18,
      "Waves and Electromagnetism": 0.1,
      "Geometric Optics": 0.12,
      "Modern Physics": 0.35,
      "Electric Circuits": 0.1,
      Magnetism: 0.1,
      Capacitance: 0.05,
    },
  },
};

export function getTopicWeights(subjectId, examMode = "all") {
  const subject = EXAM_TOPIC_WEIGHTS[subjectId];
  if (!subject) return {};
  return subject[examMode] ?? subject.all ?? {};
}

/** Chapter titles in scope for midterm/final preset */
export function getExamModeChapterTitles(subjectId, examMode = "all") {
  if (!examMode || examMode === "all") return null;
  return Object.keys(getTopicWeights(subjectId, examMode));
}

export function getExamModePreview(subjectId, examMode) {
  const weights = getTopicWeights(subjectId, examMode);
  return Object.entries(weights)
    .sort((a, b) => b[1] - a[1])
    .map(([topic, w]) => `${topic} ~${Math.round(w * 100)}%`)
    .join(" · ");
}

/** User-facing difficulty modes → tier mix (easy / medium / hard in bank) */
export const DIFFICULTY_MIX = {
  easy: { easy: 0.7, medium: 0.25, hard: 0.05 },
  normal: { easy: 0.3, medium: 0.4, hard: 0.3 },
  hard: { easy: 0.1, medium: 0.3, hard: 0.6 },
};

export const DIFFICULTY_LABELS = {
  easy: "ง่าย",
  normal: "ปกติ",
  hard: "ยาก",
};

export function normalizeDifficultyMode(mode) {
  if (mode === "medium" || mode === "exam-level") return "normal";
  if (mode === "easy" || mode === "normal" || mode === "hard") return mode;
  return "normal";
}

export function normalizeEntryTier(entryDifficulty) {
  if (entryDifficulty === "easy") return "easy";
  if (entryDifficulty === "hard" || entryDifficulty === "exam-level") return "hard";
  return "medium";
}

export function getDifficultyTierWeight(mode, entryDifficulty) {
  const mix = DIFFICULTY_MIX[normalizeDifficultyMode(mode)] ?? DIFFICULTY_MIX.normal;
  return mix[normalizeEntryTier(entryDifficulty)] ?? 0.01;
}

export function getDifficultyMixPreview(mode) {
  const mix = DIFFICULTY_MIX[normalizeDifficultyMode(mode)] ?? DIFFICULTY_MIX.normal;
  return `ง่าย ~${Math.round(mix.easy * 100)}% · ปานกลาง ~${Math.round(mix.medium * 100)}% · ยาก ~${Math.round(mix.hard * 100)}%`;
}
