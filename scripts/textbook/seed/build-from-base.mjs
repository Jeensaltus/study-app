#!/usr/bin/env node
/**
 * Generate seed entries from base subject files for sections missing hand-written seed.
 * Adds warning + second example so every section meets QA (2+ examples).
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { iterSections } from "../lib/syllabus.mjs";
import cal1 from "./cal1.mjs";
import cal2 from "./cal2.mjs";
import phy1 from "./phy1.mjs";
import phy2 from "./phy2.mjs";
import chem from "./chem.mjs";
import extraPhyChem from "./extra-phy-chem.mjs";
import { SECOND_EXAMPLES } from "./second-examples.mjs";
import { physics2 } from "../../../src/data/physics2.js";
import { chemistry } from "../../../src/data/chemistry.js";

const __dir = dirname(fileURLToPath(import.meta.url));

/** Hand-written seeds only — from-base sections are regenerated each run */
const HAND_WRITTEN = {
  ...cal1,
  ...cal2,
  ...phy1,
  ...phy2,
  ...chem,
  ...extraPhyChem,
};

const WARNINGS = {
  coulomb: "ใช้ $r$ เป็นระยะห่างระหว่างจุดศูนย์กลางประจุ — อย่าใช้ระยะจากขอบวัตถุ",
  "electric-field-def": "ทิศของ $\\vec E$ คือทิศที่ $+q$ จะถูกผลัก — อย่าสลับกับทิศแรงที่ประจุทดสอบรับ",
  "gauss-law": "Gaussian surface ต้องมีสมมาตรกับการกระจายประจุ — มิฉะนั้น $E$ ไม่คงที่บนผิว",
  "electric-potential": "ศักย์เป็นสเกลาร์ — บวกแรงดันไฟฟ้า อย่าบวกเวกเตอร์ $V$ แบบ component โดยไม่จำเป็น",
  "capacitance-def": "ความจุขึ้นกับ geometry และ dielectric — ไม่ขึ้นกับ $Q$ หรือ $V$ โดยตรง",
  ohm: "Ohm's law ใช้ได้กับ conductor ที่อุณหภูมิคงที่ — ความต้านทานเปลี่ยนเมื่อ $T$ เปลี่ยน",
  kirchhoff: "KCL: กระแสเข้า = กระแสออกที่ junction; KVL: ผลรวม $\\Delta V$ รอบ loop = 0 (เลือกทิศ loop ให้ชัด)",
  "rc-circuit": "ที่ $t=0$ ตัวเก็บประจุเป็น open circuit (กระแสเริ่มสูง) — ใช้ $Q(t)=Q_f(1-e^{-t/RC})$",
  "magnetic-force": "ใช้ right-hand rule สำหรับ $\\vec F=q\\vec v\\times\\vec B$ — มุมระหว่าง $v$ กับ $B$ สำคัญ",
  "ampere-law": "Amère's law ใช้ได้เมื่อความเข้ม $B$ คงที่รอบ loop — เลือก Amperian loop ให้สมมาตร",
  faraday: "Lenz's law: กระแสเหนี่ยวนำต่อต้านการเปลี่ยน flux — ตรวจเครื่องหมาย $\\mathcal{E}$",
  "wave-basics": "แยกความเร็วคลื่น $v$ กับความเร็วอนุภาคของ medium — อย่าสับสน $f$ กับ $\\omega$",
  "sound-doppler": "ใช้เครื่องหมาย: แหล่ง/ผู้ฟังเข้าหากัน → $f$ สูงขึ้น; ถอยห่าง → $f$ ต่ำลง",
  "em-waves": "คลื่น EM ไม่ต้องมี medium — $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ ในสุญญากาศ",
  "reflection-refraction": "Snell's law ใช้ $n_1\\sin\\theta_1=n_2\\sin\\theta_2$ — มุมวัดจาก normal",
  "lenses-mirrors": "sign convention: ระยะวัตถุ/ภาพ บวก/ลบตาม convention ของตำรา — ตรวจก่อนคำนวณ",
  photoelectric: "พลังงานจลน์สูงสุด $K_{max}=hf-\\phi$ — ไม่ขึ้นกับความเข้มแสง",
  "atomic-spectra": "Balmer/Rydberg ใช้ $n$ เป็นจำนวนเต็ม — แปลง $\\lambda$ เป็น m ก่อนแทน $R$",
  "atomic-model": "quantum number ต้องสอดคล้อง: $|m_l|\\le l\\le n-1$",
  orbitals: "Pauli: ออร์บิทัลหนึ่งมี electron ได้ไม่เกิน 2 ตัว spin ตรงข้าม",
  "electron-config": "Aufbau มีข้อยกเว้น (Cr, Cu) — ตรวจ d-block",
  "periodic-trends": "แนวโน้ม periodic ใช้ได้ใน period เดียวกัน — อย่าเปรียบ Na กับ Ne",
  "mole-concept": "แปลง g ↔ mol ด้วย molar mass — ตรวจสูตรก่อนคำนวณ",
  "chemical-equations": "balance อátom ก่อน แล้วค่อยหา limiting reagent",
  solutions: "Molarity เปลี่ยนเมื่อ dilute — ใช้ $M_1V_1=M_2V_2$",
  "ionic-covalent": "EN ต่างมาก → ionic; ใกล้กัน → covalent",
  "lewis-structures": "นับ valence electron ให้ครบ — formal charge ช่วยเลือกโครงสร้าง",
  vsepr: "จำนวน electron domain รวม lone pair — lone pair ดัน bond angle เล็กลง",
  hybridization: "จำนวน hybrid orbital = จำนวน bond + lone pair ที่ central atom",
  "heat-enthalpy": "$\\Delta H$ บวก = endothermic — อย่าสลับ sign ของ $q$ กับ $\\Delta H$ ใน calorimetry",
  entropy: "$\\Delta S>0$ เมื่อ disorder เพิ่ม — ก๊าซ > of liquid > solid",
  gibbs: "$\\Delta G=\\Delta H-T\\Delta S$ — ที่ equilibrium $\\Delta G=0$",
  "equilibrium-constant": "$K$ ไม่รวม pure solid/liquid — ใช้ activity ≈ concentration",
  "reaction-quotient": "$Q>K$ → ไปทาง reactants; $Q<K$ → ไปทาง products",
  "le-chatelier": "Le Chatelier ทำนายทิศทาง ไม่ใช่ขนาดของ $K$",
  "acid-base": "Ka/Kb ใช้กับ weak acid/base — strong acid แทบ ionize 100%",
  "rl-dc-circuit": "ที่ $t=0$ inductor เป็น open circuit ($I=0$) — อย่าใช้ $V=IR$ ทันที",
  "motional-emf": "Motional EMF: $\\mathcal{E}=Blv$ เมื่อ B, L, v ตั้งฉากกัน",
  "poynting-vector": "Poynting vector $\\vec S=\\vec E\\times\\vec H/\\mu_0$ — ทิศการไหลของพลังงาน EM",
  "thin-film": "Thin film: $2nt=(m+\\frac12)\\lambda$ สำหรับ destructive reflection (AR coating)",
  "brewster-angle": "Brewster angle $\\theta_B=\\arctan(n_2/n_1)$ — reflected light เป็น polarized",
  "particle-in-box": "Ground state $n=1$: $|\\psi|^2$ symmetric ใน box",
  "nuclear-decay-q": "$Q=\\Delta m\\cdot931.5\\,MeV$ — ใช้ mass table (u)",
  "pv-thermo-cycle": "Cyclic process: $\\Delta U=0$ ดังนั้น $Q_{net}=W_{net}$",
  "maxwell-mean-free-path": "Mean free path $\\lambda=1/(\\sqrt2\\pi d^2 n/V)$ — ใช้ number density",
  manometer: "จุดเดียวกันใน fluid continuous → ความดันเท่ากัน",
  "doppler-effect": "แหล่ง/ผู้ฟังเข้าหากัน → $f$ สูงขึ้น; ถอยห่าง → $f$ ต่ำลง",
  "collision-spring-shm": "หลัง inelastic collision + spring: อนุรักษ์ momentum แล้วใช้ energy ใน SHM",
  "ac-circuits": "AC: ใช้ phasor $Z=\\sqrt{R^2+(X_L-X_C)^2}$",
  "rlc-series": "ที่ resonance $X_L=X_C$ → $Z=R$ ต่ำสุด",
};

