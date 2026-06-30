/** Calculus course tracks at Chula — engineering vs science faculty */

export const CAL_TRACKS = {
  engineering: {
    id: "engineering",
    label: "วิศวกรรม",
    labelEn: "Engineering",
    credits: 3,
    codes: { calculus1: "2301107", calculus2: "2301108" },
    examNote: "ข้อสอบในแอปอ้างอิง 2301107/2301108 (วิศวฯ)",
    descriptions: {
      calculus1:
        "ลิมิต ความต่อเนื่อง อนุพันธ์ การประยุกต์ อินทิกรัล เทคนิคอินทิกรัล และ improper integrals (2301107 · 3 หน่วยกิต)",
      calculus2:
        "อุปนัยเชิงคณิตศาสตร์ ลำดับและอนุกรม Taylor เวกเตอร์ 3D แคลculus หลายตัวแปร และ ODE เบื้องต้น (2301108 · 3 หน่วยกิต)",
    },
  },
  science: {
    id: "science",
    label: "วิทยาศาสตร์",
    labelEn: "Science",
    credits: 4,
    codes: { calculus1: "2301113", calculus2: "2301114" },
    examNote: "เนื้อหาสไลด์ map ตาม 2301113/2301114 (4 หน่วยกิต) — ข้อสอบวิศวฯ ในแอปอาจ scope ต่างเล็กน้อย",
    descriptions: {
      calculus1:
        "ฟังก์ชัน ลิมิต อนุพันธ์ การประยุกต์ อินทิกรัล transcendental เทคนิคอินทิกรัล และ modeling ODE (2301113 · 4 หน่วยกิต)",
      calculus2:
        "เทคนิคอินทิกรัล ลำดับ อนุกรม พาราเมตริก พิกัดเชิงขั้ว และ multivariable calculus (2301114 · 4 หน่วยกิต)",
    },
  },
};

/** Sections เน้นใน SCI track — วิศวฯ ยังดูได้แต่ tag เป็น supplementary */
export const SCIENCE_SUPPLEMENTARY = {
  calculus1: new Set([
    "functions/function-basics",
    "functions/exp-log-review",
  ]),
};

export const CAL_SUBJECT_IDS = new Set(["calculus1", "calculus2"]);

export function getCalculusTrack(settings = {}) {
  return settings.calculusTrack === "science" ? "science" : "engineering";
}

export function getCalTrackConfig(settings = {}) {
  return CAL_TRACKS[getCalculusTrack(settings)];
}

export function resolveSubjectMeta(baseMeta, settings = {}) {
  if (!baseMeta || !CAL_SUBJECT_IDS.has(baseMeta.id)) return baseMeta;
  const track = getCalTrackConfig(settings);
  return {
    ...baseMeta,
    code: track.codes[baseMeta.id],
    calculusTrack: track.id,
    trackLabel: track.label,
    credits: track.credits,
    examNote: track.examNote,
    description: track.descriptions[baseMeta.id] ?? baseMeta.description,
  };
}

export function resolveSubjectsMeta(list, settings = {}) {
  return list.map((s) => resolveSubjectMeta(s, settings));
}

function sectionKey(chapterId, sectionId) {
  return `${chapterId}/${sectionId}`;
}

/** Tag sections for UI; engineering keeps all content but marks SCI-only emphasis */
export function annotateCalTrackSections(subject, settings = {}) {
  if (!CAL_SUBJECT_IDS.has(subject.id)) return subject;
  const track = getCalculusTrack(settings);
  const supplementary = SCIENCE_SUPPLEMENTARY[subject.id];
  if (track === "science" || !supplementary?.size) return subject;

  return {
    ...subject,
    chapters: (subject.chapters ?? []).map((chapter) => ({
      ...chapter,
      sections: (chapter.sections ?? []).map((section) => {
        const key = sectionKey(chapter.id, section.id);
        if (!supplementary.has(key)) return section;
        return {
          ...section,
          trackTag: "ทบทวน (SCI track)",
          trackTagDetail: "หัวข้อเน้นทบทวนใน 2301113 — 2301107 อาจไม่เน้นสอบ",
        };
      }),
    })),
  };
}

export function applyCalTrackToSubject(subject, settings = {}) {
  if (!CAL_SUBJECT_IDS.has(subject.id)) return subject;
  const track = getCalTrackConfig(settings);
  return annotateCalTrackSections(
    {
      ...subject,
      code: track.codes[subject.id],
      calculusTrack: track.id,
    },
    settings
  );
}
