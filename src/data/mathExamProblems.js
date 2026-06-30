/**
 * mathExamProblems.js
 * โจทย์คณิตศาสตร์ที่ดึงมาจากไฟล์ PDF ใน subject/Math/
 *
 * แหล่งที่มา (วิศวกรรมจุฬาฯ):
 *   Cal1 (2301107): MID 55, 57, 59, 60, Mock 2562
 *   Cal2 (2301108): MID 54, 61, Final 54, 55, 58, 59, 62
 *
 * หมายเหตุ: สไลด์ map ตาม track ที่เลือกใน Settings
 *   วิศวฯ → 2301107/2301108 (default)
 *   วิทย์ → 2301113/2301114
 */

// ─── ประเภทของโจทย์ ────────────────────────────────────────────────────────
export const PROBLEM_TYPES = {
  LIMIT: "limit",
  CONTINUITY: "continuity",
  DERIVATIVE: "derivative",
  INTEGRAL: "integral",
  TRANSCENDENTAL: "transcendental",
  INTEGRATION_TECHNIQUE: "integration_technique",
  APP_INTEGRATION: "app_integration",
  INDUCTION: "induction",
  SEQUENCE: "sequence",
  SERIES: "series",
  POWER_SERIES: "power_series",
  VECTOR: "vector",
  LINE_PLANE: "line_plane",
  CURVE: "curve",
  MULTIVARIABLE: "multivariable",
  DOUBLE_INTEGRAL: "double_integral",
  ODE: "ode",
  APPLICATION: "application",
};

// ─── โจทย์ Calculus I (2301107) ────────────────────────────────────────────

