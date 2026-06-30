import { sec, bul, para, sep, buildSol } from "./solutionFormat.js";

// ─── CAL1 HARD TEMPLATES (60 templates) ───────────────────────────────────────

export const CAL1_HARD_TEMPLATES = [

  // ═══════════════ LIMITS (12) ═══════════════
  {
    id: "c1h-lim-lhop-00",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "L'Hôpital รูป 0/0",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a * a}}{2}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0}\\dfrac{e^{${a}x}-1-${a}x}{x^2}$`,
        answer: ans,
        solution: buildSol([
          sec("ตรวจรูปแบบ", "แทน $x=0$"),
          bul(`เศษ: $e^{${a}(0)}-1-${a}(0)=0$`),
          bul(`ส่วน: $0^2=0$ → รูป $\\dfrac{0}{0}$ ✓`),
          sec("L'Hôpital ครั้งที่ 1", "อนุพันธ์ทั้งเศษและส่วน"),
          bul(`เศษ: $\\dfrac{d}{dx}(e^{${a}x}-1-${a}x)=${a}e^{${a}x}-${a}$`),
          bul(`ส่วน: $\\dfrac{d}{dx}(x^2)=2x$`),
          para(`แทน $x=0$: เศษ $=${a}(1)-${a}=0$, ส่วน $=0$ → ยังเป็น $\\dfrac{0}{0}$`),
          sec(`L'Hôpital ครั้งที่ 2`),
          bul(`เศษ: $\\dfrac{d}{dx}(${a}e^{${a}x}-${a})=${a*a}e^{${a}x}$`),
          bul(`ส่วน: $\\dfrac{d}{dx}(2x)=2$`),
          para(`$\\displaystyle\\lim_{x\\to0}\\dfrac{${a*a}e^{${a}x}}{2}=\\dfrac{${a*a}\\cdot1}{2}=\\dfrac{${a*a}}{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-1pow-inf",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "L'Hôpital รูป 1^∞",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$e^{${a}}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0}(1+${a}x)^{1/x}$`,
        answer: ans,
        solution: buildSol([
          sec("ระบุรูปแบบ", "รูป $1^\\infty$"),
          para(`ตั้ง $L=\\displaystyle\\lim_{x\\to0}(1+${a}x)^{1/x}$ → $\\ln L=\\displaystyle\\lim_{x\\to0}\\dfrac{\\ln(1+${a}x)}{x}$`),
          sec("คำนวณ $\\ln L$", "แทน $x=0$: รูป $\\dfrac{0}{0}$"),
          bul(`เศษ: $\\dfrac{d}{dx}\\ln(1+${a}x)=\\dfrac{${a}}{1+${a}x}$`),
          bul(`ส่วน: $\\dfrac{d}{dx}(x)=1$`),
          para(`$\\displaystyle\\lim_{x\\to0}\\dfrac{${a}/(1+${a}x)}{1}=\\dfrac{${a}}{1+0}=${a}$`),
          sec(`สรุป`),
          para(`$\\ln L=${a}$ ดังนั้น $L=e^{${a}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-inf-inf",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "L'Hôpital รูป ∞−∞",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$0$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0^+}\\left(\\dfrac{${a}}{x}-\\dfrac{${a}}{\\sin x}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("จัดรูป ∞−∞", "รวมเป็นเศษส่วนเดียว"),
          para(`$\\dfrac{${a}}{x}-\\dfrac{${a}}{\\sin x}=\\dfrac{${a}\\sin x-${a}x}{x\\sin x}$`),
          sec("ตรวจรูปแบบ", "แทน $x=0$: รูป $\\dfrac{0}{0}$"),
          sec("L'Hôpital ครั้งที่ 1"),
          bul(`เศษ: $${a}\\cos x-${a}$`),
          bul(`ส่วน: $\\sin x+x\\cos x$`),
          para(`แทน $x=0$: เศษ $=${a}(1)-${a}=0$, ส่วน $=0$ → L'Hôpital อีกครั้ง`),
          sec(`L'Hôpital ครั้งที่ 2`),
          bul(`เศษ: $-${a}\\sin x$`),
          bul(`ส่วน: $2\\cos x-x\\sin x$`),
          para(`แทน $x=0$: $\\dfrac{0}{2}=0$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-squeeze",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "Squeeze Theorem",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$0$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0}x^{${2*a}}\\sin\\!\\left(\\dfrac{1}{x}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("สมบัติของ sin", "Bounded function"),
          para(`$-1\\leq\\sin\\!\\left(\\dfrac{1}{x}\\right)\\leq 1$ สำหรับทุก $x\\neq0$`),
          sec("Squeeze Theorem", `คูณทุกข้างด้วย $x^{${2*a}}\\geq0$`),
          bul(`$-x^{${2*a}}\\leq x^{${2*a}}\\sin\\!\\left(\\dfrac{1}{x}\\right)\\leq x^{${2*a}}$`),
          sec(`คำนวณขีดจำกัดของขอบ`),
          bul(`$\\displaystyle\\lim_{x\\to0}(-x^{${2*a}})=0$`),
          bul(`$\\displaystyle\\lim_{x\\to0}x^{${2*a}}=0$`),
          sec(`สรุป`),
          para(`โดย Squeeze Theorem: $\\displaystyle\\lim_{x\\to0}x^{${2*a}}\\sin\\!\\left(\\dfrac{1}{x}\\right)=0$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-deriv-def",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิตจากนิยามอนุพันธ์",
    params: { a: [2, 3, 4], n: [2, 3] },
    build: ({ a, n }) => {
      const computed = n * Math.pow(a, n - 1);
      const ans = `$${computed}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{h\\to 0}\\dfrac{(${a}+h)^{${n}}-${a}^{${n}}}{h}$`,
        answer: ans,
        solution: buildSol([
          sec("จำนิยาม", "$f'(a)=\\displaystyle\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$"),
          para(`รูปนี้คืออนุพันธ์ของ $f(x)=x^{${n}}$ ที่ $x=${a}$`),
          sec(`คำนวณอนุพันธ์`),
          bul(`$f'(x)=\\dfrac{d}{dx}(x^{${n}})=${n}x^{${n-1}}$`),
          sec(`แทนค่า $x=${a}$`),
          para(`$f'(${a})=${n}\\cdot${a}^{${n-1}}=${n}\\cdot${Math.pow(a,n-1)}=${computed}$`),
          sec(`สรุป`),
          para(`$\\displaystyle\\lim_{h\\to0}\\dfrac{(${a}+h)^{${n}}-${a}^{${n}}}{h}=${computed}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-trig-hard",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "Taylor series สำหรับ tan",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a**3}}{3}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\tan(${a}x)-${a}x}{x^3}$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "Taylor series ของ $\\tan u$"),
          para(`$\\tan u = u+\\dfrac{u^3}{3}+\\dfrac{2u^5}{15}+\\cdots$`),
          sec(`แทน $u=${a}x$`),
          bul(`$\\tan(${a}x)=${a}x+\\dfrac{(${a}x)^3}{3}+\\cdots=${a}x+\\dfrac{${a**3}x^3}{3}+\\cdots$`),
          sec(`ลดรูป`),
          para(`$\\dfrac{\\tan(${a}x)-${a}x}{x^3}=\\dfrac{${a**3}x^3/3+\\cdots}{x^3}=\\dfrac{${a**3}}{3}+\\cdots$`),
          sec(`ผลลัพธ์`),
          para(`$\\displaystyle\\lim_{x\\to0}\\dfrac{\\tan(${a}x)-${a}x}{x^3}=\\dfrac{${a**3}}{3}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-sqrt-inf",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิตที่อนันต์ (rationalize)",
    params: { a: [1, 2, 4, 6] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a}}{2}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+${a}x}-x\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "คูณด้วย conjugate"),
          para(`$\\dfrac{\\sqrt{x^2+${a}x}-x}{1}\\cdot\\dfrac{\\sqrt{x^2+${a}x}+x}{\\sqrt{x^2+${a}x}+x}$`),
          sec(`คำนวณเศษ`),
          bul(`เศษ $=(x^2+${a}x)-x^2=${a}x$`),
          bul(`ส่วน $=\\sqrt{x^2+${a}x}+x$`),
          para(`ได้ $\\dfrac{${a}x}{\\sqrt{x^2+${a}x}+x}$`),
          sec(`หาร $x$ (ทั้งเศษและส่วน, $x>0$)`),
          para(`$=\\dfrac{${a}}{\\sqrt{1+${a}/x}+1}$`),
          sec(`แทน $x\\to\\infty$`),
          para(`$\\dfrac{${a}}{\\sqrt{1+0}+1}=\\dfrac{${a}}{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-0pow0",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "L'Hôpital รูป 0^0",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$1$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0^+}x^{${a}x}$`,
        answer: ans,
        solution: buildSol([
          sec("ระบุรูปแบบ", "รูป $0^0$"),
          para(`ตั้ง $L=\\displaystyle\\lim_{x\\to0^+}x^{${a}x}$ → $\\ln L=\\displaystyle\\lim_{x\\to0^+}${a}x\\ln x$`),
          sec(`จัดเป็น $\\dfrac{\\infty}{\\infty}$`),
          para(`$${a}x\\ln x=\\dfrac{${a}\\ln x}{1/x}$ → รูป $\\dfrac{-\\infty}{\\infty}$`),
          sec(`L'Hôpital`),
          bul(`เศษ: $\\dfrac{d}{dx}(${a}\\ln x)=\\dfrac{${a}}{x}$`),
          bul(`ส่วน: $\\dfrac{d}{dx}(1/x)=-\\dfrac{1}{x^2}$`),
          para(`$\\displaystyle\\lim_{x\\to0^+}\\dfrac{${a}/x}{-1/x^2}=\\lim_{x\\to0^+}(-${a}x)=0$`),
          sec("สรุป"),
          para(`$\\ln L=0$ ดังนั้น $L=e^0=1$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-log-poly",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิต log เทียบกับพหุนาม",
    params: { a: [1, 2], b: [1, 2] },
    build: ({ a, b }) => {
      const ans = `$0$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{(\\ln x)^{${a}}}{x^{${b}}}$`,
        answer: ans,
        solution: buildSol([
          sec("รูปแบบ", "$\\dfrac{\\infty}{\\infty}$ → L'Hôpital"),
          sec(`L'Hôpital (วนซ้ำ $${a}$ ครั้ง)`),
          bul(`อนุพันธ์เศษแต่ละรอบจะลดกำลังของ $\\ln x$ ลง 1`),
          bul(`อนุพันธ์ส่วนจะเพิ่มกำลังของ $x$ คงที่`),
          para(`หลัง $${a}$ รอบ: $\\dfrac{${a}!}{x^{${a}}}\\bigg/x^{${b}}$ ยกกำลัง = $\\dfrac{C}{x^{${a+b}}}$`),
          sec(`ผลลัพธ์`),
          para(`$\\ln x$ โตช้ากว่า $x^{${b}}$ เสมอ ดังนั้น $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{(\\ln x)^{${a}}}{x^{${b}}}=0$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-exp-diff",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิตผลต่าง exponential",
    params: { a: [2, 3], b: [3, 4] },
    build: ({ a, b }) => {
      const ans = `$\\ln${a}-\\ln${b}=\\ln\\dfrac{${a}}{${b}}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to 0}\\dfrac{${a}^x-${b}^x}{x}$`,
        answer: `$\\ln\\dfrac{${a}}{${b}}$`,
        solution: buildSol([
          sec("ตรวจรูปแบบ", "แทน $x=0$: รูป $\\dfrac{0}{0}$"),
          sec("L'Hôpital"),
          bul(`เศษ: $\\dfrac{d}{dx}(${a}^x-${b}^x)=${a}^x\\ln${a}-${b}^x\\ln${b}$`),
          bul(`ส่วน: $\\dfrac{d}{dx}(x)=1$`),
          para(`$\\displaystyle\\lim_{x\\to0}(${a}^x\\ln${a}-${b}^x\\ln${b})=1\\cdot\\ln${a}-1\\cdot\\ln${b}$`),
          sec(`ลดรูป`),
          para(`$=\\ln${a}-\\ln${b}=\\ln\\dfrac{${a}}{${b}}$`),
        ], `$\\ln\\dfrac{${a}}{${b}}$`),
      };
    },
  },

  {
    id: "c1h-lim-piecewise-k",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "หา k ให้ต่อเนื่อง",
    params: { a: [2, 3, 4], b: [1, 2] },
    build: ({ a, b }) => {
      const k = a * 2 * b;
      const ans = `$k=${k}$`;
      return {
        problem: `กำหนด $f(x)=\\begin{cases}\\dfrac{${a}x^2-${a*b*b}}{x-${b}} & x\\neq${b}\\\\ k & x=${b}\\end{cases}$ จงหา $k$ ที่ทำให้ $f$ ต่อเนื่องที่ $x=${b}$`,
        answer: ans,
        solution: buildSol([
          sec("เงื่อนไขต่อเนื่อง", `$k=\\displaystyle\\lim_{x\\to${b}}f(x)$`),
          sec("แยกตัวประกอบเศษ"),
          bul(`$${a}x^2-${a*b*b}=${a}(x^2-${b*b})=${a}(x-${b})(x+${b})$`),
          sec(`ตัด $(x-${b})$`),
          para(`$\\displaystyle\\lim_{x\\to${b}}\\dfrac{${a}(x-${b})(x+${b})}{x-${b}}=\\lim_{x\\to${b}}${a}(x+${b})$`),
          sec(`แทนค่า $x=${b}$`),
          para(`$=${a}(${b}+${b})=${a}\\cdot${2*b}=${k}$`),
          sec(`สรุป`),
          para(`$k=${k}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-lim-ln-inf",
    topic: "limit", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิต ln ที่อนันต์",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$${a}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{x\\to\\infty}x\\left(\\ln(x+${a})-\\ln x\\right)$`,
        answer: ans,
        solution: buildSol([
          sec(`จัดรูป`),
          para(`$x\\ln\\dfrac{x+${a}}{x}=x\\ln\\left(1+\\dfrac{${a}}{x}\\right)$`),
          sec("เปลี่ยนตัวแปร", `$u=\\dfrac{${a}}{x}$, เมื่อ $x\\to\\infty$, $u\\to0$`),
          bul(`$x=\\dfrac{${a}}{u}$`),
          para(`$\\dfrac{${a}}{u}\\ln(1+u)=\\dfrac{${a}\\ln(1+u)}{u}$`),
          sec("ใช้สูตรมาตรฐาน"),
          para(`$\\displaystyle\\lim_{u\\to0}\\dfrac{\\ln(1+u)}{u}=1$`),
          sec("สรุป"),
          para(`$\\displaystyle\\lim={${a}}\\cdot1=${a}$`),
        ], ans),
      };
    },
  },

  // ═══════════════ CONTINUITY (5) ═══════════════
  {
    id: "c1h-cont-diff-ab",
    topic: "continuity", examType: "midterm", difficulty: "hard",
    subtopic: "หา a, b ให้ differentiable",
    params: { m: [2, 3, 4] },
    build: ({ m }) => {
      const ans = `$a=${m},\\; b=0$`;
      return {
        problem: `กำหนด $f(x)=\\begin{cases}ax+b & x<0\\\\ x^2+${m}x & x\\geq0\\end{cases}$ จงหา $a$ และ $b$ ที่ทำให้ $f$ มีอนุพันธ์ที่ $x=0$`,
        answer: ans,
        solution: buildSol([
          sec("เงื่อนไขที่ 1", "ต่อเนื่องที่ $x=0$"),
          bul(`$\\displaystyle\\lim_{x\\to0^-}(ax+b)=b$`),
          bul(`$\\displaystyle\\lim_{x\\to0^+}(x^2+${m}x)=0$`),
          bul(`ดังนั้น $b=0$ ...(1)`),
          sec("เงื่อนไขที่ 2", "อนุพันธ์ซ้าย = อนุพันธ์ขวา"),
          bul(`$f'(0^-)=a$ (ความชันของ $ax+b$)`),
          bul(`$f'(0^+)=\\dfrac{d}{dx}(x^2+${m}x)\\big|_{x=0}=2(0)+${m}=${m}$`),
          bul(`ดังนั้น $a=${m}$ ...(2)`),
          sec(`สรุป`),
          para(`$a=${m}$, $b=0$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-ivt",
    topic: "continuity", examType: "midterm", difficulty: "hard",
    subtopic: "Intermediate Value Theorem",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const fa = a**3 - 3*a + 1;
      const fb = (a+1)**3 - 3*(a+1) + 1;
      const ans = fa * fb < 0 ? `มีรากจริงในช่วง $(${a},${a+1})$` : `ไม่สามารถสรุปจาก IVT ได้โดยตรง`;
      return {
        problem: `ใช้ Intermediate Value Theorem แสดงว่า $f(x)=x^3-3x+1$ มีรากจริงในช่วง $(${a},${a+1})$`,
        answer: `มีรากจริงในช่วง $(${a},${a+1})$`,
        solution: buildSol([
          sec("คุณสมบัติของ $f$"),
          bul(`$f(x)=x^3-3x+1$ เป็นพหุนาม → ต่อเนื่องทุกจุด ✓`),
          sec("คำนวณค่า"),
          bul(`$f(${a})=${a}^3-3(${a})+1=${a**3}-${3*a}+1=${fa}$`),
          bul(`$f(${a+1})=${a+1}^3-3(${a+1})+1=${(a+1)**3}-${3*(a+1)}+1=${fb}$`),
          sec(`ตรวจเครื่องหมาย`),
          para(`$f(${a})=${fa}$ และ $f(${a+1})=${fb}$ → ${fa*fb < 0 ? "เครื่องหมายต่างกัน ✓" : "ตรวจสอบอีกครั้ง"}`),
          sec("IVT"),
          para(`เนื่องจาก $f$ ต่อเนื่องและ $f(${a})\\cdot f(${a+1})<0$ → มี $c\\in(${a},${a+1})$ ที่ $f(c)=0$`),
        ], `มีรากจริงในช่วง $(${a},${a+1})$`),
      };
    },
  },

  {
    id: "c1h-diff-vs-cont",
    topic: "continuity", examType: "midterm", difficulty: "hard",
    subtopic: "ตรวจ differentiable ของ |x|^n",
    params: { n: [1, 2, 3] },
    build: ({ n }) => {
      const diffable = n >= 2;
      const ans = diffable ? `$f$ มีอนุพันธ์ที่ $x=0$ ($f'(0)=0$)` : `$f$ ไม่มีอนุพันธ์ที่ $x=0$`;
      return {
        problem: `กำหนด $f(x)=|x|^{${n}}$ ตรวจสอบว่า $f$ มีอนุพันธ์ที่ $x=0$ หรือไม่`,
        answer: ans,
        solution: buildSol([
          sec("นิยามอนุพันธ์", `$f'(0)=\\displaystyle\\lim_{h\\to0}\\dfrac{|h|^{${n}}-0}{h}$`),
          sec("อนุพันธ์ขวา ($h\\to0^+$)"),
          bul(`$\\displaystyle\\lim_{h\\to0^+}\\dfrac{h^{${n}}}{h}=\\lim_{h\\to0^+}h^{${n-1}}=${n===1?"1":"0"}$`),
          sec("อนุพันธ์ซ้าย ($h\\to0^-$)"),
          bul(`$\\displaystyle\\lim_{h\\to0^-}\\dfrac{(-h)^{${n}}}{h}=\\lim_{h\\to0^-}${n%2===0?"":"−"}h^{${n-1}}=${n===1?"-1":"0"}$`),
          sec("เปรียบเทียบ"),
          n === 1
            ? para(`อนุพันธ์ขวา $=1\\neq-1=$ อนุพันธ์ซ้าย → $f'(0)$ ไม่มีค่า (กราฟมีมุมแหลมที่ $x=0$)`)
            : para(`อนุพันธ์ขวา $=$ อนุพันธ์ซ้าย $=0$ → $f'(0)=0$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-cont-3piece",
    topic: "continuity", examType: "midterm", difficulty: "hard",
    subtopic: "ฟังก์ชัน 3 ก้อน",
    params: { c: [2, 3, 4] },
    build: ({ c }) => {
      const ans = `$a=${c+1},\\; b=${c-1}$`;
      return {
        problem: `กำหนด $f(x)=\\begin{cases}ax-1 & x<1\\\\ ${c} & x=1\\\\ x^2+b & x>1\\end{cases}$ จงหา $a,b$ ที่ทำให้ $f$ ต่อเนื่องที่ $x=1$`,
        answer: ans,
        solution: buildSol([
          sec("เงื่อนไขต่อเนื่อง", "$\\lim_{x\\to1^-}f=f(1)=\\lim_{x\\to1^+}f$"),
          sec("จากซ้าย"),
          bul(`$\\displaystyle\\lim_{x\\to1^-}(ax-1)=a-1$`),
          para(`$a-1=${c}$ → $a=${c+1}$ ...(1)`),
          sec(`จากขวา`),
          bul(`$\\displaystyle\\lim_{x\\to1^+}(x^2+b)=1+b$`),
          para(`$1+b=${c}$ → $b=${c-1}$ ...(2)`),
          sec(`สรุป`),
          para(`$a=${c+1}$, $b=${c-1}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-mvt",
    topic: "continuity", examType: "midterm", difficulty: "hard",
    subtopic: "Mean Value Theorem",
    params: { a: [0, 1], b: [2, 3] },
    build: ({ a, b }) => {
      const fa = a**3 - a, fb = b**3 - b;
      const slope = (fb - fa) / (b - a);
      const c2 = (slope + 1) / 3;
      const cVal = Math.sqrt(c2).toFixed(4);
      const ans = `$c=\\sqrt{${c2.toFixed(4)}}\\approx${cVal}$`;
      return {
        problem: `ตรวจสอบว่า $f(x)=x^3-x$ บน $[${a},${b}]$ ตอบสนอง MVT และหาค่า $c$`,
        answer: ans,
        solution: buildSol([
          sec(`ตรวจเงื่อนไข MVT`),
          bul(`$f(x)=x^3-x$ เป็นพหุนาม → ต่อเนื่องบน $[${a},${b}]$ ✓`),
          bul(`มีอนุพันธ์บน $(${a},${b})$ ✓`),
          sec(`คำนวณค่า`),
          bul(`$f(${a})=${fa}$, $f(${b})=${fb}$`),
          bul(`ความชันเฉลี่ย $=\\dfrac{${fb}-${fa}}{${b}-${a}}=\\dfrac{${fb-fa}}{${b-a}}=${slope}$`),
          sec(`หา $c$ จาก $f'(c)=${slope}$`),
          bul(`$f'(x)=3x^2-1$`),
          bul(`$3c^2-1=${slope}$ → $c^2=${c2.toFixed(4)}$ → $c\\approx${cVal}$`),
          sec(`ตรวจสอบ`),
          para(`$c\\approx${cVal}\\in(${a},${b})$ ✓ → MVT สอดคล้อง`),
        ], ans),
      };
    },
  },

  // ═══════════════ DERIVATIVES (15) ═══════════════
  {
    id: "c1h-der-implicit-folium",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Implicit differentiation (Folium)",
    params: { a: [3, 6, 9] },
    build: ({ a }) => {
      const ans = `$\\dfrac{dy}{dx}=\\dfrac{${a}y-3x^2}{3y^2-${a}x}$`;
      return {
        problem: `กำหนด $x^3+y^3=${a}xy$ จงหา $\\dfrac{dy}{dx}$`,
        answer: ans,
        solution: buildSol([
          sec("Implicit Differentiation", "อนุพันธ์ทั้งสองข้างเทียบ $x$"),
          para(`$x^3+y^3=${a}xy$`),
          sec(`อนุพันธ์แต่ละพจน์`),
          bul(`$\\dfrac{d}{dx}(x^3)=3x^2$`),
          bul(`$\\dfrac{d}{dx}(y^3)=3y^2\\dfrac{dy}{dx}$ (chain rule)`),
          bul(`$\\dfrac{d}{dx}(${a}xy)=${a}y+${a}x\\dfrac{dy}{dx}$ (product rule)`),
          sec(`ตั้งสมการ`),
          para(`$3x^2+3y^2\\dfrac{dy}{dx}=${a}y+${a}x\\dfrac{dy}{dx}$`),
          sec(`แก้ $\\dfrac{dy}{dx}$`),
          para(`$3y^2\\dfrac{dy}{dx}-${a}x\\dfrac{dy}{dx}=${a}y-3x^2$`),
          para(`$(3y^2-${a}x)\\dfrac{dy}{dx}=${a}y-3x^2$`),
          para(`$\\dfrac{dy}{dx}=\\dfrac{${a}y-3x^2}{3y^2-${a}x}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-implicit-sin",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Implicit diff (trig)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{dy}{dx}=\\dfrac{${a}-y\\cos(xy)}{x\\cos(xy)}$`;
      return {
        problem: `กำหนด $\\sin(xy)=${a}x$ จงหา $\\dfrac{dy}{dx}$`,
        answer: ans,
        solution: buildSol([
          sec("Implicit Differentiation"),
          para(`อนุพันธ์ทั้งสองข้างเทียบ $x$`),
          sec("ด้านซ้าย: chain rule + product rule"),
          bul(`$\\dfrac{d}{dx}\\sin(xy)=\\cos(xy)\\cdot\\dfrac{d}{dx}(xy)$`),
          bul(`$\\dfrac{d}{dx}(xy)=y+x\\dfrac{dy}{dx}$`),
          bul(`รวม: $\\cos(xy)\\left(y+x\\dfrac{dy}{dx}\\right)$`),
          sec("ด้านขวา"),
          bul(`$\\dfrac{d}{dx}(${a}x)=${a}$`),
          sec(`แก้ $\\dfrac{dy}{dx}$`),
          para(`$y\\cos(xy)+x\\cos(xy)\\dfrac{dy}{dx}=${a}$`),
          para(`$\\dfrac{dy}{dx}=\\dfrac{${a}-y\\cos(xy)}{x\\cos(xy)}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-log-diff-pow",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Logarithmic differentiation ($x^{x^a}$)",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const ans = `$x^{x^{${a}}}\\cdot x^{${a-1}}(1+${a}\\ln x)$`;
      return {
        problem: `จงหา $\\dfrac{dy}{dx}$ เมื่อ $y=x^{x^{${a}}}$`,
        answer: ans,
        solution: buildSol([
          sec("Log Differentiation", "เอา $\\ln$ ทั้งสองข้าง"),
          para(`$\\ln y=x^{${a}}\\ln x$`),
          sec(`อนุพันธ์ทั้งสองข้าง`),
          bul(`ซ้าย: $\\dfrac{1}{y}\\dfrac{dy}{dx}$`),
          bul(`ขวา (product rule): $${a}x^{${a-1}}\\ln x+x^{${a}}\\cdot\\dfrac{1}{x}=${a}x^{${a-1}}\\ln x+x^{${a-1}}$`),
          para(`$\\dfrac{1}{y}\\dfrac{dy}{dx}=x^{${a-1}}(${a}\\ln x+1)$`),
          sec(`แก้ $\\dfrac{dy}{dx}$`),
          para(`$\\dfrac{dy}{dx}=y\\cdot x^{${a-1}}(1+${a}\\ln x)$`),
          sec(`แทน $y=x^{x^{${a}}}$`),
          para(`$\\dfrac{dy}{dx}=x^{x^{${a}}}\\cdot x^{${a-1}}(1+${a}\\ln x)$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-log-diff-frac",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Log differentiation (fraction)",
    params: { a: [1, 2, 3], b: [2, 3] },
    build: ({ a, b }) => {
      const ans = `$\\dfrac{(x+${a})^{${b}}}{\\sqrt{x^2+${a}}}\\left(\\dfrac{${b}}{x+${a}}-\\dfrac{x}{x^2+${a}}\\right)$`;
      return {
        problem: `จงหา $\\dfrac{dy}{dx}$ เมื่อ $y=\\dfrac{(x+${a})^{${b}}}{\\sqrt{x^2+${a}}}$`,
        answer: ans,
        solution: buildSol([
          sec(`Log Differentiation`),
          para(`$\\ln y=${b}\\ln(x+${a})-\\dfrac{1}{2}\\ln(x^2+${a})$`),
          sec(`อนุพันธ์ทั้งสองข้าง`),
          bul(`ซ้าย: $\\dfrac{1}{y}\\dfrac{dy}{dx}$`),
          bul(`ขวา: $\\dfrac{${b}}{x+${a}}-\\dfrac{1}{2}\\cdot\\dfrac{2x}{x^2+${a}}=\\dfrac{${b}}{x+${a}}-\\dfrac{x}{x^2+${a}}$`),
          sec(`แก้ $\\dfrac{dy}{dx}$`),
          para(`$\\dfrac{dy}{dx}=y\\left(\\dfrac{${b}}{x+${a}}-\\dfrac{x}{x^2+${a}}\\right)$`),
          sec(`แทน $y$`),
          para(`$\\dfrac{dy}{dx}=\\dfrac{(x+${a})^{${b}}}{\\sqrt{x^2+${a}}}\\left(\\dfrac{${b}}{x+${a}}-\\dfrac{x}{x^2+${a}}\\right)$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-higher-exp",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "อนุพันธ์อันดับ n (exponential)",
    params: { a: [2, 3], n: [3, 4, 5] },
    build: ({ a, n }) => {
      const ans = `$${a**n}e^{${a}x}$`;
      return {
        problem: `จงหา $f^{(${n})}(x)$ เมื่อ $f(x)=e^{${a}x}$`,
        answer: ans,
        solution: buildSol([
          sec(`สังเกตรูปแบบ`),
          bul(`$f'(x)=${a}e^{${a}x}$`),
          bul(`$f''(x)=${a}^2e^{${a}x}=${a**2}e^{${a}x}$`),
          bul(`$f'''(x)=${a}^3e^{${a}x}=${a**3}e^{${a}x}$`),
          sec(`รูปแบบทั่วไป`),
          para(`$f^{(k)}(x)=${a}^ke^{${a}x}$`),
          sec(`พิสูจน์โดย Induction`),
          bul(`Base: $f^{(1)}(x)=${a}e^{${a}x}$ ✓`),
          bul(`Step: ถ้า $f^{(k)}(x)=${a}^ke^{${a}x}$ แล้ว $f^{(k+1)}(x)=${a}\\cdot${a}^ke^{${a}x}=${a}^{k+1}e^{${a}x}$ ✓`),
          sec(`ผลลัพธ์`),
          para(`$f^{(${n})}(x)=${a}^{${n}}e^{${a}x}=${ans}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-higher-sin",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "อนุพันธ์อันดับ 4 (sin)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$${a**4}\\sin(${a}x)$`;
      return {
        problem: `จงหา $f^{(4)}(x)$ เมื่อ $f(x)=\\sin(${a}x)$`,
        answer: ans,
        solution: buildSol([
          sec(`คำนวณอนุพันธ์ทีละรอบ`),
          bul(`$f'(x)=${a}\\cos(${a}x)$`),
          bul(`$f''(x)=-${a}^2\\sin(${a}x)=-${a**2}\\sin(${a}x)$`),
          bul(`$f'''(x)=-${a}^3\\cos(${a}x)=-${a**3}\\cos(${a}x)$`),
          bul(`$f^{(4)}(x)=${a}^4\\sin(${a}x)=${a**4}\\sin(${a}x)$`),
          sec("สังเกต pattern"),
          para(`วัฏจักรอันดับ 4: $\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin$`),
          para(`อนุพันธ์อันดับ $4k$ ของ $\\sin(ax)$ คือ $a^{4k}\\sin(ax)$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-parametric-2nd",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Parametric 2nd derivative",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{-6t^2-${2*a}}{(3t^2-${a})^3}$`;
      return {
        problem: `กำหนด $x=t^3-${a}t$, $y=t^2$ จงหา $\\dfrac{d^2y}{dx^2}$`,
        answer: ans,
        solution: buildSol([
          sec(`หา $\\dfrac{dy}{dx}$ โดย parametric`),
          bul(`$\\dfrac{dy}{dt}=2t$`),
          bul(`$\\dfrac{dx}{dt}=3t^2-${a}$`),
          bul(`$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}=\\dfrac{2t}{3t^2-${a}}$`),
          sec(`หา $\\dfrac{d^2y}{dx^2}$`),
          para(`$\\dfrac{d^2y}{dx^2}=\\dfrac{\\frac{d}{dt}(dy/dx)}{dx/dt}$`),
          sec(`อนุพันธ์ $\\dfrac{2t}{3t^2-${a}}$ เทียบ $t$ (quotient rule)`),
          bul(`$\\dfrac{d}{dt}\\left(\\dfrac{2t}{3t^2-${a}}\\right)=\\dfrac{2(3t^2-${a})-2t(6t)}{(3t^2-${a})^2}=\\dfrac{-6t^2-${2*a}}{(3t^2-${a})^2}$`),
          sec(`รวม`),
          para(`$\\dfrac{d^2y}{dx^2}=\\dfrac{(-6t^2-${2*a})/(3t^2-${a})^2}{3t^2-${a}}=\\dfrac{-6t^2-${2*a}}{(3t^2-${a})^3}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-arctan",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "อนุพันธ์ arctan",
    params: { a: [1, 2, 3], b: [1, 2] },
    build: ({ a, b }) => {
      const ans = `$\\dfrac{${a*b}}{${b*b}x^2+${a*a}}$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\arctan\\!\\left(\\dfrac{${b}x}{${a}}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("สูตร", "$\\dfrac{d}{dx}\\arctan(u)=\\dfrac{u'}{1+u^2}$"),
          sec("กำหนด $u$"),
          bul(`$u=\\dfrac{${b}x}{${a}}$, $u'=\\dfrac{${b}}{${a}}$`),
          sec(`แทนลงสูตร`),
          para(`$\\dfrac{d}{dx}\\arctan\\!\\left(\\dfrac{${b}x}{${a}}\\right)=\\dfrac{${b}/${a}}{1+\\dfrac{${b**2}x^2}{${a**2}}}$`),
          sec(`ลดรูป`),
          para(`$=\\dfrac{${b}/${a}}{\\dfrac{${a**2}+${b**2}x^2}{${a**2}}}=\\dfrac{${b}}{${a}}\\cdot\\dfrac{${a**2}}{${a**2}+${b**2}x^2}=\\dfrac{${a*b}}{${a*a}+${b*b}x^2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-arcsin-sqrt",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "อนุพันธ์ arcsin(√x)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a}}{2\\sqrt{${a}x-${a*a}x^2}}$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\arcsin(\\sqrt{${a}x})$`,
        answer: ans,
        solution: buildSol([
          sec("Chain Rule", "$\\dfrac{d}{dx}\\arcsin(u)=\\dfrac{u'}{\\sqrt{1-u^2}}$"),
          sec("กำหนด $u$ (2 ชั้น)"),
          bul(`$u=\\sqrt{${a}x}=(${a}x)^{1/2}$`),
          bul(`$u'=\\dfrac{1}{2}(${a}x)^{-1/2}\\cdot${a}=\\dfrac{${a}}{2\\sqrt{${a}x}}$`),
          sec(`แทนลงสูตร`),
          para(`$\\dfrac{\\dfrac{${a}}{2\\sqrt{${a}x}}}{\\sqrt{1-${a}x}}=\\dfrac{${a}}{2\\sqrt{${a}x}\\cdot\\sqrt{1-${a}x}}$`),
          sec(`ลดรูป`),
          para(`$=\\dfrac{${a}}{2\\sqrt{${a}x(1-${a}x)}}=\\dfrac{${a}}{2\\sqrt{${a}x-${a*a}x^2}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-def",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "อนุพันธ์จากนิยาม",
    params: { a: [1, 2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\dfrac{1}{2\\sqrt{x+${a}}}$`;
      return {
        problem: `จงหา $f'(x)$ ของ $f(x)=\\sqrt{x+${a}}$ โดยใช้นิยาม`,
        answer: ans,
        solution: buildSol([
          sec("นิยาม", `$f'(x)=\\displaystyle\\lim_{h\\to0}\\dfrac{\\sqrt{x+${a}+h}-\\sqrt{x+${a}}}{h}$`),
          sec("คูณด้วย Conjugate"),
          bul(`$\\cdot\\dfrac{\\sqrt{x+${a}+h}+\\sqrt{x+${a}}}{\\sqrt{x+${a}+h}+\\sqrt{x+${a}}}$`),
          sec(`คำนวณเศษ`),
          bul(`$(x+${a}+h)-(x+${a})=h$`),
          sec(`ลดรูป`),
          para(`$\\dfrac{h}{sec(\\sqrt{x+${a}+h}+\\sqrt{x+${a}})}=\\dfrac{1}{\\sqrt{x+${a}+h}+\\sqrt{x+${a}}}$`),
          sec(`แทน $h\\to0$`),
          para(`$\\dfrac{1}{\\sqrt{x+${a}}+\\sqrt{x+${a}}}=\\dfrac{1}{2\\sqrt{x+${a}}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-chain3",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Chain rule 3 ชั้น",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$-${2*a}x\\sin(${a}x^2)\\cos(\\cos(${a}x^2))$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\sin(\\cos(${a}x^2))$`,
        answer: ans,
        solution: buildSol([
          sec(`ระบุฟังก์ชันซ้อน`),
          bul(`ชั้นนอก: $\\sin(u)$, $u=\\cos(${a}x^2)$`),
          bul(`ชั้นกลาง: $\\cos(v)$, $v=${a}x^2$`),
          bul(`ชั้นใน: ${a}x^2`),
          sec(`Chain Rule ชั้นที่ 1`),
          para(`$\\dfrac{d}{dx}\\sin(u)=\\cos(u)\\cdot u'=\\cos(\\cos(${a}x^2))\\cdot\\dfrac{d}{dx}\\cos(${a}x^2)$`),
          sec(`Chain Rule ชั้นที่ 2`),
          para(`$\\dfrac{d}{dx}\\cos(${a}x^2)=-\\sin(${a}x^2)\\cdot${2*a}x$`),
          sec(`รวมทุกชั้น`),
          para(`$=\\cos(\\cos(${a}x^2))\\cdot(-\\sin(${a}x^2))\\cdot${2*a}x$`),
          para(`$=-${2*a}x\\sin(${a}x^2)\\cos(\\cos(${a}x^2))$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-related-ladder",
    topic: "derivative", examType: "final", difficulty: "hard",
    subtopic: "Related rates (บันได)",
    params: { L: [5, 10, 13], vx: [1, 2] },
    build: ({ L, vx }) => {
      const x0 = L === 5 ? 3 : L === 10 ? 6 : 5;
      const y0 = Math.round(Math.sqrt(L*L - x0*x0));
      const ans = `$\\dfrac{dy}{dt}=-\\dfrac{${vx*x0}}{${y0}}$ m/s`;
      return {
        problem: `บันไดยาว $${L}$ m พิงกำแพง ปลายล่างเลื่อนออก $${vx}$ m/s เมื่อปลายล่างอยู่ห่าง $${x0}$ m จงหาความเร็วปลายบนเลื่อนลง`,
        answer: ans,
        solution: buildSol([
          sec(`ตั้งตัวแปร`),
          bul(`$x$ = ระยะปลายล่างจากกำแพง`),
          bul(`$y$ = ความสูงปลายบน`),
          bul(`$\\dfrac{dx}{dt}=${vx}$ m/s (กำหนด)`),
          sec(`สมการ Pythagoras`),
          para(`$x^2+y^2=${L}^2=${L*L}$`),
          sec(`อนุพันธ์เทียบ $t$`),
          para(`$2x\\dfrac{dx}{dt}+2y\\dfrac{dy}{dt}=0$ → $\\dfrac{dy}{dt}=-\\dfrac{x}{y}\\dfrac{dx}{dt}$`),
          sec(`แทนค่า $x=${x0}$`),
          bul(`$y=\\sqrt{${L*L}-${x0*x0}}=\\sqrt{${L*L-x0*x0}}=${y0}$ m`),
          bul(`$\\dfrac{dy}{dt}=-\\dfrac{${x0}}{${y0}}\\cdot${vx}=-\\dfrac{${vx*x0}}{${y0}}$ m/s`),
          para(`เครื่องหมายลบ → ปลายบนเลื่อนลง ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-related-sphere",
    topic: "derivative", examType: "final", difficulty: "hard",
    subtopic: "Related rates (ทรงกลม)",
    params: { r: [2, 3, 5], dvdt: [4, 6, 8] },
    build: ({ r, dvdt }) => {
      const ans = `$\\dfrac{dr}{dt}=\\dfrac{${dvdt}}{${4*r*r}\\pi}$ m/s`;
      return {
        problem: `ลูกโลกพองลมโดยปริมาตรเพิ่ม $${dvdt}$ m³/s จงหาอัตราเพิ่มของรัศมีเมื่อ $r=${r}$ m`,
        answer: ans,
        solution: buildSol([
          sec("สูตรปริมาตรทรงกลม"),
          para(`$V=\\dfrac{4}{3}\\pi r^3$`),
          sec("อนุพันธ์เทียบ $t$"),
          para(`$\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$`),
          sec("แก้ $\\dfrac{dr}{dt}$"),
          para(`$\\dfrac{dr}{dt}=\\dfrac{1}{4\\pi r^2}\\dfrac{dV}{dt}$`),
          sec(`แทนค่า $r=${r}$, $\\dfrac{dV}{dt}=${dvdt}$`),
          bul(`$\\dfrac{dr}{dt}=\\dfrac{${dvdt}}{4\\pi(${r})^2}=\\dfrac{${dvdt}}{${4*r*r}\\pi}$ m/s`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-linear-approx",
    topic: "derivative", examType: "midterm", difficulty: "hard",
    subtopic: "Linear approximation",
    params: { a: [8, 27, 125], n: [3] },
    build: ({ a, n }) => {
      const root = Math.round(Math.cbrt(a));
      const approx = root + 1/(n*root*root);
      const ans = `$\\approx${approx.toFixed(4)}$`;
      return {
        problem: `ใช้ Linear approximation หาค่าประมาณ $\\sqrt[${n}]{${a+1}}$ โดยใช้ $a=${a}$`,
        answer: ans,
        solution: buildSol([
          sec("กำหนด", `$f(x)=x^{1/${n}}$`),
          sec("สูตร Linearization"),
          para(`$L(x)=f(a)+f'(a)(x-a)$`),
          sec(`คำนวณค่าที่ $a=${a}$`),
          bul(`$f(${a})=${a}^{1/${n}}=${root}$`),
          bul(`$f'(x)=\\dfrac{1}{${n}}x^{\\frac{1}{${n}}-1}$ → $f'(${a})=\\dfrac{1}{${n}\\cdot${root*root}}=\\dfrac{1}{${n*root*root}}$`),
          sec(`ประมาณ $f(${a+1})$`),
          para(`$L(${a+1})=${root}+\\dfrac{1}{${n*root*root}}\\cdot1=${root}+${(1/(n*root*root)).toFixed(4)}\\approx${approx.toFixed(4)}$`),
          para(`เทียบจริง: $\\sqrt[${n}]{${a+1}}\\approx${(a+1)**(1/n) > 0 ? ((a+1)**(1/n)).toFixed(4) : "..."}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-der-leibniz",
    topic: "derivative", examType: "final", difficulty: "hard",
    subtopic: "Leibniz rule",
    params: { n: [3, 4] },
    build: ({ n }) => {
      const phase = n === 3 ? `x+\\dfrac{3\\pi}{4}` : `x+\\pi`;
      const coeff = n === 3 ? `2\\sqrt{2}` : `4`;
      const ans = `$${coeff}e^x\\sin\\!\\left(${phase}\\right)$`;
      return {
        problem: `ใช้ Leibniz rule หา $(e^x\\sin x)^{(${n})}$`,
        answer: ans,
        solution: buildSol([
          sec("Leibniz Rule", "$(fg)^{(n)}=\\sum_{k=0}^{n}\\binom{n}{k}f^{(k)}g^{(n-k)}$"),
          sec("อนุพันธ์ของ $f=e^x$ และ $g=\\sin x$"),
          bul(`$f^{(k)}=e^x$ (ทุก $k$)`),
          bul(`$g^{(m)}=\\sin\\!\\left(x+\\dfrac{m\\pi}{2}\\right)$`),
          sec("เขียนออกมา"),
          para(`$(e^x\\sin x)^{(${n})}=e^x\\displaystyle\\sum_{k=0}^{${n}}\\binom{${n}}{k}\\sin\\!\\left(x+\\dfrac{(${n}-k)\\pi}{2}\\right)$`),
          sec(`ใช้ผลรวมทางตรีโกณมิติ`),
          para(`ผลรวม $=2^{${n}/2}\\sin\\!\\left(${phase}\\right)$`),
          sec(`ผลลัพธ์สุดท้าย`),
          para(`$(e^x\\sin x)^{(${n})}=${coeff}e^x\\sin\\!\\left(${phase}\\right)$`),
        ], ans),
      };
    },
  },

  // ═══════════════ INTEGRALS (18) ═══════════════
  {
    id: "c1h-int-ibp-xnexp",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "IBP ซ้ำ ($x^n e^{ax}$)",
    params: { a: [1, 2, 3], n: [2, 3] },
    build: ({ a, n }) => {
      const ans = n === 2
        ? `$\\dfrac{e^{${a}x}}{${a}^3}(${a}^2x^2-${2*a}x+2)+C$`
        : `$\\dfrac{e^{${a}x}}{${a}^4}(${a}^3x^3-${3*a*a}x^2+${6*a}x-6)+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int x^{${n}}e^{${a}x}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "Integration by Parts ซ้ำ"),
          sec("รอบที่ 1", `ให้ $u=x^{${n}}$, $dv=e^{${a}x}dx$`),
          bul(`$du=${n}x^{${n-1}}dx$`),
          bul(`$v=\\dfrac{e^{${a}x}}{${a}}$`),
          para(`$\\displaystyle\\int x^{${n}}e^{${a}x}dx=\\dfrac{x^{${n}}e^{${a}x}}{${a}}-\\dfrac{${n}}{${a}}\\int x^{${n-1}}e^{${a}x}dx$`),
          sec("รอบที่ 2", `ให้ $u=x^{${n-1}}$, $dv=e^{${a}x}dx$`),
          bul(`$du=${n-1}x^{${n-2}}dx$ ${n===2?"(=$dx$)":""}`),
          bul(`$v=\\dfrac{e^{${a}x}}{${a}}$`),
          para(`$\\displaystyle\\int x^{${n-1}}e^{${a}x}dx=\\dfrac{x^{${n-1}}e^{${a}x}}{${a}}-\\dfrac{${n-1}}{${a}}\\int x^{${n-2}}e^{${a}x}dx$`),
          n === 3 ? para(`รอบที่ 3: $\\displaystyle\\int xe^{${a}x}dx=\\dfrac{xe^{${a}x}}{${a}}-\\dfrac{e^{${a}x}}{${a*a}}$`) : null,
          sec(`รวมผลลัพธ์`),
          para(`$=${ans}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-ibp-cyclic",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "IBP Cyclic ($e^{ax}\\cos bx$)",
    params: { a: [1, 2], b: [1, 2, 3] },
    build: ({ a, b }) => {
      const denom = a*a + b*b;
      const ans = `$\\dfrac{e^{${a}x}(${a}\\cos(${b}x)+${b}\\sin(${b}x))}{${denom}}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int e^{${a}x}\\cos(${b}x)\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "IBP แบบ Cyclic (ตั้ง I แล้วแก้)"),
          sec("รอบที่ 1", `ให้ $u=e^{${a}x}$, $dv=\\cos(${b}x)dx$`),
          bul(`$du=${a}e^{${a}x}dx$`),
          bul(`$v=\\dfrac{\\sin(${b}x)}{${b}}$`),
          para(`$I=\\dfrac{e^{${a}x}\\sin(${b}x)}{${b}}-\\dfrac{${a}}{${b}}\\int e^{${a}x}\\sin(${b}x)dx$`),
          sec("รอบที่ 2", `$J=\\int e^{${a}x}\\sin(${b}x)dx$: ให้ $u=e^{${a}x}$, $dv=\\sin(${b}x)dx$`),
          bul(`$du=${a}e^{${a}x}dx$`),
          bul(`$v=-\\dfrac{\\cos(${b}x)}{${b}}$`),
          para(`$J=-\\dfrac{e^{${a}x}\\cos(${b}x)}{${b}}+\\dfrac{${a}}{${b}}I$`),
          sec(`แก้ระบบสมการ (ตั้ง I)`),
          para(`$I=\\dfrac{e^{${a}x}\\sin(${b}x)}{${b}}-\\dfrac{${a}}{${b}}\\left(-\\dfrac{e^{${a}x}\\cos(${b}x)}{${b}}+\\dfrac{${a}}{${b}}I\\right)$`),
          para(`$I\\left(1+\\dfrac{${a*a}}{${b*b}}\\right)=e^{${a}x}\\left(\\dfrac{\\sin(${b}x)}{${b}}+\\dfrac{${a}\\cos(${b}x)}{${b*b}}\\right)$`),
          para(`$I=\\dfrac{e^{${a}x}(${a}\\cos(${b}x)+${b}\\sin(${b}x))}{${denom}}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-pf-distinct",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Partial Fractions (รากต่างกัน)",
    params: { a: [1, 2, 3], b: [2, 3, 4] },
    build: ({ a, b }) => {
      const bv = a === b ? b+1 : b;
      const diff = bv - a;
      const ans = `$\\dfrac{1}{${diff}}\\ln\\left|\\dfrac{x-${bv}}{x-${a}}\\right|+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\dfrac{dx}{(x-${a})(x-${bv})}$`,
        answer: ans,
        solution: buildSol([
          sec(`แยกเศษส่วนย่อย`),
          para(`$\\dfrac{1}{(x-${a})(x-${bv})}=\\dfrac{A}{x-${a}}+\\dfrac{B}{x-${bv}}$`),
          sec(`หาค่า A, B`),
          bul(`คูณทั้งสองข้างด้วย $(x-${a})(x-${bv})$: $1=A(x-${bv})+B(x-${a})$`),
          bul(`แทน $x=${a}$: $1=A(${a-bv})$ → $A=\\dfrac{-1}{${diff}}$`),
          bul(`แทน $x=${bv}$: $1=B(${diff})$ → $B=\\dfrac{1}{${diff}}$`),
          sec(`อินทิเกรตแต่ละพจน์`),
          para(`$\\displaystyle\\int\\left(\\dfrac{-1/${diff}}{x-${a}}+\\dfrac{1/${diff}}{x-${bv}}\\right)dx$`),
          bul(`$=-\\dfrac{1}{${diff}}\\ln|x-${a}|+\\dfrac{1}{${diff}}\\ln|x-${bv}|+C$`),
          sec(`รวมและลดรูป`),
          para(`$=\\dfrac{1}{${diff}}\\ln\\left|\\dfrac{x-${bv}}{x-${a}}\\right|+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-pf-repeated",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Partial Fractions (รากซ้ำ)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\ln|x-${a}|+\\dfrac{${a}}{x-${a}}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\dfrac{x}{(x-${a})^2}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec(`แยกเศษส่วนย่อย (รากซ้ำ)`),
          para(`$\\dfrac{x}{(x-${a})^2}=\\dfrac{A}{x-${a}}+\\dfrac{B}{(x-${a})^2}$`),
          sec(`หาค่า A, B`),
          bul(`คูณ $(x-${a})^2$: $x=A(x-${a})+B$`),
          bul(`แทน $x=${a}$: $${a}=B$ → $B=${a}$`),
          bul(`เทียบสัมประสิทธิ์ $x^1$: $A=1$`),
          sec(`อินทิเกรต`),
          para(`$\\displaystyle\\int\\left(\\dfrac{1}{x-${a}}+\\dfrac{${a}}{(x-${a})^2}\\right)dx$`),
          bul(`$\\int\\dfrac{1}{x-${a}}dx=\\ln|x-${a}|$`),
          bul(`$\\int\\dfrac{${a}}{(x-${a})^2}dx=${a}\\cdot\\dfrac{-1}{x-${a}}$`),
          sec(`รวม`),
          para(`$=\\ln|x-${a}|+\\dfrac{${a}}{x-${a}}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-trig-sub-circle",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Trig sub $\\sqrt{a^2-x^2}$",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\arcsin\\dfrac{x}{${a}}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\dfrac{dx}{\\sqrt{${a*a}-x^2}}$`,
        answer: ans,
        solution: buildSol([
          sec("Trig Substitution", `$x=${a}\\sin\\theta$`),
          bul(`$dx=${a}\\cos\\theta\\,d\\theta$`),
          bul(`$\\sqrt{${a*a}-x^2}=\\sqrt{${a*a}(1-\\sin^2\\theta)}=${a}\\cos\\theta$`),
          sec(`แทนลงอินทิกรัล`),
          para(`$\\displaystyle\\int\\dfrac{${a}\\cos\\theta\\,d\\theta}{${a}\\cos\\theta}=\\int d\\theta=\\theta+C$`),
          sec(`แปลงกลับ`),
          bul(`จาก $x=${a}\\sin\\theta$: $\\theta=\\arcsin\\dfrac{x}{${a}}$`),
          sec(`ผลลัพธ์`),
          para(`$\\arcsin\\dfrac{x}{${a}}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-trig-sub-hyp",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "สูตรมาตรฐาน $x^2+a^2$",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{1}{${a}}\\arctan\\dfrac{x}{${a}}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\dfrac{dx}{x^2+${a*a}}$`,
        answer: ans,
        solution: buildSol([
          sec(`สูตรมาตรฐาน`),
          para(`$\\displaystyle\\int\\dfrac{dx}{x^2+a^2}=\\dfrac{1}{a}\\arctan\\dfrac{x}{a}+C$`),
          sec(`ตรวจสอบโดย Trig Sub: $x=${a}\\tan\\theta$`),
          bul(`$dx=${a}\\sec^2\\theta\\,d\\theta$`),
          bul(`$x^2+${a*a}=${a*a}\\tan^2\\theta+${a*a}=${a*a}\\sec^2\\theta$`),
          para(`$\\displaystyle\\int\\dfrac{${a}\\sec^2\\theta\\,d\\theta}{${a*a}\\sec^2\\theta}=\\dfrac{1}{${a}}\\int d\\theta=\\dfrac{\\theta}{${a}}+C$`),
          sec(`แปลงกลับ`),
          para(`$\\theta=\\arctan\\dfrac{x}{${a}}$ → $\\dfrac{1}{${a}}\\arctan\\dfrac{x}{${a}}+C$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-trig-power",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Trig power $\\sin^2x\\cos^3x$",
    params: { a: [1] },
    build: ({ a }) => {
      const ans = `$\\dfrac{\\sin^3 x}{3}-\\dfrac{\\sin^5 x}{5}+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\sin^2 x\\cos^3 x\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "กำลังคี่ของ cos → แยกออก + Pythagorean"),
          para(`$\\cos^3x=\\cos^2x\\cdot\\cos x=(1-\\sin^2x)\\cos x$`),
          sec("จัดรูปใหม่"),
          para(`$\\displaystyle\\int\\sin^2x(1-\\sin^2x)\\cos x\\,dx$`),
          sec("Substitution", "$u=\\sin x$, $du=\\cos x\\,dx$"),
          para(`$\\displaystyle\\int u^2(1-u^2)du=\\int(u^2-u^4)du$`),
          sec("อินทิเกรต"),
          bul(`$=\\dfrac{u^3}{3}-\\dfrac{u^5}{5}+C$`),
          sec("แทนกลับ $u=\\sin x$"),
          para(`$=\\dfrac{\\sin^3x}{3}-\\dfrac{\\sin^5x}{5}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-trig-tan",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Trig power ($\\tan^n x$)",
    params: { n: [3, 4, 5] },
    build: ({ n }) => {
      const ans = n===3
        ? `$\\dfrac{\\tan^2x}{2}+\\ln|\\cos x|+C$`
        : n===4
        ? `$\\dfrac{\\tan^3x}{3}-\\tan x+x+C$`
        : `$\\dfrac{\\tan^4x}{4}-\\dfrac{\\tan^2x}{2}+\\ln|\\sec x|+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\tan^{${n}} x\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Reduction Formula"),
          para(`$\\int\\tan^nx\\,dx=\\int\\tan^{n-2}x(\\sec^2x-1)dx$`),
          sec("แยกสองพจน์"),
          bul(`พจน์ที่ 1: $\\int\\tan^{n-2}x\\sec^2x\\,dx$ → $u=\\tan x$, $du=\\sec^2x\\,dx$`),
          bul(`$=\\dfrac{\\tan^{n-1}x}{n-1}$`),
          bul(`พจน์ที่ 2: $-\\int\\tan^{n-2}x\\,dx$ → ใช้ Reduction ซ้ำ`),
          sec("ผลลัพธ์"),
          para(`$${ans}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-def-abs",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "อินทิกรัลค่าสัมบูรณ์",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$${a*a}$`;
      return {
        problem: `จงหา $\\displaystyle\\int_{-${a}}^{${a}}|x|\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec(`แบ่งช่วงตามเครื่องหมาย`),
          para(`$\\displaystyle\\int_{-${a}}^{${a}}|x|dx=\\int_{-${a}}^{0}|x|dx+\\int_{0}^{${a}}|x|dx$`),
          sec(`ช่วง $[-${a},0]$: $|x|=-x$`),
          bul(`$\\displaystyle\\int_{-${a}}^{0}(-x)dx=\\left[-\\dfrac{x^2}{2}\\right]_{-${a}}^{0}=0-\\left(-\\dfrac{${a*a}}{2}\\right)=\\dfrac{${a*a}}{2}$`),
          sec(`ช่วง $[0,${a}]$: $|x|=x$`),
          bul(`$\\displaystyle\\int_{0}^{${a}}x\\,dx=\\left[\\dfrac{x^2}{2}\\right]_{0}^{${a}}=\\dfrac{${a*a}}{2}$`),
          sec(`รวม`),
          para(`$\\dfrac{${a*a}}{2}+\\dfrac{${a*a}}{2}=${a*a}$`),
          para(`(ใช้ symmetry: $|x|$ เป็นฟังก์ชันคู่ → $2\\int_0^{${a}}x\\,dx=2\\cdot\\dfrac{${a*a}}{2}=${a*a}$) ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-improper1",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Improper Integral Type 1",
    params: { p: [2, 3, 4] },
    build: ({ p }) => {
      const ans = `$\\dfrac{1}{${p-1}}$`;
      return {
        problem: `จงตรวจสอบและหาค่า $\\displaystyle\\int_{1}^{\\infty}\\dfrac{1}{x^{${p}}}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec(`นิยาม Improper Integral`),
          para(`$\\displaystyle\\int_{1}^{\\infty}x^{-${p}}dx=\\lim_{b\\to\\infty}\\int_{1}^{b}x^{-${p}}dx$`),
          sec(`อินทิเกรต`),
          bul(`$\\left[\\dfrac{x^{-${p-1}}}{-${p-1}}\\right]_{1}^{b}=\\dfrac{-1}{${p-1}}\\left[b^{-${p-1}}-1\\right]$`),
          sec(`แทนขีดจำกัด`),
          bul(`$b^{-${p-1}}=\\dfrac{1}{b^{${p-1}}}\\to0$ เมื่อ $b\\to\\infty$`),
          para(`$\\lim_{b\\to\\infty}\\dfrac{-1}{${p-1}}\\left(\\dfrac{1}{b^{${p-1}}}-1\\right)=\\dfrac{-1}{${p-1}}(0-1)=\\dfrac{1}{${p-1}}$`),
          sec(`สรุป`),
          para(`อินทิกรัลลู่เข้า, ค่า $=\\dfrac{1}{${p-1}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-improper2",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Improper Integral Type 2",
    params: { p: [1, 2, 3] },
    build: ({ p }) => {
      const ans = p === 1 ? `$2$ (ลู่เข้า)` : `ลู่ออก (diverge)`;
      return {
        problem: p === 1
          ? `จงหาค่า $\\displaystyle\\int_{0}^{1}\\dfrac{1}{\\sqrt{x}}\\,dx$`
          : `จงทดสอบ $\\displaystyle\\int_{0}^{1}\\dfrac{1}{x^{${p}}}\\,dx$ ลู่เข้าหรือลู่ออก`,
        answer: ans,
        solution: buildSol([
          sec("ระบุ singularity", `จุดไม่ต่อเนื่องที่ $x=0$ (Type II)`),
          sec("นิยาม"),
          para(`$\\displaystyle\\lim_{a\\to0^+}\\int_{a}^{1}x^{-${p}}dx$`),
          sec(`อินทิเกรต`),
          para(p===1
            ? `$\\lim_{a\\to0^+}\\left[2x^{1/2}\\right]_a^1=\\lim_{a\\to0^+}(2-2\\sqrt{a})=2$`
            : `$\\lim_{a\\to0^+}\\left[\\dfrac{x^{1-${p}}}{1-${p}}\\right]_a^1$`),
          para(p===1 ? null : `$1-${p}<0$ → $a^{1-${p}}=a^{${1-p}}\\to\\infty$ เมื่อ $a\\to0^+$ → **ลู่ออก**`),
          sec("สรุป"),
          para(ans),
        ].filter(Boolean), ans),
      };
    },
  },

  {
    id: "c1h-int-ftc-chain",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "FTC + Chain Rule",
    params: { n: [2, 3], a: [0, 1] },
    build: ({ n, a }) => {
      const ans = `$${n}x^{${n-1}}\\sin(x^{${2*n}})$`;
      return {
        problem: `จงหา $\\dfrac{d}{dx}\\displaystyle\\int_{${a}}^{x^{${n}}}\\sin(t^2)\\,dt$`,
        answer: ans,
        solution: buildSol([
          sec("FTC ส่วนที่ 1 + Chain Rule"),
          para(`$\\dfrac{d}{dx}\\displaystyle\\int_{a}^{g(x)}f(t)dt=f(g(x))\\cdot g'(x)$`),
          sec("ระบุ $f$ และ $g$"),
          bul(`$f(t)=\\sin(t^2)$`),
          bul(`$g(x)=x^{${n}}$`),
          sec(`คำนวณ`),
          bul(`$f(g(x))=\\sin\\left((x^{${n}})^2\\right)=\\sin(x^{${2*n}})$`),
          bul(`$g'(x)=${n}x^{${n-1}}$`),
          sec(`ผลลัพธ์`),
          para(`$=${n}x^{${n-1}}\\sin(x^{${2*n}})$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-king",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "King's Rule",
    params: { a: [1] },
    build: ({ a }) => {
      const ans = `$\\dfrac{\\pi^2}{4}$`;
      return {
        problem: `จงหา $\\displaystyle\\int_{0}^{\\pi}\\dfrac{x\\sin x}{1+\\cos^2 x}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "King's Rule: $\\int_0^a f(x)dx=\\int_0^a f(a-x)dx$"),
          para(`ตั้ง $I=\\displaystyle\\int_0^\\pi\\dfrac{x\\sin x}{1+\\cos^2x}dx$`),
          sec("แทน $x\\to\\pi-x$"),
          bul(`$\\sin(\\pi-x)=\\sin x$ ✓`),
          bul(`$\\cos(\\pi-x)=-\\cos x$ → $\\cos^2(\\pi-x)=\\cos^2x$ ✓`),
          para(`$I=\\displaystyle\\int_0^\\pi\\dfrac{(\\pi-x)\\sin x}{1+\\cos^2x}dx$`),
          sec("บวกสองสมการ"),
          para(`$2I=\\pi\\displaystyle\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}dx$`),
          sec("คำนวณ (sub $u=\\cos x$)"),
          para(`$=\\pi\\left[-\\arctan(\\cos x)\\right]_0^\\pi=\\pi\\left(-\\arctan(-1)+\\arctan(1)\\right)=\\pi\\cdot\\dfrac{\\pi}{2}=\\dfrac{\\pi^2}{2}$`),
          sec("สรุป"),
          para(`$I=\\dfrac{\\pi^2}{4}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-vol-disk",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "ปริมาตร (Disk Method)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a*a}\\pi}{5}$`;
      return {
        problem: `จงหาปริมาตรจากการหมุน $y=${a}x^2$ บน $[0,1]$ รอบแกน $x$`,
        answer: ans,
        solution: buildSol([
          sec("Disk Method", "$V=\\pi\\displaystyle\\int_a^b[f(x)]^2dx$"),
          sec("ตั้งสูตร"),
          para(`$V=\\pi\\displaystyle\\int_0^1(${a}x^2)^2dx=\\pi\\int_0^1${a*a}x^4\\,dx$`),
          sec(`อินทิเกรต`),
          bul(`$=\\pi\\cdot${a*a}\\left[\\dfrac{x^5}{5}\\right]_0^1=\\pi\\cdot${a*a}\\cdot\\dfrac{1}{5}$`),
          sec(`ผลลัพธ์`),
          para(`$V=\\dfrac{${a*a}\\pi}{5}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-area-curves",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "พื้นที่ระหว่างเส้นโค้ง",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a**3}}{6}$`;
      return {
        problem: `จงหาพื้นที่ระหว่าง $y=${a}x$ และ $y=x^2$`,
        answer: ans,
        solution: buildSol([
          sec(`หาจุดตัด`),
          para(`$${a}x=x^2$ → $x^2-${a}x=0$ → $x(x-${a})=0$`),
          bul(`$x=0$ และ $x=${a}$`),
          sec(`ระบุฟังก์ชัน top/bottom บน $[0,${a}]$`),
          bul(`$${a}x\\geq x^2$ (ตรวจ $x=1$: $${a}>1$) ✓`),
          sec(`คำนวณพื้นที่`),
          para(`$A=\\displaystyle\\int_0^{${a}}(${a}x-x^2)dx=\\left[\\dfrac{${a}x^2}{2}-\\dfrac{x^3}{3}\\right]_0^{${a}}$`),
          bul(`$=\\dfrac{${a}\\cdot${a*a}}{2}-\\dfrac{${a**3}}{3}=\\dfrac{${a**3}}{2}-\\dfrac{${a**3}}{3}$`),
          sec(`ลดรูป`),
          para(`$=\\dfrac{${3*a**3}-${2*a**3}}{6}=\\dfrac{${a**3}}{6}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-reduction",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "Reduction formula (Wallis)",
    params: { n: [4, 6, 8] },
    build: ({ n }) => {
      const wallis = n===4 ? `\\dfrac{3\\pi}{16}` : n===6 ? `\\dfrac{5\\pi}{32}` : `\\dfrac{35\\pi}{256}`;
      const ans = `$${wallis}$`;
      return {
        problem: `ใช้ Reduction formula หา $\\displaystyle\\int_0^{\\pi/2}\\sin^{${n}} x\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Reduction Formula"),
          para(`$I_n=\\displaystyle\\int_0^{\\pi/2}\\sin^nx\\,dx=\\dfrac{n-1}{n}I_{n-2}$`),
          sec("ค่าฐาน"),
          bul(`$I_0=\\dfrac{\\pi}{2}$`),
          bul(`$I_2=\\dfrac{\\pi}{4}$`),
          sec("คำนวณซ้ำๆ"),
          bul(`$I_4=\\dfrac{3}{4}I_2=\\dfrac{3}{4}\\cdot\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{16}$`),
          n>=6 ? bul(`$I_6=\\dfrac{5}{6}I_4=\\dfrac{5}{6}\\cdot\\dfrac{3\\pi}{16}=\\dfrac{5\\pi}{32}$`) : null,
          n===8 ? bul(`$I_8=\\dfrac{7}{8}I_6=\\dfrac{7}{8}\\cdot\\dfrac{5\\pi}{32}=\\dfrac{35\\pi}{256}$`) : null,
          sec("Wallis Product"),
          para(`$I_{${n}}=${wallis}$`),
        ].filter(Boolean), ans),
      };
    },
  },

  {
    id: "c1h-int-arc-length",
    topic: "integral", examType: "final", difficulty: "hard",
    subtopic: "ความยาวเส้นโค้ง",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\int_0^1\\sqrt{1+${4*a*a}x^2}\\,dx$`;
      return {
        problem: `จงหาความยาวเส้นโค้ง $y=${a}x^2$ บน $[0,1]$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรความยาวเส้นโค้ง"),
          para(`$L=\\displaystyle\\int_a^b\\sqrt{1+[f'(x)]^2}\\,dx$`),
          sec("หา $f'(x)$"),
          bul(`$f'(x)=\\dfrac{d}{dx}(${a}x^2)=${2*a}x$`),
          bul(`$[f'(x)]^2=(${2*a}x)^2=${4*a*a}x^2$`),
          sec(`ตั้งอินทิกรัล`),
          para(`$L=\\displaystyle\\int_0^1\\sqrt{1+${4*a*a}x^2}\\,dx$`),
          sec(`คำนวณโดย sub $u=${2*a}x$`),
          bul(`$du=${2*a}dx$ → $dx=\\dfrac{du}{${2*a}}$`),
          bul(`$L=\\dfrac{1}{${2*a}}\\displaystyle\\int_0^{${2*a}}\\sqrt{1+u^2}\\,du$`),
          bul(`ใช้สูตร: $\\int\\sqrt{1+u^2}du=\\dfrac{u\\sqrt{1+u^2}}{2}+\\dfrac{\\ln(u+\\sqrt{1+u^2})}{2}+C$`),
        ], ans),
      };
    },
  },

  // ═══════════════ APPLICATIONS (10) ═══════════════
  {
    id: "c1h-app-evt",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Extreme Value Theorem",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const maxVal = `\\dfrac{2${a**3}}{3\\sqrt{3}}`;
      const ans = `$\\text{max}=\\dfrac{2${a**3}}{3\\sqrt{3}}$, $\\text{min}=-\\dfrac{2${a**3}}{3\\sqrt{3}}$`;
      return {
        problem: `หาค่าสูงสุดและต่ำสุดสัมบูรณ์ของ $f(x)=x^3-${a*a}x$ บน $[-${a},${a}]$`,
        answer: ans,
        solution: buildSol([
          sec(`หา Critical Points`),
          bul(`$f'(x)=3x^2-${a*a}=0$ → $x=\\pm\\dfrac{${a}}{\\sqrt{3}}$`),
          bul(`$\\pm\\dfrac{${a}}{\\sqrt{3}}\\approx\\pm${(a/Math.sqrt(3)).toFixed(3)}\\in[-${a},${a}]$ ✓`),
          sec(`คำนวณค่า $f$ ที่ทุกจุดวิกฤตและขอบ`),
          bul(`$f(-${a})=(-${a})^3-${a*a}(-${a})=-${a**3}+${a**3}=0$`),
          bul(`$f(${a})=${a**3}-${a**3}=0$`),
          bul(`$f\\!\\left(\\dfrac{${a}}{\\sqrt{3}}\\right)=\\dfrac{${a**3}}{3\\sqrt{3}}-${a*a}\\cdot\\dfrac{${a}}{\\sqrt{3}}=-\\dfrac{2${a**3}}{3\\sqrt{3}}$ ← ต่ำสุดสัมบูรณ์`),
          bul(`$f\\!\\left(-\\dfrac{${a}}{\\sqrt{3}}\\right)=\\dfrac{2${a**3}}{3\\sqrt{3}}$ ← สูงสุดสัมบูรณ์`),
          sec(`สรุป`),
          para(`สูงสุด: $\\dfrac{2${a**3}}{3\\sqrt{3}}$ ที่ $x=-\\dfrac{${a}}{\\sqrt{3}}$`),
          para(`ต่ำสุด: $-\\dfrac{2${a**3}}{3\\sqrt{3}}$ ที่ $x=\\dfrac{${a}}{\\sqrt{3}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-opt-fence",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Optimization (รั้ว)",
    params: { A: [100, 200, 300] },
    build: ({ A }) => {
      const side = Math.sqrt(A);
      const ans = `$x=y=\\sqrt{${A}}\\approx${side.toFixed(1)}$ m`;
      return {
        problem: `สร้างรั้วล้อมพื้นที่ $${A}$ m² รูปสี่เหลี่ยมผืนผ้า จงหาขนาดที่ใช้รั้วน้อยที่สุด`,
        answer: ans,
        solution: buildSol([
          sec(`ตั้งตัวแปรและ Constraint`),
          bul(`ด้าน $x$ และ $y$, constraint: $xy=${A}$`),
          bul(`Objective: minimize $P=2x+2y$`),
          sec(`แทน $y=\\dfrac{${A}}{x}$ ลงใน $P$`),
          para(`$P(x)=2x+\\dfrac{${2*A}}{x}$`),
          sec(`หาค่าต่ำสุด`),
          bul(`$P'(x)=2-\\dfrac{${2*A}}{x^2}=0$ → $x^2=${A}$ → $x=\\sqrt{${A}}$`),
          bul(`$P''(x)=\\dfrac{${4*A}}{x^3}>0$ → เป็น minimum ✓`),
          sec(`ผลลัพธ์`),
          bul(`$y=\\dfrac{${A}}{\\sqrt{${A}}}=\\sqrt{${A}}$`),
          para(`รูปสี่เหลี่ยมจัตุรัส $x=y=\\sqrt{${A}}\\approx${side.toFixed(1)}$ m`),
          para(`$P_{\\min}=4\\sqrt{${A}}\\approx${(4*side).toFixed(1)}$ m`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-opt-cylinder",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Optimization (ทรงกระบอกในทรงกลม)",
    params: { R: [1, 2, 3] },
    build: ({ R }) => {
      const ans = `$r=R\\sqrt{\\dfrac{2}{3}}$, $h=\\dfrac{2R}{\\sqrt{3}}$, $V_{\\max}=\\dfrac{4\\pi R^3}{3\\sqrt{3}}$`;
      return {
        problem: `จงหาทรงกระบอกที่มีปริมาตรมากที่สุดที่บรรจุในทรงกลมรัศมี $R=${R}$`,
        answer: `$r=${R}\\sqrt{\\tfrac{2}{3}}$, $h=\\tfrac{2${R}}{\\sqrt{3}}$`,
        solution: buildSol([
          sec(`ตั้งตัวแปร`),
          bul(`รัศมีทรงกระบอก $r$, ครึ่งความสูง $h$`),
          bul(`Constraint (Pythagoras): $r^2+h^2=${R}^2=${R*R}$`),
          sec(`ปริมาตรทรงกระบอก`),
          para(`$V=\\pi r^2(2h)=2\\pi sec(${R*R}-h^2)$`),
          sec(`หาค่าสูงสุด`),
          bul(`$\\dfrac{dV}{dh}=2\\pi(${R*R}-3h^2)=0$ → $h^2=\\dfrac{${R*R}}{3}$ → $h=\\dfrac{${R}}{\\sqrt{3}}$`),
          bul(`$r^2=${R*R}-\\dfrac{${R*R}}{3}=\\dfrac{${2*R*R}}{3}$ → $r=${R}\\sqrt{\\dfrac{2}{3}}$`),
          sec(`ปริมาตรสูงสุด`),
          para(`$V_{\\max}=2\\pi\\cdot\\dfrac{${R}}{\\sqrt{3}}\\cdot\\dfrac{${2*R*R}}{3}=\\dfrac{4\\pi${R===1?``:R**3}}{3\\sqrt{3}}$`),
        ], `$r=${R}\\sqrt{\\tfrac{2}{3}}$`),
      };
    },
  },

  {
    id: "c1h-app-concavity",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Concavity + Inflection points",
    params: { a: [1, 2, 3], b: [1, 2, 3] },
    build: ({ a, b }) => {
      const bOver2a = `${b}/${2*a}`;
      const ans = `จุด inflection ที่ $x=0$ และ $x=\\dfrac{${b}}{${2*a}}$`;
      return {
        problem: `จงหาช่วงเว้าขึ้น/เว้าลงและจุด inflection ของ $f(x)=${a}x^4-${b}x^3$`,
        answer: ans,
        solution: buildSol([
          sec(`หา $f''(x)$`),
          bul(`$f'(x)=${4*a}x^3-${3*b}x^2$`),
          bul(`$f''(x)=${12*a}x^2-${6*b}x=${6}x(${2*a}x-${b})$`),
          sec(`หา Inflection Points ($f''=0$)`),
          bul(`$6x=0$ → $x=0$`),
          bul(`$${2*a}x-${b}=0$ → $x=\\dfrac{${b}}{${2*a}}$`),
          sec(`ทดสอบเครื่องหมาย $f''$`),
          bul(`$x<0$: $f''>0$ → **เว้าขึ้น** (concave up)`),
          bul(`$0<x<\\dfrac{${b}}{${2*a}}$: $f''<0$ → **เว้าลง** (concave down)`),
          bul(`$x>\\dfrac{${b}}{${2*a}}$: $f''>0$ → **เว้าขึ้น**`),
          sec(`สรุป`),
          para(`จุด inflection: $x=0$ และ $x=\\dfrac{${b}}{${2*a}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-rolle",
    topic: "application", examType: "midterm", difficulty: "hard",
    subtopic: "Rolle's Theorem",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$c=\\dfrac{${a}}{\\sqrt{3}}$`;
      return {
        problem: `ใช้ Rolle's Theorem กับ $f(x)=x^3-${a*a}x$ บน $[0,${a}]$ แล้วหาค่า $c$`,
        answer: ans,
        solution: buildSol([
          sec(`ตรวจเงื่อนไข Rolle's`),
          bul(`$f(x)=x^3-${a*a}x$ ต่อเนื่องบน $[0,${a}]$ ✓`),
          bul(`มีอนุพันธ์บน $(0,${a})$ ✓`),
          bul(`$f(0)=0$ และ $f(${a})=${a**3}-${a*a}\\cdot${a}=0$ → $f(0)=f(${a})$ ✓`),
          sec(`หา $c$ จาก $f'(c)=0$`),
          bul(`$f'(x)=3x^2-${a*a}=0$`),
          bul(`$x^2=\\dfrac{${a*a}}{3}$ → $x=\\dfrac{${a}}{\\sqrt{3}}\\approx${(a/Math.sqrt(3)).toFixed(3)}$`),
          sec(`ตรวจสอบ`),
          para(`$c=\\dfrac{${a}}{\\sqrt{3}}\\in(0,${a})$ ✓ → Rolle's Theorem สอดคล้อง`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-newton",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Newton's Method",
    params: { a: [2, 3, 5] },
    build: ({ a }) => {
      const x0 = Math.ceil(Math.sqrt(a));
      const x1 = x0 - (x0*x0 - a)/(2*x0);
      const ans = `$x_1=${x1.toFixed(4)}$`;
      return {
        problem: `ใช้ Newton's Method 1 ขั้นเพื่อประมาณ $\\sqrt{${a}}$ โดยใช้ $x_0=${x0}$`,
        answer: ans,
        solution: buildSol([
          sec("ตั้งปัญหา", `$f(x)=x^2-${a}$ (หาราก $\\sqrt{${a}}$)`),
          bul(`$f'(x)=2x$`),
          sec("Newton's Formula", "$x_{n+1}=x_n-\\dfrac{f(x_n)}{f'(x_n)}$"),
          sec(`แทน $x_0=${x0}$`),
          bul(`$f(${x0})=${x0}^2-${a}=${x0*x0-a}$`),
          bul(`$f'(${x0})=2(${x0})=${2*x0}$`),
          para(`$x_1=${x0}-\\dfrac{${x0*x0-a}}{${2*x0}}=${x0}-${((x0*x0-a)/(2*x0)).toFixed(4)}=${x1.toFixed(4)}$`),
          sec(`ตรวจสอบ`),
          para(`$\\sqrt{${a}}\\approx${Math.sqrt(a).toFixed(4)}$ ← ประมาณได้ใกล้เคียงมาก ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-shadow",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Related rates (เงา)",
    params: { h: [2, 3], v: [1, 2], lamp: [5, 6] },
    build: ({ h, v, lamp }) => {
      const ans = `$\\dfrac{d\\ell}{dt}=\\dfrac{${h*v}}{${lamp-h}}$ m/s`;
      return {
        problem: `ไฟสูง $${lamp}$ m คนสูง $${h}$ m เดินออกจากใต้ไฟ $${v}$ m/s จงหาความเร็วที่เงายาวขึ้น`,
        answer: ans,
        solution: buildSol([
          sec(`ตั้งตัวแปร`),
          bul(`$x$ = ระยะคนจากเสาไฟ`),
          bul(`$\\ell$ = ความยาวเงา`),
          bul(`$\\dfrac{dx}{dt}=${v}$ m/s (กำหนด)`),
          sec(`สมส่วนสามเหลี่ยม`),
          para(`$\\dfrac{${lamp}}{x+\\ell}=\\dfrac{${h}}{\\ell}$`),
          sec(`แก้ $\\ell$`),
          para(`$${lamp}\\ell=${h}(x+\\ell)$ → $(${lamp-h})\\ell=${h}x$ → $\\ell=\\dfrac{${h}}{${lamp-h}}x$`),
          sec(`อนุพันธ์เทียบ $t$`),
          para(`$\\dfrac{d\\ell}{dt}=\\dfrac{${h}}{${lamp-h}}\\dfrac{dx}{dt}=\\dfrac{${h}}{${lamp-h}}\\cdot${v}=\\dfrac{${h*v}}{${lamp-h}}$ m/s`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-avgval",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Average value",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a}}{3}$`;
      return {
        problem: `จงหาค่าเฉลี่ยของ $f(x)=${a}x^2$ บนช่วง $[0,1]$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรค่าเฉลี่ย"),
          para(`$f_{avg}=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$`),
          sec("แทนค่า $a=0$, $b=1$"),
          para(`$f_{avg}=\\dfrac{1}{1}\\displaystyle\\int_0^1${a}x^2\\,dx$`),
          sec(`อินทิเกรต`),
          bul(`$=\\left[\\dfrac{${a}x^3}{3}\\right]_0^1=\\dfrac{${a}}{3}$`),
          sec(`ตรวจสอบโดย MVT for Integrals`),
          para(`มี $c\\in[0,1]$ ที่ $f(c)=\\dfrac{${a}}{3}$: $${a}c^2=\\dfrac{${a}}{3}$ → $c=\\dfrac{1}{\\sqrt{3}}\\approx0.577$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-work-spring",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "งาน (สปริง)",
    params: { k: [10, 20, 50], d: [0.1, 0.2, 0.5] },
    build: ({ k, d }) => {
      const ans = `$${(k*d*d/2).toFixed(3)}$ J`;
      return {
        problem: `สปริงค่าคงที่ $k=${k}$ N/m จงหางานที่ใช้ยืด $${d}$ m จากสมดุล`,
        answer: ans,
        solution: buildSol([
          sec("กฎของ Hooke", "$F(x)=kx$"),
          bul(`$F(x)=${k}x$ N`),
          sec(`งาน = อินทิกรัลของแรง`),
          para(`$W=\\displaystyle\\int_0^{${d}}${k}x\\,dx$`),
          sec(`คำนวณ`),
          bul(`$=\\left[\\dfrac{${k}x^2}{2}\\right]_0^{${d}}=\\dfrac{${k}\\cdot${d*d}}{2}=${(k*d*d/2).toFixed(3)}$ J`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-volume-shell",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "ปริมาตร (Shell Method)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a**4}\\pi}{2}$`;
      return {
        problem: `จงหาปริมาตรจากการหมุน $y=x^2$ บน $[0,${a}]$ รอบแกน $y$ โดย Shell Method`,
        answer: ans,
        solution: buildSol([
          sec("Shell Method", "$V=2\\pi\\displaystyle\\int_a^b x\\cdot f(x)\\,dx$"),
          sec("ตั้งสูตร"),
          para(`$V=2\\pi\\displaystyle\\int_0^{${a}}x\\cdot x^2\\,dx=2\\pi\\int_0^{${a}}x^3\\,dx$`),
          sec(`อินทิเกรต`),
          bul(`$=2\\pi\\left[\\dfrac{x^4}{4}\\right]_0^{${a}}=2\\pi\\cdot\\dfrac{${a}^4}{4}$`),
          sec(`ลดรูป`),
          para(`$=\\dfrac{2\\pi\\cdot${a**4}}{4}=\\dfrac{${a**4}\\pi}{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-fluiddrain",
    topic: "application", examType: "final", difficulty: "hard",
    subtopic: "Optimization (ผลคูณสูงสุด)",
    params: { S: [8, 12, 16] },
    build: ({ S }) => {
      const half = S / 2;
      const ans = `$x=y=${half}$`;
      return {
        problem: `จำนวนสองจำนวนบวกมีผลบวก $${S}$ จงหาคู่ที่ทำให้ผลคูณสูงสุด`,
        answer: ans,
        solution: buildSol([
          sec("ตั้งตัวแปร", "Constraint + Objective"),
          bul(`ตัวเลขสองตัว $x$ และ $y$`),
          bul(`Constraint: $x+y=${S}$`),
          bul(`Objective: maximize $P=xy$`),
          sec(`แปลงเป็น 1 ตัวแปร`),
          para(`แทน $y=${S}-x$: $P(x)=x(${S}-x)=${S}x-x^2$`),
          sec(`หาค่าสูงสุด`),
          bul(`$P'(x)=${S}-2x=0$ → $x=${half}$`),
          bul(`$P''(x)=-2<0$ → เป็น maximum ✓`),
          sec("ผลลัพธ์"),
          para(`$y=${S}-${half}=${half}$, $P_{\\max}=${half}\\times${half}=${half*half}$`),
          para(`💡 AM-GM: $xy\\leq\\left(\\dfrac{x+y}{2}\\right)^2$, เท่ากันเมื่อ $x=y$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-tech-ibp-twice",
    topic: "integration_technique", examType: "final", difficulty: "hard",
    subtopic: "Integration by parts (สองครั้ง)",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\dfrac{e^{${a}x}}{${a}^3}(${a}^2x^2-2${a}x+2)+C$`;
      return {
        problem: `หา $\\displaystyle\\int x^2 e^{${a}x}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("IBP ครั้งที่ 1", "$u=x^2$, $dv=e^{ax}dx$"),
          bul(`$=\\dfrac{x^2e^{${a}x}}{${a}}-\\dfrac{2}{${a}}\\displaystyle\\int xe^{${a}x}dx$`),
          sec("IBP ครั้งที่ 2", "$u=x$, $dv=e^{ax}dx$"),
          bul(`$\\displaystyle\\int xe^{${a}x}dx=\\dfrac{e^{${a}x}}{${a}^2}(${a}x-1)$`),
          sec("รวมผลลัพธ์"),
          para(`$=\\dfrac{e^{${a}x}}{${a}^3}(${a}^2x^2-2${a}x+2)+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-trans-log-int",
    topic: "transcendental", examType: "final", difficulty: "hard",
    subtopic: "อินทิเกรal logarithm",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const ans = `$x\\ln(${a}x)-x+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\ln(${a}x)\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("IBP", "$u=\\ln(ax)$, $dv=dx$"),
          bul(`$du=\\dfrac{1}{x}dx$, $v=x$`),
          bul(`$=x\\ln(${a}x)-\\displaystyle\\int x\\cdot\\dfrac{1}{x}dx$`),
          para(`$=x\\ln(${a}x)-x+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-int-sec-tan",
    topic: "integration_technique", examType: "final", difficulty: "hard",
    subtopic: "อินทิเกรal sec/tan",
    params: { n: [3, 5] },
    build: ({ n }) => {
      const coeff = n === 3 ? "1/4" : "1/6";
      const ans = n === 3
        ? `$\\dfrac{1}{4}\\sec^3 x\\tan x+\\dfrac{1}{8}\\sec x\\tan x+\\dfrac{1}{8}\\ln|\\sec x+\\tan x|+C$`
        : `$\\dfrac{1}{6}\\sec^5 x\\tan x+\\dfrac{1}{3}\\sec^3 x\\tan x+\\dfrac{1}{2}\\sec x\\tan x+\\dfrac{1}{2}\\ln|\\sec x+\\tan x|+C$`;
      return {
        problem: `จงหา $\\displaystyle\\int\\sec^{${n}} x\\tan x\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("วิธีการ", "แยก $\\sec^{${n-2}}x\\cdot\\sec x\\tan x\\,dx$"),
          bul(`ตั้ง $u=\\sec x$, $du=\\sec x\\tan x\\,dx$`),
          bul(`$\\displaystyle\\int u^{${n-1}}\\,du=\\dfrac{u^{${n}}}{${n}}=\\dfrac{\\sec^{${n}}x}{${n}}$`),
          sec("กรณี sec³ (ใช้ reduction)"),
          para(`สำหรับ $n=3$ ใช้ reduction ได้ผลลัพธ์ตาม Chula Final pattern`),
        ], ans),
      };
    },
  },

  {
    id: "c1h-app-graph-deriv",
    topic: "application", examType: "midterm", difficulty: "hard",
    subtopic: "อ่านกราฟ f หา f'",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$f'(${a})=0$`;
      return {
        problem: `กราฟ $f(x)$ ต่อเนื่อง มี horizontal tangent ที่ $x=${a}$ และ $f$ เพิ่มช้าลงก่อน $x=${a}$ แล้วลดหลัง $x=${a}$ จงหา $f'(${a})$ และลักษณะ critical point`,
        answer: ans,
        solution: buildSol([
          sec("อ่านจากกราฟ", "horizontal tangent → $f'=0$"),
          bul(`ที่ $x=${a}$: $f'(${a})=0$`),
          sec("ทดสอบเครื่องหมาย"),
          bul(`$f$ เปลี่ยนจากเพิ่มเป็นลด → local maximum ที่ $x=${a}$`),
          sec("สรุป"),
          para(`$f'(${a})=0$ และ $x=${a}$ เป็นจุดสูงสุดท้องถิ่น`),
        ], ans),
      };
    },
  },
];
