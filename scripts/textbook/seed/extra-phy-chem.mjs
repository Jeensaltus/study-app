import { ex, sec } from "./helpers.mjs";

/** New syllabus sections for expanded GenPhy / GenChem coverage */
export default {
  // ── Physics 1 ──
  "physics1/potential-energy": sec(
    "พลังงานศักย์ $U$ ขึ้นกับตำแหน่ง: โน้มถ่วง $U=mgh$, สปริง $U=\\frac{1}{2}kx^2$ กฎการอนุรักษ์พลังงานกลไก: $K_i+U_i=K_f+U_f$ เมื่อไม่มีแรง non-conservative ทำงาน งานของแรง conservative $W=-\\Delta U$",
    "E_{mech}=K+U=\\text{const},\\quad W_{nc}=\\Delta E_{mech}",
    {
      warning: "เลือก reference point ของ $U$ ให้สะดวก — มักตั้ง $U=0$ ที่พื้นหรือจุดสมดุงสปริง",
      graph: "energy",
      examples: [
        ex(
          "ลูกบอลตกจากความสูง",
          "Basic",
          "ใช้ $mgh=\\frac{1}{2}mv^2$",
          "ลูกบอล $2\\,kg$ ตกจาก $5\\,m$ หา $v$ ก่อนกระทบพื้น ($g=9.8\\,m/s^2$)",
          ["$mgh=\\frac{1}{2}mv^2$ → $v=\\sqrt{2gh}=\\sqrt{2(9.8)(5)}=\\sqrt{98}$", "$v\\approx9.9\\,m/s$"],
          "$v\\approx9.9\\,m/s$"
        ),
        ex(
          "สปริง — ความเร็วที่จุดสมดุง",
          "Medium",
          "ที่ $x=0$: $U=0$, พลังงานทั้งหมดเป็น $K$",
          "สปริง $k=400\\,N/m$ ยืด $0.10\\,m$ แล้วปล่อย $m=0.50\\,kg$ หา $v$ ที่จุดสมดุง",
          [
            "$E=\\frac{1}{2}kA^2=\\frac{1}{2}(400)(0.01)=2\\,J$",
            "$\\frac{1}{2}mv^2=2$ → $v=\\sqrt{8}=2.83\\,m/s$",
          ],
          "$v\\approx2.8\\,m/s$"
        ),
      ],
      practice: "รถไฟราง $m=1000\\,kg$ ที่ $v=10\\,m/s$ ขึ้นเนิน $h=5\\,m$ หา $v$ บนยอดเนิน (ไม่มี friction)",
    }
  ),

  "physics1/power": sec(
    "กำลัง $P$ คืออัตราการทำงาน $P=dW/dt$ สำหรับแรงคงที่ $P=\\Fv\\cos\\theta$ หน่วย SI คือ Watt ($1\\,W=1\\,J/s$) กำลังเฉลี่ย $P_{avg}=\\Delta W/\\Delta t$",
    "P=\\frac{W}{t}=Fv\\cos\\theta",
    {
      warning: "มุม $\\theta$ คือมุมระหว่าง $\\vec F$ กับ $\\vec v$ — ถ้าแรงตั้งฉากกับการเคลื่อนที่ $P=0$",
      examples: [
        ex(
          "กำลังจากงานและเวลา",
          "Basic",
          "ใช้ $P=W/t$",
          "ยกของ $200\\,N$ ขึ้น $3\\,m$ ใน $6\\,s$ หา $P$",
          ["$W=200(3)=600\\,J$", "$P=600/6=100\\,W$"],
          "$P=100\\,W$"
        ),
        ex(
          "กำลังขณะเดินขึ้น",
          "Medium",
          "ใช้ $P=Fv$ เมื่อ $F\\parallel v$",
          "คน $70\\,kg$ เดินขึ้นบันได $4\\,m$ ใน $20\\,s$ (ความเร็วคงที่) หา $P$",
          [
            "$F=mg=70(9.8)=686\\,N$",
            "$v=4/20=0.20\\,m/s$",
            "$P=Fv=686(0.20)=137\\,W$",
          ],
          "$P\\approx140\\,W$"
        ),
      ],
      practice: "เครื่องยนต์ทำงาน $1.5\\,kJ$ ใน $0.50\\,s$ หา $P$",
    }
  ),

  "physics1/universal-gravitation": sec(
    "กฎแรงโน้มถ่วงสากล: $F=G\\frac{m_1m_2}{r^2}$ โดย $G=6.67\\times10^{-11}\\,N\\cdot m^2/kg^2$ แรงเป็น attractive ทำงานตามเส้นที่เชื่อม mass centers พลังงานศักย์โน้มถ่วง $U=-G\\frac{m_1m_2}{r}$ (ศูนย์ที่ $r\\to\\infty$)",
    "F=G\\frac{m_1m_2}{r^2},\\quad U=-G\\frac{m_1m_2}{r}",
    {
      warning: "ใช้ $r$ เป็นระยะระหว่างศูนย์มวล — สำหรับโลก-วัตถุใกล้พื้น ใช้ $F=mg$ ได้เมื่อ $R\\ll r_{Earth}$",
      examples: [
        ex(
          "แรงโน้มถ่วงระหว่างสอง mass",
          "Basic",
          "แทน $G,m_1,m_2,r$ ในสูตร",
          "mass $1000\\,kg$ และ $2000\\,kg$ ห่าง $0.50\\,m$ หา $F$",
          [
            "$F=6.67\\times10^{-11}\\frac{(1000)(2000)}{0.25}$",
            "$F=6.67\\times10^{-11}\\times8\\times10^6=5.34\\times10^{-4}\\,N$",
          ],
          "$F\\approx5.3\\times10^{-4}\\,N$"
        ),
        ex(
          "น้ำหนักบนผิวโลก",
          "Medium",
          "ใช้ $g=GM/R^2$",
          "พิสูจน์ว่า $g=9.8\\,m/s^2$ จาก $M_E=5.97\\times10^{24}\\,kg$, $R=6.37\\times10^6\\,m$",
          [
            "$g=GM/R^2=6.67\\times10^{-11}(5.97\\times10^{24})/(6.37\\times10^6)^2$",
            "$g\\approx9.8\\,m/s^2$",
          ],
          "$g\\approx9.8\\,m/s^2$"
        ),
      ],
      practice: "ดวงจันทร์ $M=7.35\\times10^{22}\\,kg$, $R=1.74\\times10^6\\,m$ หา $g$ บนผิวจันทร์",
    }
  ),

  "physics1/orbits-satellites": sec(
    "วงโคจรวงกลม: แรงโน้มถ่วงให้ centripetal acceleration $G\\frac{Mm}{r^2}=\\frac{mv^2}{r}$ ความเร็วโคจร $v=\\sqrt{GM/r}$ คาบ $T=2\\pi\\sqrt{r^3/(GM)}$ (Kepler's third law) ดาวเทียม geosynchronous: $T=24\\,h$",
    "v=\\sqrt{\\frac{GM}{r}},\\quad T=2\\pi\\sqrt{\\frac{r^3}{GM}}",
    {
      warning: "$r$ วัดจากศูนย์โลก ไม่ใช่จากพื้น — สำหรับ LEO ต้องบวก $R_{Earth}$",
      examples: [
        ex(
          "ความเร็วโคจร ISS",
          "Basic",
          "ใช้ $v=\\sqrt{GM/r}$",
          "สถานีอวกาศ $r=6.77\\times10^6\\,m$ ($h\\approx400\\,km$) หา $v$ ($GM=3.98\\times10^{14}$)",
          [
            "$v=\\sqrt{3.98\\times10^{14}/6.77\\times10^6}$",
            "$v=\\sqrt{5.88\\times10^7}\\approx7660\\,m/s$",
          ],
          "$v\\approx7.7\\,km/s$"
        ),
        ex(
          "คาบโคจร",
          "Medium",
          "ใช้ Kepler $T^2\\propto r^3$",
          "ดาวเทียม $r=4.22\\times10^7\\,m$ หา $T$ ($GM=3.98\\times10^{14}$)",
          [
            "$T=2\\pi\\sqrt{r^3/(GM)}=2\\pi\\sqrt{(4.22\\times10^7)^3/(3.98\\times10^{14})}$",
            "$T\\approx86400\\,s=24\\,h$ (geosynchronous)",
          ],
          "$T\\approx24\\,h$"
        ),
      ],
      practice: "หา $r$ ของดาวเทียมที่ $T=90\\,min$ รอบโลก",
    }
  ),

  "physics1/equilibrium-conditions": sec(
    "สมดุลสถิต: (1) $\\sum\\vec F=0$ — ไม่มีการเร่งเชิงเส้น (2) $\\sum\\vec\\tau=0$ รอบจุดหมุนใดๆ — ไม่มีการเร่งเชิงมุม ทอร์ก $\\tau=rF\\sin\\theta$ เลือก pivot ที่มี unknown force มากเพื่อลดตัวแปร",
    "\\sum F_x=0,\\quad \\sum F_y=0,\\quad \\sum\\tau=0",
    {
      derivation: "จาก $F=ma$ และ $\\tau=I\\alpha$ เมื่อ $a=0$ และ $\\alpha=0$ ได้เงื่อนไขสมดุล",
      warning: "กำหนดทิศบวกของทอร์ก (เช่น ทวนเข็มนาฬิกา = บวก) ให้ชัดก่อนเขียนสมการ",
      examples: [
        ex(
          "ไม้กระดก — หาตำแหน่งสมดุล",
          "Basic",
          "ทอร์กทวน = ทอร์กตาม",
          "เด็ก $30\\,kg$ นั่งห่าง pivot $2\\,m$ อีกด้านเด็ก $40\\,kg$ ต้องนั่งห่างเท่าไร",
          ["$30(9.8)(2)=40(9.8)x$", "$x=60/40=1.5\\,m$"],
          "$x=1.5\\,m$"
        ),
        ex(
          "บันไดพิงกำแพง",
          "Medium",
          "สมดุลทอร์ก + $f_s\\le\\mu_s N$",
          "บันไดมวล $m$ ยาว $L$ ทำมุม $\\theta$ กับพื้น $\\mu_s$ น้อยสุดที่ไม่ลื่น?",
          [
            "Pivot ที่พื้น: $N_2(L\\sin\\theta)=(mg)(L/2\\cos\\theta)$",
            "$N_2=mg/(2\\tan\\theta)$",
            "$\\mu_s\\ge 1/(2\\tan\\theta)$",
          ],
          "$\\mu_s\\ge 1/(2\\tan\\theta)$"
        ),
      ],
      practice: "คาน $6\\,m$ pivot กลาง วาง $100\\,N$ ที่ปลายซ้าย $1\\,m$ จาก pivot หา $F$ ที่ปลายขวา $2\\,m$",
    }
  ),

  "physics1/elasticity": sec(
    "Stress $\\sigma=F/A$ (Pa), strain $\\epsilon=\\Delta L/L_0$ กฎ Hooke: $\\sigma=Y\\epsilon$ โดย $Y$ คือ Young's modulus สปริง: $F=kx$ เป็นกรณีพิเศษของ elasticity",
    "\\sigma=\\frac{F}{A},\\quad \\epsilon=\\frac{\\Delta L}{L_0},\\quad Y=\\frac{\\sigma}{\\epsilon}",
    {
      warning: "ใช้ Hooke's law ได้เฉพาะ elastic region — เกิน yield point จะ deform ถาวร",
      examples: [
        ex(
          "ยืดเส้นเหล็ก",
          "Basic",
          "ใช้ $\\Delta L=FL_0/(AY)$",
          "เส้นเหล็ก $L_0=2\\,m$, $A=1\\,mm^2$, $Y=2\\times10^{11}\\,Pa$ รับ $F=200\\,N$ หา $\\Delta L$",
          [
            "$A=10^{-6}\\,m^2$",
            "$\\Delta L=200(2)/(10^{-6})(2\\times10^{11})=2\\times10^{-6}\\,m$",
          ],
          "$\\Delta L=2\\,\\mu m$"
        ),
        ex(
          "เปรียบเทียบสปริงกับ wire",
          "Medium",
          "effective $k=AY/L_0$",
          "wire เดียวกับข้อบน หา $k$ equivalent",
          [
            "$k=AY/L_0=(2\\times10^{11})(10^{-6})/2=10^5\\,N/m$",
          ],
          "$k=10^5\\,N/m$"
        ),
      ],
      practice: "ท่ออลูมิเนียม $L=1\\,m$, $A=0.5\\,cm^2$, $Y=7\\times10^{10}\\,Pa$ รับ $F=500\\,N$ หา $\\Delta L$",
    }
  ),

  // ── Physics 2 ──
  "physics2/magnetic-materials": sec(
    "วัสดุแม่เหล็ก: paramagnetic ($\\chi>0$ เล็ก), diamagnetic ($\\chi<0$), ferromagnetic (domain alignment, hysteresis) ความหนาแน่น flux $B=\\mu_0(H+M)=\\mu H$ โดย $\\mu=\\mu_0(1+\\chi)$",
    "B=\\mu_0(H+M),\\quad \\chi=\\frac{M}{H}",
    {
      warning: "Ferromagnet มี hysteresis loop — $B$ ขึ้นกับประวัติ magnetization ไม่ใช่แค่ $H$ ปัจจุบัน",
      examples: [
        ex(
          "หา B ใน paramagnet",
          "Basic",
          "ใช้ $B=\\mu_0(1+\\chi)H$",
          "$H=1000\\,A/m$, $\\chi=2\\times10^{-5}$ หา $B$",
          [
            "$B=4\\pi\\times10^{-7}(1+2\\times10^{-5})(1000)$",
            "$B\\approx1.26\\times10^{-3}\\,T$",
          ],
          "$B\\approx1.26\\,mT$"
        ),
        ex(
          "เปรียบเทียบ dia vs para",
          "Medium",
          "diamagnetic หัก flux เล็กน้อย",
          "ทำไม bismuth ($\\chi\\approx-1.6\\times10^{-4}$) ถูก repel จาก magnetic field?",
          [
            "Diamagnet สร้าง $M$ ตรงข้าม $H$",
            "ทำให้ $B$ ภายในลดลง → ถูกผลักออกจาก field แรง",
          ],
          "Induced $M$ ตรงข้าม $H$ → repulsion"
        ),
      ],
      practice: "Iron ($\\mu_r=5000$) ใน $H=200\\,A/m$ หา $B$",
    }
  ),

  "physics2/interference": sec(
    "การแทรกสอด: superposition ของคลื่น เงื่อนไข constructive $ \\Delta path=m\\lambda$, destructive $(m+\\frac{1}{2})\\lambda$ Young's double slit: $y_{bright}=\\frac{m\\lambda L}{d}$ บนจอระยะ $L$",
    "\\Delta path=m\\lambda\\text{ (bright)},\\quad y=\\frac{m\\lambda L}{d}",
    {
      warning: "ใช้ wavelength ในสื่อเดียวกัน — ใน double slit มักเป็นสุญญากาศ/อากาศ",
      examples: [
        ex(
          "Young's double slit — ตำแหน่ง fringe",
          "Basic",
          "ใช้ $y=m\\lambda L/d$",
          "แสง $\\lambda=600\\,nm$, $d=0.20\\,mm$, $L=2.0\\,m$ หาระยะ fringe แรก ($m=1$)",
          [
            "$y=(600\\times10^{-9})(2.0)/(0.20\\times10^{-3})$",
            "$y=6.0\\times10^{-3}\\,m=6.0\\,mm$",
          ],
          "$y=6.0\\,mm$"
        ),
        ex(
          "Thin film interference",
          "Medium",
          "phase change ที่ boundary กำหนด constructive/destructive",
          "ฟilm น้ำมัน $n=1.50$ บนน้ำ $n=1.33$ ความหนา $t=200\\,nm$ แสง $\\lambda=600\\,nm$ ใน air สะท้อน constructive หรือไม่",
          [
            "reflection ที่ top (air-oil): มี phase shift $180°$",
            "reflection ที่ bottom (oil-water): ไม่ shift (n ขึ้น)",
            "$2nt=600\\,nm$ → destructive ใน air (bright ใน transmission)",
          ],
          "Reflected light: destructive (dark fringe)"
        ),
      ],
      practice: "Slit separation $0.15\\,mm$, $\\lambda=500\\,nm$, $L=1.5\\,m$ หา spacing ระหว่าง bright fringes",
    }
  ),

  "physics2/diffraction": sec(
    "การแทรกแสง: single slit minima $a\\sin\\theta=m\\lambda$ ($m\\neq0$) diffraction grating $d\\sin\\theta=m\\lambda$ ให้ maxima แหลมกว่า double slit ความละเอียดเชิงมุม $\\theta\\approx\\lambda/a$",
    "a\\sin\\theta=m\\lambda,\\quad d\\sin\\theta=m\\lambda",
    {
      warning: "Single slit central maximum กว้างเป็นสองเท่า secondary max — อย่าใช้ $m\\lambda$ ที่ center",
      examples: [
        ex(
          "Single slit — มุม first minimum",
          "Basic",
          "ใช้ $a\\sin\\theta=\\lambda$",
          "slit width $a=0.10\\,mm$, $\\lambda=500\\,nm$ หา $\\theta$ ของ first minimum",
          [
            "$\\sin\\theta=\\lambda/a=500\\times10^{-9}/10^{-4}=0.005$",
            "$\\theta\\approx0.005\\,rad\\approx0.29°$",
          ],
          "$\\theta\\approx0.29°$"
        ),
        ex(
          "Diffraction grating — หลาย order",
          "Medium",
          "ใช้ $d\\sin\\theta=m\\lambda$",
          "grating 600 lines/mm, $\\lambda=589\\,nm$ หา $\\theta$ ของ $m=1$",
          [
            "$d=1/600\\,mm=1.67\\,\\mu m$",
            "$\\sin\\theta=589\\times10^{-9}/1.67\\times10^{-6}=0.353$",
            "$\\theta\\approx20.7°$",
          ],
          "$\\theta\\approx21°$"
        ),
      ],
      practice: "Two stars แยก $0.5\\,arcsec$ ใช้ telescope $D=2\\,m$, $\\lambda=550\\,nm$ แยกได้หรือไม่ (Rayleigh: $\\theta\\approx1.22\\lambda/D$)",
    }
  ),

  // ── Chemistry ──
  "chemistry/precipitation": sec(
    "ปฏิกิริยาตกตะกอน: ไอons ในน้ำรวมกันแล้วสร้าง solid ที่ $K_{sp}$ ต่ำ ใช้ solubility rules ทำนาย precipitate (เช่น $AgCl$, $BaSO_4$) ionic equation แสดงเฉพาะ species ที่เปลี่ยน",
    "\\text{solubility rules + }K_{sp}",
    {
      warning: "ตรวจ charge balance ใน ionic equation — และ $K_{sp}$ ใช้กับ saturated solution ใน equilibrium",
      examples: [
        ex(
          "ทำนาย precipitate",
          "Basic",
          "ดู solubility rules",
          "ผสม $AgNO_3$ กับ $NaCl$ สารใดตกตะกอน",
          [
            "$Ag^++Cl^-\\to AgCl(s)$",
            "$AgCl$ ไม่ soluble → ตกตะกอนสีขาว",
            "$Na^+$ และ $NO_3^-$ อยู่ใน solution (spectator)",
          ],
          "$AgCl(s)$ ตกตะกอน"
        ),
        ex(
          "เขียน net ionic equation",
          "Medium",
          "ตัด spectator ions",
          "เขียน net ionic ของ $BaCl_2+Na_2SO_4$",
          [
            "Full: $Ba^{2+}+2Cl^-+2Na^++SO_4^{2-}\\to BaSO_4(s)+2Na^++2Cl^-$",
            "Net: $Ba^{2+}+SO_4^{2-}\\to BaSO_4(s)$",
          ],
          "$Ba^{2+}+SO_4^{2-}\\to BaSO_4(s)$"
        ),
      ],
      practice: "ผสม $Pb(NO_3)_2$ กับ $KI$ เขียน net ionic และระบุสี precipitate ($PbI_2$)",
    }
  ),

  "chemistry/oxidation-reduction": sec(
    "Redox: oxidation คือเพิ่ม oxidation number (หรือสูญเสีย e⁻), reduction คือลด ON (ได้ e⁻) สมดุล half-reaction ด้วย e⁻ และ $H_2O$, $H^+$, $OH^-$ ตามสภาพ acidic/basic",
    "\\text{ON}_{product}-\\text{ON}_{reactant}=\\Delta n_e",
    {
      warning: "ใน basic solution ใช้ $OH^-$ แทน $H^+$ — บаланซ charge ก่อน แล้วค่อยบаланซ atom",
      examples: [
        ex(
          "หา oxidation number",
          "Basic",
          "ใช้กฎ: O มัก -2, H มัก +1, รวม ON = charge",
          "หา ON ของ S ใน $H_2SO_4$",
          [
            "$2(+1)+ON+4(-2)=0$",
            "$ON=+6$",
          ],
          "$ON(S)=+6$"
        ),
        ex(
          "จำแนน oxidizing/reducing agent",
          "Medium",
          "species ที่ถูก oxidize = reducing agent",
          "ใน $Zn+Cu^{2+}\\to Zn^{2+}+Cu$ ใครเป็น reducing agent",
          [
            "$Zn$ เปลี่ยน $0\\to+2$ (oxidized)",
            "$Zn$ ให้ e⁻ → reducing agent",
            "$Cu^{2+}$ รับ e⁻ → oxidizing agent",
          ],
          "$Zn$ เป็น reducing agent"
        ),
      ],
      practice: "Balance ใน acidic: $MnO_4^-+Fe^{2+}\\to Mn^{2+}+Fe^{3+}$",
    }
  ),

  "chemistry/ph-scale": sec(
    "pH นิยาม $pH=-\\log[H^+]$, $pOH=-\\log[OH^-]$ ที่ $25°C$: $pH+pOH=14$ strong acid/base: $[H^+]=C_{acid}$ (หรือ $[OH^-]=C_{base}$) หลัง dilute ใช้ $M_1V_1=M_2V_2$",
    "pH=-\\log[H^+],\\quad pH+pOH=14",
    {
      warning: "log ใช้ concentration ใน M — strong acid 0.010 M → $pH=2$ ไม่ใช่ 0.01",
      examples: [
        ex(
          "pH ของ strong acid",
          "Basic",
          "strong acid 100% ionize",
          "$HCl$ 0.0050 M หา pH",
          ["$[H^+]=0.0050$", "$pH=-\\log(0.0050)=2.30$"],
          "$pH=2.30$"
        ),
        ex(
          "pH ของ weak acid",
          "Medium",
          "ใช้ $K_a$ และ ICE table",
          "$CH_3COOH$ 0.10 M, $K_a=1.8\\times10^{-5}$ หา pH",
          [
            "$K_a=x^2/(0.10-x)\\approx x^2/0.10$",
            "$x=\\sqrt{1.8\\times10^{-6}}=1.34\\times10^{-3}$",
            "$pH=-\\log(1.34\\times10^{-3})=2.87$",
          ],
          "$pH\\approx2.87$"
        ),
      ],
      practice: "NaOH 0.020 M หา pH",
    }
  ),

  "chemistry/buffer-solutions": sec(
    "บัฟเฟอร์: กรดอ่อน + เกลือ (conjugate base) หรือเบสอ่อน + เกลือ Henderson-Hasselbalch: $pH=pK_a+\\log([A^-]/[HA])$ ต resist การเปลี่ยน pH เมื่อเติม acid/base เล็กน้อย",
    "pH=pK_a+\\log\\frac{[A^-]}{[HA]}",
    {
      derivation: "จาก $K_a=[H^+][A^-]/[HA]$ จัด log ได้ Henderson-Hasselbalch",
      warning: "อย่าใช้สูตรบัฟเฟอร์กับ strong acid + strong base — ต้องเป็น weak/conjugate pair",
      examples: [
        ex(
          "pH บัฟเฟอร์ equimolar",
          "Basic",
          "เมื่อ $[A^-]=[HA]$ → $pH=pK_a$",
          "$CH_3COOH$ 0.10 M + $CH_3COONa$ 0.10 M ($pK_a=4.74$) หา pH",
          [
            "$[A^-]/[HA]=1$ → $\\log(1)=0$",
            "$pH=pK_a=4.74$",
          ],
          "$pH=4.74$"
        ),
        ex(
          "เติม strong base ลงบัฟเฟอร์",
          "Medium",
          "OH⁻ ทำปฏิกิริยากับ HA → ลด [HA] เพิ่ม [A⁻]",
          "บัฟเฟอร์ 1 L (0.10 M HA, 0.10 M A⁻) เติม NaOH 0.020 mol หา pH ใหม่ ($pK_a=4.74$)",
          [
            "$[HA]=0.08$, $[A^-]=0.12$",
            "$pH=4.74+\\log(0.12/0.08)=4.74+0.176=4.92$",
          ],
          "$pH\\approx4.92$"
        ),
      ],
      practice: "บัฟเฟอร์ $NH_3$/$NH_4^+$ ($pK_a=9.25$) $[base]=0.20$, $[acid]=0.10$ หา pH",
    }
  ),
};
