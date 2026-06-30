const GENERIC_TITLES = /^basic example$|^worked example$|^example \d+$|^ตัวอย่าง\s*\d*$/i;
const MAX = 40;

/* ── strip LaTeX and clean up orphaned punctuation ─────────────────── */
function stripLatex(text) {
  return text
    .replace(/\$\$[\s\S]+?\$\$/g, " ")
    .replace(/\$[^$\n]+\$/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s,;:.()\[\]{}،،]+/, "")   // leading garbage left by $…$
    .replace(/[\s,;:.()\[\]{}،،]+$/, "")   // trailing garbage
    .trim();
}

/* ── shorten a plain-text string to ≤ MAX chars ───────────────────── */
function shorten(s) {
  if (s.length <= MAX) return s;
  const cut = s.lastIndexOf(" ", MAX - 1);
  return cut > 12 ? s.slice(0, cut) + "…" : s.slice(0, MAX - 1) + "…";
}

/* ── keyword → short title, tested against raw (LaTeX) string ──────── */
const KEYWORD_RULES = [
  /* === Physics 2 === */
  [/doppler|ดอปเพลอร์/i,                        "Doppler Effect"],
  [/decibel|เดซิเบล|\bdB\b|\\beta.*log|log.*I_0/i, "Sound Level (dB)"],
  [/gauss.*surface|gaussian|ฟลักซ์.*ปิด/i,      "Gauss's Law"],
  [/photoelectric|โฟโตอิเล็ก/i,                 "Photoelectric Effect"],
  [/atomic.*spectr|สเปกตร.*อะตอม|hydrogen.*n=/i,"Atomic Spectra"],
  [/snell|total.*internal|critical.*angle/i,     "Snell's Law"],
  [/mirror|กระจก/i,                              "Mirror Equation"],
  [/lens|เลนส์/i,                                "Lens Equation"],
  [/standing.*wave|antinode|คลื่นนิ่ง|คลื่นตั้ง/i,"Standing Wave"],
  [/coulomb|แรงระหว่างประจุ/i,                  "Coulomb's Law"],
  [/kirchhoff|junction.*rule|loop.*rule/i,       "Kirchhoff Rules"],
  [/faraday|lenz|\\\\mathcal\{E\}|flux.*เปลี่ยน/i,"Faraday's Law"],
  [/\\\\tau|RC.*circuit|rc.*time|time.*const/i,  "RC Time Constant"],
  [/capacitor|ประจุ.*เก็บ|capacitance/i,         "Capacitor"],
  [/magnetic.*force|แรงแม่เหล็กบน|qvB/i,        "Magnetic Force"],
  [/biot.*savart|ampere.*law|สนาม.*สายตรง/i,    "B จากสายกระแส"],
  [/electric.*potential|ศักย์ไฟฟ้า/i,           "Electric Potential"],
  [/electric.*field|สนามไฟฟ้า/i,                "Electric Field"],
  [/ohm|กำลังไฟฟ้า|P=IV/i,                      "Ohm's Law / Power"],
  [/photon|โฟตอน/i,                              "Photon Energy"],
  [/em.*wave|electromagnetic/i,                  "EM Wave"],

  /* === Physics 1 === */
  [/projectile|วิถีกระสุน/i,                    "Projectile Motion"],
  [/circular.*motion|centripetal|แรงสู่ศูนย์/i, "Circular Motion"],
  [/torque|ทอร์ก|โมเมนต์.*แรง/i,               "Torque"],
  [/momentum|โมเมนตัม/i,                        "Momentum"],
  [/collision|การชน/i,                           "Collision"],
  [/friction|แรงเสียดทาน/i,                     "Friction"],
  [/conservation.*energy|พลังงานอนุรักษ์/i,     "Conservation of Energy"],
  [/work.*energy|work-energy|งาน.*พลังงาน/i,    "Work-Energy Theorem"],
  [/free.*fall|ตกอิสระ/i,                        "Free Fall"],
  [/relative.*motion|ความเร็วสัมพัทธ์/i,       "Relative Motion"],

  /* === Calculus === */
  [/l.{0,2}h.{0,3}pital/i,                      "L'Hôpital's Rule"],
  [/taylor|maclaurin/i,                          "Taylor Series"],
  [/ratio.*test/i,                               "Ratio Test"],
  [/power.*series|interval.*conv/i,              "Power Series"],
  [/integration.*parts|IBP/i,                   "Integration by Parts"],
  [/trig.*sub|sub.*trig/i,                       "Trig Substitution"],
  [/partial.*fraction/i,                         "Partial Fractions"],
  [/implicit.*diff/i,                            "Implicit Differentiation"],
  [/chain.*rule|กฎลูกโซ่/i,                     "Chain Rule"],
  [/separable|separation.*variable/i,            "Separable ODE"],
  [/integrating.*factor|linear.*ode/i,           "Linear ODE"],
  [/direction.*field|slope.*field/i,             "Direction Field"],
  [/improper.*integral|ลู่เข้า.*อินทิกรัล/i,   "Improper Integral"],
  [/squeeze.*theorem|sandwich/i,                 "Squeeze Theorem"],
  [/epsilon.*delta|\\delta.*\\varepsilon/i,      "ε–δ Definition"],
  [/linearization|linear.*approx/i,              "Linearization"],
  [/newton.*method/i,                            "Newton's Method"],
  [/rolles|rolle.*theorem/i,                     "Rolle's Theorem"],
  [/volume.*revolution|disk.*method|shell.*method/i, "Volume of Revolution"],
  [/arc.*length|ความยาวส่วนโค้ง/i,              "Arc Length"],
  [/polar.*area|พื้นที่.*เชิงขั้ว/i,           "Polar Area"],

  /* === Chemistry === */
  [/buffer|บัฟเฟอร์/i,                          "Buffer Solution"],
  [/limiting.*reactant|สารจำกัด/i,              "Limiting Reactant"],
  [/gibbs|\\Delta G|spontan/i,                   "Gibbs Free Energy"],
  [/equilibrium.*constant|K_[ce]/i,             "Equilibrium Constant"],
  [/le.*chatelier/i,                             "Le Chatelier"],
  [/calorimetry|\\Delta H|enthalpy|ความร้อน.*q=/i, "Calorimetry"],
  [/formal.*charge/i,                            "Formal Charge"],
  [/vsepr|molecular.*geometry|รูปร่าง.*โมเลกุล/i, "VSEPR / Shape"],
  [/hybridization|hybrid.*orbital/i,             "Hybridization"],
  [/lewis.*structure/i,                          "Lewis Structure"],
  [/mole.*concept|mol.*กี่|n=m\/M/i,             "Mole Concept"],
  [/molarity|M_1V_1|เตรียมสารละลาย/i,          "Solution Concentration"],
  [/electron.*config|configuration|\\[Ar\\]/i,  "Electron Configuration"],
  [/periodic.*trend|atomic.*radius|รัศมีอะตอม/i, "Periodic Trends"],
  [/ionic.*covalent|พันธะไอออน|polar.*covalent/i, "Bond Types"],
  [/entropy|\\Delta S|disorder/i,                "Entropy"],
  [/reaction.*quotient|\\bQ\\b.*\\bK\\b|Q[<>]/i, "Reaction Quotient Q"],
  [/pH|pOH|K_a|K_b|acid.*base|กรด.*เบส/i,      "Acid-Base / pH"],
  [/stoichiometry|balance.*equation|ดุลสมการ/i, "Stoichiometry"],
  [/isotope|atomic.*mass|ไอโซโทป/i,             "Isotopes & Atomic Mass"],
  [/orbital|subshell|quantum.*number/i,          "Orbitals"],
  [/bohr|hydrogen.*spectra|n=.*n=/i,             "Bohr Model"],

  /* === Programming === */
  [/recursion|recursive|factorial/i,             "Recursion"],
  [/big.?o|complexity|O\(n/i,                    "Algorithm Complexity"],
  [/pointer|พอยน์เตอร์|memory.*address/i,       "Pointers"],
  [/array|อาร์เรย์/i,                           "Arrays"],
  [/sort|search|binary.*search/i,                "Sorting & Searching"],
  [/function.*return|scope|parameter/i,          "Functions & Scope"],
  [/loop|iteration|for.*while/i,                 "Loops"],
  [/conditional|if.*else|switch/i,               "Conditionals"],
  [/pseudocode|IPO|input.*output/i,              "Algorithm Design"],
];

function matchKeyword(raw) {
  for (const [re, label] of KEYWORD_RULES) {
    if (re.test(raw)) return label;
  }
  return null;
}

/* ── extract "หา X" action phrase from plain text ───────────────────── */
function extractAction(plain) {
  const m = plain.match(
    /^(?:จงหา|หาค่า|หา|คำนวณ|Find|Calculate|Compute|Solve|Evaluate|Determine)\s+(.{4,})/i
  );
  if (!m) return null;
  let obj = m[1]
    .replace(/[,;.].*$/, "")
    .replace(/\s*(โดย|เมื่อ|กำหนด|where|given|ที่|จาก|ใน)\b.*/i, "")
    .trim();
  return obj.length >= 3 ? shorten(obj) : null;
}

/* ── public API ─────────────────────────────────────────────────────── */
export function deriveExampleTitle(problem = "", title = "") {
  // 1. Use explicit non-generic title
  const trimmed = title?.trim();
  if (trimmed && !GENERIC_TITLES.test(trimmed)) {
    return trimmed.length > MAX ? shorten(trimmed) : trimmed;
  }

  if (!problem?.trim()) return "ตัวอย่าง";

  // 2. Keyword match on raw LaTeX text (most reliable)
  const kw = matchKeyword(problem);
  if (kw) return kw;

  // 3. Strip LaTeX, then keyword match again
  const plain = stripLatex(problem);
  if (!plain) return "ตัวอย่าง";

  const kw2 = matchKeyword(plain);
  if (kw2) return kw2;

  // 4. Extract "หา X" action phrase
  const action = extractAction(plain);
  if (action) return action;

  // 5. Shorten the plain text
  return shorten(plain) || "ตัวอย่าง";
}

export function ensureExampleTitle(example) {
  if (!example) return example;
  return { ...example, title: deriveExampleTitle(example.problem, example.title) };
}

export function normalizeExampleList(examples = []) {
  return examples.map(ensureExampleTitle);
}
