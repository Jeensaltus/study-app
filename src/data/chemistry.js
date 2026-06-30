export const chemistry = {
  id: "chemistry",
  code: "2302111",
  title: "General Chemistry",
  thaiTitle: "หลักมูลเคมีทั่วไป",
  accent: "#1D9E75",
  term: "Term 2",
  description: "โครงสร้างอะตอม พันธะเคมี สโตอิเคียมเมทรี เทอร์โมเคมี และสมดุลเคมี",
  chapters: [
    {
      id: "atomic-structure",
      title: "Atomic Structure",
      description: "แบบจำลองอะตอม อิเล็กตรอน ออร์บิทัล และแนวโน้มตารางธาตุ",
      sections: [
        {
          id: "atomic-model",
          title: "Models of the Atom",
          source: "Chemistry: The Central Science, Ch 6.1-6.3, p.219",
          concept:
            "แบบจำลองของ Bohr อธิบายสเปกตรัมของ H: อิเล็กตรอนอยู่ในออร์บิทัลพลังงานคงที่ $E_n=-\\frac{2.18\\times10^{-18}}{n^2}\\,J$ เมื่ออิเล็กตรอนกระโดดจากระดับสูงลงต่ำ จะปล่อยโฟตอนที่มีพลังงาน $\\Delta E=hf=hc/\\lambda$ สมการ de Broglie: $\\lambda=h/mv$ (คลื่นของอนุภาค)",
          formula: "E_n=-\\frac{2.18\\times10^{-18}}{n^2}\\,J, \\quad \\Delta E=hf",
          example: {
            title: "Bohr Model — photon $n=3→1$",
            problem: "หาพลังงานโฟตอนที่ปล่อยออกมาเมื่ออิเล็กตรอนใน H กระโดดจาก $n=3$ ไป $n=1$",
            steps: [
              "$E_1=-2.18\\times10^{-18}\\,J$, $E_3=-2.18\\times10^{-18}/9=-2.42\\times10^{-19}\\,J$",
              "$\\Delta E=E_1-E_3=-2.18\\times10^{-18}-(-2.42\\times10^{-19})$",
              "$=-1.94\\times10^{-18}\\,J$ (ลบ = ปล่อยพลังงาน)",
              "$|\\Delta E|=1.94\\times10^{-18}\\,J$ (UV region ใน Lyman series)",
            ],
          },
          practice: "หาความยาวคลื่นของโฟตอนที่ปล่อยจาก $n=4$ ไป $n=2$ ใน H (Balmer series)",
        },
        {
          id: "orbitals",
          title: "Quantum Numbers and Orbitals",
          source: "Chemistry: The Central Science, Ch 6.5-6.6, p.233",
          concept:
            "4 quantum numbers: $n$ (principal, 1,2,3,...), $l$ (angular momentum, 0 ถึง $n-1$: s,p,d,f), $m_l$ (magnetic, $-l$ ถึง $+l$), $m_s$ (spin, $+1/2$ หรือ $-1/2$) Pauli exclusion: ในออร์บิทัลหนึ่ง มีได้ไม่เกิน 2 อิเล็กตรอน และต้อง spin ตรงข้าม จำนวนออร์บิทัล: s=1, p=3, d=5, f=7",
          formula: "n=1,2,3,\\ldots; \\quad l=0,1,\\ldots,n-1; \\quad m_l=-l,\\ldots,+l",
          example: {
            title: "จำนวน Orbital ใน $n=3$",
            problem: "ระดับพลังงาน $n=3$ มีกี่ออร์บิทัล และรับอิเล็กตรอนได้กี่ตัว",
            steps: [
              "$n=3$: $l$ เป็น 0, 1, 2 (3s, 3p, 3d)",
              "ออร์บิทัล: 3s=1, 3p=3, 3d=5 → รวม 9 ออร์บิทัล",
              "อิเล็กตรอน: $9\\times2=18$ ตัว",
            ],
          },
          practice: "เขียน quantum numbers ที่เป็นไปได้ทั้งหมดสำหรับ electron ใน 2p orbital",
        },
        {
          id: "electron-config",
          title: "Electron Configuration",
          source: "Chemistry: The Central Science, Ch 6.8, p.243",
          concept:
            "การจัดเรียงอิเล็กตรอนตามหลัก Aufbau (เติมจากพลังงานต่ำไปสูง): $1s,2s,2p,3s,3p,4s,3d,4p,\\ldots$ Hund's Rule: อิเล็กตรอนในออร์บิทัลเดียวกันจะอยู่คนละออร์บิทัลก่อน และ spin เดียวกัน Valence electrons คืออิเล็กตรอนในระดับ $n$ สูงสุด กำหนดสมบัติเคมี",
          formula: "\\text{Aufbau: }1s^22s^22p^63s^23p^64s^23d^{10}4p^6\\ldots",
          example: {
            title: "Electron Config ของ Fe และ Fe³⁺",
            problem: "เขียน electron configuration ของ Fe ($Z=26$) และ $Fe^{3+}$",
            steps: [
              "Fe: $1s^22s^22p^63s^23p^64s^23d^6$",
              "ย่อ: $[Ar]4s^23d^6$",
              "$Fe^{3+}$: เอาอิเล็กตรอนออก 3 ตัว (จาก 4s ก่อน แล้ว 3d)",
              "$[Ar]3d^5$ (half-filled d shell)",
            ],
          },
          practice: "เขียน electron configuration ของ Cu ($Z=29$) และอธิบายว่าทำไมไม่เป็น $[Ar]4s^23d^9$",
        },
        {
          id: "periodic-trends",
          title: "Periodic Trends",
          source: "Chemistry: The Central Science, Ch 7.2-7.4, p.266",
          concept:
            "Atomic radius: ลดจากซ้ายไปขวาในคาบ (เพราะ $Z_{eff}$ เพิ่ม), เพิ่มจากบนลงล่างในหมู่ Ionization energy: แนวโน้มตรงข้ามกับ atomic radius Electron affinity: ส่วนใหญ่เป็นลบ (ปล่อยพลังงานเมื่อรับ $e^-$) ยกเว้นหมู่ 8A Electronegativity: F มีค่าสูงสุด (4.0)",
          formula: "Z_{eff}=Z-S \\quad (S=\\text{shielding constant})",
          example: {
            title: "เรียง Atomic Radius — Na, Mg, Al, Si",
            problem: "เรียง Na, Mg, Al, Si จากรัศมีมากไปน้อย และอธิบาย",
            steps: [
              "ทุกธาตุอยู่คาบ 3 เดียวกัน",
              "จากซ้ายไปขวา $Z_{eff}$ เพิ่ม ดึง $e^-$ ให้แน่นขึ้น",
              "รัศมี: Na > Mg > Al > Si",
            ],
          },
          practice: "เรียง F, Cl, Br, I ตาม ionization energy (มากไปน้อย) และอธิบาย",
        },
      ],
    },
    {
      id: "stoichiometry",
      title: "Stoichiometry",
      description: "Mole, molar mass, สมการเคมี และ limiting reactants",
      sections: [
        {
          id: "mole-concept",
          title: "The Mole Concept",
          source: "Chemistry: The Central Science, Ch 3.4, p.101",
          concept:
            "1 mole = $6.022\\times10^{23}$ particles (Avogadro's number $N_A$) Molar mass = มวลของ 1 mole ในหน่วย g/mol (เท่ากับ atomic/molecular mass ใน amu) การแปลง: $n=m/M$, จำนวนอนุภาค $=n\\times N_A$ Percent composition: $\\%X=\\frac{\\text{mass of X in formula}}{\\text{molar mass}}\\times100$",
          formula: "n=\\frac{m}{M}, \\quad N=n\\times N_A",
          example: {
            title: "Mole — มวล → mol → โมเลกุล",
            problem: "น้ำ $H_2O$ มวล $36\\,g$ มีกี่ mol และกี่โมเลกุล",
            steps: [
              "$M(H_2O)=2(1)+16=18\\,g/mol$",
              "$n=m/M=36/18=2\\,mol$",
              "จำนวนโมเลกุล $=2\\times6.022\\times10^{23}=1.204\\times10^{24}$ molecules",
            ],
          },
          practice: "กลูโคส $C_6H_{12}O_6$ มวล $180\\,g$ มีกี่ mol? หา percent composition ของ C",
        },
        {
          id: "chemical-equations",
          title: "Chemical Equations and Stoichiometry",
          source: "Chemistry: The Central Science, Ch 3.6-3.7, p.109",
          concept:
            "สมการเคมีดุลต้องมี atom balance และ charge balance Mole ratio จากสัมประสิทธิ์ในสมการใช้แปลงระหว่างสารต่างๆ Limiting reactant คือสารที่หมดก่อนและกำหนดปริมาณ product สูงสุด ผลได้ทางทฤษฎี (theoretical yield) คำนวณจาก limiting reactant Percent yield = (actual/theoretical) × 100",
          formula: "\\%\\text{yield}=\\frac{\\text{actual yield}}{\\text{theoretical yield}}\\times100",
          example: {
            title: "Limiting Reactant — N₂ + H₂ → NH₃",
            problem: "$N_2+3H_2\\to2NH_3$ ถ้ามี $N_2$ 28 g และ $H_2$ 12 g อะไรเป็น limiting reactant และ $NH_3$ เกิดขึ้นกี่กรัม",
            steps: [
              "$n(N_2)=28/28=1\\,mol$, $n(H_2)=12/2=6\\,mol$",
              "ต้องใช้อัตราส่วน $N_2:H_2=1:3$; มี $H_2$ 6 mol ต้องใช้ $N_2$ 2 mol",
              "แต่มี $N_2$ แค่ 1 mol → $N_2$ เป็น limiting reactant",
              "$n(NH_3)=2\\times n(N_2)=2\\,mol$, $m=2\\times17=34\\,g$",
            ],
          },
          practice: "Fe + S → FeS ถ้ามี Fe 56 g และ S 48 g หา limiting reactant และ theoretical yield ของ FeS",
        },
        {
          id: "solutions",
          title: "Solution Concentration",
          source: "Chemistry: The Central Science, Ch 4.5, p.149",
          concept:
            "Molarity $M=n_{solute}/V_{solution}$ (mol/L) ใช้บ่อยที่สุดในห้องแล็บ Dilution: $M_1V_1=M_2V_2$ (moles ของ solute คงที่เมื่อเจือจาง) Mass percent: $\\%(w/w)=\\frac{m_{solute}}{m_{solution}}\\times100$ Molality $m=n_{solute}/kg_{solvent}$ (ไม่ขึ้นกับอุณหภูมิ)",
          formula: "M=\\frac{n}{V}, \\quad M_1V_1=M_2V_2",
          example: {
            title: "เตรียม $H_2SO_4$ 0.5 M จาก stock",
            problem: "เตรียม $H_2SO_4$ 0.5 M จาก stock $18\\,M$ ปริมาตร $250\\,mL$ ต้องใช้ stock กี่ mL",
            steps: [
              "$M_1V_1=M_2V_2$",
              "$18V_1=0.5\\times250$",
              "$V_1=125/18\\approx6.94\\,mL$",
              "ดูด $H_2SO_4$ 6.94 mL แล้วเติมน้ำจนครบ 250 mL",
            ],
          },
          practice: "NaOH 2 g ละลายในน้ำครบ $500\\,mL$ หา molarity (M NaOH = 40)",
        },
      ],
    },
    {
      id: "bonding",
      title: "Chemical Bonding",
      description: "พันธะไอออนิก โควาเลนต์ VSEPR และ orbital hybridization",
      sections: [
        {
          id: "ionic-covalent",
          title: "Ionic and Covalent Bonds",
          source: "Chemistry: The Central Science, Ch 8.1-8.3, p.296",
          concept:
            "พันธะไอออนิก: ถ่ายโอน $e^-$ ระหว่างโลหะและอโลหะ → ไอออนบวก/ลบ ยึดกันด้วยแรง electrostatic พันธะโควาเลนต์: ใช้คู่อิเล็กตรอนร่วมกัน ถ้า $\\Delta EN>1.7$ → ionic; $0.5-1.7$ → polar covalent; $<0.5$ → nonpolar covalent พลังงานพันธะ: พลังงานที่ต้องใช้ในการทำลาย 1 mol ของพันธะ",
          formula: "\\Delta EN>1.7\\to\\text{ionic},\\quad \\Delta EN<0.5\\to\\text{nonpolar}",
          example: {
            title: "ประเภทพันธะ — HCl, NaCl, Cl₂",
            problem: "จำแนก HCl, NaCl, $Cl_2$ ว่าเป็นพันธะชนิดใด ($EN$: H=2.1, Cl=3.0, Na=0.9)",
            steps: [
              "HCl: $\\Delta EN=3.0-2.1=0.9$ → polar covalent",
              "NaCl: $\\Delta EN=3.0-0.9=2.1$ → ionic",
              "$Cl_2$: $\\Delta EN=0$ → nonpolar covalent",
            ],
          },
          practice: "จำแนก $H_2O$, MgO, $N_2$ ($EN$: O=3.5, Mg=1.2, N=3.0)",
        },
        {
          id: "lewis-structures",
          title: "Lewis Structures",
          source: "Chemistry: The Central Science, Ch 8.5-8.7, p.307",
          concept:
            "ขั้นตอนเขียน Lewis structure: (1) นับ valence $e^-$ ทั้งหมด (2) เชื่อม atoms ด้วยพันธะเดี่ยว (3) เติม octet ให้ธาตุรอบนอก (4) เติมที่ธาตุกลาง (5) ถ้าไม่ครบ octet ทำพันธะคู่หรือสาม Formal charge: $FC=V-(N_e+\\frac12B_e)$ โครงสร้างที่ดีมี FC ใกล้ศูนย์",
          formula: "FC=V-N_e-\\frac{1}{2}B_e",
          example: {
            title: "Lewis Structure ของ SO₂",
            problem: "เขียน Lewis structure ของ $SO_2$ และหา formal charge",
            steps: [
              "Valence $e^-$: S=6, O=6 รวม $6+6+6=18$",
              "โครงสร้าง: S เป็นตัวกลาง เชื่อมกับ O สองตัว",
              "Lewis: O=S-O (พันธะคู่+เดี่ยว+lone pairs)",
              "FC บน S: $6-2-\\frac12(6)=1$ (ยังมี resonance structures)",
            ],
          },
          practice: "เขียน Lewis structure ของ $CO_3^{2-}$ และวาด resonance structures ทั้งหมด",
        },
        {
          id: "vsepr",
          title: "VSEPR Theory and Molecular Geometry",
          source: "Chemistry: The Central Science, Ch 9.2, p.348",
          concept:
            "VSEPR: คู่ $e^-$ รอบอะตอมกลางผลักกันให้มุมพันธะกว้างสุด แรงผลัก: lone pair–lone pair > lone pair–bond pair > bond pair–bond pair รูปร่าง: AX2 (linear), AX3 (trigonal planar), AX4 (tetrahedral), AX2E2 (bent), AX3E (trigonal pyramidal), AX5 (trigonal bipyramidal), AX6 (octahedral)",
          formula: "AX_nE_m: n = \\text{bonds}, m = \\text{lone pairs}",
          example: {
            title: "VSEPR — รูปร่าง H₂O, NH₃, CH₄",
            problem: "ทำนายรูปร่างและมุมพันธะของ $H_2O$, $NH_3$, $CH_4$",
            steps: [
              "$H_2O$: AX2E2 (2 bonds + 2 lone pairs) → bent, มุม $\\approx104.5°$",
              "$NH_3$: AX3E (3 bonds + 1 lone pair) → trigonal pyramidal, $\\approx107°$",
              "$CH_4$: AX4 (4 bonds) → tetrahedral, $109.5°$",
            ],
          },
          practice: "ทำนายรูปร่างของ $SF_4$, $XeF_2$, $PCl_5$",
        },
        {
          id: "hybridization",
          title: "Orbital Hybridization",
          source: "Chemistry: The Central Science, Ch 9.4-9.5, p.358",
          concept:
            "Hybridization อธิบายรูปร่าง: $sp$ (linear), $sp^2$ (trigonal planar), $sp^3$ (tetrahedral), $sp^3d$ (trigonal bipyramidal), $sp^3d^2$ (octahedral) พันธะ sigma ($\\sigma$): orbital overlap ตรงแนวพันธะ (ใน hybrid orbital) พันธะ pi ($\\pi$): lateral overlap ของ p orbital (เพิ่มใน double/triple bond)",
          formula: "sp:\\text{linear},\\; sp^2:\\text{trigonal},\\; sp^3:\\text{tetrahedral}",
          example: {
            title: "Hybridization — CH₄, C₂H₄, C₂H₂",
            problem: "ระบุ hybridization ของ C ใน $CH_4$, $C_2H_4$, $C_2H_2$",
            steps: [
              "$CH_4$: C มีพันธะ 4 เดี่ยว → $sp^3$",
              "$C_2H_4$: C มีพันธะคู่ (1 sigma + 1 pi) → $sp^2$",
              "$C_2H_2$: C มีพันธะสาม (1 sigma + 2 pi) → $sp$",
            ],
          },
          practice: "ระบุ hybridization ของ N ใน $NH_3$, $NO_3^-$, และ $N_2$",
        },
      ],
    },
    {
      id: "thermochemistry",
      title: "Thermochemistry",
      description: "ความร้อน enthalpy entropy และ Gibbs free energy",
      sections: [
        {
          id: "heat-enthalpy",
          title: "Heat and Enthalpy",
          source: "Chemistry: The Central Science, Ch 5.1-5.4, p.173",
          concept:
            "ความร้อน $q=mc\\Delta T$ (calorimetry) Enthalpy $H=E+PV$ ที่ความดันคงที่ $\\Delta H=q_p$ ปฏิกิริยา exothermic: $\\Delta H<0$ (คายความร้อน); endothermic: $\\Delta H>0$ (ดูดความร้อน) Hess's Law: $\\Delta H_{rxn}$ เป็นฟังก์ชันของ state เท่านั้น ไม่ขึ้นกับเส้นทาง สามารถรวมสมการได้",
          formula: "q=mc\\Delta T, \\quad \\Delta H_{rxn}=\\sum\\Delta H_{products}-\\sum\\Delta H_{reactants}",
          example: {
            title: "Calorimetry — หา ΔT ของน้ำ",
            problem: "น้ำ $200\\,g$ รับความร้อน $4180\\,J$ อุณหภูมิเปลี่ยนแปลงเท่าไร ($c=4.18\\,J/g\\cdot C$)",
            steps: [
              "$q=mc\\Delta T$",
              "$4180=200(4.18)\\Delta T$",
              "$\\Delta T=4180/836=5°C$",
            ],
          },
          practice: "ใช้ Hess's Law หา $\\Delta H$ ของ $C+O_2\\to CO_2$ จาก: (1) $C+\\frac12O_2\\to CO$, $\\Delta H_1=-110.5\\,kJ$ (2) $CO+\\frac12O_2\\to CO_2$, $\\Delta H_2=-283.0\\,kJ$",
        },
        {
          id: "entropy",
          title: "Entropy and the Second Law",
          source: "Chemistry: The Central Science, Ch 19.2-19.3, p.803",
          concept:
            "Entropy $S$ วัดความไม่เป็นระเบียบหรือจำนวน microstates ของระบบ Second Law: ในกระบวนการที่เกิดเองได้ entropy รวมของจักรวาลเพิ่มขึ้นเสมอ: $\\Delta S_{universe}=\\Delta S_{sys}+\\Delta S_{surr}>0$ $\\Delta S>0$ เมื่อ: ก๊าซเพิ่มขึ้น ความซับซ้อนเพิ่ม อุณหภูมิเพิ่ม มีการผสม",
          formula: "\\Delta S_{universe}=\\Delta S_{sys}+\\Delta S_{surr}>0",
          example: {
            title: "ทำนาย ΔS — vaporization และ gas rxn",
            problem: "ทำนาย $\\Delta S$ ของ: (a) $H_2O(l)\\to H_2O(g)$ (b) $2SO_2(g)+O_2(g)\\to2SO_3(g)$",
            steps: [
              "(a) ของเหลวกลายเป็นก๊าซ จำนวน mol ก๊าซเพิ่ม → $\\Delta S>0$",
              "(b) มี 3 mol ก๊าซ reactants → 2 mol ก๊าซ products",
              "จำนวน mol ก๊าซลดลง ความไม่เป็นระเบียบลด → $\\Delta S<0$",
            ],
          },
          practice: "ทำนาย sign ของ $\\Delta S$ สำหรับ $N_2(g)+3H_2(g)\\to2NH_3(g)$",
        },
        {
          id: "gibbs",
          title: "Gibbs Free Energy",
          source: "Chemistry: The Central Science, Ch 19.4-19.5, p.810",
          concept:
            "Gibbs free energy $G=H-TS$ เป็น criterion สำหรับ spontaneity ที่ $T,P$ คงที่: $\\Delta G=\\Delta H-T\\Delta S$ ถ้า $\\Delta G<0$ → spontaneous ถ้า $\\Delta G>0$ → nonspontaneous ถ้า $\\Delta G=0$ → equilibrium ความสัมพันธ์กับ $K$: $\\Delta G°=-RT\\ln K$",
          formula: "\\Delta G=\\Delta H-T\\Delta S, \\quad \\Delta G°=-RT\\ln K",
          example: {
            title: "Gibbs — T ที่ทำให้ ΔG < 0",
            problem: "ปฏิกิริยามี $\\Delta H=-80\\,kJ$ และ $\\Delta S=-200\\,J/K$ ที่อุณหภูมิใดจะ spontaneous",
            steps: [
              "Spontaneous เมื่อ $\\Delta G=\\Delta H-T\\Delta S<0$",
              "$-80000-T(-200)<0$",
              "$-80000+200T<0$",
              "$T<400\\,K$ (spontaneous ที่ต่ำกว่า 400 K)",
            ],
          },
          practice: "ถ้า $K=1.0\\times10^{-5}$ ที่ $298\\,K$ หา $\\Delta G°$ ($R=8.314\\,J/mol\\cdot K$)",
        },
      ],
    },
    {
      id: "equilibrium",
      title: "Chemical Equilibrium",
      description: "ค่าคงที่สมดุล Le Chatelier และสมดุลกรด-เบส",
      sections: [
        {
          id: "equilibrium-constant",
          title: "Equilibrium Constant",
          source: "Chemistry: The Central Science, Ch 15.2-15.3, p.631",
          concept:
            "ที่สมดุล $K_c=\\frac{[C]^c[D]^d}{[A]^a[B]^b}$ (ไม่รวมสาร pure solid/liquid) $K_p$ ใช้ความดันบางส่วนของก๊าซ: $K_p=K_c(RT)^{\\Delta n}$ ขนาด $K$: $K>>1$ → equilibrium เอนไปทาง products; $K<<1$ → เอนไปทาง reactants ค่า $K$ ขึ้นกับอุณหภูมิเท่านั้น",
          formula: "K_c=\\frac{[products]^{coeff}}{[reactants]^{coeff}}, \\quad K_p=K_c(RT)^{\\Delta n}",
          example: {
            title: "หา $K_c$ ของ H₂ + I₂ ⇌ 2HI",
            problem: "ที่ equilibrium: $[H_2]=0.50\\,M$, $[I_2]=0.50\\,M$, $[HI]=2.0\\,M$ หา $K_c$ ของ $H_2+I_2\\rightleftharpoons2HI$",
            steps: [
              "$K_c=\\frac{[HI]^2}{[H_2][I_2]}$",
              "$=\\frac{(2.0)^2}{(0.50)(0.50)}$",
              "$=\\frac{4.0}{0.25}=16$",
            ],
          },
          practice: "ถ้า $K_c=49$ สำหรับ $H_2+I_2\\rightleftharpoons2HI$ และ $[H_2]=[I_2]=0.1\\,M$ หา $[HI]$ ที่ equilibrium",
        },
        {
          id: "reaction-quotient",
          title: "Reaction Quotient (Q) and Equilibrium Direction",
          source: "Chemistry: The Central Science, Ch 15.6, p.641",
          concept:
            "Reaction quotient $Q$ คำนวณเหมือน $K$ แต่ใช้ความเข้มข้น ณ ขณะใดก็ได้ เปรียบเทียบ $Q$ กับ $K$: $Q<K$ → ปฏิกิริยาเดินไปข้างหน้า (สร้าง products); $Q>K$ → เดินย้อนกลับ; $Q=K$ → ที่ equilibrium",
          formula: "Q<K\\Rightarrow\\text{forward},\\quad Q>K\\Rightarrow\\text{reverse},\\quad Q=K\\Rightarrow\\text{equilibrium}",
          example: {
            title: "Reaction Quotient Q vs K — ทิศสมดุล",
            problem: "$N_2+3H_2\\rightleftharpoons2NH_3$, $K_c=6.0\\times10^{-2}$ ถ้าเริ่มต้นมี $[N_2]=1.0$, $[H_2]=1.0$, $[NH_3]=1.0$ ทิศทางใด",
            steps: [
              "$Q=\\frac{[NH_3]^2}{[N_2][H_2]^3}=\\frac{1}{1\\times1}=1$",
              "$Q=1 > K=0.06$",
              "ปฏิกิริยาเดินย้อนกลับ (สลาย $NH_3$)",
            ],
          },
          practice: "สำหรับ $2NO_2\\rightleftharpoons N_2O_4$, $K_c=0.20$ ถ้า $[NO_2]=0.5$, $[N_2O_4]=0.2$ หาทิศทาง",
        },
        {
          id: "le-chatelier",
          title: "Le Chatelier's Principle",
          source: "Chemistry: The Central Science, Ch 15.7, p.646",
          concept:
            "เมื่อระบบสมดุลถูกรบกวน จะปรับตัวเพื่อลดผลของการรบกวนนั้น: เพิ่ม reactant → shift right; เพิ่ม product → shift left; เพิ่มความดัน → shift ไปทาง mol ก๊าซน้อยกว่า; เพิ่ม $T$ → shift ไปทาง endothermic; ลด $T$ → shift ไปทาง exothermic ตัวเร่งปฏิกิริยาไม่เปลี่ยน $K$ หรือตำแหน่ง equilibrium",
          formula: "\\text{Stress} \\to \\text{system shifts to reduce stress}",
          example: {
            title: "Le Chatelier — N₂+H₂⇌NH₃",
            problem: "$N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$, $\\Delta H=-92\\,kJ$ ทิศใดเมื่อ: (a) เพิ่ม $N_2$ (b) เพิ่ม $T$ (c) เพิ่มความดัน",
            steps: [
              "(a) เพิ่ม reactant → shift right (สร้างมาก $NH_3$)",
              "(b) เพิ่ม $T$ → shift ไป endothermic = reverse (ลด $NH_3$)",
              "(c) เพิ่มความดัน → shift ไปทาง mol ก๊าซน้อย = right (1+3>2)",
            ],
          },
          practice: "Haber process: ทำไมจึงใช้ความดันสูงและ $T$ ปานกลาง ($400-500°C$) แทนที่จะต่ำ",
        },
        {
          id: "acid-base",
          title: "Acid-Base Equilibrium",
          source: "Chemistry: The Central Science, Ch 16.1-16.4, p.670",
          concept:
            "Brønsted-Lowry: กรดคือ proton donor, เบสคือ proton acceptor $K_a=\\frac{[H^+][A^-]}{[HA]}$ (ionization constant ของกรดอ่อน) $pH=-\\log[H^+]$ ที่ $25°C$: $pH+pOH=14$ กรดแก่ ($HCl$, $HNO_3$, $H_2SO_4$, ฯลฯ) ionize 100% เบสแก่ ($NaOH$, $KOH$, ฯลฯ) ionize 100%",
          formula: "pH=-\\log[H^+], \\quad K_a=\\frac{[H^+][A^-]}{[HA]}",
          example: {
            title: "หา pH ของ CH₃COOH อ่อน",
            problem: "กรดแอซิติก $CH_3COOH$ ความเข้มข้น $0.10\\,M$, $K_a=1.8\\times10^{-5}$ หา pH",
            steps: [
              "ICE table: $[H^+]=[A^-]=x$, $[HA]=0.10-x$",
              "$K_a=x^2/(0.10-x)\\approx x^2/0.10$ (ถ้า $x<<0.10$)",
              "$x^2=1.8\\times10^{-6}$, $x=[H^+]=1.34\\times10^{-3}\\,M$",
              "$pH=-\\log(1.34\\times10^{-3})\\approx2.87$",
            ],
          },
          practice: "NaOH ความเข้มข้น $0.05\\,M$ หา pH",
        },
      ],
    },
  ],
  formulas: [
    { id: "bohr-energy", topic: "Atomic Structure", name: "Bohr Energy Levels", latex: "E_n=-\\frac{2.18\\times10^{-18}}{n^2}\\,J", usage: "พลังงานระดับ n ของ H atom" },
    { id: "mole-mass", topic: "Stoichiometry", name: "Mole-Mass", latex: "n=m/M", usage: "แปลงมวลเป็น mol" },
    { id: "percent-yield", topic: "Stoichiometry", name: "Percent Yield", latex: "\\%Y=\\frac{actual}{theoretical}\\times100", usage: "วัดประสิทธิภาพปฏิกิริยา" },
    { id: "molarity", topic: "Solutions", name: "Molarity", latex: "M=n/V\\,(mol/L)", usage: "ความเข้มข้น" },
    { id: "dilution", topic: "Solutions", name: "Dilution", latex: "M_1V_1=M_2V_2", usage: "เจือจาง" },
    { id: "formal-charge", topic: "Bonding", name: "Formal Charge", latex: "FC=V-N_e-\\frac12B_e", usage: "ตรวจ Lewis structure" },
    { id: "calorimetry", topic: "Thermochemistry", name: "Calorimetry", latex: "q=mc\\Delta T", usage: "ความร้อนจากการเปลี่ยน T" },
    { id: "gibbs", topic: "Thermochemistry", name: "Gibbs Free Energy", latex: "\\Delta G=\\Delta H-T\\Delta S", usage: "ทำนาย spontaneity" },
    { id: "gibbs-k", topic: "Thermochemistry", name: "ΔG and K", latex: "\\Delta G°=-RT\\ln K", usage: "เชื่อม thermodynamics กับ equilibrium" },
    { id: "kc", topic: "Equilibrium", name: "Equilibrium Constant", latex: "K_c=\\frac{[P]^{coeff}}{[R]^{coeff}}", usage: "อัตราส่วนผลิตภัณฑ์/สารตั้งต้น" },
    { id: "ph", topic: "Acid-Base", name: "pH", latex: "pH=-\\log[H^+]", usage: "วัดความเป็นกรด" },
    { id: "ka", topic: "Acid-Base", name: "Acid Dissociation Constant", latex: "K_a=[H^+][A^-]/[HA]", usage: "strength ของกรดอ่อน" },
  ],
    flashcards: [
    { id: "ch-a1", front: "1 mole =?", back: "$6.022\times10^{23}$ particles" },
    { id: "ch-a2", front: "Moles จากมวล", back: "$n=m/M$" },
    { id: "ch-a3", front: "Bohr: $E_n$ ของ H", back: "$E_n=-13.6/n^2\,eV$" },
    { id: "ch-a4", front: "4 Quantum numbers", back: "$n$, $l$ ($0$ ถึง $n-1$), $m_l$ ($-l$ ถึง $+l$), $m_s$ ($\pm\frac{1}{2}$)" },
    { id: "ch-a5", front: "กฎ 3 ข้อในการจัดเรียง $e^-$", back: "Aufbau (ต่ำไปสูง) + Pauli (2 ต่อ orbital spin ตรงข้าม) + Hund (1 ต่อ orbital ก่อน)" },
    { id: "ch-a6", front: "Atomic radius เพิ่มในทิศใด?", back: "เพิ่มลงล่างในหมู่ | ลดขวาในคาบ (เพราะ $Z_{eff}$ เพิ่ม)" },
    { id: "ch-a7", front: "Ionization energy เพิ่มในทิศใด?", back: "เพิ่มขวาในคาบ | ลดลงล่างในหมู่ (ตรงข้าม radius)" },
    { id: "ch-s1", front: "Limiting reactant คือ?", back: "สารที่หมดก่อน กำหนด yield สูงสุด" },
    { id: "ch-s2", front: "Percent yield", back: "$(actual/theoretical)\times100\%$" },
    { id: "ch-s3", front: "Molarity", back: "$M=n/V$ (mol/L)" },
    { id: "ch-s4", front: "Dilution", back: "$M_1V_1=M_2V_2$" },
    { id: "ch-b1", front: "Ionic vs Covalent: $\Delta EN$", back: "$>1.7$: ionic | $0.5{-}1.7$: polar covalent | $<0.5$: nonpolar" },
    { id: "ch-b2", front: "Formal charge", back: "$FC=V-N_e-B_e/2$" },
    { id: "ch-b3", front: "VSEPR: AX4 รูปร่าง?", back: "Tetrahedral, $109.5°$ (เช่น $CH_4$)" },
    { id: "ch-b4", front: "VSEPR: AX3E รูปร่าง?", back: "Trigonal pyramidal, $\approx107°$ (เช่น $NH_3$)" },
    { id: "ch-b5", front: "VSEPR: AX2E2 รูปร่าง?", back: "Bent, $\approx104.5°$ (เช่น $H_2O$)" },
    { id: "ch-b6", front: "Hybridization: double bond", back: "$sp^2$ + 1 pi bond" },
    { id: "ch-b7", front: "Hybridization: triple bond", back: "$sp$ + 2 pi bonds" },
    { id: "ch-t1", front: "Calorimetry", back: "$q=mc\Delta T$" },
    { id: "ch-t2", front: "Hess's Law", back: "$\Delta H_{rxn}$ ไม่ขึ้นกับเส้นทาง — รวมสมการได้" },
    { id: "ch-t3", front: "Entropy ($S$) เพิ่มเมื่อ?", back: "ก๊าซเพิ่ม | $T$ สูง | ละลาย | ความซับซ้อนเพิ่ม" },
    { id: "ch-t4", front: "Gibbs Free Energy", back: "$\Delta G=\Delta H-T\Delta S$ — spontaneous เมื่อ $\Delta G<0$" },
    { id: "ch-t5", front: "$\Delta G°$ กับ $K$", back: "$\Delta G°=-RT\ln K$" },
    { id: "ch-e1", front: "Kc expression", back: "$K_c=\frac{[products]^{coeff}}{[reactants]^{coeff}}$" },
    { id: "ch-e2", front: "Q vs K: ทิศทางปฏิกิริยา?", back: "$Q<K$: forward | $Q>K$: reverse | $Q=K$: equilibrium" },
    { id: "ch-e3", front: "Le Chatelier: เพิ่ม $T$ ใน exothermic", back: "Shift left (ลด product)" },
    { id: "ch-e4", front: "Le Chatelier: เพิ่มความดัน", back: "Shift ไปทาง mol ก๊าซน้อยกว่า" },
    { id: "ch-e5", front: "pH", back: "$pH=-\log[H^+]$,  $pH+pOH=14$" },
    { id: "ch-e6", front: "Weak acid equilibrium", back: "$K_a=[H^+][A^-]/[HA]$ (ใช้ ICE table)" },
  ],
  quizzes: [
    {
      id: "chem-q1",
      chapterId: "bonding",
      question: "What is the molecular geometry of $CH_4$?",
      options: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
      answer: 2,
      solution: "$CH_4$: AX4 ไม่มี lone pair → tetrahedral, มุม $109.5°$",
    },
    {
      id: "chem-q2",
      chapterId: "thermochemistry",
      question: "A reaction has $\\Delta H=-60\\,kJ$ and $\\Delta S=-100\\,J/K$. At what temperature is $\\Delta G=0$?",
      options: ["300 K", "600 K", "100 K", "60 K"],
      answer: 1,
      solution: "$\\Delta G=0$: $T=\\Delta H/\\Delta S=-60000/-100=600\\,K$",
    },
    {
      id: "chem-q3",
      chapterId: "stoichiometry",
      question: "How many moles in 44 g of $CO_2$? ($M=44\\,g/mol$)",
      options: ["0.5 mol", "1 mol", "2 mol", "44 mol"],
      answer: 1,
      solution: "$n=m/M=44/44=1\\,mol$",
    },
    {
      id: "chem-q4",
      chapterId: "equilibrium",
      question: "For $A\\rightleftharpoons B$, if $Q>K$, which direction does the reaction proceed?",
      options: ["Forward (→)", "Reverse (←)", "No change", "Cannot determine"],
      answer: 1,
      solution: "$Q>K$ หมายถึงมี product มากเกินไปเทียบกับสมดุล → ปฏิกิริยาเดินย้อนกลับ",
    },
  ],
};
