import { ex, sec } from "./helpers.mjs";

export default {
  "chemistry/ideal-gas-law": sec(
    "กฎก๊าซอุดมคติ $PV=nRT$ เชื่อมความสัมพันธ์ระหว่าง $P$, $V$, $n$, $T$ ที่ STP ($0°C$, $1\\,atm$): $1\\,mol$ ก๊าซมี $V=22.4\\,L$ ก๊าซจริงใกล้ ideal เมื่อ $P$ ต่ำและ $T$ สูง ใช้ $R=0.0821\\,L\\cdot atm/mol\\cdot K$ หรือ $8.314\\,J/mol\\cdot K$",
    "PV=nRT",
    {
      warning: "อุณหภูมิต้องเป็น Kelvin เสมอ — แปลง °C ด้วย $T(K)=T(°C)+273.15$ และตรวจหน่วย $R$ ให้ตรงกับ $P$, $V$",
      examples: [
        ex(
          "หาจำนวน mol จาก P, V, T",
          "Basic",
          "ใช้ $n=PV/(RT)$",
          "ก๊าซ $P=1.5\\,atm$, $V=4.0\\,L$, $T=300\\,K$ หา $n$",
          [
            "$n=PV/(RT)=1.5(4.0)/(0.0821)(300)$",
            "$n=6.0/24.63\\approx0.24\\,mol$",
          ],
          "$n\\approx0.24\\,mol$"
        ),
        ex(
          "หาความดันหลังเปลี่ยน T",
          "Medium",
          "ถ้า $n$, $V$ คงที่ → $P\\propto T$",
          "ถัง $O_2$ $n=0.50\\,mol$ ใน $V=10\\,L$ ที่ $27°C$ หา $P$ แล้วหา $P$ ใหม่ที่ $127°C$",
          [
            "$T_1=300\\,K$: $P_1=nRT/V=0.50(0.0821)(300)/10=1.23\\,atm$",
            "$T_2=400\\,K$: $P_2=P_1(T_2/T_1)=1.23(400/300)=1.64\\,atm$",
          ],
          "$P_1\\approx1.2\\,atm$, $P_2\\approx1.6\\,atm$"
        ),
      ],
      practice: "ก๊าซ $2.0\\,L$ ที่ $STP$ ถูกอุ่นเป็น $100°C$ ในภาชนะปิด หา $P$ สุดท้าย",
    }
  ),

  "chemistry/gas-kinetic-theory": sec(
    "ทฤษฎีจลน์โมเลกุล: อนุภาคก๊าซเคลื่อนที่สุ่ม สร้างความดันจากการชนผนัง ความเร็ว RMS $v_{rms}=\\sqrt{3RT/M}$ กฎ Graham: อัตราการแพร่ $\\propto 1/\\sqrt{M}$ ก๊าซเบา diffuses เร็วกว่า",
    "v_{rms}=\\sqrt{\\frac{3RT}{M}},\\quad \\frac{r_1}{r_2}=\\sqrt{\\frac{M_2}{M_1}}",
    {
      warning: "M ต้องเป็น molar mass ในหน่วย kg/mol เมื่อใช้ $R=8.314$ — หรือ g/mol กับ $R=8.314\\times10^3\\,J/kmol\\cdot K$",
      examples: [
        ex(
          "ความเร็ว RMS ของ H₂",
          "Basic",
          "ใช้ $v_{rms}=\\sqrt{3RT/M}$",
          "หา $v_{rms}$ ของ $H_2$ ($M=2.0\\,g/mol$) ที่ $300\\,K$",
          [
            "$M=0.0020\\,kg/mol$",
            "$v_{rms}=\\sqrt{3(8.314)(300)/0.0020}=\\sqrt{3.74\\times10^6}$",
            "$v_{rms}\\approx1930\\,m/s$",
          ],
          "$v_{rms}\\approx1900\\,m/s$"
        ),
        ex(
          "Graham's law — เปรียบเทียบ diffusion",
          "Medium",
          "ก๊าซเบากว่า → แพร่เร็วกว่า",
          "$CH_4$ ($M=16$) กับ $O_2$ ($M=32$) ก๊าซใด diffuse เร็วกว่า และเร็วกว่ากี่เท่า",
          [
            "$r_{CH_4}/r_{O_2}=\\sqrt{M_{O_2}/M_{CH_4}}=\\sqrt{32/16}=\\sqrt{2}$",
            "$CH_4$ เร็วกว่า $\\sqrt{2}\\approx1.41$ เท่า",
          ],
          "$CH_4$ เร็วกว่า $\\sqrt{2}$ เท่า"
        ),
      ],
      practice: "หา $v_{rms}$ ของ $N_2$ ($M=28\\,g/mol$) ที่ $400\\,K$ และเปรียบเทียบกับ $He$ ($M=4\\,g/mol$) ที่ $T$ เดียวกัน",
    }
  ),

  "chemistry/intermolecular-forces": sec(
    "แรงระหว่างโมเลกุลกำหนดจุดเดือดและความหนืด: London dispersion (ทุกโมเลกุล), dipole-dipole (โมเลกุล polar), hydrogen bonding (H กับ F, O, N) แรงยิ่งแรง → จุดเดือดสูง ความดันไอต่ำ",
    "\\text{LDF} < \\text{dipole-dipole} < \\text{H-bond}",
    {
      warning: "Hydrogen bond ต้องมี H ติดกับ F, O หรือ N โดยตรง — ไม่ใช่ทุกพันธะที่มี H",
      examples: [
        ex(
          "เปรียบเทียบจุดเดือด",
          "Basic",
          "แรงระหว่างโมเลกุลแรงขึ้น → ต้องใช้พลังงานมากขึ้นในการแยก",
          "เรียงจุดเดือด: $CH_4$, $CH_3OH$, $CH_3CH_3$",
          [
            "$CH_4$: LDF เท่านั้น → จุดเดือดต่ำสุด ($-161°C$)",
            "$CH_3CH_3$: LDF มากกว่า $CH_4$ → สูงกว่าเล็กน้อย",
            "$CH_3OH$: H-bond → สูงสุด ($65°C$)",
          ],
          "$CH_4 < C_2H_6 < CH_3OH$"
        ),
        ex(
          "ทำนายแรงระหว่างโมเลกุล",
          "Medium",
          "ดู polarity และโอกาส H-bond",
          "ระบุแรงหลักใน $H_2O$, $CO_2$, $HF$",
          [
            "$H_2O$: polar + H-bond (O-H···O)",
            "$CO_2$: polar bond แต่ linear → dipole cancel → LDF เท่านั้น",
            "$HF$: polar + H-bond (H-F···F) แรงมาก",
          ],
          "$H_2O$, $HF$: H-bond; $CO_2$: LDF"
        ),
      ],
      practice: "อธิบายทำไม $NH_3$ ($bp=-33°C$) มีจุดเดือดสูงกว่า $PH_3$ ($bp=-87°C$) แม้ M ใกล้เคียงกัน",
    }
  ),

  "chemistry/solid-structures": sec(
    "โครงสร้างผลึก: metallic (electron sea), ionic (ions ใน lattice), covalent network (diamond, SiO₂), molecular (ice, dry ice) แต่ละแบบมีคุณสมบัติต่างกัน — conductivity, hardness, melting point",
    "\\text{coordination number} = \\text{จำนวน neighbors รอบอนุภาค}",
    {
      warning: "อย่าสับสน molecular solid (intermolecular อ่อน) กับ covalent network (พันธะแข็งทั้ง crystal)",
      examples: [
        ex(
          "จำแนกประเภทของ solid",
          "Basic",
          "ดูว่าอนุภาค building block คืออะไร",
          "จำแนก: NaCl, diamond, $I_2$, Fe",
          [
            "NaCl: ionic (Na⁺, Cl⁻ lattice)",
            "diamond: covalent network (C-C tetrahedral)",
            "$I_2$: molecular (London forces ระหว่าง $I_2$)",
            "Fe: metallic (electron sea)",
          ],
          "ionic, covalent network, molecular, metallic"
        ),
        ex(
          "Unit cell — จำนวน atom",
          "Medium",
          "นับ atom ใน unit cell โดยใช้ fraction ที่อยู่ใน cell",
          "FCC (face-centered cubic) มี atom ที่มุมและหน้า หาจำนวน atom ต่อ unit cell",
          [
            "8 มุม × 1/8 = 1 atom",
            "6 หน้า × 1/2 = 3 atoms",
            "รวม 4 atoms ต่อ unit cell",
          ],
          "4 atoms/unit cell (FCC)"
        ),
      ],
      practice: "เปรียบเทียบ diamond กับ graphite: ทั้งคู่เป็น carbon แต่ทำไม diamond แข็งกว่ามาก",
    }
  ),

  "chemistry/rate-laws": sec(
    "rate law แสดงความสัมพันธ์ rate กับความเข้มข้น: $rate=k[A]^m[B]^n$ โดย $m,n$ คือ order (ได้จาก experiment ไม่ใช่จากสมการดุล) overall order = $m+n$ หน่วยของ $k$ ขึ้นกับ order รวม",
    "rate=k[A]^m[B]^n",
    {
      warning: "order ไม่จำเป็นต้องเท่ากับ coefficient ในสมการดุล — ต้องหาจากข้อมูลทดลองเท่านั้น",
      examples: [
        ex(
          "หา order จากข้อมูลทดลอง",
          "Basic",
          "เปรียบเทียบ rate เมื่อ [A] เปลี่ยน 2 เท่า",
          "ถ้า [A] เพิ่ม 2 เท่า แล้ว rate เพิ่ม 4 เท่า order ของ A คือเท่าไร",
          [
            "$rate\\propto[A]^m$",
            "$4=(2)^m$ → $m=2$",
            "second order ใน A",
          ],
          "order = 2"
        ),
        ex(
          "คำนวณ rate จาก rate law",
          "Medium",
          "แทนค่า [A], [B] ลงใน rate law",
          "$rate=k[A]^2[B]$ โดย $k=0.50\\,M^{-2}s^{-1}$, $[A]=0.20\\,M$, $[B]=0.30\\,M$ หา rate",
          [
            "$rate=0.50(0.20)^2(0.30)$",
            "$rate=0.50(0.04)(0.30)=0.006\\,M/s$",
          ],
          "$rate=0.006\\,M/s$"
        ),
      ],
      practice: "ปฏิกิริยา $2NO+O_2\\to2NO_2$ มี rate law $rate=k[NO]^2[O_2]$ ถ้า [NO] และ [O₂] เพิ่ม 2 เท่า rate เปลี่ยนกี่เท่า",
    }
  ),

  "chemistry/activation-energy": sec(
    "พลังงานกระตุ้น $E_a$ คือ energy barrier ที่ต้องมีก่อนปฏิกิริยา สมการ Arrhenius: $k=Ae^{-E_a/RT}$ หรือ $\\ln k=-E_a/(RT)+\\ln A$ plot $\\ln k$ vs $1/T$ ได้ slope $=-E_a/R$",
    "k=Ae^{-E_a/RT},\\quad \\ln k=-\\frac{E_a}{RT}+\\ln A",
    {
      warning: "ใช้ $R=8.314\\,J/mol\\cdot K$ และ $E_a$ ใน J/mol — อย่าใช้ °C ใน Arrhenius",
      examples: [
        ex(
          "หา k จาก E_a",
          "Basic",
          "ใช้ $k=Ae^{-E_a/RT}$",
          "ถ้า $A=1.0\\times10^{12}\\,s^{-1}$, $E_a=50\\,kJ/mol$, $T=300\\,K$ หา $k$",
          [
            "$E_a=50000\\,J/mol$",
            "$k=10^{12}\\exp(-50000/(8.314)(300))$",
            "$k=10^{12}\\exp(-20.05)\\approx2.0\\times10^3\\,s^{-1}$",
          ],
          "$k\\approx2\\times10^3\\,s^{-1}$"
        ),
        ex(
          "Arrhenius plot — หา E_a",
          "Medium",
          "slope ของ $\\ln k$ vs $1/T$ คือ $-E_a/R$",
          "slope ของ Arrhenius plot = $-6000\\,K$ หา $E_a$",
          [
            "$-E_a/R=-6000$",
            "$E_a=6000(8.314)=49900\\,J/mol$",
            "$E_a\\approx50\\,kJ/mol$",
          ],
          "$E_a\\approx50\\,kJ/mol$"
        ),
      ],
      practice: "ปฏิกิริยามี $k=0.020\\,s^{-1}$ ที่ $300\\,K$ และ $k=0.080\\,s^{-1}$ ที่ $320\\,K$ หา $E_a$",
    }
  ),

  "chemistry/nuclear-basics": sec(
    "นิวเคลียสไม่เสถียรสลายรังสี: $\\alpha$ (He²⁺), $\\beta^-$ (electron), $\\beta^+$ (positron), $\\gamma$ (photon) half-life $t_{1/2}$: เศษที่เหลือ $=N_0/2^n$ หลัง $n$ half-lives การสมดุลนิวเคลียร์: $N/Z$ ใกล้ 1 สำหรับ light elements",
    "N=N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}},\\quad \\Delta E=\\Delta mc^2",
    {
      warning: "สมการนิวเคลียร์ต้องสมดุล mass number และ atomic number — ตรวจ charge และ nucleon number",
      examples: [
        ex(
          "เขียนสมการ alpha decay",
          "Basic",
          "alpha = $^4_2He$ — mass number ลด 4, atomic number ลด 2",
          "เขียนสมการ: $^{226}_{88}Ra$ สลาย alpha",
          [
            "$^{226}_{88}Ra \\to ^{222}_{86}Rn + ^4_2He$",
            "ตรวจ: 226=222+4, 88=86+2 ✓",
          ],
          "$^{226}Ra \\to ^{222}Rn + ^4He$"
        ),
        ex(
          "Half-life calculation",
          "Medium",
          "ใช้ $N/N_0=(1/2)^{t/t_{1/2}}$",
          "I-131 มี $t_{1/2}=8.0\\,days$ ตัวอย่างเริ่ม $80\\,mg$ หลัง 24 days เหลือเท่าไร",
          [
            "$t/t_{1/2}=24/8=3$ half-lives",
            "$N=N_0(1/2)^3=80/8=10\\,mg$",
          ],
          "เหลือ $10\\,mg$"
        ),
      ],
      practice: "C-14 ($t_{1/2}=5730\\,yr$) ในตัวอย่างโบราณมี $N/N_0=0.125$ หาอายุของตัวอย่าง",
    }
  ),
};
