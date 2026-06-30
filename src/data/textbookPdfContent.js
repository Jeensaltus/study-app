/**
 * Legacy textbook supplements (formulas, flashcards, quizzes).
 * @deprecated Chapter slide content moved to src/data/textbook/ — use textbookLegacy.js for supplements only.
 * Regenerate slides: npm run seed:slides && npm run build:slides
 */
import { mergeChapters } from "./mergeUtils.js";

const textbookEnhancements = {
  calculus1: {
    chapters: [
      {
        id: "limits",
        sections: [
          {
            id: "limits-at-infinity",
            title: "Limits at Infinity and Horizontal Asymptotes",
            source: "Stewart Calculus, Ch 2.6, p162",
            concept:
              "ลิมิตที่อนันต์ใช้ดูพฤติกรรมปลายกราฟ เมื่อ $x$ โตมาก ๆ ฟังก์ชันเข้าใกล้ค่าคงที่ใด ค่านั้นคือเส้นกำกับแนวนอนของกราฟ",
            formula: "\\lim_{x\\to\\infty}f(x)=L\\Rightarrow y=L",
            example: {
              title: "Horizontal Asymptote — เศษส่วนดีกรีเท่ากัน",
              problem: "หา horizontal asymptote ของ $f(x)=\\frac{2x^2+1}{x^2-3}$",
              steps: ["ดีกรีเศษและส่วนเท่ากัน", "เทียบสัมประสิทธิ์นำหน้า $2/1$", "เส้นกำกับแนวนอนคือ $y=2$"],
            },
            practice: "หา $\\lim_{x\\to\\infty}\\frac{5x-1}{2x+7}$",
          },
          {
            id: "precise-limit",
            title: "Precise Definition of a Limit",
            source: "Stewart Calculus, Ch 2.4, p140",
            concept:
              "นิยาม epsilon-delta ทำให้คำว่าเข้าใกล้เป็นภาษาคณิตศาสตร์ที่พิสูจน์ได้: ถ้าอยากให้ค่า f เข้าใกล้ L ไม่เกิน epsilon ต้องบังคับ x ให้ใกล้ a ไม่เกิน delta",
            formula: "0<|x-a|<\\delta\\Rightarrow |f(x)-L|<\\varepsilon",
            example: {
              title: "Epsilon-Delta — พิสูจน์ $\\lim_{x\\to2}$",
              problem: "พิสูจน์แนวคิดว่า $\\lim_{x\\to2}(3x+1)=7$",
              steps: ["ต้องทำให้ $|(3x+1)-7|<\\varepsilon$", "จัดรูปได้ $3|x-2|<\\varepsilon$", "เลือก $\\delta=\\varepsilon/3$ ก็เพียงพอ"],
            },
            practice: "ลองหา delta สำหรับ $\\lim_{x\\to1}(2x+4)=6$",
          },
        ],
      },
      {
        id: "derivatives",
        sections: [
          {
            id: "derivative-as-function",
            title: "The Derivative as a Function",
            source: "Stewart Calculus, Ch 2.8, p188",
            concept:
              "เมื่อหาอนุพันธ์ได้ทุกจุดในโดเมนหนึ่ง ๆ เรามองอนุพันธ์เป็นฟังก์ชันใหม่ได้ ฟังก์ชันนี้บอกความชันของกราฟเดิมที่แต่ละ x",
            formula: "f' : x\\mapsto \\text{slope of } f \\text{ at } x",
            example: {
              title: "Power Rule — หา $f'(2)$",
              problem: "ถ้า $f(x)=x^3-x$ จงหา $f'(2)$",
              steps: ["หา $f'(x)=3x^2-1$", "แทน $x=2$", "ได้ $f'(2)=11$"],
            },
            practice: "หา $f'(-1)$ เมื่อ $f(x)=x^4+2x$",
          },
          {
            id: "natural-rates",
            title: "Rates of Change in Science",
            source: "Stewart Calculus, Ch 3.7, p260",
            concept:
              "อนุพันธ์แปลเป็นอัตราการเปลี่ยนแปลงในบริบทจริงได้ เช่น velocity จาก position, marginal cost จาก cost, หรือ rate ของปฏิกิริยา",
            formula: "v(t)=s'(t),\\quad a(t)=v'(t)=s''(t)",
            example: {
              title: "Derivative — หาความเร่ง $a(2)$",
              problem: "ถ้า $s(t)=t^3-6t$ จงหาความเร่งที่ $t=2$",
              steps: ["$v(t)=s'(t)=3t^2-6$", "$a(t)=v'(t)=6t$", "ดังนั้น $a(2)=12$"],
            },
            practice: "หา velocity ที่ $t=3$ เมื่อ $s(t)=4t^2-t$",
          },
          {
            id: "exponential-growth-decay",
            title: "Exponential Growth and Decay",
            source: "Stewart Calculus, Ch 3.8, p274",
            concept:
              "ถ้าอัตราการเปลี่ยนแปลงแปรผันตรงกับปริมาณปัจจุบัน จะได้โมเดล exponential growth/decay ใช้กับ population, cooling, radioactive decay",
            formula: "\\frac{dy}{dt}=ky\\Rightarrow y=y_0e^{kt}",
            example: {
              title: "Exponential Growth — ประชากร $e^{0.03t}$",
              problem: "ประชากรเริ่ม 1000 และโตตาม $P=1000e^{0.03t}$ จงหา P เมื่อ t=10",
              steps: ["แทน $t=10$", "$P=1000e^{0.3}$", "ได้ประมาณ $1349.9$"],
            },
            practice: "ถ้า $N=500e^{-0.2t}$ หา N เมื่อ $t=5$",
          },
        ],
      },
      {
        id: "applications",
        sections: [
          {
            id: "newtons-method",
            title: "Newton's Method",
            source: "Stewart Calculus, Ch 4.8, p386",
            concept:
              "Newton's method ใช้เส้นสัมผัสประมาณรากของสมการ ทำซ้ำจากค่าเดาเริ่มต้น โดยมักลู่เข้าเร็วเมื่อเริ่มใกล้รากพอ",
            formula: "x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}",
            example: {
              title: "Newton's Method — $x^2-2=0$",
              problem: "ใช้หนึ่งรอบของ Newton กับ $f(x)=x^2-2$, $x_1=1.5$",
              steps: ["$f(1.5)=0.25$, $f'(x)=2x$ จึง $f'(1.5)=3$", "$x_2=1.5-0.25/3$", "ได้ $x_2\\approx1.4167$"],
            },
            practice: "เริ่ม $x_1=2$ หา $x_2$ สำหรับ $f(x)=x^2-3$",
          },
        ],
      },
      {
        id: "integrals",
        sections: [
          {
            id: "area-distance-problems",
            title: "Area and Distance Problems",
            source: "Stewart Calculus, Ch 5.1, p407",
            concept:
              "อินทิกรัลเริ่มจากการประมาณพื้นที่ด้วยสี่เหลี่ยมหลายชิ้น เมื่อจำนวนชิ้นมากขึ้นและความกว้างเล็กลง ผลรวมเข้าใกล้พื้นที่จริง",
            formula: "\\int_a^b f(x)dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x",
            example: {
              title: "พื้นที่ใต้กราฟ — เรขาคณิต",
              problem: "ประมาณพื้นที่ใต้ $f(x)=x$ บน $[0,2]$ ด้วยเรขาคณิต",
              steps: ["กราฟเป็นสามเหลี่ยมฐาน 2 สูง 2", "พื้นที่ $=\\frac12(2)(2)$", "ได้ $2$"],
            },
            practice: "ใช้เรขาคณิตหาพื้นที่ใต้ $f(x)=3$ บน $[1,5]$",
          },
          {
            id: "net-change",
            title: "Net Change Theorem",
            source: "Stewart Calculus, Ch 5.4, p444",
            concept:
              "อินทิกรัลของอัตราการเปลี่ยนแปลงให้การเปลี่ยนแปลงสุทธิของปริมาณ เช่น อินทิกรัลของ velocity ให้ displacement",
            formula: "\\int_a^b F'(x)dx=F(b)-F(a)",
            example: {
              title: "Definite Integral — displacement จาก $v(t)$",
              problem: "ถ้า $v(t)=3t^2$ จาก $t=0$ ถึง $2$ displacement เท่าไร",
              steps: ["คำนวณ $\\int_0^2 3t^2dt$", "ปฏิยานุพันธ์คือ $t^3$", "ได้ $8$"],
            },
            practice: "หา net change เมื่อ rate คือ $2t+1$ บน $[0,3]$",
          },
          {
            id: "areas-between-curves",
            title: "Areas Between Curves",
            source: "Stewart Calculus, Ch 6.1, p471",
            concept:
              "พื้นที่ระหว่างกราฟหาได้จากอินทิกรัลของกราฟบนลบกราฟล่าง หลังหาจุดตัดเพื่อกำหนดช่วงอินทิเกรต",
            formula: "A=\\int_a^b (f(x)-g(x))dx",
            example: {
              title: "พื้นที่ระหว่าง 2 กราฟ — $2x$ และ $x^2$",
              problem: "หาพื้นที่ระหว่าง $y=2x$ และ $y=x^2$ บน $[0,2]$",
              steps: ["กราฟบนคือ $2x$ กราฟล่างคือ $x^2$", "$A=\\int_0^2(2x-x^2)dx$", "ได้ $[x^2-x^3/3]_0^2=4/3$"],
            },
            practice: "หาพื้นที่ระหว่าง $y=x$ และ $y=x^2$ บน $[0,1]$",
          },
        ],
      },
    ],
    formulas: [
      { id: "horizontal-asymptote", topic: "Limits", name: "Horizontal Asymptote", latex: "\\lim_{x\\to\\infty}f(x)=L\\Rightarrow y=L", usage: "อ้างอิง Stewart Ch 2.6 p162" },
      { id: "newton-method", topic: "Applications", name: "Newton's Method", latex: "x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}", usage: "อ้างอิง Stewart Ch 4.8 p386" },
      { id: "riemann-sum", topic: "Integrals", name: "Riemann Sum", latex: "\\int_a^b f(x)dx=\\lim\\sum f(x_i^*)\\Delta x", usage: "อ้างอิง Stewart Ch 5.1 p407" },
      { id: "area-between-curves", topic: "Integrals", name: "Area Between Curves", latex: "A=\\int_a^b (top-bottom)dx", usage: "อ้างอิง Stewart Ch 6.1 p471" },
    ],
    flashcards: [
      { id: "cal1-pdf-asymptote", front: "Horizontal asymptote from limit", back: "$\\lim_{x\\to\\infty}f(x)=L$ หมายถึง $y=L$" },
      { id: "cal1-pdf-newton", front: "Newton's Method", back: "$x_{n+1}=x_n-f(x_n)/f'(x_n)$" },
      { id: "cal1-pdf-net-change", front: "Net Change Theorem", back: "$\\int_a^b F'(x)dx=F(b)-F(a)$" },
      { id: "cal1-pdf-area-between", front: "Area between curves", back: "$\\int_a^b(top-bottom)dx$" },
    ],
    quizzes: [
      {
        id: "cal1-pdf-q1",
        chapterId: "limits",
        question: "What is the horizontal asymptote of $f(x)=\\frac{5x+1}{2x-3}$?",
        options: ["$y=0$", "$y=2$", "$y=\\frac52$", "None"],
        answer: 2,
        solution: "ดีกรีเท่ากัน ใช้อัตราสัมประสิทธิ์นำหน้า $5/2$ ดังนั้น asymptote คือ $y=5/2$",
      },
      {
        id: "cal1-pdf-q2",
        chapterId: "applications",
        question: "Newton's method update is...",
        options: ["$x_{n+1}=x_n+f'(x_n)$", "$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$", "$x_{n+1}=f(x_n)$", "$x_{n+1}=x_n^2$"],
        answer: 1,
        solution: "ใช้เส้นสัมผัสตัดแกน x จึงได้สูตร $x_{n+1}=x_n-f(x_n)/f'(x_n)$",
      },
      {
        id: "cal1-pdf-q3",
        chapterId: "integrals",
        question: "Area between $y=x$ and $y=x^2$ on $[0,1]$ is...",
        options: ["$1/2$", "$1/3$", "$1/6$", "$2/3$"],
        answer: 2,
        solution: "$\\int_0^1(x-x^2)dx=[x^2/2-x^3/3]_0^1=1/6$",
      },
    ],
  },
  physics1: {
    chapters: [
      {
        id: "kinematics",
        sections: [
          {
            id: "vectors-components",
            title: "Vectors and Components",
            source: "Serway Physics, Ch 3.4, p101",
            concept:
              "เวกเตอร์ในฟิสิกส์มักแยกเป็นองค์ประกอบแกน x และ y เพื่อรวมแรง ความเร็ว หรือการกระจัดได้ง่าย โดยใช้ตรีโกณมิติ",
            formula: "A_x=A\\cos\\theta,\\quad A_y=A\\sin\\theta",
            example: {
              title: "Vector Component — $A_x = A\\cos\\theta$",
              problem: "เวกเตอร์ขนาด 10 ทำมุม 30 องศากับแกน x หา $A_x$",
              steps: ["ใช้ $A_x=A\\cos\\theta$", "แทน $10\\cos30^\\circ$", "ได้ประมาณ $8.66$"],
            },
            practice: "หา $A_y$ เมื่อ A = 12 และมุม 60 องศา",
          },
          {
            id: "free-fall",
            title: "Freely Falling Objects",
            source: "Serway Physics, Ch 2.7, p76",
            concept:
              "free fall ใกล้ผิวโลกใช้ความเร่งคงที่ $g$ ลงด้านล่าง หากเลือกแกนขึ้นเป็นบวก ความเร่งคือ $-g$",
            formula: "y=y_0+v_0t-\\frac12gt^2",
            example: {
              title: "Free Fall — ระยะตก 2 s",
              problem: "ปล่อยวัตถุจากหยุดนิ่งนาน 2 s ตกลงมาไกลเท่าไร ใช้ $g=9.8$",
              steps: ["เริ่มจากหยุดนิ่ง $v_0=0$", "ระยะตก $=\\frac12gt^2$", "ได้ $0.5(9.8)(4)=19.6m$"],
            },
            practice: "หาความเร็วหลังตก 3 s จากหยุดนิ่ง",
          },
        ],
      },
      {
        id: "newton",
        sections: [
          {
            id: "uniform-circular-motion",
            title: "Uniform Circular Motion",
            source: "Serway Physics, Ch 6.1, p186",
            concept:
              "แม้วัตถุเคลื่อนที่ด้วยอัตราเร็วคงที่ในวงกลม แต่ทิศความเร็วเปลี่ยนตลอด จึงมีความเร่งเข้าสู่ศูนย์กลาง",
            formula: "a_c=\\frac{v^2}{r}",
            example: {
              title: "Centripetal Acceleration — รถวิ่งโค้ง",
              problem: "รถวิ่งโค้งรัศมี 50 m ด้วยเร็ว 10 m/s หา centripetal acceleration",
              steps: ["ใช้ $a_c=v^2/r$", "แทน $100/50$", "ได้ $2m/s^2$"],
            },
            practice: "หา $a_c$ เมื่อ $v=12m/s$, $r=24m$",
          },
        ],
      },
      {
        id: "energy",
        sections: [
          {
            id: "power-energy",
            title: "Power",
            source: "Serway Physics, Ch 8.5, p268",
            concept:
              "power คืออัตราการทำงานหรืออัตราการถ่ายโอนพลังงาน มีหน่วย watt ยิ่งทำงานเท่ากันในเวลาน้อย power ยิ่งสูง",
            formula: "P=\\frac{dW}{dt}\\approx\\frac{W}{\\Delta t}",
            example: {
              title: "Power — $P = W/t$",
              problem: "เครื่องทำงาน 600 J ใน 3 s จงหา power เฉลี่ย",
              steps: ["ใช้ $P=W/t$", "แทน $600/3$", "ได้ $200W$"],
            },
            practice: "หา power เมื่อทำงาน 1500 J ใน 10 s",
          },
        ],
      },
      {
        id: "rotation",
        title: "Rotation",
        description: "การหมุน torque moment of inertia และพลังงานจลน์เชิงหมุน",
        sections: [
          {
            id: "torque",
            title: "Torque",
            source: "Serway Physics, Ch 10.4, p336",
            concept:
              "torque วัดความสามารถของแรงในการทำให้วัตถุหมุน ขึ้นกับขนาดแรง ระยะตั้งฉากจากจุดหมุน และมุมระหว่างแรงกับแขนโมเมนต์",
            formula: "\\tau=rF\\sin\\theta",
            example: {
              title: "Torque — $\\tau = rF\\sin\\theta$",
              problem: "ใช้แรง 20 N ที่ปลายประแจยาว 0.3 m ตั้งฉากกับประแจ torque เท่าไร",
              steps: ["มุมตั้งฉากจึง $\\sin90=1$", "$\\tau=rF=0.3(20)$", "ได้ $6N\\cdot m$"],
            },
            practice: "หา torque เมื่อ r = 0.5 m, F = 10 N, มุม 30 องศา",
          },
        ],
      },
    ],
    formulas: [
      { id: "vector-components", topic: "Vectors", name: "Vector Components", latex: "A_x=A\\cos\\theta,\\ A_y=A\\sin\\theta", usage: "อ้างอิง Serway Ch 3.4 p101" },
      { id: "centripetal", topic: "Circular Motion", name: "Centripetal Acceleration", latex: "a_c=v^2/r", usage: "อ้างอิง Serway Ch 6.1 p186" },
      { id: "power", topic: "Energy", name: "Power", latex: "P=W/\\Delta t", usage: "อ้างอิง Serway Ch 8.5 p268" },
      { id: "torque", topic: "Rotation", name: "Torque", latex: "\\tau=rF\\sin\\theta", usage: "อ้างอิง Serway Ch 10.4 p336" },
    ],
    flashcards: [
      { id: "phy1-pdf-components", front: "Vector components", back: "$A_x=A\\cos\\theta$, $A_y=A\\sin\\theta$" },
      { id: "phy1-pdf-freefall", front: "Free fall position", back: "$y=y_0+v_0t-\\frac12gt^2$ ถ้าแกนขึ้นเป็นบวก" },
      { id: "phy1-pdf-centripetal", front: "Centripetal acceleration", back: "$a_c=v^2/r$" },
      { id: "phy1-pdf-torque", front: "Torque", back: "$\\tau=rF\\sin\\theta$" },
    ],
  },
  physics2: {
    chapters: [
      {
        id: "electric-field",
        sections: [
          {
            id: "conductors-equilibrium",
            title: "Conductors in Electrostatic Equilibrium",
            source: "Serway Physics, Ch 24.4, p771",
            concept:
              "ในตัวนำที่สมดุลไฟฟ้าสถิต สนามไฟฟ้าภายในตัวนำเป็นศูนย์ และประจุส่วนเกินอยู่บนผิวตัวนำ",
            formula: "E_{inside}=0",
            example: {
              title: "Conductor — E = 0 ภายใน",
              problem: "ทำไมสนามไฟฟ้าภายในตัวนำสมดุลจึงเป็นศูนย์",
              steps: ["ถ้ามีสนามภายใน ประจุอิสระจะยังเคลื่อนที่", "สมดุลหมายถึงไม่มีการเคลื่อนที่สุทธิ", "จึงต้องมี $E=0$ ภายใน"],
            },
            practice: "อธิบายตำแหน่งของประจุส่วนเกินบนตัวนำ",
          },
        ],
      },
      {
        id: "capacitance",
        title: "Capacitance and Dielectrics",
        description: "capacitors, energy storage, combinations, dielectrics",
        sections: [
          {
            id: "capacitance-definition",
            title: "Definition of Capacitance",
            source: "Serway Physics, Ch 26.1, p813",
            concept:
              "capacitance คือความสามารถในการเก็บประจุต่อความต่างศักย์ ยิ่ง C มาก ต้องใช้แรงดันน้อยเพื่อเก็บประจุเท่าเดิม",
            formula: "C=\\frac{Q}{\\Delta V}",
            example: {
              title: "Capacitance — หา C จาก Q และ V",
              problem: "capacitor มี Q = 6 microC และ V = 3 V หา C",
              steps: ["ใช้ $C=Q/V$", "$C=6/3=2$ microF", "ดังนั้น C = 2 microF"],
            },
            practice: "หา Q เมื่อ C = 5 microF และ V = 12 V",
          },
        ],
      },
      {
        id: "magnetism",
        title: "Magnetic Fields",
        description: "แรงแม่เหล็กต่อประจุและกระแสไฟฟ้า",
        sections: [
          {
            id: "magnetic-force",
            title: "Magnetic Force on a Charge",
            source: "Serway Physics, Ch 29.1, p905",
            concept:
              "ประจุที่เคลื่อนที่ในสนามแม่เหล็กจะถูกแรงตั้งฉากกับทั้งความเร็วและสนาม ขนาดขึ้นกับมุมระหว่าง $\\vec v$ กับ $\\vec B$",
            formula: "F=qvB\\sin\\theta",
            example: {
              title: "Magnetic Force — v ขนาน B",
              problem: "ถ้า v ขนานกับ B แรงแม่เหล็กเป็นเท่าไร",
              steps: ["มุม $\\theta=0$", "$\\sin0=0$", "แรงแม่เหล็กจึงเป็น 0"],
            },
            practice: "หาแรงเมื่อ q=2C, v=3m/s, B=4T, มุม 90 องศา",
          },
        ],
      },
    ],
    formulas: [
      { id: "capacitance", topic: "Capacitance", name: "Capacitance", latex: "C=Q/\\Delta V", usage: "อ้างอิง Serway Ch 26.1 p813" },
      { id: "capacitor-energy", topic: "Capacitance", name: "Capacitor Energy", latex: "U=\\frac12C(\\Delta V)^2", usage: "อ้างอิง Serway Ch 26.4 p822" },
      { id: "magnetic-force", topic: "Magnetism", name: "Magnetic Force", latex: "F=qvB\\sin\\theta", usage: "อ้างอิง Serway Ch 29.1 p905" },
    ],
  },
  chemistry: {
    chapters: [
      {
        id: "atomic-structure",
        sections: [
          {
            id: "isotopes-atomic-mass",
            title: "Isotopes and Atomic Mass",
            source: "Chemistry: The Central Science, Ch 2.3-2.4, p87-90",
            concept:
              "isotopes คืออะตอมธาตุเดียวกันที่มี neutron ต่างกัน atomic mass ในตารางธาตุเป็นค่าเฉลี่ยถ่วงน้ำหนักจาก isotope ตามสัดส่วนธรรมชาติ",
            formula: "\\bar m=\\sum_i f_i m_i",
            example: {
              title: "Isotopes — มวลอะตอมเฉลี่ย",
              problem: "ธาตุ X มี isotope 10 amu 80% และ 11 amu 20% มวลเฉลี่ยเท่าไร",
              steps: ["แปลงเปอร์เซ็นต์เป็น fraction", "$\\bar m=0.8(10)+0.2(11)$", "ได้ $10.2amu$"],
            },
            practice: "หา mass average เมื่อ isotope 20 amu 60% และ 22 amu 40%",
          },
        ],
      },
      {
        id: "stoichiometry",
        title: "Stoichiometry",
        description: "chemical equations, mole, molar mass, limiting reactants",
        sections: [
          {
            id: "mole-molar-mass",
            title: "The Mole and Molar Mass",
            source: "Chemistry: The Central Science, Ch 3.4, p129",
            concept:
              "mole เชื่อมจำนวนอนุภาคกับมวลที่ชั่งได้ในห้องแล็บ โดยใช้ Avogadro's number และ molar mass",
            formula: "n=\\frac{m}{M}",
            example: {
              title: "Mole — NaCl 58.5 g = 1 mol",
              problem: "NaCl 58.5 g มีจำนวนกี่ mol ถ้า M = 58.5 g/mol",
              steps: ["ใช้ $n=m/M$", "แทน $58.5/58.5$", "ได้ 1 mol"],
            },
            practice: "หา mol ของ CO2 44 g เมื่อ M = 44 g/mol",
          },
          {
            id: "limiting-reactants",
            title: "Limiting Reactants",
            source: "Chemistry: The Central Science, Ch 3.7, p142",
            concept:
              "limiting reactant คือสารตั้งต้นที่หมดก่อนและกำหนดปริมาณผลิตภัณฑ์สูงสุด ต้องแปลงเป็น mol แล้วเทียบตามสมการดุล",
            formula: "\\text{mol product} = \\text{mol limiting reactant}\\times\\text{stoichiometric ratio}",
            example: {
              title: "Limiting Reactant — H₂ + O₂ → H₂O",
              problem: "$2H_2+O_2\\to2H_2O$ ถ้ามี $2mol H_2$ และ $2mol O_2$ อะไรจำกัด",
              steps: ["$2mol H_2$ ต้องใช้ $1mol O_2$", "มี $O_2$ มากเกินพอ", "$H_2$ เป็น limiting reactant"],
            },
            practice: "สำหรับสมการเดียวกัน ถ้ามี $1mol H_2$ และ $0.2mol O_2$ อะไรจำกัด",
          },
        ],
      },
      {
        id: "bonding",
        title: "Chemical Bonding",
        description: "Lewis structures, formal charge และ hybridization จากตำรา",
        sections: [
          {
            id: "lewis-structures",
            title: "Lewis Structures",
            source: "Chemistry: The Central Science, Ch 8 Basic Concepts of Chemical Bonding",
            concept:
              "Lewis structure ช่วยนับ valence electrons และจัดพันธะ/lone pairs เพื่อดู connectivity, formal charge และเตรียมทำนายรูปร่างโมเลกุล",
            formula: "\\text{formal charge}=V-(N+\\frac12B)",
            example: {
              title: "Formal Charge ของ C ใน CH₄",
              problem: "คาร์บอนใน CH4 มี formal charge เท่าไร",
              steps: ["C มี valence 4", "ไม่มี lone pair และมีพันธะ 4 เส้น", "$FC=4-(0+4)=0$"],
            },
            practice: "หา formal charge ของ N ใน $NH_4^+$",
          },
        ],
      },
    ],
    formulas: [
      { id: "average-atomic-mass", topic: "Atomic Structure", name: "Average Atomic Mass", latex: "\\bar m=\\sum f_i m_i", usage: "อ้างอิง Central Science Ch 2.4 p90" },
      { id: "moles", topic: "Stoichiometry", name: "Moles", latex: "n=m/M", usage: "อ้างอิง Central Science Ch 3.4 p129" },
      { id: "formal-charge", topic: "Bonding", name: "Formal Charge", latex: "FC=V-(N+B/2)", usage: "อ้างอิง Central Science Ch 8" },
    ],
    flashcards: [
      { id: "chem-pdf-mole", front: "Moles from mass", back: "$n=m/M$" },
      { id: "chem-pdf-limiting", front: "Limiting reactant", back: "สารตั้งต้นที่หมดก่อนและจำกัด product สูงสุด" },
      { id: "chem-pdf-formal-charge", front: "Formal charge", back: "$FC=V-(N+B/2)$" },
    ],
  },
};

export { textbookEnhancements };

/** @deprecated Use subjectLoader + src/data/textbook/ instead. Kept for backward compatibility. */
export function enrichSubjectWithTextbooks(subject) {
  const extra = textbookEnhancements[subject.id];
  if (!extra) return subject;

  return {
    ...subject,
    chapters: mergeChapters(subject.chapters, extra.chapters),
    formulas: [...subject.formulas, ...(extra.formulas ?? [])],
    flashcards: [...subject.flashcards, ...(extra.flashcards ?? [])],
    quizzes: [...subject.quizzes, ...(extra.quizzes ?? [])],
  };
}
