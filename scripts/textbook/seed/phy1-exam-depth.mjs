import { ex, sec } from "./helpers.mjs";

/** Phy1 Final-depth sections (Serway Ch 14–22) */
export default {
  "physics1/pv-thermo-cycle": sec(
    "PV diagram: งาน $W=\\oint P\\,dV$ (พื้นที่รอบ loop) สำหรับ cyclic process $\\Delta U=0$ ดังนั้น $Q_{net}=W$ กระบวนการ isobaric $W=P\\Delta V$, isochoric $W=0$, adiabatic $Q=0$",
    "\\Delta U=Q-W,\\quad W=\\oint P\\,dV",
    {
      graph: "energy",
      warning: "Convention: $W>0$ เมื่อระบบขยาย — ตาราง Q, W, $\\Delta U$ ต้องสอดคล้องกับทิศ process",
      examples: [
        ex(
          "ตาราง cyclic A→B→C→D",
          "Hard",
          "ใช้ $\\Delta U=0$ รอบ cycle ตรวจ Q รวม",
          "ideal gas ทำ cycle: A→B isobaric $P=0.8\\,atm$, $V:2\\to8\\,L$; B→C adiabatic; C→D isobaric $P=0.4\\,atm$, $V:8\\to2\\,L$; D→A isochoric หา $W_{cycle}$ ถ้า $W_{AB}=480\\,J$",
          [
            "$W_{BC}=0$ (adiabatic reversible approx หรือให้ในโจทย์)",
            "$W_{CD}=P\\Delta V=0.4\\,atm\\times(-6\\,L)$ (negative — compression)",
            "รวม $W_{cycle}=$ พื้นที่ใน PV diagram",
          ],
          "ใช้พื้นที่ loop หรือผลรวม $W_i$"
        ),
        ex(
          "Isobaric + adiabatic",
          "Medium",
          "แยกคำนวณแต่ละ leg",
          "A: $2\\,L$, $0.8\\,atm$ → B: adiabatic ไป $0.4\\,atm$, $8\\,L$ หา $W_{AB}$ (isobaric)",
          ["$W_{AB}=P\\Delta V=0.8\\,atm\\times6\\,L=4.8\\,L\\cdot atm\\approx486\\,J$"],
          "$W_{AB}\\approx486\\,J$"
        ),
      ],
      practice: "วาด PV cycle แล้วเติมตาราง Q, $\\Delta U$, W สำหรับ isothermal expansion $n=1\\,mol$, $T=300\\,K$, $V:1\\to2\\,L$",
    }
  ),

  "physics1/maxwell-mean-free-path": sec(
    "Maxwell-Boltzmann distribution $f(v)\\propto v^2 e^{-mv^2/(2k_BT)}$ — $v_{rms}$, $v_{avg}$, most probable speed $v_p=\\sqrt{2k_BT/m}$ mean free path $\\lambda=1/(\\sqrt2\\,\\pi d^2 n/V)$",
    "v_{rms}=\\sqrt{3k_BT/m},\\quad \\lambda=\\frac{1}{\\sqrt2\\,\\pi d^2 n/V}",
    {
      warning: "ใช้ $n/V$ = number density (m⁻³) ไม่ใช่ moles — diameter $d$ ของ molecule",
      examples: [
        ex(
          "Mean free path",
          "Hard",
          "ใช้ $\\lambda=1/(\\sqrt2\\pi d^2 N/V)$",
          "H₂ $d=2.0\\times10^{-10}\\,m$, $N/V=9.46\\times10^{25}\\,m^{-3}$ หา $\\lambda$",
          [
            "$\\lambda=1/(\\sqrt2\\,\\pi(2\\times10^{-10})^2(9.46\\times10^{25}))$",
            "$\\lambda\\approx1.2\\times10^{-7}\\,m=120\\,nm$",
          ],
          "$\\lambda\\approx120\\,nm$"
        ),
        ex(
          "Maxwell — vrms vs vp",
          "Medium",
          "$v_p=\\sqrt{2RT/M}$, $v_{rms}=\\sqrt{3RT/M}$",
          "N₂ $M=28\\,g/mol$ ที่ $400\\,K$ หา $v_p$ และ $v_{rms}$",
          [
            "$v_p=\\sqrt{2(8.314)(400)/0.028}\\approx490\\,m/s$",
            "$v_{rms}=\\sqrt{3(8.314)(400)/0.028}\\approx597\\,m/s$",
          ],
          "$v_p\\approx490\\,m/s$, $v_{rms}\\approx597\\,m/s$"
        ),
      ],
      practice: "He $M=4\\,g/mol$ ที่ $300\\,K$ หา $v_{rms}$ และเปรียบเทียบ $v_p$",
    }
  ),

  "physics1/manometer": sec(
    "Manometer / multi-fluid column: $P_{bottom}=P_{top}+\\rho gh$ (same horizontal level same pressure) เปรียบเทียบ $P_A$, $P_B$ จากความสูงคอลัมน์ของ fluid หลายชนิด",
    "P=P_0+\\rho gh",
    {
      warning: "จุดเดียวกันใน fluid continuous → ความดันเท่ากัน — ใช้ $\\rho$ ของ fluid ในแต่ละคอลัมน์",
      examples: [
        ex(
          "U-tube manometer",
          "Medium",
          "ความต่างระดับ → $\\Delta P=\\rho g\\Delta h$",
          "U-tube ใส่น้ำ ($\\rho=1000\\,kg/m^3$) ด้านหนึ่งต่อ gas อีกด้านเปิดอากาศ ระดับต่าง $h=12\\,cm$ หา gauge pressure ของ gas",
          ["$P_{gas}=P_{atm}+\\rho gh=101325+1000(9.8)(0.12)\\approx102501\\,Pa$"],
          "$P_{gas}\\approx102.5\\,kPa$"
        ),
        ex(
          "สอง fluid ในท่อ U",
          "Hard",
          "แต่ละ side ใช้ $\\rho$ ต่างกัน",
          "ท่อ U มีน้ำ ($\\rho_w$) และน้ำมัน ($\\rho_o=800$) ความสูงคอลัมน์ oil $h_o=5\\,cm$ น้ำ $h_w=3\\,cm$ หา $P_{oil side}-P_{water side}$",
          [
            "ที่ interface: $P+\\rho_w g h_w = P'+\\rho_o g h_o$",
            "แก้ตาม geometry ของโจทย์",
          ],
          "ใช้ hydrostatic balance"
        ),
      ],
      practice: "Mercury manometer $\\Delta h=20\\,cm$ หา gauge pressure ($\\rho_{Hg}=13600\\,kg/m^3$)",
    }
  ),

  "physics1/doppler-effect": sec(
    "Doppler effect: $f'=\\dfrac{v\\pm v_o}{v\\mp v_s}f$ — บวก/ลบตามทิศ relative motion; สำหรับ source และ observer เคลื่อนที่บนเส้นตรง",
    "f'=\\frac{v\\pm v_o}{v\\mp v_s}f",
    {
      warning: "เข้าหากัน → $f$ สูงขึ้น; ถอยห่าง → $f$ ต่ำลง — ตรวจเครื่องหมายทั้ง $v_o$ และ $v_s$",
      examples: [
        ex(
          "Source เข้าใกล้",
          "Basic",
          "ใช้ $f'=(v/(v-v_s))f$",
          "รถ $v_s=30\\,m/s$ บีบแตร $600\\,Hz$ เข้าหาผู้ยืนนิ่ง ($v=340\\,m/s$) หา $f'$",
          ["$f'=(340/(340-30))\\times600\\approx652\\,Hz$"],
          "$f'\\approx652\\,Hz$"
        ),
        ex(
          "Observer เคลื่อนที่",
          "Medium",
          "ทั้ง source และ observer",
          "source $500\\,Hz$ หยุดนิ่ง observer วิ่งเข้าหา $20\\,m/s$ หา $f'$",
          ["$f'=((340+20)/340)\\times500\\approx529\\,Hz$"],
          "$f'\\approx529\\,Hz$"
        ),
      ],
      practice: "Ambulance $700\\,Hz$ วิ่งออก $25\\,m/s$ หา $f'$ ที่ผู้ฟังนิ่ง",
    }
  ),

  "physics1/collision-spring-shm": sec(
    "Composite: collision แล้วติด spring → SHM — ใช้ momentum conservation หา $v$ หลังชน แล้ว $E=\\frac12 kA^2=\\frac12 mv^2$ หรือ $T=2\\pi\\sqrt{m/k}$",
    "p_i=p_f,\\quad \\frac12 mv^2=\\frac12 kA^2,\\quad T=2\\pi\\sqrt{m/k}",
    {
      examples: [
        ex(
          "ชนแล้ว oscillate",
          "Hard",
          "momentum → energy → amplitude",
          "$m_1=2\\,kg$ วิ่ง $1\\,m/s$ ชน $m_2=3\\,kg$ นิ่ง ติด spring $k=25\\,N/m$ หา $A$ สูงสุด (stick together)",
          [
            "$v_f=(2)(1)/(2+3)=0.4\\,m/s$",
            "$A=v_f\\sqrt{m/k}=0.4\\sqrt{5/25}=0.4\\times0.447\\approx0.18\\,m$",
          ],
          "$A\\approx18\\,cm$"
        ),
        ex(
          "Period หลังชน",
          "Medium",
            "$T=2\\pi\\sqrt{M_{tot}/k}$",
          "หลังชนติดกัน $M=5\\,kg$, $k=25\\,N/m$ หา $T$",
          ["$T=2\\pi\\sqrt{5/25}=2\\pi\\sqrt{0.2}\\approx2.8\\,s$"],
          "$T\\approx2.8\\,s$"
        ),
      ],
      practice: "$m=1\\,kg$ ชน spring $k=100\\,N/m$ ด้วย $v=2\\,m/s$ (inelastic stick) หา $x_{max}$",
    }
  ),
};
