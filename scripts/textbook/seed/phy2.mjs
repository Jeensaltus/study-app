import { ex, sec } from "./helpers.mjs";
import phy2ExamDepth from "./phy2-exam-depth.mjs";

export default {
  "physics2/ac-circuits": sec(
    "วงจร AC มีกระแสและแรงดันแกว่งตามเวลา $v(t)=V_{max}\\sin(\\omega t)$ อิมพีแดนซ์ $Z=\\sqrt{R^2+(X_L-X_C)^2}$ โดย $X_L=\\omega L$ และ $X_C=1/(\\omega C)$ มุมเฟส $\\phi=\\arctan[(X_L-X_C)/R]$ ที่ resonance $X_L=X_C$ ทำให้ $Z=R$ และ $I$ สูงสุด",
    "Z=\\sqrt{R^2+(X_L-X_C)^2},\\quad X_L=\\omega L,\\quad X_C=\\frac{1}{\\omega C}",
    {
      warning: "ห้ามบวก $V_R$, $V_L$, $V_C$ แบบตัวเลขตรง ๆ — ต้องใช้ phasor diagram หรือ RMS values กับ $Z$",
      examples: [
        ex(
          "หา impedance และ I_rms",
          "Basic",
          "คำนวณ $X_L-X_C$ ก่อน แล้วใช้สูตร $Z$",
          "วงจร RLC ต่ออนุกรม: $R=40\\,\\Omega$, $X_L=60\\,\\Omega$, $X_C=20\\,\\Omega$, $V_{rms}=120\\,V$ หา $Z$ และ $I_{rms}$",
          [
            "$Z=\\sqrt{40^2+(60-20)^2}=\\sqrt{1600+1600}=\\sqrt{3200}\\approx56.6\\,\\Omega$",
            "$I_{rms}=120/56.6\\approx2.12\\,A$",
          ],
          "$Z\\approx56.6\\,\\Omega$, $I_{rms}\\approx2.1\\,A$"
        ),
        ex(
          "Resonance frequency",
          "Medium",
          "ที่ resonance $X_L=X_C$ → $\\omega L=1/(\\omega C)$",
          "วงจร $L=0.20\\,H$, $C=50\\,\\mu F$ หาความถี่ resonance $f_0$",
          [
            "$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{0.20\\times50\\times10^{-6}}$",
            "$\\omega_0=1/\\sqrt{10^{-5}}=316\\,rad/s$",
            "$f_0=\\omega_0/(2\\pi)\\approx50\\,Hz$",
          ],
          "$f_0\\approx50\\,Hz$"
        ),
      ],
      practice: "วงจร $R=30\\,\\Omega$, $L=0.10\\,H$, $C=100\\,\\mu F$ ต่อ $V_{rms}=100\\,V$ ที่ $f=60\\,Hz$ หา $Z$, $I_{rms}$ และ $\\phi$",
    }
  ),

  "physics2/rlc-series": sec(
    "วงจร RLC ต่ออนุกรม: ใช้ phasor diagram รวม $V_R$, $V_L$, $V_C$ อิมพีแดนซ์ $Z=\\sqrt{R^2+(X_L-X_C)^2}$ โดย $X_L=\\omega L$, $X_C=1/(\\omega C)$ มุมเฟส $\\phi=\\arctan[(X_L-X_C)/R]$",
    "Z=\\sqrt{R^2+(X_L-X_C)^2},\\quad I_{rms}=V_{rms}/Z",
    {
      derivation: "Phasor: $V_R$ อยู่เฟสเดียวกับ I, $V_L$ นำ 90°, $V_C$ ช้า 90° → $V=\\sqrt{V_R^2+(V_L-V_C)^2}$, หาร I ได้ Z",
      warning: "ห้ามบวก $V_R+V_L+V_C$ แบบตัวเลข — ต้องบวกแบบ phasor เสมอ",
      examples: [
        ex(
          "หา Z และ I_rms",
          "Basic",
          "คำนวณ $X_L-X_C$ ก่อน",
          "R=30 Ω, $X_L=60$ Ω, $X_C=20$ Ω, $V_{rms}=100$ V หา Z และ $I_{rms}$",
          ["$Z=\\sqrt{30^2+40^2}=50\\,\\Omega$", "$I_{rms}=100/50=2\\,A$"],
          "$Z=50\\,\\Omega$, $I_{rms}=2\\,A$"
        ),
        ex(
          "แรงดัน $V_L$ และมุมเฟส",
          "Medium",
          "$V_L=I_{rms}X_L$",
          "จากข้อก่อน หา $V_L$ และ $\\phi$",
          [
            "$V_L=2(60)=120\\,V$",
            "$\\phi=\\arctan(40/30)\\approx53.1°$",
          ],
          "$V_L=120\\,V$, $\\phi\\approx53°$"
        ),
      ],
      practice: "RLC: R=40 Ω, L=0.20 H, C=50 μF, V=120 V ที่ f=50 Hz หา Z",
    }
  ),

  "physics2/nuclear-physics": sec(
    "นิวเคลียสประกอบด้วย nucleon (proton + neutron) พลังงาน binding energy $E_b=\\Delta mc^2$ คือพลังงานที่ต้องใช้แยก nucleon การสลายรังสี: $\\alpha$ (He nucleus), $\\beta^\\pm$ (เปลี่ยน proton/neutron), $\\gamma$ (photon) กฎ half-life: $N=N_0(1/2)^{t/t_{1/2}}$",
    "E=\\Delta mc^2,\\quad N=N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}}",
    {
      warning: "ใช้ mass defect ในหน่วย u แล้วคูณ $931.5\\,MeV/u$ — อย่าลืมว่า $Q<0$ หมายถึง exothermic (ปล่อยพลังงาน)",
      examples: [
        ex(
          "Mass defect และ binding energy",
          "Basic",
          "หา $\\Delta m$ แล้วคูณ $c^2$",
          "$^4He$ มี mass $4.00260\\,u$; proton $1.00728\\,u$, neutron $1.00866\\,u$ หา binding energy",
          [
            "$\\Delta m=2(1.00728)+2(1.00866)-4.00260=0.03028\\,u$",
            "$E_b=0.03028\\times931.5\\approx28.2\\,MeV$",
          ],
          "$E_b\\approx28\\,MeV$"
        ),
        ex(
          "Radioactive decay — half-life",
          "Medium",
          "ใช้ $N/N_0=(1/2)^{t/t_{1/2}}$",
          "C-14 มี $t_{1/2}=5730\\,yr$ ตัวอย่างมี $N/N_0=0.25$ หาอายุ",
          [
            "$0.25=(1/2)^{t/5730}=(1/2)^2$",
            "$t/5730=2$ → $t=11460\\,yr$",
          ],
          "$t\\approx11500\\,yr$"
        ),
      ],
      practice: "U-238 สลายเป็น Pb-206 ผ่านหลายขั้น ถ้า $t_{1/2}=4.5\\times10^9\\,yr$ หาเศษที่เหลือหลัง $9.0\\times10^9\\,yr$",
    }
  ),

  "physics2/special-relativity": sec(
    "ทฤษฎีสัมพัทธภาพพิเศษ: กฎฟิสิกส์เหมือนกันในทุก inertial frame ความเร็วแสง $c$ คือค่าสูงสุด time dilation $t=\\gamma t_0$ length contraction $L=L_0/\\gamma$ โดย $\\gamma=1/\\sqrt{1-v^2/c^2}$ พลังงาน-มวล $E=mc^2$",
    "t=\\gamma t_0,\\quad L=\\frac{L_0}{\\gamma},\\quad E=mc^2,\\quad \\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}",
    {
      warning: "Time dilation ทำให้เวลา 'ช้าลง' ใน frame ที่เคลื่อนที่ — อย่าสลับ $t$ กับ $t_0$ และใช้ $c=3.00\\times10^8\\,m/s$",
      examples: [
        ex(
          "Time dilation",
          "Basic",
          "หา $\\gamma$ ก่อน แล้วคูณ proper time",
          "นักบินเคลื่อนที่ $v=0.60c$ วัดเวลา $t_0=10\\,min$ ในเครื่อง หา $t$ ใน lab frame",
          [
            "$\\gamma=1/\\sqrt{1-0.36}=1/\\sqrt{0.64}=1.25$",
            "$t=\\gamma t_0=1.25(10)=12.5\\,min$",
          ],
          "$t=12.5\\,min$"
        ),
        ex(
          "Relativistic energy",
          "Medium",
          "ใช้ $E=\\gamma mc^2$ สำหรับ total energy",
          "อิเล็กตรอน ($m=9.11\\times10^{-31}\\,kg$) เร่งถึง $v=0.80c$ หา kinetic energy",
          [
            "$\\gamma=1/\\sqrt{1-0.64}=1/0.6\\approx1.667$",
            "$K=(\\gamma-1)mc^2=0.667(9.11\\times10^{-31})(9\\times10^{16})$",
            "$K\\approx5.47\\times10^{-14}\\,J\\approx0.34\\,MeV$",
          ],
          "$K\\approx0.34\\,MeV$"
        ),
      ],
      practice: "ยานอวกาศยาว $100\\,m$ ใน rest frame เคลื่อนที่ $v=0.90c$ หา $L$ ที่ observer บนพื้นดินเห็น",
    }
  ),
  ...phy2ExamDepth,
};
