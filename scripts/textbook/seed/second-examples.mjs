/** Hand-written second worked examples for Phy2/Chem from-base sections */
import { ex } from "./helpers.mjs";

export const SECOND_EXAMPLES = {
  // ── Physics 2 ──────────────────────────────────────────────
  "physics2/coulomb": ex(
    "หาขนาดประจุจากแรง Coulomb",
    "Medium",
    "แรงระหว่างประจุเดียวกัน: $F=kq^2/r^2$ — แก้ $q$ แล้วตรวจหน่วย $C$",
    "ประจุสองตัวขนาดเท่ากัน $q$ ห่างกัน $0.3\\,m$ แรงระหว่างกัน $1\\,N$ หาค่า $q$",
    [
      "$F=k\\frac{q^2}{r^2} \\Rightarrow q=r\\sqrt{F/k}$",
      "$q=0.3\\sqrt{1/(8.99\\times10^9)}=0.3\\times3.33\\times10^{-5}$",
      "$q\\approx1.0\\times10^{-5}\\,C=10\\,\\mu C$ (ประจุเดียวกันผลักกัน)",
    ],
    "$q\\approx10\\,\\mu C$"
  ),

  "physics2/electric-field-def": ex(
    "สนามไฟฟ้าที่จุดกึ่งกลาง dipole",
    "Medium",
    "ที่จุดกึ่งกลาง สนามจาก $+q$ และ $-q$ ชี้ทิศเดียวกัน — บวกขนาด",
    "หาสนามไฟฟ้าที่จุดกึ่งกลางระหว่างประจุ $+2\\,\\mu C$ และ $-2\\,\\mu C$ ที่ห่างกัน $0.2\\,m$",
    [
      "ระยะจากแต่ละประจุถึงจุดกึ่งกลาง $r=0.1\\,m$",
      "$E_1=E_2=k|q|/r^2=8.99\\times10^9\\times2\\times10^{-6}/0.01$",
      "$E_1=E_2=1.80\\times10^6\\,N/C$ ทิศเดียวกัน",
      "$E_{total}=3.60\\times10^6\\,N/C$ จาก $+$ ไป $-$",
    ],
    "$E=3.60\\times10^6\\,N/C$"
  ),

  "physics2/gauss-law": ex(
    "สนามไฟฟ้าภายในตัวนำที่สมดุล",
    "Medium",
    "ใน electrostatic equilibrium ประจุส่วนเกินอยู่ที่ผิว — $q_{enc}=0$ ภายใน",
    "ใช้ Gauss's Law แสดงว่าสนามไฟฟ้าภายในตัวนำที่สมดุลเป็นศูนย์",
    [
      "เลือก Gaussian surface ใดๆ อยู่ภายในตัวนำ (ไม่ถึงผิว)",
      "ใน equilibrium ไม่มีประจุภายใน → $q_{enc}=0$",
      "$\\oint\\vec E\\cdot d\\vec A=q_{enc}/\\varepsilon_0=0$",
      "ดังนั้น $E=0$ ทุกจุดภายในตัวนำ",
    ],
    "$E=0$ ภายในตัวนำที่สมดุล"
  ),

  "physics2/electric-potential": ex(
    "งานในการเคลื่อนประจุในสนามศักย์",
    "Medium",
    "งาน $W=q\\Delta V$ — ประจุบวกเคลื่อนจาก $V$ ต่ำไปสูง ต้องใส่พลังงานจากภายนอก",
    "งานที่ต้องทำเพื่อเคลื่อนประจุ $+2\\,\\mu C$ จากจุด A ($V=100\\,V$) ไป B ($V=400\\,V$)",
    [
      "$W=q(V_B-V_A)=2\\times10^{-6}(400-100)$",
      "$W=2\\times10^{-6}\\times300=6.0\\times10^{-4}\\,J$",
      "$W=0.60\\,mJ$",
    ],
    "$W=0.60\\,mJ$"
  ),

  "physics2/capacitance-def": ex(
    "Capacitor ต่อ series",
    "Medium",
    "ต่อ series: ประจุ $Q$ เท่ากันทุกตัว แต่ $V$ แบ่งตาม $C$",
    "Capacitor $10\\,\\mu F$ และ $20\\,\\mu F$ ต่อ series กับ $12\\,V$ หา $C_{eq}$ และประจุ",
    [
      "$1/C_{eq}=1/10+1/20=3/20 \\Rightarrow C_{eq}=6.67\\,\\mu F$",
      "$Q=C_{eq}V=6.67\\times10^{-6}\\times12=80\\,\\mu C$",
      "$V_1=Q/C_1=80/10=8\\,V$, $V_2=4\\,V$ (ตรวจ: $8+4=12\\,V$ ✓)",
    ],
    "$C_{eq}=6.67\\,\\mu F$, $Q=80\\,\\mu C$"
  ),

  "physics2/ohm": ex(
    "หลอดไฟ — หา $R$ และ $I$",
    "Medium",
    "จาก $P=VI=V^2/R$ หา $R$ ก่อน แล้วใช้ $I=P/V$ ตรวจ",
    "หลอดไฟ $60\\,W$ ต่อกับ $220\\,V$ หาความต้านทานและกระแส",
    [
      "$R=V^2/P=220^2/60=806.7\\,\\Omega$",
      "$I=P/V=60/220=0.273\\,A$",
      "ตรวจ: $P=I^2R=(0.273)^2(806.7)\\approx60\\,W$ ✓",
    ],
    "$R\\approx807\\,\\Omega$, $I=0.273\\,A$"
  ),

  "physics2/kirchhoff": ex(
    "KCL — วงจร parallel",
    "Medium",
    "ที่ junction: กระแสรวมแยกเข้า branch ตาม $I=V/R$ ของแต่ละทาง",
    "แบตเตอรี่ $12\\,V$ ต่อ $R_1=6\\,\\Omega$ และ $R_2=3\\,\\Omega$ แบบ parallel หากระแสรวม",
    [
      "$I_1=V/R_1=12/6=2\\,A$, $I_2=12/3=4\\,A$",
      "KCL ที่ junction: $I_{total}=I_1+I_2=6\\,A$",
      "KVL: แรงดันทุก branch เท่ากัน $12\\,V$ ✓",
    ],
    "$I_{total}=6\\,A$"
  ),

  "physics2/rc-circuit": ex(
    "เปรียบเทียบ time constant",
    "Medium",
    "$\\tau=RC$ — คูณ $R$ กับ $C$ แล้วเปรียบเทียบหน่วยวินาที",
    "ถ้า $R=5\\,k\\Omega$, $C=200\\,\\mu F$ เปรียบเทียบ $\\tau$ กับ $R=10\\,k\\Omega$, $C=100\\,\\mu F$",
    [
      "$\\tau_1=5\\times10^3\\times200\\times10^{-6}=1.0\\,s$",
      "$\\tau_2=10\\times10^3\\times100\\times10^{-6}=1.0\\,s$",
      "$\\tau_1=\\tau_2$ — ผลิต $RC$ เท่ากัน แม้ $R,C$ ต่างกัน",
    ],
    "$\\tau=1.0\\,s$ ทั้งคู่"
  ),

  "physics2/magnetic-force": ex(
    "แรงบนสายไฟในสนามแม่เหล็ก",
    "Medium",
    "มุม $90°$ → $\\sin\\theta=1$ ใช้ $F=BIL$",
    "สายไฟยาว $0.5\\,m$ มีกระแส $3\\,A$ ในสนาม $B=0.8\\,T$ ตั้งฉากกัน หาแรง",
    [
      "$F=BIL\\sin\\theta=0.8\\times3\\times0.5\\times1$",
      "$F=1.2\\,N$",
      "ทิศตาม right-hand rule: $I\\times B$",
    ],
    "$F=1.2\\,N$"
  ),

  "physics2/ampere-law": ex(
    "สนามแม่เหล็กใน solenoid",
    "Medium",
    "$n=N/L$ คือจำนวนรอบต่อเมตร แล้ว $B=\\mu_0 nI$",
    "Solenoid 200 รอบ ยาว $0.5\\,m$ มีกระแส $2\\,A$ หาสนามแม่เหล็กภายใน",
    [
      "$n=N/L=200/0.5=400\\,\\text{turns/m}$",
      "$B=\\mu_0 nI=4\\pi\\times10^{-7}\\times400\\times2$",
      "$B=1.0\\times10^{-3}\\,T=1.0\\,mT$",
    ],
    "$B=1.0\\,mT$"
  ),

  "physics2/faraday": ex(
    "EMF สูงสุดจากขดลวดหมุน",
    "Medium",
    "Peak EMF: $\\mathcal{E}_{max}=NBA\\omega$ โดย $\\omega=2\\pi f$",
    "ขดลวด 1 รอบ หมุนใน $B=0.5\\,T$ อัตรา $60\\,rev/s$ พื้นที่ $0.01\\,m^2$ หา peak EMF",
    [
      "$\\omega=2\\pi(60)=377\\,rad/s$",
      "$\\mathcal{E}_{max}=NBA\\omega=0.5\\times0.01\\times377$",
      "$\\mathcal{E}_{max}=1.89\\,V$",
    ],
    "$\\mathcal{E}_{max}\\approx1.89\\,V$"
  ),

  "physics2/wave-basics": ex(
    "ความถี่จาก $v$ และ $\\lambda$",
    "Medium",
    "จัดรูป $v=f\\lambda$ เป็น $f=v/\\lambda$",
    "เสียงในห้องมีความยาวคลื่น $0.75\\,m$ และความเร็วเสียง $340\\,m/s$ จงหาความถี่",
    [
      "$f=v/\\lambda=340/0.75$",
      "$f=453\\,Hz$",
    ],
    "$f=453\\,Hz$"
  ),

  "physics2/sound-doppler": ex(
    "Doppler — แหล่งถอยห่างผู้ฟัง",
    "Medium",
    "แหล่งถอยห่าง ผู้ฟังนิ่ง: $f'=\\frac{v}{v+v_s}f$ (ใช้ $+$ ที่ $v_s$)",
    "รถพยาบาลวิ่งออกจากผู้สังเกต $20\\,m/s$ แหล่ง $700\\,Hz$ ($v_{sound}=340\\,m/s$) หาความถี่ที่ได้ยิน",
    [
      "$f'=\\frac{v}{v+v_s}f=\\frac{340}{340+20}\\times700$",
      "$f'=\\frac{340}{360}\\times700=661\\,Hz$",
      "ความถี่ต่ำลง (pitch ต่ำลง) เพราะแหล่งถอยห่าง",
    ],
    "$f'=661\\,Hz$"
  ),

  "physics2/em-waves": ex(
    "ความถี่แสงสีแดง",
    "Medium",
    "แปลง $650\\,nm$ เป็นเมตรก่อนแทน $c=f\\lambda$",
    "แสงสีแดงความยาวคลื่น $650\\,nm$ จงหาความถี่",
    [
      "$\\lambda=650\\times10^{-9}\\,m$",
      "$f=c/\\lambda=3.0\\times10^8/(650\\times10^{-9})$",
      "$f=4.62\\times10^{14}\\,Hz$",
    ],
    "$f=4.62\\times10^{14}\\,Hz$"
  ),

  "physics2/reflection-refraction": ex(
    "Total internal reflection",
    "Medium",
    "ถ้า $n_1\\sin\\theta_1>n_2$ จะ $\\sin\\theta_2>1$ → ไม่มีหักเห เกิด TIR",
    "แสงจากแก้ว $n=1.52$ ไปอากาศที่มุม $42°$ จงหามุมหักเห",
    [
      "$n_1\\sin\\theta_1=1.52\\sin42°=1.52\\times0.669=1.02$",
      "$\\sin\\theta_2=1.02>1$ — ไม่มีมุมหักเหที่เป็นไปได้",
      "เกิด total internal reflection — แสงสะท้อนกลับเข้าแก้ว",
    ],
    "Total internal reflection (ไม่มีหักเห)"
  ),

  "physics2/lenses-mirrors": ex(
    "กระจกเว้า — ภาพเสมือน",
    "Medium",
    "กระจกเว้า $f<0$ ใน convention Serway; วัตถุจริง $d_o>0$",
    "วัตถุอยู่ $15\\,cm$ หน้ากระจกเว้า $f=-10\\,cm$ จงหา $d_i$ และลักษณะภาพ",
    [
      "$1/d_i=1/f-1/d_o=1/(-10)-1/15=-1/10-1/15$",
      "$1/d_i=-5/30=-1/6 \\Rightarrow d_i=-6\\,cm$",
      "$M=-d_i/d_o=-(-6)/15=0.4$ — ภาพเสมือน ตรง ย่อ",
    ],
    "$d_i=-6\\,cm$ ภาพเสมือนย่อ 0.4 เท่า"
  ),

  "physics2/photoelectric": ex(
    "Photoelectric — $K_{max}$ จาก $\\lambda$",
    "Medium",
    "ใช้ $hf=hc/\\lambda$ แล้วลบ $\\phi$ — แปลงหน่วยให้ตรงกัน (eV หรือ J)",
    "แสง $400\\,nm$ กระทบโลหะ $\\phi=2.0\\,eV$ จงหาพลังงานจลน์สูงสุด",
    [
      "$hf=hc/\\lambda=1240\\,eV\\cdot nm/400\\,nm=3.10\\,eV$",
      "$K_{max}=hf-\\phi=3.10-2.0=1.10\\,eV$",
      "$K_{max}=1.76\\times10^{-19}\\,J$",
    ],
    "$K_{max}=1.10\\,eV$"
  ),

  "physics2/atomic-spectra": ex(
    "Hydrogen — $n=4\\to2$ (Balmer)",
    "Medium",
    "$\\Delta E=13.6(1/n_f^2-1/n_i^2)\\,eV$ แล้ว $E=hf$",
    "อิเล็กตรอนจาก $n=4$ ไป $n=2$ ในไฮโดรเจน จงหาพลังงานโฟตอน",
    [
      "$\\Delta E=13.6\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=13.6\\times\\frac{3}{16}$",
      "$\\Delta E=2.55\\,eV=4.08\\times10^{-19}\\,J$",
      "$\\lambda=hc/E\\approx486\\,nm$ (เส้น Balmer สีฟ้า-เขียว)",
    ],
    "$\\Delta E=2.55\\,eV$, $\\lambda\\approx486\\,nm$"
  ),

  // ── Chemistry ──────────────────────────────────────────────
  "chemistry/atomic-model": ex(
    "Balmer — $n=4\\to2$ หา $\\lambda$",
    "Medium",
    "$\\Delta E=hc/\\lambda$ หรือใช้ $1240/\\lambda(nm)=\\Delta E(eV)$",
    "หาความยาวคลื่นของโฟตอนที่ปล่อยจาก $n=4$ ไป $n=2$ ใน H (Balmer series)",
    [
      "$\\Delta E=13.6\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=2.55\\,eV$",
      "$\\lambda=1240/2.55=486\\,nm$",
      "อยู่ในช่วง visible (Balmer series)",
    ],
    "$\\lambda=486\\,nm$"
  ),

  "chemistry/orbitals": ex(
    "Quantum numbers ของ 2p",
    "Medium",
    "2p หมายถึง $n=2$, $l=1$ — $m_l$ มี 3 ค่า, แต่ละค่ามี $m_s=\\pm1/2$",
    "เขียน quantum numbers ที่เป็นไปได้ทั้งหมดสำหรับ electron ใน 2p orbital",
    [
      "$n=2$, $l=1$ (p orbital)",
      "$m_l=-1,0,+1$ และ $m_s=+1/2$ หรือ $-1/2$",
      "รวม 6 ชุด: $(2,1,-1,\\pm1/2)$, $(2,1,0,\\pm1/2)$, $(2,1,+1,\\pm1/2)$",
    ],
    "6 ชุด quantum numbers"
  ),

  "chemistry/electron-config": ex(
    "Cu — ข้อยกเว้น Aufbau",
    "Medium",
    "Cr/Cu promote half-filled/full d subshell — ย้าย 1 e⁻ จาก 4s ไป 3d",
    "เขียน electron configuration ของ Cu ($Z=29$) และอธิบายว่าทำไมไม่เป็น $[Ar]4s^23d^9$",
    [
      "ถ้าเติมตามลำดับ: $[Ar]4s^23d^9$",
      "แต่ $[Ar]4s^13d^{10}$ มี 3d เต็ม — เสถียรกว่า",
      "Cu: $[Ar]4s^13d^{10}$ (ข้อยกเว้น d-block)",
    ],
    "Cu = $[Ar]4s^13d^{10}$"
  ),

  "chemistry/periodic-trends": ex(
    "Ionization energy — หมู่ 17",
    "Medium",
    "IE ลดลงเมื่อลงหมู่ (รัศมีใหญ่ขึ้น, $e^-$ ถูกดึงน้อยลง)",
    "เรียง F, Cl, Br, I ตาม ionization energy (มากไปน้อย) และอธิบาย",
    [
      "ทุกธาตุอยู่หมู่ 17 (halogen)",
      "ลงหมู่: รัศมีเพิ่ม → IE ลด",
      "F มีรัศมีเล็กสุด ดึง $e^-$ แน่นที่สุด",
      "IE: F > Cl > Br > I",
    ],
    "F > Cl > Br > I"
  ),

  "chemistry/mole-concept": ex(
    "Mole และ percent composition",
    "Medium",
    "$n=m/M$ แล้ว $\\%X=(n_X\\times M_X/M_{total})\\times100$",
    "กลูโคส $C_6H_{12}O_6$ มวล $180\\,g$ มีกี่ mol? หา percent composition ของ C",
    [
      "$M=6(12)+12(1)+6(16)=180\\,g/mol$",
      "$n=180/180=1.0\\,mol$",
      "มวล C ใน 1 mol = $6\\times12=72\\,g$",
      "$\\%C=72/180\\times100=40.0\\%$",
    ],
    "$n=1.0\\,mol$, $\\%C=40.0\\%$"
  ),

  "chemistry/chemical-equations": ex(
    "Limiting reactant — Fe + S",
    "Medium",
    "เปรียบเทียบ mol ของ reactants กับ mole ratio จากสมการ",
    "Fe + S → FeS ถ้ามี Fe 56 g และ S 48 g หา limiting reactant และ theoretical yield ของ FeS",
    [
      "$n_{Fe}=56/56=1.0\\,mol$, $n_S=48/32=1.5\\,mol$",
      "สมการ 1:1 → Fe หมดก่อน (limiting)",
      "Theoretical yield FeS = $1.0\\times88=88\\,g$",
    ],
    "Fe limiting, yield FeS = 88 g"
  ),

  "chemistry/solutions": ex(
    "Molarity จากมวลและปริมาตร",
    "Medium",
    "$M=n/V$ — แปลง mL เป็น L ก่อนหาร",
    "NaOH 2 g ละลายในน้ำครบ $500\\,mL$ หา molarity (M NaOH = 40)",
    [
      "$n=2/40=0.050\\,mol$",
      "$V=0.500\\,L$",
      "$M=0.050/0.500=0.10\\,M$",
    ],
    "$M=0.10\\,M$"
  ),

  "chemistry/ionic-covalent": ex(
    "จำแนก bond type จาก EN",
    "Medium",
    "$\\Delta EN>1.7$ มัก ionic; $\\Delta EN<0.5$ nonpolar covalent; กลางๆ polar covalent",
    "จำแนก $H_2O$, MgO, $N_2$ ($EN$: H=2.1, O=3.5, Mg=1.2, N=3.0)",
    [
      "$H_2O$: $\\Delta EN=3.5-2.1=1.4$ → polar covalent",
      "MgO: $\\Delta EN=3.5-1.2=2.3$ → ionic",
      "$N_2$: $\\Delta EN=0$ → covalent (nonpolar)",
    ],
    "$H_2O$ covalent, MgO ionic, $N_2$ covalent"
  ),

  "chemistry/lewis-structures": ex(
    "Lewis structure ของ $CO_3^{2-}$",
    "Medium",
    "นับ valence e⁻ รวม charge; ใช้ formal charge เลือกโครงสร้าง resonance",
    "เขียน Lewis structure ของ $CO_3^{2-}$ และวาด resonance structures ทั้งหมด",
    [
      "Valence e⁻: C(4) + 3O(18) + 2 charge = 24 e⁻",
      "C เป็น central atom, สร้าง 3 C–O bonds",
      "มี 3 resonance structures — แต่ละ C=O double bond สลับตำแหน่ง",
      "Formal charge ของ C = 0 ในโครงสร้างที่ดีที่สุด",
    ],
    "3 resonance structures (trigonal planar)"
  ),

  "chemistry/vsepr": ex(
    "VSEPR — รูปร่างโมเลกุล",
    "Medium",
    "นับ electron domains รวม lone pairs — lone pair ทำให้ bond angle เล็กลง",
    "ทำนายรูปร่างของ $SF_4$, $XeF_2$, $PCl_5$",
    [
      "$SF_4$: 5 domains (4 bond + 1 LP) → seesaw",
      "$XeF_2$: 5 domains (2 bond + 3 LP) → linear",
      "$PCl_5$: 5 domains (5 bond, 0 LP) → trigonal bipyramidal",
    ],
    "seesaw, linear, trigonal bipyramidal"
  ),

  "chemistry/hybridization": ex(
    "Hybridization ของ N",
    "Medium",
    "hybrid orbitals = bonds + lone pairs ที่ central atom",
    "ระบุ hybridization ของ N ใน $NH_3$, $NO_3^-$, และ $N_2$",
    [
      "$NH_3$: 3 bonds + 1 LP = 4 domains → $sp^3$",
      "$NO_3^-$: 3 bonds, 0 LP on N = 3 domains → $sp^2$",
      "$N_2$: 1 $\\sigma$ + 2 $\\pi$ → $sp$ (linear)",
    ],
    "$sp^3$, $sp^2$, $sp$"
  ),

  "chemistry/heat-enthalpy": ex(
    "Hess's Law",
    "Medium",
    "$\\Delta H$ ของปฏิกิริยารวม = ผลรวม $\\Delta H$ ของขั้นย่อย",
    "ใช้ Hess's Law หา $\\Delta H$ ของ $C+O_2\\to CO_2$ จาก: (1) $C+\\frac12O_2\\to CO$, $\\Delta H_1=-110.5\\,kJ$ (2) $CO+\\frac12O_2\\to CO_2$, $\\Delta H_2=-283.0\\,kJ$",
    [
      "บวกสมการ: (1)+(2) ได้ $C+O_2\\to CO_2$",
      "$\\Delta H=\\Delta H_1+\\Delta H_2$",
      "$\\Delta H=-110.5+(-283.0)=-393.5\\,kJ/mol$",
    ],
    "$\\Delta H=-393.5\\,kJ/mol$"
  ),

  "chemistry/entropy": ex(
    "Sign ของ $\\Delta S$",
    "Medium",
    "ก๊าซมี $S$ สูงกว่ of liquid/solid — ดู $\\Delta n_{gas}$ ของปฏิกิริยา",
    "ทำนาย sign ของ $\\Delta S$ สำหรับ $N_2(g)+3H_2(g)\\to2NH_3(g)$",
    [
      "Reactants: 4 mol gas → Products: 2 mol gas",
      "$\\Delta n_{gas}=2-4=-2$ (ลดลง)",
      "ความ disorder ลด → $\\Delta S<0$",
    ],
    "$\\Delta S<0$"
  ),

  "chemistry/gibbs": ex(
    "$\\Delta G°$ จาก $K$",
    "Medium",
    "$\\Delta G°=-RT\\ln K$ — $K<1$ ทำให้ $\\Delta G°>0$",
    "ถ้า $K=1.0\\times10^{-5}$ ที่ $298\\,K$ หา $\\Delta G°$ ($R=8.314\\,J/mol\\cdot K$)",
    [
      "$\\Delta G°=-RT\\ln K=-(8.314)(298)\\ln(10^{-5})$",
      "$\\ln(10^{-5})=-11.51$",
      "$\\Delta G°=+28.5\\,kJ/mol$ (ปฏิกิริยาไม่ spontaneous ที่ standard conditions)",
    ],
    "$\\Delta G°=+28.5\\,kJ/mol$"
  ),

  "chemistry/equilibrium-constant": ex(
    "หา $[HI]$ จาก $K_c$",
    "Medium",
    "เขียน expression ของ $K$ แล้วแก้ — ตรวจว่า $K=[HI]^2/([H_2][I_2])$",
    "ถ้า $K_c=49$ สำหรับ $H_2+I_2\\rightleftharpoons2HI$ และ $[H_2]=[I_2]=0.1\\,M$ หา $[HI]$ ที่ equilibrium",
    [
      "$K_c=[HI]^2/([H_2][I_2])=49$",
      "$[HI]^2=49\\times0.1\\times0.1=0.49$",
      "$[HI]=\\sqrt{0.49}=0.70\\,M$",
    ],
    "$[HI]=0.70\\,M$"
  ),

  "chemistry/reaction-quotient": ex(
    "เปรียบเทียบ $Q$ กับ $K$",
    "Medium",
    "$Q>K$ → ไปทาง reactants; $Q<K$ → ไปทาง products",
    "สำหรับ $2NO_2\\rightleftharpoons N_2O_4$, $K_c=0.20$ ถ้า $[NO_2]=0.5$, $[N_2O_4]=0.2$ หาทิศทาง",
    [
      "$Q=[N_2O_4]/[NO_2]^2=0.2/(0.5)^2=0.2/0.25=0.80$",
      "$Q=0.80>K=0.20$",
      "ปฏิกิริยาไปทางซ้าย (สร้าง $NO_2$ มากขึ้น, ลด $N_2O_4$)",
    ],
    "$Q>K$ → ไปทาง reactants"
  ),

  "chemistry/le-chatelier": ex(
    "Haber process — ทำไมใช้ $P$ สูง",
    "Medium",
    "Le Chatelier ทำนายทิศทาง ไม่เปลี่ยนค่า $K$ — ดู $\\Delta n_{gas}$",
    "Haber process: ทำไมจึงใช้ความดันสูงและ $T$ ปานกลาง ($400-500°C$) แทนที่จะต่ำ",
    [
      "$N_2+3H_2\\rightleftharpoons2NH_3$ — $\\Delta n_{gas}=-2$",
      "ความดันสูง → ดันไปทาง products (mol gas น้อยลง)",
      "$T$ ต่ำ → $\\Delta G<0$ ดี แต่ $k$ ช้า; $T$ สูง → เร็ว แต่ $K$ ลด",
      "จึงใช้ $T$ ปานกลาง + catalyst + ความดันสูง (~200 atm)",
    ],
    "P สูง → yield สูง; T ปานกลาง → สมดุล rate กับ yield"
  ),

  "chemistry/acid-base": ex(
    "pH ของ NaOH",
    "Medium",
    "Strong base: $pOH=-\\log[OH^-]$ แล้ว $pH=14-pOH$",
    "NaOH ความเข้มข้น $0.05\\,M$ หา pH",
    [
      "$[OH^-]=0.05\\,M$",
      "$pOH=-\\log(0.05)=1.30$",
      "$pH=14-1.30=12.70$",
    ],
    "$pH=12.70$"
  ),
};
