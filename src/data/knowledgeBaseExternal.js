/** Google Drive / external links — edit by hand (no PDF hosting on server). */
const YEAR1_DRIVE_FOLDER =
  "https://drive.google.com/drive/folders/1k4X9aWT-FiFiL2BkgYpGvHp82VJ7Vsc2?usp=sharing";

const DIRECT_DRIVE_FOLDERS = {
  calculus1: {
    url: "https://drive.google.com/drive/folders/1EWWuWL7osxUS6dZ80L0Ivt6CyLjPO_wa?usp=drive_link",
    folder: "Calculus 1",
    category: "textbook",
  },
  calculus2: {
    url: "https://drive.google.com/drive/folders/120FARxEsaDc8Nh4bRWQsh1s5mSOZH0II?usp=drive_link",
    folder: "Calculus 2",
    category: "textbook",
  },
  programming: {
    url: "https://drive.google.com/drive/folders/1F6B2yb8Y1-ymjI1bJe5J83Hy-AL2mLE0?usp=drive_link",
    folder: "Com Prog",
    category: "other",
  },
  chemistry: {
    url: "https://drive.google.com/drive/folders/1yYmvK1RFY8QYeugpmTN9pxRgwFTB1T3O?usp=drive_link",
    folder: "Gen Chem",
    category: "textbook",
    extra: [{ folder: "Gen Chem Lab", category: "exercise", useYear1: true }],
  },
  physics1: {
    url: "https://drive.google.com/drive/folders/1b1rDiHTf52-NVWz0yOGxMArH1FvcQsim?usp=drive_link",
    folder: "Gen Phys 1",
    category: "textbook",
    extra: [{ folder: "Gen Phys Lab", category: "exercise", useYear1: true }],
  },
  physics2: {
    folder: "Gen Phys",
    category: "textbook",
    useYear1: true,
    driveHint: "Gen Phys",
  },
  english: {
    folder: "EXP ENG",
    category: "textbook",
    useYear1: true,
    driveHint: "EXP ENG",
  },
  materials: {
    url: "https://drive.google.com/drive/folders/1m6sFiuIBqjtqfWBMNZSjO1Cy-G4-pJ2x?usp=drive_link",
    folder: "Materials",
    category: "textbook",
  },
};

const CATEGORY_LABELS = {
  textbook: "ตำราเรียน",
  summary: "สรุป/ทบทวน",
  exercise: "แบบฝึกหัด",
  midterm: "ข้อสอบกลางภาค",
  final: "ข้อสอบปลายภาค",
  mock: "ข้อสอบจำลอง",
  "past-exam": "แนวข้อสอบ",
  solutions: "เฉลย",
  other: "เอกสารอื่นๆ",
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildDriveEntry(subjectId, config) {
  const { folder, category, url, useYear1, driveHint } = config;
  const categoryLabel = CATEGORY_LABELS[category] ?? "เอกสารอื่นๆ";
  const targetUrl = url ?? (useYear1 ? YEAR1_DRIVE_FOLDER : "#");
  const hint = driveHint ?? folder;
  const direct = Boolean(url);

  return {
    id: `drive-${subjectId}-${slugify(folder)}`,
    title: `${folder} — Google Drive`,
    description: direct
      ? `โฟลเดอร์ ${folder} — Midterm, Final และเอกสารอื่นๆ บน Drive`
      : `โฟลเดอร์ Year 1 บน Drive — เปิดแล้วเข้า “${hint}” (PDF อยู่ข้างใน)`,
    category,
    categoryLabel,
    fileName: folder,
    url: targetUrl,
    external: true,
    linkType: "folder",
    driveHint: hint,
  };
}

export function getExternalKnowledgeBaseItems(subjectId) {
  const mapping = DIRECT_DRIVE_FOLDERS[subjectId];
  if (!mapping) return [];

  const entries = [buildDriveEntry(subjectId, mapping)];
  for (const extra of mapping.extra ?? []) {
    entries.push(buildDriveEntry(subjectId, extra));
  }
  return entries;
}

export function getExternalKnowledgeBaseCount(subjectId) {
  return getExternalKnowledgeBaseItems(subjectId).length;
}
