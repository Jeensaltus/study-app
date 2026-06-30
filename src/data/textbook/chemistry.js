/** Auto-generated from scripts/textbook/parsed — npm run build:slides */
export const textbookChemistry = {
  chapters: [
  {
    "id": "atomic-structure",
    "title": "Atomic Structure",
    "description": "",
    "sections": [
      {
        "id": "atomic-model",
        "title": "Models of the Atom",
        "source": "Chemistry: The Central Science 12th ed., Ch 6.1–6.3, p.219–240",
        "concept": "แบบจำลองของ Bohr อธิบายสเปกตรัมของ H: อิเล็กตรอนอยู่ในออร์บิทัลพลังงานคงที่ $E_n=-\\frac{2.18\\times10^{-18}}{n^2}\\,J$ เมื่ออิเล็กตรอนกระโดดจากระดับสูงลงต่ำ จะปล่อยโฟตอนที่มีพลังงาน $\\Delta E=hf=hc/\\lambda$ สมการ de Broglie: $\\lambda=h/mv$ (คลื่นของอนุภาค)",
        "formula": "E_n=-\\frac{2.18\\times10^{-18}}{n^2}\\,J, \\quad \\Delta E=hf",
        "warning": "quantum number ต้องสอดคล้อง: $|m_l|\\le l\\le n-1$",
        "examples": [
          {
            "title": "Bohr Model — photon $n=3→1$",
            "level": "Basic",
            "tip": "",
            "problem": "หาพลังงานโฟตอนที่ปล่อยออกมาเมื่ออิเล็กตรอนใน H กระโดดจาก $n=3$ ไป $n=1$",
            "steps": [
              "$E_1=-2.18\\times10^{-18}\\,J$, $E_3=-2.18\\times10^{-18}/9=-2.42\\times10^{-19}\\,J$",
              "$\\Delta E=E_1-E_3=-2.18\\times10^{-18}-(-2.42\\times10^{-19})$",
              "$=-1.94\\times10^{-18}\\,J$ (ลบ = ปล่อยพลังงาน)",
              "$|\\Delta E|=1.94\\times10^{-18}\\,J$ (UV region ใน Lyman series)"
            ],
            "answer": "$|\\Delta E|=1.94\\times10^{-18}\\,J$"
          },
          {
            "title": "Balmer — $n=4\\to2$ หา $\\lambda$",
            "level": "Medium",
            "tip": "$\\Delta E=hc/\\lambda$ หรือใช้ $1240/\\lambda(nm)=\\Delta E(eV)$",
            "problem": "หาความยาวคลื่นของโฟตอนที่ปล่อยจาก $n=4$ ไป $n=2$ ใน H (Balmer series)",
            "steps": [
              "$\\Delta E=13.6\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=2.55\\,eV$",
              "$\\lambda=1240/2.55=486\\,nm$",
              "อยู่ในช่วง visible (Balmer series)"
            ],
            "answer": "$\\lambda=486\\,nm$"
          }
        ],
        "practice": "หาความยาวคลื่นของโฟตอนที่ปล่อยจาก $n=4$ ไป $n=2$ ใน H (Balmer series)"
      },
      {
        "id": "orbitals",
        "title": "Quantum Numbers and Orbitals",
        "source": "Chemistry: The Central Science 12th ed., Ch 6.5–6.6, p.240–260",
        "concept": "4 quantum numbers: $n$ (principal, 1,2,3,...), $l$ (angular momentum, 0 ถึง $n-1$: s,p,d,f), $m_l$ (magnetic, $-l$ ถึง $+l$), $m_s$ (spin, $+1/2$ หรือ $-1/2$) Pauli exclusion: ในออร์บิทัลหนึ่ง มีได้ไม่เกิน 2 อิเล็กตรอน และต้อง spin ตรงข้าม จำนวนออร์บิทัล: s=1, p=3, d=5, f=7",
        "formula": "n=1,2,3,\\ldots; \\quad l=0,1,\\ldots,n-1; \\quad m_l=-l,\\ldots,+l",
        "warning": "Pauli: ออร์บิทัลหนึ่งมี electron ได้ไม่เกิน 2 ตัว spin ตรงข้าม",
        "examples": [
          {
            "title": "จำนวน Orbital ใน $n=3$",
            "level": "Basic",
            "tip": "",
            "problem": "ระดับพลังงาน $n=3$ มีกี่ออร์บิทัล และรับอิเล็กตรอนได้กี่ตัว",
            "steps": [
              "$n=3$: $l$ เป็น 0, 1, 2 (3s, 3p, 3d)",
              "ออร์บิทัล: 3s=1, 3p=3, 3d=5 → รวม 9 ออร์บิทัล",
              "อิเล็กตรอน: $9\\times2=18$ ตัว"
            ],
            "answer": "อิเล็กตรอน: $9\\times2=18$ ตัว"
          },
          {
            "title": "Quantum numbers ของ 2p",
            "level": "Medium",
            "tip": "2p หมายถึง $n=2$, $l=1$ — $m_l$ มี 3 ค่า, แต่ละค่ามี $m_s=\\pm1/2$",
            "problem": "เขียน quantum numbers ที่เป็นไปได้ทั้งหมดสำหรับ electron ใน 2p orbital",
            "steps": [
              "$n=2$, $l=1$ (p orbital)",
              "$m_l=-1,0,+1$ และ $m_s=+1/2$ หรือ $-1/2$",
              "รวม 6 ชุด: $(2,1,-1,\\pm1/2)$, $(2,1,0,\\pm1/2)$, $(2,1,+1,\\pm1/2)$"
            ],
            "answer": "6 ชุด quantum numbers"
          }
        ],
        "practice": "เขียน quantum numbers ที่เป็นไปได้ทั้งหมดสำหรับ electron ใน 2p orbital"
      },
      {
        "id": "electron-config",
        "title": "Electron Configurations",
        "source": "Chemistry: The Central Science 12th ed., Ch 6.8–6.9, p.260–275",
        "concept": "การจัดเรียงอิเล็กตรอนตามหลัก Aufbau (เติมจากพลังงานต่ำไปสูง): $1s,2s,2p,3s,3p,4s,3d,4p,\\ldots$ Hund's Rule: อิเล็กตรอนในออร์บิทัลเดียวกันจะอยู่คนละออร์บิทัลก่อน และ spin เดียวกัน Valence electrons คืออิเล็กตรอนในระดับ $n$ สูงสุด กำหนดสมบัติเคมี",
        "formula": "\\text{Aufbau: }1s^22s^22p^63s^23p^64s^23d^{10}4p^6\\ldots",
        "warning": "Aufbau มีข้อยกเว้น (Cr, Cu) — ตรวจ d-block",
        "examples": [
          {
            "title": "Electron Config ของ Fe และ Fe³⁺",
            "level": "Basic",
            "tip": "",
            "problem": "เขียน electron configuration ของ Fe ($Z=26$) และ $Fe^{3+}$",
            "steps": [
              "Fe: $1s^22s^22p^63s^23p^64s^23d^6$",
              "ย่อ: $[Ar]4s^23d^6$",
              "$Fe^{3+}$: เอาอิเล็กตรอนออก 3 ตัว (จาก 4s ก่อน แล้ว 3d)",
              "$[Ar]3d^5$ (half-filled d shell)"
            ],
            "answer": "$[Ar]3d^5$"
          },
          {
            "title": "Cu — ข้อยกเว้น Aufbau",
            "level": "Medium",
            "tip": "Cr/Cu promote half-filled/full d subshell — ย้าย 1 e⁻ จาก 4s ไป 3d",
            "problem": "เขียน electron configuration ของ Cu ($Z=29$) และอธิบายว่าทำไมไม่เป็น $[Ar]4s^23d^9$",
            "steps": [
              "ถ้าเติมตามลำดับ: $[Ar]4s^23d^9$",
              "แต่ $[Ar]4s^13d^{10}$ มี 3d เต็ม — เสถียรกว่า",
              "Cu: $[Ar]4s^13d^{10}$ (ข้อยกเว้น d-block)"
            ],
            "answer": "Cu = $[Ar]4s^13d^{10}$"
          }
        ],
        "practice": "เขียน electron configuration ของ Cu ($Z=29$) และอธิบายว่าทำไมไม่เป็น $[Ar]4s^23d^9$"
      },
      {
        "id": "periodic-trends",
        "title": "Periodic Trends",
        "source": "Chemistry: The Central Science 12th ed., Ch 7, p.275–295",
        "concept": "Atomic radius: ลดจากซ้ายไปขวาในคาบ (เพราะ $Z_{eff}$ เพิ่ม), เพิ่มจากบนลงล่างในหมู่ Ionization energy: แนวโน้มตรงข้ามกับ atomic radius Electron affinity: ส่วนใหญ่เป็นลบ (ปล่อยพลังงานเมื่อรับ $e^-$) ยกเว้นหมู่ 8A Electronegativity: F มีค่าสูงสุด (4.0)",
        "formula": "Z_{eff}=Z-S \\quad (S=\\text{shielding constant})",
        "warning": "แนวโน้ม periodic ใช้ได้ใน period เดียวกัน — อย่าเปรียบ Na กับ Ne",
        "examples": [
          {
            "title": "เรียง Atomic Radius — Na, Mg, Al, Si",
            "level": "Basic",
            "tip": "",
            "problem": "เรียง Na, Mg, Al, Si จากรัศมีมากไปน้อย และอธิบาย",
            "steps": [
              "ทุกธาตุอยู่คาบ 3 เดียวกัน",
              "จากซ้ายไปขวา $Z_{eff}$ เพิ่ม ดึง $e^-$ ให้แน่นขึ้น",
              "รัศมี: Na > Mg > Al > Si"
            ],
            "answer": "รัศมี: Na > Mg > Al > Si"
          },
          {
            "title": "Ionization energy — หมู่ 17",
            "level": "Medium",
            "tip": "IE ลดลงเมื่อลงหมู่ (รัศมีใหญ่ขึ้น, $e^-$ ถูกดึงน้อยลง)",
            "problem": "เรียง F, Cl, Br, I ตาม ionization energy (มากไปน้อย) และอธิบาย",
            "steps": [
              "ทุกธาตุอยู่หมู่ 17 (halogen)",
              "ลงหมู่: รัศมีเพิ่ม → IE ลด",
              "F มีรัศมีเล็กสุด ดึง $e^-$ แน่นที่สุด",
              "IE: F > Cl > Br > I"
            ],
            "answer": "F > Cl > Br > I"
          }
        ],
        "practice": "เรียง F, Cl, Br, I ตาม ionization energy (มากไปน้อย) และอธิบาย"
      }
    ]
  },
  {
    "id": "aqueous-reactions",
    "title": "Aqueous Reactions",
    "description": "ปฏิกิริยาในน้ำ การตกตะกอน และ redox",
    "sections": [
      {
        "id": "precipitation",
        "title": "Precipitation Reactions",
        "source": "Chemistry: The Central Science 12th ed., Ch 4.2–4.3, p.115–125",
        "concept": "ปฏิกิริยาตกตะกอน: ไอons ในน้ำรวมกันแล้วสร้าง solid ที่ $K_{sp}$ ต่ำ ใช้ solubility rules ทำนาย precipitate (เช่น $AgCl$, $BaSO_4$) ionic equation แสดงเฉพาะ species ที่เปลี่ยน",
        "formula": "\\text{solubility rules + }K_{sp}",
        "warning": "ตรวจ charge balance ใน ionic equation — และ $K_{sp}$ ใช้กับ saturated solution ใน equilibrium",
        "examples": [
          {
            "title": "ทำนาย precipitate",
            "level": "Basic",
            "tip": "ดู solubility rules",
            "problem": "ผสม $AgNO_3$ กับ $NaCl$ สารใดตกตะกอน",
            "steps": [
              "$Ag^++Cl^-\\to AgCl(s)$",
              "$AgCl$ ไม่ soluble → ตกตะกอนสีขาว",
              "$Na^+$ และ $NO_3^-$ อยู่ใน solution (spectator)"
            ],
            "answer": "$AgCl(s)$ ตกตะกอน"
          },
          {
            "title": "เขียน net ionic equation",
            "level": "Medium",
            "tip": "ตัด spectator ions",
            "problem": "เขียน net ionic ของ $BaCl_2+Na_2SO_4$",
            "steps": [
              "Full: $Ba^{2+}+2Cl^-+2Na^++SO_4^{2-}\\to BaSO_4(s)+2Na^++2Cl^-$",
              "Net: $Ba^{2+}+SO_4^{2-}\\to BaSO_4(s)$"
            ],
            "answer": "$Ba^{2+}+SO_4^{2-}\\to BaSO_4(s)$"
          }
        ],
        "practice": "ผสม $Pb(NO_3)_2$ กับ $KI$ เขียน net ionic และระบุสี precipitate ($PbI_2$)"
      },
      {
        "id": "oxidation-reduction",
        "title": "Oxidation-Reduction Reactions",
        "source": "Chemistry: The Central Science 12th ed., Ch 4.4–4.5, p.125–140",
        "concept": "Redox: oxidation คือเพิ่ม oxidation number (หรือสูญเสีย e⁻), reduction คือลด ON (ได้ e⁻) สมดุล half-reaction ด้วย e⁻ และ $H_2O$, $H^+$, $OH^-$ ตามสภาพ acidic/basic",
        "formula": "\\text{ON}_{product}-\\text{ON}_{reactant}=\\Delta n_e",
        "warning": "ใน basic solution ใช้ $OH^-$ แทน $H^+$ — บаланซ charge ก่อน แล้วค่อยบаланซ atom",
        "examples": [
          {
            "title": "หา oxidation number",
            "level": "Basic",
            "tip": "ใช้กฎ: O มัก -2, H มัก +1, รวม ON = charge",
            "problem": "หา ON ของ S ใน $H_2SO_4$",
            "steps": [
              "$2(+1)+ON+4(-2)=0$",
              "$ON=+6$"
            ],
            "answer": "$ON(S)=+6$"
          },
          {
            "title": "จำแนน oxidizing/reducing agent",
            "level": "Medium",
            "tip": "species ที่ถูก oxidize = reducing agent",
            "problem": "ใน $Zn+Cu^{2+}\\to Zn^{2+}+Cu$ ใครเป็น reducing agent",
            "steps": [
              "$Zn$ เปลี่ยน $0\\to+2$ (oxidized)",
              "$Zn$ ให้ e⁻ → reducing agent",
              "$Cu^{2+}$ รับ e⁻ → oxidizing agent"
            ],
            "answer": "$Zn$ เป็น reducing agent"
          }
        ],
        "practice": "Balance ใน acidic: $MnO_4^-+Fe^{2+}\\to Mn^{2+}+Fe^{3+}$"
      }
    ]
  },
  {
    "id": "stoichiometry",
    "title": "Stoichiometry",
    "description": "",
    "sections": [
      {
        "id": "mole-concept",
        "title": "The Mole and Molar Mass",
        "source": "Chemistry: The Central Science 12th ed., Ch 3.1–3.4, p.80–100",
        "concept": "1 mole = $6.022\\times10^{23}$ particles (Avogadro's number $N_A$) Molar mass = มวลของ 1 mole ในหน่วย g/mol (เท่ากับ atomic/molecular mass ใน amu) การแปลง: $n=m/M$, จำนวนอนุภาค $=n\\times N_A$ Percent composition: $\\%X=\\frac{\\text{mass of X in formula}}{\\text{molar mass}}\\times100$",
        "formula": "n=\\frac{m}{M}, \\quad N=n\\times N_A",
        "warning": "แปลง g ↔ mol ด้วย molar mass — ตรวจสูตรก่อนคำนวณ",
        "examples": [
          {
            "title": "Mole — มวล → mol → โมเลกุล",
            "level": "Basic",
            "tip": "",
            "problem": "น้ำ $H_2O$ มวล $36\\,g$ มีกี่ mol และกี่โมเลกุล",
            "steps": [
              "$M(H_2O)=2(1)+16=18\\,g/mol$",
              "$n=m/M=36/18=2\\,mol$",
              "จำนวนโมเลกุล $=2\\times6.022\\times10^{23}=1.204\\times10^{24}$ molecules"
            ],
            "answer": "จำนวนโมเลกุล $=2\\times6.022\\times10^{23}=1.204\\times10^{24}$ molecules"
          },
          {
            "title": "Mole และ percent composition",
            "level": "Medium",
            "tip": "$n=m/M$ แล้ว $\\%X=(n_X\\times M_X/M_{total})\\times100$",
            "problem": "กลูโคส $C_6H_{12}O_6$ มวล $180\\,g$ มีกี่ mol? หา percent composition ของ C",
            "steps": [
              "$M=6(12)+12(1)+6(16)=180\\,g/mol$",
              "$n=180/180=1.0\\,mol$",
              "มวล C ใน 1 mol = $6\\times12=72\\,g$",
              "$\\%C=72/180\\times100=40.0\\%$"
            ],
            "answer": "$n=1.0\\,mol$, $\\%C=40.0\\%$"
          }
        ],
        "practice": "กลูโคส $C_6H_{12}O_6$ มวล $180\\,g$ มีกี่ mol? หา percent composition ของ C"
      },
      {
        "id": "chemical-equations",
        "title": "Chemical Equations and Yield",
        "source": "Chemistry: The Central Science 12th ed., Ch 3.5–3.7, p.100–120",
        "concept": "สมการเคมีดุลต้องมี atom balance และ charge balance Mole ratio จากสัมประสิทธิ์ในสมการใช้แปลงระหว่างสารต่างๆ Limiting reactant คือสารที่หมดก่อนและกำหนดปริมาณ product สูงสุด ผลได้ทางทฤษฎี (theoretical yield) คำนวณจาก limiting reactant Percent yield = (actual/theoretical) × 100",
        "formula": "\\%\\text{yield}=\\frac{\\text{actual yield}}{\\text{theoretical yield}}\\times100",
        "warning": "balance อátom ก่อน แล้วค่อยหา limiting reagent",
        "examples": [
          {
            "title": "Limiting Reactant — N₂ + H₂ → NH₃",
            "level": "Basic",
            "tip": "",
            "problem": "$N_2+3H_2\\to2NH_3$ ถ้ามี $N_2$ 28 g และ $H_2$ 12 g อะไรเป็น limiting reactant และ $NH_3$ เกิดขึ้นกี่กรัม",
            "steps": [
              "$n(N_2)=28/28=1\\,mol$, $n(H_2)=12/2=6\\,mol$",
              "ต้องใช้อัตราส่วน $N_2:H_2=1:3$; มี $H_2$ 6 mol ต้องใช้ $N_2$ 2 mol",
              "แต่มี $N_2$ แค่ 1 mol → $N_2$ เป็น limiting reactant",
              "$n(NH_3)=2\\times n(N_2)=2\\,mol$, $m=2\\times17=34\\,g$"
            ],
            "answer": "$n"
          },
          {
            "title": "Limiting reactant — Fe + S",
            "level": "Medium",
            "tip": "เปรียบเทียบ mol ของ reactants กับ mole ratio จากสมการ",
            "problem": "Fe + S → FeS ถ้ามี Fe 56 g และ S 48 g หา limiting reactant และ theoretical yield ของ FeS",
            "steps": [
              "$n_{Fe}=56/56=1.0\\,mol$, $n_S=48/32=1.5\\,mol$",
              "สมการ 1:1 → Fe หมดก่อน (limiting)",
              "Theoretical yield FeS = $1.0\\times88=88\\,g$"
            ],
            "answer": "Fe limiting, yield FeS = 88 g"
          }
        ],
        "practice": "Fe + S → FeS ถ้ามี Fe 56 g และ S 48 g หา limiting reactant และ theoretical yield ของ FeS"
      },
      {
        "id": "solutions",
        "title": "Solutions and Molarity",
        "source": "Chemistry: The Central Science 12th ed., Ch 4.5, p.130–145",
        "concept": "Molarity $M=n_{solute}/V_{solution}$ (mol/L) ใช้บ่อยที่สุดในห้องแล็บ Dilution: $M_1V_1=M_2V_2$ (moles ของ solute คงที่เมื่อเจือจาง) Mass percent: $\\%(w/w)=\\frac{m_{solute}}{m_{solution}}\\times100$ Molality $m=n_{solute}/kg_{solvent}$ (ไม่ขึ้นกับอุณหภูมิ)",
        "formula": "M=\\frac{n}{V}, \\quad M_1V_1=M_2V_2",
        "warning": "Molarity เปลี่ยนเมื่อ dilute — ใช้ $M_1V_1=M_2V_2$",
        "examples": [
          {
            "title": "เตรียม $H_2SO_4$ 0.5 M จาก stock",
            "level": "Basic",
            "tip": "",
            "problem": "เตรียม $H_2SO_4$ 0.5 M จาก stock $18\\,M$ ปริมาตร $250\\,mL$ ต้องใช้ stock กี่ mL",
            "steps": [
              "$M_1V_1=M_2V_2$",
              "$18V_1=0.5\\times250$",
              "$V_1=125/18\\approx6.94\\,mL$",
              "ดูด $H_2SO_4$ 6.94 mL แล้วเติมน้ำจนครบ 250 mL"
            ],
            "answer": "ดูด $H_2SO_4$ 6.94 mL แล้วเติมน้ำจนครบ 250 mL"
          },
          {
            "title": "Molarity จากมวลและปริมาตร",
            "level": "Medium",
            "tip": "$M=n/V$ — แปลง mL เป็น L ก่อนหาร",
            "problem": "NaOH 2 g ละลายในน้ำครบ $500\\,mL$ หา molarity (M NaOH = 40)",
            "steps": [
              "$n=2/40=0.050\\,mol$",
              "$V=0.500\\,L$",
              "$M=0.050/0.500=0.10\\,M$"
            ],
            "answer": "$M=0.10\\,M$"
          }
        ],
        "practice": "NaOH 2 g ละลายในน้ำครบ $500\\,mL$ หา molarity (M NaOH = 40)"
      }
    ]
  },
  {
    "id": "bonding",
    "title": "Chemical Bonding",
    "description": "",
    "sections": [
      {
        "id": "ionic-covalent",
        "title": "Ionic and Covalent Bonding",
        "source": "Chemistry: The Central Science 12th ed., Ch 8.1–8.3, p.295–315",
        "concept": "พันธะไอออนิก: ถ่ายโอน $e^-$ ระหว่างโลหะและอโลหะ → ไอออนบวก/ลบ ยึดกันด้วยแรง electrostatic พันธะโควาเลนต์: ใช้คู่อิเล็กตรอนร่วมกัน ถ้า $\\Delta EN>1.7$ → ionic; $0.5-1.7$ → polar covalent; $<0.5$ → nonpolar covalent พลังงานพันธะ: พลังงานที่ต้องใช้ในการทำลาย 1 mol ของพันธะ",
        "formula": "\\Delta EN>1.7\\to\\text{ionic},\\quad \\Delta EN<0.5\\to\\text{nonpolar}",
        "warning": "EN ต่างมาก → ionic; ใกล้กัน → covalent",
        "examples": [
          {
            "title": "ประเภทพันธะ — HCl, NaCl, Cl₂",
            "level": "Basic",
            "tip": "",
            "problem": "จำแนก HCl, NaCl, $Cl_2$ ว่าเป็นพันธะชนิดใด ($EN$: H=2.1, Cl=3.0, Na=0.9)",
            "steps": [
              "HCl: $\\Delta EN=3.0-2.1=0.9$ → polar covalent",
              "NaCl: $\\Delta EN=3.0-0.9=2.1$ → ionic",
              "$Cl_2$: $\\Delta EN=0$ → nonpolar covalent"
            ],
            "answer": "$Cl_2$: $\\Delta EN=0$ → nonpolar covalent"
          },
          {
            "title": "จำแนก bond type จาก EN",
            "level": "Medium",
            "tip": "$\\Delta EN>1.7$ มัก ionic; $\\Delta EN<0.5$ nonpolar covalent; กลางๆ polar covalent",
            "problem": "จำแนก $H_2O$, MgO, $N_2$ ($EN$: H=2.1, O=3.5, Mg=1.2, N=3.0)",
            "steps": [
              "$H_2O$: $\\Delta EN=3.5-2.1=1.4$ → polar covalent",
              "MgO: $\\Delta EN=3.5-1.2=2.3$ → ionic",
              "$N_2$: $\\Delta EN=0$ → covalent (nonpolar)"
            ],
            "answer": "$H_2O$ covalent, MgO ionic, $N_2$ covalent"
          }
        ],
        "practice": "จำแนก $H_2O$, MgO, $N_2$ ($EN$: O=3.5, Mg=1.2, N=3.0)"
      },
      {
        "id": "lewis-structures",
        "title": "Lewis Structures",
        "source": "Chemistry: The Central Science 12th ed., Ch 8.5–8.6, p.315–335",
        "concept": "ขั้นตอนเขียน Lewis structure: (1) นับ valence $e^-$ ทั้งหมด (2) เชื่อม atoms ด้วยพันธะเดี่ยว (3) เติม octet ให้ธาตุรอบนอก (4) เติมที่ธาตุกลาง (5) ถ้าไม่ครบ octet ทำพันธะคู่หรือสาม Formal charge: $FC=V-(N_e+\\frac12B_e)$ โครงสร้างที่ดีมี FC ใกล้ศูนย์",
        "formula": "FC=V-N_e-\\frac{1}{2}B_e",
        "warning": "นับ valence electron ให้ครบ — formal charge ช่วยเลือกโครงสร้าง",
        "examples": [
          {
            "title": "Lewis Structure ของ SO₂",
            "level": "Basic",
            "tip": "",
            "problem": "เขียน Lewis structure ของ $SO_2$ และหา formal charge",
            "steps": [
              "Valence $e^-$: S=6, O=6 รวม $6+6+6=18$",
              "โครงสร้าง: S เป็นตัวกลาง เชื่อมกับ O สองตัว",
              "Lewis: O=S-O (พันธะคู่+เดี่ยว+lone pairs)",
              "FC บน S: $6-2-\\frac12(6)=1$ (ยังมี resonance structures)"
            ],
            "answer": "FC บน S: $6-2-\\frac12"
          },
          {
            "title": "Lewis structure ของ $CO_3^{2-}$",
            "level": "Medium",
            "tip": "นับ valence e⁻ รวม charge; ใช้ formal charge เลือกโครงสร้าง resonance",
            "problem": "เขียน Lewis structure ของ $CO_3^{2-}$ และวาด resonance structures ทั้งหมด",
            "steps": [
              "Valence e⁻: C(4) + 3O(18) + 2 charge = 24 e⁻",
              "C เป็น central atom, สร้าง 3 C–O bonds",
              "มี 3 resonance structures — แต่ละ C=O double bond สลับตำแหน่ง",
              "Formal charge ของ C = 0 ในโครงสร้างที่ดีที่สุด"
            ],
            "answer": "3 resonance structures (trigonal planar)"
          }
        ],
        "practice": "เขียน Lewis structure ของ $CO_3^{2-}$ และวาด resonance structures ทั้งหมด"
      },
      {
        "id": "vsepr",
        "title": "VSEPR and Molecular Geometry",
        "source": "Chemistry: The Central Science 12th ed., Ch 9.1–9.3, p.335–355",
        "concept": "VSEPR: คู่ $e^-$ รอบอะตอมกลางผลักกันให้มุมพันธะกว้างสุด แรงผลัก: lone pair–lone pair > lone pair–bond pair > bond pair–bond pair รูปร่าง: AX2 (linear), AX3 (trigonal planar), AX4 (tetrahedral), AX2E2 (bent), AX3E (trigonal pyramidal), AX5 (trigonal bipyramidal), AX6 (octahedral)",
        "formula": "AX_nE_m: n = \\text{bonds}, m = \\text{lone pairs}",
        "warning": "จำนวน electron domain รวม lone pair — lone pair ดัน bond angle เล็กลง",
        "examples": [
          {
            "title": "VSEPR — รูปร่าง H₂O, NH₃, CH₄",
            "level": "Basic",
            "tip": "",
            "problem": "ทำนายรูปร่างและมุมพันธะของ $H_2O$, $NH_3$, $CH_4$",
            "steps": [
              "$H_2O$: AX2E2 (2 bonds + 2 lone pairs) → bent, มุม $\\approx104.5°$",
              "$NH_3$: AX3E (3 bonds + 1 lone pair) → trigonal pyramidal, $\\approx107°$",
              "$CH_4$: AX4 (4 bonds) → tetrahedral, $109.5°$"
            ],
            "answer": "$CH_4$: AX4"
          },
          {
            "title": "VSEPR — รูปร่างโมเลกุล",
            "level": "Medium",
            "tip": "นับ electron domains รวม lone pairs — lone pair ทำให้ bond angle เล็กลง",
            "problem": "ทำนายรูปร่างของ $SF_4$, $XeF_2$, $PCl_5$",
            "steps": [
              "$SF_4$: 5 domains (4 bond + 1 LP) → seesaw",
              "$XeF_2$: 5 domains (2 bond + 3 LP) → linear",
              "$PCl_5$: 5 domains (5 bond, 0 LP) → trigonal bipyramidal"
            ],
            "answer": "seesaw, linear, trigonal bipyramidal"
          }
        ],
        "practice": "ทำนายรูปร่างของ $SF_4$, $XeF_2$, $PCl_5$"
      },
      {
        "id": "hybridization",
        "title": "Hybridization",
        "source": "Chemistry: The Central Science 12th ed., Ch 9.4–9.5, p.355–370",
        "concept": "Hybridization อธิบายรูปร่าง: $sp$ (linear), $sp^2$ (trigonal planar), $sp^3$ (tetrahedral), $sp^3d$ (trigonal bipyramidal), $sp^3d^2$ (octahedral) พันธะ sigma ($\\sigma$): orbital overlap ตรงแนวพันธะ (ใน hybrid orbital) พันธะ pi ($\\pi$): lateral overlap ของ p orbital (เพิ่มใน double/triple bond)",
        "formula": "sp:\\text{linear},\\; sp^2:\\text{trigonal},\\; sp^3:\\text{tetrahedral}",
        "warning": "จำนวน hybrid orbital = จำนวน bond + lone pair ที่ central atom",
        "examples": [
          {
            "title": "Hybridization — CH₄, C₂H₄, C₂H₂",
            "level": "Basic",
            "tip": "",
            "problem": "ระบุ hybridization ของ C ใน $CH_4$, $C_2H_4$, $C_2H_2$",
            "steps": [
              "$CH_4$: C มีพันธะ 4 เดี่ยว → $sp^3$",
              "$C_2H_4$: C มีพันธะคู่ (1 sigma + 1 pi) → $sp^2$",
              "$C_2H_2$: C มีพันธะสาม (1 sigma + 2 pi) → $sp$"
            ],
            "answer": "$C_2H_2$: C มีพันธะสาม"
          },
          {
            "title": "Hybridization ของ N",
            "level": "Medium",
            "tip": "hybrid orbitals = bonds + lone pairs ที่ central atom",
            "problem": "ระบุ hybridization ของ N ใน $NH_3$, $NO_3^-$, และ $N_2$",
            "steps": [
              "$NH_3$: 3 bonds + 1 LP = 4 domains → $sp^3$",
              "$NO_3^-$: 3 bonds, 0 LP on N = 3 domains → $sp^2$",
              "$N_2$: 1 $\\sigma$ + 2 $\\pi$ → $sp$ (linear)"
            ],
            "answer": "$sp^3$, $sp^2$, $sp$"
          }
        ],
        "practice": "ระบุ hybridization ของ N ใน $NH_3$, $NO_3^-$, และ $N_2$"
      }
    ]
  },
  {
    "id": "gases",
    "title": "Gases",
    "description": "",
    "sections": [
      {
        "id": "ideal-gas-law",
        "title": "The Ideal Gas Law",
        "source": "Chemistry: The Central Science 12th ed., Ch 10.1–10.4, p.370–395",
        "concept": "กฎก๊าซอุดมคติ $PV=nRT$ เชื่อมความสัมพันธ์ระหว่าง $P$, $V$, $n$, $T$ ที่ STP ($0°C$, $1\\,atm$): $1\\,mol$ ก๊าซมี $V=22.4\\,L$ ก๊าซจริงใกล้ ideal เมื่อ $P$ ต่ำและ $T$ สูง ใช้ $R=0.0821\\,L\\cdot atm/mol\\cdot K$ หรือ $8.314\\,J/mol\\cdot K$",
        "formula": "PV=nRT",
        "warning": "อุณหภูมิต้องเป็น Kelvin เสมอ — แปลง °C ด้วย $T(K)=T(°C)+273.15$ และตรวจหน่วย $R$ ให้ตรงกับ $P$, $V$",
        "examples": [
          {
            "title": "หาจำนวน mol จาก P, V, T",
            "level": "Basic",
            "tip": "ใช้ $n=PV/(RT)$",
            "problem": "ก๊าซ $P=1.5\\,atm$, $V=4.0\\,L$, $T=300\\,K$ หา $n$",
            "steps": [
              "$n=PV/(RT)=1.5(4.0)/(0.0821)(300)$",
              "$n=6.0/24.63\\approx0.24\\,mol$"
            ],
            "answer": "$n\\approx0.24\\,mol$"
          },
          {
            "title": "หาความดันหลังเปลี่ยน T",
            "level": "Medium",
            "tip": "ถ้า $n$, $V$ คงที่ → $P\\propto T$",
            "problem": "ถัง $O_2$ $n=0.50\\,mol$ ใน $V=10\\,L$ ที่ $27°C$ หา $P$ แล้วหา $P$ ใหม่ที่ $127°C$",
            "steps": [
              "$T_1=300\\,K$: $P_1=nRT/V=0.50(0.0821)(300)/10=1.23\\,atm$",
              "$T_2=400\\,K$: $P_2=P_1(T_2/T_1)=1.23(400/300)=1.64\\,atm$"
            ],
            "answer": "$P_1\\approx1.2\\,atm$, $P_2\\approx1.6\\,atm$"
          }
        ],
        "practice": "ก๊าซ $2.0\\,L$ ที่ $STP$ ถูกอุ่นเป็น $100°C$ ในภาชนะปิด หา $P$ สุดท้าย"
      },
      {
        "id": "gas-kinetic-theory",
        "title": "Kinetic-Molecular Theory",
        "source": "Chemistry: The Central Science 12th ed., Ch 10.7–10.8, p.395–410",
        "concept": "ทฤษฎีจลน์โมเลกุล: อนุภาคก๊าซเคลื่อนที่สุ่ม สร้างความดันจากการชนผนัง ความเร็ว RMS $v_{rms}=\\sqrt{3RT/M}$ กฎ Graham: อัตราการแพร่ $\\propto 1/\\sqrt{M}$ ก๊าซเบา diffuses เร็วกว่า",
        "formula": "v_{rms}=\\sqrt{\\frac{3RT}{M}},\\quad \\frac{r_1}{r_2}=\\sqrt{\\frac{M_2}{M_1}}",
        "warning": "M ต้องเป็น molar mass ในหน่วย kg/mol เมื่อใช้ $R=8.314$ — หรือ g/mol กับ $R=8.314\\times10^3\\,J/kmol\\cdot K$",
        "examples": [
          {
            "title": "ความเร็ว RMS ของ H₂",
            "level": "Basic",
            "tip": "ใช้ $v_{rms}=\\sqrt{3RT/M}$",
            "problem": "หา $v_{rms}$ ของ $H_2$ ($M=2.0\\,g/mol$) ที่ $300\\,K$",
            "steps": [
              "$M=0.0020\\,kg/mol$",
              "$v_{rms}=\\sqrt{3(8.314)(300)/0.0020}=\\sqrt{3.74\\times10^6}$",
              "$v_{rms}\\approx1930\\,m/s$"
            ],
            "answer": "$v_{rms}\\approx1900\\,m/s$"
          },
          {
            "title": "Graham's law — เปรียบเทียบ diffusion",
            "level": "Medium",
            "tip": "ก๊าซเบากว่า → แพร่เร็วกว่า",
            "problem": "$CH_4$ ($M=16$) กับ $O_2$ ($M=32$) ก๊าซใด diffuse เร็วกว่า และเร็วกว่ากี่เท่า",
            "steps": [
              "$r_{CH_4}/r_{O_2}=\\sqrt{M_{O_2}/M_{CH_4}}=\\sqrt{32/16}=\\sqrt{2}$",
              "$CH_4$ เร็วกว่า $\\sqrt{2}\\approx1.41$ เท่า"
            ],
            "answer": "$CH_4$ เร็วกว่า $\\sqrt{2}$ เท่า"
          }
        ],
        "practice": "หา $v_{rms}$ ของ $N_2$ ($M=28\\,g/mol$) ที่ $400\\,K$ และเปรียบเทียบกับ $He$ ($M=4\\,g/mol$) ที่ $T$ เดียวกัน"
      }
    ]
  },
  {
    "id": "solids-liquids",
    "title": "Intermolecular Forces, Liquids, and Solids",
    "description": "",
    "sections": [
      {
        "id": "intermolecular-forces",
        "title": "Intermolecular Forces",
        "source": "Chemistry: The Central Science 12th ed., Ch 11.1–11.2, p.410–425",
        "concept": "แรงระหว่างโมเลกุลกำหนดจุดเดือดและความหนืด: London dispersion (ทุกโมเลกุล), dipole-dipole (โมเลกุล polar), hydrogen bonding (H กับ F, O, N) แรงยิ่งแรง → จุดเดือดสูง ความดันไอต่ำ",
        "formula": "\\text{LDF} < \\text{dipole-dipole} < \\text{H-bond}",
        "warning": "Hydrogen bond ต้องมี H ติดกับ F, O หรือ N โดยตรง — ไม่ใช่ทุกพันธะที่มี H",
        "examples": [
          {
            "title": "เปรียบเทียบจุดเดือด",
            "level": "Basic",
            "tip": "แรงระหว่างโมเลกุลแรงขึ้น → ต้องใช้พลังงานมากขึ้นในการแยก",
            "problem": "เรียงจุดเดือด: $CH_4$, $CH_3OH$, $CH_3CH_3$",
            "steps": [
              "$CH_4$: LDF เท่านั้น → จุดเดือดต่ำสุด ($-161°C$)",
              "$CH_3CH_3$: LDF มากกว่า $CH_4$ → สูงกว่าเล็กน้อย",
              "$CH_3OH$: H-bond → สูงสุด ($65°C$)"
            ],
            "answer": "$CH_4 < C_2H_6 < CH_3OH$"
          },
          {
            "title": "ทำนายแรงระหว่างโมเลกุล",
            "level": "Medium",
            "tip": "ดู polarity และโอกาส H-bond",
            "problem": "ระบุแรงหลักใน $H_2O$, $CO_2$, $HF$",
            "steps": [
              "$H_2O$: polar + H-bond (O-H···O)",
              "$CO_2$: polar bond แต่ linear → dipole cancel → LDF เท่านั้น",
              "$HF$: polar + H-bond (H-F···F) แรงมาก"
            ],
            "answer": "$H_2O$, $HF$: H-bond; $CO_2$: LDF"
          }
        ],
        "practice": "อธิบายทำไม $NH_3$ ($bp=-33°C$) มีจุดเดือดสูงกว่า $PH_3$ ($bp=-87°C$) แม้ M ใกล้เคียงกัน"
      },
      {
        "id": "solid-structures",
        "title": "Structures of Solids",
        "source": "Chemistry: The Central Science 12th ed., Ch 11.7, p.440–455",
        "concept": "โครงสร้างผลึก: metallic (electron sea), ionic (ions ใน lattice), covalent network (diamond, SiO₂), molecular (ice, dry ice) แต่ละแบบมีคุณสมบัติต่างกัน — conductivity, hardness, melting point",
        "formula": "\\text{coordination number} = \\text{จำนวน neighbors รอบอนุภาค}",
        "warning": "อย่าสับสน molecular solid (intermolecular อ่อน) กับ covalent network (พันธะแข็งทั้ง crystal)",
        "examples": [
          {
            "title": "จำแนกประเภทของ solid",
            "level": "Basic",
            "tip": "ดูว่าอนุภาค building block คืออะไร",
            "problem": "จำแนก: NaCl, diamond, $I_2$, Fe",
            "steps": [
              "NaCl: ionic (Na⁺, Cl⁻ lattice)",
              "diamond: covalent network (C-C tetrahedral)",
              "$I_2$: molecular (London forces ระหว่าง $I_2$)",
              "Fe: metallic (electron sea)"
            ],
            "answer": "ionic, covalent network, molecular, metallic"
          },
          {
            "title": "Unit cell — จำนวน atom",
            "level": "Medium",
            "tip": "นับ atom ใน unit cell โดยใช้ fraction ที่อยู่ใน cell",
            "problem": "FCC (face-centered cubic) มี atom ที่มุมและหน้า หาจำนวน atom ต่อ unit cell",
            "steps": [
              "8 มุม × 1/8 = 1 atom",
              "6 หน้า × 1/2 = 3 atoms",
              "รวม 4 atoms ต่อ unit cell"
            ],
            "answer": "4 atoms/unit cell (FCC)"
          }
        ],
        "practice": "เปรียบเทียบ diamond กับ graphite: ทั้งคู่เป็น carbon แต่ทำไม diamond แข็งกว่ามาก"
      }
    ]
  },
  {
    "id": "thermochemistry",
    "title": "Thermochemistry",
    "description": "",
    "sections": [
      {
        "id": "heat-enthalpy",
        "title": "Heat and Enthalpy",
        "source": "Chemistry: The Central Science 12th ed., Ch 5.1–5.4, p.170–195",
        "concept": "ความร้อน $q=mc\\Delta T$ (calorimetry) Enthalpy $H=E+PV$ ที่ความดันคงที่ $\\Delta H=q_p$ ปฏิกิริยา exothermic: $\\Delta H<0$ (คายความร้อน); endothermic: $\\Delta H>0$ (ดูดความร้อน) Hess's Law: $\\Delta H_{rxn}$ เป็นฟังก์ชันของ state เท่านั้น ไม่ขึ้นกับเส้นทาง สามารถรวมสมการได้",
        "formula": "q=mc\\Delta T, \\quad \\Delta H_{rxn}=\\sum\\Delta H_{products}-\\sum\\Delta H_{reactants}",
        "warning": "$\\Delta H$ บวก = endothermic — อย่าสลับ sign ของ $q$ กับ $\\Delta H$ ใน calorimetry",
        "examples": [
          {
            "title": "Calorimetry — หา ΔT ของน้ำ",
            "level": "Basic",
            "tip": "",
            "problem": "น้ำ $200\\,g$ รับความร้อน $4180\\,J$ อุณหภูมิเปลี่ยนแปลงเท่าไร ($c=4.18\\,J/g\\cdot C$)",
            "steps": [
              "$q=mc\\Delta T$",
              "$4180=200(4.18)\\Delta T$",
              "$\\Delta T=4180/836=5°C$"
            ],
            "answer": "$\\Delta T=4180/836=5°C$"
          },
          {
            "title": "Hess's Law",
            "level": "Medium",
            "tip": "$\\Delta H$ ของปฏิกิริยารวม = ผลรวม $\\Delta H$ ของขั้นย่อย",
            "problem": "ใช้ Hess's Law หา $\\Delta H$ ของ $C+O_2\\to CO_2$ จาก: (1) $C+\\frac12O_2\\to CO$, $\\Delta H_1=-110.5\\,kJ$ (2) $CO+\\frac12O_2\\to CO_2$, $\\Delta H_2=-283.0\\,kJ$",
            "steps": [
              "บวกสมการ: (1)+(2) ได้ $C+O_2\\to CO_2$",
              "$\\Delta H=\\Delta H_1+\\Delta H_2$",
              "$\\Delta H=-110.5+(-283.0)=-393.5\\,kJ/mol$"
            ],
            "answer": "$\\Delta H=-393.5\\,kJ/mol$"
          }
        ],
        "practice": "ใช้ Hess's Law หา $\\Delta H$ ของ $C+O_2\\to CO_2$ จาก: (1) $C+\\frac12O_2\\to CO$, $\\Delta H_1=-110.5\\,kJ$ (2) $CO+\\frac12O_2\\to CO_2$, $\\Delta H_2=-283.0\\,kJ$"
      },
      {
        "id": "entropy",
        "title": "Entropy",
        "source": "Chemistry: The Central Science 12th ed., Ch 19.2–19.3, p.780–795",
        "concept": "Entropy $S$ วัดความไม่เป็นระเบียบหรือจำนวน microstates ของระบบ Second Law: ในกระบวนการที่เกิดเองได้ entropy รวมของจักรวาลเพิ่มขึ้นเสมอ: $\\Delta S_{universe}=\\Delta S_{sys}+\\Delta S_{surr}>0$ $\\Delta S>0$ เมื่อ: ก๊าซเพิ่มขึ้น ความซับซ้อนเพิ่ม อุณหภูมิเพิ่ม มีการผสม",
        "formula": "\\Delta S_{universe}=\\Delta S_{sys}+\\Delta S_{surr}>0",
        "warning": "$\\Delta S>0$ เมื่อ disorder เพิ่ม — ก๊าซ > of liquid > solid",
        "examples": [
          {
            "title": "ทำนาย ΔS — vaporization และ gas rxn",
            "level": "Basic",
            "tip": "",
            "problem": "ทำนาย $\\Delta S$ ของ: (a) $H_2O(l)\\to H_2O(g)$ (b) $2SO_2(g)+O_2(g)\\to2SO_3(g)$",
            "steps": [
              "(a) ของเหลวกลายเป็นก๊าซ จำนวน mol ก๊าซเพิ่ม → $\\Delta S>0$",
              "(b) มี 3 mol ก๊าซ reactants → 2 mol ก๊าซ products",
              "จำนวน mol ก๊าซลดลง ความไม่เป็นระเบียบลด → $\\Delta S<0$"
            ],
            "answer": "จำนวน mol ก๊าซลดลง ความไม่เป็นระเบียบลด → $\\Delta S<0$"
          },
          {
            "title": "Sign ของ $\\Delta S$",
            "level": "Medium",
            "tip": "ก๊าซมี $S$ สูงกว่ of liquid/solid — ดู $\\Delta n_{gas}$ ของปฏิกิริยา",
            "problem": "ทำนาย sign ของ $\\Delta S$ สำหรับ $N_2(g)+3H_2(g)\\to2NH_3(g)$",
            "steps": [
              "Reactants: 4 mol gas → Products: 2 mol gas",
              "$\\Delta n_{gas}=2-4=-2$ (ลดลง)",
              "ความ disorder ลด → $\\Delta S<0$"
            ],
            "answer": "$\\Delta S<0$"
          }
        ],
        "practice": "ทำนาย sign ของ $\\Delta S$ สำหรับ $N_2(g)+3H_2(g)\\to2NH_3(g)$"
      },
      {
        "id": "gibbs",
        "title": "Gibbs Free Energy",
        "source": "Chemistry: The Central Science 12th ed., Ch 19.5, p.795–810",
        "concept": "Gibbs free energy $G=H-TS$ เป็น criterion สำหรับ spontaneity ที่ $T,P$ คงที่: $\\Delta G=\\Delta H-T\\Delta S$ ถ้า $\\Delta G<0$ → spontaneous ถ้า $\\Delta G>0$ → nonspontaneous ถ้า $\\Delta G=0$ → equilibrium ความสัมพันธ์กับ $K$: $\\Delta G°=-RT\\ln K$",
        "formula": "\\Delta G=\\Delta H-T\\Delta S, \\quad \\Delta G°=-RT\\ln K",
        "warning": "$\\Delta G=\\Delta H-T\\Delta S$ — ที่ equilibrium $\\Delta G=0$",
        "examples": [
          {
            "title": "Gibbs — T ที่ทำให้ ΔG < 0",
            "level": "Basic",
            "tip": "",
            "problem": "ปฏิกิริยามี $\\Delta H=-80\\,kJ$ และ $\\Delta S=-200\\,J/K$ ที่อุณหภูมิใดจะ spontaneous",
            "steps": [
              "Spontaneous เมื่อ $\\Delta G=\\Delta H-T\\Delta S<0$",
              "$-80000-T(-200)<0$",
              "$-80000+200T<0$",
              "$T<400\\,K$ (spontaneous ที่ต่ำกว่า 400 K)"
            ],
            "answer": "$T<400\\,K$"
          },
          {
            "title": "$\\Delta G°$ จาก $K$",
            "level": "Medium",
            "tip": "$\\Delta G°=-RT\\ln K$ — $K<1$ ทำให้ $\\Delta G°>0$",
            "problem": "ถ้า $K=1.0\\times10^{-5}$ ที่ $298\\,K$ หา $\\Delta G°$ ($R=8.314\\,J/mol\\cdot K$)",
            "steps": [
              "$\\Delta G°=-RT\\ln K=-(8.314)(298)\\ln(10^{-5})$",
              "$\\ln(10^{-5})=-11.51$",
              "$\\Delta G°=+28.5\\,kJ/mol$ (ปฏิกิริยาไม่ spontaneous ที่ standard conditions)"
            ],
            "answer": "$\\Delta G°=+28.5\\,kJ/mol$"
          }
        ],
        "practice": "ถ้า $K=1.0\\times10^{-5}$ ที่ $298\\,K$ หา $\\Delta G°$ ($R=8.314\\,J/mol\\cdot K$)"
      }
    ]
  },
  {
    "id": "kinetics",
    "title": "Chemical Kinetics",
    "description": "",
    "sections": [
      {
        "id": "rate-laws",
        "title": "Rate Laws and Reaction Order",
        "source": "Chemistry: The Central Science 12th ed., Ch 14.1–14.3, p.530–550",
        "concept": "rate law แสดงความสัมพันธ์ rate กับความเข้มข้น: $rate=k[A]^m[B]^n$ โดย $m,n$ คือ order (ได้จาก experiment ไม่ใช่จากสมการดุล) overall order = $m+n$ หน่วยของ $k$ ขึ้นกับ order รวม",
        "formula": "rate=k[A]^m[B]^n",
        "warning": "order ไม่จำเป็นต้องเท่ากับ coefficient ในสมการดุล — ต้องหาจากข้อมูลทดลองเท่านั้น",
        "examples": [
          {
            "title": "หา order จากข้อมูลทดลอง",
            "level": "Basic",
            "tip": "เปรียบเทียบ rate เมื่อ [A] เปลี่ยน 2 เท่า",
            "problem": "ถ้า [A] เพิ่ม 2 เท่า แล้ว rate เพิ่ม 4 เท่า order ของ A คือเท่าไร",
            "steps": [
              "$rate\\propto[A]^m$",
              "$4=(2)^m$ → $m=2$",
              "second order ใน A"
            ],
            "answer": "order = 2"
          },
          {
            "title": "คำนวณ rate จาก rate law",
            "level": "Medium",
            "tip": "แทนค่า [A], [B] ลงใน rate law",
            "problem": "$rate=k[A]^2[B]$ โดย $k=0.50\\,M^{-2}s^{-1}$, $[A]=0.20\\,M$, $[B]=0.30\\,M$ หา rate",
            "steps": [
              "$rate=0.50(0.20)^2(0.30)$",
              "$rate=0.50(0.04)(0.30)=0.006\\,M/s$"
            ],
            "answer": "$rate=0.006\\,M/s$"
          }
        ],
        "practice": "ปฏิกิริยา $2NO+O_2\\to2NO_2$ มี rate law $rate=k[NO]^2[O_2]$ ถ้า [NO] และ [O₂] เพิ่ม 2 เท่า rate เปลี่ยนกี่เท่า"
      },
      {
        "id": "activation-energy",
        "title": "Activation Energy and Arrhenius Equation",
        "source": "Chemistry: The Central Science 12th ed., Ch 14.5–14.6, p.550–565",
        "concept": "พลังงานกระตุ้น $E_a$ คือ energy barrier ที่ต้องมีก่อนปฏิกิริยา สมการ Arrhenius: $k=Ae^{-E_a/RT}$ หรือ $\\ln k=-E_a/(RT)+\\ln A$ plot $\\ln k$ vs $1/T$ ได้ slope $=-E_a/R$",
        "formula": "k=Ae^{-E_a/RT},\\quad \\ln k=-\\frac{E_a}{RT}+\\ln A",
        "warning": "ใช้ $R=8.314\\,J/mol\\cdot K$ และ $E_a$ ใน J/mol — อย่าใช้ °C ใน Arrhenius",
        "examples": [
          {
            "title": "หา k จาก E_a",
            "level": "Basic",
            "tip": "ใช้ $k=Ae^{-E_a/RT}$",
            "problem": "ถ้า $A=1.0\\times10^{12}\\,s^{-1}$, $E_a=50\\,kJ/mol$, $T=300\\,K$ หา $k$",
            "steps": [
              "$E_a=50000\\,J/mol$",
              "$k=10^{12}\\exp(-50000/(8.314)(300))$",
              "$k=10^{12}\\exp(-20.05)\\approx2.0\\times10^3\\,s^{-1}$"
            ],
            "answer": "$k\\approx2\\times10^3\\,s^{-1}$"
          },
          {
            "title": "Arrhenius plot — หา E_a",
            "level": "Medium",
            "tip": "slope ของ $\\ln k$ vs $1/T$ คือ $-E_a/R$",
            "problem": "slope ของ Arrhenius plot = $-6000\\,K$ หา $E_a$",
            "steps": [
              "$-E_a/R=-6000$",
              "$E_a=6000(8.314)=49900\\,J/mol$",
              "$E_a\\approx50\\,kJ/mol$"
            ],
            "answer": "$E_a\\approx50\\,kJ/mol$"
          }
        ],
        "practice": "ปฏิกิริยามี $k=0.020\\,s^{-1}$ ที่ $300\\,K$ และ $k=0.080\\,s^{-1}$ ที่ $320\\,K$ หา $E_a$"
      }
    ]
  },
  {
    "id": "equilibrium",
    "title": "Chemical Equilibrium",
    "description": "",
    "sections": [
      {
        "id": "equilibrium-constant",
        "title": "Equilibrium Constant",
        "source": "Chemistry: The Central Science 12th ed., Ch 15.1–15.3, p.580–600",
        "concept": "ที่สมดุล $K_c=\\frac{[C]^c[D]^d}{[A]^a[B]^b}$ (ไม่รวมสาร pure solid/liquid) $K_p$ ใช้ความดันบางส่วนของก๊าซ: $K_p=K_c(RT)^{\\Delta n}$ ขนาด $K$: $K>>1$ → equilibrium เอนไปทาง products; $K<<1$ → เอนไปทาง reactants ค่า $K$ ขึ้นกับอุณหภูมิเท่านั้น",
        "formula": "K_c=\\frac{[products]^{coeff}}{[reactants]^{coeff}}, \\quad K_p=K_c(RT)^{\\Delta n}",
        "warning": "$K$ ไม่รวม pure solid/liquid — ใช้ activity ≈ concentration",
        "examples": [
          {
            "title": "หา $K_c$ ของ H₂ + I₂ ⇌ 2HI",
            "level": "Basic",
            "tip": "",
            "problem": "ที่ equilibrium: $[H_2]=0.50\\,M$, $[I_2]=0.50\\,M$, $[HI]=2.0\\,M$ หา $K_c$ ของ $H_2+I_2\\rightleftharpoons2HI$",
            "steps": [
              "$K_c=\\frac{[HI]^2}{[H_2][I_2]}$",
              "$=\\frac{(2.0)^2}{(0.50)(0.50)}$",
              "$=\\frac{4.0}{0.25}=16$"
            ],
            "answer": "$=\\frac{4.0}{0.25}=16$"
          },
          {
            "title": "หา $[HI]$ จาก $K_c$",
            "level": "Medium",
            "tip": "เขียน expression ของ $K$ แล้วแก้ — ตรวจว่า $K=[HI]^2/([H_2][I_2])$",
            "problem": "ถ้า $K_c=49$ สำหรับ $H_2+I_2\\rightleftharpoons2HI$ และ $[H_2]=[I_2]=0.1\\,M$ หา $[HI]$ ที่ equilibrium",
            "steps": [
              "$K_c=[HI]^2/([H_2][I_2])=49$",
              "$[HI]^2=49\\times0.1\\times0.1=0.49$",
              "$[HI]=\\sqrt{0.49}=0.70\\,M$"
            ],
            "answer": "$[HI]=0.70\\,M$"
          }
        ],
        "practice": "ถ้า $K_c=49$ สำหรับ $H_2+I_2\\rightleftharpoons2HI$ และ $[H_2]=[I_2]=0.1\\,M$ หา $[HI]$ ที่ equilibrium"
      },
      {
        "id": "reaction-quotient",
        "title": "Reaction Quotient",
        "source": "Chemistry: The Central Science 12th ed., Ch 15.4, p.600–610",
        "concept": "Reaction quotient $Q$ คำนวณเหมือน $K$ แต่ใช้ความเข้มข้น ณ ขณะใดก็ได้ เปรียบเทียบ $Q$ กับ $K$: $Q<K$ → ปฏิกิริยาเดินไปข้างหน้า (สร้าง products); $Q>K$ → เดินย้อนกลับ; $Q=K$ → ที่ equilibrium",
        "formula": "Q<K\\Rightarrow\\text{forward},\\quad Q>K\\Rightarrow\\text{reverse},\\quad Q=K\\Rightarrow\\text{equilibrium}",
        "warning": "$Q>K$ → ไปทาง reactants; $Q<K$ → ไปทาง products",
        "examples": [
          {
            "title": "Reaction Quotient Q vs K — ทิศสมดุล",
            "level": "Basic",
            "tip": "",
            "problem": "$N_2+3H_2\\rightleftharpoons2NH_3$, $K_c=6.0\\times10^{-2}$ ถ้าเริ่มต้นมี $[N_2]=1.0$, $[H_2]=1.0$, $[NH_3]=1.0$ ทิศทางใด",
            "steps": [
              "$Q=\\frac{[NH_3]^2}{[N_2][H_2]^3}=\\frac{1}{1\\times1}=1$",
              "$Q=1 > K=0.06$",
              "ปฏิกิริยาเดินย้อนกลับ (สลาย $NH_3$)"
            ],
            "answer": "ปฏิกิริยาเดินย้อนกลับ"
          },
          {
            "title": "เปรียบเทียบ $Q$ กับ $K$",
            "level": "Medium",
            "tip": "$Q>K$ → ไปทาง reactants; $Q<K$ → ไปทาง products",
            "problem": "สำหรับ $2NO_2\\rightleftharpoons N_2O_4$, $K_c=0.20$ ถ้า $[NO_2]=0.5$, $[N_2O_4]=0.2$ หาทิศทาง",
            "steps": [
              "$Q=[N_2O_4]/[NO_2]^2=0.2/(0.5)^2=0.2/0.25=0.80$",
              "$Q=0.80>K=0.20$",
              "ปฏิกิริยาไปทางซ้าย (สร้าง $NO_2$ มากขึ้น, ลด $N_2O_4$)"
            ],
            "answer": "$Q>K$ → ไปทาง reactants"
          }
        ],
        "practice": "สำหรับ $2NO_2\\rightleftharpoons N_2O_4$, $K_c=0.20$ ถ้า $[NO_2]=0.5$, $[N_2O_4]=0.2$ หาทิศทาง"
      },
      {
        "id": "le-chatelier",
        "title": "Le Chatelier's Principle",
        "source": "Chemistry: The Central Science 12th ed., Ch 15.5, p.610–625",
        "concept": "เมื่อระบบสมดุลถูกรบกวน จะปรับตัวเพื่อลดผลของการรบกวนนั้น: เพิ่ม reactant → shift right; เพิ่ม product → shift left; เพิ่มความดัน → shift ไปทาง mol ก๊าซน้อยกว่า; เพิ่ม $T$ → shift ไปทาง endothermic; ลด $T$ → shift ไปทาง exothermic ตัวเร่งปฏิกิริยาไม่เปลี่ยน $K$ หรือตำแหน่ง equilibrium",
        "formula": "\\text{Stress} \\to \\text{system shifts to reduce stress}",
        "warning": "Le Chatelier ทำนายทิศทาง ไม่ใช่ขนาดของ $K$",
        "examples": [
          {
            "title": "Le Chatelier — N₂+H₂⇌NH₃",
            "level": "Basic",
            "tip": "",
            "problem": "$N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$, $\\Delta H=-92\\,kJ$ ทิศใดเมื่อ: (a) เพิ่ม $N_2$ (b) เพิ่ม $T$ (c) เพิ่มความดัน",
            "steps": [
              "(a) เพิ่ม reactant → shift right (สร้างมาก $NH_3$)",
              "(b) เพิ่ม $T$ → shift ไป endothermic = reverse (ลด $NH_3$)",
              "(c) เพิ่มความดัน → shift ไปทาง mol ก๊าซน้อย = right (1+3>2)"
            ],
            "answer": "(c) เพิ่มความดัน → shift ไปทาง mol ก๊าซน้อย = right"
          },
          {
            "title": "Haber process — ทำไมใช้ $P$ สูง",
            "level": "Medium",
            "tip": "Le Chatelier ทำนายทิศทาง ไม่เปลี่ยนค่า $K$ — ดู $\\Delta n_{gas}$",
            "problem": "Haber process: ทำไมจึงใช้ความดันสูงและ $T$ ปานกลาง ($400-500°C$) แทนที่จะต่ำ",
            "steps": [
              "$N_2+3H_2\\rightleftharpoons2NH_3$ — $\\Delta n_{gas}=-2$",
              "ความดันสูง → ดันไปทาง products (mol gas น้อยลง)",
              "$T$ ต่ำ → $\\Delta G<0$ ดี แต่ $k$ ช้า; $T$ สูง → เร็ว แต่ $K$ ลด",
              "จึงใช้ $T$ ปานกลาง + catalyst + ความดันสูง (~200 atm)"
            ],
            "answer": "P สูง → yield สูง; T ปานกลาง → สมดุล rate กับ yield"
          }
        ],
        "practice": "Haber process: ทำไมจึงใช้ความดันสูงและ $T$ ปานกลาง ($400-500°C$) แทนที่จะต่ำ"
      },
      {
        "id": "acid-base",
        "title": "Acid-Base Equilibrium",
        "source": "Chemistry: The Central Science 12th ed., Ch 16.1–16.4, p.625–655",
        "concept": "Brønsted-Lowry: กรดคือ proton donor, เบสคือ proton acceptor $K_a=\\frac{[H^+][A^-]}{[HA]}$ (ionization constant ของกรดอ่อน) $pH=-\\log[H^+]$ ที่ $25°C$: $pH+pOH=14$ กรดแก่ ($HCl$, $HNO_3$, $H_2SO_4$, ฯลฯ) ionize 100% เบสแก่ ($NaOH$, $KOH$, ฯลฯ) ionize 100%",
        "formula": "pH=-\\log[H^+], \\quad K_a=\\frac{[H^+][A^-]}{[HA]}",
        "warning": "Ka/Kb ใช้กับ weak acid/base — strong acid แทบ ionize 100%",
        "examples": [
          {
            "title": "หา pH ของ CH₃COOH อ่อน",
            "level": "Basic",
            "tip": "",
            "problem": "กรดแอซิติก $CH_3COOH$ ความเข้มข้น $0.10\\,M$, $K_a=1.8\\times10^{-5}$ หา pH",
            "steps": [
              "ICE table: $[H^+]=[A^-]=x$, $[HA]=0.10-x$",
              "$K_a=x^2/(0.10-x)\\approx x^2/0.10$ (ถ้า $x<<0.10$)",
              "$x^2=1.8\\times10^{-6}$, $x=[H^+]=1.34\\times10^{-3}\\,M$",
              "$pH=-\\log(1.34\\times10^{-3})\\approx2.87$"
            ],
            "answer": "$pH=-\\log"
          },
          {
            "title": "pH ของ NaOH",
            "level": "Medium",
            "tip": "Strong base: $pOH=-\\log[OH^-]$ แล้ว $pH=14-pOH$",
            "problem": "NaOH ความเข้มข้น $0.05\\,M$ หา pH",
            "steps": [
              "$[OH^-]=0.05\\,M$",
              "$pOH=-\\log(0.05)=1.30$",
              "$pH=14-1.30=12.70$"
            ],
            "answer": "$pH=12.70$"
          }
        ],
        "practice": "NaOH ความเข้มข้น $0.05\\,M$ หา pH"
      }
    ]
  },
  {
    "id": "acid-base-ph",
    "title": "Acids, Bases, and pH",
    "description": "pH, Ka/Kb, และสารละลายบัฟเฟอร์",
    "sections": [
      {
        "id": "ph-scale",
        "title": "The pH Scale and Strong Acids/Bases",
        "source": "Chemistry: The Central Science 12th ed., Ch 16.5–16.6, p.655–675",
        "concept": "pH นิยาม $pH=-\\log[H^+]$, $pOH=-\\log[OH^-]$ ที่ $25°C$: $pH+pOH=14$ strong acid/base: $[H^+]=C_{acid}$ (หรือ $[OH^-]=C_{base}$) หลัง dilute ใช้ $M_1V_1=M_2V_2$",
        "formula": "pH=-\\log[H^+],\\quad pH+pOH=14",
        "warning": "log ใช้ concentration ใน M — strong acid 0.010 M → $pH=2$ ไม่ใช่ 0.01",
        "examples": [
          {
            "title": "pH ของ strong acid",
            "level": "Basic",
            "tip": "strong acid 100% ionize",
            "problem": "$HCl$ 0.0050 M หา pH",
            "steps": [
              "$[H^+]=0.0050$",
              "$pH=-\\log(0.0050)=2.30$"
            ],
            "answer": "$pH=2.30$"
          },
          {
            "title": "pH ของ weak acid",
            "level": "Medium",
            "tip": "ใช้ $K_a$ และ ICE table",
            "problem": "$CH_3COOH$ 0.10 M, $K_a=1.8\\times10^{-5}$ หา pH",
            "steps": [
              "$K_a=x^2/(0.10-x)\\approx x^2/0.10$",
              "$x=\\sqrt{1.8\\times10^{-6}}=1.34\\times10^{-3}$",
              "$pH=-\\log(1.34\\times10^{-3})=2.87$"
            ],
            "answer": "$pH\\approx2.87$"
          }
        ],
        "practice": "NaOH 0.020 M หา pH"
      },
      {
        "id": "buffer-solutions",
        "title": "Buffer Solutions",
        "source": "Chemistry: The Central Science 12th ed., Ch 17.1–17.2, p.680–700",
        "concept": "บัฟเฟอร์: กรดอ่อน + เกลือ (conjugate base) หรือเบสอ่อน + เกลือ Henderson-Hasselbalch: $pH=pK_a+\\log([A^-]/[HA])$ ต resist การเปลี่ยน pH เมื่อเติม acid/base เล็กน้อย",
        "formula": "pH=pK_a+\\log\\frac{[A^-]}{[HA]}",
        "warning": "อย่าใช้สูตรบัฟเฟอร์กับ strong acid + strong base — ต้องเป็น weak/conjugate pair",
        "examples": [
          {
            "title": "pH บัฟเฟอร์ equimolar",
            "level": "Basic",
            "tip": "เมื่อ $[A^-]=[HA]$ → $pH=pK_a$",
            "problem": "$CH_3COOH$ 0.10 M + $CH_3COONa$ 0.10 M ($pK_a=4.74$) หา pH",
            "steps": [
              "$[A^-]/[HA]=1$ → $\\log(1)=0$",
              "$pH=pK_a=4.74$"
            ],
            "answer": "$pH=4.74$"
          },
          {
            "title": "เติม strong base ลงบัฟเฟอร์",
            "level": "Medium",
            "tip": "OH⁻ ทำปฏิกิริยากับ HA → ลด [HA] เพิ่ม [A⁻]",
            "problem": "บัฟเฟอร์ 1 L (0.10 M HA, 0.10 M A⁻) เติม NaOH 0.020 mol หา pH ใหม่ ($pK_a=4.74$)",
            "steps": [
              "$[HA]=0.08$, $[A^-]=0.12$",
              "$pH=4.74+\\log(0.12/0.08)=4.74+0.176=4.92$"
            ],
            "answer": "$pH\\approx4.92$"
          }
        ],
        "practice": "บัฟเฟอร์ $NH_3$/$NH_4^+$ ($pK_a=9.25$) $[base]=0.20$, $[acid]=0.10$ หา pH",
        "derivation": "จาก $K_a=[H^+][A^-]/[HA]$ จัด log ได้ Henderson-Hasselbalch"
      }
    ]
  },
  {
    "id": "nuclear-chemistry",
    "title": "Nuclear Chemistry",
    "description": "",
    "sections": [
      {
        "id": "nuclear-basics",
        "title": "Radioactivity and Nuclear Reactions",
        "source": "Chemistry: The Central Science 12th ed., Ch 21.1–21.3, p.850–875",
        "concept": "นิวเคลียสไม่เสถียรสลายรังสี: $\\alpha$ (He²⁺), $\\beta^-$ (electron), $\\beta^+$ (positron), $\\gamma$ (photon) half-life $t_{1/2}$: เศษที่เหลือ $=N_0/2^n$ หลัง $n$ half-lives การสมดุลนิวเคลียร์: $N/Z$ ใกล้ 1 สำหรับ light elements",
        "formula": "N=N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}},\\quad \\Delta E=\\Delta mc^2",
        "warning": "สมการนิวเคลียร์ต้องสมดุล mass number และ atomic number — ตรวจ charge และ nucleon number",
        "examples": [
          {
            "title": "เขียนสมการ alpha decay",
            "level": "Basic",
            "tip": "alpha = $^4_2He$ — mass number ลด 4, atomic number ลด 2",
            "problem": "เขียนสมการ: $^{226}_{88}Ra$ สลาย alpha",
            "steps": [
              "$^{226}_{88}Ra \\to ^{222}_{86}Rn + ^4_2He$",
              "ตรวจ: 226=222+4, 88=86+2 ✓"
            ],
            "answer": "$^{226}Ra \\to ^{222}Rn + ^4He$"
          },
          {
            "title": "Half-life calculation",
            "level": "Medium",
            "tip": "ใช้ $N/N_0=(1/2)^{t/t_{1/2}}$",
            "problem": "I-131 มี $t_{1/2}=8.0\\,days$ ตัวอย่างเริ่ม $80\\,mg$ หลัง 24 days เหลือเท่าไร",
            "steps": [
              "$t/t_{1/2}=24/8=3$ half-lives",
              "$N=N_0(1/2)^3=80/8=10\\,mg$"
            ],
            "answer": "เหลือ $10\\,mg$"
          }
        ],
        "practice": "C-14 ($t_{1/2}=5730\\,yr$) ในตัวอย่างโบราณมี $N/N_0=0.125$ หาอายุของตัวอย่าง"
      }
    ]
  }
]
};
