/** Auto-generated base upgrade — npm run seed:from-base */
import { ex, sec } from "./helpers.mjs";

export default {
  "physics2/coulomb": {
  concept: "แรงระหว่างประจุสองตัว $q_1$ และ $q_2$ ที่ห่างกัน $r$: $F=k\\frac{|q_1q_2|}{r^2}$ โดย $k=8.99\\times10^9\\,N\\cdot m^2/C^2=\\frac{1}{4\\pi\\varepsilon_0}$ แรงระหว่างประจุเดียวกันผลักกัน ต่างกันดึงดูดกัน หลักซ้อนทับ: แรงบนประจุหนึ่งจากหลายประจุ = ผลรวมเวกเตอร์ของแรงจากประจุแต่ละตัว",
  formula: "F=k\\frac{|q_1q_2|}{r^2}, \\quad k=8.99\\times10^9\\,N\\cdot m^2/C^2",
  warning: "ใช้ $r$ เป็นระยะห่างระหว่างจุดศูนย์กลางประจุ — อย่าใช้ระยะจากขอบวัตถุ",
  examples: [
    {
      title: "แรง Coulomb ระหว่างประจุสองตัว",
      level: "Basic",
      tip: "",
      problem: "ประจุ $+3\\,\\mu C$ และ $-4\\,\\mu C$ อยู่ห่างกัน $0.2\\,m$ จงหาแรงระหว่างกัน",
      steps: [
        "$F=k\\frac{|q_1q_2|}{r^2}$",
        "$=8.99\\times10^9\\times\\frac{3\\times10^{-6}\\times4\\times10^{-6}}{(0.2)^2}$",
        "$=8.99\\times10^9\\times\\frac{12\\times10^{-12}}{0.04}$",
        "$=8.99\\times10^9\\times3\\times10^{-10}=2.70\\,N$ (ดึงดูด)"
      ],
      answer: "$=8.99\\times10^9\\times3\\times10^{-10}=2.70\\,N$"
    },
    {
      title: "หาขนาดประจุจากแรง Coulomb",
      level: "Medium",
      tip: "แรงระหว่างประจุเดียวกัน: $F=kq^2/r^2$ — แก้ $q$ แล้วตรวจหน่วย $C$",
      problem: "ประจุสองตัวขนาดเท่ากัน $q$ ห่างกัน $0.3\\,m$ แรงระหว่างกัน $1\\,N$ หาค่า $q$",
      steps: [
        "$F=k\\frac{q^2}{r^2} \\Rightarrow q=r\\sqrt{F/k}$",
        "$q=0.3\\sqrt{1/(8.99\\times10^9)}=0.3\\times3.33\\times10^{-5}$",
        "$q\\approx1.0\\times10^{-5}\\,C=10\\,\\mu C$ (ประจุเดียวกันผลักกัน)"
      ],
      answer: "$q\\approx10\\,\\mu C$"
    }
  ],
  practice: "ประจุสองตัวขนาดเท่ากัน $q$ ห่างกัน $0.3\\,m$ แรงระหว่างกัน $1\\,N$ หาค่า $q$"
},
  "physics2/electric-field-def": {
  concept: "สนามไฟฟ้า $\\vec E$ ที่จุดใดจุดหนึ่งนิยามว่า $\\vec E=\\vec F/q_0$ โดย $q_0$ คือประจุทดสอบขนาดเล็กมาก จาก point charge $q$: $E=k\\frac{|q|}{r^2}$ ทิศออกจาก $+q$, เข้าหา $-q$ เส้นสนามไฟฟ้าออกจากประจุบวก เข้าหาประจุลบ จำนวนเส้นแสดงความเข้มสนาม",
  formula: "\\vec E=\\frac{\\vec F}{q_0}=k\\frac{|q|}{r^2}\\hat r",
  warning: "ทิศของ $\\vec E$ คือทิศที่ $+q$ จะถูกผลัก — อย่าสลับกับทิศแรงที่ประจุทดสอบรับ",
  examples: [
    {
      title: "สนามไฟฟ้าจาก point charge",
      level: "Basic",
      tip: "",
      problem: "หาสนามไฟฟ้าห่างจากประจุ $+5\\,\\mu C$ ที่ระยะ $0.3\\,m$",
      steps: [
        "$E=k\\frac{|q|}{r^2}=8.99\\times10^9\\times\\frac{5\\times10^{-6}}{0.09}$",
        "$=8.99\\times10^9\\times5.56\\times10^{-5}$",
        "$=4.99\\times10^5\\,N/C$ ทิศออกจากประจุ"
      ],
      answer: "$=4.99\\times10^5\\,N/C$ ทิศออกจากประจุ"
    },
    {
      title: "สนามไฟฟ้าที่จุดกึ่งกลาง dipole",
      level: "Medium",
      tip: "ที่จุดกึ่งกลาง สนามจาก $+q$ และ $-q$ ชี้ทิศเดียวกัน — บวกขนาด",
      problem: "หาสนามไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+2\\,\\mu C$ และ $-2\\,\\mu C$ ที่ห่างกัน $0.2\\,m$",
      steps: [
        "ระยะจากแต่ละประจุถึงจุดกึ่งกลาง $r=0.1\\,m$",
        "$E_1=E_2=k|q|/r^2=8.99\\times10^9\\times2\\times10^{-6}/0.01$",
        "$E_1=E_2=1.80\\times10^6\\,N/C$ ทิศเดียวกัน",
        "$E_{total}=3.60\\times10^6\\,N/C$ จาก $+$ ไป $-$"
      ],
      answer: "$E=3.60\\times10^6\\,N/C$"
    }
  ],
  practice: "หาสนามไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+2\\,\\mu C$ และ $-2\\,\\mu C$ ที่ห่างกัน $0.2\\,m$"
},
  "physics2/gauss-law": {
  concept: "Gauss's Law: $\\Phi_E=\\oint\\vec E\\cdot d\\vec A=\\frac{q_{enc}}{\\varepsilon_0}$ (flux ไฟฟ้าผ่านผิวปิดใดๆ เท่ากับประจุที่อยู่ภายในหารด้วย $\\varepsilon_0$) ใช้หาสนามไฟฟ้าจากการกระจายประจุที่มีสมมาตร: ทรงกลม ($E=kq/r^2$), ทรงกระบอก ($E=\\lambda/2\\pi\\varepsilon_0 r$), ระนาบ ($E=\\sigma/2\\varepsilon_0$)",
  formula: "\\oint\\vec E\\cdot d\\vec A=\\frac{q_{enc}}{\\varepsilon_0}",
  warning: "Gaussian surface ต้องมีสมมาตรกับการกระจายประจุ — มิฉะนั้น $E$ ไม่คงที่บนผิว",
  examples: [
    {
      title: "Gauss's Law — ทรงกลมประจุ",
      level: "Basic",
      tip: "",
      problem: "ใช้ Gauss's Law หา E นอกทรงกลมที่มีประจุ $Q$ รัศมี $R$ ที่ระยะ $r>R$",
      steps: [
        "เลือก Gaussian surface เป็นทรงกลมรัศมี $r$",
        "ด้วยสมมาตรทรงกลม $E$ คงที่บนผิว และขนานกับ $d\\vec A$",
        "$\\Phi_E=E(4\\pi r^2)=\\frac{Q}{\\varepsilon_0}$",
        "$E=\\frac{Q}{4\\pi\\varepsilon_0 r^2}=\\frac{kQ}{r^2}$ (เหมือน point charge)"
      ],
      answer: "$E=\\frac{Q}{4\\pi\\varepsilon_0 r^2}=\\frac{kQ}{r^2}$"
    },
    {
      title: "สนามไฟฟ้าภายในตัวนำที่สมดุล",
      level: "Medium",
      tip: "ใน electrostatic equilibrium ประจุส่วนเกินอยู่ที่ผิว — $q_{enc}=0$ ภายใน",
      problem: "ใช้ Gauss's Law แสดงว่าสนามไฟฟ้าภายในตัวนำที่สมดุลเป็นศูนย์",
      steps: [
        "เลือก Gaussian surface ใดๆ อยู่ภายในตัวนำ (ไม่ถึงผิว)",
        "ใน equilibrium ไม่มีประจุภายใน → $q_{enc}=0$",
        "$\\oint\\vec E\\cdot d\\vec A=q_{enc}/\\varepsilon_0=0$",
        "ดังนั้น $E=0$ ทุกจุดภายในตัวนำ"
      ],
      answer: "$E=0$ ภายในตัวนำที่สมดุล"
    }
  ],
  practice: "ใช้ Gauss's Law แสดงว่าสนามไฟฟ้าภายในตัวนำที่สมดุลเป็นศูนย์"
},
  "physics2/electric-potential": {
  concept: "ศักย์ไฟฟ้า $V=\\frac{U}{q_0}=k\\frac{q}{r}$ เป็น scalar บอกพลังงานศักย์ต่อหนึ่งหน่วยประจุ ความสัมพันธ์กับสนาม: $\\vec E=-\\nabla V$ (E ชี้จาก V สูงไป V ต่ำ) งานในการเคลื่อนประจุ: $W=q(V_A-V_B)$ equi-potential surface ตั้งฉากกับเส้นสนามไฟฟ้าเสมอ",
  formula: "V=k\\frac{q}{r}, \\quad W=q\\Delta V",
  warning: "ศักย์เป็นสเกลาร์ — บวกแรงดันไฟฟ้า อย่าบวกเวกเตอร์ $V$ แบบ component โดยไม่จำเป็น",
  examples: [
    {
      title: "ศักย์ไฟฟ้าจากสองประจุ",
      level: "Basic",
      tip: "",
      problem: "หาศักย์ไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+3\\,\\mu C$ และ $+3\\,\\mu C$ ห่างกัน $0.4\\,m$",
      steps: [
        "จุดกึ่งกลางห่างจากแต่ละประจุ $0.2\\,m$",
        "$V_1=k\\frac{q}{r}=8.99\\times10^9\\times\\frac{3\\times10^{-6}}{0.2}=1.35\\times10^5\\,V$",
        "ศักย์รวม $=V_1+V_2=2(1.35\\times10^5)=2.70\\times10^5\\,V$ (scalar sum)"
      ],
      answer: "ศักย์รวม $=V_1+V_2=2"
    },
    {
      title: "งานในการเคลื่อนประจุในสนามศักย์",
      level: "Medium",
      tip: "งาน $W=q\\Delta V$ — ประจุบวกเคลื่อนจาก $V$ ต่ำไปสูง ต้องใส่พลังงานจากภายนอก",
      problem: "งานที่ต้องทำเพื่อเคลื่อนประจุ $+2\\,\\mu C$ จากจุด A ($V=100\\,V$) ไป B ($V=400\\,V$)",
      steps: [
        "$W=q(V_B-V_A)=2\\times10^{-6}(400-100)$",
        "$W=2\\times10^{-6}\\times300=6.0\\times10^{-4}\\,J$",
        "$W=0.60\\,mJ$"
      ],
      answer: "$W=0.60\\,mJ$"
    }
  ],
  practice: "งานที่ต้องทำเพื่อเคลื่อนประจุ $+2\\,\\mu C$ จากจุด A ($V=100\\,V$) ไป B ($V=400\\,V$)"
},
  "physics2/capacitance-def": {
  concept: "Capacitor เก็บพลังงานในรูปสนามไฟฟ้า $C=Q/V$ (farads) Parallel plate: $C=\\varepsilon_0 A/d$ พลังงานที่เก็บ: $U=\\frac{1}{2}CV^2=\\frac{Q^2}{2C}=\\frac{QV}{2}$ ต่อ capacitor แบบ series: $1/C_{eq}=\\sum1/C_i$; แบบ parallel: $C_{eq}=\\sum C_i$",
  formula: "C=\\frac{Q}{V}, \\quad U=\\frac{1}{2}CV^2",
  warning: "ความจุขึ้นกับ geometry และ dielectric — ไม่ขึ้นกับ $Q$ หรือ $V$ โดยตรง",
  examples: [
    {
      title: "Capacitor — ประจุและพลังงาน",
      level: "Basic",
      tip: "",
      problem: "Capacitor $C=20\\,\\mu F$ ต่อกับแบตเตอรี่ $12\\,V$ หาประจุและพลังงานที่เก็บ",
      steps: [
        "$Q=CV=20\\times10^{-6}\\times12=240\\,\\mu C$",
        "$U=\\frac{1}{2}CV^2=\\frac{1}{2}(20\\times10^{-6})(144)$",
        "$=1440\\times10^{-6}=1.44\\times10^{-3}\\,J=1.44\\,mJ$"
      ],
      answer: "$=1440\\times10^{-6}=1.44\\times10^{-3}\\,J=1.44\\,mJ$"
    },
    {
      title: "Capacitor ต่อ series",
      level: "Medium",
      tip: "ต่อ series: ประจุ $Q$ เท่ากันทุกตัว แต่ $V$ แบ่งตาม $C$",
      problem: "Capacitor $10\\,\\mu F$ และ $20\\,\\mu F$ ต่อ series กับ $12\\,V$ หา $C_{eq}$ และประจุ",
      steps: [
        "$1/C_{eq}=1/10+1/20=3/20 \\Rightarrow C_{eq}=6.67\\,\\mu F$",
        "$Q=C_{eq}V=6.67\\times10^{-6}\\times12=80\\,\\mu C$",
        "$V_1=Q/C_1=80/10=8\\,V$, $V_2=4\\,V$ (ตรวจ: $8+4=12\\,V$ ✓)"
      ],
      answer: "$C_{eq}=6.67\\,\\mu F$, $Q=80\\,\\mu C$"
    }
  ],
  practice: "Capacitor $10\\,\\mu F$ และ $20\\,\\mu F$ ต่อ series กับ $12\\,V$ หา $C_{eq}$ และประจุบนแต่ละตัว"
},
  "physics2/ohm": {
  concept: "กระแส $I=\\Delta Q/\\Delta t$ (ampere) ความต้านทาน $R=V/I$ (ohm) ความต้านทานขึ้นกับวัสดุ: $R=\\rho L/A$ ($\\rho$ = resistivity, $L$ = ความยาว, $A$ = พื้นที่หน้าตัด) กำลังไฟฟ้า: $P=VI=I^2R=V^2/R$",
  formula: "V=IR, \\quad P=IV=I^2R=\\frac{V^2}{R}",
  warning: "Ohm's law ใช้ได้กับ conductor ที่อุณหภูมิคงที่ — ความต้านทานเปลี่ยนเมื่อ $T$ เปลี่ยน",
  examples: [
    {
      title: "Ohm's Law — กระแสและกำลังไฟฟ้า",
      level: "Basic",
      tip: "",
      problem: "ตัวต้านทาน $R=50\\,\\Omega$ ต่อกับ $V=120\\,V$ หากระแสและกำลังไฟฟ้า",
      steps: [
        "$I=V/R=120/50=2.4\\,A$",
        "$P=I^2R=(2.4)^2(50)=288\\,W$",
        "ตรวจ: $P=V^2/R=14400/50=288\\,W$ ✓"
      ],
      answer: "ตรวจ: $P=V^2/R=14400/50=288\\,W$"
    },
    {
      title: "หลอดไฟ — หา $R$ และ $I$",
      level: "Medium",
      tip: "จาก $P=VI=V^2/R$ หา $R$ ก่อน แล้วใช้ $I=P/V$ ตรวจ",
      problem: "หลอดไฟ $60\\,W$ ต่อกับ $220\\,V$ หาความต้านทานและกระแส",
      steps: [
        "$R=V^2/P=220^2/60=806.7\\,\\Omega$",
        "$I=P/V=60/220=0.273\\,A$",
        "ตรวจ: $P=I^2R=(0.273)^2(806.7)\\approx60\\,W$ ✓"
      ],
      answer: "$R\\approx807\\,\\Omega$, $I=0.273\\,A$"
    }
  ],
  practice: "หลอดไฟ $60\\,W$ ต่อกับ $220\\,V$ หาความต้านทานและกระแส"
},
  "physics2/kirchhoff": {
  concept: "กฎ Junction (KCL): $\\sum I_{in}=\\sum I_{out}$ (อนุรักษ์ประจุ) กฎ Loop (KVL): $\\sum\\Delta V=0$ (อนุรักษ์พลังงาน) ขั้นตอนใช้ Kirchhoff: (1) กำหนดทิศกระแสในแต่ละ branch (2) ใช้กฎ junction ที่แต่ละ node (3) ใช้กฎ loop จนครบสมการ (4) แก้ระบบสมการ",
  formula: "\\sum I_{in}=\\sum I_{out}, \\quad \\sum\\Delta V_{loop}=0",
  warning: "KCL: กระแสเข้า = กระแสออกที่ junction; KVL: ผลรวม $\\Delta V$ รอบ loop = 0 (เลือกทิศ loop ให้ชัด)",
  examples: [
    {
      title: "Kirchhoff — วงจรสองแบตเตอรี่",
      level: "Basic",
      tip: "",
      problem: "วงจรมีแบตเตอรี่ $12\\,V$ และ $6\\,V$ ต่อกับตัวต้านทาน $4\\,\\Omega$ และ $2\\,\\Omega$ แบบ series หากระแส",
      steps: [
        "กฎ Loop: $12-6-4I-2I=0$",
        "$6=6I$",
        "$I=1\\,A$"
      ],
      answer: "$I=1\\,A$"
    },
    {
      title: "KCL — วงจร parallel",
      level: "Medium",
      tip: "ที่ junction: กระแสรวมแยกเข้า branch ตาม $I=V/R$ ของแต่ละทาง",
      problem: "แบตเตอรี่ $12\\,V$ ต่อ $R_1=6\\,\\Omega$ และ $R_2=3\\,\\Omega$ แบบ parallel หากระแสรวม",
      steps: [
        "$I_1=V/R_1=12/6=2\\,A$, $I_2=12/3=4\\,A$",
        "KCL ที่ junction: $I_{total}=I_1+I_2=6\\,A$",
        "KVL: แรงดันทุก branch เท่ากัน $12\\,V$ ✓"
      ],
      answer: "$I_{total}=6\\,A$"
    }
  ],
  practice: "วงจร bridge Wheatstone มีตัวต้านทาน 4 ตัว ใช้ Kirchhoff หากระแสในแต่ละ branch"
},
  "physics2/rc-circuit": {
  concept: "Charging: $q(t)=C\\varepsilon(1-e^{-t/RC})$, $V_C=\\varepsilon(1-e^{-t/RC})$ Discharging: $q(t)=Q_0e^{-t/RC}$ เวลา $\\tau=RC$ คือ time constant: หลัง $1\\tau$ capacitor ชาร์จถึง $63\\%$ หลัง $5\\tau$ ถือว่าชาร์จเต็มหรือ discharge หมด",
  formula: "\\tau=RC, \\quad V_C=V_0(1-e^{-t/RC})",
  warning: "ที่ $t=0$ ตัวเก็บประจุเป็น open circuit (กระแสเริ่มสูง) — ใช้ $Q(t)=Q_f(1-e^{-t/RC})$",
  examples: [
    {
      title: "RC Circuit — หา τ และ V_C",
      level: "Basic",
      tip: "",
      problem: "$R=10\\,k\\Omega$, $C=100\\,\\mu F$, $\\varepsilon=9\\,V$ หา $\\tau$ และแรงดันบน C หลัง 1 s",
      steps: [
        "$\\tau=RC=10\\times10^3\\times100\\times10^{-6}=1\\,s$",
        "$V_C=9(1-e^{-1/1})=9(1-e^{-1})=9(0.632)\\approx5.69\\,V$"
      ],
      answer: "$V_C=9"
    },
    {
      title: "เปรียบเทียบ time constant",
      level: "Medium",
      tip: "$\\tau=RC$ — คูณ $R$ กับ $C$ แล้วเปรียบเทียบหน่วยวินาที",
      problem: "ถ้า $R=5\\,k\\Omega$, $C=200\\,\\mu F$ เปรียบเทียบ $\\tau$ กับ $R=10\\,k\\Omega$, $C=100\\,\\mu F$",
      steps: [
        "$\\tau_1=5\\times10^3\\times200\\times10^{-6}=1.0\\,s$",
        "$\\tau_2=10\\times10^3\\times100\\times10^{-6}=1.0\\,s$",
        "$\\tau_1=\\tau_2$ — ผลิต $RC$ เท่ากัน แม้ $R,C$ ต่างกัน"
      ],
      answer: "$\\tau=1.0\\,s$ ทั้งคู่"
    }
  ],
  practice: "ถ้า $R=5\\,k\\Omega$, $C=200\\,\\mu F$ เปรียบเทียบ $\\tau$ กับตัวอย่างด้านบน"
},
  "physics2/magnetic-force": {
  concept: "แรงแม่เหล็กบนประจุ: $\\vec F=q\\vec v\\times\\vec B$ ขนาด $F=qvB\\sin\\theta$ ทิศใช้ right-hand rule แรงบนตัวนำกระแส: $\\vec F=I\\vec L\\times\\vec B$ ขนาด $F=BIL\\sin\\theta$ ประจุในสนาม uniform เคลื่อนที่เป็นวงกลม: $r=mv/qB$",
  formula: "F=qvB\\sin\\theta, \\quad F=BIL\\sin\\theta",
  warning: "ใช้ right-hand rule สำหรับ $\\vec F=q\\vec v\\times\\vec B$ — มุมระหว่าง $v$ กับ $B$ สำคัญ",
  examples: [
    {
      title: "แรงแม่เหล็กบนอิเล็กตรอน — รัศมีวง",
      level: "Basic",
      tip: "",
      problem: "อิเล็กตรอน ($q=1.6\\times10^{-19}\\,C$, $m=9.11\\times10^{-31}\\,kg$) เคลื่อนที่ $3\\times10^6\\,m/s$ ตั้งฉากกับ $B=0.5\\,T$ หารัศมีการเคลื่อนที่",
      steps: [
        "$r=mv/qB$",
        "$=\\frac{9.11\\times10^{-31}\\times3\\times10^6}{1.6\\times10^{-19}\\times0.5}$",
        "$=\\frac{2.73\\times10^{-24}}{8\\times10^{-20}}=3.41\\times10^{-5}\\,m=0.034\\,mm$"
      ],
      answer: "$=\\frac{2.73\\times10^{-24}}{8\\times10^{-20}}=3.41\\times10^{-5}\\,m=0.034\\,mm$"
    },
    {
      title: "แรงบนสายไฟในสนามแม่เหล็ก",
      level: "Medium",
      tip: "มุม $90°$ → $\\sin\\theta=1$ ใช้ $F=BIL$",
      problem: "สายไฟยาว $0.5\\,m$ มีกระแส $3\\,A$ ในสนาม $B=0.8\\,T$ ตั้งฉากกัน หาแรง",
      steps: [
        "$F=BIL\\sin\\theta=0.8\\times3\\times0.5\\times1$",
        "$F=1.2\\,N$",
        "ทิศตาม right-hand rule: $I\\times B$"
      ],
      answer: "$F=1.2\\,N$"
    }
  ],
  practice: "สายไฟยาว $0.5\\,m$ มีกระแส $3\\,A$ ในสนาม $B=0.8\\,T$ ตั้งฉากกัน หาแรง"
},
  "physics2/ampere-law": {
  concept: "Biot-Savart Law: $d\\vec B=\\frac{\\mu_0}{4\\pi}\\frac{Id\\vec l\\times\\hat r}{r^2}$ สนามจากสายตรง: $B=\\frac{\\mu_0 I}{2\\pi r}$ Ampere's Law: $\\oint\\vec B\\cdot d\\vec l=\\mu_0 I_{enc}$ ใช้กับสมมาตร เช่น solenoid: $B=\\mu_0 nI$ ($n$ = จำนวนรอบต่อเมตร)",
  formula: "B=\\frac{\\mu_0 I}{2\\pi r}, \\quad B_{solenoid}=\\mu_0 nI",
  warning: "Amère's law ใช้ได้เมื่อความเข้ม $B$ คงที่รอบ loop — เลือก Amperian loop ให้สมมาตร",
  examples: [
    {
      title: "สนาม B จากสายตรงกระแสไฟฟ้า",
      level: "Basic",
      tip: "",
      problem: "สายตรงยาวมีกระแส $5\\,A$ หา B ที่ระยะ $0.1\\,m$",
      steps: [
        "$B=\\frac{\\mu_0 I}{2\\pi r}$",
        "$=\\frac{4\\pi\\times10^{-7}\\times5}{2\\pi\\times0.1}$",
        "$=\\frac{2\\times10^{-6}}{0.1\\times2}=10^{-5}\\,T=10\\,\\mu T$"
      ],
      answer: "$=\\frac{2\\times10^{-6}}{0.1\\times2}=10^{-5}\\,T=10\\,\\mu T$"
    },
    {
      title: "สนามแม่เหล็กใน solenoid",
      level: "Medium",
      tip: "$n=N/L$ คือจำนวนรอบต่อเมตร แล้ว $B=\\mu_0 nI$",
      problem: "Solenoid 200 รอบ ยาว $0.5\\,m$ มีกระแส $2\\,A$ หาสนามแม่เหล็กภายใน",
      steps: [
        "$n=N/L=200/0.5=400\\,\\text{turns/m}$",
        "$B=\\mu_0 nI=4\\pi\\times10^{-7}\\times400\\times2$",
        "$B=1.0\\times10^{-3}\\,T=1.0\\,mT$"
      ],
      answer: "$B=1.0\\,mT$"
    }
  ],
  practice: "Solenoid 200 รอบ ยาว $0.5\\,m$ มีกระแส $2\\,A$ หาสนามแม่เหล็กภายใน"
},
  "physics2/faraday": {
  concept: "Faraday's Law: $\\mathcal{E}=-\\frac{d\\Phi_B}{dt}$ โดย $\\Phi_B=\\int\\vec B\\cdot d\\vec A$ คือ magnetic flux เครื่องหมายลบมาจาก Lenz's Law: กระแสที่เกิดขึ้นต้านการเปลี่ยนแปลงของ flux สำหรับ $N$ รอบ: $\\mathcal{E}=-N\\frac{d\\Phi_B}{dt}$",
  formula: "\\mathcal{E}=-N\\frac{d\\Phi_B}{dt}, \\quad \\Phi_B=BA\\cos\\theta",
  warning: "Lenz's law: กระแสเหนี่ยวนำต่อต้านการเปลี่ยน flux — ตรวจเครื่องหมาย $\\mathcal{E}$",
  examples: [
    {
      title: "Faraday's Law — หา EMF จาก ΔΦ",
      level: "Basic",
      tip: "",
      problem: "ขดลวด 50 รอบ พื้นที่ $0.02\\,m^2$ สนามแม่เหล็กเปลี่ยนจาก 0 เป็น $0.4\\,T$ ใน $0.1\\,s$ หา EMF",
      steps: [
        "$\\frac{d\\Phi_B}{dt}=A\\frac{dB}{dt}=0.02\\times\\frac{0.4}{0.1}=0.08\\,Wb/s$",
        "$|\\mathcal{E}|=N\\frac{d\\Phi_B}{dt}=50\\times0.08=4\\,V$"
      ],
      answer: "$|\\mathcal{E}|=N\\frac{d\\Phi_B}{dt}=50\\times0.08=4\\,V$"
    },
    {
      title: "EMF สูงสุดจากขดลวดหมุน",
      level: "Medium",
      tip: "Peak EMF: $\\mathcal{E}_{max}=NBA\\omega$ โดย $\\omega=2\\pi f$",
      problem: "ขดลวด 1 รอบ หมุนใน $B=0.5\\,T$ อัตรา $60\\,rev/s$ พื้นที่ $0.01\\,m^2$ หา peak EMF",
      steps: [
        "$\\omega=2\\pi(60)=377\\,rad/s$",
        "$\\mathcal{E}_{max}=NBA\\omega=0.5\\times0.01\\times377$",
        "$\\mathcal{E}_{max}=1.89\\,V$"
      ],
      answer: "$\\mathcal{E}_{max}\\approx1.89\\,V$"
    }
  ],
  practice: "ขดลวดหมุนใน B คงที่ $0.5\\,T$ อัตรา $60\\,rev/s$ พื้นที่ $0.01\\,m^2$ หา peak EMF"
},
  "physics2/wave-basics": {
  concept: "คลื่นเป็นการแพร่การสั่นสะเทือนในสื่อหรือสนาม แบ่งเป็นคลื่นตามยาวและตามขวาง ความเร็วคลื่นสัมพันธ์กับความถี่และความยาวคลื่น: $v=f\\lambda$. Superposition ทำให้เกิด interference และ standing waves เมื่อคลื่นทั้งสองทับซ้อนกัน",
  formula: "v=f\\lambda, \\quad T=1/f, \\quad \\lambda=v/f",
  warning: "แยกความเร็วคลื่น $v$ กับความเร็วอนุภาคของ medium — อย่าสับสน $f$ กับ $\\omega$",
  examples: [
    {
      title: "Wave speed จาก $f$ และ $\\lambda$",
      level: "Basic",
      tip: "ใช้ $v=f\\lambda$ เมื่อรู้ความถี่และความยาวคลื่น",
      problem: "คลื่นบนเชือกมีความถี่ $5\\,Hz$ และความยาวคลื่น $0.4\\,m$ จงหาความเร็วคลื่น",
      steps: [
        "$v=f\\lambda=5(0.4)=2.0\\,m/s$"
      ],
      answer: "$v=2.0\\,m/s$"
    },
    {
      title: "ความถี่จาก $v$ และ $\\lambda$",
      level: "Medium",
      tip: "จัดรูป $v=f\\lambda$ เป็น $f=v/\\lambda$",
      problem: "เสียงในห้องมีความยาวคลื่น $0.75\\,m$ และความเร็วเสียง $340\\,m/s$ จงหาความถี่",
      steps: [
        "$f=v/\\lambda=340/0.75$",
        "$f=453\\,Hz$"
      ],
      answer: "$f=453\\,Hz$"
    }
  ],
  practice: "ถ้าเสียงในห้องมีความยาวคลื่น $0.75\\,m$ และความเร็วเสียง $340\\,m/s$ จงหาความถี่"
},
  "physics2/sound-doppler": {
  concept: "เสียงเป็นคลื่นตามยาวในอากาศ ความเข้มสัมพันธ์กับระดับเดซิเบล $\\beta=10\\log_{10}(I/I_0)$ ที่ $I_0=10^{-12}\\,W/m^2$. Doppler effect เปลี่ยนความถี่ที่ได้ยินเมื่อแหล่งหรือผู้สังเกตเคลื่อนที่ $f'=\\frac{v\\pm v_o}{v\\mp v_s}f$.",
  formula: "\\beta=10\\log_{10}(I/I_0), \\quad f'=\\frac{v\\pm v_o}{v\\mp v_s}f",
  warning: "ใช้เครื่องหมาย: แหล่ง/ผู้ฟังเข้าหากัน → $f$ สูงขึ้น; ถอยห่าง → $f$ ต่ำลง",
  examples: [
    {
      title: "Decibel จากความเข้ม $I$",
      level: "Basic",
      tip: "หา $\\beta$ จากความเข้มเสียงเทียบกับ $I_0$",
      problem: "เสียงความเข้ม $1\\times10^{-6}\\,W/m^2$ จงหา $\\beta$",
      steps: [
        "$\\beta=10\\log_{10}(10^6)=60\\,dB$"
      ],
      answer: "$\\beta=60\\,dB$"
    },
    {
      title: "Doppler — แหล่งถอยห่างผู้ฟัง",
      level: "Medium",
      tip: "แหล่งถอยห่าง ผู้ฟังนิ่ง: $f'=\\frac{v}{v+v_s}f$ (ใช้ $+$ ที่ $v_s$)",
      problem: "รถพยาบาลวิ่งออกจากผู้สังเกต $20\\,m/s$ แหล่ง $700\\,Hz$ ($v_{sound}=340\\,m/s$) หาความถี่ที่ได้ยิน",
      steps: [
        "$f'=\\frac{v}{v+v_s}f=\\frac{340}{340+20}\\times700$",
        "$f'=\\frac{340}{360}\\times700=661\\,Hz$",
        "ความถี่ต่ำลง (pitch ต่ำลง) เพราะแหล่งถอยห่าง"
      ],
      answer: "$f'=661\\,Hz$"
    }
  ],
  practice: "ถ้ารถพยาบาลวิ่งออกจากผู้สังเกต $20\\,m/s$ และแหล่ง $700\\,Hz$ จงหาความถี่ที่ผู้สังเกตได้ยิน"
},
  "physics2/em-waves": {
  concept: "คลื่นแม่เหล็กไฟฟ้าเป็นคลื่น transverse ที่มีสนามไฟฟ้าและสนามแม่เหล็กตั้งฉากกันและตั้งฉากกับทิศทางการเดินทาง ความเร็วในสุญญากาศ $c=3.0\\times10^8\\,m/s$ และ $c=f\\lambda$",
  formula: "c=f\\lambda",
  warning: "คลื่น EM ไม่ต้องมี medium — $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ ในสุญญากาศ",
  examples: [
    {
      title: "ความยาวคลื่นแสงสีเขียว",
      level: "Basic",
      tip: "ใช้ $c=f\\lambda$ เมื่อรู้ความถี่",
      problem: "แสงสีเขียวความถี่ $5.6\\times10^{14}\\,Hz$ จงหาความยาวคลื่น",
      steps: [
        "$\\lambda=3.0\\times10^8 / 5.6\\times10^{14} \\approx 5.36\\times10^{-7}\\,m$"
      ],
      answer: "$\\lambda\\approx5.36\\times10^{-7}\\,m$"
    },
    {
      title: "ความถี่แสงสีแดง",
      level: "Medium",
      tip: "แปลง $650\\,nm$ เป็นเมตรก่อนแทน $c=f\\lambda$",
      problem: "แสงสีแดงความยาวคลื่น $650\\,nm$ จงหาความถี่",
      steps: [
        "$\\lambda=650\\times10^{-9}\\,m$",
        "$f=c/\\lambda=3.0\\times10^8/(650\\times10^{-9})$",
        "$f=4.62\\times10^{14}\\,Hz$"
      ],
      answer: "$f=4.62\\times10^{14}\\,Hz$"
    }
  ],
  practice: "แสงสีแดงความยาวคลื่น $650\\,nm$ จงหาความถี่"
},
  "physics2/reflection-refraction": {
  concept: "การสะท้อน: มุมตกเท่ากับมุมสะท้อน $\\theta_i=\\theta_r$. การหักเห: Snell's law $n_1\\sin\\theta_1=n_2\\sin\\theta_2$. Critical angle เมื่อ $n_1>n_2$ คือ $\\sin\\theta_c=n_2/n_1$ และเกิด total internal reflection เมื่อ $\\theta_1>\\theta_c$.",
  formula: "\\theta_i=\\theta_r, \\quad n_1\\sin\\theta_1=n_2\\sin\\theta_2, \\quad \\sin\\theta_c=\\frac{n_2}{n_1}",
  warning: "Snell's law ใช้ $n_1\\sin\\theta_1=n_2\\sin\\theta_2$ — มุมวัดจาก normal",
  examples: [
    {
      title: "Snell's law — อากาศเข้าน้ำ",
      level: "Basic",
      tip: "ใช้ Snell's law เมื่อแสงจากอากาศเข้าสู่น้ำ",
      problem: "แสงจากอากาศ $n=1.00$ ตกกระทบผิวน้ำ $n=1.33$ ที่มุม $30°$ จงหามุมหักเห",
      steps: [
        "$\\sin\\theta_2=1.00\\sin30°/1.33=0.376$",
        "$\\theta_2=22.1°$"
      ],
      answer: "$\\theta_2\\approx22.1°$"
    },
    {
      title: "Total internal reflection",
      level: "Medium",
      tip: "ถ้า $n_1\\sin\\theta_1>n_2$ จะ $\\sin\\theta_2>1$ → ไม่มีหักเห เกิด TIR",
      problem: "แสงจากแก้ว $n=1.52$ ไปอากาศที่มุม $42°$ จงหามุมหักเห",
      steps: [
        "$n_1\\sin\\theta_1=1.52\\sin42°=1.52\\times0.669=1.02$",
        "$\\sin\\theta_2=1.02>1$ — ไม่มีมุมหักเหที่เป็นไปได้",
        "เกิด total internal reflection — แสงสะท้อนกลับเข้าแก้ว"
      ],
      answer: "Total internal reflection (ไม่มีหักเห)"
    }
  ],
  practice: "แสงจากแก้ว $n=1.52$ ไปอากาศที่มุม $42°$ จงหามุมหักเห"
},
  "physics2/lenses-mirrors": {
  concept: "สมการเลนส์และกระจก: $1/d_o+1/d_i=1/f$ และกำลังขยาย $M=-d_i/d_o$. เลนส์นูนเป็น converging, เลนส์เว้าเป็น diverging. ภาพจริงมี $d_i>0$ ภาพเสมือน $d_i<0$.",
  formula: "\\frac{1}{d_o}+\\frac{1}{d_i}=\\frac{1}{f}, \\quad M=-\\frac{d_i}{d_o}",
  warning: "sign convention: ระยะวัตถุ/ภาพ บวก/ลบตาม convention ของตำรา — ตรวจก่อนคำนวณ",
  examples: [
    {
      title: "Lens equation — เลนส์นูน",
      level: "Basic",
      tip: "ถ้าภาพอยู่ด้านตรงข้ามของเลนส์ $d_i$ เป็นบวก",
      problem: "วัตถุอยู่ห่าง $10\\,cm$ จากเลนส์นูนที่มี $f=15\\,cm$ จงหาตำแหน่งภาพและขนาดภาพ",
      steps: [
        "$1/d_i = 1/15 - 1/10 = -1/30$",
        "$d_i = -30\\,cm$",
        "$M = -(-30)/10 = 3$"
      ],
      answer: "ภาพเสมือนอยู่ด้านวัตถุห่าง 30 cm ขยาย 3 เท่า"
    },
    {
      title: "กระจกเว้า — ภาพเสมือน",
      level: "Medium",
      tip: "กระจกเว้า $f<0$ ใน convention Serway; วัตถุจริง $d_o>0$",
      problem: "วัตถุอยู่ $15\\,cm$ หน้ากระจกเว้า $f=-10\\,cm$ จงหา $d_i$ และลักษณะภาพ",
      steps: [
        "$1/d_i=1/f-1/d_o=1/(-10)-1/15=-1/10-1/15$",
        "$1/d_i=-5/30=-1/6 \\Rightarrow d_i=-6\\,cm$",
        "$M=-d_i/d_o=-(-6)/15=0.4$ — ภาพเสมือน ตรง ย่อ"
      ],
      answer: "$d_i=-6\\,cm$ ภาพเสมือนย่อ 0.4 เท่า"
    }
  ],
  practice: "วัตถุอยู่ $15\\,cm$ หน้ากระจกเว้า $f=10\\,cm$ จงหา $d_i$ และลักษณะภาพ"
},
  "physics2/photoelectric": {
  concept: "โฟโตอิเล็กทริก: แสงที่มีความถี่สูงมากกระทบโลหะ จะปล่อยอิเล็กตรอนไป พลังงานของโฟตอน $E=hf$ และพลังงานจลน์สูงสุดของอิเล็กตรอนคือ $K_{max}=hf-\\phi$ โดย $\\phi$ คืองานฟังก์ชันของโลหะ.",
  formula: "E=hf, \\quad K_{max}=hf-\\phi",
  warning: "พลังงานจลน์สูงสุด $K_{max}=hf-\\phi$ — ไม่ขึ้นกับความเข้มแสง",
  examples: [
    {
      title: "พลังงานโฟตอน $E=hf$",
      level: "Basic",
      tip: "ใช้ $h=6.63\\times10^{-34}\\,J\\cdot s$",
      problem: "แสงความถี่ $6.0\\times10^{14}\\,Hz$ จงหาพลังงานโฟตอน",
      steps: [
        "$E=hf=6.63\\times10^{-34}(6.0\\times10^{14})=3.98\\times10^{-19}\\,J$"
      ],
      answer: "$E\\approx3.98\\times10^{-19}\\,J$"
    },
    {
      title: "Photoelectric — $K_{max}$ จาก $\\lambda$",
      level: "Medium",
      tip: "ใช้ $hf=hc/\\lambda$ แล้วลบ $\\phi$ — แปลงหน่วยให้ตรงกัน (eV หรือ J)",
      problem: "แสง $400\\,nm$ กระทบโลหะ $\\phi=2.0\\,eV$ จงหาพลังงานจลน์สูงสุด",
      steps: [
        "$hf=hc/\\lambda=1240\\,eV\\cdot nm/400\\,nm=3.10\\,eV$",
        "$K_{max}=hf-\\phi=3.10-2.0=1.10\\,eV$",
        "$K_{max}=1.76\\times10^{-19}\\,J$"
      ],
      answer: "$K_{max}=1.10\\,eV$"
    }
  ],
  practice: "แสง $400\\,nm$ กระทบโลหะ $\\phi=2.0\\,eV$ จงหาพลังงานจลน์สูงสุด"
},
  "physics2/atomic-spectra": {
  concept: "อะตอมปล่อยหรือดูดซับพลังงานเป็นเส้นสเปกตรัม เมื่ออิเล็กตรอนกระโดดระดับ พลังงานของโฟตอนคือ $\\Delta E=hf$. สำหรับไฮโดรเจน $E_n=-13.6\\,eV/n^2$.",
  formula: "\\Delta E=hf, \\quad E_n=-\\frac{13.6\\,eV}{n^2}",
  warning: "Balmer/Rydberg ใช้ $n$ เป็นจำนวนเต็ม — แปลง $\\lambda$ เป็น m ก่อนแทน $R$",
  examples: [
    {
      title: "Hydrogen — $n=3\\to2$",
      level: "Medium",
      tip: "หา energy difference ระหว่างระดับ",
      problem: "อิเล็กตรอนจาก $n=3$ ไป $n=2$ ในไฮโดรเจน จงหาความยาวคลื่นของแสงที่ปล่อยออกมา",
      steps: [
        "$\\Delta E=1.89\\,eV = 3.02\\times10^{-19}\\,J$",
        "$\\lambda=hc/E\\approx658\\,nm$"
      ],
      answer: "$\\lambda\\approx658\\,nm$"
    },
    {
      title: "Hydrogen — $n=4\\to2$ (Balmer)",
      level: "Medium",
      tip: "$\\Delta E=13.6(1/n_f^2-1/n_i^2)\\,eV$ แล้ว $E=hf$",
      problem: "อิเล็กตรอนจาก $n=4$ ไป $n=2$ ในไฮโดรเจน จงหาพลังงานโฟตอน",
      steps: [
        "$\\Delta E=13.6\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=13.6\\times\\frac{3}{16}$",
        "$\\Delta E=2.55\\,eV=4.08\\times10^{-19}\\,J$",
        "$\\lambda=hc/E\\approx486\\,nm$ (เส้น Balmer สีฟ้า-เขียว)"
      ],
      answer: "$\\Delta E=2.55\\,eV$, $\\lambda\\approx486\\,nm$"
    }
  ],
  practice: "อิเล็กตรอนจาก $n=4$ ไป $n=2$ ในไฮโดรเจน จงหาพลังงานโฟตอน"
},
};