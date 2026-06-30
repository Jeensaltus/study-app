import { sec, bul, para, sep, buildSol } from "./solutionFormat.js";

export const CAL1_TEMPLATES = [
  {
    id: "c1-lim-rational",
    topic: "limit", examType: "midterm", difficulty: "medium",
    subtopic: "ลิมิต 0/0",
    params: { a: [2, 3, 4, 5, 6, 7, 8] },
    build: ({ a }) => {
      const ans = `$${2 * a}$`;
      return {
        problem: `จงหาค่า $\\displaystyle\\lim_{x\\to ${a}}\\dfrac{x^2-${a * a}}{x-${a}}$`,
        answer: ans,
        solution: buildSol([
          sec("ตรวจรูปแบบ", `แทน $x=${a}$`),
          bul(`เศษ: $${a}^2-${a*a}=0$`),
          bul(`ส่วน: $${a}-${a}=0$ → รูป $\\dfrac{0}{0}$ → ต้องแยกตัวประกอบ`),
          sec(`แยกตัวประกอบเศษ`),
          bul(`$x^2-${a*a}=(x-${a})(x+${a})$`),
          sec(`ตัดปัจจัยร่วม $(x-${a})$`),
          para(`$\\displaystyle\\lim_{x\\to${a}}\\dfrac{(x-${a})(x+${a})}{x-${a}}=\\lim_{x\\to${a}}(x+${a})$`),
          sec(`แทน $x=${a}$`),
          para(`$=${a}+${a}=${2*a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-lim-poly",
    topic: "limit", examType: "midterm", difficulty: "easy",
    subtopic: "ลิมิตพหุนาม",
    params: { a: [1, 2, 3, -1, -2] },
    build: ({ a }) => {
      const val = 2 * a * a - 3 * a + 1;
      const ans = `$${val}$`;
      return {
        problem: `จงหาค่า $\\displaystyle\\lim_{x\\to ${a}}(2x^2-3x+1)$`,
        answer: ans,
        solution: buildSol([
          sec(`คุณสมบัติ`),
          bul(`$f(x)=2x^2-3x+1$ เป็นพหุนาม → ต่อเนื่องทุกจุด`),
          bul(`ดังนั้น $\\displaystyle\\lim_{x\\to a}f(x)=f(a)$`),
          sec(`แทนค่าโดยตรง $x=${a}$`),
          bul(`$2(${a})^2-3(${a})+1$`),
          bul(`$=2\\cdot${a*a}-${3*a}+1=${2*a*a}-${3*a}+1$`),
          sec(`ผลลัพธ์`),
          para(`$=${val}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-lim-inf",
    topic: "limit", examType: "midterm", difficulty: "medium",
    subtopic: "ลิมิตที่อนันต์",
    params: { n: [2, 3, 4] },
    build: ({ n }) => {
      const ans = `$\\dfrac{${n}}{2}$`;
      return {
        problem: `จงหาค่า $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{${n}x^2+1}{2x^2-${n}}$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "หารทั้งเศษและส่วนด้วย $x^2$ (กำลังสูงสุด)"),
          para(`$\\dfrac{${n}x^2+1}{2x^2-${n}}=\\dfrac{${n}+\\frac{1}{x^2}}{2-\\frac{${n}}{x^2}}$`),
          sec(`แทน $x\\to\\infty$`),
          bul(`$\\dfrac{1}{x^2}\\to0$ และ $\\dfrac{${n}}{x^2}\\to0$`),
          sec(`ผลลัพธ์`),
          para(`$\\displaystyle\\lim_{x\\to\\infty}=\\dfrac{${n}+0}{2-0}=\\dfrac{${n}}{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-lim-trig",
    topic: "limit", examType: "midterm", difficulty: "medium",
    subtopic: "ลิมิตตรีโกณมิติ",
    params: { k: [2, 3, 4] },
    build: ({ k }) => {
      const ans = `$${k}$`;
      return {
        problem: `จงหาค่า $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(${k}x)}{x}$`,
        answer: ans,
        solution: buildSol([
          sec(`จัดรูปให้ใช้สูตรมาตรฐาน`),
          para(`$\\dfrac{\\sin(${k}x)}{x}=${k}\\cdot\\dfrac{\\sin(${k}x)}{${k}x}$`),
          sec(`ใช้สูตรมาตรฐาน`),
          bul(`$\\displaystyle\\lim_{u\\to0}\\dfrac{\\sin u}{u}=1$, ที่นี่ $u=${k}x\\to0$`),
          sec(`ผลลัพธ์`),
          para(`$=${k}\\cdot1=${k}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-der-power",
    topic: "derivative", examType: "midterm", difficulty: "easy",
    subtopic: "อนุพันธ์กำลัง",
    params: { n: [3, 4, 5, 6], a: [2, 3, -2] },
    build: ({ n, a }) => {
      const ans = `$${a * n}x^{${n - 1}}$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}(${a}x^{${n}})$`,
        answer: ans,
        solution: buildSol([
          sec("Power Rule", "$\\dfrac{d}{dx}(cx^n)=cn\\cdot x^{n-1}$"),
          sec("แทนค่า", `$c=${a}$, $n=${n}$`),
          bul(`คูณสัมประสิทธิ์: $${a}\\times${n}=${a*n}$`),
          bul(`ลดกำลัง: $x^{${n}}\\to x^{${n-1}}$`),
          sec(`ผลลัพธ์`),
          para(`$\\dfrac{d}{dx}(${a}x^{${n}})=${ans}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-der-chain",
    topic: "derivative", examType: "midterm", difficulty: "medium",
    subtopic: "Chain rule",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$${2 * a}x\\cos(${a}x^2)$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\sin(${a}x^2)$`,
        answer: ans,
        solution: buildSol([
          sec("Chain Rule", "$\\dfrac{d}{dx}f(g(x))=f'(g(x))\\cdot g'(x)$"),
          sec("ระบุฟังก์ชัน"),
          bul(`ฟังก์ชันนอก: $f(u)=\\sin(u)$ → $f'(u)=\\cos(u)$`),
          bul(`ฟังก์ชันใน: $g(x)=${a}x^2$ → $g'(x)=${2*a}x$`),
          sec(`ใช้ Chain Rule`),
          para(`$\\dfrac{d}{dx}\\sin(${a}x^2)=\\cos(${a}x^2)\\cdot${2*a}x$`),
          sec(`ผลลัพธ์`),
          para(`$=${2*a}x\\cos(${a}x^2)$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-der-product",
    topic: "derivative", examType: "midterm", difficulty: "medium",
    subtopic: "Product rule",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const ans = `$e^{${a}x}(${a}x^2+2x)$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}(x^2 e^{${a}x})$`,
        answer: ans,
        solution: buildSol([
          sec("Product Rule", "$(uv)'=u'v+uv'$"),
          sec("กำหนด $u$ และ $v$"),
          bul(`$u=x^2$ → $u'=2x$`),
          bul(`$v=e^{${a}x}$ → $v'=${a}e^{${a}x}$`),
          sec(`แทนลงสูตร`),
          para(`$(x^2 e^{${a}x})'=2x\\cdot e^{${a}x}+x^2\\cdot${a}e^{${a}x}$`),
          sec(`จัดรูป (ดึง $e^{${a}x}$)`),
          para(`$=e^{${a}x}(2x+${a}x^2)=e^{${a}x}(${a}x^2+2x)$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-der-quotient",
    topic: "derivative", examType: "midterm", difficulty: "medium",
    subtopic: "Quotient rule",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a}}{(x+${a})^2}$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\left(\\dfrac{x}{x+${a}}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("Quotient Rule", "$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$"),
          sec("กำหนด $u$ และ $v$"),
          bul(`$u=x$ → $u'=1$`),
          bul(`$v=x+${a}$ → $v'=1$`),
          sec(`แทนลงสูตร`),
          para(`$\\dfrac{1\\cdot(x+${a})-x\\cdot1}{(x+${a})^2}=\\dfrac{x+${a}-x}{(x+${a})^2}$`),
          sec(`ลดรูป`),
          para(`$=\\dfrac{${a}}{(x+${a})^2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-der-trig",
    topic: "derivative", examType: "midterm", difficulty: "easy",
    subtopic: "อนุพันธ์ตรีโกณมิติ",
    params: { k: [2, 3, 5] },
    build: ({ k }) => {
      const ans = `$-${k}\\sin(${k}x)$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\cos(${k}x)$`,
        answer: ans,
        solution: buildSol([
          sec("Chain Rule", "$\\dfrac{d}{dx}\\cos(u)=-\\sin(u)\\cdot u'$"),
          sec("กำหนด $u$"),
          bul(`$u=${k}x$ → $u'=${k}$`),
          sec(`แทนลงสูตร`),
          para(`$\\dfrac{d}{dx}\\cos(${k}x)=-\\sin(${k}x)\\cdot${k}$`),
          sec(`ผลลัพธ์`),
          para(`$=-${k}\\sin(${k}x)$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-int-power",
    topic: "integral", examType: "midterm", difficulty: "easy",
    subtopic: "อินทิกรัลกำลัง",
    params: { n: [2, 3, 4], a: [2, 3, 5] },
    build: ({ n, a }) => {
      const ans = `$\\dfrac{${a}}{${n + 1}}x^{${n + 1}}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int ${a}x^{${n}}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Power Rule", "$\\displaystyle\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$"),
          sec(`ดึงค่าคงที่ $${a}$ ออก`),
          para(`$${a}\\displaystyle\\int x^{${n}}dx$`),
          sec(`เพิ่ม exponent และหารด้วยกำลังใหม่`),
          bul(`$\\int x^{${n}}dx=\\dfrac{x^{${n+1}}}{${n+1}}$`),
          sec(`รวม`),
          para(`$${a}\\cdot\\dfrac{x^{${n+1}}}{${n+1}}+C=\\dfrac{${a}}{${n+1}}x^{${n+1}}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-int-trig",
    topic: "integral", examType: "final", difficulty: "medium",
    subtopic: "อินทิกรัลตรีโกณมิติ",
    params: { k: [2, 3, 4] },
    build: ({ k }) => {
      const ans = `$${k}\\sin x+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int ${k}\\cos x\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรพื้นฐาน", "$\\displaystyle\\int\\cos x\\,dx=\\sin x+C$"),
          sec(`ดึงค่าคงที่ $${k}$`),
          para(`$\\displaystyle\\int${k}\\cos x\\,dx=${k}\\int\\cos x\\,dx$`),
          sec(`ใช้สูตร`),
          bul(`$=${k}\\sin x+C$`),
          sec(`ตรวจสอบ`),
          para(`$\\dfrac{d}{dx}(${k}\\sin x)=${k}\\cos x$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1-int-sub",
    topic: "integral", examType: "final", difficulty: "medium",
    subtopic: "Substitution",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\dfrac{(x^2+${a})^3}{3}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int 2x(x^2+${a})^2\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec(`U-Substitution`),
          bul(`ตั้ง $u=x^2+${a}$`),
          bul(`$\\dfrac{du}{dx}=2x$ → $du=2x\\,dx$`),
          sec(`แทนลงอินทิกรัล`),
          para(`$\\displaystyle\\int(x^2+${a})^2\\cdot2x\\,dx=\\int u^2\\,du$`),
          sec(`อินทิเกรต`),
          bul(`$\\displaystyle\\int u^2\\,du=\\dfrac{u^3}{3}+C$`),
          sec(`แทนกลับ $u=x^2+${a}$`),
          para(`$=\\dfrac{(x^2+${a})^3}{3}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-int-def",
    topic: "integral", examType: "final", difficulty: "medium",
    subtopic: "อินทิกรัลจำกัดเขต",
    params: { a: [0, 1, 2] },
    build: ({ a }) => {
      const upper = a + 1;
      const val = upper ** 2;
      const ans = `$${val}$`;
      return {
        problem: `จงหา $\\displaystyle\\int_0^{${upper}} 2x\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("หา Antiderivative"),
          bul(`$\\displaystyle\\int2x\\,dx=x^2+C$`),
          sec("FTC: $\\displaystyle\\int_a^b f(x)dx=F(b)-F(a)$"),
          para(`$\\left[x^2\\right]_0^{${upper}}$`),
          sec(`แทนขอบเขต`),
          bul(`$F(${upper})=${upper}^2=${val}$`),
          bul(`$F(0)=0^2=0$`),
          sec(`ผลลัพธ์`),
          para(`$${val}-0=${val}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-app-tangent",
    topic: "application", examType: "final", difficulty: "medium",
    subtopic: "สมการสัมผัส",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$y=${2 * a}x-${a * a}$`;
      return {
        problem: `หาสมการเส้นสัมผัส $y=x^2$ ที่จุด $(${a},${a * a})$`,
        answer: ans,
        solution: buildSol([
          sec(`หาความชัน $m=f'(a)$`),
          bul(`$f'(x)=2x$`),
          bul(`$m=f'(${a})=2(${a})=${2*a}$`),
          sec(`สมการเส้น (Point-Slope)`),
          para(`$y-${a*a}=${2*a}(x-${a})$`),
          sec(`ลดรูป`),
          bul(`$y=${2*a}x-${2*a*a}+${a*a}$`),
          bul(`$y=${2*a}x-${a*a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-app-critical",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "จุดสุดขั้ว",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const sqrtStr = a === 1 ? "1" : `\\sqrt{${a}}`;
      const ans = `local max ที่ $x=-${sqrtStr}$, local min ที่ $x=${sqrtStr}$`;
      return {
        problem: `หาและจำแนกจุดสุดขั้วของ $f(x)=x^3-${3 * a}x$`,
        answer: ans,
        solution: buildSol([
          sec(`หา Critical Points ($f'=0$)`),
          bul(`$f'(x)=3x^2-${3*a}=0$`),
          bul(`$x^2=${a}$ → $x=\\pm${sqrtStr}$`),
          sec(`หา $f''(x)$ สำหรับ Second Derivative Test`),
          bul(`$f''(x)=6x$`),
          sec(`ที่ $x=-${sqrtStr}$`),
          bul(`$f''(-${sqrtStr})=${a===1?`-6`:`-6\\sqrt{${a}}`}<0$ → **local maximum** ✓`),
          sec(`ที่ $x=${sqrtStr}$`),
          bul(`$f''(${sqrtStr})=${a===1?`6`:`6\\sqrt{${a}}`}>0$ → **local minimum** ✓`),
          sec("สรุป"),
          para(ans),
        ], ans),
      };
    },
  },

  {
    id: "c1-cont",
    topic: "continuity", examType: "midterm", difficulty: "medium",
    subtopic: "ความต่อเนื่อง",
    params: { t: [1, 2, 3, -1] },
    build: ({ t }) => {
      const ans = `$t=0$`;
      return {
        problem: `กำหนด $f(x)=\\begin{cases}x^2 & x>0\\\\ x+t & x\\leq0\\end{cases}$ หา $t$ ที่ทำให้ $f$ ต่อเนื่องที่ $x=0$`,
        answer: ans,
        solution: buildSol([
          sec("เงื่อนไขต่อเนื่องที่ $x=0$"),
          para(`$\\displaystyle\\lim_{x\\to0^-}f=f(0)=\\lim_{x\\to0^+}f$`),
          sec("คำนวณ limit ขวา"),
          bul(`$\\displaystyle\\lim_{x\\to0^+}f(x)=\\lim_{x\\to0^+}x^2=0$`),
          sec("คำนวณ limit ซ้าย และค่าฟังก์ชัน"),
          bul(`$\\displaystyle\\lim_{x\\to0^-}(x+t)=0+t=t$`),
          bul(`$f(0)=0+t=t$`),
          sec("ตั้งสมการ"),
          para(`$t=0$ → $\\lim_{x\\to0^-}=\\lim_{x\\to0^+}=f(0)=0$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1-trans-exp-deriv",
    topic: "transcendental", examType: "final", difficulty: "medium",
    subtopic: "อนุพันธ์ของ exponential",
    params: { k: [2, 3, 4, 5] },
    build: ({ k }) => {
      const ans = `$${k}e^{${k}x}$`;
      return {
        problem: `หา $\\dfrac{d}{dx}\\left(e^{${k}x}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("Chain Rule"),
          bul(`$\\dfrac{d}{dx}e^{u}=e^u\\cdot u'$ โดย $u=${k}x$`),
          bul(`$u'=${k}$`),
          sec("ผลลัพธ์"),
          para(`$\\dfrac{d}{dx}e^{${k}x}=e^{${k}x}\\cdot${k}=${k}e^{${k}x}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-trans-ln-deriv",
    topic: "transcendental", examType: "final", difficulty: "medium",
    subtopic: "อนุพันธ์ของ logarithm",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a}}{${a}x+1}$`;
      return {
        problem: `หา $\\dfrac{d}{dx}\\ln(${a}x+1)$`,
        answer: ans,
        solution: buildSol([
          sec("Chain Rule"),
          bul(`$\\dfrac{d}{dx}\\ln(u)=\\dfrac{u'}{u}$ โดย $u=${a}x+1$`),
          bul(`$u'=${a}$`),
          sec("ผลลัพธ์"),
          para(`$\\dfrac{d}{dx}\\ln(${a}x+1)=\\dfrac{${a}}{${a}x+1}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-tech-parts",
    topic: "integration_technique", examType: "final", difficulty: "medium",
    subtopic: "Integration by parts",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const a2 = a * a;
      const ans = `$\\dfrac{e^{${a}x}}{${a2}}(${a}x-1)+C$`;
      return {
        problem: `หา $\\displaystyle\\int x e^{${a}x}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Integration by Parts", "$\\displaystyle\\int u\\,dv=uv-\\int v\\,du$"),
          bul(`$u=x$, $dv=e^{${a}x}dx$`),
          bul(`$du=dx$, $v=\\dfrac{e^{${a}x}}{${a}}$`),
          sec("แทนสูตร"),
          para(`$=\\dfrac{xe^{${a}x}}{${a}}-\\dfrac{e^{${a}x}}{${a2}}+C=\\dfrac{e^{${a}x}}{${a2}}(${a}x-1)+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-tech-trig-sub",
    topic: "integration_technique", examType: "final", difficulty: "hard",
    subtopic: "Trigonometric substitution",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\arcsin\\left(\\dfrac{x}{${a}}\\right)+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\dfrac{1}{\\sqrt{${a}^2-x^2}}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("รูปแบบมาตรฐาน"),
          bul(`$\\displaystyle\\int\\dfrac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\left(\\dfrac{x}{a}\\right)+C$`),
          sec("แทน $a=${a}$"),
          para(`$=\\arcsin\\left(\\dfrac{x}{${a}}\\right)+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1-tech-partial",
    topic: "integration_technique", examType: "final", difficulty: "hard",
    subtopic: "Partial fractions",
    params: { k: [2, 3] },
    build: ({ k }) => {
      const ans = `$\\ln|x+${k}|+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\dfrac{1}{x+${k}}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("รูปแบบมาตรฐาน"),
          bul(`$\\displaystyle\\int\\dfrac{1}{x+a}\\,dx=\\ln|x+a|+C$`),
          sec("ผลลัพธ์"),
          para(`$=\\ln|x+${k}|+C$`),
        ], ans),
      };
    },
  },
];

export const CAL2_TEMPLATES = [
  {
    id: "c2-seq-limit",
    topic: "sequence", examType: "midterm", difficulty: "medium",
    subtopic: "ลิมิตของลำดับ",
    params: { k: [2, 3, 4] },
    build: ({ k }) => {
      const ans = `$${k}$`;
      return {
        problem: `หา $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{${k}n^2+1}{n^2+${k}}$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "หารด้วย $n^2$"),
          para(`$\\dfrac{${k}n^2+1}{n^2+${k}}=\\dfrac{${k}+\\frac{1}{n^2}}{1+\\frac{${k}}{n^2}}$`),
          sec(`แทน $n\\to\\infty$`),
          bul(`$\\dfrac{1}{n^2}\\to0$ และ $\\dfrac{${k}}{n^2}\\to0$`),
          sec(`ผลลัพธ์`),
          para(`$\\displaystyle\\lim=\\dfrac{${k}+0}{1+0}=${k}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-geo-series",
    topic: "series", examType: "midterm", difficulty: "medium",
    subtopic: "Geometric series",
    params: { denom: [2, 3, 4] },
    build: ({ denom }) => {
      const sumVal = denom === 2 ? "2" : `\\dfrac{${denom}}{${denom - 1}}`;
      const ans = `$${sumVal}$`;
      return {
        problem: `หาค่าของ $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\dfrac{1}{${denom}}\\right)^n$`,
        answer: ans,
        solution: buildSol([
          sec(`ระบุรูปแบบ Geometric Series`),
          bul(`พจน์แรก $a=1$`),
          bul(`อัตราส่วนร่วม $r=\\dfrac{1}{${denom}}$`),
          sec(`ตรวจเงื่อนไข`),
          bul(`$|r|=\\dfrac{1}{${denom}}<1$ → ลู่เข้า ✓`),
          sec("สูตร Geometric Series", "$S=\\dfrac{a}{1-r}$"),
          para(`$S=\\dfrac{1}{1-\\frac{1}{${denom}}}=\\dfrac{1}{\\frac{${denom-1}}{${denom}}}=\\dfrac{${denom}}{${denom-1}}=${sumVal}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-p-series",
    topic: "series", examType: "midterm", difficulty: "easy",
    subtopic: "p-series",
    params: { p: [2, 3, 4] },
    build: ({ p }) => {
      const ans = "ลู่เข้า";
      return {
        problem: `อนุกรม $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{${p}}}$ ลู่เข้าหรือลู่ออก?`,
        answer: ans,
        solution: buildSol([
          sec(`p-series Test`),
          bul(`อนุกรมนี้คือ p-series: $\\displaystyle\\sum\\dfrac{1}{n^p}$ เมื่อ $p=${p}$`),
          sec("ทฤษฎี p-series"),
          bul(`ลู่เข้าเมื่อ $p>1$`),
          bul(`ลู่ออกเมื่อ $p\\leq1$`),
          sec("ตรวจ"),
          bul(`$p=${p}>1$ ✓`),
          sec(`สรุป`),
          para(`$\\displaystyle\\sum\\dfrac{1}{n^{${p}}}$ **ลู่เข้า** ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2-ratio-test",
    topic: "series", examType: "midterm", difficulty: "medium",
    subtopic: "Ratio test",
    params: { k: [2, 3] },
    build: ({ k }) => {
      const ans = "ลู่ออก";
      return {
        problem: `ใช้ Ratio test กับ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n!}{${k}^n}$`,
        answer: ans,
        solution: buildSol([
          sec("Ratio Test", "$L=\\displaystyle\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|$"),
          sec("คำนวณ"),
          bul(`$a_n=\\dfrac{n!}{${k}^n}$, $a_{n+1}=\\dfrac{(n+1)!}{${k}^{n+1}}$`),
          bul(`$\\dfrac{a_{n+1}}{a_n}=\\dfrac{(n+1)!}{${k}^{n+1}}\\cdot\\dfrac{${k}^n}{n!}=\\dfrac{n+1}{${k}}$`),
          sec(`ขีดจำกัด`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n+1}{${k}}=\\infty>1$`),
          sec("สรุป"),
          para(`$L>1$ → **ลู่ออก** ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2-power-radius",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Radius of convergence",
    params: { k: [2, 3, 4] },
    build: ({ k }) => {
      const ans = `$R=${k}$`;
      return {
        problem: `หา radius of convergence ของ $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{x^n}{${k}^n}$`,
        answer: ans,
        solution: buildSol([
          sec(`จัดรูปใหม่`),
          para(`$\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\dfrac{x}{${k}}\\right)^n$ ← Geometric series, $r=\\dfrac{x}{${k}}$`),
          sec(`เงื่อนไขลู่เข้า`),
          bul(`$|r|<1$: $\\left|\\dfrac{x}{${k}}\\right|<1$ → $|x|<${k}$`),
          sec(`หรือใช้ Ratio Test`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\left|\\dfrac{x^{n+1}/${k}^{n+1}}{x^n/${k}^n}\\right|=\\dfrac{|x|}{${k}}$`),
          bul(`ลู่เข้าเมื่อ $\\dfrac{|x|}{${k}}<1$ → $|x|<${k}$`),
          sec(`สรุป`),
          para(`$R=${k}$, IOC $=(-${k},${k})$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-vec-dot",
    topic: "vector", examType: "midterm", difficulty: "easy",
    subtopic: "Dot product",
    params: { a: [1, 2], b: [2, 3], c: [1, 3] },
    build: ({ a, b, c }) => {
      const val = a * c + b * a;
      const ans = `$${val}$`;
      return {
        problem: `หา $\\vec{u}\\cdot\\vec{v}$ เมื่อ $\\vec{u}=\\langle${a},${b}\\rangle$, $\\vec{v}=\\langle${c},${a}\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec("สูตร Dot Product", "$\\vec{u}\\cdot\\vec{v}=u_1v_1+u_2v_2$"),
          sec("แทนค่า"),
          bul(`$(${a})(${c})+(${b})(${a})$`),
          bul(`$=${a*c}+${b*a}$`),
          sec(`ผลลัพธ์`),
          para(`$=${val}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-vec-cross",
    topic: "vector", examType: "midterm", difficulty: "medium",
    subtopic: "Cross product",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\langle0,0,${a}\\rangle$`;
      return {
        problem: `หา $\\langle1,0,0\\rangle\\times\\langle0,${a},0\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec(`สูตร Cross Product`),
          para(`$\\vec{u}\\times\\vec{v}=\\det\\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\1&0&0\\\\0&${a}&0\\end{vmatrix}$`),
          sec(`คำนวณ Cofactors`),
          bul(`$\\vec{i}(0\\cdot0-0\\cdot${a})=0$`),
          bul(`$-\\vec{j}(1\\cdot0-0\\cdot0)=0$`),
          bul(`$\\vec{k}(1\\cdot${a}-0\\cdot0)=${a}$`),
          sec(`ผลลัพธ์`),
          para(`$\\langle0,0,${a}\\rangle$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-line-param",
    topic: "line_plane", examType: "midterm", difficulty: "medium",
    subtopic: "สมการเส้นตรง",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{x}{${a}}=\\dfrac{y}{1}=\\dfrac{z}{2}$`;
      return {
        problem: `เขียนสมการเส้นผ่าน $(0,0,0)$ ทิศทาง $\\langle${a},1,2\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec(`สมการ Parametric`),
          bul(`$x=${a}t$, $y=t$, $z=2t$`),
          sec(`สมการ Symmetric`),
          para(`$\\dfrac{x}{${a}}=\\dfrac{y}{1}=\\dfrac{z}{2}(=t)$`),
          sec(`ตีความ`),
          bul(`ทิศทาง $\\vec{d}=\\langle${a},1,2\\rangle$`),
          bul(`จุดเริ่ม $(0,0,0)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-partial",
    topic: "multivariable", examType: "final", difficulty: "medium",
    subtopic: "Partial derivative",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const expStr = a - 1 === 1 ? "" : `^{${a - 1}}`;
      const ans = `$${a}x${expStr}y+y\\cos(xy)$`;
      return {
        problem: `หา $\\dfrac{\\partial f}{\\partial x}$ เมื่อ $f(x,y)=x^{${a}}y+\\sin(xy)$`,
        answer: ans,
        solution: buildSol([
          sec("Partial Derivative เทียบ $x$", "ถือ $y$ เป็นค่าคงที่"),
          sec(`พจน์ที่ 1: $x^{${a}}y$`),
          bul(`$\\dfrac{\\partial}{\\partial x}(x^{${a}}y)=${a}x^{${a}-1}y=${a}x${expStr}y$`),
          sec("พจน์ที่ 2: $\\sin(xy)$"),
          bul(`$\\dfrac{\\partial}{\\partial x}\\sin(xy)=\\cos(xy)\\cdot\\dfrac{\\partial}{\\partial x}(xy)=\\cos(xy)\\cdot y$`),
          sec("รวม"),
          para(`$\\dfrac{\\partial f}{\\partial x}=${a}x${expStr}y+y\\cos(xy)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-critical2",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Critical points",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$(0,0)$`;
      return {
        problem: `หา critical points ของ $f(x,y)=x^2+y^2-${2 * a}xy$`,
        answer: ans,
        solution: buildSol([
          sec(`หา Partial Derivatives`),
          bul(`$f_x=2x-${2*a}y$`),
          bul(`$f_y=2y-${2*a}x$`),
          sec(`ตั้ง $f_x=f_y=0$`),
          bul(`$f_x=0$: $2x-${2*a}y=0$ → $x=${a}y$ ...(1)`),
          bul(`$f_y=0$: $2y-${2*a}x=0$ ...(2)`),
          sec(`แทน (1) ลง (2)`),
          para(`$2y-${2*a}(${a}y)=0$ → $y(2-${2*a*a})=0$ → $y=0$`),
          bul(`จาก (1): $x=${a}(0)=0$`),
          sec("Critical Point"),
          para(`$(x,y)=(0,0)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-double-int",
    topic: "double_integral", examType: "final", difficulty: "medium",
    subtopic: "Double integral",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$${2 * a}$`;
      return {
        problem: `หา $\\displaystyle\\iint_R ${a}\\,dA$ เมื่อ $R=[0,1]\\times[0,2]$`,
        answer: ans,
        solution: buildSol([
          sec(`แปลงเป็น Iterated Integral`),
          para(`$\\displaystyle\\int_0^1\\int_0^2${a}\\,dy\\,dx$`),
          sec(`อินทิกรัลชั้นใน (เทียบ $y$)`),
          bul(`$\\displaystyle\\int_0^2${a}\\,dy=[${a}y]_0^2=${2*a}$`),
          sec(`อินทิกรัลชั้นนอก (เทียบ $x$)`),
          bul(`$\\displaystyle\\int_0^1${2*a}\\,dx=[${2*a}x]_0^1=${2*a}$`),
          sec(`ผลลัพธ์`),
          para(`$${2*a}$ (เท่ากับ ${a} × Area = ${a} × 2 = ${2*a}) ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2-ode-sep",
    topic: "ode", examType: "final", difficulty: "medium",
    subtopic: "Separable ODE",
    params: { k: [2, 3] },
    build: ({ k }) => {
      const half = k / 2;
      const halfStr = k % 2 === 0 ? `${half}x^2` : `\\dfrac{${k}}{2}x^2`;
      const ans = `$y=Ce^{${halfStr}}$`;
      return {
        problem: `แก้ $\\dfrac{dy}{dx}=${k}xy$`,
        answer: ans,
        solution: buildSol([
          sec("Separable ODE", "แยกตัวแปร $x$ และ $y$"),
          bul(`$\\dfrac{dy}{y}=${k}x\\,dx$`),
          sec(`อินทิเกรตทั้งสองข้าง`),
          bul(`$\\displaystyle\\int\\dfrac{dy}{y}=\\displaystyle\\int${k}x\\,dx$`),
          bul(`$\\ln|y|=\\dfrac{${k}x^2}{2}+C_1$`),
          sec(`ยกกำลัง $e$`),
          para(`$|y|=e^{C_1}\\cdot e^{${halfStr}}$`),
          sec(`รูปทั่วไป ($C=\\pm e^{C_1}$)`),
          para(`$y=Ce^{${halfStr}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-ode-linear",
    topic: "ode", examType: "final", difficulty: "hard",
    subtopic: "Linear ODE",
    params: { k: [1, 2] },
    build: ({ k }) => {
      const ans = `$y=\\dfrac{e^x}{${k + 1}}+Ce^{-${k}x}$`;
      return {
        problem: `แก้ $\\dfrac{dy}{dx}+${k}y=e^x$`,
        answer: ans,
        solution: buildSol([
          sec("Standard Form", "$y'+P(x)y=Q(x)$"),
          bul(`$P(x)=${k}$, $Q(x)=e^x$`),
          sec(`Integrating Factor`),
          bul(`$\\mu=e^{\\int P\\,dx}=e^{${k}x}$`),
          sec(`คูณ IF ทั้งสองข้าง`),
          para(`$(e^{${k}x}y)'=e^{${k}x}\\cdot e^x=e^{${k+1}x}$`),
          sec(`อินทิเกรต`),
          bul(`$e^{${k}x}y=\\dfrac{e^{${k+1}x}}{${k+1}}+C$`),
          sec(`หาร $e^{${k}x}$`),
          para(`$y=\\dfrac{e^x}{${k+1}}+Ce^{-${k}x}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-int-parts",
    topic: "integration_technique", examType: "midterm", difficulty: "medium",
    subtopic: "Integration by parts",
    params: { a: [1, 2, 3, 4] },
    build: ({ a }) => {
      const a2 = a * a;
      const ans = `$\\dfrac{e^{${a}x}}{${a2}}(${a}x-1)+C$`;
      return {
        problem: `หา $\\displaystyle\\int x e^{${a}x}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Integration by Parts", "$\\displaystyle\\int u\\,dv=uv-\\int v\\,du$"),
          sec("เลือก $u$ และ $dv$"),
          bul(`$u=x$ → $du=dx$`),
          bul(`$dv=e^{${a}x}dx$ → $v=\\dfrac{e^{${a}x}}{${a}}$`),
          sec(`แทนสูตร IBP`),
          para(`$xe^{${a}x}dx=x\\cdot\\dfrac{e^{${a}x}}{${a}}-\\displaystyle\\int\\dfrac{e^{${a}x}}{${a}}dx$`),
          sec(`คำนวณ $\\int\\dfrac{e^{${a}x}}{${a}}dx$`),
          bul(`$=\\dfrac{e^{${a}x}}{${a2}}+C$`),
          sec(`รวมผลลัพธ์`),
          para(`$=\\dfrac{xe^{${a}x}}{${a}}-\\dfrac{e^{${a}x}}{${a2}}+C=\\dfrac{e^{${a}x}}{${a2}}(${a}x-1)+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-trig-sub",
    topic: "integration_technique", examType: "midterm", difficulty: "hard",
    subtopic: "Trigonometric substitution",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\arcsin\\left(\\dfrac{x}{${a}}\\right)+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\dfrac{1}{\\sqrt{${a}^2-x^2}}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรมาตรฐาน"),
          bul(`$\\displaystyle\\int\\dfrac{dx}{\\sqrt{a^2-x^2}}=\\arcsin(x/a)+C$`),
          sec(`แทน $a=${a}$`),
          para(`$=\\arcsin\\left(\\dfrac{x}{${a}}\\right)+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-partial-frac",
    topic: "integration_technique", examType: "midterm", difficulty: "hard",
    subtopic: "Partial fractions",
    params: { p: [2, 3], q: [1, 2] },
    build: ({ p, q }) => {
      const sum = p + q;
      const ans = `$\\ln|x+${p}|+\\ln|x+${q}|+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\dfrac{${sum}}{(x+${p})(x+${q})}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Partial Fractions"),
          bul(`$\\dfrac{${sum}}{(x+${p})(x+${q})}=\\dfrac{1}{x+${p}}+\\dfrac{1}{x+${q}}$`),
          sec("อินทิเกรต"),
          bul(`$=\\displaystyle\\int\\dfrac{1}{x+${p}}dx+\\displaystyle\\int\\dfrac{1}{x+${q}}dx$`),
          para(`$=\\ln|x+${p}|+\\ln|x+${q}|+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-induction-sum",
    topic: "induction", examType: "midterm", difficulty: "medium",
    subtopic: "Mathematical induction (sum formula)",
    params: { n: [4, 5, 6, 7, 8] },
    build: ({ n }) => {
      const sum = (n * (n + 1)) / 2;
      const ans = `$\\displaystyle\\sum_{k=1}^{${n}}k=\\dfrac{${n}(${n}+1)}{2}=${sum}$`;
      return {
        problem: `พิสูจน์ด้วย Mathematical Induction ว่า $\\displaystyle\\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}$ แล้วหาค่าเมื่อ $n=${n}$`,
        answer: ans,
        solution: buildSol([
          sec("Base case $n=1$"),
          bul(`LHS $=1$, RHS $=\\dfrac{1\\cdot2}{2}=1$ ✓`),
          sec("Inductive step"),
          bul(`สมมติ $\\displaystyle\\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}$`),
          bul(`$\\displaystyle\\sum_{k=1}^{n+1}k=\\dfrac{n(n+1)}{2}+(n+1)=\\dfrac{(n+1)(n+2)}{2}$ ✓`),
          sec(`แทน $n=${n}$`),
          para(`$\\displaystyle\\sum_{k=1}^{${n}}k=\\dfrac{${n}(${n}+1)}{2}=${sum}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-induction-div",
    topic: "induction", examType: "midterm", difficulty: "hard",
    subtopic: "Mathematical induction (divisibility)",
    params: { a: [3, 5, 7] },
    build: ({ a }) => {
      const ans = `$${a}^n-1$ หาร $${a - 1}$ ลงตัว`;
      return {
        problem: `พิสูจน์ด้วย Mathematical Induction ว่า $${a}^n-1$ หาร $${a - 1}$ ลงตัวสำหรับทุก $n\\geq1$`,
        answer: ans,
        solution: buildSol([
          sec("Base case $n=1$"),
          bul(`$${a}^1-1=${a - 1}$ หาร $${a - 1}$ ลงตัว ✓`),
          sec("Inductive step"),
          bul(`สมมติ $${a}^n-1=k(${a - 1})$`),
          bul(`$${a}^{n+1}-1=${a}(${a}^n)-1=${a}(${a}^n-1)+(${a}-1)$`),
          bul(`$=${a}\\cdot k(${a - 1})+(${a}-1)=(${a - 1})(ak+1)$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2-app-area",
    topic: "app_integration", examType: "midterm", difficulty: "medium",
    subtopic: "Area between curves",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const area = (a * a * a) / 6;
      const ans = `$\\dfrac{${a}^3}{6}=${area}$`;
      return {
        problem: `หาพื้นที่ระหว่าง $y=${a}x$ และ $y=x^2$ บนช่วง $[0,${a}]$`,
        answer: ans,
        solution: buildSol([
          sec("จุดตัด"),
          bul(`$${a}x=x^2$ → $x=0$ หรือ $x=${a}$`),
          sec("พื้นที่"),
          bul(`$A=\\displaystyle\\int_0^{${a}}(${a}x-x^2)\\,dx$`),
          bul(`$=\\left[\\dfrac{${a}x^2}{2}-\\dfrac{x^3}{3}\\right]_0^{${a}}$`),
          para(`$=\\dfrac{${a}^3}{2}-\\dfrac{${a}^3}{3}=\\dfrac{${a}^3}{6}=${area}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-app-volume",
    topic: "app_integration", examType: "midterm", difficulty: "hard",
    subtopic: "Volume of revolution",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const volNum = a ** 5;
      const ans = `$\\dfrac{${volNum}\\pi}{5}$`;
      return {
        problem: `หาปริมาตรที่ได้จากหมุน $y=x^2$ รอบแกน $x$ บนช่วง $[0,${a}]$`,
        answer: ans,
        solution: buildSol([
          sec("Disk method"),
          bul(`$V=\\pi\\displaystyle\\int_0^{${a}}(x^2)^2\\,dx=\\pi\\displaystyle\\int_0^{${a}}x^4\\,dx$`),
          bul(`$=\\pi\\left[\\dfrac{x^5}{5}\\right]_0^{${a}}$`),
          para(`$=\\dfrac{${volNum}\\pi}{5}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2-parametric",
    topic: "curve", examType: "final", difficulty: "medium",
    subtopic: "Parametric curve",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{3t}{${2 * a}}$`;
      return {
        problem: `หา $\\dfrac{dy}{dx}$ เมื่อ $x=${a}t^2$, $y=t^3$`,
        answer: ans,
        solution: buildSol([
          sec("สูตร Parametric Derivative"),
          para(`$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}$`),
          sec("คำนวณ"),
          bul(`$\\dfrac{dx}{dt}=${2*a}t$`),
          bul(`$\\dfrac{dy}{dt}=3t^2$`),
          sec(`รวม`),
          para(`$\\dfrac{dy}{dx}=\\dfrac{3t^2}{${2*a}t}=\\dfrac{3t}{${2*a}}$`),
          sec("สังเกต"),
          para(`ที่ $t=0$: ยังไม่ defined (จุด cusp ที่ origin)`),
        ], ans),
      };
    },
  },
];