function normalizeExample(section) {
  if (section.examples?.length) return section.examples[0];
  if (section.example) return { level: "Basic", ...section.example };
  return null;
}

function inferAnswer(steps) {
  if (!steps?.length) return "";
  const last = steps[steps.length - 1];
  const m = last.match(/^(.+?)(?:\s*[✓(]|$)/);
  return m ? m[1].trim() : last.trim();
}

function makeSecondExample(section, subjectId) {
  const key = `${subjectId}/${section.id}`;
  if (SECOND_EXAMPLES[key]) return SECOND_EXAMPLES[key];
  throw new Error(`Missing second example for ${key} — add to second-examples.mjs`);
}

function buildSeedEntry(section, subjectId) {
  const ex1 = normalizeExample(section);
  if (!ex1) return null;

  const warning = WARNINGS[section.id] ?? `ตรวจหน่วย SI และ convention ของตำรา ${subjectId} ก่อนส่งคำตอบ`;
  const ex2 = makeSecondExample(section, subjectId);

  return {
    concept: section.concept ?? "",
    formula: section.formula ?? "",
    warning,
    examples: [
      {
        title: ex1.title ?? ex1.level ?? "ตัวอย่างที่ 1",
        level: ex1.level === "Hard" ? "Medium" : ex1.level ?? "Basic",
        tip: ex1.tip ?? "",
        problem: ex1.problem ?? "",
        steps: ex1.steps ?? [],
        answer: ex1.answer || inferAnswer(ex1.steps),
      },
      ex2,
    ],
    practice: section.practice ?? `ฝึกเพิ่ม: ${section.title}`,
    ...(section.graph ? { graph: section.graph } : {}),
    ...(section.derivation ? { derivation: section.derivation } : {}),
  };
}

function collectBaseSections(subjectId, base) {
  const map = new Map();
  for (const ch of base.chapters ?? []) {
    for (const s of ch.sections ?? []) {
      map.set(s.id, s);
    }
  }
  return map;
}

function main() {
  const bases = { physics2, chemistry };
  const generated = { physics2: {}, chemistry: {} };

  for (const subjectId of Object.keys(bases)) {
    const baseMap = collectBaseSections(subjectId, bases[subjectId]);
    for (const { section } of iterSections(subjectId)) {
      const key = `${subjectId}/${section.id}`;
      if (HAND_WRITTEN[key]) continue;
      const baseSec = baseMap.get(section.id);
      if (!baseSec) continue;
      const seed = buildSeedEntry(baseSec, subjectId);
      if (seed) generated[subjectId][key] = seed;
    }
  }

  for (const [subjectId, entries] of Object.entries(generated)) {
    const lines = [
      `/** Auto-generated base upgrade — npm run seed:from-base */`,
      `import { ex, sec } from "./helpers.mjs";`,
      ``,
      `export default {`,
    ];
    for (const [key, seed] of Object.entries(entries)) {
      const json = JSON.stringify(seed, null, 2)
        .replace(/"([^"]+)":/g, "$1:")
        .replace(/"/g, '"');
      lines.push(`  "${key}": ${json},`);
    }
    lines.push(`};`);
    const out = join(__dir, `${subjectId}-from-base.mjs`);
    writeFileSync(out, lines.join("\n"), "utf8");
    console.log(`Wrote ${out} (${Object.keys(entries).length} sections)`);
  }
}

main();