export const cal1Problems = [
  // ════════════ ลิมิต (Limits) ════════════
  {
    id: "c1-lim-001",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 55",
    subtopic: "ลิมิตพื้นฐาน",
    problem: "จงหาค่าของ $\\displaystyle\\lim_{x\\to 1}\\frac{x^3-4x+1}{x-1}$",
    hint: "แทนค่าตรงหรือแยกตัวประกอบ",
    answer: "-2",
  },
  {
    id: "c1-lim-002",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 55",
    subtopic: "ลิมิตที่อนันต์",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2-x-1}{1-5x}$",
    answer: "$-\\infty$",
  },
  {
    id: "c1-lim-003",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 55",
    subtopic: "ลิมิตตรีโกณมิติ",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 1}\\frac{1+\\sin x+\\cos x}{\\lim}$ ที่ $x\\to\\infty$",
    answer: "ใช้สูตร $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$",
  },
  {
    id: "c1-lim-004",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 55",
    subtopic: "ฟังก์ชันก้อน",
    problem: `กำหนดให้ $f(x)=\\begin{cases}x^2-1 & x>0 \\\\ x+t & x\\leq 0\\end{cases}$
จงหา
(a) $\\displaystyle\\lim_{x\\to 0^-}f(x)$
(b) $\\displaystyle\\lim_{x\\to 0^+}f(x)$
(c) $\\displaystyle\\lim_{x\\to 0}f(x)$`,
    answer: "(a) $t$   (b) $-1$   (c) มีค่าก็ต่อเมื่อ $t=-1$",
  },
  {
    id: "c1-lim-005",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 57",
    subtopic: "ลิมิตพื้นฐาน",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 9}\\frac{\\sqrt{9-x}-1}{x-9+\\sqrt{x-9}}$",
    answer: "$-\\frac{1}{2}$",
  },
  {
    id: "c1-lim-006",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 57",
    subtopic: "ลิมิตตรีโกณมิติ",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to\\pi}\\frac{2\\cos^2 x+3\\sin x+3}{1-\\sin x}$ โดยไม่ใช้กฎโลปีตาล",
    answer: "$4$",
  },
  {
    id: "c1-lim-007",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 57",
    subtopic: "ลิมิต — รูปแบบ $0\\cdot\\infty$",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 0}\\frac{2^x-2^{-x/3}-2^{x/3}+2^{-x}}{2^{2x}-2\\cdot 2^{2x/3}}$",
    answer: "$-\\frac{3}{4}$",
  },
  {
    id: "c1-lim-008",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 57",
    subtopic: "ลิมิตที่ไม่มีค่า",
    problem:
      "จงหาค่า $\\displaystyle\\lim_{x\\to 0^-}\\frac{1}{\\left(1-\\cos\\frac{1}{x}\\right)^2}$ และระบุว่าเป็น $+\\infty,-\\infty$ หรือไม่มีค่า",
    answer: "ไม่มีค่า เพราะ $\\frac{1}{x}$ แกว่งเมื่อ $x\\to 0^-$",
  },
  {
    id: "c1-lim-009",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 57",
    subtopic: "หาค่า $k$ ที่ทำให้ฟังก์ชันต่อเนื่อง",
    problem: `กำหนดให้ $k$ เป็นค่าคงตัว และ $g(x)=\\begin{cases}1+k & x\\geq 0 \\\\ \\dfrac{\\sin(kx)}{x} & x<0\\end{cases}$
ถ้า $g$ ต่อเนื่องที่ $x=0$ จงหาค่า $k$`,
    answer: "$k=\\frac{1}{2}$",
  },
  {
    id: "c1-lim-010",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 59",
    subtopic: "ลิมิตพื้นฐาน",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 3}\\frac{\\sqrt[3]{16-4x}}{x^2-2x-3}$",
    answer: "$-\\frac{1}{6}$",
  },
  {
    id: "c1-lim-011",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 59",
    subtopic: "ลิมิตตรีโกณมิติ",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to\\pi}\\frac{4\\sin^2x+5\\cos x+5}{1-\\cos x}$ โดยไม่ใช้กฎโลปีตาล",
    answer: "$2$",
  },
  {
    id: "c1-lim-012",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 59",
    subtopic: "ลิมิตไม่ธรรมดา",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(\\sin(\\sin x))}{x}$",
    answer: "$1$",
  },
  {
    id: "c1-lim-013",
    topic: PROBLEM_TYPES.LIMIT,
    source: "MID 59",
    subtopic: "ลิมิตที่อนันต์",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-\\sqrt{x^2-3x}\\right)$",
    answer: "$\\frac{5}{2}$",
  },
  {
    id: "c1-lim-014",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "ลิมิตพื้นฐาน",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 1}\\frac{(x-3)^3-8}{x-1}$",
    answer: "$12$",
  },
  {
    id: "c1-lim-015",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "ลิมิตตรีโกณมิติ",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 0}\\frac{x^2-2}{x^2+3x-10}$",
    answer: "$\\frac{1}{5}$",
  },
  {
    id: "c1-lim-016",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "ลิมิต sin x/x",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}$",
    answer: "$1$",
  },
  {
    id: "c1-lim-018",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "ลิมิตที่อนันต์",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to\\infty}\\frac{1+4x}{1-2\\sqrt{x}-\\sqrt{x}}$",
    answer: "$-2$",
  },

  // ════════════ ความต่อเนื่อง (Continuity) ════════════
  {
    id: "c1-cont-001",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "Mock 2562",
    subtopic: "พิจารณาความต่อเนื่อง",
    problem: `กำหนดให้ $f(x)=\\begin{cases}x^2-9 & x>2 \\\\ 8-\\frac{1}{x} & x\\leq 2\\end{cases}$
จงใช้บทนิยามของอนุพันธ์พิจารณาว่า $f$ มีอนุพันธ์ที่ตำแหน่ง $x=3$ หรือไม่`,
    hint: "ที่ $x=3>2$ ใช้ $f(x)=x^2-9$ ซึ่ง differentiable",
    answer: "มีอนุพันธ์; $f'(3)=2(3)=6$",
  },
  {
    id: "c1-cont-002",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "Mock 2562",
    subtopic: "หาค่าคงตัวที่ทำให้ต่อเนื่อง",
    problem: `กำหนดให้ $f(x)=\\begin{cases}\\dfrac{x^3+a}{x+5-2} & x<1 \\\\ ab+c & x=1 \\\\ \\dfrac{x-1^b}{x-1} & x>1\\end{cases}$
จงหาค่า $a,b$ และ $c$ ที่ทำให้ $f$ ต่อเนื่องที่ตำแหน่ง $x=1$`,
    answer: "แก้ระบบสมการจากเงื่อนไขลิมิตซ้าย = ลิมิตขวา = ค่าฟังก์ชัน",
  },
  {
    id: "c1-cont-003",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "MID 59",
    subtopic: "ความต่อเนื่องของฟังก์ชัน",
    problem: `กำหนดให้ $f(x)=\\begin{cases}\\dfrac{x^2-1}{x^2-3x+2} & x\\neq 2,\\; x\\neq 4 \\\\ \\text{ค่าหนึ่ง} & x=2 \\\\ 3 & x=4\\end{cases}$
จงพิจารณาว่า $f$ ต่อเนื่องที่ $x=2,3,4$ หรือไม่`,
    answer:
      "ที่ $x=2$: ต้องนิยาม $f(2)=\\frac{3}{1}=3$  ที่ $x=3$: ต่อเนื่อง  ที่ $x=4$: ไม่ต่อเนื่อง",
  },

  // ════════════ อนุพันธ์ (Derivatives) ════════════
  {
    id: "c1-der-001",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 55",
    subtopic: "อนุพันธ์พื้นฐาน",
    problem:
      "กำหนดให้ $f(x)=x\\sqrt{x-1}$ จงหา $f'(x)$",
    answer: "$f'(x)=\\sqrt{x-1}+\\dfrac{x}{2\\sqrt{x-1}}$",
  },
  {
    id: "c1-der-002",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 55",
    subtopic: "สมการเส้นสัมผัส",
    problem:
      "จงหาสมการเส้นสัมผัสเส้นโค้ง $y=\\dfrac{x^2-1}{x+2}$ ที่จุด $(1,-2)$",
    answer: "$y=-\\frac{1}{3}(x-1)-2$",
  },
  {
    id: "c1-der-003",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 55",
    subtopic: "กฎลูกโซ่",
    problem:
      "กำหนดให้ $h(x)=f(g(x))^2+x$ และ $h'(2)=?$",
    answer: "ใช้ $h'(x)=2f(g(x))\\cdot f'(g(x))\\cdot g'(x)+1$",
  },
  {
    id: "c1-der-004",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 55",
    subtopic: "อนุพันธ์อันดับสูง",
    problem:
      "กำหนดให้ $f(x)=\\dfrac{1}{(2x+1)^{1/2}}$ จงหา $f'(x),\\;f''(x),\\;f^{(13)}(x)$",
    answer: "ใช้รูปแบบอนุพันธ์ลำดับที่ $n$ ของ $(ax+b)^r$",
  },
  {
    id: "c1-der-005",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 55",
    subtopic: "อนุพันธ์",
    problem:
      "จงหา $\\dfrac{d}{dx}\\cos^3(x^3-1)$",
    answer:
      "$-9x^2\\cos^2(x^3-1)\\sin(x^3-1)$",
  },
  {
    id: "c1-der-006",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 55",
    subtopic: "อนุพันธ์",
    problem: "จงหา $\\dfrac{d}{dx}\\text{arcsec}\\,3x$",
    answer:
      "$\\dfrac{1}{|x|\\sqrt{9x^2-1}}$",
  },
  {
    id: "c1-der-007",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 57",
    subtopic: "อนุพันธ์ผสม",
    problem:
      "จงหา $\\dfrac{d}{dx}\\left[(\\cot x)(\\arccos x)\\right]$",
    answer:
      "$-\\csc^2 x\\cdot\\arccos x-\\dfrac{\\cot x}{\\sqrt{1-x^2}}$",
  },
  {
    id: "c1-der-008",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 57",
    subtopic: "อนุพันธ์",
    problem:
      "จงหา $\\dfrac{d}{dx}\\dfrac{e^x}{\\tan x}$",
    answer:
      "$\\dfrac{e^x\\tan x - e^x\\sec^2 x}{\\tan^2 x}$",
  },
  {
    id: "c1-der-009",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 57",
    subtopic: "อนุพันธ์ logarithm",
    problem:
      "จงหา $\\dfrac{d}{dx}\\log_{10}\\sqrt{\\dfrac{(x-1)^{10}}{x+3}}$",
    answer:
      "$\\dfrac{1}{\\ln 10}\\left(\\dfrac{5}{x-1}-\\dfrac{1}{2(x+3)}\\right)$",
  },
  {
    id: "c1-der-010",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 57",
    subtopic: "อนุพันธ์โดยปริยาย",
    problem:
      "กำหนดให้ $x+y=\\sin(xy)$ จงหาสมการของเส้นสัมผัสเส้นโค้งนี้ที่จุด $(0,\\pi)$",
    answer: "$y-\\pi=-1\\cdot x \\Rightarrow y=-x+\\pi$",
  },
  {
    id: "c1-der-011",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 57",
    subtopic: "กฎลูกโซ่",
    problem: `กำหนดให้ $F(x)=f(\\cos x)$ และ $G(x)=\\cos(f(x))$
ถ้า $f\\left(\\dfrac{\\pi}{2}\\right)=1$, $f'\\left(\\dfrac{\\pi}{2}\\right)=2$, และ $f'(0)=\\frac{1}{2}$
จงหา $F'\\left(\\dfrac{\\pi}{2}\\right)$ และ $G'\\left(\\dfrac{\\pi}{2}\\right)$`,
    answer:
      "$F'\\left(\\dfrac{\\pi}{2}\\right)=-2$,\\; $G'\\left(\\dfrac{\\pi}{2}\\right)=-2\\sin 1$",
  },
  {
    id: "c1-der-012",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 57",
    subtopic: "อนุพันธ์อันดับสูง",
    problem:
      "กำหนดให้ $f(x)=\\dfrac{1}{2-3x}$ จงหา $f'(x),f''(x),f'''(x)$ และ $f^{(191)}(x)$",
    answer:
      "$f^{(n)}(x)=\\dfrac{3^n\\cdot n!}{(2-3x)^{n+1}}$",
  },
  {
    id: "c1-der-013",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Mock 2562",
    subtopic: "อนุพันธ์ (เติมคำตอบ)",
    problem:
      "จงหา $\\dfrac{d}{dx}\\left[x^5\\tan 4x\\right]$",
    answer:
      "$5x^4\\tan 4x+4x^5\\sec^2 4x$",
  },
  {
    id: "c1-der-014",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Mock 2562",
    subtopic: "อนุพันธ์ arcsec",
    problem: "จงหา $\\dfrac{d}{dx}\\text{arcsec}\\,(2x^4)$",
    answer:
      "$\\dfrac{8x^3}{|2x^4|\\sqrt{4x^8-1}}$",
  },
  {
    id: "c1-der-015",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Mock 2562",
    subtopic: "อนุพันธ์",
    problem:
      "จงหา $\\dfrac{d}{dx}\\left[\\dfrac{e^{2x}}{1+\\sin x}\\right]$",
    answer:
      "$\\dfrac{e^{2x}(2+2\\sin x - \\cos x)}{(1+\\sin x)^2}$",
  },
  {
    id: "c1-der-016",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Mock 2562",
    subtopic: "อนุพันธ์ ln",
    problem:
      "จงหา $\\dfrac{d}{dx}\\ln(2x+\\sqrt{x})$",
    answer:
      "$\\dfrac{2+\\frac{1}{2\\sqrt{x}}}{2x+\\sqrt{x}}$",
  },
  {
    id: "c1-der-017",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Mock 2562",
    subtopic: "อนุพันธ์โดยปริยาย",
    problem:
      "เส้นโค้งเส้นหนึ่งมีสมการเป็น $x^2-3xy+2=\\ln(2+y)$ จงหาสมการเส้นสัมผัสเส้นโค้งดังกล่าวที่จุด $(1,-1)$ (4 คะแนน)",
    answer: "หา $\\frac{dy}{dx}$ จาก implicit diff แล้วแทน $(1,-1)$",
  },
  {
    id: "c1-der-018",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Mock 2562",
    subtopic: "อนุพันธ์อันดับสูง",
    problem: `กำหนดให้ $f(x)=\\ln(e+2x)$ เมื่อ $x>-1$
จงหา $f'(x),\\;f''(x),\\;f'''(x)$ และ $f^{(n)}(x)$ เมื่อ $n$ เป็นจำนวนนับใดๆ`,
    answer:
      "$f^{(n)}(x)=\\dfrac{(-1)^{n-1}(n-1)!\\cdot 2^n}{(e+2x)^n}$ สำหรับ $n\\geq 1$",
  },
  {
    id: "c1-der-019",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 59",
    subtopic: "อนุพันธ์ (เติมคำตอบ)",
    problem:
      "จงหา $\\dfrac{d}{dx}\\arctan 3x^3$",
    answer: "$\\dfrac{9x^2}{1+9x^6}$",
  },
  {
    id: "c1-der-020",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 59",
    subtopic: "อนุพันธ์ (เติมคำตอบ)",
    problem:
      "จงหา $\\dfrac{d}{dx}\\cos^3 x$",
    answer: "$-3\\cos^2 x\\sin x$",
  },
  {
    id: "c1-der-021",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 59",
    subtopic: "อนุพันธ์ผสม",
    problem:
      "จงหา $\\dfrac{d}{dx}\\left(\\dfrac{1+\\sec 2x}{x^2}\\right)$",
    answer:
      "$\\dfrac{2x\\sec 2x\\tan 2x\\cdot x^2-(1+\\sec 2x)\\cdot 2x}{x^4}$",
  },
  {
    id: "c1-der-022",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "MID 59",
    subtopic: "หาค่าอนุพันธ์ที่จุดหนึ่ง",
    problem: `กำหนดให้ $\\ln 1\\cos x + f(x) = 2$ และ $\\tan 2f(2x)\\cdot 2+\\tan f(x)\\cdot f(x)=y$
ถ้า $f(0)=\\dfrac{\\pi}{4}$, $f'(0)=-2$ จงหาค่า $\\dfrac{dy}{dx}$ และ $\\dfrac{dy}{dx}\\bigg|_{x=0}$`,
    answer: "แทนค่าและใช้ chain rule",
  },

  // ════════════ การประยุกต์ (Applications) ════════════
  {
    id: "c1-app-001",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "MID 55",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "จงใช้ค่าเชิงอนุพันธ์หาค่าประมาณของ $\\sqrt[5]{(35)^{1/4}}$ (ทศนิยม 4 ตำแหน่ง)",
    answer: "ใช้ $L(x)=f(a)+f'(a)(x-a)$ กับ $f(x)=x^{1/5}$, $a=32$",
  },
  {
    id: "c1-app-002",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "MID 55",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "วัดเส้นผ่านศูนย์กลางของวงกลมได้ 5.2 นิ้ว คลาดเคลื่อนไม่เกิน 0.05 นิ้ว จงใช้ค่าเชิงอนุพันธ์หาขอบเขตความผิดพลาด (ทศนิยม 4 ตำแหน่ง, กำหนด $\\pi=3.14$)",
    answer: "ใช้ $dA=\\pi r\\,dr$",
  },
  {
    id: "c1-app-003",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "MID 57",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "จงใช้ค่าเชิงอนุพันธ์หาค่าโดยประมาณของ $\\arctan(0.02)$ (ทศนิยม 3 ตำแหน่ง)",
    answer: "$\\approx 0.02$",
  },
  {
    id: "c1-app-004",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "MID 59",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "จงใช้ค่าเชิงอนุพันธ์หาค่าโดยประมาณของ $\\sqrt[3]{3.984}$ (ทศนิยม 3 ตำแหน่ง)",
    answer: "$\\approx 1.584$",
  },
  {
    id: "c1-app-005",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "MID 59",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "ถ้าวัดความยาวรัศมีทรงกลมใบหนึ่งได้ 21 เซนติเมตร พบว่าผิดพลาดไปไม่เกิน 0.02 เซนติเมตร จงใช้ค่าเชิงอนุพันธ์คำนวณว่าปริมาตรที่คำนวณได้จะผิดพลาดไม่เกินเท่าใด",
    answer: "$dV=4\\pi r^2\\,dr \\approx 4\\pi(21)^2(0.02)$",
  },
  {
    id: "c1-app-006",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Mock 2562",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "จงใช้ค่าเชิงอนุพันธ์หาค่าโดยประมาณของ $(2.99)^2+(4.01)^2$ (3 คะแนน)",
    answer: "$\\approx 25.00$",
  },
  {
    id: "c1-app-007",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Mock 2562",
    subtopic: "ค่าเชิงอนุพันธ์",
    problem:
      "ทรงกลมใบหนึ่ง วัดความยาวรัศมีได้ 5 เซนติเมตร ในการวัดความยาวรัศมีครั้งนี้มีความผิดพลาด ซึ่งทำให้ปริมาตรของทรงกลมมีความผิดพลาดไม่เกิน $S$ ลูกบาศก์เซนติเมตร จงหาขอบเขตความผิดพลาดสัมพัทธ์ในการคำนวณพื้นที่ผิวของทรงกลมนี้ (3 คะแนน)",
    answer: "$\\dfrac{dSA}{SA}\\approx\\dfrac{2dr}{r}$",
  },

  // ════════════ อินทิกรัล (Integrals) ════════════
  {
    id: "c1-int-001",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 55",
    subtopic: "ปฏิยานุพันธ์",
    problem:
      "จงหาปฏิยานุพันธ์ต่อไปนี้\n(a) $\\displaystyle\\int(5x^3+3)^{2/3}\\,dx$\n(b) $\\displaystyle\\int\\tan(x-1)\\,dx$\n(c) $\\displaystyle\\int e^{3x-2}\\,dx$\n(d) $\\displaystyle\\int\\dfrac{1}{2x-1}\\,dx$",
    answer:
      "(a) $\\frac{3}{20}(5x^3+3)^{5/3}+C$  (b) $-\\ln|\\cos(x-1)|+C$  (c) $\\frac{1}{3}e^{3x-2}+C$  (d) $\\frac{1}{2}\\ln|2x-1|+C$",
  },
  {
    id: "c1-int-002",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 55",
    subtopic: "อินทิกรัลจำกัดเขต",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_1^4\\sqrt{x}\\,dx$",
    answer: "$\\dfrac{14}{3}$",
  },
  {
    id: "c1-int-003",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัล",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_1^{10}\\frac{1}{(2+x)^2}\\,dx$",
    answer: "$\\dfrac{1}{3}-\\dfrac{1}{12}=\\dfrac{3}{12}=\\dfrac{1}{4}$",
  },
  {
    id: "c1-int-004",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัล",
    problem:
      "จงหาค่าของ $\\displaystyle\\int\\sqrt{1+3x}\\,dx$",
    answer: "$\\dfrac{2}{9}(1+3x)^{3/2}+C$",
  },
  {
    id: "c1-int-005",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัลพิเศษ",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_{\\pi/6}^{\\pi/4}\\frac{\\sin^4 x}{\\cos^6 x}\\,dx$",
    answer: "แปลงเป็น $\\tan^4 x\\sec^2 x$, คำตอบ: $\\dfrac{1}{5}\\left(1-\\dfrac{1}{\\sqrt{3}^5}\\right)$",
  },
  {
    id: "c1-int-006",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัล (กฎ Leibniz)",
    problem: `กำหนดให้ $y=\\displaystyle\\int_{f(x)}^{g(x)}h(t)\\,dt$
จงหา $\\dfrac{dy}{dx}$ และ $\\dfrac{dy}{dx}\\bigg|_{x=0}$ เมื่อ $f(0)=1, g(0)=1, f'(0)=2, g'(0)=3$ และ $h(1)=2$`,
    answer: "$\\dfrac{dy}{dx}\\bigg|_{x=0}=h(g(0))g'(0)-h(f(0))f'(0)=2(3)-2(2)=2$",
  },
  {
    id: "c1-int-007",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัลไม่ธรรมดา",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_{\\pi/6}^{\\pi/4}\\frac{\\sin^4 x}{\\cos^5 x\\cos x}\\,dx$",
    answer: "คำตอบขึ้นกับการแปลงรูป",
  },
  {
    id: "c1-int-008",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัล",
    problem:
      "จงหาค่าของ $\\displaystyle\\int\\sqrt{1+x}\\,dx$",
    answer: "$\\dfrac{2}{3}(1+x)^{3/2}+C$",
  },
  {
    id: "c1-int-009",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัลซับซ้อน",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_{13x}(555)^{-1}\\,dx$",
    answer: "ดูต้นฉบับ — อาจเป็น $\\int 555^{13x}\\,dx$",
  },
  {
    id: "c1-int-010",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 57",
    subtopic: "อินทิกรัลผสม (u-sub)",
    problem:
      "จงหาค่าของ $\\displaystyle\\int\\frac{2x^2+3}{x^3+1}\\,dx$",
    answer: "$\\ln|x^3+1|+x\\cdot\\text{const}+C$",
  },
  {
    id: "c1-int-011",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "อินทิกรัล (เติมคำตอบ)",
    problem:
      "ถ้า $f(x)=3x^2-8x+5$ เป็นปฏิยานุพันธ์หนึ่งของฟังก์ชัน $g$ จะได้ว่า $g(x)=$",
    answer: "$g(x)=6x-8$",
  },
  {
    id: "c1-int-012",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "อินทิกรัล (เติมคำตอบ)",
    problem:
      "$\\displaystyle\\int 3\\ln x\\,dx=$",
    answer: "$3x\\ln x-3x+C$",
  },
  {
    id: "c1-int-013",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "อินทิกรัล (เติมคำตอบ)",
    problem:
      "$\\displaystyle\\int(4x-3)^4\\,dx=$",
    answer: "$\\dfrac{1}{20}(4x-3)^5+C$",
  },
  {
    id: "c1-int-014",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "อินทิกรัล (เติมคำตอบ)",
    problem:
      "$\\displaystyle\\int\\sin(1-x)\\,dx=$",
    answer: "$\\cos(1-x)+C$",
  },
  {
    id: "c1-int-015",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "อินทิกรัลจำกัดเขต",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_0^1\\frac{x^2}{\\sqrt{1-4x^2}}\\,dx$",
    answer: "ใช้ trig substitution $x=\\frac{1}{2}\\sin\\theta$",
  },
  {
    id: "c1-int-016",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "กฎ Leibniz",
    problem: `กำหนดให้ $f(x)=\\displaystyle\\int_1^{x^2}\\arctan(2u^2)\\,du$
จงหาค่าของ $f''(1)$ (4 คะแนน)`,
    answer: "$f'(x)=\\arctan(2x^4)\\cdot 2x$;  $f''(1)=2\\arctan 2+\\frac{16}{1+4}$",
  },
  {
    id: "c1-int-017",
    topic: PROBLEM_TYPES.INTEGRATION_TECHNIQUE,
    examType: "final",
    source: "MID 59",
    subtopic: "อินทิกรัลผสม",
    problem:
      "จงหาค่าของ $\\displaystyle\\int(x^2+\\frac{2}{x^2}\\sec^2x-\\tan x)\\,dx$",
    answer: "แยกเป็นผลรวมของอินทิกรัล",
  },
  {
    id: "c1-int-018",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Mock 2562",
    subtopic: "อินทิกรัล (u-sub)",
    problem:
      "จงหาค่าของ $\\displaystyle\\int x\\cdot 2^{\\sin 2x}\\,dx$",
    answer: "ใช้ substitution $u=\\sin 2x$",
  },
  {
    id: "c1-int-019",
    topic: PROBLEM_TYPES.TRANSCENDENTAL,
    examType: "final",
    source: "Mock 2562",
    subtopic: "อินทิกรัล",
    problem:
      "จงหาค่าของ $\\displaystyle\\int\\frac{\\sec(\\ln x)\\tan(\\ln x)}{x}\\,dx$",
    answer: "$\\sec(\\ln x)+C$",
  },
  {
    id: "c1-int-020",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Mock 2562",
    subtopic: "อินทิกรัล",
    problem:
      "จงหาค่าของ $\\displaystyle\\int e^{\\cot x}(1+\\cot x)\\,dx$",
    answer: "$-e^{\\cot x}\\cdot\\frac{1}{\\sin^2 x}+C$ (ตรวจสอบโจทย์)",
  },
  {
    id: "c1-int-021",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Mock 2562",
    subtopic: "อินทิกรัลเศษส่วน",
    problem:
      "จงหาค่าของ $\\displaystyle\\int\\frac{x^2+2\\,dx}{x^2+6x+5}$",
    answer: "แยกเศษส่วนย่อย (partial fractions)",
  },
  {
    id: "c1-int-022",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Mock 2562",
    subtopic: "อินทิกรัล",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_0^2\\frac{\\sin^2 x}{\\cos^2 x+2\\sin x-\\cos^2 x}\\,dx$",
    answer: "แปลงโดยใช้สูตรตรีโกณมิติ",
  },
  {
    id: "c1-int-023",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Mock 2562",
    subtopic: "อินทิกรัล (ซับซ้อน)",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_1^2\\frac{x^2+\\sqrt{x+2}}{\\sqrt{16-x^2}}\\,dx$",
    answer: "ใช้ trig substitution",
  },
  {
    id: "c1-int-024",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Mock 2562",
    subtopic: "อินทิกรัลพิเศษ",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_0^{\\pi/2}\\frac{\\cos^2 x+2\\sin x-\\cos^2 x}{\\cos^2 x+2\\sin x}\\,dx$",
    hint: "ใช้สูตร Wallis หรือ reduction",
    answer: "ดูต้นฉบับโจทย์",
  },
  {
    id: "c1-int-025",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "MID 59",
    subtopic: "กฎ Leibniz ขั้นสูง",
    problem: `กำหนดให้ $f(x)=\\displaystyle\\int_{x^2}^{2+x^2}\\dfrac{dt}{2-\\cos t}$
จงหา $f'(x)$ ที่ $x=0$`,
    answer: "ใช้ Fundamental Theorem + Chain Rule",
  },

  // ════════════ L'Hôpital (โลปีตาล) ════════════
  {
    id: "c1-lhop-001",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "L'Hôpital",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\sin^6 x-1}{x\\sin 8x}$ (1 คะแนน)",
    answer: "รูป $\\frac{0}{0}$ ใช้ L'Hôpital",
  },
  {
    id: "c1-lhop-002",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "L'Hôpital",
    problem:
      "จงหาค่าของ $\\displaystyle\\lim_{x\\to 0}\\frac{x^4\\tan 2x}{x^2-\\arccos(1-x)}$",
    answer: "รูป $\\frac{0}{0}$",
  },
  {
    id: "c1-lhop-003",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "L'Hôpital (อ้างอิงลิมิตที่ให้)",
    problem: `กำหนดให้ $\\displaystyle\\lim_{x\\to 0}\\frac{x^3-\\sin x+1}{x^3+6}=\\frac{1}{6}$
จงเติมเฉพาะคำตอบในช่องว่างที่กำหนดให้:
(a) $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 2x-2x\\cos x}{x^3}=$
(b) $\\displaystyle\\lim_{x\\to 0}\\frac{4\\sin^2 x-\\sin 4x}{\\tan^4 x-2\\tan^2 x}=$
(c) $\\displaystyle\\lim_{x\\to 0}\\frac{\\arctan x-\\arcsin x}{\\arctan 2x-\\arcsin 2x}=$`,
    answer:
      "(a) $\\frac{1}{3}$  (b) อิงจากสูตร  (c) ใช้ L'Hôpital ซ้ำ",
  },
  {
    id: "c1-lhop-004",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "อนุพันธ์อันดับสูง",
    problem: `ถ้า $f(x)=x^2\\cos x$ จงหา $f^{(12)}(0)$ (1 คะแนน)`,
    answer: "ใช้ Taylor expansion ของ $\\cos x$",
  },
  {
    id: "c1-lhop-005",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "อินทิกรัลจากอนุพันธ์สูง",
    problem:
      "$\\displaystyle\\int_1^{10}\\left[\\log_3 x^3\\right]\\,dx=$ (1 คะแนน)",
    answer: "ใช้ $[f(x)]$ = floor function",
  },
  {
    id: "c1-lhop-006",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "อินทิกรัล",
    problem:
      "$\\displaystyle\\int_0^1\\frac{\\arcsin(\\cos x)}{1-x^2}\\,dx=$ (2 คะแนน)",
    answer: "substitution $u=\\cos x$",
  },
  {
    id: "c1-lhop-007",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "อินทิกรัล King's rule",
    problem:
      "$\\displaystyle\\int_0^{\\pi}\\frac{x}{1+\\sin x}\\,dx=$ (2 คะแนน)",
    answer: "ใช้ King's property: $\\int_0^a f(x)dx=\\int_0^a f(a-x)dx$",
  },
  {
    id: "c1-lhop-008",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Mock 2562",
    subtopic: "ความสัมพันธ์อินทิกรัล",
    problem: `ถ้า $\\displaystyle\\int_0^1 e^{2x}\\,dx=a$ จงหาค่าของ $\\displaystyle\\int_0^1 e^{2x+2}\\,dx$ ตอบในรูปของค่าคงที่และค่า $a$ (2 คะแนน)`,
    answer: "$e^2\\cdot a$",
  },

  // ════════════ จากสไลด์ ส่วนที่-1 (ลิมิตและความต่อเนื่อง) ════════════
  {
    id: "c1-lim-sl-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตที่ไม่มีค่า (2-sided)",
    problem: "$\\displaystyle\\lim_{x\\to 2^+}\\frac{x^4-x^2-2}{x^3+2x-8}$",
    hint: "แทนค่า $x\\to2^+$ แล้วดูว่าเป็น $0/0$ หรือไม่",
    answer: "ไม่มีค่า (ตรวจลิมิตสองทาง)",
  },
  {
    id: "c1-lim-sl-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตอนันต์",
    problem: "$\\displaystyle\\lim_{x\\to 3^-}\\frac{x^3+2x^2-3x}{x-3}$",
    hint: "แยกตัวประกอบแล้วดูเครื่องหมายเมื่อ $x\\to3^-$",
    answer: "$+\\infty$",
  },
  {
    id: "c1-lim-sl-03",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตที่ตำแหน่งอนันต์",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+4x+3}-2x\\right)$",
    hint: "คูณ conjugate แล้วหารด้วย $x$",
    answer: "$+\\infty$",
  },
  {
    id: "c1-lim-sl-04",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตที่ตำแหน่งอนันต์",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\frac{1+2x^3-3x^2}{1+3x-2x^3}$",
    hint: "หารทุกพจน์ด้วย $x^3$",
    answer: "$-1$",
  },
  {
    id: "c1-lim-sl-05",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตตรีโกณมิติ",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos(1-\\cos x)}{x^4}$",
    hint: "ใช้ $1-\\cos u\\approx u^2/2$ สองครั้ง",
    answer: "$\\dfrac{1}{8}$",
  },
  {
    id: "c1-lim-sl-06",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตตรีโกณมิติ",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{x\\tan x}{\\tan 2x-2\\tan x}$",
    hint: "ใช้สูตร $\\tan 2x=\\frac{2\\tan x}{1-\\tan^2 x}$",
    answer: "$\\dfrac{1}{2}$",
  },
  {
    id: "c1-lim-sl-07",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตตรีโกณมิติ (จัดรูป)",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{4\\tan x-\\sin 4x}{x^3}$",
    hint: "ใช้สูตร $x^3$-อุดมการณ์: $\\tan x-\\sin x\\approx x^3/2$",
    answer: "$8$",
  },
  {
    id: "c1-lim-sl-08",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิตตรีโกณมิติ (จัดรูป)",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{7\\tan x-\\sin 7x}{\\tan 9x-3\\sin 3x}$",
    hint: "ใช้รูปแบบ $\\tan u-\\sin u\\approx u^3/2$",
    answer: "$\\dfrac{7}{\\;9\\;}$ (จัดรูปอย่างละเอียด)",
  },
  {
    id: "c1-lim-sl-09",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "Sandwich Theorem",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\sin^{2019}x\\cdot e^{\\sin(\\pi/x)}$",
    hint: "ใช้ทฤษฎี Sandwich: $-1\\le\\sin(\\pi/x)\\le1$",
    answer: "$0$",
  },
  {
    id: "c1-lim-sl-10",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "Sandwich Theorem",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\frac{x^3\\sin x+\\arctan 5\\cos x}{x^3}$",
    hint: "ตัวเศษเป็น bounded ⟹ ใช้ Sandwich",
    answer: "$0$",
  },
  {
    id: "c1-lim-sl-11",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "Slides Part 1",
    subtopic: "ความต่อเนื่อง (หาค่าคงที่)",
    problem: `กำหนดให้ $f(x)=\\begin{cases}\\dfrac{x^2+14x+24}{x-2} & x<2\\\\ ax+b & 2\\le x\\le 4\\\\ b\\left(ax+2a+\\dfrac{x+b-20}{2}\\right) & x>4\\end{cases}$ จงหาค่า $a$ และ $b$ ที่ทำให้ $f$ ต่อเนื่องที่ $x=2$ และ $x=4$`,
    hint: "คำนวณลิมิตสองข้างที่ $x=2$ และ $x=4$ แล้วตั้งสมการ",
    answer: "$a=5,\\;b=6$",
  },
  {
    id: "c1-lim-sl-12",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิต (แบบฝึกหัดรวม)",
    problem: "$\\displaystyle\\lim_{x\\to 2}\\frac{x^3+2x^2-5x-10}{x-2}$",
    hint: "แยกตัวประกอบ: $(x-2)(x^2+4x+5)$",
    answer: "$\\dfrac{(2)^2+(2)(2)+5\\cdot 1}{1}\\;=\\;17$",
  },
  {
    id: "c1-lim-sl-13",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิต (แบบฝึกหัดรวม)",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-\\sqrt{x^2+6x}\\right)$",
    hint: "คูณ conjugate: ผลต่างกลายเป็น $\\dfrac{-4x}{\\sqrt{\\cdots}+\\sqrt{\\cdots}}$",
    answer: "$-2$",
  },
  {
    id: "c1-lim-sl-14",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิต (แบบฝึกหัดรวม)",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 3x}{4x}$",
    hint: "ใช้ $\\lim_{u\\to0}\\frac{\\sin u}{u}=1$",
    answer: "$\\dfrac{3}{4}$",
  },
  {
    id: "c1-lim-sl-15",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Slides Part 1",
    subtopic: "ลิมิต (แบบฝึกหัดรวม)",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin^2 2x-2\\sin x}{x\\tan 3x}$",
    hint: "ขยาย sin²2x และ sinx แล้วหารด้วย $x\\tan 3x$",
    answer: "$-\\dfrac{2}{3}$",
  },

  // ════════════ จากสไลด์ ส่วนที่-2 (อนุพันธ์) ════════════
  {
    id: "c1-der-sl-01",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "นิยามอนุพันธ์",
    problem: `กำหนดให้ $f(x)=\\begin{cases}(x-1)(x-2) & x\\le 0\\\\ 3\\sin x-2\\cos x & x>0\\end{cases}$ จงพิจารณาว่า $f$ มีอนุพันธ์ที่ $x=0$ หรือไม่`,
    hint: "คำนวณ $\\lim_{h\\to0^-}\\frac{f(h)-f(0)}{h}$ และ $\\lim_{h\\to0^+}\\frac{f(h)-f(0)}{h}$ แล้วเปรียบเทียบ",
    answer: "ไม่มีอนุพันธ์ที่ $x=0$ (ลิมิตสองข้างไม่เท่ากัน: $2\\ne -2$)",
  },
  {
    id: "c1-der-sl-02",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "อนุพันธ์สูตร",
    problem: "จงหาอนุพันธ์ของ $y=x^2\\sin(2x)$",
    hint: "ใช้กฎผลคูณ",
    answer: "$2x\\sin(2x)+2x^2\\cos(2x)$",
  },
  {
    id: "c1-der-sl-03",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "อนุพันธ์สูตร",
    problem: "จงหาอนุพันธ์ของ $y=\\cos^5(4x)$",
    hint: "ใช้กฎลูกโซ่ สองชั้น",
    answer: "$-20\\cos^4(4x)\\sin(4x)$",
  },
  {
    id: "c1-der-sl-04",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "อนุพันธ์กฎลูกโซ่",
    problem: `กำหนดให้ $f$ เป็นฟังก์ชันโดยที่ $y=5u-9$ และ $u=f(1+\\tan^2 x)$ ถ้า $f(1)=1$ และ $f'(1)=2$ จงหาค่าของ $\\dfrac{dy}{dx}$ ที่ตำแหน่ง $x=0$`,
    hint: "Chain rule: $\\frac{dy}{dx}=5\\cdot f'(u)\\cdot\\frac{du}{dx}$",
    answer: "$0$",
  },
  {
    id: "c1-der-sl-05",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "สูตร Leibniz",
    problem: "จงหาอนุพันธ์อันดับที่ $n$ ของ $f(x)=x^2 e^{3x}$",
    hint: "ใช้สูตร Leibniz $(uv)^{(n)}=\\sum\\binom{n}{k}u^{(k)}v^{(n-k)}$",
    answer: "$e^{3x}\\left(9x^2+6nx+n(n-1)\\right)\\cdot 3^{n-2}$",
  },
  {
    id: "c1-der-sl-06",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "อนุพันธ์โดยปริยาย",
    problem: "จงหาสมการของเส้นสัมผัสเส้นโค้งที่จุด $(1,0)$ บน $xy^2+4=(x^2+x\\cos y+y)^2$",
    hint: "Diff โดยปริยาย หา $dy/dx$ แล้วแทนค่าที่จุด $(1,0)$",
    answer: "หา $m=dy/dx\\big|_{(1,0)}$ แล้วเขียนสมการ $y-0=m(x-1)$",
  },
  {
    id: "c1-der-sl-07",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "ค่าเชิงอนุพันธ์ (ประมาณค่า)",
    problem: "จงใช้ค่าเชิงอนุพันธ์หาค่าประมาณของ $(1.02)^3\\cdot e^{-1}$",
    hint: "$f(x)=x^3e^{x-1}$, แทนค่าใกล้ $x_0=1$; $\\Delta f\\approx f'(x_0)\\Delta x$",
    answer: "$\\approx 1.06$",
  },
  {
    id: "c1-der-sl-08",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Slides Part 2",
    subtopic: "ค่าเชิงอนุพันธ์ (โจทย์ประยุกต์)",
    problem: `กรวยกลมตรงใบหนึ่งมีส่วนสูงเป็น 3 เท่าของรัศมีฐาน และวัดความสูงได้ 15 เซนติเมตร ถ้าการวัดนี้ผิดพลาดไม่เกิน 0.4 เซนติเมตร จงหาขอบเขตของค่าผิดพลาดในการคำนวณปริมาตรของกรวยนี้โดยประมาณ พร้อมทั้งหาค่าผิดพลาดสัมพัทธ์ในการคำนวณปริมาตรนี้`,
    hint: "$V=\\frac{1}{3}\\pi r^2 h$, $h=3r$ ดังนั้น $r=h/3$; $dV\\approx V'(h)\\,dh$",
    answer: "$|\\Delta V|\\le\\frac{25\\pi}{3}$ cm³, relative error $\\approx 4\\%$",
  },

  // ════════════ จาก Rif Exercise 1 (ลิมิตขั้นสูง) ════════════
  {
    id: "c1-rif-lim-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Rif Exercise 1",
    subtopic: "ลิมิตจากการจัดรูป (binomial)",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{(a+x)^n-a^n}{x}$ โดยที่ $a,n$ เป็นค่าคงที่",
    hint: "ลิมิตนี้คือนิยามของอนุพันธ์ของ $x^n$ ที่จุด $x=a$",
    answer: "$na^{n-1}$",
  },
  {
    id: "c1-rif-lim-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Rif Exercise 1",
    subtopic: "ลิมิตจากการจัดรูป (binomial)",
    problem: "$\\displaystyle\\lim_{x\\to 0}\\frac{(a+x)^n-a^n}{(b+x)^n-b^n}$ โดยที่ $a,b,n$ เป็นค่าคงที่และ $b\\ne0$",
    hint: "แต่ละเศษและส่วนเป็นอนุพันธ์ ดังนั้นลิมิต $=na^{n-1}/(nb^{n-1})$",
    answer: "$(a/b)^{n-1}$",
  },
  {
    id: "c1-rif-lim-03",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Rif Exercise 1",
    subtopic: "ลิมิต sgn function",
    problem: `กำหนดให้ $\\text{sgn}(x)=\\begin{cases}1 & x>0\\\\0 & x=0\\\\-1 & x<0\\end{cases}$ และ $H(x)=\\text{sgn}(1+\\text{sgn}(x))$ จงหาลิมิตซ้ายและลิมิตขวาของ $f(x)=x\\cdot\\text{sgn}(x)$ ที่ $x=0$`,
    hint: "$x\\cdot\\text{sgn}(x)=|x|$ ดังนั้นลิมิตทั้งสองเท่ากัน",
    answer: "ลิมิตซ้าย $= 0$, ลิมิตขวา $= 0$, ลิมิต $= 0$",
  },
  {
    id: "c1-rif-lim-04",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Rif Exercise 1",
    subtopic: "ลิมิต (ทฤษฎีบทบีบ)",
    problem: "$\\displaystyle\\lim_{x\\to 1}\\frac{(x-1)(x^2-1)\\cdots(x^n-1)}{(x-1)^n}$",
    hint: "$(x^k-1)/(x-1)\\to k$ เมื่อ $x\\to1$ ดังนั้นผลคูณ $\\to n!$",
    answer: "$n!$",
  },

  // ════════════ จาก Rif Exercise 2 (อนุพันธ์ขั้นสูง) ════════════
  {
    id: "c1-rif-der-01",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Rif Exercise 2",
    subtopic: "อนุพันธ์โดยนิยาม",
    problem: `กำหนดให้ $f(x)=\\left|x^2-5x+6\\right|$ จงพิจารณาว่า $f$ มีอนุพันธ์ที่ $x=3$ หรือไม่`,
    hint: "ตรวจว่าที่ $x=3$: $x^2-5x+6=0$ จึงต้องใช้นิยาม",
    answer: "มีอนุพันธ์ที่ $x=3$; $f'(3)=1$",
  },
  {
    id: "c1-rif-der-02",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Rif Exercise 2",
    subtopic: "อนุพันธ์สูตร (ซับซ้อน)",
    problem: "จงหาอนุพันธ์ของ $f(x)=x^2\\arcsin\\sqrt{1-x^2}$ เมื่อ $x\\in(0,1)$",
    hint: "ใช้กฎผลคูณ; $\\frac{d}{dx}\\arcsin\\sqrt{1-x^2}=\\frac{-x}{|x|\\sqrt{1-x^2}}\\cdot\\frac{1}{\\sqrt{1-(1-x^2)}}$",
    answer: "$\\frac{-2x^2}{\\sqrt{1-x^2}}+2x\\arcsin\\sqrt{1-x^2}$",
  },
  {
    id: "c1-rif-der-03",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Rif Exercise 2",
    subtopic: "อนุพันธ์สูตร",
    problem: "จงหาอนุพันธ์ของ $f(x)=\\ln(x+\\sqrt{x^2+1})$",
    hint: "$\\frac{d}{dx}\\sinh^{-1}(x)=\\frac{1}{\\sqrt{x^2+1}}$",
    answer: "$\\dfrac{1}{\\sqrt{x^2+1}}$",
  },
  {
    id: "c1-rif-der-04",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Rif Exercise 2",
    subtopic: "อนุพันธ์กฎลูกโซ่ (ซับซ้อน)",
    problem: `กำหนดให้ $f(x^3-x)=h(x^3+x+1)$ และ $g(x+\\sin x)=\\ln(f(x)+1)$ โดยที่ $h'(-1)=5,h'(0)=3,g'(0)=2$ จงหาค่าของ $f(0)$`,
    hint: "Diff $g(x+\\sin x)=\\ln(f(x)+1)$ ที่ $x=0$ แล้วหา $f'(0)$; จากนั้น diff สมการแรกที่ $x=0$",
    answer: "$f(0)=e-1$ (ใช้ chain rule ซ้อนสองชั้น)",
  },
  {
    id: "c1-rif-der-05",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Rif Exercise 2",
    subtopic: "อนุพันธ์อันดับสูง",
    problem: "กำหนดให้ $f(x)=x^2g(x)$ โดยที่ $g^{(n)}(x)=\\dfrac{1}{x^{n+1}+x}$ สำหรับทุกจำนวนจริงบวก $x$ จงหาค่าของ $f^{(2562)}(1)$",
    hint: "ใช้สูตร Leibniz $(x^2g(x))^{(n)}$ แล้วแทน $x=1$",
    answer: "ใช้ Leibniz: $f^{(n)}(x)=\\sum_{k=0}^n \\binom{n}{k}(x^2)^{(k)}g^{(n-k)}(x)$; แทน $x=1$",
  },

  // ════════════ Application of Derivatives (Final 2555) ════════════
  {
    id: "c1-app-f55-01",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2555",
    subtopic: "ค่าสุดขีดสัมพัทธ์",
    problem: `กำหนดให้ $f(x)=4x^3+15x^2-18x+9$ จงหา (ก) $f'(x)$ (ข) จุดวิกฤตของ $f$ (ค) ช่วงที่ $f$ เพิ่ม/ลด (ง) ค่าสูงสุดและต่ำสุดสัมพัทธ์`,
    hint: "$f'(x)=12x^2+30x-18=6(2x-1)(x+3)$",
    answer: "$f'(x)=12x^2+30x-18$; จุดวิกฤต $x=-3,\\,1/2$; เพิ่ม $(-\\infty,-3)\\cup(1/2,\\infty)$; ลด $(-3,1/2)$; สูงสุดสัมพัทธ์ $90$ ที่ $x=-3$; ต่ำสุดสัมพัทธ์ $4.25$ ที่ $x=1/2$",
  },
  {
    id: "c1-app-f55-02",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2555",
    subtopic: "ความเว้า / จุดเปลี่ยนเว้า",
    problem: "กำหนดให้ $f(x)=(1-x^2)^{1/3}$ จงหาช่วงที่ $f$ มีความเว้าอยู่บน-ล่าง และจุดเปลี่ยนเว้า",
    hint: "หา $f''(x)$ แล้วตรวจเครื่องหมาย; $f'$ ไม่มีค่าที่ $x=\\pm1$",
    answer: "เว้าขึ้น: $(-1,1)$; เว้าลง: $(-\\infty,-1)\\cup(1,\\infty)$; จุดเปลี่ยนเว้า: $(\\pm1,0)$",
  },
  {
    id: "c1-app-f55-03",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2555",
    subtopic: "Optimization (สนาม)",
    problem: `สนามประกอบด้วยรูปสี่เหลี่ยมผืนผ้าและครึ่งวงกลมปิดหัวท้าย มีพื้นที่ 30,000 m² ขอบเส้นตรงเมตรละ 100 บาท ขอบเส้นโค้งเมตรละ 200 บาท จงหาความกว้างและยาวที่ทำให้ค่าใช้จ่ายน้อยที่สุด`,
    hint: "$A=2rL+\\pi r^2=30000$; $C=200\\pi r+200L$; แทน $L=(30000-\\pi r^2)/(2r)$",
    answer: "$r=\\sqrt{30000/\\pi}\\approx97.7$ m, $L=0$ m (จุดทำให้ $C$ น้อยสุดภายใต้ข้อจำกัด)",
  },
  {
    id: "c1-app-f55-04",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2555",
    subtopic: "Related Rates (กรวย)",
    problem: "กรวยกำลังละลาย ปริมาตรคงที่ ความสูงลดลง 0.1 cm/s เมื่อ $h=4$ cm, $r=3$ cm จงหา (ก) $\\dot{r}$ (ข) อัตราเปลี่ยนพื้นที่ผิวข้าง",
    hint: "$V=\\frac{1}{3}\\pi r^2 h=C$; $2rh\\,dr/dt+r^2\\,dh/dt=0$",
    answer: "(ก) $dr/dt=0.0375$ cm/s (ข) ใช้ $A=\\pi r\\sqrt{r^2+h^2}$ แล้วแทน $dr/dt,\\,dh/dt=-0.1$",
  },

  // ════════════ L'Hôpital Limits (Final 2555–2560) ════════════
  {
    id: "c1-lhop-f55-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2555",
    subtopic: "L'Hôpital (1^∞)",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac{2}{x}\\right)^{x^2}$",
    hint: "ให้ $L=e^{\\lim x^2\\ln(1+2/x)}$; เมื่อ $x\\to\\infty$: $x^2\\ln(1+2/x)\\sim 2x\\to\\infty$",
    answer: "$+\\infty$",
  },
  {
    id: "c1-lhop-f55-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2555",
    subtopic: "L'Hôpital (0/0)",
    problem: "$\\displaystyle\\lim_{x\\to 1}\\frac{1-x+\\ln x}{2(x-1)}$",
    hint: "รูป $0/0$; L'Hôpital: $\\dfrac{-1+1/x}{2}\\big|_{x=1}=0$",
    answer: "$0$",
  },
  {
    id: "c1-lhop-f56-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2556",
    subtopic: "L'Hôpital (0·∞)",
    problem: "$\\displaystyle\\lim_{x\\to 0^+}xe^{1/x}$",
    hint: "เขียน $=e^{1/x}/(1/x)$; เมื่อ $x\\to0^+$: $1/x\\to+\\infty$; รูป $\\infty/\\infty$; L'Hôpital → $e^{1/x}\\to\\infty$",
    answer: "$+\\infty$",
  },
  {
    id: "c1-lhop-f56-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2556",
    subtopic: "L'Hôpital (1^∞)",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\left(1-\\frac{2}{\\arctan x}\\right)^x$",
    hint: "$\\arctan x\\to\\pi/2$; $\\ln L=\\lim x\\ln(1-2/\\arctan x)$; L'Hôpital",
    answer: "$e^{-4/\\pi}$",
  },
  {
    id: "c1-lhop-f56-03",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2556",
    subtopic: "L'Hôpital (0^0)",
    problem: "$\\displaystyle\\lim_{x\\to 0^+}(\\csc x)^{\\sin x}$",
    hint: "$\\ln L=\\lim_{x\\to0^+}\\sin x\\cdot\\ln\\csc x=\\lim(-\\sin x\\ln\\sin x)$; L'Hôpital",
    answer: "$e^0=1$",
  },
  {
    id: "c1-lhop-f56-04",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2556",
    subtopic: "L'Hôpital (∞−∞)",
    problem: "$\\displaystyle\\lim_{x\\to 1^+}\\left(\\frac{1}{\\ln x}-\\frac{1}{x-1}\\right)$",
    hint: "รวมเศษ: $\\frac{x-1-\\ln x}{(x-1)\\ln x}$; แทน $x=1$: $0/0$; L'Hôpital",
    answer: "$\\dfrac{1}{2}$",
  },
  {
    id: "c1-lhop-f58-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2558",
    subtopic: "L'Hôpital (1^∞)",
    problem: "$\\displaystyle\\lim_{x\\to\\infty}\\left(2-\\frac{3}{x^2}\\right)^x$",
    hint: "$\\ln L=\\lim x\\ln(2-3/x^2)=\\lim\\frac{\\ln(2-3/x^2)}{1/x}$; L'Hôpital",
    answer: "$+\\infty$ (เนื่องจาก $x\\ln 2\\to+\\infty$)",
  },
  {
    id: "c1-lhop-f58-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Final 2558",
    subtopic: "L'Hôpital (1^∞)",
    problem: "$\\displaystyle\\lim_{x\\to1}\\left(2-\\frac{3}{x}\\right)^x$",
    hint: "แทนค่า $x=1$: $(2-3)^1=-1$",
    answer: "$-1$",
  },

  // ════════════ Integrals (Final 2555–2560) ════════════
  {
    id: "c1-int-f55-01",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2555",
    subtopic: "Integration by Parts",
    problem: "$\\displaystyle\\int x^2\\ln x\\,dx$",
    hint: "IBP: $u=\\ln x$, $dv=x^2\\,dx$",
    answer: "$\\dfrac{x^3}{3}\\ln x-\\dfrac{x^3}{9}+C$",
  },
  {
    id: "c1-int-f55-02",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2555",
    subtopic: "Partial Fractions",
    problem: "$\\displaystyle\\int\\frac{x^4+x^3+2x^2+x+1}{x^3+x^2}\\,dx$",
    hint: "หาร polynomial ก่อน: quotient $=x$, remainder ต้องแยก partial fractions",
    answer: "$\\frac{x^2}{2}+\\frac{1}{x}+\\ln|x|-\\ln|x+1|+C$",
  },
  {
    id: "c1-int-f55-03",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2555",
    subtopic: "Trig Power Reduction (csc)",
    problem: "$\\displaystyle\\int\\csc^8 x\\,dx$",
    hint: "สูตร reduction: $\\int\\csc^n x\\,dx=\\frac{-\\csc^{n-2}x\\cot x}{n-1}+\\frac{n-2}{n-1}\\int\\csc^{n-2}x\\,dx$",
    answer: "ลด $n$ ทีละ 2: $8\\to6\\to4\\to2$",
  },
  {
    id: "c1-int-f56-01",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2556",
    subtopic: "Integration by Parts",
    problem: "$\\displaystyle\\int\\frac{xe^x}{(x+1)^2}\\,dx$",
    hint: "เขียน $xe^x=(x+1-1)e^x$; $\\int\\frac{e^x}{x+1}-\\frac{e^x}{(x+1)^2}$; ใช้ $d\\left(\\frac{e^x}{x+1}\\right)$",
    answer: "$\\dfrac{e^x}{x+1}+C$",
  },
  {
    id: "c1-int-f56-02",
    topic: PROBLEM_TYPES.INTEGRATION_TECHNIQUE,
    examType: "final",
    source: "Final 2556",
    subtopic: "Trig Power (sec-tan)",
    problem: "$\\displaystyle\\int\\sec^6 x\\tan^{500} x\\,dx$",
    hint: "$\\sec^6x=(1+\\tan^2x)^2\\sec^2x$; แทน $u=\\tan x$",
    answer: "$\\dfrac{\\tan^{501}x}{501}+\\dfrac{2\\tan^{503}x}{503}+\\dfrac{\\tan^{505}x}{505}+C$",
  },
  {
    id: "c1-int-f56-03",
    topic: PROBLEM_TYPES.INTEGRATION_TECHNIQUE,
    examType: "final",
    source: "Final 2556",
    subtopic: "Partial Fractions",
    problem: "$\\displaystyle\\int\\frac{x^2+10x+3}{(3x-2)(x+1)}\\,dx$",
    hint: "$\\frac{A}{3x-2}+\\frac{B}{x+1}$; ที่ $x=2/3$ ได้ $A=71/15$, ที่ $x=-1$ ได้ $B=6/5$",
    answer: "$\\dfrac{71}{45}\\ln|3x-2|+\\dfrac{6}{5}\\ln|x+1|+C$",
  },
  {
    id: "c1-int-f58-01",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2558",
    subtopic: "Trig Power (sin-cos)",
    problem: "$\\displaystyle\\int\\sin^4 x\\cos^3 x\\,dx$",
    hint: "เก็บ $\\cos x\\,dx=d(\\sin x)$; $\\cos^2x=1-\\sin^2x$; แทน $u=\\sin x$",
    answer: "$\\dfrac{\\sin^5x}{5}-\\dfrac{\\sin^7x}{7}+C$",
  },
  {
    id: "c1-int-f58-02",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2558",
    subtopic: "Trig Power (cot-csc)",
    problem: "$\\displaystyle\\int\\cot^3 x\\csc^4 x\\,dx$",
    hint: "$u=\\cot x$; $du=-\\csc^2x\\,dx$; $\\csc^4x=(1+\\cot^2x)\\csc^2x=(1+u^2)(-du)$",
    answer: "$-\\dfrac{\\cot^4x}{4}-\\dfrac{\\cot^6x}{6}+C$",
  },
  {
    id: "c1-int-f58-03",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2558",
    subtopic: "Trig Power (tan-sec)",
    problem: "$\\displaystyle\\int\\tan^2 x\\sec x\\,dx$",
    hint: "ใช้ $\\tan^2x=\\sec^2x-1$; $\\int(\\sec^3x-\\sec x)\\,dx$; ใช้สูตร $\\int\\sec^3x\\,dx$",
    answer: "$\\dfrac{1}{2}(\\sec x\\tan x-3\\ln|\\sec x+\\tan x|)+C$",
  },

  {
    id: "c1-int-f58-04",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2558",
    subtopic: "Trig Substitution (Weierstrass)",
    problem: "$\\displaystyle\\int\\frac{1}{3\\cos x+2\\sin x+2}\\,dx$",
    hint: "แทน $t=\\tan(x/2)$; Weierstrass substitution",
    answer: "$\\displaystyle\\int\\frac{2\\,dt}{(t+1)^2+2}$ (หลังแทนตัวแปร)",
  },

  // ════════════ Improper Integrals ════════════
  {
    id: "c1-int-imp-01",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2556",
    subtopic: "อินทิกรัลไม่ตรงแบบ",
    problem: "$\\displaystyle\\int_0^\\infty e^{-x}\\,dx$",
    hint: "$\\int_0^b e^{-x}\\,dx=1-e^{-b}\\to1$",
    answer: "$1$",
  },
  {
    id: "c1-int-imp-02",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2556",
    subtopic: "อินทิกรัลไม่ตรงแบบ",
    problem: "$\\displaystyle\\int_1^\\infty\\frac{1}{x\\ln x}\\,dx$",
    hint: "แทน $u=\\ln x$: $\\int_0^\\infty du/u$",
    answer: "ลู่ออก",
  },
  {
    id: "c1-int-imp-03",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Final 2558",
    subtopic: "อินทิกรัลไม่ตรงแบบ (ซับซ้อน)",
    problem: "$\\displaystyle\\int_1^\\infty\\frac{1}{x^6+2x^4+x^2}\\,dx$",
    hint: "$x^2(x^2+1)^2$; partial fractions; ลู่เข้า",
    answer: "ลู่เข้า (เปรียบเทียบกับ $\\int_1^\\infty \\frac{1}{x^4}\\,dx$)",
  },

  // ════════════ Area and Volume (Final 2555–2558) ════════════
  {
    id: "c1-area-f55-01",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2555",
    subtopic: "พื้นที่ระหว่างเส้นโค้ง",
    problem: "กำหนดให้ $R$ ปิดล้อมด้วย $y=\\sqrt{x}$, $y=3$ และ $x+y=6$ จงหาพื้นที่ของ $R$",
    hint: "แบ่งที่ $x=4$: $\\int_0^4((6-x)-\\sqrt{x})\\,dx+\\int_4^9(3-\\sqrt{x})\\,dx$",
    answer: "$13$ ตารางหน่วย",
  },
  {
    id: "c1-arc-f55-01",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2555",
    subtopic: "ความยาวส่วนโค้ง",
    problem: "จงหาความยาวของส่วนของเส้นโค้ง $y=\\ln|\\sec x|$ เมื่อ $0\\le x\\le\\pi/3$",
    hint: "$y'=\\tan x$; $L=\\int_0^{\\pi/3}\\sec x\\,dx$",
    answer: "$\\ln(2+\\sqrt{3})$",
  },
  {
    id: "c1-area-f56-01",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2556",
    subtopic: "พื้นที่ระหว่างเส้นโค้ง",
    problem: "กำหนดให้ $R$ ปิดล้อมด้วย $y=x^2+2$ และ $y=-x$ จงหาพื้นที่ของ $R$",
    hint: "$x^2+2=-x\\Rightarrow x^2+x+2=0$; $\\Delta<0$ ไม่มีจุดตัด — ต้องอ้างอิง diagram ข้อสอบ",
    answer: "ไม่มีบริเวณปิดจากสองเส้นนี้เพียงอย่างเดียว (ไม่ตัดกัน)",
  },

  // ════════════ Midterm 2556 (Cal 1) ════════════
  {
    id: "c1-lim-mid56-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2556",
    subtopic: "ลิมิต (เติมคำตอบ)",
    problem: "$\\displaystyle\\lim_{x\\to1}\\frac{(x-1)(4x+1)}{x^2-x}$",
    hint: "$x^2-x=x(x-1)$; ตัด $(x-1)$",
    answer: "$5$",
  },
  {
    id: "c1-cont-mid56-01",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "Midterm 2556",
    subtopic: "ความต่อเนื่อง",
    problem: "กำหนดให้ $\\lim_{x\\to0}f(x)/x=6$ และ $\\lim_{x\\to0}f(x)$ มีค่า จงหา $\\lim_{x\\to0}f(x)$",
    hint: "ถ้า $\\lim f(x)=L\\ne0$ แล้ว $L/0$ ไม่มีค่า; ต้องมี $L=0$",
    answer: "$0$",
  },
  {
    id: "c1-cont-mid56-02",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "Midterm 2556",
    subtopic: "ความต่อเนื่อง (Chain)",
    problem: "กำหนดให้ $f$ ต่อเนื่อง และ $\\lim_{x\\to-2}f(x+1)=8$ จงหาค่าของ $\\sqrt[3]{f(-1)}$",
    hint: "เมื่อ $x\\to-2$: $x+1\\to-1$; ดังนั้น $f(-1)=8$",
    answer: "$2$",
  },

  // ════════════ Midterm 2557 (Cal 1) ════════════
  {
    id: "c1-lim-mid57-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2557",
    subtopic: "ลิมิต (เติมคำตอบ)",
    problem: "$\\displaystyle\\lim_{x\\to0}\\frac{x+1-\\cos x}{x}$",
    hint: "$\\frac{1-\\cos x}{x}\\to0$; $x/x=1$",
    answer: "$1$",
  },
  {
    id: "c1-lim-mid57-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2557",
    subtopic: "ลิมิต (เติมคำตอบ)",
    problem: "$\\displaystyle\\lim_{x\\to0}\\frac{e^{2x}-1}{e^x-1}$",
    hint: "$e^{2x}-1=(e^x-1)(e^x+1)$",
    answer: "$2$",
  },
  {
    id: "c1-lim-mid57-03",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2557",
    subtopic: "ลิมิต (แสดงวิธีทำ)",
    problem: "$\\displaystyle\\lim_{x\\to1}\\frac{\\sqrt[3]{x^3-1}}{x-1}$",
    hint: "เมื่อ $x\\to1$: ตัวเศษ $\\to0$ ช้ากว่า $x-1$; ลอง $x=1+h$ แล้วดูลำดับชั้น",
    answer: "$+\\infty$ (ลิมิตไม่มีค่าใน $\\mathbb{R}$)",
  },

  // ════════════ Midterm 2560 (Cal 1) ════════════
  {
    id: "c1-lim-mid60-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2560",
    subtopic: "ลิมิต (แสดงวิธีทำ)",
    problem: "$\\displaystyle\\lim_{x\\to-3}\\frac{2x^2+5x-3}{x+3}$",
    hint: "แยกตัวประกอบ: $(2x-1)(x+3)$",
    answer: "$2(-3)-1=-7$",
  },
  {
    id: "c1-lim-mid60-02",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2560",
    subtopic: "ลิมิต (แสดงวิธีทำ)",
    problem: "$\\displaystyle\\lim_{x\\to2}\\frac{x^3+3x^2-4x-12}{x-2}$",
    hint: "$x^3+3x^2-4x-12=(x-2)(x^2+5x+6)=(x-2)(x+2)(x+3)$",
    answer: "$(2+2)(2+3)=20$",
  },
  {
    id: "c1-lim-mid60-03",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2560",
    subtopic: "Sandwich Theorem",
    problem: "$\\displaystyle\\lim_{y\\to\\infty}(2y+3)^{1/y}$",
    hint: "$\\ln L=\\lim\\frac{\\ln(2y+3)}{y}\\to0$ (L'Hôpital)",
    answer: "$1$",
  },
  {
    id: "c1-der-mid60-01",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Midterm 2560",
    subtopic: "FTC + Chain Rule",
    problem: "จงหาอนุพันธ์ของ $F(x)=\\displaystyle\\int_{\\cos x}^{\\sin x}e^{-t^2}\\,dt$",
    hint: "$F'(x)=e^{-\\sin^2x}\\cdot\\cos x-e^{-\\cos^2x}\\cdot(-\\sin x)$",
    answer: "$e^{-\\sin^2x}\\cos x+e^{-\\cos^2x}\\sin x$",
  },

  // ════════════ Midterm 2547 (Cal 1) ════════════
  {
    id: "c1-lim-mid47-01",
    topic: PROBLEM_TYPES.LIMIT,
    source: "Midterm 2547",
    subtopic: "Sandwich",
    problem: "$\\displaystyle\\lim_{x\\to0}x^2\\cos\\frac{1}{x}$",
    hint: "$-x^2\\le x^2\\cos(1/x)\\le x^2$",
    answer: "$0$",
  },
  {
    id: "c1-cont-mid47-01",
    topic: PROBLEM_TYPES.CONTINUITY,
    source: "Midterm 2547",
    subtopic: "ความต่อเนื่อง (หาค่าคงที่)",
    problem: "$f(x)=\\begin{cases}x-5 & x\\ge-2 \\\\ 2kx+5 & x<-2\\end{cases}$ จงหา $k$ ที่ทำให้ $f$ ต่อเนื่องที่ $x=-2$",
    hint: "$f(-2)=-7$; $\\lim_{x\\to-2^-}(2k(-2)+5)=-4k+5=-7$",
    answer: "$k=3$",
  },
  {
    id: "c1-der-mid47-01",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Midterm 2547",
    subtopic: "Chain Rule ซับซ้อน",
    problem: "$y=(x+2)^2$, $u=x+3$, $x=t^2$ จงหา $dy/dt$ เมื่อ $t=1$",
    hint: "$dy/dt=dy/dx\\cdot dx/dt=2(x+2)\\cdot2t$; ที่ $t=1$: $x=1$",
    answer: "$2(3)\\cdot2=12$",
  },
  {
    id: "c1-der-mid47-02",
    topic: PROBLEM_TYPES.DERIVATIVE,
    source: "Midterm 2547",
    subtopic: "อนุพันธ์",
    problem: "กำหนดให้ $f(x)=x\\sin x$ จงหา $f'(\\pi)$",
    hint: "$f'(x)=\\sin x+x\\cos x$",
    answer: "$0+\\pi(-1)=-\\pi$",
  },

  // ════════════ Optimization Final 2558-2559 ════════════
  {
    id: "c1-app-f56-01",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2556",
    subtopic: "Related Rates",
    problem: "กล้องโทรทรรศน์ห่างจากฐานปล่อยจรวด 4 km จรวดเคลื่อนที่ขึ้นแนวดิ่ง ขณะจรวดอยู่สูง 3 km ด้วยความเร็ว 0.6 km/s จงหา (ก) อัตราการเปลี่ยนระยะทางระหว่างกล้องกับจรวด (ข) อัตราการเปลี่ยนมุมเงยของกล้อง",
    hint: "$d^2=16+h^2$; $\\dot{d}=h\\dot{h}/d$; $\\tan\\theta=h/4$; $\\sec^2\\theta\\cdot\\dot{\\theta}=\\dot{h}/4$",
    answer: "(ก) $\\dot{d}=3(0.6)/5=0.36$ km/s (ข) $\\dot{\\theta}=0.096$ rad/s",
  },
  {
    id: "c1-app-f59-01",
    topic: PROBLEM_TYPES.APPLICATION,
    source: "Final 2559",
    subtopic: "Optimization",
    problem: "จงหาพื้นที่สูงสุดของรูปสี่เหลี่ยมผืนผ้าที่ใหญ่ที่สุดที่แนบในครึ่งวงกลมรัศมี 10 หน่วย โดยด้านหนึ่งอยู่บนเส้นผ่านศูนย์กลาง",
    hint: "$A=2x\\sqrt{100-x^2}$; $dA/dx=0$: $100-2x^2=0$; $x=5\\sqrt{2}$",
    answer: "$A_{max}=100$ ตารางหน่วย",
  },

  // ════════════ Rif Exercise 3 (อินทิเกรัล) ════════════
  {
    id: "c1-int-rif-01",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Rif Exercise 3",
    subtopic: "อินทิกรัลค่าสัมบูรณ์",
    problem: "$\\displaystyle\\int|x|\\,dx$",
    hint: "แยกกรณี $x\\ge0$ และ $x<0$",
    answer: "$\\frac{x|x|}{2}+C$",
  },
  {
    id: "c1-int-rif-02",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Rif Exercise 3",
    subtopic: "อินทิกรัลจำกัดเขต (ค่าสัมบูรณ์)",
    problem: "$\\displaystyle\\int_{-\\pi/3}^{14\\pi/3}|\\sin x|\\,dx$",
    hint: "นับจำนวนช่วงครึ่งคาบที่ $|\\sin x|\\ge0$ ในช่วงที่กำหนด",
    answer: "$8$",
  },
  {
    id: "c1-int-rif-03",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Rif Exercise 3",
    subtopic: "อินทิกรัล max/min",
    problem: "$\\displaystyle\\int_0^{2\\pi}\\max\\{\\sin x,\\cos x\\}\\,dx$",
    hint: "แบ่งช่วงตรงที่ $\\sin x=\\cos x$",
    answer: "$2\\sqrt{2}$",
  },
  {
    id: "c1-int-rif-04",
    topic: PROBLEM_TYPES.INTEGRAL,
    source: "Rif Exercise 3",
    subtopic: "อินทิกรัลสลับลำดับ",
    problem: "กำหนดให้ $\\displaystyle\\int_0^1 f(x)\\,dx=2$ จงหา $\\displaystyle\\int_1^2 f(x-1)\\,dx$",
    hint: "ให้ $u=x-1$",
    answer: "$2$",
  },
];

