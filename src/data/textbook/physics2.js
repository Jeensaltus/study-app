/** Auto-generated from scripts/textbook/parsed — npm run build:slides */
export const textbookPhysics2 = {
  chapters: [
  {
    "id": "electric-field",
    "title": "Electric Charge and Field",
    "description": "",
    "sections": [
      {
        "id": "coulomb",
        "title": "Coulomb's Law",
        "source": "Serway Physics for Scientists and Engineers, Ch 23, p.711–725",
        "concept": "แรงระหว่างประจุสองตัว $q_1$ และ $q_2$ ที่ห่างกัน $r$: $F=k\\frac{|q_1q_2|}{r^2}$ โดย $k=8.99\\times10^9\\,N\\cdot m^2/C^2=\\frac{1}{4\\pi\\varepsilon_0}$ แรงระหว่างประจุเดียวกันผลักกัน ต่างกันดึงดูดกัน หลักซ้อนทับ: แรงบนประจุหนึ่งจากหลายประจุ = ผลรวมเวกเตอร์ของแรงจากประจุแต่ละตัว",
        "formula": "F=k\\frac{|q_1q_2|}{r^2}, \\quad k=8.99\\times10^9\\,N\\cdot m^2/C^2",
        "warning": "ใช้ $r$ เป็นระยะห่างระหว่างจุดศูนย์กลางประจุ — อย่าใช้ระยะจากขอบวัตถุ",
        "examples": [
          {
            "title": "แรง Coulomb ระหว่างประจุสองตัว",
            "level": "Basic",
            "tip": "",
            "problem": "ประจุ $+3\\,\\mu C$ และ $-4\\,\\mu C$ อยู่ห่างกัน $0.2\\,m$ จงหาแรงระหว่างกัน",
            "steps": [
              "$F=k\\frac{|q_1q_2|}{r^2}$",
              "$=8.99\\times10^9\\times\\frac{3\\times10^{-6}\\times4\\times10^{-6}}{(0.2)^2}$",
              "$=8.99\\times10^9\\times\\frac{12\\times10^{-12}}{0.04}$",
              "$=8.99\\times10^9\\times3\\times10^{-10}=2.70\\,N$ (ดึงดูด)"
            ],
            "answer": "$=8.99\\times10^9\\times3\\times10^{-10}=2.70\\,N$"
          },
          {
            "title": "หาขนาดประจุจากแรง Coulomb",
            "level": "Medium",
            "tip": "แรงระหว่างประจุเดียวกัน: $F=kq^2/r^2$ — แก้ $q$ แล้วตรวจหน่วย $C$",
            "problem": "ประจุสองตัวขนาดเท่ากัน $q$ ห่างกัน $0.3\\,m$ แรงระหว่างกัน $1\\,N$ หาค่า $q$",
            "steps": [
              "$F=k\\frac{q^2}{r^2} \\Rightarrow q=r\\sqrt{F/k}$",
              "$q=0.3\\sqrt{1/(8.99\\times10^9)}=0.3\\times3.33\\times10^{-5}$",
              "$q\\approx1.0\\times10^{-5}\\,C=10\\,\\mu C$ (ประจุเดียวกันผลักกัน)"
            ],
            "answer": "$q\\approx10\\,\\mu C$"
          }
        ],
        "practice": "ประจุสองตัวขนาดเท่ากัน $q$ ห่างกัน $0.3\\,m$ แรงระหว่างกัน $1\\,N$ หาค่า $q$"
      },
      {
        "id": "electric-field-def",
        "title": "Electric Field",
        "source": "Serway Physics for Scientists and Engineers, Ch 23, p.725–740",
        "concept": "สนามไฟฟ้า $\\vec E$ ที่จุดใดจุดหนึ่งนิยามว่า $\\vec E=\\vec F/q_0$ โดย $q_0$ คือประจุทดสอบขนาดเล็กมาก จาก point charge $q$: $E=k\\frac{|q|}{r^2}$ ทิศออกจาก $+q$, เข้าหา $-q$ เส้นสนามไฟฟ้าออกจากประจุบวก เข้าหาประจุลบ จำนวนเส้นแสดงความเข้มสนาม",
        "formula": "\\vec E=\\frac{\\vec F}{q_0}=k\\frac{|q|}{r^2}\\hat r",
        "warning": "ทิศของ $\\vec E$ คือทิศที่ $+q$ จะถูกผลัก — อย่าสลับกับทิศแรงที่ประจุทดสอบรับ",
        "examples": [
          {
            "title": "สนามไฟฟ้าจาก point charge",
            "level": "Basic",
            "tip": "",
            "problem": "หาสนามไฟฟ้าห่างจากประจุ $+5\\,\\mu C$ ที่ระยะ $0.3\\,m$",
            "steps": [
              "$E=k\\frac{|q|}{r^2}=8.99\\times10^9\\times\\frac{5\\times10^{-6}}{0.09}$",
              "$=8.99\\times10^9\\times5.56\\times10^{-5}$",
              "$=4.99\\times10^5\\,N/C$ ทิศออกจากประจุ"
            ],
            "answer": "$=4.99\\times10^5\\,N/C$ ทิศออกจากประจุ"
          },
          {
            "title": "สนามไฟฟ้าที่จุดกึ่งกลาง dipole",
            "level": "Medium",
            "tip": "ที่จุดกึ่งกลาง สนามจาก $+q$ และ $-q$ ชี้ทิศเดียวกัน — บวกขนาด",
            "problem": "หาสนามไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+2\\,\\mu C$ และ $-2\\,\\mu C$ ที่ห่างกัน $0.2\\,m$",
            "steps": [
              "ระยะจากแต่ละประจุถึงจุดกึ่งกลาง $r=0.1\\,m$",
              "$E_1=E_2=k|q|/r^2=8.99\\times10^9\\times2\\times10^{-6}/0.01$",
              "$E_1=E_2=1.80\\times10^6\\,N/C$ ทิศเดียวกัน",
              "$E_{total}=3.60\\times10^6\\,N/C$ จาก $+$ ไป $-$"
            ],
            "answer": "$E=3.60\\times10^6\\,N/C$"
          }
        ],
        "practice": "หาสนามไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+2\\,\\mu C$ และ $-2\\,\\mu C$ ที่ห่างกัน $0.2\\,m$"
      },
      {
        "id": "gauss-law",
        "title": "Gauss's Law",
        "source": "Serway Physics for Scientists and Engineers, Ch 24, p.740–760",
        "concept": "Gauss's Law: $\\Phi_E=\\oint\\vec E\\cdot d\\vec A=\\frac{q_{enc}}{\\varepsilon_0}$ (flux ไฟฟ้าผ่านผิวปิดใดๆ เท่ากับประจุที่อยู่ภายในหารด้วย $\\varepsilon_0$) ใช้หาสนามไฟฟ้าจากการกระจายประจุที่มีสมมาตร: ทรงกลม ($E=kq/r^2$), ทรงกระบอก ($E=\\lambda/2\\pi\\varepsilon_0 r$), ระนาบ ($E=\\sigma/2\\varepsilon_0$)",
        "formula": "\\oint\\vec E\\cdot d\\vec A=\\frac{q_{enc}}{\\varepsilon_0}",
        "warning": "Gaussian surface ต้องมีสมมาตรกับการกระจายประจุ — มิฉะนั้น $E$ ไม่คงที่บนผิว",
        "examples": [
          {
            "title": "Gauss's Law — ทรงกลมประจุ",
            "level": "Basic",
            "tip": "",
            "problem": "ใช้ Gauss's Law หา E นอกทรงกลมที่มีประจุ $Q$ รัศมี $R$ ที่ระยะ $r>R$",
            "steps": [
              "เลือก Gaussian surface เป็นทรงกลมรัศมี $r$",
              "ด้วยสมมาตรทรงกลม $E$ คงที่บนผิว และขนานกับ $d\\vec A$",
              "$\\Phi_E=E(4\\pi r^2)=\\frac{Q}{\\varepsilon_0}$",
              "$E=\\frac{Q}{4\\pi\\varepsilon_0 r^2}=\\frac{kQ}{r^2}$ (เหมือน point charge)"
            ],
            "answer": "$E=\\frac{Q}{4\\pi\\varepsilon_0 r^2}=\\frac{kQ}{r^2}$"
          },
          {
            "title": "สนามไฟฟ้าภายในตัวนำที่สมดุล",
            "level": "Medium",
            "tip": "ใน electrostatic equilibrium ประจุส่วนเกินอยู่ที่ผิว — $q_{enc}=0$ ภายใน",
            "problem": "ใช้ Gauss's Law แสดงว่าสนามไฟฟ้าภายในตัวนำที่สมดุลเป็นศูนย์",
            "steps": [
              "เลือก Gaussian surface ใดๆ อยู่ภายในตัวนำ (ไม่ถึงผิว)",
              "ใน equilibrium ไม่มีประจุภายใน → $q_{enc}=0$",
              "$\\oint\\vec E\\cdot d\\vec A=q_{enc}/\\varepsilon_0=0$",
              "ดังนั้น $E=0$ ทุกจุดภายในตัวนำ"
            ],
            "answer": "$E=0$ ภายในตัวนำที่สมดุล"
          }
        ],
        "practice": "ใช้ Gauss's Law แสดงว่าสนามไฟฟ้าภายในตัวนำที่สมดุลเป็นศูนย์"
      },
      {
        "id": "electric-potential",
        "title": "Electric Potential",
        "source": "Serway Physics for Scientists and Engineers, Ch 25, p.760–780",
        "concept": "ศักย์ไฟฟ้า $V=\\frac{U}{q_0}=k\\frac{q}{r}$ เป็น scalar บอกพลังงานศักย์ต่อหนึ่งหน่วยประจุ ความสัมพันธ์กับสนาม: $\\vec E=-\\nabla V$ (E ชี้จาก V สูงไป V ต่ำ) งานในการเคลื่อนประจุ: $W=q(V_A-V_B)$ equi-potential surface ตั้งฉากกับเส้นสนามไฟฟ้าเสมอ",
        "formula": "V=k\\frac{q}{r}, \\quad W=q\\Delta V",
        "warning": "ศักย์เป็นสเกลาร์ — บวกแรงดันไฟฟ้า อย่าบวกเวกเตอร์ $V$ แบบ component โดยไม่จำเป็น",
        "examples": [
          {
            "title": "ศักย์ไฟฟ้าจากสองประจุ",
            "level": "Basic",
            "tip": "",
            "problem": "หาศักย์ไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+3\\,\\mu C$ และ $+3\\,\\mu C$ ห่างกัน $0.4\\,m$",
            "steps": [
              "จุดกึ่งกลางห่างจากแต่ละประจุ $0.2\\,m$",
              "$V_1=k\\frac{q}{r}=8.99\\times10^9\\times\\frac{3\\times10^{-6}}{0.2}=1.35\\times10^5\\,V$",
              "ศักย์รวม $=V_1+V_2=2(1.35\\times10^5)=2.70\\times10^5\\,V$ (scalar sum)"
            ],
            "answer": "ศักย์รวม $=V_1+V_2=2"
          },
          {
            "title": "งานในการเคลื่อนประจุในสนามศักย์",
            "level": "Medium",
            "tip": "งาน $W=q\\Delta V$ — ประจุบวกเคลื่อนจาก $V$ ต่ำไปสูง ต้องใส่พลังงานจากภายนอก",
            "problem": "งานที่ต้องทำเพื่อเคลื่อนประจุ $+2\\,\\mu C$ จากจุด A ($V=100\\,V$) ไป B ($V=400\\,V$)",
            "steps": [
              "$W=q(V_B-V_A)=2\\times10^{-6}(400-100)$",
              "$W=2\\times10^{-6}\\times300=6.0\\times10^{-4}\\,J$",
              "$W=0.60\\,mJ$"
            ],
            "answer": "$W=0.60\\,mJ$"
          }
        ],
        "practice": "งานที่ต้องทำเพื่อเคลื่อนประจุ $+2\\,\\mu C$ จากจุด A ($V=100\\,V$) ไป B ($V=400\\,V$)"
      }
    ]
  },
  {
    "id": "capacitance",
    "title": "Capacitance",
    "description": "",
    "sections": [
      {
        "id": "capacitance-def",
        "title": "Capacitance and Energy Storage",
        "source": "Serway Physics for Scientists and Engineers, Ch 26, p.780–795",
        "concept": "Capacitor เก็บพลังงานในรูปสนามไฟฟ้า $C=Q/V$ (farads) Parallel plate: $C=\\varepsilon_0 A/d$ พลังงานที่เก็บ: $U=\\frac{1}{2}CV^2=\\frac{Q^2}{2C}=\\frac{QV}{2}$ ต่อ capacitor แบบ series: $1/C_{eq}=\\sum1/C_i$; แบบ parallel: $C_{eq}=\\sum C_i$",
        "formula": "C=\\frac{Q}{V}, \\quad U=\\frac{1}{2}CV^2",
        "warning": "ความจุขึ้นกับ geometry และ dielectric — ไม่ขึ้นกับ $Q$ หรือ $V$ โดยตรง",
        "examples": [
          {
            "title": "Capacitor — ประจุและพลังงาน",
            "level": "Basic",
            "tip": "",
            "problem": "Capacitor $C=20\\,\\mu F$ ต่อกับแบตเตอรี่ $12\\,V$ หาประจุและพลังงานที่เก็บ",
            "steps": [
              "$Q=CV=20\\times10^{-6}\\times12=240\\,\\mu C$",
              "$U=\\frac{1}{2}CV^2=\\frac{1}{2}(20\\times10^{-6})(144)$",
              "$=1440\\times10^{-6}=1.44\\times10^{-3}\\,J=1.44\\,mJ$"
            ],
            "answer": "$=1440\\times10^{-6}=1.44\\times10^{-3}\\,J=1.44\\,mJ$"
          },
          {
            "title": "Capacitor ต่อ series",
            "level": "Medium",
            "tip": "ต่อ series: ประจุ $Q$ เท่ากันทุกตัว แต่ $V$ แบ่งตาม $C$",
            "problem": "Capacitor $10\\,\\mu F$ และ $20\\,\\mu F$ ต่อ series กับ $12\\,V$ หา $C_{eq}$ และประจุ",
            "steps": [
              "$1/C_{eq}=1/10+1/20=3/20 \\Rightarrow C_{eq}=6.67\\,\\mu F$",
              "$Q=C_{eq}V=6.67\\times10^{-6}\\times12=80\\,\\mu C$",
              "$V_1=Q/C_1=80/10=8\\,V$, $V_2=4\\,V$ (ตรวจ: $8+4=12\\,V$ ✓)"
            ],
            "answer": "$C_{eq}=6.67\\,\\mu F$, $Q=80\\,\\mu C$"
          }
        ],
        "practice": "Capacitor $10\\,\\mu F$ และ $20\\,\\mu F$ ต่อ series กับ $12\\,V$ หา $C_{eq}$ และประจุบนแต่ละตัว"
      }
    ]
  },
  {
    "id": "circuits",
    "title": "Electric Circuits",
    "description": "",
    "sections": [
      {
        "id": "ohm",
        "title": "Ohm's Law and Resistance",
        "source": "Serway Physics for Scientists and Engineers, Ch 27, p.795–810",
        "concept": "กระแส $I=\\Delta Q/\\Delta t$ (ampere) ความต้านทาน $R=V/I$ (ohm) ความต้านทานขึ้นกับวัสดุ: $R=\\rho L/A$ ($\\rho$ = resistivity, $L$ = ความยาว, $A$ = พื้นที่หน้าตัด) กำลังไฟฟ้า: $P=VI=I^2R=V^2/R$",
        "formula": "V=IR, \\quad P=IV=I^2R=\\frac{V^2}{R}",
        "warning": "Ohm's law ใช้ได้กับ conductor ที่อุณหภูมิคงที่ — ความต้านทานเปลี่ยนเมื่อ $T$ เปลี่ยน",
        "examples": [
          {
            "title": "Ohm's Law — กระแสและกำลังไฟฟ้า",
            "level": "Basic",
            "tip": "",
            "problem": "ตัวต้านทาน $R=50\\,\\Omega$ ต่อกับ $V=120\\,V$ หากระแสและกำลังไฟฟ้า",
            "steps": [
              "$I=V/R=120/50=2.4\\,A$",
              "$P=I^2R=(2.4)^2(50)=288\\,W$",
              "ตรวจ: $P=V^2/R=14400/50=288\\,W$ ✓"
            ],
            "answer": "ตรวจ: $P=V^2/R=14400/50=288\\,W$"
          },
          {
            "title": "หลอดไฟ — หา $R$ และ $I$",
            "level": "Medium",
            "tip": "จาก $P=VI=V^2/R$ หา $R$ ก่อน แล้วใช้ $I=P/V$ ตรวจ",
            "problem": "หลอดไฟ $60\\,W$ ต่อกับ $220\\,V$ หาความต้านทานและกระแส",
            "steps": [
              "$R=V^2/P=220^2/60=806.7\\,\\Omega$",
              "$I=P/V=60/220=0.273\\,A$",
              "ตรวจ: $P=I^2R=(0.273)^2(806.7)\\approx60\\,W$ ✓"
            ],
            "answer": "$R\\approx807\\,\\Omega$, $I=0.273\\,A$"
          }
        ],
        "practice": "หลอดไฟ $60\\,W$ ต่อกับ $220\\,V$ หาความต้านทานและกระแส"
      },
      {
        "id": "kirchhoff",
        "title": "Kirchhoff's Rules",
        "source": "Serway Physics for Scientists and Engineers, Ch 28, p.810–830",
        "concept": "กฎ Junction (KCL): $\\sum I_{in}=\\sum I_{out}$ (อนุรักษ์ประจุ) กฎ Loop (KVL): $\\sum\\Delta V=0$ (อนุรักษ์พลังงาน) ขั้นตอนใช้ Kirchhoff: (1) กำหนดทิศกระแสในแต่ละ branch (2) ใช้กฎ junction ที่แต่ละ node (3) ใช้กฎ loop จนครบสมการ (4) แก้ระบบสมการ",
        "formula": "\\sum I_{in}=\\sum I_{out}, \\quad \\sum\\Delta V_{loop}=0",
        "warning": "KCL: กระแสเข้า = กระแสออกที่ junction; KVL: ผลรวม $\\Delta V$ รอบ loop = 0 (เลือกทิศ loop ให้ชัด)",
        "examples": [
          {
            "title": "Kirchhoff — วงจรสองแบตเตอรี่",
            "level": "Basic",
            "tip": "",
            "problem": "วงจรมีแบตเตอรี่ $12\\,V$ และ $6\\,V$ ต่อกับตัวต้านทาน $4\\,\\Omega$ และ $2\\,\\Omega$ แบบ series หากระแส",
            "steps": [
              "กฎ Loop: $12-6-4I-2I=0$",
              "$6=6I$",
              "$I=1\\,A$"
            ],
            "answer": "$I=1\\,A$"
          },
          {
            "title": "KCL — วงจร parallel",
            "level": "Medium",
            "tip": "ที่ junction: กระแสรวมแยกเข้า branch ตาม $I=V/R$ ของแต่ละทาง",
            "problem": "แบตเตอรี่ $12\\,V$ ต่อ $R_1=6\\,\\Omega$ และ $R_2=3\\,\\Omega$ แบบ parallel หากระแสรวม",
            "steps": [
              "$I_1=V/R_1=12/6=2\\,A$, $I_2=12/3=4\\,A$",
              "KCL ที่ junction: $I_{total}=I_1+I_2=6\\,A$",
              "KVL: แรงดันทุก branch เท่ากัน $12\\,V$ ✓"
            ],
            "answer": "$I_{total}=6\\,A$"
          }
        ],
        "practice": "วงจร bridge Wheatstone มีตัวต้านทาน 4 ตัว ใช้ Kirchhoff หากระแสในแต่ละ branch"
      },
      {
        "id": "rc-circuit",
        "title": "RC Circuits",
        "source": "Serway Physics for Scientists and Engineers, Ch 28, p.830–845",
        "concept": "Charging: $q(t)=C\\varepsilon(1-e^{-t/RC})$, $V_C=\\varepsilon(1-e^{-t/RC})$ Discharging: $q(t)=Q_0e^{-t/RC}$ เวลา $\\tau=RC$ คือ time constant: หลัง $1\\tau$ capacitor ชาร์จถึง $63\\%$ หลัง $5\\tau$ ถือว่าชาร์จเต็มหรือ discharge หมด",
        "formula": "\\tau=RC, \\quad V_C=V_0(1-e^{-t/RC})",
        "warning": "ที่ $t=0$ ตัวเก็บประจุเป็น open circuit (กระแสเริ่มสูง) — ใช้ $Q(t)=Q_f(1-e^{-t/RC})$",
        "examples": [
          {
            "title": "RC Circuit — หา τ และ V_C",
            "level": "Basic",
            "tip": "",
            "problem": "$R=10\\,k\\Omega$, $C=100\\,\\mu F$, $\\varepsilon=9\\,V$ หา $\\tau$ และแรงดันบน C หลัง 1 s",
            "steps": [
              "$\\tau=RC=10\\times10^3\\times100\\times10^{-6}=1\\,s$",
              "$V_C=9(1-e^{-1/1})=9(1-e^{-1})=9(0.632)\\approx5.69\\,V$"
            ],
            "answer": "$V_C=9"
          },
          {
            "title": "เปรียบเทียบ time constant",
            "level": "Medium",
            "tip": "$\\tau=RC$ — คูณ $R$ กับ $C$ แล้วเปรียบเทียบหน่วยวินาที",
            "problem": "ถ้า $R=5\\,k\\Omega$, $C=200\\,\\mu F$ เปรียบเทียบ $\\tau$ กับ $R=10\\,k\\Omega$, $C=100\\,\\mu F$",
            "steps": [
              "$\\tau_1=5\\times10^3\\times200\\times10^{-6}=1.0\\,s$",
              "$\\tau_2=10\\times10^3\\times100\\times10^{-6}=1.0\\,s$",
              "$\\tau_1=\\tau_2$ — ผลิต $RC$ เท่ากัน แม้ $R,C$ ต่างกัน"
            ],
            "answer": "$\\tau=1.0\\,s$ ทั้งคู่"
          }
        ],
        "practice": "ถ้า $R=5\\,k\\Omega$, $C=200\\,\\mu F$ เปรียบเทียบ $\\tau$ กับตัวอย่างด้านบน"
      },
      {
        "id": "rl-dc-circuit",
        "title": "RL Circuits (DC)",
        "source": "Serway Physics for Scientists and Engineers, Ch 32, p.905–915",
        "concept": "วงจร RL ต่ออนุกรม DC: เมื่อ $t=0$ สวิตช์ปิด กระแสเริ่มจากศูนย์และเพิ่มตาม $I(t)=\\frac{\\varepsilon}{R}(1-e^{-t/\\tau})$ โดย $\\tau=L/R$ แรงดันบนตัวเหนี่ยวนำ $V_L=L\\,dI/dt$ ลดลงเมื่อกระแสนิ่ง $I=\\varepsilon/R$",
        "formula": "I(t)=\\frac{\\varepsilon}{R}(1-e^{-t/\\tau}),\\quad \\tau=\\frac{L}{R}",
        "warning": "ที่ $t=0$ inductor เป็น open circuit ($I=0$) — อย่าใช้ $V=IR$ ทันที; ที่ $t\\to\\infty$ inductor เป็น short ($V_L=0$)",
        "examples": [
          {
            "title": "RL — หา I หลัง 1 ms",
            "level": "Basic",
            "tip": "หา $\\tau=L/R$ แล้วแทน $t$",
            "problem": "วงจร $V=18\\,V$, $R=6\\,k\\Omega$, $L=0.5\\,H$ ปิดสวิตช์ที่ $t=0$ หา $I$ ที่ $t=1\\,ms$",
            "steps": [
              "$\\tau=L/R=0.5/(6\\times10^3)=8.33\\times10^{-5}\\,s$",
              "$I=\\dfrac{18}{6000}(1-e^{-0.001/8.33\\times10^{-5}})=0.003(1-e^{-12})\\approx3.0\\,mA$"
            ],
            "answer": "$I\\approx3.0\\,mA$ (เกือบนิ่ง)"
          },
          {
            "title": "RL — แรงดันบน L ที่ $t=0$",
            "level": "Medium",
            "tip": "ที่ $t=0$: $V_L=V_{source}$ เพราะ $I=0$",
            "problem": "จากข้อก่อน หา $V_L$ ที่ $t=0$ และ $I$ ใน steady state",
            "steps": [
              "$t=0$: $V_L=18\\,V$",
              "Steady: $I=V/R=18/6000=3\\,mA$, $V_L=0$"
            ],
            "answer": "$V_L(0)=18\\,V$, $I_{ss}=3\\,mA$"
          }
        ],
        "practice": "RL: $V=12\\,V$, $R=4\\,k\\Omega$, $L=2\\,H$ หา $\\tau$ และ $I$ ที่ $t=\\tau$"
      },
      {
        "id": "ac-circuits",
        "title": "Alternating Current Circuits",
        "source": "Serway Physics for Scientists and Engineers, Ch 33, p.920–945",
        "concept": "วงจร AC มีกระแสและแรงดันแกว่งตามเวลา $v(t)=V_{max}\\sin(\\omega t)$ อิมพีแดนซ์ $Z=\\sqrt{R^2+(X_L-X_C)^2}$ โดย $X_L=\\omega L$ และ $X_C=1/(\\omega C)$ มุมเฟส $\\phi=\\arctan[(X_L-X_C)/R]$ ที่ resonance $X_L=X_C$ ทำให้ $Z=R$ และ $I$ สูงสุด",
        "formula": "Z=\\sqrt{R^2+(X_L-X_C)^2},\\quad X_L=\\omega L,\\quad X_C=\\frac{1}{\\omega C}",
        "warning": "ห้ามบวก $V_R$, $V_L$, $V_C$ แบบตัวเลขตรง ๆ — ต้องใช้ phasor diagram หรือ RMS values กับ $Z$",
        "examples": [
          {
            "title": "หา impedance และ I_rms",
            "level": "Basic",
            "tip": "คำนวณ $X_L-X_C$ ก่อน แล้วใช้สูตร $Z$",
            "problem": "วงจร RLC ต่ออนุกรม: $R=40\\,\\Omega$, $X_L=60\\,\\Omega$, $X_C=20\\,\\Omega$, $V_{rms}=120\\,V$ หา $Z$ และ $I_{rms}$",
            "steps": [
              "$Z=\\sqrt{40^2+(60-20)^2}=\\sqrt{1600+1600}=\\sqrt{3200}\\approx56.6\\,\\Omega$",
              "$I_{rms}=120/56.6\\approx2.12\\,A$"
            ],
            "answer": "$Z\\approx56.6\\,\\Omega$, $I_{rms}\\approx2.1\\,A$"
          },
          {
            "title": "Resonance frequency",
            "level": "Medium",
            "tip": "ที่ resonance $X_L=X_C$ → $\\omega L=1/(\\omega C)$",
            "problem": "วงจร $L=0.20\\,H$, $C=50\\,\\mu F$ หาความถี่ resonance $f_0$",
            "steps": [
              "$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{0.20\\times50\\times10^{-6}}$",
              "$\\omega_0=1/\\sqrt{10^{-5}}=316\\,rad/s$",
              "$f_0=\\omega_0/(2\\pi)\\approx50\\,Hz$"
            ],
            "answer": "$f_0\\approx50\\,Hz$"
          }
        ],
        "practice": "วงจร $R=30\\,\\Omega$, $L=0.10\\,H$, $C=100\\,\\mu F$ ต่อ $V_{rms}=100\\,V$ ที่ $f=60\\,Hz$ หา $Z$, $I_{rms}$ และ $\\phi$"
      },
      {
        "id": "rlc-series",
        "title": "Series RLC Circuits",
        "source": "Serway Physics for Scientists and Engineers, Ch 33, p.930–945",
        "concept": "วงจร RLC ต่ออนุกรม: ใช้ phasor diagram รวม $V_R$, $V_L$, $V_C$ อิมพีแดนซ์ $Z=\\sqrt{R^2+(X_L-X_C)^2}$ โดย $X_L=\\omega L$, $X_C=1/(\\omega C)$ มุมเฟส $\\phi=\\arctan[(X_L-X_C)/R]$",
        "formula": "Z=\\sqrt{R^2+(X_L-X_C)^2},\\quad I_{rms}=V_{rms}/Z",
        "warning": "ห้ามบวก $V_R+V_L+V_C$ แบบตัวเลข — ต้องบวกแบบ phasor เสมอ",
        "examples": [
          {
            "title": "หา Z และ I_rms",
            "level": "Basic",
            "tip": "คำนวณ $X_L-X_C$ ก่อน",
            "problem": "R=30 Ω, $X_L=60$ Ω, $X_C=20$ Ω, $V_{rms}=100$ V หา Z และ $I_{rms}$",
            "steps": [
              "$Z=\\sqrt{30^2+40^2}=50\\,\\Omega$",
              "$I_{rms}=100/50=2\\,A$"
            ],
            "answer": "$Z=50\\,\\Omega$, $I_{rms}=2\\,A$"
          },
          {
            "title": "แรงดัน $V_L$ และมุมเฟส",
            "level": "Medium",
            "tip": "$V_L=I_{rms}X_L$",
            "problem": "จากข้อก่อน หา $V_L$ และ $\\phi$",
            "steps": [
              "$V_L=2(60)=120\\,V$",
              "$\\phi=\\arctan(40/30)\\approx53.1°$"
            ],
            "answer": "$V_L=120\\,V$, $\\phi\\approx53°$"
          }
        ],
        "practice": "RLC: R=40 Ω, L=0.20 H, C=50 μF, V=120 V ที่ f=50 Hz หา Z",
        "derivation": "Phasor: $V_R$ อยู่เฟสเดียวกับ I, $V_L$ นำ 90°, $V_C$ ช้า 90° → $V=\\sqrt{V_R^2+(V_L-V_C)^2}$, หาร I ได้ Z"
      }
    ]
  },
  {
    "id": "magnetism",
    "title": "Magnetism",
    "description": "",
    "sections": [
      {
        "id": "magnetic-force",
        "title": "Magnetic Force on Moving Charges",
        "source": "Serway Physics for Scientists and Engineers, Ch 29, p.845–865",
        "concept": "แรงแม่เหล็กบนประจุ: $\\vec F=q\\vec v\\times\\vec B$ ขนาด $F=qvB\\sin\\theta$ ทิศใช้ right-hand rule แรงบนตัวนำกระแส: $\\vec F=I\\vec L\\times\\vec B$ ขนาด $F=BIL\\sin\\theta$ ประจุในสนาม uniform เคลื่อนที่เป็นวงกลม: $r=mv/qB$",
        "formula": "F=qvB\\sin\\theta, \\quad F=BIL\\sin\\theta",
        "warning": "ใช้ right-hand rule สำหรับ $\\vec F=q\\vec v\\times\\vec B$ — มุมระหว่าง $v$ กับ $B$ สำคัญ",
        "examples": [
          {
            "title": "แรงแม่เหล็กบนอิเล็กตรอน — รัศมีวง",
            "level": "Basic",
            "tip": "",
            "problem": "อิเล็กตรอน ($q=1.6\\times10^{-19}\\,C$, $m=9.11\\times10^{-31}\\,kg$) เคลื่อนที่ $3\\times10^6\\,m/s$ ตั้งฉากกับ $B=0.5\\,T$ หารัศมีการเคลื่อนที่",
            "steps": [
              "$r=mv/qB$",
              "$=\\frac{9.11\\times10^{-31}\\times3\\times10^6}{1.6\\times10^{-19}\\times0.5}$",
              "$=\\frac{2.73\\times10^{-24}}{8\\times10^{-20}}=3.41\\times10^{-5}\\,m=0.034\\,mm$"
            ],
            "answer": "$=\\frac{2.73\\times10^{-24}}{8\\times10^{-20}}=3.41\\times10^{-5}\\,m=0.034\\,mm$"
          },
          {
            "title": "แรงบนสายไฟในสนามแม่เหล็ก",
            "level": "Medium",
            "tip": "มุม $90°$ → $\\sin\\theta=1$ ใช้ $F=BIL$",
            "problem": "สายไฟยาว $0.5\\,m$ มีกระแส $3\\,A$ ในสนาม $B=0.8\\,T$ ตั้งฉากกัน หาแรง",
            "steps": [
              "$F=BIL\\sin\\theta=0.8\\times3\\times0.5\\times1$",
              "$F=1.2\\,N$",
              "ทิศตาม right-hand rule: $I\\times B$"
            ],
            "answer": "$F=1.2\\,N$"
          }
        ],
        "practice": "สายไฟยาว $0.5\\,m$ มีกระแส $3\\,A$ ในสนาม $B=0.8\\,T$ ตั้งฉากกัน หาแรง"
      },
      {
        "id": "ampere-law",
        "title": "Ampère's Law",
        "source": "Serway Physics for Scientists and Engineers, Ch 30, p.865–885",
        "concept": "Biot-Savart Law: $d\\vec B=\\frac{\\mu_0}{4\\pi}\\frac{Id\\vec l\\times\\hat r}{r^2}$ สนามจากสายตรง: $B=\\frac{\\mu_0 I}{2\\pi r}$ Ampere's Law: $\\oint\\vec B\\cdot d\\vec l=\\mu_0 I_{enc}$ ใช้กับสมมาตร เช่น solenoid: $B=\\mu_0 nI$ ($n$ = จำนวนรอบต่อเมตร)",
        "formula": "B=\\frac{\\mu_0 I}{2\\pi r}, \\quad B_{solenoid}=\\mu_0 nI",
        "warning": "Amère's law ใช้ได้เมื่อความเข้ม $B$ คงที่รอบ loop — เลือก Amperian loop ให้สมมาตร",
        "examples": [
          {
            "title": "สนาม B จากสายตรงกระแสไฟฟ้า",
            "level": "Basic",
            "tip": "",
            "problem": "สายตรงยาวมีกระแส $5\\,A$ หา B ที่ระยะ $0.1\\,m$",
            "steps": [
              "$B=\\frac{\\mu_0 I}{2\\pi r}$",
              "$=\\frac{4\\pi\\times10^{-7}\\times5}{2\\pi\\times0.1}$",
              "$=\\frac{2\\times10^{-6}}{0.1\\times2}=10^{-5}\\,T=10\\,\\mu T$"
            ],
            "answer": "$=\\frac{2\\times10^{-6}}{0.1\\times2}=10^{-5}\\,T=10\\,\\mu T$"
          },
          {
            "title": "สนามแม่เหล็กใน solenoid",
            "level": "Medium",
            "tip": "$n=N/L$ คือจำนวนรอบต่อเมตร แล้ว $B=\\mu_0 nI$",
            "problem": "Solenoid 200 รอบ ยาว $0.5\\,m$ มีกระแส $2\\,A$ หาสนามแม่เหล็กภายใน",
            "steps": [
              "$n=N/L=200/0.5=400\\,\\text{turns/m}$",
              "$B=\\mu_0 nI=4\\pi\\times10^{-7}\\times400\\times2$",
              "$B=1.0\\times10^{-3}\\,T=1.0\\,mT$"
            ],
            "answer": "$B=1.0\\,mT$"
          }
        ],
        "practice": "Solenoid 200 รอบ ยาว $0.5\\,m$ มีกระแส $2\\,A$ หาสนามแม่เหล็กภายใน"
      },
      {
        "id": "faraday",
        "title": "Faraday's Law and Induction",
        "source": "Serway Physics for Scientists and Engineers, Ch 31, p.885–905",
        "concept": "Faraday's Law: $\\mathcal{E}=-\\frac{d\\Phi_B}{dt}$ โดย $\\Phi_B=\\int\\vec B\\cdot d\\vec A$ คือ magnetic flux เครื่องหมายลบมาจาก Lenz's Law: กระแสที่เกิดขึ้นต้านการเปลี่ยนแปลงของ flux สำหรับ $N$ รอบ: $\\mathcal{E}=-N\\frac{d\\Phi_B}{dt}$",
        "formula": "\\mathcal{E}=-N\\frac{d\\Phi_B}{dt}, \\quad \\Phi_B=BA\\cos\\theta",
        "warning": "Lenz's law: กระแสเหนี่ยวนำต่อต้านการเปลี่ยน flux — ตรวจเครื่องหมาย $\\mathcal{E}$",
        "examples": [
          {
            "title": "Faraday's Law — หา EMF จาก ΔΦ",
            "level": "Basic",
            "tip": "",
            "problem": "ขดลวด 50 รอบ พื้นที่ $0.02\\,m^2$ สนามแม่เหล็กเปลี่ยนจาก 0 เป็น $0.4\\,T$ ใน $0.1\\,s$ หา EMF",
            "steps": [
              "$\\frac{d\\Phi_B}{dt}=A\\frac{dB}{dt}=0.02\\times\\frac{0.4}{0.1}=0.08\\,Wb/s$",
              "$|\\mathcal{E}|=N\\frac{d\\Phi_B}{dt}=50\\times0.08=4\\,V$"
            ],
            "answer": "$|\\mathcal{E}|=N\\frac{d\\Phi_B}{dt}=50\\times0.08=4\\,V$"
          },
          {
            "title": "EMF สูงสุดจากขดลวดหมุน",
            "level": "Medium",
            "tip": "Peak EMF: $\\mathcal{E}_{max}=NBA\\omega$ โดย $\\omega=2\\pi f$",
            "problem": "ขดลวด 1 รอบ หมุนใน $B=0.5\\,T$ อัตรา $60\\,rev/s$ พื้นที่ $0.01\\,m^2$ หา peak EMF",
            "steps": [
              "$\\omega=2\\pi(60)=377\\,rad/s$",
              "$\\mathcal{E}_{max}=NBA\\omega=0.5\\times0.01\\times377$",
              "$\\mathcal{E}_{max}=1.89\\,V$"
            ],
            "answer": "$\\mathcal{E}_{max}\\approx1.89\\,V$"
          }
        ],
        "practice": "ขดลวดหมุนใน B คงที่ $0.5\\,T$ อัตรา $60\\,rev/s$ พื้นที่ $0.01\\,m^2$ หา peak EMF"
      },
      {
        "id": "motional-emf",
        "title": "Motional EMF and Induced Current",
        "source": "Serway Physics for Scientists and Engineers, Ch 31.3, p.895–905",
        "concept": "Motional EMF: แท่งหรือสายตัดสนามแม่เหล็ก $\\mathcal{E}=Blv$ (B, L, v ตั้งฉากกัน) ถ้าเส้นทางโค้ง ใช้ $\\mathcal{E}=\\oint(\\vec v\\times\\vec B)\\cdot d\\vec l$ หรือ Faraday $\\mathcal{E}=-d\\Phi/dt$",
        "formula": "\\mathcal{E}=Blv,\\quad \\Phi_B=BA\\cos\\theta",
        "warning": "ทิศ $\\mathcal{E}$ จาก Lenz's law — กระแสที่เกิดต้านการเคลื่อนที่",
        "examples": [
          {
            "title": "Rod สไลด์บน rails",
            "level": "Basic",
            "tip": "ใช้ $\\mathcal{E}=Blv$",
            "problem": "แท่งยาว $L=0.40\\,m$ เคลื่อนที่ $v=2.0\\,m/s$ ตั้งฉาก $B=0.50\\,T$ หา EMF",
            "steps": [
              "$\\mathcal{E}=Blv=0.50(0.40)(2.0)=0.40\\,V$"
            ],
            "answer": "$\\mathcal{E}=0.40\\,V$"
          },
          {
            "title": "Faraday — พื้นที่เปลี่ยน",
            "level": "Hard",
            "tip": "ใช้ $\\mathcal{E}=-d\\Phi/dt$ เมื่อ B คงที่",
            "problem": "ขดลวด $N=100$ พื้นที่ $A=0.02\\,m^2$ ใน $B=0.3\\,T$ หมุน $90°$ ใน $0.05\\,s$ หา $|\\mathcal{E}|$",
            "steps": [
              "$\\Delta\\Phi=BA(1-0)=0.3(0.02)=6\\times10^{-3}\\,Wb$",
              "$|\\mathcal{E}|=N\\dfrac{\\Delta\\Phi}{\\Delta t}=100(6\\times10^{-3}/0.05)=12\\,V$"
            ],
            "answer": "$|\\mathcal{E}|=12\\,V$"
          }
        ],
        "practice": "สาย $0.25\\,m$ แกว่ง $3\\,m/s$ ใน $B=0.8\\,T$ ตั้งฉาก หา motional EMF"
      },
      {
        "id": "magnetic-materials",
        "title": "Magnetic Materials",
        "source": "Serway Physics for Scientists and Engineers, Ch 32, p.905–920",
        "concept": "วัสดุแม่เหล็ก: paramagnetic ($\\chi>0$ เล็ก), diamagnetic ($\\chi<0$), ferromagnetic (domain alignment, hysteresis) ความหนาแน่น flux $B=\\mu_0(H+M)=\\mu H$ โดย $\\mu=\\mu_0(1+\\chi)$",
        "formula": "B=\\mu_0(H+M),\\quad \\chi=\\frac{M}{H}",
        "warning": "Ferromagnet มี hysteresis loop — $B$ ขึ้นกับประวัติ magnetization ไม่ใช่แค่ $H$ ปัจจุบัน",
        "examples": [
          {
            "title": "หา B ใน paramagnet",
            "level": "Basic",
            "tip": "ใช้ $B=\\mu_0(1+\\chi)H$",
            "problem": "$H=1000\\,A/m$, $\\chi=2\\times10^{-5}$ หา $B$",
            "steps": [
              "$B=4\\pi\\times10^{-7}(1+2\\times10^{-5})(1000)$",
              "$B\\approx1.26\\times10^{-3}\\,T$"
            ],
            "answer": "$B\\approx1.26\\,mT$"
          },
          {
            "title": "เปรียบเทียบ dia vs para",
            "level": "Medium",
            "tip": "diamagnetic หัก flux เล็กน้อย",
            "problem": "ทำไม bismuth ($\\chi\\approx-1.6\\times10^{-4}$) ถูก repel จาก magnetic field?",
            "steps": [
              "Diamagnet สร้าง $M$ ตรงข้าม $H$",
              "ทำให้ $B$ ภายในลดลง → ถูกผลักออกจาก field แรง"
            ],
            "answer": "Induced $M$ ตรงข้าม $H$ → repulsion"
          }
        ],
        "practice": "Iron ($\\mu_r=5000$) ใน $H=200\\,A/m$ หา $B$"
      }
    ]
  },
  {
    "id": "wave-optics",
    "title": "Wave Optics",
    "description": "การแทรกสอด การแทรกแสง และการเลี้ยวเฟส",
    "sections": [
      {
        "id": "interference",
        "title": "Interference and Young's Double Slit",
        "source": "Serway Physics for Scientists and Engineers, Ch 37, p.1005–1025",
        "concept": "การแทรกสอด: superposition ของคลื่น เงื่อนไข constructive $ \\Delta path=m\\lambda$, destructive $(m+\\frac{1}{2})\\lambda$ Young's double slit: $y_{bright}=\\frac{m\\lambda L}{d}$ บนจอระยะ $L$",
        "formula": "\\Delta path=m\\lambda\\text{ (bright)},\\quad y=\\frac{m\\lambda L}{d}",
        "warning": "ใช้ wavelength ในสื่อเดียวกัน — ใน double slit มักเป็นสุญญากาศ/อากาศ",
        "examples": [
          {
            "title": "Young's double slit — ตำแหน่ง fringe",
            "level": "Basic",
            "tip": "ใช้ $y=m\\lambda L/d$",
            "problem": "แสง $\\lambda=600\\,nm$, $d=0.20\\,mm$, $L=2.0\\,m$ หาระยะ fringe แรก ($m=1$)",
            "steps": [
              "$y=(600\\times10^{-9})(2.0)/(0.20\\times10^{-3})$",
              "$y=6.0\\times10^{-3}\\,m=6.0\\,mm$"
            ],
            "answer": "$y=6.0\\,mm$"
          },
          {
            "title": "Thin film interference",
            "level": "Medium",
            "tip": "phase change ที่ boundary กำหนด constructive/destructive",
            "problem": "ฟilm น้ำมัน $n=1.50$ บนน้ำ $n=1.33$ ความหนา $t=200\\,nm$ แสง $\\lambda=600\\,nm$ ใน air สะท้อน constructive หรือไม่",
            "steps": [
              "reflection ที่ top (air-oil): มี phase shift $180°$",
              "reflection ที่ bottom (oil-water): ไม่ shift (n ขึ้น)",
              "$2nt=600\\,nm$ → destructive ใน air (bright ใน transmission)"
            ],
            "answer": "Reflected light: destructive (dark fringe)"
          }
        ],
        "practice": "Slit separation $0.15\\,mm$, $\\lambda=500\\,nm$, $L=1.5\\,m$ หา spacing ระหว่าง bright fringes"
      },
      {
        "id": "thin-film",
        "title": "Thin Film Interference",
        "source": "Serway Physics for Scientists and Engineers, Ch 37.5, p.1015–1025",
        "concept": "Thin film interference: สะท้อนที่หน้าตัดอาจมี phase shift $\\pi$ (จาก $n_{film}>n_{air}$) เงื่อนไข constructive: $2nt=(m+\\frac{1}{2})\\lambda$ (one shift) หรือ $2nt=m\\lambda$ (no shift)",
        "formula": "2nt=m\\lambda\\;\\text{(no phase shift)},\\quad 2nt=(m+\\tfrac12)\\lambda\\;\\text{(one shift)}",
        "warning": "ตรวจ phase shift ทุก interface — แว่นตา anti-reflective ใช้ $t=\\lambda/(4n)$",
        "examples": [
          {
            "title": "แว่นตา AR coating",
            "level": "Medium",
            "tip": "หนัง $t=\\lambda/(4n)$ ทำลาย interference สะท้อน",
            "problem": "ชั้น $n=1.38$ บนแก้ว $n=1.50$ สำหรับ $\\lambda=550\\,nm$ หา $t$ ขั้นต่ำ",
            "steps": [
              "$t=\\lambda/(4n)=550/(4\\times1.38)\\approx99.6\\,nm$"
            ],
            "answer": "$t\\approx100\\,nm$"
          },
          {
            "title": "น้ำมันบนถนน",
            "level": "Basic",
            "tip": "สีที่เห็นขึ้นกับ $t$ และ $\\lambda$",
            "problem": "ฟิล์ม $n=1.33$ หนา $t=380\\,nm$ ในอากาศ หา $\\lambda$ ที่ constructive (first order, one shift)",
            "steps": [
              "$2nt=(m+\\frac12)\\lambda$ → $\\lambda=2(1.33)(380)/1.5\\approx674\\,nm$ (red)"
            ],
            "answer": "$\\lambda\\approx674\\,nm$"
          }
        ],
        "practice": "ฟิล์ม $n=1.45$ หนา $120\\,nm$ หา $\\lambda$ ที่สะท้อนเสริม (m=1, one shift)"
      },
      {
        "id": "diffraction",
        "title": "Diffraction",
        "source": "Serway Physics for Scientists and Engineers, Ch 38, p.1025–1045",
        "concept": "การแทรกแสง: single slit minima $a\\sin\\theta=m\\lambda$ ($m\\neq0$) diffraction grating $d\\sin\\theta=m\\lambda$ ให้ maxima แหลมกว่า double slit ความละเอียดเชิงมุม $\\theta\\approx\\lambda/a$",
        "formula": "a\\sin\\theta=m\\lambda,\\quad d\\sin\\theta=m\\lambda",
        "warning": "Single slit central maximum กว้างเป็นสองเท่า secondary max — อย่าใช้ $m\\lambda$ ที่ center",
        "examples": [
          {
            "title": "Single slit — มุม first minimum",
            "level": "Basic",
            "tip": "ใช้ $a\\sin\\theta=\\lambda$",
            "problem": "slit width $a=0.10\\,mm$, $\\lambda=500\\,nm$ หา $\\theta$ ของ first minimum",
            "steps": [
              "$\\sin\\theta=\\lambda/a=500\\times10^{-9}/10^{-4}=0.005$",
              "$\\theta\\approx0.005\\,rad\\approx0.29°$"
            ],
            "answer": "$\\theta\\approx0.29°$"
          },
          {
            "title": "Diffraction grating — หลาย order",
            "level": "Medium",
            "tip": "ใช้ $d\\sin\\theta=m\\lambda$",
            "problem": "grating 600 lines/mm, $\\lambda=589\\,nm$ หา $\\theta$ ของ $m=1$",
            "steps": [
              "$d=1/600\\,mm=1.67\\,\\mu m$",
              "$\\sin\\theta=589\\times10^{-9}/1.67\\times10^{-6}=0.353$",
              "$\\theta\\approx20.7°$"
            ],
            "answer": "$\\theta\\approx21°$"
          }
        ],
        "practice": "Two stars แยก $0.5\\,arcsec$ ใช้ telescope $D=2\\,m$, $\\lambda=550\\,nm$ แยกได้หรือไม่ (Rayleigh: $\\theta\\approx1.22\\lambda/D$)"
      },
      {
        "id": "brewster-angle",
        "title": "Brewster's Angle and Polarization",
        "source": "Serway Physics for Scientists and Engineers, Ch 38.5, p.1035–1045",
        "concept": "มุม Brewster $\\theta_B=\\arctan(n_2/n_1)$ ที่แสงสะท้อเป็น s-polarized ตั้งฉากกับระนาบ — ใช้กับ anti-glare และ polarizer",
        "formula": "\\tan\\theta_B=\\frac{n_2}{n_1}",
        "warning": "",
        "examples": [
          {
            "title": "Brewster — อากาศเข้าแก้ว",
            "level": "Basic",
            "tip": "$\\theta_B=\\arctan(n)$",
            "problem": "แสงจากอากาศ ($n=1$) ตกแก้ว $n=1.52$ หา $\\theta_B$",
            "steps": [
              "$\\theta_B=\\arctan(1.52)\\approx56.7°$"
            ],
            "answer": "$\\theta_B\\approx56.7°$"
          },
          {
            "title": "Brewster สองชั้น",
            "level": "Hard",
            "tip": "แสงตก $n=1.5$ แล้วสะท้อที่ $45°$ ไปชั้น $n=1.7$ — ตรวจ Brewster",
            "problem": [
              "$\\theta_B(1.5)=\\arctan(1.5)\\approx56.3°$ — 45° ไม่ใช่ Brewster สำหรับชั้นแรก",
              "ใช้ Snell หา $\\theta_2$ แล้วตรวจ polarization ตามโจทย์"
            ],
            "steps": "45° ≠ $\\theta_B$ สำหรับ $n=1.5$"
          }
        ],
        "practice": "หา $\\theta_B$ ของน้ำ $n=1.33$ ต่ออากาศ"
      }
    ]
  },
  {
    "id": "waves-optics",
    "title": "Waves and Electromagnetism",
    "description": "",
    "sections": [
      {
        "id": "wave-basics",
        "title": "Wave Properties",
        "source": "Serway Physics for Scientists and Engineers, Ch 16, p.410–435",
        "concept": "คลื่นเป็นการแพร่การสั่นสะเทือนในสื่อหรือสนาม แบ่งเป็นคลื่นตามยาวและตามขวาง ความเร็วคลื่นสัมพันธ์กับความถี่และความยาวคลื่น: $v=f\\lambda$. Superposition ทำให้เกิด interference และ standing waves เมื่อคลื่นทั้งสองทับซ้อนกัน",
        "formula": "v=f\\lambda, \\quad T=1/f, \\quad \\lambda=v/f",
        "warning": "แยกความเร็วคลื่น $v$ กับความเร็วอนุภาคของ medium — อย่าสับสน $f$ กับ $\\omega$",
        "examples": [
          {
            "title": "Wave speed จาก $f$ และ $\\lambda$",
            "level": "Basic",
            "tip": "ใช้ $v=f\\lambda$ เมื่อรู้ความถี่และความยาวคลื่น",
            "problem": "คลื่นบนเชือกมีความถี่ $5\\,Hz$ และความยาวคลื่น $0.4\\,m$ จงหาความเร็วคลื่น",
            "steps": [
              "$v=f\\lambda=5(0.4)=2.0\\,m/s$"
            ],
            "answer": "$v=2.0\\,m/s$"
          },
          {
            "title": "ความถี่จาก $v$ และ $\\lambda$",
            "level": "Medium",
            "tip": "จัดรูป $v=f\\lambda$ เป็น $f=v/\\lambda$",
            "problem": "เสียงในห้องมีความยาวคลื่น $0.75\\,m$ และความเร็วเสียง $340\\,m/s$ จงหาความถี่",
            "steps": [
              "$f=v/\\lambda=340/0.75$",
              "$f=453\\,Hz$"
            ],
            "answer": "$f=453\\,Hz$"
          }
        ],
        "practice": "ถ้าเสียงในห้องมีความยาวคลื่น $0.75\\,m$ และความเร็วเสียง $340\\,m/s$ จงหาความถี่"
      },
      {
        "id": "sound-doppler",
        "title": "Sound and Doppler Effect",
        "source": "Serway Physics for Scientists and Engineers, Ch 17, p.435–455",
        "concept": "เสียงเป็นคลื่นตามยาวในอากาศ ความเข้มสัมพันธ์กับระดับเดซิเบล $\\beta=10\\log_{10}(I/I_0)$ ที่ $I_0=10^{-12}\\,W/m^2$. Doppler effect เปลี่ยนความถี่ที่ได้ยินเมื่อแหล่งหรือผู้สังเกตเคลื่อนที่ $f'=\\frac{v\\pm v_o}{v\\mp v_s}f$.",
        "formula": "\\beta=10\\log_{10}(I/I_0), \\quad f'=\\frac{v\\pm v_o}{v\\mp v_s}f",
        "warning": "ใช้เครื่องหมาย: แหล่ง/ผู้ฟังเข้าหากัน → $f$ สูงขึ้น; ถอยห่าง → $f$ ต่ำลง",
        "examples": [
          {
            "title": "Decibel จากความเข้ม $I$",
            "level": "Basic",
            "tip": "หา $\\beta$ จากความเข้มเสียงเทียบกับ $I_0$",
            "problem": "เสียงความเข้ม $1\\times10^{-6}\\,W/m^2$ จงหา $\\beta$",
            "steps": [
              "$\\beta=10\\log_{10}(10^6)=60\\,dB$"
            ],
            "answer": "$\\beta=60\\,dB$"
          },
          {
            "title": "Doppler — แหล่งถอยห่างผู้ฟัง",
            "level": "Medium",
            "tip": "แหล่งถอยห่าง ผู้ฟังนิ่ง: $f'=\\frac{v}{v+v_s}f$ (ใช้ $+$ ที่ $v_s$)",
            "problem": "รถพยาบาลวิ่งออกจากผู้สังเกต $20\\,m/s$ แหล่ง $700\\,Hz$ ($v_{sound}=340\\,m/s$) หาความถี่ที่ได้ยิน",
            "steps": [
              "$f'=\\frac{v}{v+v_s}f=\\frac{340}{340+20}\\times700$",
              "$f'=\\frac{340}{360}\\times700=661\\,Hz$",
              "ความถี่ต่ำลง (pitch ต่ำลง) เพราะแหล่งถอยห่าง"
            ],
            "answer": "$f'=661\\,Hz$"
          }
        ],
        "practice": "ถ้ารถพยาบาลวิ่งออกจากผู้สังเกต $20\\,m/s$ และแหล่ง $700\\,Hz$ จงหาความถี่ที่ผู้สังเกตได้ยิน"
      },
      {
        "id": "em-waves",
        "title": "Electromagnetic Waves",
        "source": "Serway Physics for Scientists and Engineers, Ch 34, p.945–965",
        "concept": "คลื่นแม่เหล็กไฟฟ้าเป็นคลื่น transverse ที่มีสนามไฟฟ้าและสนามแม่เหล็กตั้งฉากกันและตั้งฉากกับทิศทางการเดินทาง ความเร็วในสุญญากาศ $c=3.0\\times10^8\\,m/s$ และ $c=f\\lambda$",
        "formula": "c=f\\lambda",
        "warning": "คลื่น EM ไม่ต้องมี medium — $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ ในสุญญากาศ",
        "examples": [
          {
            "title": "ความยาวคลื่นแสงสีเขียว",
            "level": "Basic",
            "tip": "ใช้ $c=f\\lambda$ เมื่อรู้ความถี่",
            "problem": "แสงสีเขียวความถี่ $5.6\\times10^{14}\\,Hz$ จงหาความยาวคลื่น",
            "steps": [
              "$\\lambda=3.0\\times10^8 / 5.6\\times10^{14} \\approx 5.36\\times10^{-7}\\,m$"
            ],
            "answer": "$\\lambda\\approx5.36\\times10^{-7}\\,m$"
          },
          {
            "title": "ความถี่แสงสีแดง",
            "level": "Medium",
            "tip": "แปลง $650\\,nm$ เป็นเมตรก่อนแทน $c=f\\lambda$",
            "problem": "แสงสีแดงความยาวคลื่น $650\\,nm$ จงหาความถี่",
            "steps": [
              "$\\lambda=650\\times10^{-9}\\,m$",
              "$f=c/\\lambda=3.0\\times10^8/(650\\times10^{-9})$",
              "$f=4.62\\times10^{14}\\,Hz$"
            ],
            "answer": "$f=4.62\\times10^{14}\\,Hz$"
          }
        ],
        "practice": "แสงสีแดงความยาวคลื่น $650\\,nm$ จงหาความถี่"
      },
      {
        "id": "poynting-vector",
        "title": "Poynting Vector and EM Energy Flow",
        "source": "Serway Physics for Scientists and Engineers, Ch 34.4, p.955–965",
        "concept": "เวกเตอร์ Poynting $\\vec S=\\frac{1}{\\mu_0}\\vec E\\times\\vec B$ บอกการไหลของพลังงาน EM (W/m²) ค่าเฉลี่ย $S_{avg}=\\frac{1}{2\\mu_0}E_0B_0=\\frac{E_0^2}{2\\mu_0 c}$ สำหรับคลื่นเดินหน้า",
        "formula": "S_{avg}=\\frac{E_0^2}{2\\mu_0 c},\\quad I=S_{avg}",
        "warning": "$E$, $B$ ต้องเป็น amplitude ของคลื่น — ใช้ RMS ต้องแปลง $E_{rms}=E_0/\\sqrt{2}$",
        "examples": [
          {
            "title": "จาก E หา B และ Savg",
            "level": "Medium",
            "tip": "$B_0=E_0/c$ แล้วใช้ $S_{avg}=E_0^2/(2\\mu_0 c)$",
            "problem": "คลื่น EM $E_0=150\\,V/m$ ในสุญญากาศ หา $B_0$ และ $S_{avg}$ ($c=3\\times10^8\\,m/s$, $\\mu_0=4\\pi\\times10^{-7}$)",
            "steps": [
              "$B_0=E_0/c=150/(3\\times10^8)=5\\times10^{-7}\\,T$",
              "$S_{avg}=E_0^2/(2\\mu_0 c)=150^2/(2\\cdot4\\pi\\times10^{-7}\\cdot3\\times10^8)\\approx29.8\\,W/m^2$"
            ],
            "answer": "$B_0=5\\times10^{-7}\\,T$, $S_{avg}\\approx30\\,W/m^2$"
          },
          {
            "title": "กำลังจาก intensity",
            "level": "Basic",
            "tip": "$P=S_{avg}\\cdot A$",
            "problem": "แสง $S=8\\times10^4\\,W/m^2$ ตกพื้นที่ $A=2\\,mm^2$ หา $P$",
            "steps": [
              "$P=SA=8\\times10^4(2\\times10^{-6})=0.16\\,W$"
            ],
            "answer": "$P=0.16\\,W$"
          }
        ],
        "practice": "ส่งเสริม $100\\,MHz$ กำลัง $100\\,W$ ผ่านท่อ $r=1\\,cm$ หา $S_{avg}$ เฉลี่ยบนพื้นที่หน้าตัด"
      }
    ]
  },
  {
    "id": "optics",
    "title": "Geometric Optics",
    "description": "",
    "sections": [
      {
        "id": "reflection-refraction",
        "title": "Reflection and Refraction",
        "source": "Serway Physics for Scientists and Engineers, Ch 35, p.965–985",
        "concept": "การสะท้อน: มุมตกเท่ากับมุมสะท้อน $\\theta_i=\\theta_r$. การหักเห: Snell's law $n_1\\sin\\theta_1=n_2\\sin\\theta_2$. Critical angle เมื่อ $n_1>n_2$ คือ $\\sin\\theta_c=n_2/n_1$ และเกิด total internal reflection เมื่อ $\\theta_1>\\theta_c$.",
        "formula": "\\theta_i=\\theta_r, \\quad n_1\\sin\\theta_1=n_2\\sin\\theta_2, \\quad \\sin\\theta_c=\\frac{n_2}{n_1}",
        "warning": "Snell's law ใช้ $n_1\\sin\\theta_1=n_2\\sin\\theta_2$ — มุมวัดจาก normal",
        "examples": [
          {
            "title": "Snell's law — อากาศเข้าน้ำ",
            "level": "Basic",
            "tip": "ใช้ Snell's law เมื่อแสงจากอากาศเข้าสู่น้ำ",
            "problem": "แสงจากอากาศ $n=1.00$ ตกกระทบผิวน้ำ $n=1.33$ ที่มุม $30°$ จงหามุมหักเห",
            "steps": [
              "$\\sin\\theta_2=1.00\\sin30°/1.33=0.376$",
              "$\\theta_2=22.1°$"
            ],
            "answer": "$\\theta_2\\approx22.1°$"
          },
          {
            "title": "Total internal reflection",
            "level": "Medium",
            "tip": "ถ้า $n_1\\sin\\theta_1>n_2$ จะ $\\sin\\theta_2>1$ → ไม่มีหักเห เกิด TIR",
            "problem": "แสงจากแก้ว $n=1.52$ ไปอากาศที่มุม $42°$ จงหามุมหักเห",
            "steps": [
              "$n_1\\sin\\theta_1=1.52\\sin42°=1.52\\times0.669=1.02$",
              "$\\sin\\theta_2=1.02>1$ — ไม่มีมุมหักเหที่เป็นไปได้",
              "เกิด total internal reflection — แสงสะท้อนกลับเข้าแก้ว"
            ],
            "answer": "Total internal reflection (ไม่มีหักเห)"
          }
        ],
        "practice": "แสงจากแก้ว $n=1.52$ ไปอากาศที่มุม $42°$ จงหามุมหักเห"
      },
      {
        "id": "lenses-mirrors",
        "title": "Mirrors and Lenses",
        "source": "Serway Physics for Scientists and Engineers, Ch 36, p.985–1005",
        "concept": "สมการเลนส์และกระจก: $1/d_o+1/d_i=1/f$ และกำลังขยาย $M=-d_i/d_o$. เลนส์นูนเป็น converging, เลนส์เว้าเป็น diverging. ภาพจริงมี $d_i>0$ ภาพเสมือน $d_i<0$.",
        "formula": "\\frac{1}{d_o}+\\frac{1}{d_i}=\\frac{1}{f}, \\quad M=-\\frac{d_i}{d_o}",
        "warning": "sign convention: ระยะวัตถุ/ภาพ บวก/ลบตาม convention ของตำรา — ตรวจก่อนคำนวณ",
        "examples": [
          {
            "title": "Lens equation — เลนส์นูน",
            "level": "Basic",
            "tip": "ถ้าภาพอยู่ด้านตรงข้ามของเลนส์ $d_i$ เป็นบวก",
            "problem": "วัตถุอยู่ห่าง $10\\,cm$ จากเลนส์นูนที่มี $f=15\\,cm$ จงหาตำแหน่งภาพและขนาดภาพ",
            "steps": [
              "$1/d_i = 1/15 - 1/10 = -1/30$",
              "$d_i = -30\\,cm$",
              "$M = -(-30)/10 = 3$"
            ],
            "answer": "ภาพเสมือนอยู่ด้านวัตถุห่าง 30 cm ขยาย 3 เท่า"
          },
          {
            "title": "กระจกเว้า — ภาพเสมือน",
            "level": "Medium",
            "tip": "กระจกเว้า $f<0$ ใน convention Serway; วัตถุจริง $d_o>0$",
            "problem": "วัตถุอยู่ $15\\,cm$ หน้ากระจกเว้า $f=-10\\,cm$ จงหา $d_i$ และลักษณะภาพ",
            "steps": [
              "$1/d_i=1/f-1/d_o=1/(-10)-1/15=-1/10-1/15$",
              "$1/d_i=-5/30=-1/6 \\Rightarrow d_i=-6\\,cm$",
              "$M=-d_i/d_o=-(-6)/15=0.4$ — ภาพเสมือน ตรง ย่อ"
            ],
            "answer": "$d_i=-6\\,cm$ ภาพเสมือนย่อ 0.4 เท่า"
          }
        ],
        "practice": "วัตถุอยู่ $15\\,cm$ หน้ากระจกเว้า $f=10\\,cm$ จงหา $d_i$ และลักษณะภาพ"
      }
    ]
  },
  {
    "id": "modern-physics",
    "title": "Modern Physics",
    "description": "",
    "sections": [
      {
        "id": "photoelectric",
        "title": "Photoelectric Effect",
        "source": "Serway Physics for Scientists and Engineers, Ch 40, p.1050–1065",
        "concept": "โฟโตอิเล็กทริก: แสงที่มีความถี่สูงมากกระทบโลหะ จะปล่อยอิเล็กตรอนไป พลังงานของโฟตอน $E=hf$ และพลังงานจลน์สูงสุดของอิเล็กตรอนคือ $K_{max}=hf-\\phi$ โดย $\\phi$ คืองานฟังก์ชันของโลหะ.",
        "formula": "E=hf, \\quad K_{max}=hf-\\phi",
        "warning": "พลังงานจลน์สูงสุด $K_{max}=hf-\\phi$ — ไม่ขึ้นกับความเข้มแสง",
        "examples": [
          {
            "title": "พลังงานโฟตอน $E=hf$",
            "level": "Basic",
            "tip": "ใช้ $h=6.63\\times10^{-34}\\,J\\cdot s$",
            "problem": "แสงความถี่ $6.0\\times10^{14}\\,Hz$ จงหาพลังงานโฟตอน",
            "steps": [
              "$E=hf=6.63\\times10^{-34}(6.0\\times10^{14})=3.98\\times10^{-19}\\,J$"
            ],
            "answer": "$E\\approx3.98\\times10^{-19}\\,J$"
          },
          {
            "title": "Photoelectric — $K_{max}$ จาก $\\lambda$",
            "level": "Medium",
            "tip": "ใช้ $hf=hc/\\lambda$ แล้วลบ $\\phi$ — แปลงหน่วยให้ตรงกัน (eV หรือ J)",
            "problem": "แสง $400\\,nm$ กระทบโลหะ $\\phi=2.0\\,eV$ จงหาพลังงานจลน์สูงสุด",
            "steps": [
              "$hf=hc/\\lambda=1240\\,eV\\cdot nm/400\\,nm=3.10\\,eV$",
              "$K_{max}=hf-\\phi=3.10-2.0=1.10\\,eV$",
              "$K_{max}=1.76\\times10^{-19}\\,J$"
            ],
            "answer": "$K_{max}=1.10\\,eV$"
          }
        ],
        "practice": "แสง $400\\,nm$ กระทบโลหะ $\\phi=2.0\\,eV$ จงหาพลังงานจลน์สูงสุด"
      },
      {
        "id": "atomic-spectra",
        "title": "Atomic Structure and Spectra",
        "source": "Serway Physics for Scientists and Engineers, Ch 41, p.1065–1085",
        "concept": "อะตอมปล่อยหรือดูดซับพลังงานเป็นเส้นสเปกตรัม เมื่ออิเล็กตรอนกระโดดระดับ พลังงานของโฟตอนคือ $\\Delta E=hf$. สำหรับไฮโดรเจน $E_n=-13.6\\,eV/n^2$.",
        "formula": "\\Delta E=hf, \\quad E_n=-\\frac{13.6\\,eV}{n^2}",
        "warning": "Balmer/Rydberg ใช้ $n$ เป็นจำนวนเต็ม — แปลง $\\lambda$ เป็น m ก่อนแทน $R$",
        "examples": [
          {
            "title": "Hydrogen — $n=3\\to2$",
            "level": "Medium",
            "tip": "หา energy difference ระหว่างระดับ",
            "problem": "อิเล็กตรอนจาก $n=3$ ไป $n=2$ ในไฮโดรเจน จงหาความยาวคลื่นของแสงที่ปล่อยออกมา",
            "steps": [
              "$\\Delta E=1.89\\,eV = 3.02\\times10^{-19}\\,J$",
              "$\\lambda=hc/E\\approx658\\,nm$"
            ],
            "answer": "$\\lambda\\approx658\\,nm$"
          },
          {
            "title": "Hydrogen — $n=4\\to2$ (Balmer)",
            "level": "Medium",
            "tip": "$\\Delta E=13.6(1/n_f^2-1/n_i^2)\\,eV$ แล้ว $E=hf$",
            "problem": "อิเล็กตรอนจาก $n=4$ ไป $n=2$ ในไฮโดรเจน จงหาพลังงานโฟตอน",
            "steps": [
              "$\\Delta E=13.6\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=13.6\\times\\frac{3}{16}$",
              "$\\Delta E=2.55\\,eV=4.08\\times10^{-19}\\,J$",
              "$\\lambda=hc/E\\approx486\\,nm$ (เส้น Balmer สีฟ้า-เขียว)"
            ],
            "answer": "$\\Delta E=2.55\\,eV$, $\\lambda\\approx486\\,nm$"
          }
        ],
        "practice": "อิเล็กตรอนจาก $n=4$ ไป $n=2$ ในไฮโดรเจน จงหาพลังงานโฟตอน"
      },
      {
        "id": "particle-in-box",
        "title": "Particle in a Box",
        "source": "Serway Physics for Scientists and Engineers, Ch 41.2, p.1070–1080",
        "concept": "Particle in 1D box: $\\psi_n(x)=\\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n=\\frac{n^2h^2}{8mL^2}$ ความน่าจะ $|\\psi|^2$ — หา $P$ ในช่วงด้วยการ integrate $|\\psi|^2 dx$",
        "formula": "E_n=\\frac{n^2h^2}{8mL^2},\\quad \\int|\\psi|^2\\,dx=1",
        "warning": "Quantum number $n=1,2,3,\\ldots$ — ground state $n=1$ ไม่เป็นศูนย์",
        "examples": [
          {
            "title": "พลังงานระดับ n=1,4",
            "level": "Basic",
            "tip": "$E_n\\propto n^2$",
            "problem": "electron ใน box $L=0.10\\,nm$ หา $E_1$ และ $E_4$ ($h=6.63\\times10^{-34}$, $m_e=9.11\\times10^{-31}$)",
            "steps": [
              "$E_1=h^2/(8mL^2)\\approx6.0\\times10^{-18}\\,J\\approx37.5\\,eV$",
              "$E_4=16E_1\\approx600\\,eV$"
            ],
            "answer": "$E_1\\approx38\\,eV$, $E_4\\approx600\\,eV$"
          },
          {
            "title": "Probability ในครึ่งแรก",
            "level": "Hard",
            "tip": "$P=\\int_0^{L/2}|\\psi_1|^2 dx$",
            "problem": "ground state box $L$ หา $P$ ที่ $0<x<L/2$",
            "steps": [
              "$|\\psi_1|^2=(2/L)\\sin^2(\\pi x/L)$",
              "$P=\\int_0^{L/2}(2/L)\\sin^2(\\pi x/L)dx=\\frac12$ (symmetry)"
            ],
            "answer": "$P=0.5$"
          }
        ],
        "practice": "box $L=2\\,nm$ หา $\\Delta E=E_2-E_1$ ของ electron"
      },
      {
        "id": "nuclear-physics",
        "title": "Nuclear Physics",
        "source": "Serway Physics for Scientists and Engineers, Ch 44, p.1120–1140",
        "concept": "นิวเคลียสประกอบด้วย nucleon (proton + neutron) พลังงาน binding energy $E_b=\\Delta mc^2$ คือพลังงานที่ต้องใช้แยก nucleon การสลายรังสี: $\\alpha$ (He nucleus), $\\beta^\\pm$ (เปลี่ยน proton/neutron), $\\gamma$ (photon) กฎ half-life: $N=N_0(1/2)^{t/t_{1/2}}$",
        "formula": "E=\\Delta mc^2,\\quad N=N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}}",
        "warning": "ใช้ mass defect ในหน่วย u แล้วคูณ $931.5\\,MeV/u$ — อย่าลืมว่า $Q<0$ หมายถึง exothermic (ปล่อยพลังงาน)",
        "examples": [
          {
            "title": "Mass defect และ binding energy",
            "level": "Basic",
            "tip": "หา $\\Delta m$ แล้วคูณ $c^2$",
            "problem": "$^4He$ มี mass $4.00260\\,u$; proton $1.00728\\,u$, neutron $1.00866\\,u$ หา binding energy",
            "steps": [
              "$\\Delta m=2(1.00728)+2(1.00866)-4.00260=0.03028\\,u$",
              "$E_b=0.03028\\times931.5\\approx28.2\\,MeV$"
            ],
            "answer": "$E_b\\approx28\\,MeV$"
          },
          {
            "title": "Radioactive decay — half-life",
            "level": "Medium",
            "tip": "ใช้ $N/N_0=(1/2)^{t/t_{1/2}}$",
            "problem": "C-14 มี $t_{1/2}=5730\\,yr$ ตัวอย่างมี $N/N_0=0.25$ หาอายุ",
            "steps": [
              "$0.25=(1/2)^{t/5730}=(1/2)^2$",
              "$t/5730=2$ → $t=11460\\,yr$"
            ],
            "answer": "$t\\approx11500\\,yr$"
          }
        ],
        "practice": "U-238 สลายเป็น Pb-206 ผ่านหลายขั้น ถ้า $t_{1/2}=4.5\\times10^9\\,yr$ หาเศษที่เหลือหลัง $9.0\\times10^9\\,yr$"
      },
      {
        "id": "nuclear-decay-q",
        "title": "Nuclear Decay and Q-Values",
        "source": "Serway Physics for Scientists and Engineers, Ch 44.5, p.1130–1140",
        "concept": "พลังงาน Q ของ nuclear decay: $Q=(m_{initial}-m_{final})c^2$ ใช้ mass ใน u คูณ $931.5\\,MeV/u$ สำหรับ $\\alpha$, $\\beta$ decay เปรียบเทียบ $Q$ ของหลาย pathway",
        "formula": "Q=\\Delta mc^2,\\quad 1\\,u=931.5\\,MeV/c^2",
        "warning": "mass ของ electron ใน $\\beta$ decay มักรวมใน atomic mass table — ใช้ mass ของ neutral atom",
        "examples": [
          {
            "title": "Alpha decay Q-value",
            "level": "Medium",
            "tip": "หา $\\Delta m$ แล้วคูณ 931.5",
            "problem": "$^{281}_{84}Po \\to\\,^{277}_{82}Pb + ^4_2He$  ให้ $m(Po)=281.008973\\,u$, $m(Pb)=277.004573\\,u$, $m(He)=4.002602\\,u$ หา $Q$",
            "steps": [
              "$\\Delta m=281.008973-277.004573-4.002602=-0.001798\\,u$",
              "Wait: $m_f=277.004573+4.002602=277.007175$",
              "$\\Delta m=281.008973-277.007175=0.001798\\,u$",
              "$Q=0.001798\\times931.5\\approx1.67\\,MeV$"
            ],
            "answer": "$Q\\approx1.67\\,MeV$"
          },
          {
            "title": "เปรียบเทียบ Q ของ decay modes",
            "level": "Hard",
            "tip": "เลือก pathway ที่ $Q$ สูงสุด (exothermic มากสุด)",
            "problem": "isotope X สลาย $\\alpha$ หรือ $\\beta^-$ ให้ $Q_\\alpha=4.2\\,MeV$, $Q_\\beta=0.8\\,MeV$ — decay ไหน energetically favored?",
            "steps": [
              "$Q_\\alpha>Q_\\beta$ → $\\alpha$ ปล่อยพลังงานมากกว่า (ถ้า barrier อนุญาต)"
            ],
            "answer": "$\\alpha$ decay มี $Q$ สูงกว่า"
          }
        ],
        "practice": "$^{235}U$ $\\alpha$ decay หา $Q$ ถ้า $\\Delta m=0.0059\\,u$"
      },
      {
        "id": "special-relativity",
        "title": "Special Relativity",
        "source": "Serway Physics for Scientists and Engineers, Ch 39, p.1030–1050",
        "concept": "ทฤษฎีสัมพัทธภาพพิเศษ: กฎฟิสิกส์เหมือนกันในทุก inertial frame ความเร็วแสง $c$ คือค่าสูงสุด time dilation $t=\\gamma t_0$ length contraction $L=L_0/\\gamma$ โดย $\\gamma=1/\\sqrt{1-v^2/c^2}$ พลังงาน-มวล $E=mc^2$",
        "formula": "t=\\gamma t_0,\\quad L=\\frac{L_0}{\\gamma},\\quad E=mc^2,\\quad \\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}",
        "warning": "Time dilation ทำให้เวลา 'ช้าลง' ใน frame ที่เคลื่อนที่ — อย่าสลับ $t$ กับ $t_0$ และใช้ $c=3.00\\times10^8\\,m/s$",
        "examples": [
          {
            "title": "Time dilation",
            "level": "Basic",
            "tip": "หา $\\gamma$ ก่อน แล้วคูณ proper time",
            "problem": "นักบินเคลื่อนที่ $v=0.60c$ วัดเวลา $t_0=10\\,min$ ในเครื่อง หา $t$ ใน lab frame",
            "steps": [
              "$\\gamma=1/\\sqrt{1-0.36}=1/\\sqrt{0.64}=1.25$",
              "$t=\\gamma t_0=1.25(10)=12.5\\,min$"
            ],
            "answer": "$t=12.5\\,min$"
          },
          {
            "title": "Relativistic energy",
            "level": "Medium",
            "tip": "ใช้ $E=\\gamma mc^2$ สำหรับ total energy",
            "problem": "อิเล็กตรอน ($m=9.11\\times10^{-31}\\,kg$) เร่งถึง $v=0.80c$ หา kinetic energy",
            "steps": [
              "$\\gamma=1/\\sqrt{1-0.64}=1/0.6\\approx1.667$",
              "$K=(\\gamma-1)mc^2=0.667(9.11\\times10^{-31})(9\\times10^{16})$",
              "$K\\approx5.47\\times10^{-14}\\,J\\approx0.34\\,MeV$"
            ],
            "answer": "$K\\approx0.34\\,MeV$"
          }
        ],
        "practice": "ยานอวกาศยาว $100\\,m$ ใน rest frame เคลื่อนที่ $v=0.90c$ หา $L$ ที่ observer บนพื้นดินเห็น"
      }
    ]
  }
]
};
