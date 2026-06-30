export const moreCalculus2 = {
  chapters: [
    {
      id: "differential-equations",
      title: "Introduction to Differential Equations",
      description: "สมการอนุพันธ์อันดับหนึ่ง วิธี Separation of Variables และการประยุกต์",
      sections: [
        {
          id: "intro-ode",
          title: "Introduction to Differential Equations",
          source: "Stewart Calculus, Ch 9.1-9.2, p.549",
          concept:
            "สมการอนุพันธ์ (DE) คือสมการที่มีฟังก์ชันและอนุพันธ์ของมัน ลำดับ = ระดับสูงสุดของอนุพันธ์ การแก้ DE = หาฟังก์ชัน $y(x)$ ที่ thỏa สมการ คำตอบทั่วไป (general solution) มี constant of integration; คำตอบเฉพาะ (particular) ใช้ initial condition",
          formula: "\\frac{dy}{dx} = f(x,y), \\quad y(x_0) = y_0",
          examples: [
            {
              title: "ตรวจสอบคำตอบของสมการอนุพันธ์",
              level: "Basic",
              tip: "ยืมฟังก์ชันไปหาอนุพันธ์ แล้ว substitute กลับลงใน DE",
              problem: "ตรวจสอบว่า $y=e^{2x}$ เป็นคำตอบของ $\\frac{dy}{dx}=2y$",
              steps: [
                "$y=e^{2x}$ → $\\frac{dy}{dx}=2e^{2x}=2y$",
                "substitute ลงใน DE: LHS $=2y$, RHS $=2y$ ✓",
                "ดังนั้น $y=e^{2x}$ คือคำตอบ",
              ],
              answer: "ใช่ $y=e^{2x}$ คือคำตอบ",
            },
            {
              title: "คำตอบทั่วไป — การแยกตัวแปร",
              level: "Medium",
              tip: "จัดรูปให้ $y$ ด้านหนึ่ง $x$ อีกด้านหนึ่ง แล้อินทิเกรต",
              problem: "แก้ $\\frac{dy}{dx}=3x^2$ กับ initial condition $y(0)=1$",
              steps: [
                "แยกตัวแปร: $dy=3x^2dx$",
                "อินทิเกรตทั้งสองข้าง: $\\int dy=\\int 3x^2dx$",
                "$y=x^3+C$",
                "ใช้ initial condition $y(0)=1$: $1=0+C$ → $C=1$",
                "particular solution: $y=x^3+1$",
              ],
              answer: "$y = x^3 + 1$",
            },
            {
              title: "สมการแยกตัวแปรได้ — การสลายตัวแบบเอกซ์โพเนนเชียล",
              level: "Medium",
              tip: "$\\frac{dA}{dt}=-kA$ (radioactive decay) $A(t)=A_0e^{-kt}$",
              problem: "วัสดุมี half-life 5730 ปี หลังจาก 11460 ปี เหลือกี่เปอร์เซนต์",
              steps: [
                "$A(t)=A_0e^{-kt}$",
                "Half-life: $A(5730)=\\frac{A_0}{2}$ → $e^{-5730k}=\\frac{1}{2}$ → $k=\\frac{\\ln 2}{5730}$",
                "หลังจาก 11460 ปี: $A(11460)=A_0e^{-k\\cdot11460}=A_0e^{-2\\ln 2}=A_0\\cdot\\frac{1}{4}$",
                "เหลือ 25%",
              ],
              answer: "$25\\%$",
            },
            {
              title: "กฎการเย็นตัวของนิวตัน",
              level: "Medium",
              tip: "$\\frac{dT}{dt}=-k(T-T_{env})$ เมื่อ $T$ = temperature, $T_{env}$ = ambient",
              problem: "ชาร้อน 90°C ห้องอุณหภูมิ 20°C หลัง 10 นาที ชาเหลือ 60°C หา $k$",
              steps: [
                "$T(t)=T_{env}+(T_0-T_{env})e^{-kt}=20+70e^{-kt}$",
                "$T(10)=60$: $60=20+70e^{-10k}$ → $e^{-10k}=\\frac{4}{7}$",
                "$k=-\\frac{\\ln(4/7)}{10}\\approx0.0558\\,min^{-1}$",
              ],
              answer: "$k \\approx 0.0558$ min$^{-1}$",
            },
          ],
          practice: "แก้ $\\frac{dy}{dx}=\\frac{y}{x}$ ด้วย $y(1)=2$ และหา $y(e)$",
        },
        {
          id: "linear-ode",
          title: "First-Order Linear Differential Equations",
          source: "Stewart Calculus, Ch 9.5, p.591",
          concept:
            "รูปแบบ $\\frac{dy}{dx}+P(x)y=Q(x)$ ใช้ integrating factor $\\mu(x)=e^{\\int P(x)dx}$ คูณทั้งสองข้างแล้ว integrate",
          formula: "\\frac{d}{dx}[\\mu(x)y]=\\mu(x)Q(x), \\quad \\mu(x)=e^{\\int P(x)dx}",
          examples: [
            {
              title: "สมการเชิงเส้น — ตัวประกอบอินทิเกรต",
              level: "Medium",
              tip: "หา $P(x)$ และ $Q(x)$ ก่อน คำนวณ integrating factor $\\mu(x)$",
              problem: "แก้ $\\frac{dy}{dx}+2y=e^{-x}$",
              steps: [
                "$P(x)=2$, $Q(x)=e^{-x}$",
                "$\\mu(x)=e^{\\int 2dx}=e^{2x}$",
                "คูณทั้งสองข้าง: $e^{2x}\\frac{dy}{dx}+2e^{2x}y=e^{2x}e^{-x}=e^x$",
                "$\\frac{d}{dx}[e^{2x}y]=e^x$",
                "integrate: $e^{2x}y=e^x+C$ → $y=e^{-x}+Ce^{-2x}$",
              ],
              answer: "$y = e^{-x} + Ce^{-2x}$",
            },
            {
              title: "การประยุกต์: วงจร RL",
              level: "Hard",
              tip: "Kirchhoff's voltage law: $L\\frac{dI}{dt}+RI=E(t)$ → linear ODE",
              problem: "วงจร RL: $L=1$ H, $R=4$ Ω, $E=12$ V ฟังก์ชั่นกระแส $I(t)$",
              steps: [
                "$\\frac{dI}{dt}+4I=12$",
                "$\\mu(t)=e^{4t}$",
                "$e^{4t}\\frac{dI}{dt}+4e^{4t}I=12e^{4t}$",
                "$\\frac{d}{dt}[e^{4t}I]=12e^{4t}$ → $e^{4t}I=3e^{4t}+C$",
                "$I(t)=3+Ce^{-4t}$ (steady-state: $I\\to3$ A)",
              ],
              answer: "$I(t) = 3 + Ce^{-4t}$ A",
            },
          ],
          practice: "แก้ $\\frac{dy}{dx}-y=e^{2x}$ ด้วย $y(0)=1$",
        },
        {
          id: "direction-fields",
          title: "Direction Fields & Qualitative Solutions",
          source: "Stewart Calculus, Ch 9.2, p.563",
          concept:
            "Direction field = กราฟลูกศรแสดงความชัน $\\frac{dy}{dx}$ ที่จุด $(x,y)$ ใช้อ่านพฤติกรรมของสารละลาย โดยไม่ต้องแก้ DE",
          formula: "\\text{Slope at } (x,y) = f(x,y)",
          examples: [
            {
              title: "การร่างแนวคำตอบจากฟิลด์ทิศทาง",
              level: "Medium",
              tip: "ที่แต่ละจุด ความชัน = $\\frac{dy}{dx}$ ไปตามลูกศร ให้ได้ solution curve",
              problem: "จากสมการ $\\frac{dy}{dx}=y(1-y)$ ร่าง solution curves ผ่าน $(0,0.5)$, $(0,2)$",
              steps: [
                "ที่ $y=0$ หรือ $y=1$: $\\frac{dy}{dx}=0$ (equilibrium)",
                "ที่ $0<y<1$: $\\frac{dy}{dx}>0$ (เพิ่มขึ้น)",
                "ที่ $y>1$: $\\frac{dy}{dx}<0$ (ลดลง)",
                "curve ผ่าน $(0,0.5)$ เพิ่มขึ้นไป $(0.5,1)$ asymptote",
                "curve ผ่าน $(0,2)$ ลดลงไป $(0.5,1)$ asymptote",
              ],
              answer: "แกว่งไปทั่วทั้ง equilibrium line $y=1$",
            },
            {
              title: "Direction field ของ $\\frac{dy}{dx}=x-y$",
              level: "Medium",
              tip: "ที่แต่ละจุด ความชัน = $x-y$; เส้น $y=x$ เป็น nullcline (ความชัน = 0)",
              problem: "อธิบายพฤติกรรม solution curve ผ่าน $(0,1)$ จาก $\\frac{dy}{dx}=x-y$",
              steps: [
                "ที่ $(0,1)$: ความชัน $=0-1=-1$ (ลดลง)",
                "เมื่อ $y>x$ ความชันเป็นลบ → curve ลดลง",
                "curve จะโค้งเข้าหาเส้น $y=x$ จากด้านบน",
                "solution มีรูป exponential decay ไปสู่ $y=x$",
              ],
              answer: "curve ลดลงและเข้าใกล้ $y=x$ แบบ asymptotic",
            },
          ],
          practice: "ร่าง direction field และ solution curves สำหรับ $\\frac{dy}{dx}=x-y$",
        },
      ],
    },
    {
      id: "sequences-series",
      sections: [
        {
          id: "power-series-applications",
          title: "Power Series and Taylor Series Applications",
          source: "Stewart Calculus, Ch 11.10, p.755",
          concept:
            "ใช้ power series ประมาณฟังก์ชัน ทำให้หา definite integral ที่ยาก หรือแก้ DE ที่ไม่มีคำตอบในรูป elementary",
          formula: "f(x) = \\sum_{n=0}^{\\infty} a_n (x-a)^n",
          examples: [
            {
              title: "การประมาณค่าอินทิกรัลจำกัดเขตด้วยอนุกรมเทย์เลอร์",
              level: "Hard",
              tip: "$\\int_0^{0.1}e^{-x^2}dx$ ยาก → ใช้ Taylor series ของ $e^{-x^2}$",
              problem: "ประมาณ $\\int_0^{0.1}e^{-x^2}dx$ โดยใช้ 3 พจน์แรกของ series",
              steps: [
                "$e^{-x^2}=1-x^2+\\frac{x^4}{2!}-\\frac{x^6}{3!}+\\cdots$",
                "$\\int_0^{0.1}(1-x^2+\\frac{x^4}{2})dx\\approx[x-\\frac{x^3}{3}+\\frac{x^5}{10}]_0^{0.1}$",
                "$=0.1-\\frac{0.001}{3}+\\frac{0.00001}{10}\\approx0.0997$",
              ],
              answer: "$\\approx 0.0997$",
            },
            {
              title: "ประมาณค่า $\\ln(1.1)$ ด้วย Maclaurin series",
              level: "Medium",
              tip: "ใช้ $\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$ เมื่อ $|x|<1$",
              problem: "ประมาณ $\\ln(1.1)$ โดยใช้ 3 พจน์แรกของ Maclaurin series ของ $\\ln(1+x)$",
              steps: [
                "แทน $x=0.1$ ใน $\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}$",
                "$\\ln(1.1)\\approx0.1-\\frac{0.01}{2}+\\frac{0.001}{3}$",
                "$=0.1-0.005+0.000333\\approx0.095333$",
              ],
              answer: "$\\approx 0.0953$ (ค่าจริง $\\approx 0.0953$)",
            },
          ],
          practice: "ใช้ Taylor series ประมาณ $\\sin(0.3)$ โดยใช้ 3 พจน์แรก",
        },
      ],
    },
  ],
  flashcards: [
    {
      id: "cal2-separable",
      front: "Separable DE: ขั้นตอน",
      back: "1) จัดรูป $g(y)dy=f(x)dx$ 2) อินทิเกรตทั้งสองข้าง 3) ใช้ IC หา $C$",
    },
    {
      id: "cal2-exponential-decay",
      front: "Radioactive decay: $A(t)=?$",
      back: "$A(t)=A_0e^{-kt}$ หรือ $A(t)=A_0(1/2)^{t/T_{1/2}}$",
    },
    {
      id: "cal2-linear-ode",
      front: "Linear ODE: $y' + P(x)y = Q(x)$",
      back: "Integrating factor: $\\mu(x)=e^{\\int P(x)dx}$",
    },
    {
      id: "cal2-newton-cooling",
      front: "Newton's Law of Cooling",
      back: "$\\frac{dT}{dt}=-k(T-T_{env})$ → $T(t)=T_{env}+(T_0-T_{env})e^{-kt}$",
    },
  ],
  quizzes: [
    {
      id: "cal2-diff-q1",
      chapterId: "differential-equations",
      question: "Check if $y=x^2+1$ satisfies $\\frac{dy}{dx}=2x$",
      options: ["Yes", "No", "Only for $x>0$", "Undefined"],
      answer: 0,
      solution: "$\\frac{d}{dx}(x^2+1)=2x$ ✓",
    },
    {
      id: "cal2-diff-q2",
      chapterId: "differential-equations",
      question: "Solve $\\frac{dy}{dx}=3y$ with $y(0)=2$",
      options: ["$y=2e^{3x}$", "$y=3e^{2x}$", "$y=e^{3x}+1$", "$y=2x^3$"],
      answer: 0,
      solution: "Separable: $\\frac{dy}{y}=3dx$ → $\\ln|y|=3x+C$ → $y=Ae^{3x}$; $y(0)=2$ gives $A=2$",
    },
    {
      id: "cal2-diff-q3",
      chapterId: "differential-equations",
      question: "Half-life of substance is 10 years. After 20 years, what % remains?",
      options: ["50%", "25%", "10%", "75%"],
      answer: 1,
      solution: "After each half-life: 100% → 50% → 25% (at $t=2\\times10$ years)",
    },
  ],
};