// ─── โจทย์ Calculus II (2301108) ──────────────────────────────────────────

export const cal2Problems = [
  // ════════════ ลำดับ (Sequences) ════════════
  {
    id: "c2-seq-001",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 54",
    subtopic: "ลำดับลู่เข้า/ลู่ออก",
    problem:
      "จงพิจารณาว่าลำดับ $\\left\\{\\dfrac{\\sin(3n+2)}{2n-1}\\right\\}$ ลู่เข้าหรือลู่ออก ถ้าลู่เข้าจงบอกค่าลิมิตมาด้วย",
    answer: "ลู่เข้า ลิมิต $=0$ (Squeeze Theorem)",
  },
  {
    id: "c2-seq-002",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 54",
    subtopic: "ลำดับลู่เข้า/ลู่ออก",
    problem:
      "จงพิจารณาว่าลำดับ $\\left\\{\\dfrac{(-1)^n\\sqrt{n^2-1}}{n^3+2}\\right\\}$ ลู่เข้าหรือลู่ออก",
    answer: "ลู่เข้า ลิมิต $=0$",
  },
  {
    id: "c2-seq-003",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 54",
    subtopic: "ลิมิตของลำดับ",
    problem:
      "จงหาลิมิตของลำดับ $\\left\\{\\left(\\dfrac{n}{3}\\right)^n\\right\\}$",
    answer: "ลู่ออก ($\\to\\infty$)",
  },
  {
    id: "c2-seq-004",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 54",
    subtopic: "ผลรวมอนุกรม",
    problem:
      "จงหาผลบวกของ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{(n+2)(n+3)}$",
    hint: "ใช้ partial fractions แล้ว telescoping",
    answer: "$\\dfrac{1}{3}$",
  },
  {
    id: "c2-seq-005",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 61",
    subtopic: "ลำดับลู่เข้า/ลู่ออก",
    problem:
      "จงพิจารณาว่าลำดับต่อไปนี้ลู่เข้าหรือลู่ออก ถ้าเป็นลำดับลู่เข้าจงหาค่าลิมิต\n(1.1) $\\left\\{\\dfrac{(-1)^n\\cos n}{2}\\right\\}$\n(1.2) $\\left\\{\\dfrac{(-1)^{3n+1}}{n}\\right\\}$\n(1.3) $\\left\\{n^{1/\\ln(2n)}\\right\\}$",
    answer: "(1.1) ลู่ออก (แกว่ง)  (1.2) ลู่เข้า 0  (1.3) ลู่เข้า $e$",
  },
  {
    id: "c2-seq-006",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 61",
    subtopic: "ลำดับย่อย",
    problem: `กำหนดให้ $a_n=\\tan\\left(\\dfrac{3n\\pi}{n}\\right)$
(2.1) ให้ลำดับย่อย $b_k=a_{6k+1}$ จะได้ว่า $\\displaystyle\\lim_{k\\to\\infty}b_k=$
(2.2) จงพิจารณาว่าลำดับ $\\{a_n\\}$ ลู่เข้าหรือลู่ออก พร้อมทั้งให้เหตุผลประกอบ`,
    answer: "(2.1) $\\tan(3\\pi)=0$  (2.2) ลู่ออก เพราะลำดับย่อยต่างกัน",
  },
  {
    id: "c2-seq-007",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 61",
    subtopic: "ลำดับลู่เข้า",
    problem: `จงพิจารณาว่าลำดับ $\\{a_n\\}$ ลู่เข้าหรือลู่ออก ถ้าลู่เข้าจงหาค่าลิมิตนั้นด้วย เมื่อ
$a_n=\\dfrac{3\\cdot 5\\cdot 7\\cdots(2n+1)}{4\\cdot 8\\cdot 12\\cdots(4n)}$`,
    answer: "ลู่ออก",
  },
  {
    id: "c2-seq-008",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "MID 61",
    subtopic: "ลำดับทางเดียว",
    problem: `กำหนดให้ $a_n=\\dfrac{1}{1\\cdot 2}+\\dfrac{1}{2\\cdot 3}+\\cdots+\\dfrac{1}{n(n+1)}$
(4.1) จงแสดงว่าลำดับ $\\{a_n\\}$ เป็นลำดับทางเดียว
(4.2) จงแสดงว่าลำดับ $\\{a_n\\}$ มีขอบเขต พร้อมทั้งพิจารณาว่าลำดับ $\\{a_n\\}$ ลู่เข้าหรือลู่ออก`,
    answer:
      "(4.1) $a_{n+1}>a_n$ เสมอ  (4.2) $a_n<1$ เสมอ (bounded above by 1), ลู่เข้า 1",
  },

  // ════════════ อนุกรม (Series) ════════════
  {
    id: "c2-ser-001",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 54",
    subtopic: "การทดสอบอนุกรม",
    problem:
      "จงพิจารณาว่าอนุกรม $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{4n^2-3}$ ลู่เข้าหรือลู่ออก",
    answer: "ลู่เข้า (ใช้ p-series/comparison test กับ $\\frac{1}{n^2}$)",
  },
  {
    id: "c2-ser-002",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 54",
    subtopic: "การทดสอบอนุกรม",
    problem:
      "จงใช้การทดสอบโดยใช้การเปรียบเทียบทดสอบว่าอนุกรม $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{1+n\\cdot n^{\\sin n}\\cdot\\pi}$ ลู่เข้าหรือลู่ออก",
    answer: "ลู่เข้า",
  },
  {
    id: "c2-ser-003",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 54",
    subtopic: "อนุกรมสลับ",
    problem:
      "จงพิจารณาว่า $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$ ลู่เข้าแบบสัมบูรณ์หรือลู่เข้าแบบมีเงื่อนไข",
    answer: "ลู่เข้าแบบมีเงื่อนไข (Alternating Series Test)",
  },
  {
    id: "c2-ser-004",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 61",
    subtopic: "การทดสอบอนุกรม (ทำเครื่องหมาย)",
    problem: `ให้พิจารณาอนุกรมในแต่ละข้อต่อไปนี้ว่าลู่เข้าหรือลู่ออก:
(1) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^2}{7^n}\\cdot\\pi^n$
(2) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n\\sqrt{n}}$
(3) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{1+\\ln^2 n}\\cdot n$
(4) $\\displaystyle\\sum_{n=1}^{\\infty}\\left(1+\\dfrac{1}{n}\\right)^{n^2}e^{-n}$
(5) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\cos\\dfrac{n\\pi}{2}+\\sin\\dfrac{n\\pi}{4}}{n^2}$`,
    answer:
      "(1) ลู่เข้า (geometric, r=π/7<1)  (2) ลู่เข้า (p=3/2>1)  (3) ลู่ออก  (4) ลู่เข้า  (5) ลู่เข้า",
  },
  {
    id: "c2-ser-005",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 61",
    subtopic: "การทดสอบอนุกรม",
    problem: `ให้พิจารณาอนุกรมในแต่ละข้อต่อไปนี้ว่าลู่เข้าหรือลู่ออก:
(1) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{(2n+1)\\ln(n+1)}$
(2) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{\\ln(n+1)\\ln(n+2)}$
(3) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\ln n}{\\ln(n+1)}$
(4) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\ln^2 n}{(2n+1)\\ln(2n+1)}$
(5) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(\\ln n)^{2n+1}\\cdot e}{\\ln(n+1)}$`,
    answer:
      "(1) ลู่ออก (integral test)  (2) ลู่ออก  (3) ลู่ออก  (4) ลู่ออก  (5) ลู่ออก",
  },
  {
    id: "c2-ser-006",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 61",
    subtopic: "ผลรวมอนุกรม (telescoping)",
    problem: `กำหนดให้ $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{1}{\\ln 4}\\cdot\\dfrac{1}{(n+1)(2n+1)}$
จงเติมคำตอบลงในช่องว่าง:
(1) $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{1}{(n+1)(2n+3)}=$
(2) $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{1}{(n+2)(2n+1)}=$
(3) $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{1}{(2n+1)(2n+2)(2n+3)}=$
(4) $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{1}{(2n+1)(2n+2)(2n+3)(2n+4)}=$`,
    answer: "ใช้ partial fractions และ telescoping",
  },
  {
    id: "c2-ser-007",
    topic: PROBLEM_TYPES.SERIES,
    source: "MID 61",
    subtopic: "อนุกรมสลับ",
    problem: `จงพิจารณาว่าอนุกรมต่อไปนี้เป็นอนุกรมลู่เข้าหรือลู่ออก ถ้าลู่เข้าเป็นอนุกรมลู่เข้าแบบสัมบูรณ์หรือลู่เข้าแบบมีเงื่อนไข:
(9.1) $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n\\dfrac{n^3}{\\ln^3(n)}\\cdot\\dfrac{\\sin(n)}{n^3\\ln(n)}$
(9.2) $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n\\dfrac{1}{n}\\ln n$`,
    answer:
      "ใช้ Alternating Series Test และ Absolute Convergence Test",
  },
  {
    id: "c2-ser-008",
    topic: PROBLEM_TYPES.SERIES,
    source: "Exercise 1",
    subtopic: "อนุกรมลู่เข้า/ลู่ออก",
    problem:
      "จงพิจารณาว่าอนุกรมต่อไปนี้ลู่เข้าหรือลู่ออก\n(a) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n}{\\sqrt{4^{2+n}}}$\n(b) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\sin^2 n+3n^2}{\\sqrt{n^4+\\cos n}}$\n(c) $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac{n^4}{2n^2+1}-\\dfrac{n^4}{2n^2-1}\\right)$",
    answer:
      "(a) ลู่เข้า (b) ลู่ออก (c) ลู่เข้า",
  },
  {
    id: "c2-ser-009",
    topic: PROBLEM_TYPES.SERIES,
    source: "Exercise 1",
    subtopic: "p-series และ comparison",
    problem:
      "จงพิจารณาว่าอนุกรมต่อไปนี้ลู่เข้าหรือลู่ออก\n(a) $\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{1}{n(\\ln n)^2}$\n(b) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n^3+1}{(n^2+1)(n^2+4)}$\n(c) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n^2+1}{n^2 3^n-3n+2}$\n(d) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{5^n-3^n}{7^n+5^n}$",
    answer:
      "(a) ลู่เข้า (integral test)  (b) ลู่เข้า  (c) ลู่เข้า  (d) ลู่เข้า",
  },
  {
    id: "c2-ser-010",
    topic: PROBLEM_TYPES.SERIES,
    source: "Exercise 1",
    subtopic: "ratio test และ root test",
    problem:
      "จงพิจารณาว่าอนุกรมต่อไปนี้ลู่เข้าหรือลู่ออก\n(a) $\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{n\\ln n}{(\\ln n)^n}$\n(b) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n!\\cdot e^n}{(2n)^n}$\n(c) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n+1}{e^{n^2+2n}}$\n(d) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^{2n+1}}{2+(n+2)!}$",
    answer:
      "(a) ลู่เข้า  (b) ลู่เข้า  (c) ลู่เข้า  (d) ลู่เข้า",
  },
  {
    id: "c2-ser-011",
    topic: PROBLEM_TYPES.SERIES,
    source: "Exercise 1",
    subtopic: "อนุกรมสลับ",
    problem:
      "จงพิจารณาว่าอนุกรมต่อไปนี้ลู่เข้าหรือลู่ออก ถ้าลู่เข้าเป็นแบบสัมบูรณ์หรือมีเงื่อนไข:\n(a) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{2n+3}$\n(b) $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n\\sin\\dfrac{1}{n}$\n(c) $\\displaystyle\\sum_{n=2}^{\\infty}(-1)^n\\dfrac{\\cos n}{(\\ln n)^{\\ln n}}$\n(d) $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n\\dfrac{\\arctan n}{n}$",
    answer:
      "(a) ลู่เข้าแบบมีเงื่อนไข  (b) ลู่เข้าแบบสัมบูรณ์  (c) ลู่เข้าแบบสัมบูรณ์  (d) ลู่เข้าแบบมีเงื่อนไข",
  },

  // ════════════ Power Series & Taylor Series ════════════
  {
    id: "c2-ps-001",
    topic: PROBLEM_TYPES.POWER_SERIES,
    source: "MID 61",
    subtopic: "รัศมีการลู่เข้า",
    problem:
      "จงหารัศมีแห่งการลู่เข้าของอนุกรมกำลังต่อไปนี้\n(10.1) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x-100)^n}{n!}$\n(10.2) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n(2n+1)}{(n+1)2^n}(x-2)^n$",
    answer: "(10.1) $R=\\infty$  (10.2) $R=2$ (ใช้ ratio test)",
  },
  {
    id: "c2-ps-002",
    topic: PROBLEM_TYPES.POWER_SERIES,
    source: "MID 61",
    subtopic: "Taylor polynomial",
    problem: `กำหนดให้ $f(x)=\\ln(x-3)$
(11.1) จงหาพหุนามเทย์เลอร์ดีกรีสอง $P_2(x)$ ของ $f$ รอบจุด $x=4$
(11.2) ใช้ $P_2(x)$ หาค่าประมาณของ $\\ln(1.6)$`,
    answer:
      "(11.1) $P_2(x)=\\ln 1+(x-4)-\\frac{1}{2}(x-4)^2$  (11.2) แทน $x=4-e^{-0.4}$",
  },
  {
    id: "c2-ps-003",
    topic: PROBLEM_TYPES.POWER_SERIES,
    source: "MID 61",
    subtopic: "Taylor polynomial + error bound",
    problem: `กำหนดให้ $f(x)=\\cos x$
(12.1) จงประมาณค่าของ $\\displaystyle\\int_0^{1/2}\\cos\\sqrt{x}\\,dx$ โดยใช้พหุนามเทย์เลอร์กรี 3 ของ $f$ รอบจุด $x=0$
(เมื่อ $\\cos x=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots$)
(12.2) จงหาขอบเขตของความผิดพลาดในการประมาณค่าข้อ 12.1`,
    answer: "แทน $x\\to\\sqrt{x}$ แล้วอินทิเกรต",
  },
  {
    id: "c2-ps-004",
    topic: PROBLEM_TYPES.POWER_SERIES,
    source: "Exercise 2",
    subtopic: "Taylor polynomial",
    problem:
      "จงหาพหุนามเทย์เลอร์ดีกรี 4 ของ $f(x)=\\sqrt{1+x}$ รอบจุด $x=0$",
    answer:
      "$P_4(x)=1+\\frac{1}{2}x-\\frac{1}{8}x^2+\\frac{1}{16}x^3-\\frac{5}{128}x^4$",
  },
  {
    id: "c2-ps-005",
    topic: PROBLEM_TYPES.POWER_SERIES,
    source: "Exercise 2",
    subtopic: "Taylor polynomial",
    problem:
      "จงหาพหุนามเทย์เลอร์ดีกรี 4 ของ $f(x)=\\dfrac{1}{x-1}$ รอบจุด $x=2$",
    answer: "$P_4(x)=\\sum_{n=0}^{4}(-1)^n(x-2)^n$",
  },
  {
    id: "c2-ps-006",
    topic: PROBLEM_TYPES.POWER_SERIES,
    source: "Exercise 2",
    subtopic: "Taylor series",
    problem: `กำหนดให้ $f(x)=\\ln(2x+1)$
(a) จงประมาณค่าของ $\\ln\\dfrac{3}{2}$ ด้วยพหุนามเทย์เลอร์ดีกรี 3 ของ $f$ รอบจุด $x=0$
(b) จงหาขอบเขตของความผิดพลาดในการประมาณค่าข้อ (a)`,
    answer:
      "(a) $P_3(x)=2x-2x^2+\\frac{8}{3}x^3$, แทน $x=\\frac{1}{4}$  (b) ดูจาก remainder term",
  },

  // ════════════ Vectors in 3D ════════════
  {
    id: "c2-vec-001",
    topic: PROBLEM_TYPES.VECTOR,
    source: "MID 61",
    subtopic: "เวกเตอร์พื้นฐาน",
    problem: `กำหนดให้ $A=(-1,2,0)$ ถ้าเวกเตอร์ $B$ มีขนาดเป็นสองเท่าของเวกเตอร์ $A$ และมุมระหว่างเวกเตอร์ $A$ กับ $B$ เท่ากับ $30°$ แล้ว
$A\\cdot B=$ และ $A\\times B=$`,
    answer:
      "$A\\cdot B=|A||B|\\cos 30°=\\sqrt{5}\\cdot 2\\sqrt{5}\\cdot\\frac{\\sqrt{3}}{2}=5\\sqrt{3}$;  $|A\\times B|=|A||B|\\sin 30°=5$",
  },
  {
    id: "c2-vec-002",
    topic: PROBLEM_TYPES.VECTOR,
    source: "MID 61",
    subtopic: "เวกเตอร์ตั้งฉาก",
    problem:
      "ถ้า $(a,b,c)$ เป็นเวกเตอร์หนึ่งหน่วยที่ตั้งฉากกับเวกเตอร์ $(-1,2,0)$ และ $(1,0,2)$ แล้ว $a+b+c=$",
    answer: "$\\vec{n}=\\vec{u}\\times\\vec{v}$, normalize",
  },
  {
    id: "c2-vec-003",
    topic: PROBLEM_TYPES.VECTOR,
    source: "MID 61",
    subtopic: "ภาพฉาย (projection)",
    problem:
      "กำหนดให้ $A$ เป็นเวกเตอร์ที่มีขนาด 5 หน่วยและมีทิศตรงข้ามกับเวกเตอร์ $(3,0,1)$ แล้วภาพฉายเวกเตอร์ของเวกเตอร์ $A$ บนเวกเตอร์ $B=(-1,2,0)$ คือ",
    answer:
      "$\\text{proj}_B A=\\dfrac{A\\cdot B}{|B|^2}B$",
  },
  {
    id: "c2-vec-004",
    topic: PROBLEM_TYPES.VECTOR,
    source: "Exercise 3",
    subtopic: "เวกเตอร์พื้นฐาน",
    problem: `กำหนดให้ $\\vec{u}=(1,1,2)$, $\\vec{v}=(4,1,5)$ และ $\\vec{w}=(-2,1,-1)$
จงหา
(a) $\\|\\vec{v}-2\\vec{w}\\|$
(b) $\\vec{u}\\times\\vec{w}$
(c) เวกเตอร์หนึ่งหน่วยที่ตั้งฉากกับ $\\vec{u}$ และ $\\vec{w}$`,
    answer:
      "(a) $\\|(8,-1,7)\\|=\\sqrt{64+1+49}=\\sqrt{114}$  (b) $(-3,-3,3)$  (c) $\\pm\\frac{1}{\\sqrt{3}}(-1,-1,1)$",
  },
  {
    id: "c2-vec-005",
    topic: PROBLEM_TYPES.VECTOR,
    source: "Exercise 3",
    subtopic: "จริง/เท็จ เวกเตอร์",
    problem: `ให้ $\\vec{u},\\vec{v},\\vec{w}$ เป็นเวกเตอร์ใดๆ ในปริภูมิสามมิติ จงพิจารณาข้อความต่อไปนี้ว่าเป็นจริงหรือเท็จ:
(a) ถ้า $\\vec{u}+\\vec{v}+\\vec{w}=\\vec{0}$ แล้ว $\\vec{u}\\times\\vec{v}=\\vec{v}\\times\\vec{w}=\\vec{u}\\times\\vec{w}$
(b) ถ้า $\\vec{u}$ ขนานกับ $\\vec{w}$ แล้ว $\\vec{u}\\times(\\vec{v}\\times\\vec{w})=(\\vec{u}\\times\\vec{v})\\times\\vec{w}$
(c) ถ้า $\\vec{v}\\cdot\\vec{v}=1$ แล้ว $\\|\\vec{u}-(\\vec{u}\\cdot\\vec{v})\\vec{v}\\|=\\|\\vec{u}\\times\\vec{v}\\|$
(d) ถ้า $\\vec{u}\\times\\vec{v}=\\vec{0}$ แล้วจะมีจำนวนจริง $a\\neq 0$ และ $b\\neq 0$ ซึ่ง $a\\vec{u}+b\\vec{v}=\\vec{0}$`,
    answer: "(a) T  (b) T  (c) T  (d) F",
  },

  // ════════════ เส้นตรงและระนาบ ════════════
  {
    id: "c2-lp-001",
    topic: PROBLEM_TYPES.LINE_PLANE,
    source: "MID 61",
    subtopic: "เส้นตรงในปริภูมิ",
    problem: `กำหนดให้ $L_1$ เป็นเส้นตรงที่ผ่านจุด $P_1(1,2,-1)$ และ $P_2(2,1,1)$
จงเติมคำตอบลงในช่องว่างที่กำหนดให้:
(14.1) สมการเวกเตอร์ของ $L_1$ คือ $(x,y,z)=(1,\\_,{-1})+(1,{-1},\\_)t$
(14.2) สมการอิงตัวแปรเสริมของ $L_1$ คือ
(14.3) สมการสมมาตรของ $L_1$ คือ $\\dfrac{x-1}{\\_}=\\_$
(14.4) จุด $P_3(3,0,3)$ และ $P_4(0,3,-3)$ จุดใดอยู่บน $L_1$
(14.5) ให้ $L_2: \\dfrac{x}{5}=\\dfrac{y-1}{-2}=\\dfrac{z}{5}$ และ $\\theta$ เป็นมุมระหว่าง $L_1$ กับ $L_2$ จงหา $\\cos\\theta$`,
    answer:
      "(14.1) $(1,-1,-1)+(1,-1,2)t$  (14.3) $\\frac{x-1}{1}=\\frac{y-2}{-1}=\\frac{z+1}{2}$  (14.4) $P_3$",
  },
  {
    id: "c2-lp-002",
    topic: PROBLEM_TYPES.LINE_PLANE,
    source: "MID 61",
    subtopic: "เส้นตรงขนาน/ตัดกัน",
    problem: `พิจารณาเส้นตรง $L_1: x=2+t,\\;y=t,\\;z=1-2t$ และ $L_2: \\dfrac{2-x}{1}=\\dfrac{y-1}{3}$
(15.1) ระบุค่า $A_1$ และ $A_2$ ที่ทำให้เป็นเวกเตอร์แสดงทิศทาง
(15.2) พิจารณาว่า $L_1$ และ $L_2$ ขนานกันหรือไม่
ถ้าไม่ขนานกัน ให้ตรวจสอบว่าเส้นตรงทั้งสองตัดกันหรือไม่
(15.3) พิจารณาว่า $L_1$ และ $L_2$ เป็นเส้นไขว้ต่างระนาบหรือไม่`,
    answer: "ตรวจสอบ: $A_1=(1,1,-2)$, $A_2=(1,3,0)$ — ไม่ขนาน",
  },
  {
    id: "c2-lp-003",
    topic: PROBLEM_TYPES.LINE_PLANE,
    source: "MID 61",
    subtopic: "ระนาบ",
    problem: `ให้ $M$ เป็นระนาบที่ผ่านจุด $(2,-1,4)$ และมีเวกเตอร์แนวฉาก $(-1,2,-5)$
(17.1) สมการเวกเตอร์ของ $M$ คือ และสมการคาร์ทีเซียนของ $M$ คือ
(17.2) จงหาระยะจากจุด $P(5,5,5)$ ถึง $M$`,
    answer:
      "(17.1) $-1(x-2)+2(y+1)-5(z-4)=0 \\Rightarrow -x+2y-5z+20=0$  (17.2) $\\dfrac{|-5+10-25+20|}{\\sqrt{30}}$",
  },
  {
    id: "c2-lp-004",
    topic: PROBLEM_TYPES.LINE_PLANE,
    source: "Exercise 3",
    subtopic: "ระนาบ",
    problem:
      "จงหาระยะทางระหว่างระนาบ $x+\\sqrt{2}y-z=2$ กับระนาบ $x+\\sqrt{2}y-z=5$",
    answer:
      "$d=\\dfrac{|5-2|}{\\sqrt{1+2+1}}=\\dfrac{3}{2}$",
  },
  {
    id: "c2-lp-005",
    topic: PROBLEM_TYPES.LINE_PLANE,
    source: "Exercise 3",
    subtopic: "มุมระหว่างเส้นตรงกับระนาบ",
    problem:
      "จงหามุมระหว่างเส้นตรง $\\dfrac{x}{5}=\\dfrac{y-1}{-2}=\\dfrac{z}{5}$ กับระนาบ $3x-2y-z=10$",
    answer: "$\\sin\\theta=\\dfrac{|\\vec{d}\\cdot\\vec{n}|}{|\\vec{d}||\\vec{n}|}$",
  },
  {
    id: "c2-lp-006",
    topic: PROBLEM_TYPES.LINE_PLANE,
    source: "Exercise 3",
    subtopic: "จุดใกล้ที่สุด",
    problem:
      "จงหาจุดบนระนาบ $x=2y+3z+23$ ซึ่งอยู่ใกล้จุด $(-2,4,3)$ มากที่สุด",
    answer: "หาฉายของจุดลงบนระนาบ",
  },

  // ════════════ เส้นโค้งในปริภูมิ ════════════
  {
    id: "c2-cur-001",
    topic: PROBLEM_TYPES.CURVE,
    source: "Exercise 3",
    subtopic: "เส้นโค้งพารามิเตอร์",
    problem: `กำหนดสมการเส้นโค้ง $\\vec{r}(t)=(\\sin t+\\cos t,\\sin t-\\cos t,2)$ เมื่อ $0\\leq t\\leq 2\\pi$
(a) จงหาความยาวส่วนโค้งของเส้นโค้งนี้บนช่วง $[0,2\\pi]$
(b) จงหาความโค้งของเส้นโค้ง ณ $t$ ใดก็ได้
(c) จงหาสมการอิงตัวแปรเสริมของเส้นสัมผัสเส้นโค้งที่จุด $(1,-1,2)$`,
    answer:
      "(a) $2\\sqrt{2}\\pi$  (b) $\\kappa=\\dfrac{1}{\\sqrt{2}}$  (c) $x=1+t,y=-1+t,z=2$",
  },
  {
    id: "c2-cur-002",
    topic: PROBLEM_TYPES.CURVE,
    source: "MID 61",
    subtopic: "เวกเตอร์สัมผัสและแนวฉาก",
    problem: `กำหนดให้ $\\vec{r}(t)=\\left(2\\sqrt{3}t,3-\\cos 2t,3+\\sin 2t\\right)$ เมื่อ $0\\leq t\\leq 2\\pi$
(a) จงหาเวกเตอร์สัมผัสหน่วย $\\vec{T}(t)$ และเวกเตอร์แนวฉากหน่วย $\\vec{N}(t)$ ของเส้นโค้ง
(b) จงหาความยาวของเส้นโค้งบนช่วง $[0,2\\pi]$
(c) จงหาความโค้ง $\\kappa(t)$`,
    answer:
      "(a) $\\vec{T}(t)=\\frac{1}{2}(\\sqrt{3},\\sin 2t,\\cos 2t)$, $\\vec{N}(t)=(0,\\cos 2t,-\\sin 2t)$  (b) $8\\pi$  (c) $\\kappa=\\frac{1}{4}$",
  },
  {
    id: "c2-cur-003",
    topic: PROBLEM_TYPES.CURVE,
    source: "MID 61",
    subtopic: "ความโค้ง ความยาวส่วนโค้ง",
    problem: `เส้นโค้งเส้นหนึ่งมีสมการเป็น $\\vec{r}(t)=\\left(\\dfrac{t^3}{3}-2,1-2t^2,5-2t\\right),\\;t\\in[0,2]$
มีความยาวส่วนโค้งเท่ากับ ___`,
    answer: "$\\int_0^2|\\vec{r}'(t)|\\,dt$",
  },
  {
    id: "c2-cur-004",
    topic: PROBLEM_TYPES.CURVE,
    source: "MID 61",
    subtopic: "เวกเตอร์สัมผัสและความโค้ง ณ จุด",
    problem: `เส้นโค้งเส้นหนึ่งมีสมการเป็น $\\vec{r}(t)=\\left(1-t,2-\\dfrac{t^2}{2},\\dfrac{t^3}{3}\\right)$
ที่จุด $t=1$ เส้นโค้งนี้มีความโค้งเท่ากับ ___`,
    answer: "$\\kappa=\\dfrac{|\\vec{r}'\\times\\vec{r}''|}{|\\vec{r}'|^3}$ แทน $t=1$",
  },

  // ════════════ ฟังก์ชันหลายตัวแปร ════════════
  {
    id: "c2-mv-001",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "โดเมนของฟังก์ชัน",
    problem:
      "กำหนดให้ $f(x,y)=\\ln(x^2+y)$ จงหาโดเมนของ $f$ และเขียนรูปแสดงโดเมนของ $f$",
    answer: "$\\{(x,y)\\mid x^2+y>0\\}$",
  },
  {
    id: "c2-mv-002",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "ลิมิตของฟังก์ชันหลายตัวแปร",
    problem: `จงหาค่าของ
(a) $\\displaystyle\\lim_{(x,y)\\to(2,1)}\\dfrac{x^2-4y^2}{x^2-3xy+2y^2}$
(b) $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{x^2+y^2}{\\sqrt{x^2+y^2+1}-1}$`,
    answer:
      "(a) แยกตัวประกอบ: $\\dfrac{(x-2y)(x+2y)}{(x-y)(x-2y)}\\to\\dfrac{4}{1}=4$  (b) rationalize: $\\to 2$",
  },
  {
    id: "c2-mv-003",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "ลิมิตไม่มีค่า",
    problem: `กำหนดให้ $f(x,y)=\\dfrac{x^{4/3}(\\sqrt[3]{y})+x(\\sqrt[3]{y^2})}{x^3+y}$
(a) จงหา $\\displaystyle\\lim_{(x,y)\\to(0,0)}$ บน $C_1$ โดย $C_1$ เป็นเส้นโค้ง $y=x^3$
(b) จงแสดงว่า $\\displaystyle\\lim_{(x,y)\\to(0,0)}f(x,y)$ ไม่มีค่า`,
    answer:
      "(a) ตามเส้น $y=x^3$: $\\to 2$  (b) ตามเส้นอื่น (เช่น $y=0$) ได้ค่าต่างกัน",
  },
  {
    id: "c2-mv-004",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "ความต่อเนื่องในหลายตัวแปร",
    problem: `กำหนดให้ $h(x,y)=\\begin{cases}\\dfrac{xy^2}{\\sqrt{x^2+y^2}} & (x,y)\\neq(0,0) \\\\ 0 & (x,y)=(0,0)\\end{cases}$
(a) จงหาค่าของ $\\displaystyle\\lim_{(x,y)\\to(0,0)}h(x,y)$
(b) จงพิจารณาว่า $h$ มีความต่อเนื่องที่จุด $(0,0)$ หรือไม่`,
    answer:
      "(a) 0 (ใช้ Squeeze: $|h|\\leq|y|\\to 0$)  (b) ต่อเนื่อง",
  },
  {
    id: "c2-mv-005",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "อนุพันธ์ย่อย",
    problem: `กำหนดให้ $f(x,y)=\\begin{cases}\\dfrac{x^4+x^3+2x^2+y^2}{x^2+y^4} & (x,y)\\neq(0,0) \\\\ 2 & (x,y)=(0,0)\\end{cases}$
จงหา $\\dfrac{\\partial f}{\\partial x}(0,0)$ โดยใช้บทนิยาม`,
    answer:
      "$f_x(0,0)=\\lim_{h\\to 0}\\dfrac{f(h,0)-f(0,0)}{h}=\\lim_{h\\to 0}\\dfrac{h+1+2+0}{h^2+0}-\\dfrac{2}{h}$",
  },
  {
    id: "c2-mv-006",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "อนุพันธ์ย่อย",
    problem: `กำหนดให้ $f(x,y)=(x^4+3)\\ln y$ และ $g(x,y)=\\dfrac{x^2}{x^4+y^2}$
จงหา $f_y$ และ $g_x$`,
    answer:
      "$f_y=\\dfrac{x^4+3}{y}$;  $g_x=\\dfrac{2x(x^4+y^2)-x^2\\cdot 4x^3}{(x^4+y^2)^2}$",
  },
  {
    id: "c2-mv-007",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 54",
    subtopic: "อนุพันธ์ย่อยอันดับสอง",
    problem:
      "กำหนดให้ $f(x,y,z)=y\\sin(xy+z^2)$ จงหา $f_{yz}$",
    answer:
      "$f_y=\\sin(xy+z^2)+xy\\cos(xy+z^2)$;  $f_{yz}=2yz\\cos(xy+z^2)-2xy^2z\\sin(xy+z^2)$",
  },
  {
    id: "c2-mv-008",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 55",
    subtopic: "โดเมนและลิมิตในหลายตัวแปร",
    problem: `กำหนดให้ $f(x,y)=\\sqrt{y-x}$
(a) จงหาค่าของ $f(1,3)$ และโดเมนของ $f$ พร้อมทั้งวาดรูปแสดงโดเมน
(b) จงพิจารณาว่าลิมิตต่อไปนี้มีค่าหรือไม่ ถ้ามีค่าจงหาค่าของลิมิต:
$\\displaystyle\\lim_{(x,y)\\to(2,1)}\\dfrac{\\sqrt{x^2-4y^2+1}-1}{x^2-xy-2y^2}$`,
    answer:
      "(a) $f(1,3)=\\sqrt{2}$, โดเมน: $\\{(x,y)\\mid y\\geq x\\}$  (b) rationalize แล้วแทนค่า",
  },
  {
    id: "c2-mv-009",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "Exercise 4",
    subtopic: "ลิมิต",
    problem:
      "จงหาค่าของลิมิตต่อไปนี้:\n(a) $\\displaystyle\\lim_{(x,y)\\to(\\pi,0)}\\sin(xe^y)$\n(b) $\\displaystyle\\lim_{(x,y)\\to(1,0)}e^{xy}\\sin(x+y-1)$\n(c) $\\displaystyle\\lim_{(x,y)\\to(1,2)}\\dfrac{xy-y}{x-1}$",
    answer: "(a) $\\sin\\pi=0$  (b) $0$  (c) $2$",
  },
  {
    id: "c2-mv-010",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "Exercise 4",
    subtopic: "ลิมิตไม่มีค่า",
    problem:
      "จงพิจารณาว่าลิมิตต่อไปนี้มีค่าหรือไม่:\n(a) $\\displaystyle\\lim_{(x,y)\\to(1,-1)}\\dfrac{x+y}{x^2-y^2}$\n(b) $\\displaystyle\\lim_{(x,y)\\to(1,1)}\\dfrac{x^2-y^2}{x-y}$",
    answer: "(a) ไม่มีค่า (ตรวจเส้น $x=1$ และ $y=-1$)  (b) มีค่า $=2$",
  },

  // ════════════ Double Integrals ════════════
  {
    id: "c2-di-001",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "Exercise 5",
    subtopic: "อินทิกรัลซ้อน",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_2^4\\int_1^2(y+2x)\\,dx\\,dy$",
    answer:
      "$\\int_2^4\\left[xy+x^2\\right]_1^2\\,dy=\\int_2^4(y+3)\\,dy=\\left[\\frac{y^2}{2}+3y\\right]_2^4=14$",
  },
  {
    id: "c2-di-002",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "Exercise 5",
    subtopic: "อินทิกรัลสองชั้นบนโดเมน",
    problem:
      "จงหาค่าของ $\\displaystyle\\iint_D x\\,dA$ เมื่อ $D$ เป็นบริเวณที่ปิดล้อมด้วยแกน $x$, แกน $y$ และเส้นตรง $x+y=1$",
    answer:
      "$\\int_0^1\\int_0^{1-x}x\\,dy\\,dx=\\int_0^1 x(1-x)\\,dx=\\frac{1}{6}$",
  },
  {
    id: "c2-di-003",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "Exercise 5",
    subtopic: "เปลี่ยนลำดับการอินทิเกรต",
    problem:
      "จงหาค่าของ $\\displaystyle\\iint_D e^{x^2}\\,dA$ เมื่อ $D$ เป็นบริเวณภายในรูปสามเหลี่ยมที่จุดยอดเป็น $(0,0),(1,0)$ และ $(1,4)$",
    answer:
      "สลับลำดับ: $\\int_0^4\\int_{y/4}^1 e^{x^2}\\,dx\\,dy$ จะคำนวณยาก — ใช้ $\\int_0^1\\int_0^{4x}e^{x^2}\\,dy\\,dx=\\int_0^1 4xe^{x^2}\\,dx=2(e-1)$",
  },
  {
    id: "c2-di-004",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "Exercise 5",
    subtopic: "อินทิกรัลบนโดเมนพิเศษ",
    problem:
      "จงหาค่าของ $\\displaystyle\\iint_D xy\\,dA$ เมื่อ $D$ เป็นบริเวณที่ปิดล้อมด้วย $y=x-1$ และ $y^2=2x+6$",
    answer: "หาจุดตัดก่อน แล้วตั้งขอบเขต",
  },

  // ════════════ สมการเชิงอนุพันธ์ (ODE) ════════════
  {
    id: "c2-ode-001",
    topic: PROBLEM_TYPES.ODE,
    source: "Exercise 6",
    subtopic: "Separable ODE",
    problem:
      "จงหาผลเฉลยเฉพาะของสมการเชิงอนุพันธ์ $e^{x-y}\\cos x\\dfrac{dy}{dx}=e^x\\sin(2x)$ เมื่อ $y(\\pi)=0$",
    hint: "จัดรูปแยกตัวแปร: $e^y\\,dy=\\frac{\\sin 2x}{\\cos x}\\,dx=2\\sin x\\,dx$",
    answer: "$y=\\ln(3-2\\cos x)$",
  },
  {
    id: "c2-ode-002",
    topic: PROBLEM_TYPES.ODE,
    source: "Exercise 6",
    subtopic: "Separable ODE",
    problem:
      "จงหาผลเฉลยเฉพาะของสมการเชิงอนุพันธ์ $y'=\\dfrac{\\sqrt{y^2+1}}{yx^2+y}$ เมื่อ $y(0)=1$",
    answer: "แยกตัวแปร: $\\int\\dfrac{y\\,dy}{\\sqrt{y^2+1}}=\\int\\dfrac{dx}{x^2+1}$",
  },
  {
    id: "c2-ode-003",
    topic: PROBLEM_TYPES.ODE,
    source: "Exercise 6",
    subtopic: "แบบจำลองการเจริญเติบโต",
    problem: `เมื่อเริ่มต้นสำรวจ เวลา $t=0$ พบว่าแบคทีเรียชนิดหนึ่งมีจำนวน 10,000 ตัว เมื่อเวลาผ่านไป 2 ชั่วโมง จำนวนแบคทีเรียเพิ่มขึ้นเป็น 14,400 ตัว ถ้าอัตราการเปลี่ยนแปลงของจำนวนแบคทีเรียต่อชั่วโมงเป็น $\\dfrac{dx}{dt}=k\\sqrt{x}$ เมื่อ $x$ เป็นจำนวนแบคทีเรีย และ $k$ เป็นค่าคงตัว จงหาจำนวนแบคทีเรีย ณ เวลา $t$ ชั่วโมงใดๆ`,
    answer: "$x(t)=\\left(100+\\frac{k}{2}t\\right)^2$, หาค่า $k$ จาก $x(2)=14400$",
  },
  {
    id: "c2-ode-004",
    topic: PROBLEM_TYPES.ODE,
    source: "Exercise 6",
    subtopic: "สมการเอกพันธุ์",
    problem:
      "จงหาผลเฉลยทั่วไปของสมการเชิงอนุพันธ์ $xy'=y+\\sqrt{x^2-y^2}$ เมื่อ $x>0$",
    answer: "ใช้ $v=y/x$ ทำให้เป็น separable",
  },
  {
    id: "c2-ode-005",
    topic: PROBLEM_TYPES.ODE,
    source: "Exercise 6",
    subtopic: "Exact ODE",
    problem:
      "จงพิจารณาว่าสมการเชิงอนุพันธ์ $(e^x+xy)\\,dx+\\left(e^y+\\dfrac{x^2}{2}\\right)dy=0$ เป็นสมการแมนตรงหรือไม่ พร้อมให้เหตุผลประกอบ",
    answer:
      "$M_y=x$, $N_x=x$ → แมนตรง;  $F=e^x+xy e^y-...$+C",
  },

  // ════════════ FINAL 59 ════════════
  {
    id: "c2-mv-f59-01",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "โดเมนฟังก์ชันหลายตัวแปร",
    problem:
      "กำหนดให้ $f(x,y)=\\dfrac{\\sqrt{y-x^2}}{1-x^2}$ จงเขียนรูปพร้อมแรเงาแสดงโดเมนของ $f$ บนระนาบ",
    hint: "ต้องการ $y\\ge x^2$ และ $x^2\\ne1$",
    answer: "โดเมน: $\\{(x,y)\\mid y\\ge x^2,\\; |x|\\ne1\\}$",
  },
  {
    id: "c2-mv-f59-02",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "ลิมิตฟังก์ชันหลายตัวแปร",
    problem:
      "$\\displaystyle\\lim_{(x,y)\\to(1,0)} e^{xy}\\sin(x+y-1)$",
    hint: "แทนค่าตรงได้ทันที",
    answer: "$0$",
  },
  {
    id: "c2-mv-f59-03",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "ลิมิตฟังก์ชันหลายตัวแปร",
    problem:
      "$\\displaystyle\\lim_{(x,y)\\to(1,2)}\\frac{xy-y}{x-1}$",
    hint: "แยกตัวประกอบ: $\\frac{y(x-1)}{x-1}$",
    answer: "$2$",
  },
  {
    id: "c2-mv-f59-04",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "ลิมิตบนเส้นโค้ง",
    problem:
      "กำหนดให้ $C$ เป็นเส้นโค้ง $y=x^2$ จงหา $\\displaystyle\\lim_{(x,y)\\to(0,0)\\text{ บน }C}\\frac{x^2y}{x^4-3y^2}$",
    hint: "แทน $y=x^2$ เข้าในนิพจน์",
    answer: "ลิมิตบน $C$: $\\frac{x^4}{x^4-3x^4}=\\frac{1}{-2}=-\\frac{1}{2}$",
  },
  {
    id: "c2-mv-f59-05",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "ลิมิตฟังก์ชันหลายตัวแปร",
    problem:
      "$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{2x^3y^6}{x^4+|xy|+y^4}$",
    hint: "ใช้ Squeeze Theorem: ตัวเศษ $\\le 2|x^3||y^6|$, ตัวส่วน $\\ge|xy|$",
    answer: "$0$",
  },
  {
    id: "c2-mv-f59-06",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "อนุพันธ์ย่อยและเส้นโค้งระดับ",
    problem:
      "กำหนดให้ $f(x,y)=x^2y^3+5x-y+2$ จงหา $f_x(x,y),\\;f_y(x,y),\\;f_x(-1,1),\\;f_y(-1,1)$ และสมการของเส้นโค้งที่เป็นรอยตัดของพื้นผิว $z=f(x,y)$ กับระนาบ $x=-1$ ที่จุด $(-1,1,-3)$",
    hint: "$f_x=2xy^3+5$; $f_y=3x^2y^2-1$",
    answer: "$f_x(-1,1)=3,\\;f_y(-1,1)=2$; เส้นสัมผัส: $z+3=2(y-1)$",
  },
  {
    id: "c2-mv-f59-07",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "Chain Rule",
    problem:
      "กำหนดให้ $z=f(3s^2+2t,\\;g(s,t))-t\\ln(st^2)$ และ $\\dfrac{\\partial z}{\\partial s}(2,-4)=-6$ ถ้า $f_1(4,g(2,-4))=f_2(4,g(2,-4))$ และ $g_s(2,-4)=-8$ จงหาค่าของ $f_1(4,g(2,-4))$",
    hint: "diff $z$ ตาม $s$ แล้วแทนค่าที่ $(s,t)=(2,-4)$",
    answer: "ตั้งสมการจาก $\\partial z/\\partial s$ แล้วแก้หา $f_1$",
  },
  {
    id: "c2-mv-f59-08",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "ความต่อเนื่องของฟังก์ชันหลายตัวแปร",
    problem:
      "จงพิจารณาว่าฟังก์ชัน $f(x,y)=\\begin{cases}\\dfrac{x^2\\sin^2y}{x^4+y^2} & (x,y)\\ne(0,0)\\\\ 0 & (x,y)=(0,0)\\end{cases}$ มีความต่อเนื่องที่จุด $(0,0)$ หรือไม่ เพราะเหตุใด",
    hint: "ตรวจสอบลิมิตตาม $y=mx^2$: $\\frac{x^2m^2x^4}{x^4+m^2x^4}=\\frac{m^2}{1+m^2}$ ขึ้นกับ $m$",
    answer: "ไม่ต่อเนื่อง (ลิมิตไม่มีค่าเดียว ขึ้นอยู่กับเส้นทางเข้า)",
  },
  {
    id: "c2-mv-f59-09",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 59",
    subtopic: "Total Differential / ประมาณค่า",
    problem:
      "จงใช้ค่าเชิงอนุพันธ์รวมหาค่าประมาณของ $\\dfrac{1}{3}\\sqrt[3]{0.98}\\cdot\\sqrt[4]{(1.05)^3}$ ตอบทศนิยมสามตำแหน่ง",
    hint: "$f(x,y)=x^{1/3}y^{3/4}$, $(x_0,y_0)=(1,1)$; $\\Delta x=-0.02,\\Delta y=0.05$",
    answer: "$\\approx 1.016$",
  },
  {
    id: "c2-di-f59-01",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 59",
    subtopic: "สลับลำดับอินทิเกรต",
    problem:
      "จงเปลี่ยนลำดับของการอินทิเกรตของ $\\displaystyle\\int_0^1\\int_{\\pi/2}^{\\arcsin y}f(x,y)\\,dx\\,dy$",
    hint: "วาดรูปภูมิภาค: $y=\\sin x$, $0\\le x\\le\\pi/2$, $0\\le y\\le1$",
    answer: "$\\displaystyle\\int_0^{\\pi/2}\\int_0^{\\sin x}f(x,y)\\,dy\\,dx$",
  },
  {
    id: "c2-di-f59-02",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 59",
    subtopic: "อินทิกรัลสองชั้น",
    problem:
      "กำหนดให้ $D$ เป็นบริเวณที่ปิดล้อมด้วยเส้นตรง $y=x-1$ และพาราโบลา $y^2=2x+6$ จงหาค่าของ $\\displaystyle\\iint_D xy\\,dA$",
    hint: "หาจุดตัดก่อน: $(x-1)^2=2x+6\\Rightarrow x^2-4x-5=0$",
    answer: "$\\dfrac{135}{8}$ (หรือแสดงวิธีทำ)",
  },
  {
    id: "c2-di-f59-03",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 59",
    subtopic: "อินทิกรัลสองชั้น",
    problem:
      "จงหาค่าของ $\\displaystyle\\int_4^2\\int_1^2(y+2x)\\,dx\\,dy$",
    hint: "สังเกตว่าขอบเขตบนกลับด้าน (4 ลงมา 2)",
    answer: "$-9$",
  },
  {
    id: "c2-di-f59-04",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 59",
    subtopic: "อินทิกรัลสองชั้น",
    problem:
      "$\\displaystyle\\iint_D x\\sqrt{y+1}\\,dA$ เมื่อ $D=[0,1]\\times[0,3]$",
    hint: "แยกอินทิกรัล: $\\int_0^1 x\\,dx\\cdot\\int_0^3\\sqrt{y+1}\\,dy$",
    answer: "$\\dfrac{1}{2}\\cdot\\dfrac{14}{3}=\\dfrac{7}{3}$",
  },
  {
    id: "c2-ode-f59-02",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 59",
    subtopic: "ODE (การเจริญเติบโต)",
    problem:
      "เมื่อเริ่มต้นสำรวจแบคทีเรียชนิดหนึ่งพบว่ามีจำนวน 10,000 ตัว เมื่อเวลาผ่านไป 2 ชั่วโมง จำนวนแบคทีเรียเพิ่มขึ้นเป็น 14,400 ตัว ถ้าอัตราการเปลี่ยนแปลงของจำนวนแบคทีเรียต่อชั่วโมงเป็น $\\frac{dx}{dt}=k\\sqrt{x}$ จงหาจำนวนแบคทีเรีย ณ เวลา $t$ ใดๆ",
    hint: "แยกตัวแปร: $x^{-1/2}dx=k\\,dt$; $2\\sqrt{x}=kt+C$",
    answer: "$x(t)=(100+10t)^2=x(t)=(100+10t)^2$",
  },
  {
    id: "c2-ode-f59-03",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 59",
    subtopic: "Linear ODE (Integrating Factor)",
    problem:
      "จงหาตัวประกอบอินทิกรัลของสมการเชิงอนุพันธ์ $xy'-2y=x^2$",
    hint: "เขียนในรูป $y'-\\frac{2}{x}y=x$; $\\mu=e^{\\int-2/x\\,dx}=x^{-2}$",
    answer: "ตัวประกอบอินทิกรัล $\\mu=x^{-2}$; ผลเฉลย $y=x^3/3\\cdot C\\cdot x^2$",
  },
  {
    id: "c2-ode-f59-04",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 59",
    subtopic: "Exact ODE",
    problem:
      "จงหาผลเฉลยเฉพาะของ $\\left(\\dfrac{2xy}{x^2+1}-2x\\right)dx+\\left(\\ln(x^2+1)-2\\right)dy=0$ เมื่อ $y(0)=-1$",
    hint: "ตรวจ $M_y=N_x$; $M_y=\\frac{2x}{x^2+1}$, $N_x=\\frac{2x}{x^2+1}$ ✓ exact",
    answer: "$y\\ln(x^2+1)-x^2-2y=C$; แทน $(0,-1)$: $C=2$",
  },
  {
    id: "c2-ode-f59-05",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 59",
    subtopic: "Linear ODE",
    problem:
      "จงหาผลเฉลยทั่วไปของสมการเชิงอนุพันธ์ $\\dfrac{dy}{dx}+\\dfrac{2y}{x}=x+1$",
    hint: "$\\mu=e^{\\int 2/x\\,dx}=x^2$; $(x^2 y)'=x^3+x^2$",
    answer: "$y=\\dfrac{x^2}{4}+\\dfrac{x}{3}+\\dfrac{C}{x^2}$",
  },
  {
    id: "c2-ode-f59-06",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 59",
    subtopic: "Separable ODE",
    problem:
      "จงหาผลเฉลยเฉพาะของ $\\left(\\dfrac{5}{x}-x^3 y\\right)dx+\\dfrac{1}{y}dy=0$ เมื่อ $y(1)=2$",
    hint: "จัดรูป separable: $\\frac{dy}{y}=(-5/x+x^3)dx$... ตรวจ exact ก่อน",
    answer: "$5\\ln|x|-\\frac{x^4}{4}+\\ln|y|=C$; แทน $(1,2)$ หา $C$",
  },

  // ════════════ FINAL 62 A-C ════════════
  {
    id: "c2-mv-f62-01",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "โดเมนและภูมิภาคฟังก์ชันหลายตัวแปร",
    problem:
      "กำหนดให้ $f(x,y)=\\sqrt{4-x^2-y^2}+\\sqrt{y-x}$ จงวาดรูปแสดงบริเวณโดเมน พร้อมทั้งหาพื้นที่ของบริเวณ $R=\\{(x,y)\\in D\\mid x\\ge0\\}$",
    hint: "ต้องการ $x^2+y^2\\le4$ และ $y\\ge x$ พร้อมกัน; $R$ คือส่วนหนึ่งของแผ่นดิสก์",
    answer: "พื้นที่ $R = \\frac{3\\pi}{4}$",
  },
  {
    id: "c2-mv-f62-02",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "ลิมิตฟังก์ชันหลายตัวแปร",
    problem:
      "$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{9x^2-5x^2y^2+6y^2}{3x^2+2y^2}$",
    hint: "แทน $y=mx$: $\\frac{(9-5m^2x^2)x^2+6m^2x^2}{(3+2m^2)x^2}\\to\\frac{9+6m^2}{3+2m^2}$ แปรผันตาม $m$",
    answer: "ลิมิตไม่มีค่า (ขึ้นกับทิศทาง)",
  },
  {
    id: "c2-mv-f62-03",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "ลิมิตฟังก์ชันหลายตัวแปร",
    problem:
      "$\\displaystyle\\lim_{(x,y)\\to(2,1)}\\frac{3x^2y+x^2-6xy^2-2xy}{x^3-2x^2y+3xy-6y^2}$",
    hint: "แยกตัวประกอบ: เศษ $=x^2(3y+1)-2xy(3y+1)=x(x-2y)(3y+1)$",
    answer: "$\\dfrac{5}{7}$",
  },
  {
    id: "c2-mv-f62-04",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "ลิมิตฟังก์ชันหลายตัวแปร",
    problem:
      "$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{e^{4x^2+6y^2}-e^{2y^2}}{x^2+y^2}$",
    hint: "ใช้ $e^u-e^v\\approx(u-v)e^v$ เมื่อ $(x,y)\\to(0,0)$",
    answer: "$4$ (ใช้ l'Hôpital ทิศทาง radial)",
  },
  {
    id: "c2-mv-f62-05",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "อนุพันธ์ย่อยโดยนิยาม",
    problem:
      "กำหนดให้ $f(x,y)=\\dfrac{4x^3+x^2+y^3+6xy^2}{x^2+4y^2}$ เมื่อ $(x,y)\\ne(0,0)$ และ $f(0,0)=1$ จงหา $f_x(0,0)$ และ $f_y(0,0)$",
    hint: "ใช้นิยาม: $f_x(0,0)=\\lim_{h\\to0}\\frac{f(h,0)-f(0,0)}{h}$",
    answer: "$f_x(0,0)=3,\\;f_y(0,0)=0$",
  },
  {
    id: "c2-mv-f62-06",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "Chain Rule (ซับซ้อน)",
    problem:
      "กำหนดให้ $z=v^4-3u$, $u=y^2+x\\ln y$, $v=x^2y\\ln x$ จงแสดงวิธีหาค่าของ $\\dfrac{\\partial z}{\\partial x}+\\dfrac{\\partial z}{\\partial y}$ เมื่อ $(x,y)=(1,1)$",
    hint: "Chain rule: $\\partial z/\\partial x = -3\\partial u/\\partial x+4v^3\\partial v/\\partial x$; แทนค่า $(1,1)$",
    answer: "คำนวณผ่าน chain rule ที่ $(1,1)$",
  },
  {
    id: "c2-mv-f62-07",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "อนุพันธ์ย่อยอันดับสอง",
    problem:
      "กำหนดให้ $f(x,y,z)=4z^3-3(x^2+y^2)z$ จงหา $f_{xx}(x,y,z)$, $f_{yy}(1,0,\\frac{1}{2})$ และ $f_{yzy}(x,y,z)$",
    hint: "$f_x=-6xz$; $f_{xx}=-6z$; $f_y=-6yz$",
    answer: "$f_{xx}=-6z$; $f_{yy}(1,0,1/2)=-3$; $f_{yzy}=-6z$",
  },
  {
    id: "c2-mv-f62-08",
    topic: PROBLEM_TYPES.MULTIVARIABLE,
    source: "FINAL 62",
    subtopic: "Total Differential / ประมาณค่า",
    problem:
      "จงหาค่าประมาณของ $\\sqrt[3]{8.01}\\cdot\\sqrt{4.03}$ ด้วยค่าเชิงอนุพันธ์รวม $f(8.01,4.03)\\approx f(x_0,y_0)+f_x\\Delta x+f_y\\Delta y$ ตอบทศนิยมสามตำแหน่ง",
    hint: "$f(x,y)=x^{1/3}y^{1/2}$; $(x_0,y_0)=(8,4)$; $f(8,4)=2\\cdot2=4$",
    answer: "$\\approx 4.017$",
  },

  // ════════════ FINAL 62 D-F ════════════
  {
    id: "c2-di-f62-01",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 62",
    subtopic: "สลับลำดับอินทิเกรต",
    problem:
      "พิจารณาอินทิกรัล $\\displaystyle\\int_0^1\\int_1^{e^y}f(x,y)\\,dx\\,dy$ จงวาดรูปแสดงโดเมน และเปลี่ยนลำดับการอินทิเกรต",
    hint: "จาก $1\\le x\\le e^y$ และ $0\\le y\\le1$: ขอบด้านซ้าย $x=1$, ขอบด้านขวา $x=e^y\\Rightarrow y=\\ln x$",
    answer: "$\\displaystyle\\int_1^e\\int_{\\ln x}^{1}f(x,y)\\,dy\\,dx$",
  },
  {
    id: "c2-di-f62-02",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 62",
    subtopic: "อินทิกรัลสองชั้น",
    problem:
      "กำหนดให้ $D=\\{(x,y)\\mid -1\\le x\\le1,\\;1\\le y\\le2\\}$ จงหา $\\displaystyle\\iint_D(3x^2-y)\\,dA$",
    hint: "Fubini: $\\int_{-1}^1\\int_1^2(3x^2-y)\\,dy\\,dx$",
    answer: "$-1$",
  },
  {
    id: "c2-di-f62-03",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 62",
    subtopic: "อินทิกรัลสองชั้น",
    problem:
      "กำหนดให้ $D=\\{(x,y)\\mid -1\\le x\\le0,\\;0\\le y\\le1\\}$ จงหา $\\displaystyle\\iint_D xe^{xy}\\,dA$",
    hint: "อินทิเกรต $y$ ก่อน: $\\int_0^1 xe^{xy}\\,dy = e^{xy}\\big|_0^1 = e^x-1$",
    answer: "$\\displaystyle\\int_{-1}^0(e^x-1)\\,dx = (e^{-1}-1)-(-1) = e^{-1} = 1/e$",
  },
  {
    id: "c2-di-f62-04",
    topic: PROBLEM_TYPES.DOUBLE_INTEGRAL,
    source: "FINAL 62",
    subtopic: "ปริมาตรด้วย Double Integral",
    problem:
      "จงหาปริมาตรของรูปทรงตันที่อยู่เหนือระนาบ $XY$ และปิดล้อมด้วยผิว $z=x$, $y=x$, $x+y=2$ และ $z=0$",
    hint: "บริเวณฉายบนระนาบ $xy$: สามเหลี่ยมมุมที่ $(0,0),(1,1),(2,0)$; $V=\\iint_D x\\,dA$",
    answer: "$V=\\dfrac{2}{3}$",
  },
  {
    id: "c2-ode-f62-01",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 62",
    subtopic: "Exact ODE",
    problem:
      "จงพิจารณาว่าสมการ $(3x^2y^2+2xy)dx+(2xy^3+y^2)dy=0$ เป็นสมการแมนตรงหรือไม่ ถ้าใช่จงหาผลเฉลยทั่วไป",
    hint: "$M_y=6x^2y+2x$; $N_x=2y^3+y^2$... ตรวจว่าเท่ากัน",
    answer: "ตรวจ $M_y\\ne N_x$; ไม่ใช่ exact ในรูปเดิม (ต้องหา integrating factor)",
  },
  {
    id: "c2-ode-f62-02",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 62",
    subtopic: "Exact ODE",
    problem:
      "จงพิจารณาว่าสมการ $(\\cos y+y\\cos x)dx+(\\sin x-x\\sin y)dy=0$ เป็นสมการแมนตรงหรือไม่ ถ้าใช่จงหาผลเฉลยทั่วไป",
    hint: "$M_y=-\\sin y+\\cos x$; $N_x=\\cos x-\\sin y$ ✓ exact",
    answer: "$F=x\\cos y+y\\sin x=C$",
  },
  {
    id: "c2-ode-f62-03",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 62",
    subtopic: "Integrating Factor",
    problem:
      "จงหา integrating factor $\\mu$ ของสมการ $(3x^2+e^y)dx+(2x^3+3xe^y)dy=0$ แล้วหาผลเฉลยทั่วไป",
    hint: "$\\frac{M_y-N_x}{N}=\\frac{e^y-3e^y}{3xe^y}=\\frac{-2}{3x}$; $\\mu=x^{-2/3}$",
    answer: "ใช้ $\\mu(x)=e^{\\int(M_y-N_x)/N\\,dx}$ แล้ว solve",
  },
  {
    id: "c2-ode-f62-04",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 62",
    subtopic: "Linear ODE",
    problem:
      "จงหาผลเฉลยทั่วไปของ $(x^2-4)y'-2xy=3(x-2)^2(x+2)$ เมื่อ $x>2$ โดยให้ตอบเป็นฟังก์ชัน $y$ ในเทอมของ $x$",
    hint: "หาร $(x^2-4)$: $y'-\\frac{2x}{x^2-4}y=3(x-2)$; $\\mu=\\frac{1}{x^2-4}$",
    answer: "$y=(x^2-4)\\left(3x+C\\right)/(x-2)$",
  },
  {
    id: "c2-ode-f62-05",
    topic: PROBLEM_TYPES.ODE,
    source: "FINAL 62",
    subtopic: "Bernoulli ODE",
    problem:
      "จงหาวิธีการแปลงสมการเชิงอนุพันธ์ $xyy'-3y^2=x^7$ โดยการเขียน $z$ ในเทอมของ $y$ เพื่อให้ได้สมการเชิงเส้นในตัวแปร $x$ และ $z$ พร้อมระบุสมการเชิงเส้นที่ได้",
    hint: "Bernoulli: หาร $y$: $xy'-3y=x^7/y$; ให้ $z=y^2$: $z'=2yy'$",
    answer: "$z'-\\frac{6}{x}z=2x^6$; ผลเฉลย $y^2=Cx^6+x^7$",
  },

  // ════════════ Cal2 Midterm 2555 (Sequences & Series) ════════════
  {
    id: "c2-seq-mid55-01",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "Midterm Cal2 2555",
    subtopic: "ลิมิตของลำดับ",
    problem: "$\\displaystyle\\lim_{n\\to\\infty}\\left(1-\\frac{1}{n}\\right)^{2n}$",
    hint: "รูปแบบ $(1-1/n)^n\\to1/e$; $(1-1/n)^{2n}=[(1-1/n)^n]^2$",
    answer: "$e^{-2}$",
  },
  {
    id: "c2-seq-mid55-02",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "Midterm Cal2 2555",
    subtopic: "ลิมิตของลำดับ",
    problem: "$\\displaystyle\\lim_{n\\to\\infty}n^{1/n}$",
    hint: "$\\ln L=\\lim\\frac{\\ln n}{n}\\to0$ (L'Hôpital)",
    answer: "$1$",
  },
  {
    id: "c2-seq-mid55-03",
    topic: PROBLEM_TYPES.SEQUENCE,
    source: "Midterm Cal2 2555",
    subtopic: "ลิมิตของลำดับ",
    problem: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n!}{n^n}$ (ลำดับนี้ลู่เข้าหรือออก?)",
    hint: "ใช้ Ratio test: $a_{n+1}/a_n=(n/(n+1))^n\\cdot(1/(n+1))\\to0$",
    answer: "ลู่เข้า 0",
  },
  {
    id: "c2-ser-mid55-01",
    topic: PROBLEM_TYPES.SERIES,
    source: "Midterm Cal2 2555",
    subtopic: "อนุกรม (เปรียบเทียบ)",
    problem: "จงทดสอบว่าอนุกรม $\\displaystyle\\sum_{n=1}^\\infty\\frac{n}{3n^2+n}$ ลู่เข้าหรือลู่ออก",
    hint: "$n/(3n^2+n)\\sim 1/(3n)$; เปรียบเทียบกับ harmonic series",
    answer: "ลู่ออก (Limit Comparison กับ $1/n$)",
  },
  {
    id: "c2-ser-mid55-02",
    topic: PROBLEM_TYPES.SERIES,
    source: "Midterm Cal2 2555",
    subtopic: "อนุกรม (อัตราส่วน)",
    problem: "จงทดสอบว่าอนุกรม $\\displaystyle\\sum_{n=1}^\\infty\\frac{1}{(2n+1)!}\\cdot\\frac{(n+8)!}{(n+2)!}$ ลู่เข้าหรือออก",
    hint: "Ratio test: $\\frac{a_{n+1}}{a_n}=\\frac{(2n+1)!}{(2n+3)!}\\cdot\\frac{(n+9)!/(n+3)!}{(n+8)!/(n+2)!}$",
    answer: "ลู่เข้า",
  },
  {
    id: "c2-ser-mid55-03",
    topic: PROBLEM_TYPES.SERIES,
    source: "Midterm Cal2 2555",
    subtopic: "อนุกรม (สลับเครื่องหมาย)",
    problem: "จงทดสอบว่าอนุกรม $\\displaystyle\\sum_{n=2}^\\infty\\frac{\\ln n}{(-1)^n n}$ ลู่เข้าสมบูรณ์ ลู่เข้ามีเงื่อนไข หรือลู่ออก",
    hint: "ตรวจสอบ absolute convergence: $\\sum |a_n|=\\sum\\frac{\\ln n}{n}$; เปรียบเทียบกับ $1/n$",
    answer: "ลู่เข้ามีเงื่อนไข (Alternating Series Test ผ่าน, แต่ $\\sum|a_n|$ ลู่ออก)",
  },
  {
    id: "c2-ser-mid55-04",
    topic: PROBLEM_TYPES.SERIES,
    source: "Midterm Cal2 2555",
    subtopic: "ผลบวกอนุกรม",
    problem: "จงหาผลบวกของอนุกรม $\\displaystyle\\sum_{n=1}^\\infty\\frac{2n-1}{(n+1)(n^2+3n+2)}$",
    hint: "$(n+1)(n^2+3n+2)=(n+1)^2(n+2)$; Partial fractions",
    answer: "$\\dfrac{5}{n+1}-\\dfrac{3}{(n+1)^2}-\\dfrac{5}{n+2}$ (partial fractions; ผลรวมจาก telescoping)",
  },
];

