/**
 * @deprecated Slide chapters for cal/phy/chem are merged via src/data/textbook/ (subjectLoader).
 * This file still supplies extra sections for programming and legacy more* modules.
 * Regenerate textbook slides: npm run seed:slides && npm run build:slides
 */
import { morePhysics1, morePhysics2 } from "./morePhysics";
import { moreChemistry } from "./moreChemistry";
import { moreProgramming } from "./moreProgramming";
import { moreCalculus1 } from "./moreCalculus1";
import { moreCalculus2 } from "./moreCalculus2";
import { mergeChapters } from "./mergeUtils.js";

const extraContentMap = {
  calculus1: moreCalculus1,
  calculus2: moreCalculus2,
  physics1: morePhysics1,
  physics2: morePhysics2,
  chemistry: moreChemistry,
  programming: moreProgramming
};

const enhancements = {
  calculus1: {
    chapters: [
      {
        id: "limits",
        sections: [
          {
            id: "one-sided-limits",
            title: "One-Sided Limits",
            concept:
              "ลิมิตซ้ายและลิมิตขวาต้องเข้าใกล้ค่าเดียวกัน ลิมิตสองด้านจึงจะมีอยู่ ถ้าค่าไม่เท่ากันให้สรุปว่า two-sided limit does not exist",
            formula: "\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L",
            example: {
              title: "Limit — ฟังก์ชัน piecewise ที่ x=0",
              problem: "ให้ $f(x)=\\begin{cases}x^2+1 & x\\leq0 \\\\ 2x+2 & x>0\\end{cases}$ ตรวจสอบว่า $\\lim_{x\\to0}f(x)$ มีอยู่หรือไม่",
              steps: [
                "ลิมิตซ้าย $(x\\to0^-)$: ใช้ $x^2+1$ → แทน $x=0$ ได้ $1$",
                "ลิมิตขวา $(x\\to0^+)$: ใช้ $2x+2$ → แทน $x=0$ ได้ $2$",
                "ซ้าย $=1 \\neq 2=$ ขวา → ลิมิตไม่มีอยู่ (DNE)"
              ],
            },
            practice: "ตรวจลิมิตซ้ายและขวาของ $\\frac{x-2}{|x-2|}$ ที่ $x=2$",
          },
          {
            id: "limit-techniques",
            title: "Algebraic Limit Techniques",
            concept:
              "โจทย์ลิมิตที่แทนค่าแล้วได้ $0/0$ มักแก้ได้ด้วยการแยกตัวประกอบ ตัดพจน์ร่วม rationalize หรือจัดรูปก่อนแทนค่า ส่วนที่มีรากลูกบาศก์ใช้ $a^3-b^3=(a-b)(a^2+ab+b^2)$",
            formula: "a^3-b^3=(a-b)(a^2+ab+b^2)",
            example: {
              title: "Limit — rationalize กรณีรากที่สาม",
              problem: "หา $\\lim_{x\\to8}\\frac{x-8}{\\sqrt[3]{x}-2}$",
              steps: [
                "แทน $x=8$ ได้ $\\frac{0}{0}$",
                "ตั้ง $u=\\sqrt[3]{x}$, เมื่อ $x=8$ → $u=2$",
                "$x-8=u^3-8=(u-2)(u^2+2u+4)$",
                "$\\frac{(u-2)(u^2+2u+4)}{u-2}=u^2+2u+4$",
                "แทน $u=2$: $4+4+4=12$"
              ],
            },
            practice: "หา $\\lim_{x\\to1}\\frac{x^3-1}{x-1}$ โดยแยกตัวประกอบ",
          },
          {
            id: "trig-limits",
            title: "Important Trigonometric Limits",
            concept:
              "ลิมิตตรีโกณมิติพื้นฐานเป็นเครื่องมือสำคัญของอนุพันธ์และการประมาณค่าใกล้ศูนย์ โดยต้องระวังมุมใช้หน่วย radian",
            formula: "\\lim_{x\\to0}\\frac{\\sin x}{x}=1",
            example: {
              title: "Limit — ทริก $(1-\\cos x)/x^2$",
              problem: "หา $\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}$",
              steps: ["ใช้เอกลักษณ์ $1-\\cos x=2\\sin^2(x/2)$", "ได้ $\\frac{2\\sin^2(x/2)}{x^2}=\\frac12\\left(\\frac{\\sin(x/2)}{x/2}\\right)^2$", "ลิมิตเท่ากับ $1/2$"],
            },
            practice: "หา $\\lim_{x\\to0}\\frac{\\tan 5x}{x}$",
          },
          {
            id: "lhopital-rule",
            title: "L'Hopital's Rule",
            concept:
              "เมื่อได้รูปไม่กำหนด $0/0$ หรือ $\\infty/\\infty$ ใช้ได้ก็ต่อเมื่อทั้งเศษและส่วนต่างเป็นศูนย์หรืออนันต์ในเวลาเดียวกัน บางโจทย์ต้องใช้ L'Hôpital ซ้ำหลายรอบ และบางรูปต้องแปลงให้เป็น $0/0$ หรือ $\\infty/\\infty$ ก่อน",
            formula: "\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}\\quad(0/0\\text{ หรือ }\\infty/\\infty)",
            examples: [
              {
                title: "L'Hôpital สองรอบ — รูปแบบ 0/0",
                level: "Medium",
                problem: "หา $\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}$",
                steps: [
                  "แทน $x=0$: $\\frac{0}{0}$ → ใช้ L'Hôpital ครั้งแรก",
                  "$\\lim_{x\\to0}\\frac{e^x-1}{2x}$ → แทนอีกครั้ง: $\\frac{0}{0}$",
                  "ใช้ L'Hôpital ครั้งที่ 2: $\\lim_{x\\to0}\\frac{e^x}{2}=\\frac{1}{2}$"
                ],
                answer: "$\\frac{1}{2}$"
              },
              {
                title: "แปลงรูปแบบ $0\\cdot\\infty$ ให้เป็น L'Hôpital",
                level: "Hard",
                problem: "หา $\\lim_{x\\to0^+} x\\ln x$",
                steps: [
                  "รูป $0\\cdot(-\\infty)$ → จัดรูปใหม่เป็น $\\frac{\\ln x}{1/x}$",
                  "แทน $x\\to0^+$: $\\frac{-\\infty}{\\infty}$ → ใช้ L'Hôpital",
                  "$\\frac{(\\ln x)'}{(1/x)'}=\\frac{1/x}{-1/x^2}=\\frac{x^2}{-x}=-x$",
                  "$\\lim_{x\\to0^+}(-x)=0$"
                ],
                answer: "$0$"
              }
            ],
            practice: "หา $\\lim_{x\\to\\infty}\\frac{x^2}{e^x}$ โดยใช้ L'Hôpital",
          },
        ],
      },
      {
        id: "derivatives",
        sections: [
          {
            id: "trig-exp-log-derivatives",
            title: "Trig, Exponential, and Log Derivatives",
            concept:
              "ฟังก์ชันที่พบบ่อยในโจทย์วิศวะมีอนุพันธ์มาตรฐานที่ควรจำ เช่น sine, cosine, exponential และ logarithm",
            formula: "\\frac{d}{dx}e^x=e^x,\\quad \\frac{d}{dx}\\ln x=\\frac1x",
            example: {
              title: "Product Rule — $e^x \\sin x$",
              problem: "หาอนุพันธ์ของ $f(x)=e^x\\sin x$",
              steps: ["ใช้ product rule", "$f'(x)=e^x\\sin x+e^x\\cos x$", "จัดรูปได้ $e^x(\\sin x+\\cos x)$"],
            },
            practice: "หาอนุพันธ์ของ $\\ln(x^2+1)$",
          },
          {
            id: "implicit-differentiation",
            title: "Implicit Differentiation",
            concept:
              "เมื่อสมการไม่ได้เขียนเป็น $y=f(x)$ โดยตรง ให้ differentiate ทั้งสองข้างเทียบกับ x และมอง y เป็นฟังก์ชันของ x",
            formula: "\\frac{d}{dx}y^n=ny^{n-1}\\frac{dy}{dx}",
            example: {
              title: "Implicit Differentiation — วงกลม",
              problem: "หา $dy/dx$ จาก $x^2+y^2=25$",
              steps: ["differentiate ทั้งสองข้าง: $2x+2y\\frac{dy}{dx}=0$", "ย้ายข้างได้ $2y\\frac{dy}{dx}=-2x$", "ดังนั้น $\\frac{dy}{dx}=-\\frac{x}{y}$"],
            },
            practice: "หา $dy/dx$ จาก $xy+y^2=4$",
          },
          {
            id: "linearization",
            title: "Linear Approximation",
            concept:
              "ใช้เส้นสัมผัสประมาณค่าฟังก์ชันใกล้จุดที่รู้ค่าแล้ว เหมาะกับการประมาณค่ารากหรือค่าฟังก์ชันที่คำนวณตรงยาก",
            formula: "L(x)=f(a)+f'(a)(x-a)",
            example: {
              title: "Linearization — ประมาณ $\\sqrt{4.1}$",
              problem: "ประมาณ $\\sqrt{4.1}$ ด้วย linearization ที่ $a=4$",
              steps: ["ให้ $f(x)=\\sqrt{x}$, $f(4)=2$", "$f'(x)=\\frac{1}{2\\sqrt{x}}$ จึง $f'(4)=1/4$", "$L(4.1)=2+\\frac14(0.1)=2.025$"],
            },
            practice: "ประมาณ $\\sqrt{8.9}$ โดยใช้ $a=9$",
          },
        ],
      },
      {
        id: "applications",
        sections: [
          {
            id: "second-derivative-test",
            title: "Second Derivative Test",
            concept:
              "ถ้า $f'(c)=0$ และ $f''(c)\\neq0$ สามารถสรุปประเภทของ critical point ได้ทันที: $f''(c)>0$ → local min, $f''(c)<0$ → local max สะดวกกว่า First Derivative Test เมื่อหา critical points ได้ง่าย",
            formula: "f'(c)=0,\\;f''(c)>0\\Rightarrow\\text{local min};\\quad f''(c)<0\\Rightarrow\\text{local max}",
            example: {
              title: "Second Derivative Test — $x^3-3x^2+4$",
              problem: "วิเคราะห์ $f(x)=x^3-3x^2+4$ ด้วย Second Derivative Test",
              steps: [
                "$f'(x)=3x^2-6x=3x(x-2)=0$ → critical points: $x=0, x=2$",
                "$f''(x)=6x-6$",
                "$f''(0)=-6<0$ → local max ที่ $x=0$, ค่า $f(0)=4$",
                "$f''(2)=6>0$ → local min ที่ $x=2$, ค่า $f(2)=0$"
              ],
            },
            practice: "วิเคราะห์ $f(x)=x^4-4x^3$ โดยใช้ Second Derivative Test",
          },
          {
            id: "rolles-theorem",
            title: "Rolle's Theorem",
            concept:
              "Rolle's Theorem เป็น special case ของ MVT: ถ้า $f$ ต่อเนื่องบน $[a,b]$, differentiable บน $(a,b)$ และ $f(a)=f(b)$ แล้วจะมี $c\\in(a,b)$ ที่ $f'(c)=0$ เสมอ ใช้พิสูจน์การมีอยู่ของจุดสถิตย์ในช่วง",
            formula: "f(a)=f(b)\\Rightarrow\\exists c\\in(a,b): f'(c)=0",
            example: {
              title: "Rolle's Theorem — $x^2-4x+3$ บน [1,3]",
              problem: "ตรวจสอบว่า $f(x)=x^2-4x+3$ ตรงตามเงื่อนไข Rolle's Theorem บน $[1,3]$ หรือไม่ และหาค่า $c$",
              steps: [
                "$f$ เป็นพหุนาม → ต่อเนื่องและ differentiable ✓",
                "$f(1)=1-4+3=0$ และ $f(3)=9-12+3=0$ → $f(1)=f(3)$ ✓",
                "ทุกเงื่อนไขครบ → Rolle's Theorem ใช้ได้",
                "$f'(x)=2x-4=0$ → $c=2\\in(1,3)$ ✓"
              ],
            },
            practice: "ตรวจสอบ Rolle's Theorem บน $f(x)=\\sin x$ บน $[0,\\pi]$ และหาค่า $c$",
          },
          {
            id: "curve-sketching",
            title: "Increasing, Decreasing, Concavity",
            concept:
              "ใช้ $f'$ บอกช่วงเพิ่ม/ลด และใช้ $f''$ บอกความเว้าหงาย/คว่ำ จุดเปลี่ยนเว้าเกิดเมื่อ concavity เปลี่ยนจริง",
            formula: "f''(x)>0\\Rightarrow \\text{concave up}",
            example: {
              title: "Graph Analysis — $x^3-3x$",
              problem: "วิเคราะห์ $f(x)=x^3-3x$",
              steps: ["$f'(x)=3x^2-3=3(x-1)(x+1)$", "critical points คือ $x=-1,1$", "$f''(x)=6x$ จึงเว้าคว่ำเมื่อ $x<0$ และเว้าหงายเมื่อ $x>0$"],
            },
            practice: "วิเคราะห์ช่วงเพิ่ม/ลดของ $f(x)=x^3-12x$",
          },
        ],
      },
      {
        id: "integrals",
        sections: [
          {
            id: "antiderivatives",
            title: "Antiderivatives",
            concept:
              "ปฏิยานุพันธ์คือฟังก์ชันที่เมื่อหาอนุพันธ์แล้วกลับมาได้ integrand เดิม ต้องใส่ค่าคงที่ $C$ เสมอใน indefinite integral",
            formula: "\\int x^n dx=\\frac{x^{n+1}}{n+1}+C\\quad(n\\ne -1)",
            example: {
              title: "Antiderivative — พหุนาม",
              problem: "หา $\\int (4x^3-2x)dx$",
              steps: ["อินทิเกรตทีละพจน์", "$\\int4x^3dx=x^4$", "$\\int-2xdx=-x^2$ จึงได้ $x^4-x^2+C$"],
            },
            practice: "หา $\\int (6x^2+3)dx$",
          },
          {
            id: "substitution",
            title: "Substitution Rule",
            concept:
              "substitution เป็น chain rule แบบย้อนกลับ เหมาะเมื่อมีฟังก์ชันด้านในและอนุพันธ์ของมันปรากฏอยู่ใกล้ ๆ",
            formula: "\\int f(g(x))g'(x)dx=\\int f(u)du",
            example: {
              title: "u-Substitution — $2x\\cos(x^2)$",
              problem: "หา $\\int 2x\\cos(x^2)dx$",
              steps: ["ให้ $u=x^2$ จึง $du=2xdx$", "อินทิกรัลกลายเป็น $\\int\\cos u\\,du$", "คำตอบคือ $\\sin u+C=\\sin(x^2)+C$"],
            },
            practice: "หา $\\int 3x^2e^{x^3}dx$",
          },
          {
            id: "average-value",
            title: "Average Value of a Function",
            concept:
              "ค่าเฉลี่ยของฟังก์ชันบนช่วงคือความสูงคงที่ที่ทำให้พื้นที่สี่เหลี่ยมเท่ากับพื้นที่ใต้กราฟเดิม",
            formula: "f_{avg}=\\frac{1}{b-a}\\int_a^b f(x)dx",
            example: {
              title: "Average Value — $x^2$ บน $[0,3]$",
              problem: "หา average value ของ $f(x)=x^2$ บน $[0,3]$",
              steps: ["คำนวณ $\\int_0^3 x^2dx=9$", "หารด้วยความยาวช่วง $3-0=3$", "ค่าเฉลี่ยคือ $3$"],
            },
            practice: "หา average value ของ $f(x)=2x$ บน $[1,4]$",
          },
        ],
      },
    ],
    formulas: [
      { id: "one-sided", topic: "Limits", name: "Two-sided limit exists", latex: "\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)", usage: "ใช้ตรวจลิมิตของ piecewise หรือ absolute value" },
      { id: "trig-limit", topic: "Limits", name: "Basic trig limit", latex: "\\lim_{x\\to0}\\frac{\\sin x}{x}=1", usage: "ต้องใช้ radian และใช้กับลิมิตตรีโกณมิติใกล้ศูนย์" },
      { id: "power-rule", topic: "Derivatives", name: "Power Rule", latex: "\\frac{d}{dx}x^n=nx^{n-1}", usage: "สูตรพื้นฐานสำหรับพหุนาม" },
      { id: "quotient-rule", topic: "Derivatives", name: "Quotient Rule", latex: "\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}", usage: "ใช้กับฟังก์ชันเศษส่วน" },
      { id: "implicit", topic: "Derivatives", name: "Implicit y derivative", latex: "\\frac{d}{dx}y^n=ny^{n-1}y'", usage: "ใช้เมื่อ y ไม่ได้แยกข้างไว้" },
      { id: "linearization", topic: "Applications", name: "Linearization", latex: "L(x)=f(a)+f'(a)(x-a)", usage: "ประมาณค่าฟังก์ชันใกล้จุด a" },
      { id: "mvt", topic: "Applications", name: "Mean Value Theorem", latex: "f'(c)=\\frac{f(b)-f(a)}{b-a}", usage: "เชื่อมความชันเฉลี่ยกับความชันทันที" },
      { id: "substitution", topic: "Integrals", name: "Substitution Rule", latex: "\\int f(g(x))g'(x)dx=\\int f(u)du", usage: "ใช้กับ chain rule ย้อนกลับ" },
      { id: "average-value", topic: "Integrals", name: "Average Value", latex: "f_{avg}=\\frac{1}{b-a}\\int_a^b f(x)dx", usage: "หาค่าเฉลี่ยของฟังก์ชันบนช่วง" },
    ],
    flashcards: [
      { id: "cal1-one-sided", front: "Two-sided limit exists when?", back: "ลิมิตซ้ายและลิมิตขวาต้องเท่ากัน" },
      { id: "cal1-trig-limit", front: "$\\lim_{x\\to0}\\sin x/x$", back: "$1$ เมื่อ x เป็น radian" },
      { id: "cal1-power", front: "Power Rule", back: "$\\frac{d}{dx}x^n=nx^{n-1}$" },
      { id: "cal1-quotient", front: "Quotient Rule", back: "$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$" },
      { id: "cal1-implicit", front: "Implicit differentiation", back: "มอง $y$ เป็น $y(x)$ เช่น $\\frac{d}{dx}y^2=2yy'$" },
      { id: "cal1-substitution", front: "Substitution Rule", back: "ตั้ง $u=g(x)$ แล้วแทน $du=g'(x)dx$" },
      { id: "cal1-avg", front: "Average value", back: "$f_{avg}=\\frac{1}{b-a}\\int_a^b f(x)dx$" },
    ],
    quizzes: [
      {
        id: "cal1-q3",
        chapterId: "limits",
        question: "Find $\\lim_{x\\to3}\\frac{x^2-9}{x-3}$",
        options: ["0", "3", "6", "Does not exist"],
        answer: 2,
        solution: "แยกตัวประกอบเป็น $(x-3)(x+3)$ แล้วตัด $x-3$ เหลือ $x+3$ แทน $x=3$ ได้ $6$",
      },
      {
        id: "cal1-q4",
        chapterId: "limits",
        question: "Find $\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}$",
        options: ["0", "$\\frac12$", "1", "2"],
        answer: 1,
        solution: "ใช้ $1-\\cos x=2\\sin^2(x/2)$ จะได้ลิมิต $\\frac12$",
      },
      {
        id: "cal1-q5",
        chapterId: "derivatives",
        question: "Find $\\frac{d}{dx}\\ln(x^2+1)$",
        options: ["$\\frac{1}{x^2+1}$", "$\\frac{2x}{x^2+1}$", "$2x\\ln x$", "$\\frac{x}{2}$"],
        answer: 1,
        solution: "ใช้ chain rule: derivative ของ $\\ln u$ คือ $u'/u$ โดย $u=x^2+1$",
      },
      {
        id: "cal1-q6",
        chapterId: "derivatives",
        question: "For $x^2+y^2=25$, what is $dy/dx$?",
        options: ["$x/y$", "$-x/y$", "$-y/x$", "$2x+2y$"],
        answer: 1,
        solution: "differentiate ได้ $2x+2yy'=0$ ดังนั้น $y'=-x/y$",
      },
      {
        id: "cal1-q7",
        chapterId: "applications",
        question: "If $A=\\pi r^2$ and $dr/dt=2$, what is $dA/dt$ when $r=5$?",
        options: ["$10\\pi$", "$15\\pi$", "$20\\pi$", "$25\\pi$"],
        answer: 2,
        solution: "$dA/dt=2\\pi r\\,dr/dt=2\\pi(5)(2)=20\\pi$",
      },
      {
        id: "cal1-q8",
        chapterId: "integrals",
        question: "Find $\\int 2x\\cos(x^2)dx$",
        options: ["$\\cos(x^2)+C$", "$\\sin(x^2)+C$", "$2\\sin x+C$", "$x^2\\sin x+C$"],
        answer: 1,
        solution: "ให้ $u=x^2$, $du=2xdx$ จึงได้ $\\int\\cos udu=\\sin u+C$",
      },
    ],
  },
  physics1: {
    chapters: [
      {
        id: "kinematics",
        sections: [
          {
            id: "projectile-motion",
            title: "Projectile Motion",
            concept:
              "การเคลื่อนที่แบบ projectile แยกแกน x และ y อิสระจากกัน แกน x มักความเร็วคงที่ ส่วนแกน y มีความเร่ง $-g$",
            formula: "x=v_0\\cos\\theta\\,t,\\quad y=v_0\\sin\\theta\\,t-\\frac12gt^2",
            example: {
              title: "Projectile — ความเร็วแกน x",
              problem: "ยิงวัตถุด้วย $v_0=20\\,m/s$ ที่มุม $30^\\circ$ จงหาความเร็วแกน x",
              steps: ["ใช้ $v_x=v_0\\cos\\theta$", "$v_x=20\\cos30^\\circ$", "ได้ประมาณ $17.3\\,m/s$"],
            },
            practice: "หาเวลาขึ้นถึงจุดสูงสุดเมื่อ $v_0=30\\,m/s$, $\\theta=45^\\circ$",
          },
          {
            id: "relative-motion",
            title: "Relative Motion",
            concept:
              "ความเร็วสัมพัทธ์ขึ้นกับกรอบอ้างอิง เช่น ความเร็วของ A เมื่อมองจาก B คือความเร็ว A ลบความเร็ว B",
            formula: "\\vec v_{A/B}=\\vec v_A-\\vec v_B",
            example: {
              title: "Relative Velocity — รถ A เทียบ B",
              problem: "รถ A วิ่ง 20 m/s รถ B วิ่งทิศเดียวกัน 12 m/s ความเร็ว A เทียบกับ B เท่าไร",
              steps: ["ใช้ $v_{A/B}=v_A-v_B$", "ได้ $20-12=8$", "A เคลื่อนที่เทียบกับ B ด้วย $8\\,m/s$"],
            },
            practice: "ถ้าวิ่งสวนทางกัน 15 m/s และ 10 m/s ความเร็วสัมพัทธ์เป็นเท่าไร",
          },
        ],
      },
      {
        id: "newton",
        sections: [
          {
            id: "free-body-diagram",
            title: "Free-Body Diagrams",
            concept:
              "free-body diagram ช่วยแยกแรงทั้งหมดที่กระทำต่อวัตถุหนึ่งชิ้น ก่อนเขียนสมการ $\\sum F_x=ma_x$ และ $\\sum F_y=ma_y$",
            formula: "\\sum F_x=ma_x,\\quad \\sum F_y=ma_y",
            example: {
              title: "Newton's 2nd — กล่องบนพื้นราบ",
              problem: "กล่องบนพื้นราบถูกดึงด้วยแรง 30 N และมี friction 5 N มวล 5 kg จงหาความเร่ง",
              steps: ["แรงสุทธิแนว x คือ $30-5=25\\,N$", "ใช้ $a=F/m$", "ได้ $a=25/5=5\\,m/s^2$"],
            },
            practice: "วาด FBD ของกล่องบนพื้นเอียงที่มีแรงเสียดทาน",
          },
          {
            id: "friction",
            title: "Friction",
            concept:
              "แรงเสียดทานสถิตปรับค่าได้จนถึงค่าสูงสุด ส่วนแรงเสียดทานจลน์มักใช้ $f_k=\\mu_kN$ เมื่อวัตถุลื่นแล้ว",
            formula: "f_s\\le \\mu_sN,\\quad f_k=\\mu_kN",
            example: {
              title: "Kinetic Friction — $\\mu_k=0.2$",
              problem: "กล่องมวล 10 kg บนพื้นราบมี $\\mu_k=0.2$ จงหาแรงเสียดทานจลน์",
              steps: ["พื้นราบจึง $N=mg\\approx98\\,N$", "$f_k=\\mu_kN=0.2(98)$", "ได้ $19.6\\,N$"],
            },
            practice: "หาแรงเสียดทานสูงสุดเมื่อ $m=5kg$, $\\mu_s=0.4$",
          },
        ],
      },
      {
        id: "momentum",
        title: "Momentum",
        description: "อิมพัลส์ โมเมนตัม และการชน",
        sections: [
          {
            id: "impulse",
            title: "Impulse and Momentum",
            concept:
              "อิมพัลส์คือพื้นที่ใต้กราฟแรง-เวลา และเท่ากับการเปลี่ยนโมเมนตัมของวัตถุ",
            formula: "J=\\int Fdt=\\Delta p",
            example: {
              title: "Impulse — $J = F\\Delta t$",
              problem: "แรงเฉลี่ย 50 N กระทำ 0.2 s จงหา impulse",
              steps: ["ใช้ $J=F\\Delta t$", "แทน $50(0.2)$", "ได้ $10\\,N\\cdot s$"],
            },
            practice: "หาการเปลี่ยนความเร็วของมวล 2 kg เมื่อ impulse = 6 N s",
          },
          {
            id: "collisions",
            title: "Collisions",
            concept:
              "ถ้าแรงภายนอกสุทธิเล็กมาก โมเมนตัมรวมก่อนและหลังชนอนุรักษ์ ส่วนพลังงานจลน์จะอนุรักษ์เฉพาะ elastic collision",
            formula: "m_1u_1+m_2u_2=m_1v_1+m_2v_2",
            example: {
              title: "Perfectly Inelastic Collision",
              problem: "มวล 1 kg ที่เร็ว 4 m/s ชนติดกับมวล 1 kg ที่หยุดนิ่ง ความเร็วหลังชนคือเท่าไร",
              steps: ["ชนติดกันเป็น perfectly inelastic", "โมเมนตัมก่อน $=4$", "มวลรวม 2 kg จึง $v=2\\,m/s$"],
            },
            practice: "คำนวณความเร็วหลังชนติดกันเมื่อมวล 2 kg วิ่ง 3 m/s ชนมวล 1 kg ที่หยุดนิ่ง",
          },
        ],
      },
    ],
    formulas: [
      { id: "suvat", topic: "Kinematics", name: "Displacement with constant acceleration", latex: "\\Delta x=v_0t+\\frac12at^2", usage: "ใช้เมื่อความเร่งคงที่" },
      { id: "projectile-range", topic: "Kinematics", name: "Projectile range", latex: "R=\\frac{v_0^2\\sin2\\theta}{g}", usage: "ใช้เมื่อยิงและตกที่ระดับเดียวกัน" },
      { id: "friction", topic: "Forces", name: "Kinetic Friction", latex: "f_k=\\mu_kN", usage: "ใช้เมื่อวัตถุกำลังลื่น" },
      { id: "impulse", topic: "Momentum", name: "Impulse", latex: "J=\\Delta p", usage: "เชื่อมแรงช่วงสั้นกับการเปลี่ยนโมเมนตัม" },
      { id: "collision", topic: "Momentum", name: "Momentum Conservation", latex: "\\sum p_i=\\sum p_f", usage: "ใช้กับระบบที่แรงภายนอกสุทธิน้อย" },
    ],
    flashcards: [
      { id: "phy1-suvat", front: "Constant acceleration displacement", back: "$\\Delta x=v_0t+\\frac12at^2$" },
      { id: "phy1-projectile", front: "Projectile: horizontal velocity", back: "$v_x=v_0\\cos\\theta$ คงที่ถ้าไม่คิดแรงต้านอากาศ" },
      { id: "phy1-friction", front: "Kinetic friction", back: "$f_k=\\mu_kN$" },
      { id: "phy1-impulse", front: "Impulse", back: "$J=\\Delta p$" },
      { id: "phy1-collision", front: "Momentum conservation", back: "$\\sum p_i=\\sum p_f$ เมื่อแรงภายนอกสุทธิเป็นศูนย์" },
    ],
    quizzes: [
      {
        id: "phy1-q2",
        chapterId: "kinematics",
        question: "A car starts from rest with $a=3\\,m/s^2$ for 4 s. What is its displacement?",
        options: ["12 m", "18 m", "24 m", "48 m"],
        answer: 2,
        solution: "$\\Delta x=\\frac12at^2=\\frac12(3)(16)=24\\,m$",
      },
      {
        id: "phy1-q3",
        chapterId: "newton",
        question: "For $m=10kg$ on a horizontal surface with $\\mu_k=0.2$, approximate $f_k$ using $g=9.8$.",
        options: ["9.8 N", "19.6 N", "49 N", "98 N"],
        answer: 1,
        solution: "$N=mg=98N$ and $f_k=\\mu_kN=0.2(98)=19.6N$",
      },
      {
        id: "phy1-q4",
        chapterId: "momentum",
        question: "A 1 kg object at 4 m/s sticks to a 1 kg object at rest. What is final speed?",
        options: ["1 m/s", "2 m/s", "4 m/s", "8 m/s"],
        answer: 1,
        solution: "โมเมนตัมก่อน $=4$. มวลรวม $=2kg$ ดังนั้น $v=4/2=2m/s$",
      },
    ],
  },
  physics2: {
    chapters: [
      {
        id: "electric-field",
        sections: [
          {
            id: "electric-potential",
            title: "Electric Potential",
            concept:
              "ศักย์ไฟฟ้าคือพลังงานศักย์ต่อหนึ่งหน่วยประจุ เป็น scalar จึงบวกกันง่ายกว่าสนามไฟฟ้าที่เป็น vector",
            formula: "V=k\\frac{q}{r}",
            example: {
              title: "ศักย์ไฟฟ้า $V \\propto 1/r$",
              problem: "ประจุ $q$ อยู่ห่าง r ถ้า r เพิ่มเป็น 2r ศักย์เปลี่ยนอย่างไร",
              steps: ["$V\\propto 1/r$", "เมื่อ r เพิ่มเป็น 2 เท่า", "V ลดเหลือครึ่งหนึ่ง"],
            },
            practice: "เปรียบเทียบ V เมื่อ q เพิ่มเป็น 3 เท่า",
          },
          {
            id: "gauss-law",
            title: "Gauss's Law",
            concept:
              "Gauss's law เชื่อม flux ไฟฟ้าผ่านผิวปิดกับประจุที่ถูกล้อม เหมาะกับสมมาตรทรงกลม ทรงกระบอก และระนาบ",
            formula: "\\Phi_E=\\oint \\vec E\\cdot d\\vec A=\\frac{q_{enc}}{\\varepsilon_0}",
            example: {
              title: "Gauss's Law — $Q_{enc}=0$",
              problem: "ถ้าไม่มีประจุอยู่ในผิวปิด flux สุทธิเป็นเท่าไร",
              steps: ["จาก Gauss's law", "$q_{enc}=0$", "ดังนั้น flux สุทธิเป็น 0"],
            },
            practice: "อธิบายว่าทำไมสนามนอกทรงกลมประจุเหมือน point charge",
          },
        ],
      },
      {
        id: "circuits",
        sections: [
          {
            id: "kirchhoff",
            title: "Kirchhoff's Rules",
            concept:
              "กฎ junction มาจากการอนุรักษ์ประจุ ส่วนกฎ loop มาจากการอนุรักษ์พลังงาน ใช้แก้วงจรที่ซับซ้อนกว่า series/parallel",
            formula: "\\sum I_{in}=\\sum I_{out},\\quad \\sum \\Delta V=0",
            example: {
              title: "KCL — กระแสที่ junction",
              problem: "ที่ junction มีกระแสเข้า 5 A และออก 2 A อีกแขนออกเท่าไร",
              steps: ["กระแสเข้าต้องเท่ากระแสออก", "$5=2+I$", "ได้ $I=3A$"],
            },
            practice: "เขียน loop equation สำหรับแบตเตอรี่และตัวต้านทานสองตัวต่ออนุกรม",
          },
        ],
      },
    ],
    formulas: [
      { id: "potential", topic: "Electricity", name: "Electric Potential", latex: "V=kq/r", usage: "ศักย์จาก point charge" },
      { id: "gauss", topic: "Electricity", name: "Gauss's Law", latex: "\\oint \\vec E\\cdot d\\vec A=q_{enc}/\\varepsilon_0", usage: "ใช้กับโจทย์สมมาตรสูง" },
      { id: "kirchhoff-current", topic: "Circuits", name: "Junction Rule", latex: "\\sum I_{in}=\\sum I_{out}", usage: "อนุรักษ์ประจุที่จุดต่อ" },
    ],
    flashcards: [
      { id: "phy2-potential", front: "Electric potential of point charge", back: "$V=kq/r$" },
      { id: "phy2-gauss", front: "Gauss's Law", back: "$\\oint \\vec E\\cdot d\\vec A=q_{enc}/\\varepsilon_0$" },
      { id: "phy2-kirchhoff", front: "Kirchhoff junction rule", back: "$\\sum I_{in}=\\sum I_{out}$" },
    ],
    quizzes: [
      {
        id: "phy2-q2",
        chapterId: "electric-field",
        question: "If distance from a point charge doubles, electric potential becomes?",
        options: ["4 times", "2 times", "Half", "Quarter"],
        answer: 2,
        solution: "$V=kq/r$ ดังนั้นเมื่อ r เป็น 2r, V เหลือครึ่งหนึ่ง",
      },
      {
        id: "phy2-q3",
        chapterId: "circuits",
        question: "At a junction, 6 A enters and 2 A leaves through one branch. How much leaves through the other?",
        options: ["2 A", "3 A", "4 A", "8 A"],
        answer: 2,
        solution: "ใช้ $I_{in}=I_{out}$: $6=2+I$ ดังนั้น $I=4A$",
      },
    ],
  },
  chemistry: {
    chapters: [
      {
        id: "atomic-structure",
        sections: [
          {
            id: "periodic-trends",
            title: "Periodic Trends",
            concept:
              "atomic radius มักลดจากซ้ายไปขวาและเพิ่มจากบนลงล่าง ส่วน ionization energy มักเพิ่มจากซ้ายไปขวาและลดจากบนลงล่าง",
            formula: "Z_{eff}\\uparrow \\Rightarrow r_{atomic}\\downarrow",
            example: {
              title: "Atomic Radius — Na vs Cl",
              problem: "อะตอมใดใหญ่กว่า: Na หรือ Cl",
              steps: ["อยู่คาบเดียวกัน", "จากซ้ายไปขวา effective nuclear charge เพิ่ม", "Na ใหญ่กว่า Cl"],
            },
            practice: "เปรียบเทียบ atomic radius ของ F และ I",
          },
        ],
      },
      {
        id: "thermochemistry",
        title: "Thermochemistry",
        description: "enthalpy, entropy, Gibbs free energy และ calorimetry",
        sections: [
          {
            id: "enthalpy",
            title: "Enthalpy and Calorimetry",
            concept:
              "enthalpy change ที่ความดันคงที่เท่ากับความร้อนที่ระบบรับหรือคาย ส่วน calorimetry ใช้วัดความร้อนจากมวล ความจุความร้อน และอุณหภูมิที่เปลี่ยน",
            formula: "q=mc\\Delta T",
            example: {
              title: "Calorimetry — หา q ของน้ำ 100 g",
              problem: "น้ำ 100 g อุณหภูมิเพิ่ม 5 C ใช้ $c=4.18 J/gC$ จงหา q",
              steps: ["ใช้ $q=mc\\Delta T$", "แทน $100(4.18)(5)$", "ได้ $2090 J$"],
            },
            practice: "คำนวณ q เมื่อน้ำ 50 g เย็นลง 10 C",
          },
          {
            id: "gibbs-spontaneity",
            title: "Gibbs Free Energy",
            concept:
              "ค่า $\\Delta G$ ใช้ทำนาย spontaneity ที่อุณหภูมิและความดันคงที่ ถ้า $\\Delta G<0$ กระบวนการเกิดเองได้ในทิศทางนั้น",
            formula: "\\Delta G=\\Delta H-T\\Delta S",
            example: {
              title: "Gibbs Energy — หา $\\Delta G$ ที่ 300 K",
              problem: "ถ้า $\\Delta H=-100kJ$ และ $\\Delta S=0.2kJ/K$ ที่ 300K หา $\\Delta G$",
              steps: ["แทน $\\Delta G=-100-300(0.2)$", "ได้ $-160kJ$", "เป็น spontaneous"],
            },
            practice: "พิจารณา spontaneity เมื่อ $\\Delta H>0$ และ $\\Delta S<0$",
          },
        ],
      },
      {
        id: "equilibrium",
        sections: [
          {
            id: "le-chatelier",
            title: "Le Chatelier's Principle",
            concept:
              "เมื่อระบบสมดุลถูกรบกวน ระบบจะเลื่อนไปในทิศที่ลดผลของการรบกวนนั้น เช่น เพิ่มสารตั้งต้น สมดุลมักเลื่อนไปทางผลิตภัณฑ์",
            formula: "Q<K\\Rightarrow \\text{shift right},\\quad Q>K\\Rightarrow \\text{shift left}",
            example: {
              title: "Le Chatelier — เพิ่ม reactant",
              problem: "เพิ่ม reactant ในระบบสมดุล ระบบเลื่อนไปทางใด",
              steps: ["reactant เพิ่มทำให้ Q ลดลง", "ระบบใช้ reactant เพิ่ม", "สมดุลเลื่อนไปทาง products"],
            },
            practice: "ถ้าเพิ่มผลิตภัณฑ์ ระบบจะเลื่อนไปทางใด",
          },
        ],
      },
    ],
    formulas: [
      { id: "calorimetry", topic: "Thermochemistry", name: "Heat", latex: "q=mc\\Delta T", usage: "คำนวณความร้อนจากการเปลี่ยนอุณหภูมิ" },
      { id: "reaction-quotient", topic: "Equilibrium", name: "Reaction Quotient", latex: "Q=\\frac{[products]}{[reactants]}", usage: "เปรียบเทียบกับ K เพื่อทำนายทิศทาง" },
      { id: "effective-nuclear", topic: "Atomic Structure", name: "Effective Nuclear Charge", latex: "Z_{eff}=Z-S", usage: "ช่วยอธิบาย periodic trends" },
    ],
    flashcards: [
      { id: "chem-qmct", front: "Calorimetry", back: "$q=mc\\Delta T$" },
      { id: "chem-periodic", front: "Atomic radius trend", back: "ลดจากซ้ายไปขวา และเพิ่มจากบนลงล่างโดยทั่วไป" },
      { id: "chem-lechatelier", front: "Le Chatelier", back: "ระบบเลื่อนไปทิศที่ลดผลรบกวน" },
      { id: "chem-spontaneous", front: "Spontaneous process", back: "$\\Delta G<0$" },
    ],
    quizzes: [
      {
        id: "chem-q2",
        chapterId: "thermochemistry",
        question: "Calculate q for 100 g water, $c=4.18J/gC$, $\\Delta T=5C$.",
        options: ["418 J", "1000 J", "2090 J", "4180 J"],
        answer: 2,
        solution: "$q=mc\\Delta T=100(4.18)(5)=2090J$",
      },
      {
        id: "chem-q3",
        chapterId: "equilibrium",
        question: "If $Q<K$, the reaction tends to shift...",
        options: ["left", "right", "no shift", "cannot tell"],
        answer: 1,
        solution: "$Q<K$ หมายถึง products ยังน้อยเมื่อเทียบกับสมดุล จึงเลื่อนไปขวา",
      },
      {
        id: "chem-q4",
        chapterId: "atomic-structure",
        question: "Across a period left to right, atomic radius generally...",
        options: ["increases", "decreases", "stays constant", "becomes zero"],
        answer: 1,
        solution: "effective nuclear charge เพิ่ม จึงดึง electron ใกล้นิวเคลียสมากขึ้น",
      },
    ],
  },
  programming: {
    chapters: [
      {
        id: "basics",
        sections: [
          {
            id: "input-process-output",
            title: "Input, Process, Output",
            concept:
              "โปรแกรมส่วนใหญ่คิดเป็นสามส่วน: รับ input, ประมวลผลตาม algorithm, แล้วแสดง output การเขียน pseudocode ช่วยลดความสับสนก่อนลง syntax",
            formula: "\\text{Input}\\to\\text{Process}\\to\\text{Output}",
            example: {
              title: "Algorithm — Celsius เป็น Fahrenheit",
              problem: "ออกแบบโปรแกรมแปลง Celsius เป็น Fahrenheit",
              steps: ["รับค่า C", "คำนวณ $F=\\frac95C+32$", "แสดงค่า F"],
            },
            practice: "เขียน pseudocode หา BMI จากน้ำหนักและส่วนสูง",
          },
        ],
      },
      {
        id: "functions-arrays",
        title: "Functions and Arrays",
        description: "แยกงานเป็นฟังก์ชันและจัดการข้อมูลหลายค่า",
        sections: [
          {
            id: "functions",
            title: "Functions",
            concept:
              "function ช่วยแยกงานย่อย ลดโค้ดซ้ำ และทำให้ทดสอบง่าย ควรตั้งชื่อให้บอกพฤติกรรมและรับ input เท่าที่จำเป็น",
            formula: "return\\ value=f(input)",
            example: {
              title: "Function Design — หา average",
              problem: "เขียนแนวคิด function หา average",
              steps: ["รับ array ของตัวเลข", "รวมค่าทั้งหมด", "หารด้วยจำนวนสมาชิกและ return ผลลัพธ์"],
            },
            practice: "ออกแบบ function เช็กว่าเลขเป็น prime หรือไม่",
          },
          {
            id: "arrays",
            title: "Arrays",
            concept:
              "array ใช้เก็บข้อมูลหลายค่าที่มีลักษณะคล้ายกัน การเข้าถึงสมาชิกมักใช้ index และต้องระวัง off-by-one error",
            formula: "items[0], items[1], \\ldots, items[n-1]",
            example: {
              title: "Array Indexing — index 0-based",
              problem: "array มี 5 ค่า index สุดท้ายคืออะไร",
              steps: ["index เริ่มที่ 0", "สมาชิก 5 ตัวมี index 0 ถึง 4", "index สุดท้ายคือ 4"],
            },
            practice: "เขียน loop หาค่าสูงสุดใน array",
          },
        ],
      },
    ],
    formulas: [
      { id: "ipo", topic: "Algorithm", name: "Input Process Output", latex: "\\text{Input}\\to\\text{Process}\\to\\text{Output}", usage: "ใช้วางแผนโปรแกรมพื้นฐาน" },
      { id: "array-index", topic: "Arrays", name: "Zero-based Index", latex: "last\\ index=n-1", usage: "ช่วยหลีกเลี่ยง off-by-one error" },
    ],
    flashcards: [
      { id: "prog-ipo", front: "IPO model", back: "Input -> Process -> Output" },
      { id: "prog-off-by-one", front: "Array length n last index", back: "$n-1$ เมื่อ index เริ่มที่ 0" },
      { id: "prog-pseudocode", front: "Why pseudocode?", back: "ช่วยคิด algorithm ก่อนติด syntax" },
    ],
    quizzes: [
      {
        id: "prog-q2",
        chapterId: "functions-arrays",
        question: "An array has length 8. What is the last valid zero-based index?",
        options: ["6", "7", "8", "9"],
        answer: 1,
        solution: "zero-based index เริ่มที่ 0 ดังนั้นตัวสุดท้ายคือ $n-1=7$",
      },
      {
        id: "prog-q3",
        chapterId: "basics",
        question: "Which step should happen before writing code for a tricky problem?",
        options: ["Guess output", "Write pseudocode", "Delete variables", "Skip testing"],
        answer: 1,
        solution: "pseudocode ช่วยจัด algorithm ให้ชัดก่อนลง syntax",
      },
    ],
  },
};

export function enrichSubject(subject) {
  let extra = enhancements[subject.id];
  const more = extraContentMap[subject.id];

  if (more) {
    if (!extra) {
      extra = more;
    } else {
      extra = {
        chapters: mergeChapters(extra.chapters ?? [], more.chapters ?? []),
        formulas: [...(extra.formulas ?? []), ...(more.formulas ?? [])],
        flashcards: [...(extra.flashcards ?? []), ...(more.flashcards ?? [])],
        quizzes: [...(extra.quizzes ?? []), ...(more.quizzes ?? [])]
      };
    }
  }

  if (!extra) return subject;

  return {
    ...subject,
    chapters: mergeChapters(subject.chapters, extra.chapters),
    formulas: [...(subject.formulas || []), ...(extra.formulas || [])],
    flashcards: [...(subject.flashcards || []), ...(extra.flashcards || [])],
    quizzes: [...(subject.quizzes || []), ...(extra.quizzes || [])],
  };
}
