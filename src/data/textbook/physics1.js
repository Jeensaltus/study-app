/** Auto-generated from scripts/textbook/parsed — npm run build:slides */
export const textbookPhysics1 = {
  chapters: [
  {
    "id": "math-physics",
    "title": "Physics and Measurement",
    "description": "หน่วย SI เวกเตอร์ และการวิเคราะห์มิติ",
    "sections": [
      {
        "id": "units-vectors",
        "title": "Units, Vectors, and Scalars",
        "source": "Serway Physics for Scientists and Engineers, Ch 1–2, p.1–40",
        "concept": "หน่วย SI เป็นพื้นฐานของการวัดในฟิสิกส์: มวล (kg), ความยาว (m), เวลา (s), อุณหภูมิ (K), กระแส (A), ความสว่าง (cd), ปริมาณสาร (mol) สเกลาร์มีขนาดอย่างเดียว ส่วนเวกเตอร์มีทั้งขนาดและทิศทาง การบวกเวกเตอร์ใช้กฎสามเหลี่ยมหรือแยกองค์ประกอบ $A_x=A\\cos\\theta$, $A_y=A\\sin\\theta$ แล้วรวมทีละแกน",
        "formula": "\\vec A=\\vec B+\\vec C,\\quad A_x=A\\cos\\theta,\\quad A_y=A\\sin\\theta",
        "warning": "ห้านำสเกลาร์มาบวกกับเวกเตอร์โดยตรง และอย่าลืมแปลงหน่วย (เช่น km/h → m/s) ก่อนคำนวณ",
        "examples": [
          {
            "title": "แยกองค์ประกอบเวกเตอร์",
            "level": "Basic",
            "tip": "ใช้ cos กับแกน x และ sin กับแกน y",
            "problem": "เวกเตอร์ขนาด $50\\,N$ ทำมุม $37°$ กับแกน x หา $F_x$ และ $F_y$",
            "steps": [
              "$F_x=50\\cos37°=50(0.8)=40\\,N$",
              "$F_y=50\\sin37°=50(0.6)=30\\,N$",
              "ตรวจ: $\\sqrt{40^2+30^2}=50\\,N$ ✓"
            ],
            "answer": "$F_x=40\\,N$, $F_y=30\\,N$"
          },
          {
            "title": "บวกเวกเตอร์ด้วยองค์ประกอบ",
            "level": "Medium",
            "tip": "รวมทีละแกน แล้วหาขนาดและมุม",
            "problem": "เวกเตอร์ $\\vec A=(3,4)$ และ $\\vec B=(-1,2)$ หา $\\vec R=\\vec A+\\vec B$ และ $|R|$",
            "steps": [
              "$R_x=3+(-1)=2$, $R_y=4+2=6$",
              "$|R|=\\sqrt{2^2+6^2}=\\sqrt{40}\\approx6.32$",
              "$\\theta=\\arctan(6/2)\\approx71.6°$ จากแกน x"
            ],
            "answer": "$\\vec R=(2,6)$, $|R|\\approx6.32$"
          }
        ],
        "practice": "เวกเตอร์ความเร็ว $v=100\\,km/h$ ทิศทาง $60°$ เหนือแกน x หา $v_x$ และ $v_y$ (m/s)"
      },
      {
        "id": "dimensional-analysis",
        "title": "Dimensional Analysis",
        "source": "Serway Physics for Scientists and Engineers, Ch 1, p.10–18",
        "concept": "การวิเคราะห์มิติตรวจสอบว่าสมการมีหน่วยสอดคล้องกัน โดยแทนตัวแปรด้วยหน่วยพื้นฐาน M (มวล), L (ความยาว), T (เวลา) ถ้ามิติทั้งสองข้างไม่เท่ากัน สมการผิด ใช้หลัก homogeneity ช่วยหาสูตรเชิงประจักษ์และตรวจคำตอบ",
        "formula": "[F]=MLT^{-2},\\quad [v]=LT^{-1},\\quad [E]=ML^2T^{-2}",
        "warning": "มิติของค่าคงที่ (เช่น $g$, $k$) ต้องทำให้สมการสมดุล — อย่าลืมนับเลขชี้ของ T",
        "examples": [
          {
            "title": "ตรวจมิติของสมการพลังงานจลน์",
            "level": "Basic",
            "tip": "แทน $m$ ด้วย M และ $v$ ด้วย LT⁻¹",
            "problem": "ตรวจว่า $K=\\frac{1}{2}mv^2$ มีมิติของพลังงานหรือไม่",
            "steps": [
              "$[K]=[m][v]^2=M(LT^{-1})^2=ML^2T^{-2}$",
              "$[E]=ML^2T^{-2}$ (พลังงาน)",
              "มิติตรงกัน → สมการเป็นไปได้"
            ],
            "answer": "มิติถูกต้อง: $[K]=ML^2T^{-2}$"
          },
          {
            "title": "หาสูตรจากมิติ — ความถี่ของลวด",
            "level": "Medium",
            "tip": "สมมติ $f\\propto T^a L^b \\mu^c$ แล้วจับมิติ",
            "problem": "ความถี่ $f$ ของลวดขึ้นกับแรงตึง $T$, ความยาว $L$, ความหนาแน่นเชิงเส้น $\\mu$ หาค่า $a,b,c$",
            "steps": [
              "$[f]=T^{-1}$, $[T]=MLT^{-2}$, $[L]=L$, $[\\mu]=ML^{-1}$",
              "มิติ M: $0=a+c$ → $a=-c$",
              "มิติ L: $0=1+b-c$; มิติ T: $-1=-2a$ → $a=\\frac{1}{2}$, $c=-\\frac{1}{2}$, $b=-1$",
              "$f\\propto\\frac{1}{L}\\sqrt{\\frac{T}{\\mu}}$"
            ],
            "answer": "$f\\propto\\frac{1}{L}\\sqrt{T/\\mu}$"
          }
        ],
        "practice": "ตรวจมิติของ $P=\\rho gh$ โดย $[\\rho]=ML^{-3}$, $[g]=LT^{-2}$, $[h]=L$"
      }
    ]
  },
  {
    "id": "energy",
    "title": "Work, Energy, and Power",
    "description": "",
    "sections": [
      {
        "id": "potential-energy",
        "title": "Potential Energy and Conservation of Energy",
        "source": "Serway Physics for Scientists and Engineers, Ch 8, p.176–195",
        "concept": "พลังงานศักย์ $U$ ขึ้นกับตำแหน่ง: โน้มถ่วง $U=mgh$, สปริง $U=\\frac{1}{2}kx^2$ กฎการอนุรักษ์พลังงานกลไก: $K_i+U_i=K_f+U_f$ เมื่อไม่มีแรง non-conservative ทำงาน งานของแรง conservative $W=-\\Delta U$",
        "formula": "E_{mech}=K+U=\\text{const},\\quad W_{nc}=\\Delta E_{mech}",
        "warning": "เลือก reference point ของ $U$ ให้สะดวก — มักตั้ง $U=0$ ที่พื้นหรือจุดสมดุงสปริง",
        "examples": [
          {
            "title": "ลูกบอลตกจากความสูง",
            "level": "Basic",
            "tip": "ใช้ $mgh=\\frac{1}{2}mv^2$",
            "problem": "ลูกบอล $2\\,kg$ ตกจาก $5\\,m$ หา $v$ ก่อนกระทบพื้น ($g=9.8\\,m/s^2$)",
            "steps": [
              "$mgh=\\frac{1}{2}mv^2$ → $v=\\sqrt{2gh}=\\sqrt{2(9.8)(5)}=\\sqrt{98}$",
              "$v\\approx9.9\\,m/s$"
            ],
            "answer": "$v\\approx9.9\\,m/s$"
          },
          {
            "title": "สปริง — ความเร็วที่จุดสมดุง",
            "level": "Medium",
            "tip": "ที่ $x=0$: $U=0$, พลังงานทั้งหมดเป็น $K$",
            "problem": "สปริง $k=400\\,N/m$ ยืด $0.10\\,m$ แล้วปล่อย $m=0.50\\,kg$ หา $v$ ที่จุดสมดุง",
            "steps": [
              "$E=\\frac{1}{2}kA^2=\\frac{1}{2}(400)(0.01)=2\\,J$",
              "$\\frac{1}{2}mv^2=2$ → $v=\\sqrt{8}=2.83\\,m/s$"
            ],
            "answer": "$v\\approx2.8\\,m/s$"
          }
        ],
        "practice": "รถไฟราง $m=1000\\,kg$ ที่ $v=10\\,m/s$ ขึ้นเนิน $h=5\\,m$ หา $v$ บนยอดเนิน (ไม่มี friction)",
        "graph": "energy"
      },
      {
        "id": "power",
        "title": "Power",
        "source": "Serway Physics for Scientists and Engineers, Ch 8, p.195–200",
        "concept": "กำลัง $P$ คืออัตราการทำงาน $P=dW/dt$ สำหรับแรงคงที่ $P=\\Fv\\cos\\theta$ หน่วย SI คือ Watt ($1\\,W=1\\,J/s$) กำลังเฉลี่ย $P_{avg}=\\Delta W/\\Delta t$",
        "formula": "P=\\frac{W}{t}=Fv\\cos\\theta",
        "warning": "มุม $\\theta$ คือมุมระหว่าง $\\vec F$ กับ $\\vec v$ — ถ้าแรงตั้งฉากกับการเคลื่อนที่ $P=0$",
        "examples": [
          {
            "title": "กำลังจากงานและเวลา",
            "level": "Basic",
            "tip": "ใช้ $P=W/t$",
            "problem": "ยกของ $200\\,N$ ขึ้น $3\\,m$ ใน $6\\,s$ หา $P$",
            "steps": [
              "$W=200(3)=600\\,J$",
              "$P=600/6=100\\,W$"
            ],
            "answer": "$P=100\\,W$"
          },
          {
            "title": "กำลังขณะเดินขึ้น",
            "level": "Medium",
            "tip": "ใช้ $P=Fv$ เมื่อ $F\\parallel v$",
            "problem": "คน $70\\,kg$ เดินขึ้นบันได $4\\,m$ ใน $20\\,s$ (ความเร็วคงที่) หา $P$",
            "steps": [
              "$F=mg=70(9.8)=686\\,N$",
              "$v=4/20=0.20\\,m/s$",
              "$P=Fv=686(0.20)=137\\,W$"
            ],
            "answer": "$P\\approx140\\,W$"
          }
        ],
        "practice": "เครื่องยนต์ทำงาน $1.5\\,kJ$ ใน $0.50\\,s$ หา $P$"
      }
    ]
  },
  {
    "id": "fluids",
    "title": "Fluid Mechanics",
    "description": "",
    "sections": [
      {
        "id": "pressure-buoyancy",
        "title": "Pressure and Buoyancy",
        "source": "Serway Physics for Scientists and Engineers, Ch 14, p.350–370",
        "concept": "ความดัน $P=F/A$ ในของเหลวนิ่ง $P=P_0+\\rho gh$ โดย $P_0$ คือความดันที่ผิว กฎอารคิมิดีส: แรงลอยตัว $F_b=\\rho_{fluid}gV_{displaced}$ เท่ากับน้ำหนักของของเหลวที่วัตถุข displacing วัตถุลอยเมื่อ $\\rho_{obj}<\\rho_{fluid}$",
        "formula": "P=P_0+\\rho gh,\\quad F_b=\\rho_{fluid}gV_{disp}",
        "warning": "ใช้ความสูง $h$ วัดจากระดับผิวของของเหลว ไม่ใช่จากก้นภาชนะ — และ $V_{disp}$ คือปริมาตรของของเหลวที่ถูกแทนที่",
        "examples": [
          {
            "title": "ความดันที่ความลึก",
            "level": "Basic",
            "tip": "ใช้ $P=P_0+\\rho gh$ โดย $P_0=1.01\\times10^5\\,Pa$",
            "problem": "หาความดันในน้ำลึก $10\\,m$ ($\\rho=1000\\,kg/m^3$, $g=9.8\\,m/s^2$)",
            "steps": [
              "$P=1.01\\times10^5+1000(9.8)(10)$",
              "$P=1.01\\times10^5+9.8\\times10^4=1.99\\times10^5\\,Pa$"
            ],
            "answer": "$P\\approx2.0\\times10^5\\,Pa$"
          },
          {
            "title": "แรงลอยตัว — ก้อนไม้ลอยน้ำ",
            "level": "Medium",
            "tip": "วัตถุลอยเมื่อ $F_b=W$",
            "problem": "ก้อนไม้มวล $5\\,kg$ ลอยในน้ำ ($\\rho_w=1000\\,kg/m^3$) หาปริมาณที่จมใต้น้ำ",
            "steps": [
              "$F_b=W$ → $\\rho_w g V_{sub}=mg$",
              "$V_{sub}=m/\\rho_w=5/1000=0.005\\,m^3$",
              "จม $0.005\\,m^3$ จากปริมาตรทั้งหมด"
            ],
            "answer": "$V_{sub}=0.005\\,m^3=5\\,L$"
          }
        ],
        "practice": "ท่อ U มีน้ำมัน ($\\rho=800\\,kg/m^3$) สูง $20\\,cm$ ด้านหนึ่ง และน้ำสูง $25\\,cm$ อีกด้าน หาความต่างความดันที่ก้นท่อ"
      },
      {
        "id": "manometer",
        "title": "Manometer and Multi-Fluid Columns",
        "source": "Serway Physics for Scientists and Engineers, Ch 14.2, p.360–370",
        "concept": "Manometer / multi-fluid column: $P_{bottom}=P_{top}+\\rho gh$ (same horizontal level same pressure) เปรียบเทียบ $P_A$, $P_B$ จากความสูงคอลัมน์ของ fluid หลายชนิด",
        "formula": "P=P_0+\\rho gh",
        "warning": "จุดเดียวกันใน fluid continuous → ความดันเท่ากัน — ใช้ $\\rho$ ของ fluid ในแต่ละคอลัมน์",
        "examples": [
          {
            "title": "U-tube manometer",
            "level": "Medium",
            "tip": "ความต่างระดับ → $\\Delta P=\\rho g\\Delta h$",
            "problem": "U-tube ใส่น้ำ ($\\rho=1000\\,kg/m^3$) ด้านหนึ่งต่อ gas อีกด้านเปิดอากาศ ระดับต่าง $h=12\\,cm$ หา gauge pressure ของ gas",
            "steps": [
              "$P_{gas}=P_{atm}+\\rho gh=101325+1000(9.8)(0.12)\\approx102501\\,Pa$"
            ],
            "answer": "$P_{gas}\\approx102.5\\,kPa$"
          },
          {
            "title": "สอง fluid ในท่อ U",
            "level": "Hard",
            "tip": "แต่ละ side ใช้ $\\rho$ ต่างกัน",
            "problem": "ท่อ U มีน้ำ ($\\rho_w$) และน้ำมัน ($\\rho_o=800$) ความสูงคอลัมน์ oil $h_o=5\\,cm$ น้ำ $h_w=3\\,cm$ หา $P_{oil side}-P_{water side}$",
            "steps": [
              "ที่ interface: $P+\\rho_w g h_w = P'+\\rho_o g h_o$",
              "แก้ตาม geometry ของโจทย์"
            ],
            "answer": "ใช้ hydrostatic balance"
          }
        ],
        "practice": "Mercury manometer $\\Delta h=20\\,cm$ หา gauge pressure ($\\rho_{Hg}=13600\\,kg/m^3$)"
      },
      {
        "id": "fluid-dynamics",
        "title": "Fluid Dynamics and Bernoulli",
        "source": "Serway Physics for Scientists and Engineers, Ch 14, p.370–390",
        "concept": "กฎความต่อเนื่อง: $A_1v_1=A_2v_2$ สำหรับของเหลวไม่บีบอัด สมการเบอร์นูลลี่ $P_1+\\frac{1}{2}\\rho v_1^2+\\rho gh_1=P_2+\\frac{1}{2}\\rho v_2^2+\\rho gh_2$ บอกว่าความดันต่ำเมื่อความเร็วสูง (Venturi effect) ใช้กับของเหลวไหล laminar และไม่หนืด",
        "formula": "A_1v_1=A_2v_2,\\quad P+\\tfrac{1}{2}\\rho v^2+\\rho gh=\\text{const}",
        "warning": "เบอร์นูลลี่ใช้ได้เมื่อของเหลวไหลสม่ำเสมอและไม่มีการสูญเสียพลังงานจากความหนืด — อย่าลืมเทอม $\\rho gh$ เมื่อมีความต่างระดับ",
        "examples": [
          {
            "title": "ความต่อเนื่อง — ท่อแคบเร็วขึ้น",
            "level": "Basic",
            "tip": "ของเหลวไม่บีบอัด → อัตราการไหลปริมาตรคงที่",
            "problem": "ท่อเส้นผ่านศูนย์กลาง $4\\,cm$ ความเร็ว $2\\,m/s$ แคบเป็น $2\\,cm$ หา $v_2$",
            "steps": [
              "$A_1=\\pi(0.02)^2$, $A_2=\\pi(0.01)^2$",
              "$v_2=v_1(A_1/A_2)=2(4)=8\\,m/s$"
            ],
            "answer": "$v_2=8\\,m/s$"
          },
          {
            "title": "เบอร์นูลลี่ — ท่อราบ",
            "level": "Medium",
            "tip": "ถ้า $h$ เท่ากัน เทอม $\\rho gh$ หายไป",
            "problem": "น้ำไหลในท่อราบ ความเร็วเพิ่มจาก $1\\,m/s$ เป็น $4\\,m/s$ ($\\rho=1000\\,kg/m^3$) หา $\\Delta P$",
            "steps": [
              "$P_1-P_2=\\frac{1}{2}\\rho(v_2^2-v_1^2)$",
              "$\\Delta P=\\frac{1}{2}(1000)(16-1)=7500\\,Pa$",
              "ความดันลดลง $7500\\,Pa$ ที่จุดเร็ว"
            ],
            "answer": "$\\Delta P=7500\\,Pa$"
          }
        ],
        "practice": "น้ำไหลจากท่อใหญ่ $A=0.05\\,m^2$ ความเร็ว $1.5\\,m/s$ เข้าท่อเล็ก $A=0.02\\,m^2$ หา $v_2$ และ $\\Delta P$ (ท่อราบ, $\\rho=1000\\,kg/m^3$)"
      }
    ]
  },
  {
    "id": "oscillations-waves",
    "title": "Oscillations and Waves",
    "description": "",
    "sections": [
      {
        "id": "simple-harmonic-motion",
        "title": "Simple Harmonic Motion",
        "source": "Serway Physics for Scientists and Engineers, Ch 15, p.390–410",
        "concept": "การเคลื่อนที่แบบ SHM มีแรงคืนสู่สมดุล $F=-kx$ ทำให้ $x(t)=A\\cos(\\omega t+\\phi)$ โดย $\\omega=\\sqrt{k/m}$ และคาบ $T=2\\pi\\sqrt{m/k}$ พลังงานรวม $E=\\frac{1}{2}kA^2$ คงที่ เปลี่ยนระหว่างพลังงานจลน์และพลังงานศักย์",
        "formula": "x=A\\cos(\\omega t+\\phi),\\quad \\omega=\\sqrt{k/m},\\quad T=2\\pi\\sqrt{m/k}",
        "warning": "SHM ต้องมีแรงสัดส่วนกับการกระจัดและทิศเข้าสู่จุดสมดุล — อย่าใช้สูตร $T=2\\pi\\sqrt{m/k}$ กับ pendulum โดยไม่แทน $k_{eff}=mg/L$",
        "examples": [
          {
            "title": "คาบของ mass-spring",
            "level": "Basic",
            "tip": "ใช้ $T=2\\pi\\sqrt{m/k}$ โดยตรง",
            "problem": "มวล $0.5\\,kg$ ติดสปริง $k=200\\,N/m$ หาคาบและความถี่",
            "steps": [
              "$T=2\\pi\\sqrt{0.5/200}=2\\pi\\sqrt{0.0025}=2\\pi(0.05)$",
              "$T=0.314\\,s$",
              "$f=1/T\\approx3.18\\,Hz$"
            ],
            "answer": "$T\\approx0.31\\,s$, $f\\approx3.2\\,Hz$"
          },
          {
            "title": "พลังงานใน SHM",
            "level": "Medium",
            "tip": "พลังงานรวมไม่ขึ้นกับตำแหน่ง",
            "problem": "สปริง $k=100\\,N/m$ กระจัด $A=0.10\\,m$ หา $E_{total}$ และ $v_{max}$ ของ $m=0.25\\,kg$",
            "steps": [
              "$E=\\frac{1}{2}kA^2=\\frac{1}{2}(100)(0.01)=0.5\\,J$",
              "ที่ $x=0$: $E=\\frac{1}{2}mv_{max}^2$",
              "$v_{max}=\\sqrt{2E/m}=\\sqrt{4}=2\\,m/s$"
            ],
            "answer": "$E=0.5\\,J$, $v_{max}=2\\,m/s$"
          }
        ],
        "practice": "ลูกตุ้มความยาว $1.0\\,m$ หาคาบ ($g=9.8\\,m/s^2$) ใช้ $T=2\\pi\\sqrt{L/g}$",
        "graph": "motion"
      },
      {
        "id": "collision-spring-shm",
        "title": "Collision and Spring Oscillations",
        "source": "Serway Physics for Scientists and Engineers, Ch 15, p.400–410",
        "concept": "Composite: collision แล้วติด spring → SHM — ใช้ momentum conservation หา $v$ หลังชน แล้ว $E=\\frac12 kA^2=\\frac12 mv^2$ หรือ $T=2\\pi\\sqrt{m/k}$",
        "formula": "p_i=p_f,\\quad \\frac12 mv^2=\\frac12 kA^2,\\quad T=2\\pi\\sqrt{m/k}",
        "warning": "",
        "examples": [
          {
            "title": "ชนแล้ว oscillate",
            "level": "Hard",
            "tip": "momentum → energy → amplitude",
            "problem": "$m_1=2\\,kg$ วิ่ง $1\\,m/s$ ชน $m_2=3\\,kg$ นิ่ง ติด spring $k=25\\,N/m$ หา $A$ สูงสุด (stick together)",
            "steps": [
              "$v_f=(2)(1)/(2+3)=0.4\\,m/s$",
              "$A=v_f\\sqrt{m/k}=0.4\\sqrt{5/25}=0.4\\times0.447\\approx0.18\\,m$"
            ],
            "answer": "$A\\approx18\\,cm$"
          },
          {
            "title": "Period หลังชน",
            "level": "Medium",
            "tip": "$T=2\\pi\\sqrt{M_{tot}/k}$",
            "problem": "หลังชนติดกัน $M=5\\,kg$, $k=25\\,N/m$ หา $T$",
            "steps": [
              "$T=2\\pi\\sqrt{5/25}=2\\pi\\sqrt{0.2}\\approx2.8\\,s$"
            ],
            "answer": "$T\\approx2.8\\,s$"
          }
        ],
        "practice": "$m=1\\,kg$ ชน spring $k=100\\,N/m$ ด้วย $v=2\\,m/s$ (inelastic stick) หา $x_{max}$"
      },
      {
        "id": "mechanical-waves",
        "title": "Mechanical Waves",
        "source": "Serway Physics for Scientists and Engineers, Ch 16, p.410–435",
        "concept": "คลื่นกลเป็นการส่งพลังงานโดยไม่ถ่ายโอมสสาร ความเร็ว $v=f\\lambda=\\omega/k$ สำหรับสตริง $v=\\sqrt{T/\\mu}$ โดย $T$ คือแรงตึงและ $\\mu$ คือความหนาแน่นเชิงเส้น คลื่นยืน (standing wave) เกิดจาก interference ของคลื่นเดินที่สะท้อน",
        "formula": "v=f\\lambda,\\quad v=\\sqrt{T/\\mu}",
        "warning": "แยกความเร็วคลื่น ($v$) กับความเร็วอนุภาค ($v_y$ ของจุดบนสตริง) — อย่าสับสน $f$ กับ $T=1/f$",
        "examples": [
          {
            "title": "ความเร็วคลื่นบนสตริง",
            "level": "Basic",
            "tip": "ใช้ $v=\\sqrt{T/\\mu}$",
            "problem": "สตริงแรงตึง $50\\,N$ ความหนาแน่นเชิงเส้น $0.005\\,kg/m$ หา $v$",
            "steps": [
              "$v=\\sqrt{50/0.005}=\\sqrt{10000}=100\\,m/s$"
            ],
            "answer": "$v=100\\,m/s$"
          },
          {
            "title": "หาความยาวคลื่นและความถี่",
            "level": "Medium",
            "tip": "ใช้ $v=f\\lambda$",
            "problem": "คลื่นเสียงในห้อง $v=340\\,m/s$ ความถี่ $170\\,Hz$ หา $\\lambda$ และคาบ",
            "steps": [
              "$\\lambda=v/f=340/170=2\\,m$",
              "$T=1/f=1/170\\approx0.0059\\,s$"
            ],
            "answer": "$\\lambda=2\\,m$, $T\\approx5.9\\,ms$"
          }
        ],
        "practice": "สตริงยาว $2\\,m$ มีโหมดที่ 3 (3 loops) แรงตึง $40\\,N$, $\\mu=0.004\\,kg/m$ หาความถี่ของโหมดนี้"
      },
      {
        "id": "doppler-effect",
        "title": "Doppler Effect",
        "source": "Serway Physics for Scientists and Engineers, Ch 17, p.435–455",
        "concept": "Doppler effect: $f'=\\dfrac{v\\pm v_o}{v\\mp v_s}f$ — บวก/ลบตามทิศ relative motion; สำหรับ source และ observer เคลื่อนที่บนเส้นตรง",
        "formula": "f'=\\frac{v\\pm v_o}{v\\mp v_s}f",
        "warning": "เข้าหากัน → $f$ สูงขึ้น; ถอยห่าง → $f$ ต่ำลง — ตรวจเครื่องหมายทั้ง $v_o$ และ $v_s$",
        "examples": [
          {
            "title": "Source เข้าใกล้",
            "level": "Basic",
            "tip": "ใช้ $f'=(v/(v-v_s))f$",
            "problem": "รถ $v_s=30\\,m/s$ บีบแตร $600\\,Hz$ เข้าหาผู้ยืนนิ่ง ($v=340\\,m/s$) หา $f'$",
            "steps": [
              "$f'=(340/(340-30))\\times600\\approx652\\,Hz$"
            ],
            "answer": "$f'\\approx652\\,Hz$"
          },
          {
            "title": "Observer เคลื่อนที่",
            "level": "Medium",
            "tip": "ทั้ง source และ observer",
            "problem": "source $500\\,Hz$ หยุดนิ่ง observer วิ่งเข้าหา $20\\,m/s$ หา $f'$",
            "steps": [
              "$f'=((340+20)/340)\\times500\\approx529\\,Hz$"
            ],
            "answer": "$f'\\approx529\\,Hz$"
          }
        ],
        "practice": "Ambulance $700\\,Hz$ วิ่งออก $25\\,m/s$ หา $f'$ ที่ผู้ฟังนิ่ง"
      }
    ]
  },
  {
    "id": "thermodynamics",
    "title": "Thermodynamics and Kinetic Theory",
    "description": "",
    "sections": [
      {
        "id": "temperature-heat",
        "title": "Temperature and Heat",
        "source": "Serway Physics for Scientists and Engineers, Ch 19, p.480–500",
        "concept": "อุณหภูมิวัดระดับความร้อนเชิงจลน์ ความร้อน $Q$ คือการถ่ายโอนพลังงานเพราะความต่างอุณหภูมิ ไม่ใช่สิ่งที่วัตถุ 'มี' ความร้อนสัมผัส: $Q=mc\\Delta T$ สำหรับของแข็ง/ของเหลว การเปลี่ยนสถานะใช้ $Q=mL$ (latent heat)",
        "formula": "Q=mc\\Delta T,\\quad Q=mL",
        "warning": "ความร้อน ($Q$) กับอุณหภูมิ ($T$) ต่างกัน — อย่าเขียน 'วัตถุมีความร้อน 50°C' แต่ควรบอกว่ามีอุณหภูมิ 50°C",
        "examples": [
          {
            "title": "ความร้อนสัมผัส — น้ำร้อนเย็นลง",
            "level": "Basic",
            "tip": "ใช้ $Q=mc\\Delta T$ และ $Q_{lost}=Q_{gain}$",
            "problem": "น้ำ $200\\,g$ ที่ $80°C$ เทลงน้ำ $300\\,g$ ที่ $20°C$ ($c=4186\\,J/kg\\cdot K$) หา $T_f$",
            "steps": [
              "$m_1c(T_1-T_f)=m_2c(T_f-T_2)$",
              "$200(80-T_f)=300(T_f-20)$",
              "$16000-200T_f=300T_f-6000$ → $500T_f=22000$",
              "$T_f=44°C$"
            ],
            "answer": "$T_f=44°C$"
          },
          {
            "title": "Latent heat — น้ำแข็งละลาย",
            "level": "Medium",
            "tip": "แยกขั้นตอน: ละลายแล้วค่อยอุ่น",
            "problem": "น้ำแข็ง $50\\,g$ ที่ $0°C$ รับความร้อน $16700\\,J$ ($L_f=334\\,J/g$) หาว่าละลายหมดหรือไม่",
            "steps": [
              "$Q_{melt}=mL_f=50(334)=16700\\,J$",
              "พลังงานพอดีกับที่ให้ → ละลายหมด ยัง $0°C$"
            ],
            "answer": "ละลายหมด อุณหภูมิ $0°C$"
          }
        ],
        "practice": "โลหะ $100\\,g$ ที่ $120°C$ ใส่น้ำ $250\\,g$ ที่ $25°C$ ได้ $T_f=30°C$ หา $c_{metal}$ ($c_{water}=4186\\,J/kg\\cdot K$)"
      },
      {
        "id": "first-law-thermo",
        "title": "First Law of Thermodynamics",
        "source": "Serway Physics for Scientists and Engineers, Ch 20, p.500–520",
        "concept": "กฎข้อที่ 1 ของอุณหมู่นิยม: $\\Delta U=Q-W$ โดย $Q$ คือความร้อนเข้าระบบ (บวก) และ $W$ คืองานที่ระบบทำ (บวกเมื่อขยาย) $\\Delta U$ ขึ้นกับสถานะเท่านั้น สำหรับ ideal gas ที่ $T$ คงที่ $\\Delta U=0$",
        "formula": "\\Delta U=Q-W",
        "warning": "สัญญาณของ $W$: ระบบขยาย → $W>0$ (ระบบทำงานออก) ระบบถูกบีบ → $W<0$ — ตรวจ convention ของตำรา",
        "examples": [
          {
            "title": "isobaric expansion",
            "level": "Basic",
            "tip": "งาน $W=P\\Delta V$ ที่ความดันคงที่",
            "problem": "ก๊าซขยายที่ $P=2\\times10^5\\,Pa$ จาก $V_1=0.010\\,m^3$ เป็น $V_2=0.015\\,m^3$ รับ $Q=1200\\,J$ หา $\\Delta U$",
            "steps": [
              "$W=P\\Delta V=2\\times10^5(0.005)=1000\\,J$",
              "$\\Delta U=Q-W=1200-1000=200\\,J$"
            ],
            "answer": "$\\Delta U=200\\,J$"
          },
          {
            "title": "isothermal process — ideal gas",
            "level": "Medium",
            "tip": "อุณหภูมิคงที่ → $\\Delta U=0$",
            "problem": "ideal gas $n=2\\,mol$ ขยาย isothermal ที่ $300\\,K$ ทำงาน $500\\,J$ หา $Q$",
            "steps": [
              "Isothermal ideal gas: $\\Delta U=0$",
              "$Q=W=500\\,J$",
              "ระบบรับความร้อน $500\\,J$"
            ],
            "answer": "$Q=500\\,J$"
          }
        ],
        "practice": "ก๊าซถูกบีบ adiabatic ($Q=0$) งาน $-300\\,J$ เข้าระบบ หา $\\Delta U$",
        "graph": "energy"
      },
      {
        "id": "pv-thermo-cycle",
        "title": "PV Diagrams and Thermodynamic Cycles",
        "source": "Serway Physics for Scientists and Engineers, Ch 20.5, p.510–520",
        "concept": "PV diagram: งาน $W=\\oint P\\,dV$ (พื้นที่รอบ loop) สำหรับ cyclic process $\\Delta U=0$ ดังนั้น $Q_{net}=W$ กระบวนการ isobaric $W=P\\Delta V$, isochoric $W=0$, adiabatic $Q=0$",
        "formula": "\\Delta U=Q-W,\\quad W=\\oint P\\,dV",
        "warning": "Convention: $W>0$ เมื่อระบบขยาย — ตาราง Q, W, $\\Delta U$ ต้องสอดคล้องกับทิศ process",
        "examples": [
          {
            "title": "ตาราง cyclic A→B→C→D",
            "level": "Hard",
            "tip": "ใช้ $\\Delta U=0$ รอบ cycle ตรวจ Q รวม",
            "problem": "ideal gas ทำ cycle: A→B isobaric $P=0.8\\,atm$, $V:2\\to8\\,L$; B→C adiabatic; C→D isobaric $P=0.4\\,atm$, $V:8\\to2\\,L$; D→A isochoric หา $W_{cycle}$ ถ้า $W_{AB}=480\\,J$",
            "steps": [
              "$W_{BC}=0$ (adiabatic reversible approx หรือให้ในโจทย์)",
              "$W_{CD}=P\\Delta V=0.4\\,atm\\times(-6\\,L)$ (negative — compression)",
              "รวม $W_{cycle}=$ พื้นที่ใน PV diagram"
            ],
            "answer": "ใช้พื้นที่ loop หรือผลรวม $W_i$"
          },
          {
            "title": "Isobaric + adiabatic",
            "level": "Medium",
            "tip": "แยกคำนวณแต่ละ leg",
            "problem": "A: $2\\,L$, $0.8\\,atm$ → B: adiabatic ไป $0.4\\,atm$, $8\\,L$ หา $W_{AB}$ (isobaric)",
            "steps": [
              "$W_{AB}=P\\Delta V=0.8\\,atm\\times6\\,L=4.8\\,L\\cdot atm\\approx486\\,J$"
            ],
            "answer": "$W_{AB}\\approx486\\,J$"
          }
        ],
        "practice": "วาด PV cycle แล้วเติมตาราง Q, $\\Delta U$, W สำหรับ isothermal expansion $n=1\\,mol$, $T=300\\,K$, $V:1\\to2\\,L$",
        "graph": "energy"
      },
      {
        "id": "kinetic-theory",
        "title": "Kinetic Theory of Gases",
        "source": "Serway Physics for Scientists and Engineers, Ch 19, p.490–510",
        "concept": "ทฤษฎีจลน์ของก๊าซ: อนุภาคเคลื่อนที่สุ่มชนกัน สร้างความดัน $P=\\frac{1}{3}\\rho\\overline{v^2}$ สำหรับ ideal gas $PV=nRT$ ความเร็ว RMS $\\overline{v^2}=3k_BT/m=3RT/M$ พลังงานจลน์เฉลี่ยต่ออนุภาค $\\frac{3}{2}k_BT$",
        "formula": "PV=nRT,\\quad v_{rms}=\\sqrt{3RT/M}",
        "warning": "ใช้ $R=8.314\\,J/mol\\cdot K$ กับ $n$ (mol) หรือ $k_B=1.38\\times10^{-23}\\,J/K$ กับจำนวนอนุภาค — อย่าสับสนหน่วย",
        "examples": [
          {
            "title": "Ideal gas law — หาความดัน",
            "level": "Basic",
            "tip": "แปลงหน่วยให้ SI ก่อน",
            "problem": "ก๊าซ $n=0.50\\,mol$ ใน $V=10\\,L$ ที่ $T=300\\,K$ หา $P$",
            "steps": [
              "$V=0.010\\,m^3$",
              "$P=nRT/V=0.50(8.314)(300)/0.010$",
              "$P=1.247\\times10^5\\,Pa\\approx1.25\\,atm$"
            ],
            "answer": "$P\\approx1.25\\times10^5\\,Pa$"
          },
          {
            "title": "ความเร็ว RMS",
            "level": "Medium",
            "tip": "ใช้ $v_{rms}=\\sqrt{3RT/M}$",
            "problem": "หา $v_{rms}$ ของ $N_2$ ($M=28\\,g/mol$) ที่ $400\\,K$",
            "steps": [
              "$M=0.028\\,kg/mol$",
              "$v_{rms}=\\sqrt{3(8.314)(400)/0.028}=\\sqrt{356400}$",
              "$v_{rms}\\approx597\\,m/s$"
            ],
            "answer": "$v_{rms}\\approx600\\,m/s$"
          }
        ],
        "practice": "ถัง $O_2$ $32\\,g$ ที่ $27°C$, $P=2\\,atm$, $V=5\\,L$ หา $T$ ใน Kelvin แล้วตรวจว่าเป็น ideal gas หรือไม่ ($R=0.0821\\,L\\cdot atm/mol\\cdot K$)"
      },
      {
        "id": "maxwell-mean-free-path",
        "title": "Maxwell Distribution and Mean Free Path",
        "source": "Serway Physics for Scientists and Engineers, Ch 19.5, p.500–510",
        "concept": "Maxwell-Boltzmann distribution $f(v)\\propto v^2 e^{-mv^2/(2k_BT)}$ — $v_{rms}$, $v_{avg}$, most probable speed $v_p=\\sqrt{2k_BT/m}$ mean free path $\\lambda=1/(\\sqrt2\\,\\pi d^2 n/V)$",
        "formula": "v_{rms}=\\sqrt{3k_BT/m},\\quad \\lambda=\\frac{1}{\\sqrt2\\,\\pi d^2 n/V}",
        "warning": "ใช้ $n/V$ = number density (m⁻³) ไม่ใช่ moles — diameter $d$ ของ molecule",
        "examples": [
          {
            "title": "Mean free path",
            "level": "Hard",
            "tip": "ใช้ $\\lambda=1/(\\sqrt2\\pi d^2 N/V)$",
            "problem": "H₂ $d=2.0\\times10^{-10}\\,m$, $N/V=9.46\\times10^{25}\\,m^{-3}$ หา $\\lambda$",
            "steps": [
              "$\\lambda=1/(\\sqrt2\\,\\pi(2\\times10^{-10})^2(9.46\\times10^{25}))$",
              "$\\lambda\\approx1.2\\times10^{-7}\\,m=120\\,nm$"
            ],
            "answer": "$\\lambda\\approx120\\,nm$"
          },
          {
            "title": "Maxwell — vrms vs vp",
            "level": "Medium",
            "tip": "$v_p=\\sqrt{2RT/M}$, $v_{rms}=\\sqrt{3RT/M}$",
            "problem": "N₂ $M=28\\,g/mol$ ที่ $400\\,K$ หา $v_p$ และ $v_{rms}$",
            "steps": [
              "$v_p=\\sqrt{2(8.314)(400)/0.028}\\approx490\\,m/s$",
              "$v_{rms}=\\sqrt{3(8.314)(400)/0.028}\\approx597\\,m/s$"
            ],
            "answer": "$v_p\\approx490\\,m/s$, $v_{rms}\\approx597\\,m/s$"
          }
        ],
        "practice": "He $M=4\\,g/mol$ ที่ $300\\,K$ หา $v_{rms}$ และเปรียบเทียบ $v_p$"
      },
      {
        "id": "second-law-heat",
        "title": "Second Law and Heat Engines",
        "source": "Serway Physics for Scientists and Engineers, Ch 22, p.540–560",
        "concept": "กฎข้อที่ 2: entropy ของจักรวาลไม่ลดในกระบวนการที่เกิดเองได้ $\\Delta S_{univ}\\ge0$ เครื่องยนต์ความร้อนแปลงความร้อนบางส่วนเป็นงาน ประสิทธิภาพ Carnot สูงสุด $\\eta_C=1-T_C/T_H$ ไม่มีเครื่องยนต์ที่ $\\eta=100\\%$",
        "formula": "\\eta=\\frac{W}{Q_H}=1-\\frac{Q_C}{Q_H},\\quad \\eta_C=1-\\frac{T_C}{T_H}",
        "warning": "อุณหภูมิใน $\\eta_C$ ต้องเป็น Kelvin เสมอ — ห้ามใช้ °C",
        "examples": [
          {
            "title": "ประสิทธิภาพเครื่องยนต์",
            "level": "Basic",
            "tip": "ใช้ $\\eta=W/Q_H$",
            "problem": "เครื่องยนต์รับ $Q_H=500\\,J$ ทิ้ง $Q_C=350\\,J$ หา $\\eta$",
            "steps": [
              "$W=Q_H-Q_C=150\\,J$",
              "$\\eta=150/500=0.30=30\\%$"
            ],
            "answer": "$\\eta=30\\%$"
          },
          {
            "title": "Carnot efficiency",
            "level": "Medium",
            "tip": "แปลง °C เป็น K ก่อน",
            "problem": "เครื่อง Carnot ระหว่าง $T_H=500°C$ และ $T_C=27°C$ หา $\\eta_C$",
            "steps": [
              "$T_H=773\\,K$, $T_C=300\\,K$",
              "$\\eta_C=1-300/773=1-0.388=0.612$"
            ],
            "answer": "$\\eta_C\\approx61\\%$"
          }
        ],
        "practice": "เครื่องยนต์มี $\\eta=40\\%$ รับ $Q_H=800\\,J$ หา $W$ และ $Q_C$"
      },
      {
        "id": "heat-transfer",
        "title": "Heat Transfer",
        "source": "Serway Physics for Scientists and Engineers, Ch 20, p.515–530",
        "concept": "การถ่ายเทความร้อน 3 วิธี: (1) นำ heat — $P=kA\\Delta T/L$ (2) หลอด — $P=hA\\Delta T$ (3) แผ่รังสี — $P=\\sigma A T^4$ (Stefan-Boltzmann) ใน steady state อัตราการไหลของความร้อนคงที่ทุกชั้น",
        "formula": "P_{cond}=\\frac{kA\\Delta T}{L},\\quad P_{rad}=\\sigma A T^4",
        "warning": "Conduction ใช้ $\\Delta T$ ข้ามความหนา $L$ — สำหรับ radiation อุณหภูมิต้องเป็น Kelvin",
        "examples": [
          {
            "title": "Conduction — กำแพง",
            "level": "Basic",
            "tip": "ใช้ $P=kA\\Delta T/L$",
            "problem": "กำแพง $L=0.20\\,m$, $A=10\\,m^2$, $k=0.8\\,W/m\\cdot K$, $\\Delta T=20\\,K$ หา $P$",
            "steps": [
              "$P=0.8(10)(20)/0.20=800\\,W$"
            ],
            "answer": "$P=800\\,W$"
          },
          {
            "title": "Stefan-Boltzmann radiation",
            "level": "Medium",
            "tip": "ใช้ $\\sigma=5.67\\times10^{-8}\\,W/m^2\\cdot K^4$",
            "problem": "วัตถุ $A=0.50\\,m^2$ ที่ $T=500\\,K$ (emissivity $e=1$) หา $P$",
            "steps": [
              "$P=\\sigma AT^4=5.67\\times10^{-8}(0.50)(500^4)$",
              "$P=5.67\\times10^{-8}(0.50)(6.25\\times10^{10})$",
              "$P\\approx1770\\,W$"
            ],
            "answer": "$P\\approx1.8\\,kW$"
          }
        ],
        "practice": "หน้าต่างกระจกสองชั้น $A=2\\,m^2$ ภายใน $22°C$ ภายนอก $-5°C$ ถ้า $U=2.5\\,W/m^2\\cdot K$ หา heat loss"
      }
    ]
  },
  {
    "id": "gravitation",
    "title": "Universal Gravitation",
    "description": "ก฻์แรงโน้มถ่วงสากล วงโคจร และพลังงานศักย์โน้มถ่วง",
    "sections": [
      {
        "id": "universal-gravitation",
        "title": "Newton's Law of Universal Gravitation",
        "source": "Serway Physics for Scientists and Engineers, Ch 13, p.320–340",
        "concept": "กฎแรงโน้มถ่วงสากล: $F=G\\frac{m_1m_2}{r^2}$ โดย $G=6.67\\times10^{-11}\\,N\\cdot m^2/kg^2$ แรงเป็น attractive ทำงานตามเส้นที่เชื่อม mass centers พลังงานศักย์โน้มถ่วง $U=-G\\frac{m_1m_2}{r}$ (ศูนย์ที่ $r\\to\\infty$)",
        "formula": "F=G\\frac{m_1m_2}{r^2},\\quad U=-G\\frac{m_1m_2}{r}",
        "warning": "ใช้ $r$ เป็นระยะระหว่างศูนย์มวล — สำหรับโลก-วัตถุใกล้พื้น ใช้ $F=mg$ ได้เมื่อ $R\\ll r_{Earth}$",
        "examples": [
          {
            "title": "แรงโน้มถ่วงระหว่างสอง mass",
            "level": "Basic",
            "tip": "แทน $G,m_1,m_2,r$ ในสูตร",
            "problem": "mass $1000\\,kg$ และ $2000\\,kg$ ห่าง $0.50\\,m$ หา $F$",
            "steps": [
              "$F=6.67\\times10^{-11}\\frac{(1000)(2000)}{0.25}$",
              "$F=6.67\\times10^{-11}\\times8\\times10^6=5.34\\times10^{-4}\\,N$"
            ],
            "answer": "$F\\approx5.3\\times10^{-4}\\,N$"
          },
          {
            "title": "น้ำหนักบนผิวโลก",
            "level": "Medium",
            "tip": "ใช้ $g=GM/R^2$",
            "problem": "พิสูจน์ว่า $g=9.8\\,m/s^2$ จาก $M_E=5.97\\times10^{24}\\,kg$, $R=6.37\\times10^6\\,m$",
            "steps": [
              "$g=GM/R^2=6.67\\times10^{-11}(5.97\\times10^{24})/(6.37\\times10^6)^2$",
              "$g\\approx9.8\\,m/s^2$"
            ],
            "answer": "$g\\approx9.8\\,m/s^2$"
          }
        ],
        "practice": "ดวงจันทร์ $M=7.35\\times10^{22}\\,kg$, $R=1.74\\times10^6\\,m$ หา $g$ บนผิวจันทร์"
      },
      {
        "id": "orbits-satellites",
        "title": "Orbits and Satellites",
        "source": "Serway Physics for Scientists and Engineers, Ch 13, p.340–360",
        "concept": "วงโคจรวงกลม: แรงโน้มถ่วงให้ centripetal acceleration $G\\frac{Mm}{r^2}=\\frac{mv^2}{r}$ ความเร็วโคจร $v=\\sqrt{GM/r}$ คาบ $T=2\\pi\\sqrt{r^3/(GM)}$ (Kepler's third law) ดาวเทียม geosynchronous: $T=24\\,h$",
        "formula": "v=\\sqrt{\\frac{GM}{r}},\\quad T=2\\pi\\sqrt{\\frac{r^3}{GM}}",
        "warning": "$r$ วัดจากศูนย์โลก ไม่ใช่จากพื้น — สำหรับ LEO ต้องบวก $R_{Earth}$",
        "examples": [
          {
            "title": "ความเร็วโคจร ISS",
            "level": "Basic",
            "tip": "ใช้ $v=\\sqrt{GM/r}$",
            "problem": "สถานีอวกาศ $r=6.77\\times10^6\\,m$ ($h\\approx400\\,km$) หา $v$ ($GM=3.98\\times10^{14}$)",
            "steps": [
              "$v=\\sqrt{3.98\\times10^{14}/6.77\\times10^6}$",
              "$v=\\sqrt{5.88\\times10^7}\\approx7660\\,m/s$"
            ],
            "answer": "$v\\approx7.7\\,km/s$"
          },
          {
            "title": "คาบโคจร",
            "level": "Medium",
            "tip": "ใช้ Kepler $T^2\\propto r^3$",
            "problem": "ดาวเทียม $r=4.22\\times10^7\\,m$ หา $T$ ($GM=3.98\\times10^{14}$)",
            "steps": [
              "$T=2\\pi\\sqrt{r^3/(GM)}=2\\pi\\sqrt{(4.22\\times10^7)^3/(3.98\\times10^{14})}$",
              "$T\\approx86400\\,s=24\\,h$ (geosynchronous)"
            ],
            "answer": "$T\\approx24\\,h$"
          }
        ],
        "practice": "หา $r$ ของดาวเทียมที่ $T=90\\,min$ รอบโลก"
      }
    ]
  },
  {
    "id": "statics-elasticity",
    "title": "Statics and Elasticity",
    "description": "สมดุลของวัตถuแข็งและความยืดหยุ่น",
    "sections": [
      {
        "id": "equilibrium-conditions",
        "title": "Conditions for Equilibrium",
        "source": "Serway Physics for Scientists and Engineers, Ch 12, p.300–320",
        "concept": "สมดุลสถิต: (1) $\\sum\\vec F=0$ — ไม่มีการเร่งเชิงเส้น (2) $\\sum\\vec\\tau=0$ รอบจุดหมุนใดๆ — ไม่มีการเร่งเชิงมุม ทอร์ก $\\tau=rF\\sin\\theta$ เลือก pivot ที่มี unknown force มากเพื่อลดตัวแปร",
        "formula": "\\sum F_x=0,\\quad \\sum F_y=0,\\quad \\sum\\tau=0",
        "warning": "กำหนดทิศบวกของทอร์ก (เช่น ทวนเข็มนาฬิกา = บวก) ให้ชัดก่อนเขียนสมการ",
        "examples": [
          {
            "title": "ไม้กระดก — หาตำแหน่งสมดุล",
            "level": "Basic",
            "tip": "ทอร์กทวน = ทอร์กตาม",
            "problem": "เด็ก $30\\,kg$ นั่งห่าง pivot $2\\,m$ อีกด้านเด็ก $40\\,kg$ ต้องนั่งห่างเท่าไร",
            "steps": [
              "$30(9.8)(2)=40(9.8)x$",
              "$x=60/40=1.5\\,m$"
            ],
            "answer": "$x=1.5\\,m$"
          },
          {
            "title": "บันไดพิงกำแพง",
            "level": "Medium",
            "tip": "สมดุลทอร์ก + $f_s\\le\\mu_s N$",
            "problem": "บันไดมวล $m$ ยาว $L$ ทำมุม $\\theta$ กับพื้น $\\mu_s$ น้อยสุดที่ไม่ลื่น?",
            "steps": [
              "Pivot ที่พื้น: $N_2(L\\sin\\theta)=(mg)(L/2\\cos\\theta)$",
              "$N_2=mg/(2\\tan\\theta)$",
              "$\\mu_s\\ge 1/(2\\tan\\theta)$"
            ],
            "answer": "$\\mu_s\\ge 1/(2\\tan\\theta)$"
          }
        ],
        "practice": "คาน $6\\,m$ pivot กลาง วาง $100\\,N$ ที่ปลายซ้าย $1\\,m$ จาก pivot หา $F$ ที่ปลายขวา $2\\,m$",
        "derivation": "จาก $F=ma$ และ $\\tau=I\\alpha$ เมื่อ $a=0$ และ $\\alpha=0$ ได้เงื่อนไขสมดุล"
      },
      {
        "id": "elasticity",
        "title": "Stress, Strain, and Young's Modulus",
        "source": "Serway Physics for Scientists and Engineers, Ch 12, p.320–335",
        "concept": "Stress $\\sigma=F/A$ (Pa), strain $\\epsilon=\\Delta L/L_0$ กฎ Hooke: $\\sigma=Y\\epsilon$ โดย $Y$ คือ Young's modulus สปริง: $F=kx$ เป็นกรณีพิเศษของ elasticity",
        "formula": "\\sigma=\\frac{F}{A},\\quad \\epsilon=\\frac{\\Delta L}{L_0},\\quad Y=\\frac{\\sigma}{\\epsilon}",
        "warning": "ใช้ Hooke's law ได้เฉพาะ elastic region — เกิน yield point จะ deform ถาวร",
        "examples": [
          {
            "title": "ยืดเส้นเหล็ก",
            "level": "Basic",
            "tip": "ใช้ $\\Delta L=FL_0/(AY)$",
            "problem": "เส้นเหล็ก $L_0=2\\,m$, $A=1\\,mm^2$, $Y=2\\times10^{11}\\,Pa$ รับ $F=200\\,N$ หา $\\Delta L$",
            "steps": [
              "$A=10^{-6}\\,m^2$",
              "$\\Delta L=200(2)/(10^{-6})(2\\times10^{11})=2\\times10^{-6}\\,m$"
            ],
            "answer": "$\\Delta L=2\\,\\mu m$"
          },
          {
            "title": "เปรียบเทียบสปริงกับ wire",
            "level": "Medium",
            "tip": "effective $k=AY/L_0$",
            "problem": "wire เดียวกับข้อบน หา $k$ equivalent",
            "steps": [
              "$k=AY/L_0=(2\\times10^{11})(10^{-6})/2=10^5\\,N/m$"
            ],
            "answer": "$k=10^5\\,N/m$"
          }
        ],
        "practice": "ท่ออลูมิเนียม $L=1\\,m$, $A=0.5\\,cm^2$, $Y=7\\times10^{10}\\,Pa$ รับ $F=500\\,N$ หา $\\Delta L$"
      }
    ]
  }
]
};