// ─── เมตาดาต้า / สถิติ ────────────────────────────────────────────────────
export const mathProblemsMeta = {
  totalCal1: cal1Problems.length,
  totalCal2: cal2Problems.length,
  sources: {
    cal1: [
      "MID 55", "MID 57", "MID 59", "MID 60", "Mock 2562",
      "Midterm 2547", "Midterm 2556", "Midterm 2557", "Midterm 2560",
      "Final 2555", "Final 2556", "Final 2558", "Final 2559", "Final 2560",
      "Slides Part 1", "Slides Part 2",
      "Rif Exercise 1", "Rif Exercise 2", "Rif Exercise 3", "Rif Exercise 4",
    ],
    cal2: [
      "MID 54", "MID 61",
      "FINAL 54", "FINAL 55", "FINAL 58", "FINAL 59", "FINAL 62",
      "Midterm Cal2 2555",
      "Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4", "Exercise 5", "Exercise 6",
    ],
  },
  topicsCal1: [
    "ลิมิต",
    "ความต่อเนื่อง",
    "อนุพันธ์",
    "การประยุกต์",
    "อินทิกรัล",
  ],
  topicsCal2: [
    "ลำดับ",
    "อนุกรม",
    "Power Series",
    "เวกเตอร์",
    "เส้นตรงและระนาบ",
    "เส้นโค้ง",
    "ฟังก์ชันหลายตัวแปร",
    "Double Integrals",
    "ODE",
  ],
};

// ─── Utility functions ─────────────────────────────────────────────────────
export function getProblemsByTopic(topic, subject = "all") {
  const all = [...cal1Problems, ...cal2Problems];
  const pool =
    subject === "cal1"
      ? cal1Problems
      : subject === "cal2"
      ? cal2Problems
      : all;
  return pool.filter((p) => p.topic === topic);
}

export function getProblemsBySource(source) {
  return [...cal1Problems, ...cal2Problems].filter((p) =>
    p.source.toLowerCase().includes(source.toLowerCase())
  );
}

export function getRandomProblems(count = 5, subject = "all") {
  const pool =
    subject === "cal1"
      ? cal1Problems
      : subject === "cal2"
      ? cal2Problems
      : [...cal1Problems, ...cal2Problems];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default { cal1Problems, cal2Problems, mathProblemsMeta };

