import { sec, bul, para, sep, buildSol } from "./solutionFormat.js";

// ─── CAL2 HARD TEMPLATES (65 templates) ───────────────────────────────────────

export const CAL2_HARD_TEMPLATES = [

  // ═══════════════ SEQUENCES (5) ═══════════════
  {
    id: "c2h-seq-ratio-lim",
    topic: "sequence", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิตลำดับ (ratio test idea)",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$0$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n^{${a}}}{${a}^n}$`,
        answer: ans,
        solution: buildSol([
          sec(`ทดสอบด้วย Ratio Test ของลำดับ`),
          para(`$a_n=\\dfrac{n^{${a}}}{${a}^n}$`),
          sec(`คำนวณ $\\dfrac{a_{n+1}}{a_n}$`),
          bul(`$\\dfrac{a_{n+1}}{a_n}=\\dfrac{(n+1)^{${a}}}{${a}^{n+1}}\\cdot\\dfrac{${a}^n}{n^{${a}}}=\\dfrac{1}{${a}}\\left(1+\\dfrac{1}{n}\\right)^{${a}}$`),
          sec(`หาขีดจำกัด`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{a_{n+1}}{a_n}=\\dfrac{1}{${a}}\\cdot1=\\dfrac{1}{${a}}<1$`),
          sec(`สรุป`),
          para(`$L=\\dfrac{1}{${a}}<1$ → $a_n\\to0$`),
          para(`(Exponential ${a}^n โตเร็วกว่า polynomial n^${a} เสมอ)`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-seq-squeeze",
    topic: "sequence", examType: "midterm", difficulty: "hard",
    subtopic: "ลิมิตลำดับ (Squeeze)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$0$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{${a}\\sin(n)}{n}$`,
        answer: ans,
        solution: buildSol([
          sec(`Bounded function`),
          bul(`$-1\\leq\\sin(n)\\leq1$ สำหรับทุก $n$`),
          sec(`คูณด้วย $\\dfrac{${a}}{n}$ (บวก เพราะ $n>0$)`),
          bul(`$-\\dfrac{${a}}{n}\\leq\\dfrac{${a}\\sin(n)}{n}\\leq\\dfrac{${a}}{n}$`),
          sec(`Squeeze Theorem`),
          bul(`$\\displaystyle\\lim_{n\\to\\infty}\\left(-\\dfrac{${a}}{n}\\right)=0$`),
          bul(`$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{${a}}{n}=0$`),
          sec(`สรุป`),
          para(`โดย Squeeze Theorem: $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{${a}\\sin(n)}{n}=0$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-seq-monotone",
    topic: "sequence", examType: "midterm", difficulty: "hard",
    subtopic: "Monotone Convergence Theorem",
    params: { r: [2, 3, 4] },
    build: ({ r }) => {
      const ans = `ลู่เข้าที่ $0$`;
      return {
        problem: `แสดงว่า $a_n=\\dfrac{${r}^n}{n!}$ ลู่เข้า และหาลิมิต`,
        answer: ans,
        solution: buildSol([
          sec(`ทดสอบ Monotone`),
          bul(`$\\dfrac{a_{n+1}}{a_n}=\\dfrac{${r}^{n+1}}{(n+1)!}\\cdot\\dfrac{n!}{${r}^n}=\\dfrac{${r}}{n+1}$`),
          bul(`เมื่อ $n\\geq${r}$: $\\dfrac{${r}}{n+1}\\leq\\dfrac{${r}}{${r+1}}<1$ → $a_{n+1}<a_n$ (ลดลง monotone) ✓`),
          sec(`ทดสอบ Bounded below`),
          bul(`$a_n=\\dfrac{${r}^n}{n!}>0$ สำหรับทุก $n$ ✓`),
          sec("Monotone Convergence Theorem"),
          para(`$a_n$ ลดลงและ bounded below → ลู่เข้า ✓`),
          sec("หา L"),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}a_{n+1}=\\lim_{n\\to\\infty}\\dfrac{${r}}{n+1}a_n=0\\cdot L=0$`),
          para(`ดังนั้น $L=0$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-seq-recursive",
    topic: "sequence", examType: "midterm", difficulty: "hard",
    subtopic: "ลำดับ recursive",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const L = (1 + Math.sqrt(1 + 4*a)) / 2;
      const ans = `$L=\\dfrac{1+\\sqrt{${4*a+1}}}{2}\\approx${L.toFixed(3)}$`;
      return {
        problem: `ลำดับ $a_1=1$, $a_{n+1}=\\sqrt{${a}+a_n}$ จงหาลิมิต (ถ้ามี)`,
        answer: ans,
        solution: buildSol([
          sec(`สมมติลำดับลู่เข้าที่ $L$`),
          para(`$L=\\displaystyle\\lim_{n\\to\\infty}a_{n+1}=\\lim_{n\\to\\infty}\\sqrt{${a}+a_n}=\\sqrt{${a}+L}$`),
          sec(`แก้สมการ $L=\\sqrt{${a}+L}$`),
          bul(`ยกกำลังสอง: $L^2=${a}+L$`),
          bul(`$L^2-L-${a}=0$`),
          bul(`$L=\\dfrac{1\\pm\\sqrt{1+4\\cdot${a}}}{2}=\\dfrac{1\\pm\\sqrt{${4*a+1}}}{2}$`),
          sec(`เลือกค่า $L>0$`),
          para(`$L=\\dfrac{1+\\sqrt{${4*a+1}}}{2}\\approx${L.toFixed(3)}$`),
          sec(`ยืนยันว่าลำดับลู่เข้า`),
          para(`$a_1=1<L$, induction: ถ้า $a_n<L$ → $a_{n+1}=\\sqrt{${a}+a_n}<\\sqrt{${a}+L}=L$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-seq-nth-root",
    topic: "sequence", examType: "midterm", difficulty: "hard",
    subtopic: "n-th root limit",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$${a}$`;
      return {
        problem: `จงหา $\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{${a}^n+n^{${a}}}$`,
        answer: ans,
        solution: buildSol([
          sec(`แยกตัวประกอบ`),
          para(`$\\sqrt[n]{${a}^n+n^{${a}}}=${a}\\sqrt[n]{1+\\dfrac{n^{${a}}}{${a}^n}}$`),
          sec(`หา $\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{\\dfrac{n^{${a}}}{${a}^n}}$`),
          bul(`$=\\dfrac{n^{${a}/n}}{${a}}=\\dfrac{e^{(${a}\\ln n)/n}}{${a}}\\to\\dfrac{e^0}{${a}}=\\dfrac{1}{${a}}$`),
          bul(`(เพราะ $\\dfrac{\\ln n}{n}\\to0$)`),
          sec(`ดังนั้น`),
          bul(`$\\dfrac{n^{${a}}}{${a}^n}\\to0$ → $\\sqrt[n]{1+\\dfrac{n^{${a}}}{${a}^n}}\\to1$`),
          sec(`ผลลัพธ์`),
          para(`$\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{${a}^n+n^{${a}}}=${a}\\cdot1=${a}$`),
        ], ans),
      };
    },
  },

  // ═══════════════ SERIES (12) ═══════════════
  {
    id: "c2h-ser-comparison",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Comparison Test",
    params: { p: [2, 3] },
    build: ({ p }) => {
      const ans = `ลู่เข้า`;
      return {
        problem: `ทดสอบ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{${p}}+\\sqrt{n}}$`,
        answer: ans,
        solution: buildSol([
          sec(`Comparison Test`),
          bul(`เนื่องจาก $n^{${p}}+\\sqrt{n}>n^{${p}}$ สำหรับ $n\\geq1$`),
          bul(`ดังนั้น $\\dfrac{1}{n^{${p}}+\\sqrt{n}}<\\dfrac{1}{n^{${p}}}$`),
          sec(`p-series test`),
          para(`$\\displaystyle\\sum\\dfrac{1}{n^{${p}}}$ เป็น p-series ที่ $p=${p}>1$ → ลู่เข้า`),
          sec(`สรุป`),
          para(`โดย Comparison Test: $\\displaystyle\\sum\\dfrac{1}{n^{${p}}+\\sqrt{n}}$ ลู่เข้า ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-limit-comp",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Limit Comparison Test",
    params: { p: [2, 3], q: [1, 2] },
    build: ({ p, q }) => {
      const ans = p - q > 1 ? `ลู่เข้า` : `ลู่ออก`;
      return {
        problem: `ใช้ Limit Comparison Test ทดสอบ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n^{${q}}}{n^{${p}}+1}$`,
        answer: ans,
        solution: buildSol([
          sec(`เลือก $b_n$ สำหรับเปรียบเทียบ`),
          bul(`เมื่อ $n$ ใหญ่: $\\dfrac{n^{${q}}}{n^{${p}}+1}\\approx\\dfrac{n^{${q}}}{n^{${p}}}=\\dfrac{1}{n^{${p-q}}}$`),
          bul(`เลือก $b_n=\\dfrac{1}{n^{${p-q}}}$`),
          sec(`คำนวณ LCT`),
          para(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{a_n}{b_n}=\\lim_{n\\to\\infty}\\dfrac{n^{${q}}}{n^{${p}}+1}\\cdot n^{${p-q}}=\\lim_{n\\to\\infty}\\dfrac{n^{${p}}}{n^{${p}}+1}=1$`),
          sec(`$L=1>0$ → ทั้งสองลู่เข้า/ออกพร้อมกัน`),
          bul(`$\\displaystyle\\sum\\dfrac{1}{n^{${p-q}}}$ เป็น p-series, $p'=${p-q}${p-q>1?">1 → ลู่เข้า":"\\leq1 → ลู่ออก"}$`),
          sec("สรุป"),
          para(`$\\displaystyle\\sum\\dfrac{n^{${q}}}{n^{${p}}+1}$ ${ans}`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-root-test",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Root Test",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `ลู่เข้า`;
      return {
        problem: `ใช้ Root Test ทดสอบ $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac{n}{${a}n+1}\\right)^n$`,
        answer: ans,
        solution: buildSol([
          sec("Root Test", "$L=\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}$"),
          sec("คำนวณ"),
          bul(`$\\sqrt[n]{\\left(\\dfrac{n}{${a}n+1}\\right)^n}=\\dfrac{n}{${a}n+1}$`),
          sec(`หาขีดจำกัด`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n}{${a}n+1}=\\dfrac{1}{${a}+1/n}\\to\\dfrac{1}{${a}}$`),
          sec(`สรุป`),
          bul(`$L=\\dfrac{1}{${a}}<1$ → อนุกรมลู่เข้าอย่างแน่นอน ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-ratio-factorial",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Ratio Test (factorial)",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `ลู่เข้า`;
      return {
        problem: `ใช้ Ratio Test ทดสอบ $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{${a}^n}{n!}$`,
        answer: ans,
        solution: buildSol([
          sec(`Ratio Test`),
          bul(`$a_n=\\dfrac{${a}^n}{n!}$`),
          bul(`$a_{n+1}=\\dfrac{${a}^{n+1}}{(n+1)!}$`),
          sec(`คำนวณ $\\dfrac{a_{n+1}}{a_n}$`),
          bul(`$\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{${a}^{n+1}}{(n+1)!}\\cdot\\dfrac{n!}{${a}^n}=\\dfrac{${a}}{n+1}$`),
          sec(`หา L`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{${a}}{n+1}=0<1$ ✓`),
          sec(`สรุป`),
          para(`อนุกรมลู่เข้าอย่างแน่นอน (ค่าของอนุกรมนี้คือ $e^{${a}}$)`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-alternating",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Alternating Series Test",
    params: { p: [1, 2] },
    build: ({ p }) => {
      const ans = p === 1 ? `ลู่เข้าแบบมีเงื่อนไข` : `ลู่เข้าอย่างแน่นอน`;
      return {
        problem: `ทดสอบ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^{${p}}}$ ลู่เข้าแบบใด`,
        answer: ans,
        solution: buildSol([
          sec("Alternating Series Test (AST)", `$b_n=\\dfrac{1}{n^{${p}}}$`),
          bul(`(1) $b_n>0$ ✓`),
          bul(`(2) $b_{n+1}=\\dfrac{1}{(n+1)^{${p}}}<\\dfrac{1}{n^{${p}}}=b_n$ (ลดลง) ✓`),
          bul(`(3) $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{1}{n^{${p}}}=0$ ✓`),
          para(`→ อนุกรมลู่เข้าโดย AST`),
          sec("ทดสอบ Absolute Convergence"),
          bul(`$\\displaystyle\\sum\\dfrac{1}{n^{${p}}}$ เป็น p-series, $p=${p}${p>1?"\\Rightarrow$ ลู่เข้า → absolute convergence":"\\leq1\\Rightarrow$ ลู่ออก → conditional convergence only"}`),
          sec("สรุป"),
          para(ans),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-telescoping",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Telescoping series",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{1}{${a}}$`;
      return {
        problem: `จงหาผลรวม $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{(n+${a-1})(n+${a})}$`,
        answer: ans,
        solution: buildSol([
          sec(`แยกเศษส่วนย่อย`),
          bul(`$\\dfrac{1}{(n+${a-1})(n+${a})}=\\dfrac{1}{n+${a-1}}-\\dfrac{1}{n+${a}}$`),
          sec(`ผลรวมย่อย $S_N$`),
          para(`$S_N=\\displaystyle\\sum_{n=1}^{N}\\left(\\dfrac{1}{n+${a-1}}-\\dfrac{1}{n+${a}}\\right)$`),
          sec(`Telescoping`),
          bul(`$S_N=\\dfrac{1}{${a}}-\\dfrac{1}{N+${a}}$`),
          sec(`แทน $N\\to\\infty$`),
          para(`$\\displaystyle\\lim_{N\\to\\infty}S_N=\\dfrac{1}{${a}}-0=\\dfrac{1}{${a}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-abs-cond",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Absolute vs conditional",
    params: { p: [1, 2] },
    build: ({ p }) => {
      const ans = p === 1 ? `conditional convergence` : `absolute convergence`;
      return {
        problem: `จงระบุว่า $\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{(-1)^n}{n^{${p}}\\ln n}$ ลู่เข้าแบบใด`,
        answer: ans,
        solution: buildSol([
          sec(`ทดสอบ Absolute Convergence`),
          para(p===1
            ? `$\\displaystyle\\sum\\dfrac{1}{n\\ln n}$: ใช้ Integral Test → $\\int_2^\\infty\\dfrac{dx}{x\\ln x}=[\\ln(\\ln x)]_2^\\infty=\\infty$ → **ลู่ออก**`
            : `$\\displaystyle\\sum\\dfrac{1}{n^{${p}}\\ln n}\\leq\\sum\\dfrac{1}{n^{${p}}}$ → p-series $p=${p}>1$ → **ลู่เข้า**`),
          sec(`ทดสอบ Alternating (AST)`),
          bul(`$b_n=\\dfrac{1}{n^{${p}}\\ln n}$ ลดลงเดียวทาง ✓`),
          bul(`$\\displaystyle\\lim_{n\\to\\infty}b_n=0$ ✓`),
          para(`→ อนุกรสลับลู่เข้า`),
          sec("สรุป"),
          para(ans),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-error-bound",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Alternating Series Error Bound",
    params: { n: [3, 4, 5] },
    build: ({ n }) => {
      const ans = `$|S-S_{${n}}|\\leq\\dfrac{1}{${n+1}}\\approx${(1/(n+1)).toFixed(4)}$`;
      return {
        problem: `หา error bound เมื่อประมาณ $\\ln2$ ด้วย $S_{${n}}=\\displaystyle\\sum_{k=1}^{${n}}\\dfrac{(-1)^{k+1}}{k}$`,
        answer: ans,
        solution: buildSol([
          sec("Alternating Harmonic Series"),
          para(`$\\displaystyle\\sum_{k=1}^{\\infty}\\dfrac{(-1)^{k+1}}{k}=\\ln2$`),
          sec("Alternating Series Estimation Theorem"),
          para(`$|S-S_n|\\leq b_{n+1}=\\dfrac{1}{n+1}$`),
          sec(`แทน $n=${n}$`),
          bul(`$|\\ln2-S_{${n}}|\\leq\\dfrac{1}{${n+1}}\\approx${(1/(n+1)).toFixed(4)}$`),
          sec(`ตรวจสอบ`),
          bul(`$\\ln2\\approx${Math.log(2).toFixed(4)}$`),
          bul(`$S_{${n}}=\\displaystyle\\sum_{k=1}^{${n}}\\dfrac{(-1)^{k+1}}{k}\\approx${Array.from({length:n},(_,i)=>i%2===0?1/(i+1):-1/(i+1)).reduce((a,b)=>a+b,0).toFixed(4)}$`),
          para(`|ผลต่าง| ≤ $\\dfrac{1}{${n+1}}$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-grouping",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Telescoping ซับซ้อน",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{1}{(${a}-1)^2}$`;
      return {
        problem: `จงหาผลรวม $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac{1}{${a}^n-1}-\\dfrac{1}{${a}^{n+1}-1}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec(`สังเกตรูปแบบ Telescoping`),
          para(`ผลรวมย่อย: $S_N=\\dfrac{1}{${a}^1-1}-\\dfrac{1}{${a}^{N+1}-1}$`),
          sec(`Telescoping sum`),
          bul(`$S_N=\\dfrac{1}{${a}-1}-\\dfrac{1}{${a}^{N+1}-1}$`),
          sec(`แทน $N\\to\\infty$`),
          bul(`$\\dfrac{1}{${a}^{N+1}-1}\\to0$ เมื่อ $N\\to\\infty$`),
          para(`$\\displaystyle\\sum_{n=1}^{\\infty}=\\dfrac{1}{${a}-1}-0=\\dfrac{1}{${a}-1}$`),
          sec(`สรุป`),
          para(`$=\\dfrac{1}{${a-1}}$`),
        ], `$\\dfrac{1}{${a-1}}$`),
      };
    },
  },

  {
    id: "c2h-ser-dirichlet",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Dirichlet test",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `ลู่เข้า`;
      return {
        problem: `แสดงว่า $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\cos(${a}n\\pi/2)}{n}$ ลู่เข้า`,
        answer: ans,
        solution: buildSol([
          sec(`Dirichlet Test`),
          para(`อนุกรม $\\sum a_nb_n$ ลู่เข้าถ้า:`),
          bul(`(1) $a_n=\\dfrac{1}{n}$ ลดลงเดียวทางไปที่ $0$ ✓`),
          bul(`(2) Partial sums ของ $\\sum b_n=\\sum\\cos(${a}n\\pi/2)$ bounded`),
          sec(`ตรวจ partial sums ของ $b_n$`),
          bul(`$\\cos(${a}n\\pi/2)$ มีคาบ 4 → partial sums bounded ✓`),
          sec(`สรุป`),
          para(`โดย Dirichlet Test: $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\cos(${a}n\\pi/2)}{n}$ ลู่เข้า ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-integral-test",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Integral Test",
    params: { p: [2, 3, 4] },
    build: ({ p }) => {
      const ans = `ลู่เข้า ($p=${p}>1$)`;
      return {
        problem: `ใช้ Integral Test ทดสอบ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{${p}}}$`,
        answer: ans,
        solution: buildSol([
          sec(`เงื่อนไข Integral Test`),
          bul(`$f(x)=\\dfrac{1}{x^{${p}}}$ ต่อเนื่อง บวก ลดลงบน $[1,\\infty)$ ✓`),
          sec(`คำนวณ $\\displaystyle\\int_1^\\infty x^{-${p}}dx$`),
          bul(`$=\\displaystyle\\lim_{b\\to\\infty}\\left[\\dfrac{x^{${1-p}}}{${1-p}}\\right]_1^b$`),
          bul(`$=\\displaystyle\\lim_{b\\to\\infty}\\dfrac{1}{${1-p}}(b^{${1-p}}-1)$`),
          bul(`$b^{${1-p}}=\\dfrac{1}{b^{${p-1}}}\\to0$ เมื่อ $b\\to\\infty$`),
          para(`$=\\dfrac{1}{${p-1}}$ → อินทิกรัลลู่เข้า`),
          sec(`สรุป`),
          para(`โดย Integral Test: $\\displaystyle\\sum\\dfrac{1}{n^{${p}}}$ ลู่เข้า ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ser-geometric-sum",
    topic: "series", examType: "midterm", difficulty: "hard",
    subtopic: "Geometric series ซับซ้อน",
    params: { a: [2, 3, 4], b: [3, 4, 5] },
    build: ({ a, b }) => {
      const bv = a === b ? b + 1 : b;
      const ans = `$\\dfrac{${bv}}{${bv-a}}$`;
      return {
        problem: `จงหาผลรวม $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\dfrac{${a}}{${bv}}\\right)^n$`,
        answer: ans,
        solution: buildSol([
          sec(`ตรวจเป็น Geometric Series`),
          bul(`$a_n=\\left(\\dfrac{${a}}{${bv}}\\right)^n$, $r=\\dfrac{${a}}{${bv}}$`),
          bul(`$|r|=\\dfrac{${a}}{${bv}}<1$ → ลู่เข้า ✓`),
          sec("สูตร Geometric Series"),
          para(`$\\displaystyle\\sum_{n=0}^{\\infty}r^n=\\dfrac{1}{1-r}$ สำหรับ $|r|<1$`),
          sec("แทนค่า"),
          para(`$\\dfrac{1}{1-\\frac{${a}}{${bv}}}=\\dfrac{1}{\\frac{${bv-a}}{${bv}}}=\\dfrac{${bv}}{${bv-a}}$`),
          sec(`หมายเหตุ`),
          para(`ถ้าเริ่มจาก $n=0$: ผลรวม $=\\dfrac{${bv}}{${bv-a}}$`),
        ], `$\\dfrac{${bv}}{${bv-a}}$`),
      };
    },
  },

  // ═══════════════ POWER SERIES (8) ═══════════════
  {
    id: "c2h-pow-ioc",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Interval of Convergence",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\left(-\\dfrac{1}{${a}},\\dfrac{1}{${a}}\\right]$`;
      return {
        problem: `จงหา interval of convergence ของ $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n(${a}x)^n}{n}$`,
        answer: ans,
        solution: buildSol([
          sec(`Ratio Test`),
          bul(`$\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\left|\\dfrac{(-1)^{n+1}(${a}x)^{n+1}}{n+1}\\cdot\\dfrac{n}{(-1)^n(${a}x)^n}\\right|=\\dfrac{n}{n+1}|${a}x|$`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n}{n+1}|${a}x|=|${a}x|$`),
          sec(`Radius of Convergence`),
          bul(`ลู่เข้าเมื่อ $|${a}x|<1$ → $|x|<\\dfrac{1}{${a}}$, $R=\\dfrac{1}{${a}}$`),
          sec(`ตรวจขอบ $x=\\dfrac{1}{${a}}$`),
          bul(`$\\displaystyle\\sum\\dfrac{(-1)^n}{n}$ → Alternating Harmonic → ลู่เข้า ✓`),
          sec(`ตรวจขอบ $x=-\\dfrac{1}{${a}}$`),
          bul(`$\\displaystyle\\sum\\dfrac{1}{n}$ → Harmonic → ลู่ออก ✗`),
          sec(`สรุป IOC`),
          para(`$\\left(-\\dfrac{1}{${a}},\\dfrac{1}{${a}}\\right]$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-pow-center-a",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Power series centered at $a$",
    params: { a: [1, 2, 3], r: [2, 3] },
    build: ({ a, r }) => {
      const ans = `$R=${r}$, IOC $=[${a-r},${a+r})$`;
      return {
        problem: `จงหา radius และ interval of convergence ของ $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(x-${a})^n}{${r}^n\\sqrt{n+1}}$`,
        answer: ans,
        solution: buildSol([
          sec(`Ratio Test`),
          bul(`$L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{|x-${a}|}{${r}}\\cdot\\sqrt{\\dfrac{n+1}{n+2}}=\\dfrac{|x-${a}|}{${r}}$`),
          sec(`Radius of Convergence`),
          bul(`$R=${r}$ (ลู่เข้าเมื่อ $|x-${a}|<${r}$)`),
          sec(`ตรวจขอบ $x=${a+r}$`),
          bul(`$\\displaystyle\\sum\\dfrac{1}{\\sqrt{n+1}}$ → p-series $p=\\tfrac{1}{2}<1$ → ลู่ออก ✗`),
          sec(`ตรวจขอบ $x=${a-r}$`),
          bul(`$\\displaystyle\\sum\\dfrac{(-1)^n}{\\sqrt{n+1}}$ → AST → ลู่เข้า ✓`),
          sec(`สรุป`),
          para(`IOC $=[${a-r},${a+r})$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-pow-from-geo",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Power series จาก Geometric",
    params: { a: [2, 3, 4] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{n+1}}{${a}^{n+1}}$, $|x|<${a}$`;
      return {
        problem: `หา power series ของ $f(x)=\\dfrac{x}{x+${a}}$ รอบ $x=0$`,
        answer: ans,
        solution: buildSol([
          sec(`จัดรูปเป็น Geometric Series`),
          bul(`$f(x)=\\dfrac{x}{${a}+x}=\\dfrac{x}{${a}}\\cdot\\dfrac{1}{1+x/${a}}=\\dfrac{x}{${a}}\\cdot\\dfrac{1}{1-(-x/${a})}$`),
          sec(`ใช้สูตร $\\dfrac{1}{1-u}=\\sum u^n$, $u=-\\dfrac{x}{${a}}$, $|u|<1$`),
          bul(`$\\dfrac{1}{1+x/${a}}=\\displaystyle\\sum_{n=0}^{\\infty}\\left(-\\dfrac{x}{${a}}\\right)^n=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^n}{${a}^n}$`),
          sec(`คูณด้วย $\\dfrac{x}{${a}}$`),
          para(`$f(x)=\\dfrac{x}{${a}}\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^n}{${a}^n}=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{n+1}}{${a}^{n+1}}$`),
          sec(`IOC`),
          bul(`$|x|<${a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-pow-differentiate",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Differentiate power series",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1} n x^{n-1}}{${a}^{n+1}}$, $|x|<${a}$`;
      return {
        problem: `หา power series ของ $\\dfrac{1}{(x+${a})^2}$ จาก series ของ $\\dfrac{1}{x+${a}}$`,
        answer: ans,
        solution: buildSol([
          sec(`เริ่มจาก series ที่รู้`),
          bul(`$\\dfrac{1}{x+${a}}=\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^n}{${a}^{n+1}}$, $|x|<${a}$`),
          sec(`อนุพันธ์ทั้งสองข้าง`),
          bul(`ด้านซ้าย: $\\dfrac{d}{dx}\\dfrac{1}{x+${a}}=-\\dfrac{1}{(x+${a})^2}$`),
          bul(`ด้านขวา: $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n n x^{n-1}}{${a}^{n+1}}$`),
          sec(`คูณด้วย $-1$`),
          para(`$\\dfrac{1}{(x+${a})^2}=\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1} n x^{n-1}}{${a}^{n+1}}$, $|x|<${a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-pow-maclaurin-ex",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Maclaurin series $e^{ax}$",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{${a}^n x^n}{n!}$, $(-\\infty,\\infty)$`;
      return {
        problem: `หา Maclaurin series ของ $e^{${a}x}$ และระบุ IOC`,
        answer: ans,
        solution: buildSol([
          sec(`คำนวณ Derivatives`),
          bul(`$f(x)=e^{${a}x}$: $f^{(n)}(x)=${a}^n e^{${a}x}$`),
          bul(`$f^{(n)}(0)=${a}^n$`),
          sec(`Maclaurin Series`),
          para(`$e^{${a}x}=\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(0)}{n!}x^n=\\sum_{n=0}^{\\infty}\\dfrac{${a}^n x^n}{n!}$`),
          sec(`ตรวจ IOC`),
          bul(`Ratio Test: $L=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{${a}|x|}{n+1}=0<1$ สำหรับทุก $x$`),
          sec("สรุป"),
          para(`IOC: $(-\\infty,\\infty)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-pow-taylor-poly",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Taylor polynomial degree n",
    params: { n: [3, 4], a: [0, 1] },
    build: ({ n, a }) => {
      const sinA = a===0 ? 0 : parseFloat(Math.sin(a).toFixed(4));
      const cosA = a===0 ? 1 : parseFloat(Math.cos(a).toFixed(4));
      const terms = a===0
        ? (n===3 ? `x-\\dfrac{x^3}{6}` : `x-\\dfrac{x^3}{6}`)
        : `\\sin(${a})+\\cos(${a})(x-${a})-\\dfrac{\\sin(${a})}{2}(x-${a})^2-\\dfrac{\\cos(${a})}{6}(x-${a})^3`;
      const ans = `$T_{${n}}(x)=${terms}$`;
      return {
        problem: `หา Taylor polynomial degree ${n} ของ $\\sin x$ ที่ $a=${a}$`,
        answer: ans,
        solution: buildSol([
          sec(`คำนวณ Derivatives ที่ $a=${a}$`),
          bul(`$f(x)=\\sin x$ → $f(${a})=${sinA}$`),
          bul(`$f'(x)=\\cos x$ → $f'(${a})=${cosA}$`),
          bul(`$f''(x)=-\\sin x$ → $f''(${a})=${-sinA}$`),
          bul(`$f'''(x)=-\\cos x$ → $f'''(${a})=${-cosA}$`),
          n===4 ? bul(`$f^{(4)}(x)=\\sin x$ → $f^{(4)}(${a})=${sinA}$`) : null,
          sec(`Taylor Formula`),
          para(`$T_{${n}}(x)=\\displaystyle\\sum_{k=0}^{${n}}\\dfrac{f^{(k)}(${a})}{k!}(x-${a})^k$`),
          sec(`แทนค่า (ตัดพจน์ที่ค่าสัมประสิทธิ์เป็นศูนย์)`),
          para(`$T_{${n}}(x)=${terms}$`),
        ].filter(Boolean), ans),
      };
    },
  },

  {
    id: "c2h-pow-taylor-error",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Taylor error bound",
    params: { n: [2, 3], x: [0.1, 0.5] },
    build: ({ n, x }) => {
      const factorial = Array.from({length:n+1},(_,i)=>i+1).reduce((a,b)=>a*b,1);
      const bound = (Math.E * Math.pow(x, n+1) / factorial).toFixed(6);
      const ans = `$|R_n|\\leq\\dfrac{e\\cdot${x}^{${n+1}}}{${n+1}!}\\approx${bound}$`;
      return {
        problem: `หา error bound เมื่อประมาณ $e^{${x}}$ ด้วย Taylor polynomial degree ${n}`,
        answer: ans,
        solution: buildSol([
          sec(`Taylor's Remainder Theorem`),
          para(`$|R_n(x)|\\leq\\dfrac{M}{(n+1)!}|x-a|^{n+1}$`),
          sec(`หา bound $M$ สำหรับ $f^{(n+1)}=e^x$ บน $[0,${x}]$`),
          bul(`$|e^x|\\leq e^{${x}}<e$ สำหรับ $x\\in[0,${x}]$`),
          bul(`เลือก $M=e\\approx2.718$`),
          sec(`คำนวณ`),
          bul(`$|R_{${n}}(${x})|\\leq\\dfrac{e\\cdot${x}^{${n+1}}}{${n+1}!}=\\dfrac{e\\cdot${Math.pow(x,n+1).toFixed(6)}}{${factorial}}\\approx${bound}$`),
          sec(`ตีความ`),
          para(`Error ไม่เกิน $${bound}$ ซึ่งเล็กมาก ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-pow-integrate",
    topic: "power_series", examType: "midterm", difficulty: "hard",
    subtopic: "Integrate power series",
    params: { a: [1] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+3}}{(2n+1)(2n+3)}+C$`;
      return {
        problem: `หา power series ของ $\\displaystyle\\int x\\arctan(x)\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("เริ่มจาก series ที่รู้"),
          bul(`$\\arctan(x)=\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+1}}{2n+1}$, $|x|\\leq1$`),
          sec("คูณด้วย $x$"),
          para(`$x\\arctan(x)=\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+2}}{2n+1}$`),
          sec("อินทิเกรตทีละพจน์"),
          bul(`$\\displaystyle\\int x\\arctan(x)dx=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n}{2n+1}\\cdot\\dfrac{x^{2n+3}}{2n+3}+C$`),
          sec("ผลลัพธ์"),
          para(`$=\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+3}}{(2n+1)(2n+3)}+C$`),
        ], ans),
      };
    },
  },

  // ═══════════════ VECTORS (8) ═══════════════
  {
    id: "c2h-vec-projection",
    topic: "vector", examType: "midterm", difficulty: "hard",
    subtopic: "Vector projection",
    params: { a: [1, 2, 3], b: [2, 3, 4], c: [1, 2, 3] },
    build: ({ a, b, c }) => {
      const u = [a, b, c], v = [c, a, b];
      const dot = u[0]*v[0]+u[1]*v[1]+u[2]*v[2];
      const vMag2 = v[0]**2+v[1]**2+v[2]**2;
      const ans = `$\\dfrac{${dot}}{${vMag2}}\\langle${c},${a},${b}\\rangle$`;
      return {
        problem: `หา $\\text{proj}_{\\vec{v}}\\vec{u}$ เมื่อ $\\vec{u}=\\langle${a},${b},${c}\\rangle$, $\\vec{v}=\\langle${c},${a},${b}\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec("สูตร Projection", "$\\text{proj}_{\\vec{v}}\\vec{u}=\\dfrac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$"),
          sec("คำนวณ $\\vec{u}\\cdot\\vec{v}$"),
          bul(`$=(${a})(${c})+(${b})(${a})+(${c})(${b})=${a*c}+${a*b}+${b*c}=${dot}$`),
          sec(`คำนวณ $|\\vec{v}|^2$`),
          bul(`$=${c}^2+${a}^2+${b}^2=${c*c}+${a*a}+${b*b}=${vMag2}$`),
          sec(`ผลลัพธ์`),
          para(`$\\text{proj}_{\\vec{v}}\\vec{u}=\\dfrac{${dot}}{${vMag2}}\\langle${c},${a},${b}\\rangle$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-angle-planes",
    topic: "vector", examType: "midterm", difficulty: "hard",
    subtopic: "มุมระหว่างระนาบ",
    params: { a: [1, 2], b: [1, 2, 3] },
    build: ({ a, b }) => {
      const n1=[a,b,1], n2=[b,a,2];
      const dot=n1[0]*n2[0]+n1[1]*n2[1]+n1[2]*n2[2];
      const m1sq=a*a+b*b+1, m2sq=b*b+a*a+4;
      const theta=(Math.acos(Math.abs(dot)/Math.sqrt(m1sq*m2sq))*180/Math.PI).toFixed(1);
      const ans = `$\\theta\\approx${theta}°$`;
      return {
        problem: `จงหามุมระหว่างระนาบ $${a}x+${b}y+z=5$ และ $${b}x+${a}y+2z=3$`,
        answer: ans,
        solution: buildSol([
          sec(`Normal vectors`),
          bul(`$\\vec{n_1}=\\langle${a},${b},1\\rangle$ (จากระนาบที่ 1)`),
          bul(`$\\vec{n_2}=\\langle${b},${a},2\\rangle$ (จากระนาบที่ 2)`),
          sec("สูตรมุม", "$\\cos\\theta=\\dfrac{|\\vec{n_1}\\cdot\\vec{n_2}|}{|\\vec{n_1}||\\vec{n_2}|}$"),
          sec("คำนวณ"),
          bul(`$\\vec{n_1}\\cdot\\vec{n_2}=(${a})(${b})+(${b})(${a})+(1)(2)=${dot}$`),
          bul(`$|\\vec{n_1}|=\\sqrt{${m1sq}}$, $|\\vec{n_2}|=\\sqrt{${m2sq}}$`),
          para(`$\\cos\\theta=\\dfrac{${Math.abs(dot)}}{\\sqrt{${m1sq}}\\cdot\\sqrt{${m2sq}}}$`),
          sec(`ผลลัพธ์`),
          para(`$\\theta=\\arccos\\dfrac{${Math.abs(dot)}}{\\sqrt{${m1sq*m2sq}}}\\approx${theta}°$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-dist-plane",
    topic: "vector", examType: "midterm", difficulty: "hard",
    subtopic: "ระยะจากจุดถึงระนาบ",
    params: { a: [1, 2, 3], b: [1, 2, 3], d: [1, 4, 9] },
    build: ({ a, b, d }) => {
      const num=Math.abs(a+b+1-d), denom2=a*a+b*b+1;
      const dist=(num/Math.sqrt(denom2)).toFixed(4);
      const ans = `$\\dfrac{${num}}{\\sqrt{${denom2}}}\\approx${dist}$`;
      return {
        problem: `จงหาระยะห่างจากจุด $(1,1,1)$ ถึงระนาบ $${a}x+${b}y+z=${d}$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรระยะ"),
          para(`$\\text{dist}=\\dfrac{|ax_0+by_0+cz_0-d|}{\\sqrt{a^2+b^2+c^2}}$`),
          sec("แทนค่า $(x_0,y_0,z_0)=(1,1,1)$"),
          bul(`เศษ: $|${a}(1)+${b}(1)+1(1)-${d}|=|${a+b+1-d}|=${num}$`),
          bul(`ส่วน: $\\sqrt{${a}^2+${b}^2+1^2}=\\sqrt{${denom2}}$`),
          sec(`ผลลัพธ์`),
          para(`$\\text{dist}=\\dfrac{${num}}{\\sqrt{${denom2}}}\\approx${dist}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-cross-area",
    topic: "vector", examType: "midterm", difficulty: "hard",
    subtopic: "พื้นที่ Parallelogram",
    params: { a: [1, 2], b: [2, 3], c: [1, 2, 3] },
    build: ({ a, b, c }) => {
      const u=[a,b,0], v=[0,c,a];
      const cross=[b*a-0,0-a*a,a*c-b*0];
      const area=Math.sqrt(cross.reduce((s,x)=>s+x*x,0)).toFixed(4);
      const mag2=cross.reduce((s,x)=>s+x*x,0);
      const ans = `$\\sqrt{${mag2}}\\approx${area}$`;
      return {
        problem: `หาพื้นที่ parallelogram: $\\vec{u}=\\langle${a},${b},0\\rangle$, $\\vec{v}=\\langle0,${c},${a}\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec("พื้นที่ = $|\\vec{u}\\times\\vec{v}|$"),
          sec("คำนวณ Cross Product"),
          para(`$\\vec{u}\\times\\vec{v}=\\det\\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\${a}&${b}&0\\\\0&${c}&${a}\\end{vmatrix}$`),
          bul(`$\\vec{i}(${b}\\cdot${a}-0\\cdot${c})-\\vec{j}(${a}\\cdot${a}-0\\cdot0)+\\vec{k}(${a}\\cdot${c}-${b}\\cdot0)$`),
          bul(`$=\\langle${cross[0]},${cross[1]},${cross[2]}\\rangle$`),
          sec(`Magnitude`),
          para(`$|\\vec{u}\\times\\vec{v}|=\\sqrt{${cross[0]}^2+(${cross[1]})^2+${cross[2]}^2}=\\sqrt{${mag2}}\\approx${area}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-parallelepiped",
    topic: "vector", examType: "midterm", difficulty: "hard",
    subtopic: "ปริมาตร Parallelepiped",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$${a**3}$`;
      return {
        problem: `หาปริมาตร parallelepiped: $\\vec{u}=\\langle${a},0,0\\rangle$, $\\vec{v}=\\langle0,${a},0\\rangle$, $\\vec{w}=\\langle0,0,${a}\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec("ปริมาตร = Scalar Triple Product"),
          para(`$V=|\\vec{u}\\cdot(\\vec{v}\\times\\vec{w})|$`),
          sec("หา $\\vec{v}\\times\\vec{w}$"),
          bul(`$\\vec{v}\\times\\vec{w}=\\det\\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\0&${a}&0\\\\0&0&${a}\\end{vmatrix}=\\langle${a**2},0,0\\rangle$`),
          sec(`Scalar Triple Product`),
          bul(`$\\vec{u}\\cdot(\\vec{v}\\times\\vec{w})=\\langle${a},0,0\\rangle\\cdot\\langle${a**2},0,0\\rangle=${a}\\cdot${a**2}=${a**3}$`),
          sec(`ผลลัพธ์`),
          para(`$V=${a**3}$ (ลูกบาศก์ด้าน $${a}$ → $V=${a}^3=${a**3}$) ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-unit-tangent",
    topic: "curve", examType: "final", difficulty: "hard",
    subtopic: "Unit Tangent Vector",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\dfrac{1}{\\sqrt{${a*a}+1}}\\langle-${a}\\sin t,${a}\\cos t,1\\rangle$`;
      return {
        problem: `หา unit tangent vector $\\vec{T}(t)$ ของ $\\vec{r}(t)=\\langle${a}\\cos t,${a}\\sin t,t\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec(`คำนวณ $\\vec{r}'(t)$`),
          bul(`$\\vec{r}'(t)=\\langle-${a}\\sin t,${a}\\cos t,1\\rangle$`),
          sec(`คำนวณ $|\\vec{r}'(t)|$`),
          bul(`$|\\vec{r}'|=\\sqrt{(-${a}\\sin t)^2+(${a}\\cos t)^2+1}$`),
          bul(`$=\\sqrt{${a**2}(\\sin^2t+\\cos^2t)+1}=\\sqrt{${a**2}+1}$ (constant!)`),
          sec(`Unit Tangent`),
          para(`$\\vec{T}(t)=\\dfrac{\\vec{r}'}{|\\vec{r}'|}=\\dfrac{1}{\\sqrt{${a**2}+1}}\\langle-${a}\\sin t,${a}\\cos t,1\\rangle$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-arc-length",
    topic: "curve", examType: "final", difficulty: "hard",
    subtopic: "Arc length parametric",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$${a}\\sqrt{${a**2}+1}$`;
      return {
        problem: `หาความยาวเส้นโค้ง $\\vec{r}(t)=\\langle${a}\\cos t,${a}\\sin t,t\\rangle$ จาก $t=0$ ถึง $t=${a}$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรความยาว", "$L=\\displaystyle\\int_a^b|\\vec{r}'(t)|\\,dt$"),
          sec("จาก template ก่อน"),
          bul(`$|\\vec{r}'(t)|=\\sqrt{${a**2}+1}$ (constant)`),
          sec(`อินทิเกรต`),
          para(`$L=\\displaystyle\\int_0^{${a}}\\sqrt{${a**2}+1}\\,dt=\\sqrt{${a**2}+1}\\cdot[t]_0^{${a}}$`),
          sec(`ผลลัพธ์`),
          para(`$L=${a}\\sqrt{${a**2}+1}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-vec-curvature",
    topic: "curve", examType: "final", difficulty: "hard",
    subtopic: "Curvature $\\kappa$",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\kappa=\\dfrac{${a}}{${a**2}+1}$`;
      return {
        problem: `จงหา curvature $\\kappa$ ของ helix $\\vec{r}(t)=\\langle${a}\\cos t,${a}\\sin t,t\\rangle$`,
        answer: ans,
        solution: buildSol([
          sec(`$\\vec{r}'$ และ $\\vec{r}''$`),
          bul(`$\\vec{r}'=\\langle-${a}\\sin t,${a}\\cos t,1\\rangle$, $|\\vec{r}'|=\\sqrt{${a**2}+1}$`),
          bul(`$\\vec{r}''=\\langle-${a}\\cos t,-${a}\\sin t,0\\rangle$`),
          sec(`Cross Product $\\vec{r}'\\times\\vec{r}''$`),
          bul(`$=\\langle${a}\\sin t,-${a}\\cos t,${a**2}\\rangle$`),
          bul(`$|\\vec{r}'\\times\\vec{r}''|=\\sqrt{${a**2}+${a**4}}=${a}\\sqrt{1+${a**2}}$`),
          sec(`สูตร Curvature`),
          para(`$\\kappa=\\dfrac{|\\vec{r}'\\times\\vec{r}''|}{|\\vec{r}'|^3}=\\dfrac{${a}\\sqrt{${a**2}+1}}{(\\sqrt{${a**2}+1})^3}=\\dfrac{${a}}{${a**2}+1}$`),
        ], ans),
      };
    },
  },

  // ═══════════════ LINES & PLANES (7) ═══════════════
  {
    id: "c2h-lp-plane-3pts",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "ระนาบผ่าน 3 จุด",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$x+y+z=${a}$`;
      return {
        problem: `จงหาสมการระนาบผ่าน $(${a},0,0)$, $(0,${a},0)$, $(0,0,${a})$`,
        answer: ans,
        solution: buildSol([
          sec(`สร้างเวกเตอร์บนระนาบ`),
          bul(`$\\vec{PQ}=\\langle-${a},${a},0\\rangle$`),
          bul(`$\\vec{PR}=\\langle-${a},0,${a}\\rangle$`),
          sec(`Normal vector = $\\vec{PQ}\\times\\vec{PR}$`),
          para(`$\\vec{n}=\\det\\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\-${a}&${a}&0\\\\-${a}&0&${a}\\end{vmatrix}=\\langle${a**2},${a**2},${a**2}\\rangle$`),
          sec(`หาร $${a**2}$`),
          bul(`$\\vec{n}=\\langle1,1,1\\rangle$`),
          sec(`สมการระนาบ`),
          para(`$1(x-${a})+1(y)+1(z)=0$ → $x+y+z=${a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-lp-intersection",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "เส้นตัดของสองระนาบ",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `เส้น parametric: $x=${a}-\\frac{3}{2}t,\\; y=\\frac{${a}}{2}+\\frac{1}{2}t,\\; z=t$`;
      return {
        problem: `จงหาสมการเส้นตัดของระนาบ $x+y+z=${2*a}$ และ $x-y+2z=${a}$`,
        answer: ans,
        solution: buildSol([
          sec("วิธี: แก้ระบบสมการหา x, y ในรูป z"),
          sec("บวกสองสมการ"),
          bul(`$2x+3z=3${a}$ → $x=\\dfrac{3${a}-3z}{2}$`),
          sec(`ลบสองสมการ`),
          bul(`$2y-z=${a}$ → $y=\\dfrac{${a}+z}{2}$`),
          sec(`ตั้ง Parameter $z=t$`),
          bul(`$x=\\dfrac{3${a}}{2}-\\dfrac{3}{2}t$`),
          bul(`$y=\\dfrac{${a}}{2}+\\dfrac{1}{2}t$`),
          bul(`$z=t$`),
          sec("ทิศทางเส้น"),
          para(`$\\vec{d}=\\langle-3,1,2\\rangle$ (สัมประสิทธิ์ $t$)`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-lp-line-plane-angle",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "มุมระหว่างเส้นตรงกับระนาบ",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const d=[a,a,a], n=[1,1,0];
      const dot=d[0]*n[0]+d[1]*n[1]+d[2]*n[2];
      const dMag=Math.sqrt(3*a*a), nMag=Math.sqrt(2);
      const sinT=Math.abs(dot)/(dMag*nMag);
      const theta=(Math.asin(sinT)*180/Math.PI).toFixed(1);
      const ans = `$\\theta\\approx${theta}°$`;
      return {
        problem: `จงหามุมระหว่างเส้นตรง $\\dfrac{x}{${a}}=\\dfrac{y}{${a}}=\\dfrac{z}{${a}}$ กับระนาบ $x+y=3$`,
        answer: ans,
        solution: buildSol([
          sec(`ระบุเวกเตอร์`),
          bul(`ทิศเส้นตรง: $\\vec{d}=\\langle${a},${a},${a}\\rangle$`),
          bul(`Normal ระนาบ: $\\vec{n}=\\langle1,1,0\\rangle$`),
          sec("สูตรมุมเส้นตรง-ระนาบ"),
          para(`$\\sin\\theta=\\dfrac{|\\vec{d}\\cdot\\vec{n}|}{|\\vec{d}||\\vec{n}|}$`),
          sec("คำนวณ"),
          bul(`$\\vec{d}\\cdot\\vec{n}=${dot}$`),
          bul(`$|\\vec{d}|=\\sqrt{${3*a*a}}=${a}\\sqrt{3}$, $|\\vec{n}|=\\sqrt{2}$`),
          para(`$\\sin\\theta=\\dfrac{${dot}}{${a}\\sqrt{3}\\cdot\\sqrt{2}}=\\dfrac{${dot}}{${a}\\sqrt{6}}$`),
          sec(`ผลลัพธ์`),
          para(`$\\theta=\\arcsin\\dfrac{${dot}}{${a}\\sqrt{6}}\\approx${theta}°$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-lp-skew-dist",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "ระยะระหว่างเส้น skew",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$${a}$`;
      return {
        problem: `หาระยะห่างระหว่าง skew lines: $\\ell_1$: $(t,0,0)$ และ $\\ell_2$: $(0,s+${a},${a})$`,
        answer: ans,
        solution: buildSol([
          sec(`ระบุ Points และ Directions`),
          bul(`$P=(0,0,0)$, $\\vec{d_1}=\\langle1,0,0\\rangle$`),
          bul(`$Q=(0,${a},${a})$, $\\vec{d_2}=\\langle0,1,0\\rangle$`),
          sec("สูตรระยะ Skew Lines"),
          para(`$\\text{dist}=\\dfrac{|\\vec{PQ}\\cdot(\\vec{d_1}\\times\\vec{d_2})|}{|\\vec{d_1}\\times\\vec{d_2}|}$`),
          sec("คำนวณ"),
          bul(`$\\vec{PQ}=\\langle0,${a},${a}\\rangle$`),
          bul(`$\\vec{d_1}\\times\\vec{d_2}=\\langle0,0,1\\rangle$`),
          bul(`$|\\vec{PQ}\\cdot\\langle0,0,1\\rangle|=|${a}|=${a}$`),
          bul(`$|\\vec{d_1}\\times\\vec{d_2}|=1$`),
          sec(`ผลลัพธ์`),
          para(`$\\text{dist}=${a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-lp-closest-point",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "จุดใกล้ที่สุดบนเส้นตรง",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\left(\\dfrac{${2*a}}{3},\\dfrac{${2*a}}{3},\\dfrac{${2*a}}{3}\\right)$`;
      return {
        problem: `จงหาจุดบนเส้น $x=y=z=t$ ที่ใกล้ที่สุดกับจุด $(${a},${a},0)$`,
        answer: ans,
        solution: buildSol([
          sec(`เวกเตอร์จากจุดบนเส้นถึงจุดที่กำหนด`),
          bul(`จุดบนเส้น: $(t,t,t)$`),
          bul(`$\\vec{v}=\\langle${a}-t,${a}-t,0-t\\rangle$`),
          sec(`เงื่อนไขตั้งฉาก ($\\vec{v}\\perp\\vec{d}$)`),
          bul(`$\\vec{d}=\\langle1,1,1\\rangle$`),
          bul(`$\\vec{v}\\cdot\\vec{d}=0$: $(${a}-t)+(${a}-t)+(-t)=0$`),
          para(`$${2*a}-3t=0$ → $t=\\dfrac{${2*a}}{3}$`),
          sec(`จุดใกล้ที่สุด`),
          para(`$\\left(\\dfrac{${2*a}}{3},\\dfrac{${2*a}}{3},\\dfrac{${2*a}}{3}\\right)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-lp-normal-to-plane",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "Normal line to surface",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\dfrac{x-${a}}{${2*a}}=\\dfrac{y-${a}}{${2*a}}=\\dfrac{z-${2*a*a}}{-1}$`;
      return {
        problem: `จงหาสมการเส้น normal ต่อพื้นผิว $z=x^2+y^2$ ที่จุด $(${a},${a},${2*a*a})$`,
        answer: ans,
        solution: buildSol([
          sec("เขียนเป็น Level Surface", "$F(x,y,z)=x^2+y^2-z=0$"),
          sec("หา Gradient $\\nabla F$"),
          bul(`$F_x=2x$, $F_y=2y$, $F_z=-1$`),
          bul(`$\\nabla F(${a},${a},${2*a*a})=\\langle${2*a},${2*a},-1\\rangle$ ← ทิศ normal`),
          sec(`สมการเส้น Normal`),
          para(`$\\dfrac{x-${a}}{${2*a}}=\\dfrac{y-${a}}{${2*a}}=\\dfrac{z-${2*a*a}}{-1}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-lp-foot-perp",
    topic: "line_plane", examType: "midterm", difficulty: "hard",
    subtopic: "เชิงตั้งฉากลงบนระนาบ",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\left(\\dfrac{${2*a}}{3},-\\dfrac{${a}}{3},-\\dfrac{${a}}{3}\\right)$`;
      return {
        problem: `จงหาเชิงตั้งฉากจาก $(${a},0,0)$ ลงบนระนาบ $x+y+z=0$`,
        answer: ans,
        solution: buildSol([
          sec(`เส้น Normal จาก $(${a},0,0)$`),
          bul(`$\\vec{n}=\\langle1,1,1\\rangle$ (normal ของระนาบ)`),
          bul(`เส้น: $(${a}+t, t, t)$`),
          sec(`แทนลงในสมการระนาบ`),
          para(`$(${a}+t)+t+t=0$ → $${a}+3t=0$ → $t=-\\dfrac{${a}}{3}$`),
          sec(`จุดเชิงตั้งฉาก`),
          bul(`$x=${a}+\\left(-\\dfrac{${a}}{3}\\right)=\\dfrac{${2*a}}{3}$`),
          bul(`$y=-\\dfrac{${a}}{3}$, $z=-\\dfrac{${a}}{3}$`),
          sec(`ระยะ`),
          para(`$|t|\\cdot|\\vec{n}|=\\dfrac{${a}}{3}\\cdot\\sqrt{3}=\\dfrac{${a}}{\\sqrt{3}}$`),
        ], ans),
      };
    },
  },

  // ═══════════════ MULTIVARIABLE (12) ═══════════════
  {
    id: "c2h-mv-limit-path",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Limit 2 ตัวแปร (path test)",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `ลิมิตไม่มีค่า (path-dependent)`;
      return {
        problem: `แสดงว่า $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{${a}x^2y}{x^4+y^2}$ ไม่มีค่า`,
        answer: ans,
        solution: buildSol([
          sec("เส้นทางที่ 1", "$y=0$"),
          bul(`$\\dfrac{${a}x^2\\cdot0}{x^4+0}=0$ → ลิมิต $=0$`),
          sec("เส้นทางที่ 2", "$y=x^2$"),
          bul(`$\\dfrac{${a}x^2\\cdot x^2}{x^4+x^4}=\\dfrac{${a}x^4}{2x^4}=\\dfrac{${a}}{2}$ → ลิมิต $=\\dfrac{${a}}{2}$`),
          sec("เส้นทางทั่วไป", "$y=kx^2$"),
          bul(`$\\dfrac{${a}x^2\\cdot kx^2}{x^4+k^2x^4}=\\dfrac{${a}k}{1+k^2}$ ขึ้นกับ $k$`),
          sec("สรุป"),
          para(`ลิมิตต่างกันตามเส้นทาง → ลิมิตไม่มีค่า ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-chain-rule",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Chain rule 2 ตัวแปร",
    params: { a: [1, 2], b: [1, 2] },
    build: ({ a, b }) => {
      const ans = `$${a*b*(a+b)}\\cos(2t)$`;
      return {
        problem: `กำหนด $z=${a}xy+${b}xy$ และ $x=${a}\\sin t$, $y=${b}\\cos t$ จงหา $\\dfrac{dz}{dt}$`,
        answer: ans,
        solution: buildSol([
          sec("ลดรูป", `$z=${a+b}xy$`),
          sec(`Partial derivatives`),
          bul(`$\\dfrac{\\partial z}{\\partial x}=${a+b}y$`),
          bul(`$\\dfrac{\\partial z}{\\partial y}=${a+b}x$`),
          sec(`Derivatives w.r.t. $t$`),
          bul(`$\\dfrac{dx}{dt}=${a}\\cos t$, $\\dfrac{dy}{dt}=-${b}\\sin t$`),
          sec(`Chain Rule`),
          para(`$\\dfrac{dz}{dt}=${a+b}y\\cdot${a}\\cos t+${a+b}x\\cdot(-${b}\\sin t)$`),
          sec(`แทน $x,y$`),
          bul(`$=${a*(a+b)*b}\\cos^2t-${b*(a+b)*a}\\sin^2t$`),
          bul(`$=${a*b*(a+b)}(\\cos^2t-\\sin^2t)=${a*b*(a+b)}\\cos(2t)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-chain-polar",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Chain rule (Polar)",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$${2*a}r\\cos(2\\theta)$`;
      return {
        problem: `กำหนด $z=${a}(x^2-y^2)$, $x=r\\cos\\theta$, $y=r\\sin\\theta$ จงหา $\\dfrac{\\partial z}{\\partial r}$`,
        answer: ans,
        solution: buildSol([
          sec(`Partial derivatives ของ $z$`),
          bul(`$\\dfrac{\\partial z}{\\partial x}=${2*a}x$, $\\dfrac{\\partial z}{\\partial y}=-${2*a}y$`),
          sec("Partial derivatives ของ $x,y$ w.r.t. $r$"),
          bul(`$\\dfrac{\\partial x}{\\partial r}=\\cos\\theta$, $\\dfrac{\\partial y}{\\partial r}=\\sin\\theta$`),
          sec("Chain Rule"),
          para(`$\\dfrac{\\partial z}{\\partial r}=${2*a}x\\cos\\theta-${2*a}y\\sin\\theta$`),
          sec(`แทน $x=r\\cos\\theta$, $y=r\\sin\\theta$`),
          para(`$=${2*a}r\\cos^2\\theta-${2*a}r\\sin^2\\theta=${2*a}r(\\cos^2\\theta-\\sin^2\\theta)=${2*a}r\\cos(2\\theta)$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-directional",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Directional Derivative",
    params: { a: [1, 2], b: [1, 2] },
    build: ({ a, b }) => {
      const ans = `$D_{\\vec{u}}f(${a},${b})=\\dfrac{${2*(a+b)}}{\\sqrt{2}}=${(a+b)*Math.sqrt(2).toFixed(4)}$`;
      return {
        problem: `หา directional derivative ของ $f(x,y)=x^2+y^2$ ที่ $(${a},${b})$ ทิศ $\\vec{u}=\\left\\langle\\dfrac{1}{\\sqrt{2}},\\dfrac{1}{\\sqrt{2}}\\right\\rangle$`,
        answer: `$\\dfrac{${2*(a+b)}}{\\sqrt{2}}=${((a+b)*Math.SQRT2).toFixed(4)}$`,
        solution: buildSol([
          sec("Gradient", "$\\nabla f=\\langle f_x,f_y\\rangle$"),
          bul(`$f_x=2x=2(${a})=${2*a}$`),
          bul(`$f_y=2y=2(${b})=${2*b}$`),
          bul(`$\\nabla f(${a},${b})=\\langle${2*a},${2*b}\\rangle$`),
          sec("ตรวจ $|\\vec{u}|=1$"),
          bul(`$|\\vec{u}|=\\sqrt{1/2+1/2}=1$ ✓`),
          sec("Directional Derivative"),
          para(`$D_{\\vec{u}}f=\\nabla f\\cdot\\vec{u}=\\dfrac{${2*a}}{\\sqrt{2}}+\\dfrac{${2*b}}{\\sqrt{2}}=\\dfrac{${2*(a+b)}}{\\sqrt{2}}$`),
        ], `$\\dfrac{${2*(a+b)}}{\\sqrt{2}}$`),
      };
    },
  },

  {
    id: "c2h-mv-gradient",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Gradient and steepest direction",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\nabla f(${a},${a})=\\langle${2*a},${2*a}\\rangle$, ทิศ $\\langle\\tfrac{1}{\\sqrt{2}},\\tfrac{1}{\\sqrt{2}}\\rangle$`;
      return {
        problem: `หา gradient ของ $f(x,y)=x^2+y^2$ ที่ $(${a},${a})$ และบอกทิศที่ $f$ เพิ่มเร็วที่สุด`,
        answer: ans,
        solution: buildSol([
          sec(`Gradient`),
          bul(`$\\nabla f=\\langle2x,2y\\rangle$`),
          bul(`$\\nabla f(${a},${a})=\\langle${2*a},${2*a}\\rangle$`),
          sec(`ทิศที่เพิ่มเร็วที่สุด = Unit Gradient`),
          bul(`$|\\nabla f|=\\sqrt{(${2*a})^2+(${2*a})^2}=${2*a}\\sqrt{2}$`),
          bul(`$\\hat{u}=\\dfrac{\\langle${2*a},${2*a}\\rangle}{${2*a}\\sqrt{2}}=\\left\\langle\\dfrac{1}{\\sqrt{2}},\\dfrac{1}{\\sqrt{2}}\\right\\rangle$`),
          sec(`อัตราเพิ่มสูงสุด`),
          para(`$|\\nabla f|=${2*a}\\sqrt{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-critical-dtest",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Critical points + Second Derivative Test",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$(0,0)$ = saddle, $(\\pm${a},\\pm${a})$ = local min`;
      return {
        problem: `จงหา critical points ของ $f(x,y)=x^4+y^4-${2*a*a}(x^2+y^2)$ และจำแนก`,
        answer: ans,
        solution: buildSol([
          sec(`หา Critical Points ($f_x=f_y=0$)`),
          bul(`$f_x=4x^3-${4*a*a}x=4x(x^2-${a*a})=0$ → $x=0,\\pm${a}$`),
          bul(`$f_y=4y^3-${4*a*a}y=0$ → $y=0,\\pm${a}$`),
          sec(`Second Derivatives`),
          bul(`$f_{xx}=12x^2-${4*a*a}$, $f_{yy}=12y^2-${4*a*a}$, $f_{xy}=0$`),
          sec(`D-Test ที่ $(0,0)$`),
          bul(`$f_{xx}=-${4*a*a}<0$, $D=(-${4*a*a})(-${4*a*a})>0$ → local max`),
          sec(`D-Test ที่ $(\\pm${a},\\pm${a})$`),
          bul(`$f_{xx}=12${a*a}-${4*a*a}=${8*a*a}>0$, $D=${8*a*a}^2>0$ → local min`),
          sec(`D-Test ที่ $(\\pm${a},0)$, $(0,\\pm${a})$`),
          bul(`$D=(-${4*a*a})(${8*a*a})<0$ → saddle points`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-lagrange",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Lagrange Multipliers",
    params: { a: [1, 4, 9] },
    build: ({ a }) => {
      const s = Math.sqrt(3*a);
      const ans = `$x=y=z=\\sqrt{${a}/3}=\\dfrac{\\sqrt{${3*a}}}{3}\\approx${(s/3).toFixed(3)}$`;
      return {
        problem: `ใช้ Lagrange multipliers หาค่าสูงสุดของ $xyz$ ภายใต้ $x+y+z=\\sqrt{${3*a}}$ ($x,y,z>0$)`,
        answer: ans,
        solution: buildSol([
          sec("ตั้งสมการ $\\nabla f=\\lambda\\nabla g$"),
          bul(`$\\nabla f=\\langle yz,xz,xy\\rangle$`),
          bul(`$\\nabla g=\\langle1,1,1\\rangle$`),
          sec("ระบบสมการ"),
          bul(`$yz=\\lambda$, $xz=\\lambda$, $xy=\\lambda$`),
          sec("แก้ระบบ"),
          bul(`$yz=xz$ → $y=x$ (เมื่อ $z>0$)`),
          bul(`$xz=xy$ → $z=y$`),
          bul(`ดังนั้น $x=y=z$`),
          sec("แทน constraint"),
          para(`$3x=\\sqrt{${3*a}}$ → $x=\\dfrac{\\sqrt{${3*a}}}{3}=\\sqrt{\\dfrac{${a}}{3}}$`),
          sec(`ค่าสูงสุด`),
          para(`$f_{\\max}=\\left(\\dfrac{\\sqrt{${3*a}}}{3}\\right)^3=\\dfrac{(${3*a})^{3/2}}{27}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-total-diff",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Total Differential",
    params: { a: [1, 2], b: [1, 2, 3] },
    build: ({ a, b }) => {
      const ans = `$dz=${a}y^{${b}}dx+${a*b}xy^{${b-1}}dy$`;
      return {
        problem: `จงหา total differential $dz$ ของ $z=${a}xy^{${b}}$`,
        answer: ans,
        solution: buildSol([
          sec(`Partial Derivatives`),
          bul(`$\\dfrac{\\partial z}{\\partial x}=${a}y^{${b}}$`),
          bul(`$\\dfrac{\\partial z}{\\partial y}=${a}\\cdot${b}xy^{${b-1}}=${a*b}xy^{${b-1}}$`),
          sec("Total Differential Formula"),
          para(`$dz=\\dfrac{\\partial z}{\\partial x}dx+\\dfrac{\\partial z}{\\partial y}dy$`),
          sec("แทนค่า"),
          para(`$dz=${a}y^{${b}}dx+${a*b}xy^{${b-1}}dy$`),
          sec(`ประยุกต์`),
          para(`ถ้า $\\Delta x,\\Delta y$ น้อยๆ: $\\Delta z\\approx dz=${a}y^{${b}}\\Delta x+${a*b}xy^{${b-1}}\\Delta y$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-implicit-partial",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Implicit partial derivative",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{${2*a}x+yz}{xy+${2*a}z}$`;
      return {
        problem: `กำหนด $${a}x^2+xyz+${a}z^2=1$ จงหา $\\dfrac{\\partial z}{\\partial x}$`,
        answer: ans,
        solution: buildSol([
          sec("Implicit Differentiation", "อนุพันธ์ทั้งสมการเทียบ $x$"),
          bul(`$\\dfrac{\\partial}{\\partial x}(${a}x^2)=${2*a}x$`),
          bul(`$\\dfrac{\\partial}{\\partial x}(xyz)=yz+xy\\dfrac{\\partial z}{\\partial x}$ (product rule)`),
          bul(`$\\dfrac{\\partial}{\\partial x}(${a}z^2)=${2*a}z\\dfrac{\\partial z}{\\partial x}$`),
          sec(`ตั้งสมการ`),
          para(`$${2*a}x+yz+xy\\dfrac{\\partial z}{\\partial x}+${2*a}z\\dfrac{\\partial z}{\\partial x}=0$`),
          sec(`แก้ $\\dfrac{\\partial z}{\\partial x}$`),
          para(`$(xy+${2*a}z)\\dfrac{\\partial z}{\\partial x}=-(${2*a}x+yz)$`),
          para(`$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{${2*a}x+yz}{xy+${2*a}z}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-linear-approx",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Linear approximation 2 ตัวแปร",
    params: { a: [1, 2], b: [1, 2] },
    build: ({ a, b }) => {
      const ans = `$L(x,y)=${a*a+b*b}+${2*a}(x-${a})+${2*b}(y-${b})$`;
      return {
        problem: `หา linearization ของ $f(x,y)=x^2+y^2$ ที่ $(${a},${b})$`,
        answer: ans,
        solution: buildSol([
          sec(`สูตร Linearization`),
          para(`$L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$`),
          sec(`คำนวณค่าที่ $(${a},${b})$`),
          bul(`$f(${a},${b})=${a}^2+${b}^2=${a*a+b*b}$`),
          bul(`$f_x=2x=2(${a})=${2*a}$`),
          bul(`$f_y=2y=2(${b})=${2*b}$`),
          sec(`Linearization`),
          para(`$L(x,y)=${a*a+b*b}+${2*a}(x-${a})+${2*b}(y-${b})$`),
          sec(`ตัวอย่างการใช้`),
          para(`$f(${a+0.1},${b+0.1})\\approx L(${a+0.1},${b+0.1})=${a*a+b*b}+${2*a}(0.1)+${2*b}(0.1)=${a*a+b*b+0.1*(2*a+2*b)}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-saddle-check",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Saddle point",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$(0,0)$ เป็น saddle point`;
      return {
        problem: `จำแนก critical point ของ $f(x,y)=${a}x^2-${a}y^2$ โดย Second Derivative Test`,
        answer: ans,
        solution: buildSol([
          sec(`หา Critical Point`),
          bul(`$f_x=${2*a}x=0$ → $x=0$`),
          bul(`$f_y=-${2*a}y=0$ → $y=0$`),
          bul(`Critical point: $(0,0)$`),
          sec(`Second Derivatives`),
          bul(`$f_{xx}=${2*a}$, $f_{yy}=-${2*a}$, $f_{xy}=0$`),
          sec(`D-Test`),
          bul(`$D=f_{xx}f_{yy}-(f_{xy})^2=(${2*a})(-${2*a})-0=-${4*a*a}<0$`),
          sec("สรุป"),
          para(`$D<0$ → $(0,0)$ เป็น **saddle point** ✓`),
          para(`($f$ เพิ่มในทิศ $x$ แต่ลดในทิศ $y$)`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-mv-second-partial",
    topic: "multivariable", examType: "final", difficulty: "hard",
    subtopic: "Clairaut's Theorem",
    params: { a: [1, 2], b: [1, 2, 3] },
    build: ({ a, b }) => {
      const ans = `$f_{xy}=f_{yx}=${a*b}x^{${a-1}}y^{${b-1}}$ ✓`;
      return {
        problem: `ตรวจสอบ Clairaut's theorem สำหรับ $f(x,y)=x^{${a}}y^{${b}}$`,
        answer: ans,
        solution: buildSol([
          sec(`คำนวณ $f_{xy}$ (ดิฟ $x$ ก่อน แล้ว $y$)`),
          bul(`$f_x=${a}x^{${a-1}}y^{${b}}$`),
          bul(`$f_{xy}=${a}\\cdot${b}x^{${a-1}}y^{${b-1}}=${a*b}x^{${a-1}}y^{${b-1}}$`),
          sec(`คำนวณ $f_{yx}$ (ดิฟ $y$ ก่อน แล้ว $x$)`),
          bul(`$f_y=${b}x^{${a}}y^{${b-1}}$`),
          bul(`$f_{yx}=${b}\\cdot${a}x^{${a-1}}y^{${b-1}}=${a*b}x^{${a-1}}y^{${b-1}}$`),
          sec(`เปรียบเทียบ`),
          para(`$f_{xy}=f_{yx}=${a*b}x^{${a-1}}y^{${b-1}}$ → **Clairaut's Theorem ✓**`),
        ], ans),
      };
    },
  },

  // ═══════════════ DOUBLE INTEGRALS (8) ═══════════════
  {
    id: "c2h-dbl-change-order-tri",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "เปลี่ยนลำดับ (triangle)",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\int_0^{${a}}\\int_0^{y}f(x,y)\\,dx\\,dy$`;
      return {
        problem: `เปลี่ยนลำดับ: $\\displaystyle\\int_0^{${a}}\\int_x^{${a}}f(x,y)\\,dy\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec(`วิเคราะห์ Region`),
          bul(`โดเมนเดิม: $0\\leq x\\leq${a}$, $x\\leq y\\leq${a}$`),
          bul(`เป็นสามเหลี่ยมที่จุดยอด $(0,0)$, $(${a},${a})$, $(0,${a})$`),
          sec(`เปลี่ยนการมองจาก $y$ เป็นหลัก`),
          bul(`$0\\leq y\\leq${a}$`),
          bul(`สำหรับ $y$ คงที่: $0\\leq x\\leq y$`),
          sec(`รูปแบบใหม่`),
          para(`$\\displaystyle\\int_0^{${a}}\\int_0^{y}f(x,y)\\,dx\\,dy$`),
          sec(`ตรวจสอบ Area`),
          para(`ทั้งสองรูปแบบมีพื้นที่ $=\\dfrac{${a}^2}{2}$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-dbl-change-order-parabola",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "เปลี่ยนลำดับ (parabola)",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\displaystyle\\int_0^{${a*a}}\\int_{\\sqrt{y}}^{${a}}f(x,y)\\,dx\\,dy$`;
      return {
        problem: `เปลี่ยนลำดับ: $\\displaystyle\\int_0^{${a}}\\int_0^{x^2}f(x,y)\\,dy\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec(`วิเคราะห์ Region`),
          bul(`โดเมนเดิม: $0\\leq x\\leq${a}$, $0\\leq y\\leq x^2$`),
          bul(`ล้อมด้วย $y=x^2$, $x=0$, $x=${a}$`),
          sec(`เปลี่ยนมอง (y-simple)`),
          bul(`$y$ วิ่งจาก $0$ ถึง $${a}^2=${a*a}$`),
          bul(`สำหรับ $y$ คงที่: $x$ วิ่งจาก $\\sqrt{y}$ ถึง $${a}$`),
          sec(`รูปแบบใหม่`),
          para(`$\\displaystyle\\int_0^{${a*a}}\\int_{\\sqrt{y}}^{${a}}f(x,y)\\,dx\\,dy$`),
          sec("ประโยชน์"),
          para(`เช่น ถ้า $f=e^{x^3}$ → ลำดับเดิมอินทิเกรตไม่ได้ แต่ลำดับใหม่ทำได้`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-dbl-polar",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "Double integral in Polar",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$\\dfrac{\\pi${a > 1 ? a**4 : ``}}{2}$`;
      const val = `$\\dfrac{${a**4}\\pi}{2}$`;
      return {
        problem: `หา $\\displaystyle\\iint_D(x^2+y^2)\\,dA$ เมื่อ $D: x^2+y^2\\leq${a*a}$`,
        answer: val,
        solution: buildSol([
          sec("แปลงเป็น Polar", "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $dA=r\\,dr\\,d\\theta$"),
          bul(`$x^2+y^2=r^2$`),
          bul(`โดเมน: $0\\leq r\\leq${a}$, $0\\leq\\theta\\leq2\\pi$`),
          sec(`ตั้งอินทิกรัล`),
          para(`$\\displaystyle\\iint_D r^2\\cdot r\\,dr\\,d\\theta=\\int_0^{2\\pi}d\\theta\\int_0^{${a}}r^3\\,dr$`),
          sec(`คำนวณ`),
          bul(`$\\displaystyle\\int_0^{2\\pi}d\\theta=2\\pi$`),
          bul(`$\\displaystyle\\int_0^{${a}}r^3\\,dr=\\left[\\dfrac{r^4}{4}\\right]_0^{${a}}=\\dfrac{${a**4}}{4}$`),
          sec(`ผลลัพธ์`),
          para(`$V=2\\pi\\cdot\\dfrac{${a**4}}{4}=\\dfrac{${a**4}\\pi}{2}$`),
        ], val),
      };
    },
  },

  {
    id: "c2h-dbl-volume",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "ปริมาตรใต้ $z=f(x,y)$",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$${a}$`;
      return {
        problem: `หาปริมาตรใต้ $z=${a}(x+y)$ เหนือ $R=[0,1]\\times[0,1]$`,
        answer: ans,
        solution: buildSol([
          sec(`ตั้งอินทิกรัลซ้อน`),
          para(`$V=\\displaystyle\\int_0^1\\int_0^1${a}(x+y)\\,dy\\,dx$`),
          sec(`อินทิกรัลชั้นใน (เทียบ $y$)`),
          bul(`$\\displaystyle\\int_0^1${a}(x+y)dy=\\left[${a}xy+\\dfrac{${a}y^2}{2}\\right]_0^1=${a}x+\\dfrac{${a}}{2}$`),
          sec(`อินทิกรัลชั้นนอก (เทียบ $x$)`),
          bul(`$\\displaystyle\\int_0^1\\left(${a}x+\\dfrac{${a}}{2}\\right)dx=\\left[\\dfrac{${a}x^2}{2}+\\dfrac{${a}x}{2}\\right]_0^1=\\dfrac{${a}}{2}+\\dfrac{${a}}{2}=${a}$`),
          sec(`ผลลัพธ์`),
          para(`$V=${a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-dbl-ey2",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "เปลี่ยนลำดับ ($e^{y^2}$)",
    params: { a: [1] },
    build: ({ a }) => {
      const ans = `$\\dfrac{e-1}{2}$`;
      return {
        problem: `จงหา $\\displaystyle\\int_0^1\\int_x^1 e^{y^2}\\,dy\\,dx$ โดยการเปลี่ยนลำดับ`,
        answer: ans,
        solution: buildSol([
          sec("วิเคราะห์ Region"),
          bul(`โดเมนเดิม: $0\\leq x\\leq1$, $x\\leq y\\leq1$ → สามเหลี่ยม`),
          sec("เปลี่ยนลำดับ"),
          bul(`$0\\leq y\\leq1$, $0\\leq x\\leq y$`),
          para(`$\\displaystyle\\int_0^1\\int_0^y e^{y^2}\\,dx\\,dy$`),
          sec("อินทิกรัลชั้นใน"),
          bul(`$\\displaystyle\\int_0^y e^{y^2}dx=e^{y^2}[x]_0^y=ye^{y^2}$`),
          sec("อินทิกรัลชั้นนอก (sub $u=y^2$)"),
          bul(`$\\displaystyle\\int_0^1 ye^{y^2}dy=\\dfrac{1}{2}\\int_0^1 e^u\\,du=\\dfrac{1}{2}[e^u]_0^1=\\dfrac{e-1}{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-dbl-mass",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "Mass of lamina",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\dfrac{${a}}{4}$`;
      return {
        problem: `หา mass ของ lamina บน $R=[0,1]^2$ ที่มี density $\\rho(x,y)=${a}xy$`,
        answer: ans,
        solution: buildSol([
          sec(`$M=\\displaystyle\\iint_R\\rho\\,dA$`),
          para(`$=\\displaystyle\\int_0^1\\int_0^1${a}xy\\,dy\\,dx$`),
          sec(`อินทิกรัลชั้นใน`),
          bul(`$\\displaystyle\\int_0^1${a}xy\\,dy=${a}x\\left[\\dfrac{y^2}{2}\\right]_0^1=\\dfrac{${a}x}{2}$`),
          sec(`อินทิกรัลชั้นนอก`),
          bul(`$\\displaystyle\\int_0^1\\dfrac{${a}x}{2}dx=\\dfrac{${a}}{2}\\left[\\dfrac{x^2}{2}\\right]_0^1=\\dfrac{${a}}{4}$`),
          sec(`ผลลัพธ์`),
          para(`$M=\\dfrac{${a}}{4}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-dbl-avgval",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "Average value over region",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$${a}$`;
      return {
        problem: `หาค่าเฉลี่ยของ $f(x,y)=${a}(x+y)$ บน $D=[0,1]\\times[0,1]$`,
        answer: ans,
        solution: buildSol([
          sec("สูตรค่าเฉลี่ย"),
          para(`$f_{avg}=\\dfrac{1}{\\text{Area}(D)}\\displaystyle\\iint_D f\\,dA$`),
          sec("Area$(D)$"),
          bul(`$\\text{Area}=[0,1]^2=1$`),
          sec("คำนวณ Double Integral"),
          bul(`$\\displaystyle\\iint_D${a}(x+y)dA=\\int_0^1\\int_0^1${a}(x+y)dydx$`),
          bul(`$=\\int_0^1\\left(${a}x+\\dfrac{${a}}{2}\\right)dx=\\dfrac{${a}}{2}+\\dfrac{${a}}{2}=${a}$`),
          sec(`ผลลัพธ์`),
          para(`$f_{avg}=\\dfrac{${a}}{1}=${a}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-dbl-polar-area",
    topic: "double_integral", examType: "final", difficulty: "hard",
    subtopic: "Area of cardioid",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const areaCoeff = a**2 === 1 ? "" : String(a**2);
      const ans = `$\\dfrac{3${areaCoeff}\\pi}{2}$`;
      return {
        problem: `หาพื้นที่ cardioid $r=${a}(1+\\cos\\theta)$`,
        answer: ans,
        solution: buildSol([
          sec(`พื้นที่โดย Polar Double Integral`),
          para(`$A=\\displaystyle\\int_0^{2\\pi}\\int_0^{${a}(1+\\cos\\theta)}r\\,dr\\,d\\theta$`),
          sec(`อินทิกรัลชั้นใน`),
          bul(`$\\displaystyle\\int_0^{${a}(1+\\cos\\theta)}r\\,dr=\\dfrac{${a}^2(1+\\cos\\theta)^2}{2}$`),
          sec("ขยาย $(1+\\cos\\theta)^2$"),
          bul(`$=1+2\\cos\\theta+\\cos^2\\theta=\\dfrac{3}{2}+2\\cos\\theta+\\dfrac{\\cos2\\theta}{2}$`),
          sec("อินทิกรัลชั้นนอก"),
          bul(`$A=\\dfrac{${a**2}}{2}\\displaystyle\\int_0^{2\\pi}\\left(\\dfrac{3}{2}+2\\cos\\theta+\\dfrac{\\cos2\\theta}{2}\\right)d\\theta$`),
          bul(`$=\\dfrac{${a**2}}{2}\\cdot3\\pi=\\dfrac{3${areaCoeff}\\pi}{2}$`),
        ], ans),
      };
    },
  },

  // ═══════════════ ODE (5) ═══════════════
  {
    id: "c2h-ode-homogeneous",
    topic: "ode", examType: "final", difficulty: "hard",
    subtopic: "Homogeneous ODE",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const ans = `$\\ln(\\ln(y/x))=${a}\\ln x+C$`;
      return {
        problem: `แก้สมการ $x\\dfrac{dy}{dx}=y+${a}x\\ln\\!\\left(\\dfrac{y}{x}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec("Homogeneous ODE", "ตั้ง $v=y/x$ → $y=vx$"),
          bul(`$\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$`),
          sec("แทนลงสมการ"),
          para(`$x\\left(v+x\\dfrac{dv}{dx}\\right)=vx+${a}x\\ln v$`),
          para(`$x^2\\dfrac{dv}{dx}=${a}x\\ln v$ → $x\\dfrac{dv}{dx}=${a}\\ln v$`),
          sec(`Separable`),
          bul(`$\\dfrac{dv}{\\ln v}=\\dfrac{${a}\\,dx}{x}$`),
          sec(`อินทิเกรต (sub $w=\\ln v$)`),
          bul(`ด้านซ้าย: $\\dfrac{v\\,dw}{w}=\\int\\dfrac{dw}{w}=\\ln|w|=\\ln|\\ln v|$`),
          bul(`ด้านขวา: $${a}\\ln|x|+C$`),
          sec(`กลับแทน $v=y/x$`),
          para(`$\\ln(\\ln(y/x))=${a}\\ln x+C$ ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ode-bernoulli",
    topic: "ode", examType: "final", difficulty: "hard",
    subtopic: "Bernoulli ODE",
    params: { n: [2, 3] },
    build: ({ n }) => {
      const expU = 1 - n;
      const ans = `$u=y^{${expU}}$ แก้ Linear ODE: $\\dfrac{du}{dx}+\\dfrac{${expU}}{x}u=${expU}x$`;
      return {
        problem: `แก้ Bernoulli ODE: $\\dfrac{dy}{dx}+\\dfrac{y}{x}=xy^{${n}}$`,
        answer: `$u=y^{${expU}}$, $y^{${expU}}=\\dfrac{${expU}x^2}{${expU+2}}+Cx^{${-expU}}$`,
        solution: buildSol([
          sec("Bernoulli Form", "$y'+P(x)y=Q(x)y^n$"),
          bul(`$P=\\dfrac{1}{x}$, $Q=x$, $n=${n}$`),
          sec(`Substitution`, `$u=y^{${expU}}$`),
          bul(`$\\dfrac{du}{dx}=${expU}y^{${-n}}\\dfrac{dy}{dx}$`),
          sec(`แปลง ODE`),
          para(`$\\dfrac{du}{dx}+\\dfrac{${expU}}{x}u=${expU}x$ ← **Linear ODE** ✓`),
          sec(`Integrating Factor`),
          bul(`$\\mu=e^{\\int\\frac{${expU}}{x}dx}=x^{${expU}}$`),
          sec(`แก้ Linear ODE`),
          bul(`$(x^{${expU}}u)'=${expU}x^{${expU+1}}$`),
          bul(`$x^{${expU}}u=\\dfrac{${expU}x^{${expU+2}}}{${expU+2}}+C$`),
          para(`$u=y^{${expU}}=\\dfrac{${expU}x^2}{${expU+2}}+Cx^{${-expU}}$`),
        ], `$y^{${expU}}=\\dfrac{${expU}x^2}{${expU+2}}+Cx^{${-expU}}$`),
      };
    },
  },

  {
    id: "c2h-ode-exact",
    topic: "ode", examType: "final", difficulty: "hard",
    subtopic: "Exact ODE",
    params: { a: [1, 2, 3] },
    build: ({ a }) => {
      const ans = `$x^2+${a}xy+y^2=C$`;
      return {
        problem: `แก้ Exact ODE: $(2x+${a}y)dx+(${a}x+2y)dy=0$`,
        answer: ans,
        solution: buildSol([
          sec(`ตรวจ Exactness`),
          bul(`$M=2x+${a}y$: $M_y=${a}$`),
          bul(`$N=${a}x+2y$: $N_x=${a}$`),
          bul(`$M_y=N_x=${a}$ → **Exact** ✓`),
          sec(`หา $F$ จาก $F_x=M$`),
          bul(`$F=\\displaystyle\\int(2x+${a}y)dx=x^2+${a}xy+g(y)$`),
          sec(`หา $g(y)$ จาก $F_y=N$`),
          bul(`$F_y=${a}x+g'(y)=N=${a}x+2y$`),
          bul(`$g'(y)=2y$ → $g(y)=y^2$`),
          sec(`ผลลัพธ์`),
          para(`$F=x^2+${a}xy+y^2=C$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ode-logistic",
    topic: "ode", examType: "final", difficulty: "hard",
    subtopic: "Logistic growth",
    params: { K: [100, 1000], r: [0.1, 0.2] },
    build: ({ K, r }) => {
      const ans = `$P(t)=\\dfrac{${K}}{1+(${K}/P_0-1)e^{-${r}t}}$`;
      return {
        problem: `แก้ Logistic ODE: $\\dfrac{dP}{dt}=${r}P\\left(1-\\dfrac{P}{${K}}\\right)$`,
        answer: ans,
        solution: buildSol([
          sec(`Separable ODE`),
          para(`$\\dfrac{dP}{P(1-P/${K})}=${r}\\,dt$`),
          sec(`Partial Fractions`),
          bul(`$\\dfrac{1}{P(1-P/${K})}=\\dfrac{1}{P}+\\dfrac{1/${K}}{1-P/${K}}$`),
          sec(`อินทิเกรต`),
          para(`$\\ln|P|-\\ln|1-P/${K}|=${r}t+C_1$`),
          para(`$\\ln\\dfrac{P}{1-P/${K}}=${r}t+C_1$`),
          sec(`แก้ $P$`),
          bul(`$\\dfrac{P}{1-P/${K}}=Ae^{${r}t}$`),
          bul(`IC $P(0)=P_0$: $A=\\dfrac{P_0}{1-P_0/${K}}$`),
          sec(`ผลลัพธ์`),
          para(`$P(t)=\\dfrac{${K}}{1+(${K}/P_0-1)e^{-${r}t}}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-ode-newtons-cooling",
    topic: "ode", examType: "final", difficulty: "hard",
    subtopic: "Newton's Cooling Law",
    params: { k: [0.1, 0.2, 0.5], Ta: [20, 25] },
    build: ({ k, Ta }) => {
      const ans = `$T(t)=${Ta}+(T_0-${Ta})e^{-${k}t}$`;
      return {
        problem: `แก้ Newton's Cooling: $\\dfrac{dT}{dt}=-${k}(T-${Ta})$, $T(0)=T_0$`,
        answer: ans,
        solution: buildSol([
          sec(`Separable ODE`),
          bul(`$\\dfrac{dT}{T-${Ta}}=-${k}\\,dt$`),
          sec(`อินทิเกรต`),
          bul(`$\\ln|T-${Ta}|=-${k}t+C$`),
          bul(`$T-${Ta}=Ae^{-${k}t}$`),
          sec(`Initial Condition $T(0)=T_0$`),
          bul(`$T_0-${Ta}=A$ → $A=T_0-${Ta}$`),
          sec(`ผลลัพธ์`),
          para(`$T(t)=${Ta}+(T_0-${Ta})e^{-${k}t}$`),
          sec("ตีความ"),
          para(`เมื่อ $t\\to\\infty$: $T\\to${Ta}$ (อุณหภูมิแวดล้อม) ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-induction-ineq",
    topic: "induction", examType: "midterm", difficulty: "hard",
    subtopic: "Mathematical induction (inequality)",
    params: { k: [2, 3] },
    build: ({ k }) => {
      const ans = `$2^n>n^${k}$ สำหรับ $n\\geq${k + 2}$`;
      return {
        problem: `พิสูจน์ด้วย Mathematical Induction ว่า $2^n>n^${k}$ สำหรับทุก $n\\geq${k + 2}$`,
        answer: ans,
        solution: buildSol([
          sec(`Base case $n=${k + 2}$`),
          bul(`$2^{${k + 2}}=${2 ** (k + 2)} > ${(k + 2) ** k} = (${k + 2})^${k}$ ✓`),
          sec("Inductive step"),
          bul(`สมมติ $2^n>n^${k}$`),
          bul(`$2^{n+1}=2\\cdot2^n>2n^${k}$`),
          bul(`เมื่อ $n\\geq${k + 2}$: $2n^${k}>(n+1)^${k}$ ( exponential โตเร็วกว่า polynomial ) ✓`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-int-trig-sub-hard",
    topic: "integration_technique", examType: "midterm", difficulty: "hard",
    subtopic: "Trigonometric substitution (advanced)",
    params: { a: [3, 4, 5] },
    build: ({ a }) => {
      const half = a / 2;
      const halfStr = Number.isInteger(half) ? `${half}` : `\\dfrac{${a}}{2}`;
      const ans = `$\\dfrac{1}{${a}}\\ln\\left|\\dfrac{${a}}{x}-\\dfrac{x}{${a}}+${halfStr}\\right|+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\dfrac{1}{x\\sqrt{x^2-${a}^2}}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Substitution $x=${a}\\sec\\theta$"),
          bul(`$dx=${a}\\sec\\theta\\tan\\theta\\,d\\theta$`),
          bul(`$\\sqrt{x^2-${a}^2}=${a}\\tan\\theta$`),
          sec("ลดรูป"),
          bul(`$\\displaystyle\\int\\dfrac{${a}\\sec\\theta\\tan\\theta}{${a}\\sec\\theta\\cdot${a}\\tan\\theta}d\\theta=\\dfrac{1}{${a}}\\int d\\theta$`),
          sec("ย้อนกลับ"),
          para(`$=\\dfrac{1}{${a}}\\ln\\left|\\dfrac{${a}}{x}-\\dfrac{x}{${a}}+${halfStr}\\right|+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-int-partial-hard",
    topic: "integration_technique", examType: "midterm", difficulty: "hard",
    subtopic: "Partial fractions (repeated root)",
    params: { k: [2, 3] },
    build: ({ k }) => {
      const numer = k - 1;
      const ans = `$\\ln|x+${k}|+\\dfrac{${numer}}{x+${k}}+C$`;
      return {
        problem: `หา $\\displaystyle\\int\\dfrac{x+1}{(x+${k})^2}\\,dx$`,
        answer: ans,
        solution: buildSol([
          sec("Partial Fractions"),
          bul(`$\\dfrac{x+1}{(x+${k})^2}=\\dfrac{1}{x+${k}}+\\dfrac{${1-k}}{(x+${k})^2}$`),
          sec("อินทิเกรต"),
          bul(`$=\\ln|x+${k}|+\\dfrac{${numer}}{x+${k}}+C$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-app-shell-volume",
    topic: "app_integration", examType: "midterm", difficulty: "hard",
    subtopic: "Shell method",
    params: { a: [2, 3] },
    build: ({ a }) => {
      const volNum = a ** 4;
      const ans = `$\\dfrac{${volNum}\\pi}{2}$`;
      return {
        problem: `หาปริมาตรที่ได้จากหมุน $y=x^2$ รอบแกน $y$ บนช่วง $[0,${a}]$ (Shell method)`,
        answer: ans,
        solution: buildSol([
          sec("Shell method"),
          bul(`$V=2\\pi\\displaystyle\\int_0^{${a}}x\\cdot x^2\\,dx=2\\pi\\displaystyle\\int_0^{${a}}x^3\\,dx$`),
          bul(`$=2\\pi\\left[\\dfrac{x^4}{4}\\right]_0^{${a}}$`),
          para(`$=\\dfrac{${volNum}\\pi}{2}$`),
        ], ans),
      };
    },
  },

  {
    id: "c2h-app-arc-length",
    topic: "app_integration", examType: "midterm", difficulty: "hard",
    subtopic: "Arc length",
    params: { a: [1, 2] },
    build: ({ a }) => {
      const b = 2 * a;
      const ans = `$\\dfrac{${b}\\sqrt{${b * b + 1}}}{2}+\\dfrac{1}{2}\\ln(${b}+\\sqrt{${b * b + 1}})$`;
      return {
        problem: `หาความยาวเส้นโค้ง $y=${a}x^2$ บนช่วง $[0,${b}]$`,
        answer: ans,
        solution: buildSol([
          sec("Arc length formula"),
          bul(`$L=\\displaystyle\\int_0^{${b}}\\sqrt{1+(y')^2}\\,dx$`),
          bul(`$y'=${2 * a}x$ → $1+(y')^2=1+${4 * a * a}x^2$`),
          sec("Substitution $u=${2 * a}x$"),
          bul(`$L=\\dfrac{1}{${2 * a}}\\displaystyle\\int_0^{${b * 2 * a}}\\sqrt{1+u^2}\\,du$`),
          sec("ผลลัพธ์"),
          para(`$=\\dfrac{${b}\\sqrt{${b * b + 1}}}{2}+\\dfrac{1}{2}\\ln(${b}+\\sqrt{${b * b + 1}})$`),
        ], ans),
      };
    },
  },
];
