import { ex, sec } from "./helpers.mjs";

/** Phase 1 Phy2 exam-proven sections (Serway depth) */
export default {
  "physics2/rl-dc-circuit": sec(
    "วงจร RL ต่ออนุกรม DC: เมื่อ $t=0$ สวิตช์ปิด กระแสเริ่มจากศูนย์และเพิ่มตาม $I(t)=\\frac{\\varepsilon}{R}(1-e^{-t/\\tau})$ โดย $\\tau=L/R$ แรงดันบนตัวเหนี่ยวนำ $V_L=L\\,dI/dt$ ลดลงเมื่อกระแสนิ่ง $I=\\varepsilon/R$",
    "I(t)=\\frac{\\varepsilon}{R}(1-e^{-t/\\tau}),\\quad \\tau=\\frac{L}{R}",
    {
      warning: "ที่ $t=0$ inductor เป็น open circuit ($I=0$) — อย่าใช้ $V=IR$ ทันที; ที่ $t\\to\\infty$ inductor เป็น short ($V_L=0$)",
      examples: [
        ex(
          "RL — หา I หลัง 1 ms",
          "Basic",
          "หา $\\tau=L/R$ แล้วแทน $t$",
          "วงจร $V=18\\,V$, $R=6\\,k\\Omega$, $L=0.5\\,H$ ปิดสวิตช์ที่ $t=0$ หา $I$ ที่ $t=1\\,ms$",
          [
            "$\\tau=L/R=0.5/(6\\times10^3)=8.33\\times10^{-5}\\,s$",
            "$I=\\dfrac{18}{6000}(1-e^{-0.001/8.33\\times10^{-5}})=0.003(1-e^{-12})\\approx3.0\\,mA$",
          ],
          "$I\\approx3.0\\,mA$ (เกือบนิ่ง)"
        ),
        ex(
          "RL — แรงดันบน L ที่ $t=0$",
          "Medium",
          "ที่ $t=0$: $V_L=V_{source}$ เพราะ $I=0$",
          "จากข้อก่อน หา $V_L$ ที่ $t=0$ และ $I$ ใน steady state",
          [
            "$t=0$: $V_L=18\\,V$",
            "Steady: $I=V/R=18/6000=3\\,mA$, $V_L=0$",
          ],
          "$V_L(0)=18\\,V$, $I_{ss}=3\\,mA$"
        ),
      ],
      practice: "RL: $V=12\\,V$, $R=4\\,k\\Omega$, $L=2\\,H$ หา $\\tau$ และ $I$ ที่ $t=\\tau$",
    }
  ),

  "physics2/motional-emf": sec(
    "Motional EMF: แท่งหรือสายตัดสนามแม่เหล็ก $\\mathcal{E}=Blv$ (B, L, v ตั้งฉากกัน) ถ้าเส้นทางโค้ง ใช้ $\\mathcal{E}=\\oint(\\vec v\\times\\vec B)\\cdot d\\vec l$ หรือ Faraday $\\mathcal{E}=-d\\Phi/dt$",
    "\\mathcal{E}=Blv,\\quad \\Phi_B=BA\\cos\\theta",
    {
      warning: "ทิศ $\\mathcal{E}$ จาก Lenz's law — กระแสที่เกิดต้านการเคลื่อนที่",
      examples: [
        ex(
          "Rod สไลด์บน rails",
          "Basic",
          "ใช้ $\\mathcal{E}=Blv$",
          "แท่งยาว $L=0.40\\,m$ เคลื่อนที่ $v=2.0\\,m/s$ ตั้งฉาก $B=0.50\\,T$ หา EMF",
          ["$\\mathcal{E}=Blv=0.50(0.40)(2.0)=0.40\\,V$"],
          "$\\mathcal{E}=0.40\\,V$"
        ),
        ex(
          "Faraday — พื้นที่เปลี่ยน",
          "Hard",
          "ใช้ $\\mathcal{E}=-d\\Phi/dt$ เมื่อ B คงที่",
          "ขดลวด $N=100$ พื้นที่ $A=0.02\\,m^2$ ใน $B=0.3\\,T$ หมุน $90°$ ใน $0.05\\,s$ หา $|\\mathcal{E}|$",
          [
            "$\\Delta\\Phi=BA(1-0)=0.3(0.02)=6\\times10^{-3}\\,Wb$",
            "$|\\mathcal{E}|=N\\dfrac{\\Delta\\Phi}{\\Delta t}=100(6\\times10^{-3}/0.05)=12\\,V$",
          ],
          "$|\\mathcal{E}|=12\\,V$"
        ),
      ],
      practice: "สาย $0.25\\,m$ แกว่ง $3\\,m/s$ ใน $B=0.8\\,T$ ตั้งฉาก หา motional EMF",
    }
  ),

  "physics2/poynting-vector": sec(
    "เวกเตอร์ Poynting $\\vec S=\\frac{1}{\\mu_0}\\vec E\\times\\vec B$ บอกการไหลของพลังงาน EM (W/m²) ค่าเฉลี่ย $S_{avg}=\\frac{1}{2\\mu_0}E_0B_0=\\frac{E_0^2}{2\\mu_0 c}$ สำหรับคลื่นเดินหน้า",
    "S_{avg}=\\frac{E_0^2}{2\\mu_0 c},\\quad I=S_{avg}",
    {
      warning: "$E$, $B$ ต้องเป็น amplitude ของคลื่น — ใช้ RMS ต้องแปลง $E_{rms}=E_0/\\sqrt{2}$",
      examples: [
        ex(
          "จาก E หา B และ Savg",
          "Medium",
          "$B_0=E_0/c$ แล้วใช้ $S_{avg}=E_0^2/(2\\mu_0 c)$",
          "คลื่น EM $E_0=150\\,V/m$ ในสุญญากาศ หา $B_0$ และ $S_{avg}$ ($c=3\\times10^8\\,m/s$, $\\mu_0=4\\pi\\times10^{-7}$)",
          [
            "$B_0=E_0/c=150/(3\\times10^8)=5\\times10^{-7}\\,T$",
            "$S_{avg}=E_0^2/(2\\mu_0 c)=150^2/(2\\cdot4\\pi\\times10^{-7}\\cdot3\\times10^8)\\approx29.8\\,W/m^2$",
          ],
          "$B_0=5\\times10^{-7}\\,T$, $S_{avg}\\approx30\\,W/m^2$"
        ),
        ex(
          "กำลังจาก intensity",
          "Basic",
          "$P=S_{avg}\\cdot A$",
          "แสง $S=8\\times10^4\\,W/m^2$ ตกพื้นที่ $A=2\\,mm^2$ หา $P$",
          ["$P=SA=8\\times10^4(2\\times10^{-6})=0.16\\,W$"],
          "$P=0.16\\,W$"
        ),
      ],
      practice: "ส่งเสริม $100\\,MHz$ กำลัง $100\\,W$ ผ่านท่อ $r=1\\,cm$ หา $S_{avg}$ เฉลี่ยบนพื้นที่หน้าตัด",
    }
  ),

  "physics2/thin-film": sec(
    "Thin film interference: สะท้อนที่หน้าตัดอาจมี phase shift $\\pi$ (จาก $n_{film}>n_{air}$) เงื่อนไข constructive: $2nt=(m+\\frac{1}{2})\\lambda$ (one shift) หรือ $2nt=m\\lambda$ (no shift)",
    "2nt=m\\lambda\\;\\text{(no phase shift)},\\quad 2nt=(m+\\tfrac12)\\lambda\\;\\text{(one shift)}",
    {
      warning: "ตรวจ phase shift ทุก interface — แว่นตา anti-reflective ใช้ $t=\\lambda/(4n)$",
      examples: [
        ex(
          "แว่นตา AR coating",
          "Medium",
          "หนัง $t=\\lambda/(4n)$ ทำลาย interference สะท้อน",
          "ชั้น $n=1.38$ บนแก้ว $n=1.50$ สำหรับ $\\lambda=550\\,nm$ หา $t$ ขั้นต่ำ",
          [
            "$t=\\lambda/(4n)=550/(4\\times1.38)\\approx99.6\\,nm$",
          ],
          "$t\\approx100\\,nm$"
        ),
        ex(
          "น้ำมันบนถนน",
          "Basic",
          "สีที่เห็นขึ้นกับ $t$ และ $\\lambda$",
          "ฟิล์ม $n=1.33$ หนา $t=380\\,nm$ ในอากาศ หา $\\lambda$ ที่ constructive (first order, one shift)",
          [
            "$2nt=(m+\\frac12)\\lambda$ → $\\lambda=2(1.33)(380)/1.5\\approx674\\,nm$ (red)",
          ],
          "$\\lambda\\approx674\\,nm$"
        ),
      ],
      practice: "ฟิล์ม $n=1.45$ หนา $120\\,nm$ หา $\\lambda$ ที่สะท้อนเสริม (m=1, one shift)",
    }
  ),

  "physics2/brewster-angle": sec(
    "มุม Brewster $\\theta_B=\\arctan(n_2/n_1)$ ที่แสงสะท้อเป็น s-polarized ตั้งฉากกับระนาบ — ใช้กับ anti-glare และ polarizer",
    "\\tan\\theta_B=\\frac{n_2}{n_1}",
    {
      examples: [
        ex(
          "Brewster — อากาศเข้าแก้ว",
          "Basic",
          "$\\theta_B=\\arctan(n)$",
          "แสงจากอากาศ ($n=1$) ตกแก้ว $n=1.52$ หา $\\theta_B$",
          ["$\\theta_B=\\arctan(1.52)\\approx56.7°$"],
          "$\\theta_B\\approx56.7°$"
        ),
        ex(
          "Brewster สองชั้น",
          "Hard",
          "แสงตก $n=1.5$ แล้วสะท้อที่ $45°$ ไปชั้น $n=1.7$ — ตรวจ Brewster",
          [
            "$\\theta_B(1.5)=\\arctan(1.5)\\approx56.3°$ — 45° ไม่ใช่ Brewster สำหรับชั้นแรก",
            "ใช้ Snell หา $\\theta_2$ แล้วตรวจ polarization ตามโจทย์",
          ],
          "45° ≠ $\\theta_B$ สำหรับ $n=1.5$"
        ),
      ],
      practice: "หา $\\theta_B$ ของน้ำ $n=1.33$ ต่ออากาศ",
    }
  ),

  "physics2/particle-in-box": sec(
    "Particle in 1D box: $\\psi_n(x)=\\sqrt{2/L}\\sin(n\\pi x/L)$, $E_n=\\frac{n^2h^2}{8mL^2}$ ความน่าจะ $|\\psi|^2$ — หา $P$ ในช่วงด้วยการ integrate $|\\psi|^2 dx$",
    "E_n=\\frac{n^2h^2}{8mL^2},\\quad \\int|\\psi|^2\\,dx=1",
    {
      warning: "Quantum number $n=1,2,3,\\ldots$ — ground state $n=1$ ไม่เป็นศูนย์",
      examples: [
        ex(
          "พลังงานระดับ n=1,4",
          "Basic",
          "$E_n\\propto n^2$",
          "electron ใน box $L=0.10\\,nm$ หา $E_1$ และ $E_4$ ($h=6.63\\times10^{-34}$, $m_e=9.11\\times10^{-31}$)",
          [
            "$E_1=h^2/(8mL^2)\\approx6.0\\times10^{-18}\\,J\\approx37.5\\,eV$",
            "$E_4=16E_1\\approx600\\,eV$",
          ],
          "$E_1\\approx38\\,eV$, $E_4\\approx600\\,eV$"
        ),
        ex(
          "Probability ในครึ่งแรก",
          "Hard",
          "$P=\\int_0^{L/2}|\\psi_1|^2 dx$",
          "ground state box $L$ หา $P$ ที่ $0<x<L/2$",
          [
            "$|\\psi_1|^2=(2/L)\\sin^2(\\pi x/L)$",
            "$P=\\int_0^{L/2}(2/L)\\sin^2(\\pi x/L)dx=\\frac12$ (symmetry)",
          ],
          "$P=0.5$"
        ),
      ],
      practice: "box $L=2\\,nm$ หา $\\Delta E=E_2-E_1$ ของ electron",
    }
  ),

  "physics2/nuclear-decay-q": sec(
    "พลังงาน Q ของ nuclear decay: $Q=(m_{initial}-m_{final})c^2$ ใช้ mass ใน u คูณ $931.5\\,MeV/u$ สำหรับ $\\alpha$, $\\beta$ decay เปรียบเทียบ $Q$ ของหลาย pathway",
    "Q=\\Delta mc^2,\\quad 1\\,u=931.5\\,MeV/c^2",
    {
      warning: "mass ของ electron ใน $\\beta$ decay มักรวมใน atomic mass table — ใช้ mass ของ neutral atom",
      examples: [
        ex(
          "Alpha decay Q-value",
          "Medium",
          "หา $\\Delta m$ แล้วคูณ 931.5",
          "$^{281}_{84}Po \\to\\,^{277}_{82}Pb + ^4_2He$  ให้ $m(Po)=281.008973\\,u$, $m(Pb)=277.004573\\,u$, $m(He)=4.002602\\,u$ หา $Q$",
          [
            "$\\Delta m=281.008973-277.004573-4.002602=-0.001798\\,u$",
            "Wait: $m_f=277.004573+4.002602=277.007175$",
            "$\\Delta m=281.008973-277.007175=0.001798\\,u$",
            "$Q=0.001798\\times931.5\\approx1.67\\,MeV$",
          ],
          "$Q\\approx1.67\\,MeV$"
        ),
        ex(
          "เปรียบเทียบ Q ของ decay modes",
          "Hard",
          "เลือก pathway ที่ $Q$ สูงสุด (exothermic มากสุด)",
          "isotope X สลาย $\\alpha$ หรือ $\\beta^-$ ให้ $Q_\\alpha=4.2\\,MeV$, $Q_\\beta=0.8\\,MeV$ — decay ไหน energetically favored?",
          ["$Q_\\alpha>Q_\\beta$ → $\\alpha$ ปล่อยพลังงานมากกว่า (ถ้า barrier อนุญาต)"],
          "$\\alpha$ decay มี $Q$ สูงกว่า"
        ),
      ],
      practice: "$^{235}U$ $\\alpha$ decay หา $Q$ ถ้า $\\Delta m=0.0059\\,u$",
    }
  ),
};
