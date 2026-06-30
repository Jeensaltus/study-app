import { ex, sec } from "./helpers.mjs";

export default {
  "calculus1/function-basics": sec(
    "ฟังก์ชัน $f$ คือกฎที่จับคู่แต่ละ $x$ ในสมาชิก (domain) กับค่า $f(x)$ ที่ไม่ซ้ำในช่วงค่า (range) การแทนแทนฟังก์ชันได้หลายรูปแบบ: สมการ กราฟ ตาราง หรือคำอธิบาย การเข้าใจ domain/range และพฤติกรรมกราฟเป็นพื้นฐานก่อนเข้าสู่ลิมิตและอนุพันธ์",
    "f: D \\to \\mathbb{R}, \\quad y=f(x)",
    {
      warning: "ฟังก์ชันต้องให้ค่าเดียวต่อหนึ่ง $x$ — กราฟที่ไม่ผ่าน Vertical Line Test ไม่ใช่ฟังก์ชัน",
      examples: [
        ex(
          "หา domain ของพหุนomial และเศษส่วน",
          "Basic",
          "เศษส่วน: ส่วนต้อง $\\neq 0$; รากคู่: ตัวตั้ง $\\ge 0$",
          "หา domain ของ $f(x)=\\dfrac{\\sqrt{x-1}}{x-3}$",
          [
            "จาก $\\sqrt{x-1}$ ต้องการ $x-1\\ge 0$ → $x\\ge 1$",
            "จากส่วน $x-3\\neq 0$ → $x\\neq 3$",
            "รวม: $[1,3)\\cup(3,\\infty)$",
          ],
          "$[1,3)\\cup(3,\\infty)$"
        ),
        ex(
          "การแปลงกราฟ — shift และ reflection",
          "Medium",
          "$y=f(x-h)+k$ เลื่อนกราฟ; $y=-f(x)$ พลิกขึ้นลง",
          "ถ้า $f(x)=x^2$ กราฟ $g(x)=-(x-2)^2+3$ มีจุดยอดที่ใด",
          [
            "รูปแบบ vertex form: $g(x)=-(x-2)^2+3$",
            "เลื่อนขวา 2 หน่วย ขึ้น 3 หน่วย และพลิกลง",
            "จุดยอด (vertex): $(2,3)$",
          ],
          "$(2,3)$"
        ),
      ],
      practice: "หา domain และ range ของ $f(x)=\\dfrac{1}{\\sqrt{4-x^2}}$ แล้วอธิบายว่าทำไม $x=\\pm2$ ไม่อยู่ใน domain",
    }
  ),

  "calculus1/exp-log-review": sec(
    "ฟังก์ชันเอกซ์โพเนนเชียล $f(x)=a^x$ ($a>0, a\\neq 1$) และลอการิทึม $f(x)=\\log_a x$ เป็นฟังก์ชันผกผันกัน กฎสำคัญ: $a^{x+y}=a^x a^y$, $\\log_a(xy)=\\log_a x+\\log_a y$ และ $\\ln e^x=x$ เมื่อ $x>0$ ใช้ทบทวนก่อนหาอนุพันธ์/อินทิกรัลของ $e^x$ และ $\\ln x$",
    "a^{x+y}=a^x a^y, \\quad \\log_a(xy)=\\log_a x+\\log_a y, \\quad \\ln e^x=x\\ (x>0)",
    {
      warning: "$\\log_a x$ นิยามเฉพาะเมื่อ $x>0$ และ $a>0, a\\neq 1$ — อย่าลืมตรวจ domain",
      examples: [
        ex(
          "แก้สมการเอกซ์โพเนนเชียล",
          "Basic",
          "จัดให้ฐานเท่ากัน แล้วเทียบ exponent",
          "แก้ $3^{2x-1}=27$",
          [
            "$27=3^3$",
            "$3^{2x-1}=3^3$ → $2x-1=3$",
            "$2x=4$ → $x=2$",
          ],
          "$x=2$"
        ),
        ex(
          "สมบัติลอการิทึมและเปลี่ยนฐาน",
          "Medium",
          "$\\log_a b=\\dfrac{\\ln b}{\\ln a}$ ใช้เปลี่ยนฐานได้",
          "แก้ $\\log_2(x+1)+\\log_2(x-1)=3$",
          [
            "รวม: $\\log_2[(x+1)(x-1)]=3$",
            "$(x+1)(x-1)=2^3=8$ → $x^2-1=8$ → $x^2=9$",
            "$x=\\pm3$ แต่ domain ต้องการ $x>1$ → $x=3$",
          ],
          "$x=3$"
        ),
      ],
      practice: "แก้ $e^{2x}-5e^x+6=0$ โดยตั้ง $u=e^x$ แล้วหา $x$ ทุกค่าที่เป็นไปได้",
    }
  ),

  "calculus1/limit-laws": sec(
    "ถ้า $\\lim_{x\\to a}f(x)=L$ และ $\\lim_{x\\to a}g(x)=M$ มีอยู่ กฎลิมิตบอกว่า ลิมิตของผลรวม ผลต่าง ผลคูณ ผลหาร และกำลัง คำนวณจากลิมิตของแต่ละส่วนได้ (ยกเว้นหารเมื่อ $M=0$) ใช้ร่วมกับการแทนค่าตรงเมื่อฟังก์ชันต่อเนื่อง",
    "\\lim_{x\\to a}[f(x)\\pm g(x)]=L\\pm M, \\quad \\lim_{x\\to a}[cf(x)]=cL, \\quad \\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\frac{L}{M}\\ (M\\neq 0)",
    {
      warning: "กฎลิมิตใช้ได้เมื่อลิมิตของแต่ละส่วนมีอยู่จริง — รูป $0/0$ หรือ $\\infty/\\infty$ ต้องจัดรูปก่อน",
      graph: "limit",
      examples: [
        ex(
          "ลิมิตพหุนomial ด้วยการแทนค่า",
          "Basic",
          "พหุนomial ต่อเนื่องทุกจุด → แทนค่าตรงได้",
          "หา $\\lim_{x\\to -1}(2x^3-x+4)$",
          [
            "พหุนomial ต่อเนื่อง → แทน $x=-1$",
            "$2(-1)^3-(-1)+4=-2+1+4=3$",
          ],
          "$3$"
        ),
        ex(
          "ลิมิตเศษส่วน — แยกตัวประกอบ",
          "Medium",
          "ได้ $0/0$ → แยกตัวประกอบแล้วตัดพจน์ร่วม",
          "หา $\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}$",
          [
            "แทน $x=2$: $\\dfrac{0}{0}$",
            "$x^2-4=(x-2)(x+2)$ → $\\dfrac{(x-2)(x+2)}{x-2}=x+2$ ($x\\neq 2$)",
            "$\\lim_{x\\to 2}(x+2)=4$",
          ],
          "$4$"
        ),
      ],
      practice: "หา $\\lim_{x\\to 3}\\dfrac{x^2-5x+6}{x^2-9}$ โดยแยกตัวประกอบทั้งเศษและส่วน",
    }
  ),

  "calculus1/limits-at-infinity": sec(
    "ลิมิตเมื่อ $x\\to\\pm\\infty$ บอกพฤติกรรมปลายกราฟ (end behavior) และ asymptote แนวนอน สำหรับ rational function ให้หารทุกพจน์ด้วย $x^n$ ที่ $n$ เป็นกำลังสูงสุดของส่วน ถ้ากำลังเศษ < ส่วน ลิมิต $=0$; ถ้าเท่ากัน ลิมิต = อัตราส่วนสัมประสิทธิ์นำ",
    "\\lim_{x\\to\\infty}\\frac{a_n x^n+\\cdots}{b_m x^m+\\cdots}=\\begin{cases}0 & n<m\\\\ a_n/b_m & n=m\\\\ \\pm\\infty & n>m\\end{cases}",
    {
      warning: "ระวังเครื่องหมายเมื่อ $x\\to-\\infty$ โดยเฉพาะกำลังคี่ — $(-x)^3=-x^3$",
      graph: "limit",
      examples: [
        ex(
          "Rational function — กำลังเท่ากัน",
          "Basic",
          "หารด้วย $x^2$ (กำลังสูงสุดส่วน)",
          "หา $\\lim_{x\\to\\infty}\\dfrac{3x^2-2x+1}{2x^2+x-5}$",
          [
            "หารทุกพจน์ด้วย $x^2$: $\\dfrac{3-2/x+1/x^2}{2+1/x-5/x^2}$",
            "เมื่อ $x\\to\\infty$: $\\dfrac{3-0+0}{2+0-0}=\\dfrac{3}{2}$",
          ],
          "$\\dfrac{3}{2}$"
        ),
        ex(
          "กำลังเศษน้อยกว่าส่วน",
          "Medium",
          "เศษโตช้ากว่า → horizontal asymptote $y=0$",
          "หา $\\lim_{x\\to\\infty}\\dfrac{5x+1}{x^2-3x}$",
          [
            "หารด้วย $x^2$: $\\dfrac{5/x+1/x^2}{1-3/x}$",
            "ตัวเศษ $\\to 0$, ส่วน $\\to 1$ → ลิมิต $=0$",
          ],
          "$0$"
        ),
      ],
      practice: "หา $\\lim_{x\\to-\\infty}\\dfrac{\\sqrt{4x^2+1}}{x+3}$ (ระวังเครื่องหมายของ $\\sqrt{x^2}=|x|$)",
    }
  ),

  "calculus1/squeeze-theorem": sec(
    "Squeeze Theorem: ถ้า $g(x)\\le f(x)\\le h(x)$ ใกล้ $a$ และ $\\lim g=\\lim h=L$ แล้ว $\\lim f=L$ ใช้พิสูจน์ลิมิตสำคัญ $\\lim_{x\\to 0}\\dfrac{\\sin x}{x}=1$ โดยบีบด้วย $\\cos x\\le\\dfrac{\\sin x}{x}\\le 1$",
    "\\text{If } g(x)\\le f(x)\\le h(x) \\text{ and } \\lim g=\\lim h=L, \\text{ then } \\lim f=L",
    {
      warning: "ต้องพิสูจน์ inequality จริงในช่วงใกล้ $a$ — ไม่ใช่แค่เดาว่าฟังก์ชันถูกบีบ",
      graph: "limit",
      examples: [
        ex(
          "ลิมิต $\\dfrac{\\sin x}{x}$ ที่ 0",
          "Basic",
          "ใช้ Squeeze: $|\\sin x|\\le |x|$ สำหรับ $x$ ใกล้ 0",
          "หา $\\lim_{x\\to 0}\\dfrac{\\sin x}{x}$",
          [
            "$-1\\le\\dfrac{\\sin x}{x}\\le 1$ เมื่อ $x\\to 0$ (จาก geometry หรือ $| \\sin x|\\le |x|$)",
            "$\\lim_{x\\to 0}(-1)=-1$, $\\lim_{x\\to 0}1=1$ — ใช้ squeeze กับ $\\cos x\\le\\dfrac{\\sin x}{x}\\le 1$",
            "ได้ $\\lim_{x\\to 0}\\dfrac{\\sin x}{x}=1$",
          ],
          "$1$"
        ),
        ex(
          "ลิมิตที่มี $x^2\\sin(1/x)$",
          "Medium",
          "$-1\\le\\sin(1/x)\\le 1$ → คูณด้วย $x^2$",
          "หา $\\lim_{x\\to 0}x^2\\sin\\dfrac{1}{x}$",
          [
            "$-x^2\\le x^2\\sin(1/x)\\le x^2$",
            "$\\lim_{x\\to 0}(-x^2)=0$, $\\lim_{x\\to 0}x^2=0$",
            "Squeeze → ลิมิต $=0$",
          ],
          "$0$"
        ),
      ],
      practice: "หา $\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^2}$ โดยใช้ $1-\\cos x=2\\sin^2(x/2)$ และ $\\lim\\dfrac{\\sin x}{x}=1$",
    }
  ),

  "calculus1/chain-rule": sec(
    "Chain Rule: ถ้า $y=f(g(x))$ แล้ว $\\dfrac{dy}{dx}=f'(g(x))\\cdot g'(x)$ หรือ $\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$ เมื่อ $u=g(x)$ ใช้เมื่อฟังก์ชันซ้อนกันหลายชั้น เช่น $\\sin(x^2)$, $e^{3x+1}$, $\\ln(\\cos x)$",
    "\\frac{d}{dx}[f(g(x))]=f'(g(x))\\cdot g'(x)",
    {
      warning: "อย่าลืมคูณด้วยอนุพันธ์ของฟังก์ชันข้างใน — ข้อผิดพลาดที่พบบ่อยคือลืม $g'(x)$",
      graph: "derivative",
      examples: [
        ex(
          "Chain Rule พื้นฐาน",
          "Basic",
          "ระบุ outer และ inner function ให้ชัด",
          "หา $\\dfrac{d}{dx}\\sin(3x^2+1)$",
          [
            "outer: $\\sin u$, inner: $u=3x^2+1$",
            "$\\dfrac{d}{dx}\\sin(3x^2+1)=\\cos(3x^2+1)\\cdot 6x$",
          ],
          "$6x\\cos(3x^2+1)$"
        ),
        ex(
          "Chain Rule หลายชั้น",
          "Medium",
          "ทำทีละชั้นจากนอกเข้าใน",
          "หา $\\dfrac{d}{dx}e^{\\sin(2x)}$",
          [
            "$\\dfrac{d}{dx}e^u=e^u\\cdot u'$ โดย $u=\\sin(2x)$",
            "$u'=\\cos(2x)\\cdot 2$",
            "ได้ $2\\cos(2x)\\,e^{\\sin(2x)}$",
          ],
          "$2\\cos(2x)\\,e^{\\sin(2x)}$"
        ),
      ],
      practice: "หา $\\dfrac{d}{dx}\\ln(\\sec x+\\tan x)$ โดยใช้ chain rule และ $\\sec x+\\tan x>0$",
    }
  ),

  "calculus1/implicit-differentiation": sec(
    "เมื่อ $y$ ไม่ได้แก้เป็นฟังก์ชันชัดของ $x$ (เช่น $x^2+y^2=25$) ให้หาอนุพันธ์ทั้งสองข้างของสมการ โดยใช้ chain rule กับ $y$ ว่า $\\dfrac{d}{dx}[y]=\\dfrac{dy}{dx}$ แล้วแก้หา $\\dfrac{dy}{dx}$",
    "\\frac{d}{dx}[F(x,y)]=0 \\Rightarrow F_x + F_y\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{F_x}{F_y}",
    {
      warning: "ทุกครั้งที่หาอนุพันธ์ของ $y$ ต้องคูณ $\\dfrac{dy}{dx}$ — อย่า treat $y$ เป็นค่าคงที่",
      graph: "derivative",
      examples: [
        ex(
          "วงกลม — สมการ implicit",
          "Basic",
          "หาอนุพันธ์ทั้งสองข้าง แล้วแก้ $dy/dx$",
          "ถ้า $x^2+y^2=25$ หา $\\dfrac{dy}{dx}$",
          [
            "หาอนุพันธ์: $2x+2y\\dfrac{dy}{dx}=0$",
            "$\\dfrac{dy}{dx}=-\\dfrac{x}{y}$ ($y\\neq 0$)",
          ],
          "$-\\dfrac{x}{y}$"
        ),
        ex(
          "เส้นสัมผัสของ ellipse",
          "Medium",
          "แทนจุดบนเส้นโค้งเพื่อหาความชัน",
          "ถ้า $4x^2+9y^2=36$ หาความชันเส้นสัมผัสที่ $(3,0)$",
          [
            "หาอนุพันธ์: $8x+18y\\dfrac{dy}{dx}=0$ → $\\dfrac{dy}{dx}=-\\dfrac{4x}{9y}$",
            "ที่ $(3,0)$: $y=0$ → ความชันแนวตั้ง (เส้นสัมผัส $x=3$)",
          ],
          "เส้นสัมผัส: $x=3$ (แนวตั้ง)"
        ),
      ],
      practice: "ถ้า $x^3+y^3=6xy$ (folium of Descartes) หา $\\dfrac{dy}{dx}$ ที่ $(3,3)$",
    }
  ),

  "calculus1/higher-derivatives": sec(
    "อนุพันธ์ลำดับที่ $n$ คือการหาอนุพันธ์ซ้ำ $n$ ครั้ง: $f''(x), f'''(x), \\ldots$ ใน kinematics $s'(t)=v(t)$, $v'(t)=a(t)$ อนุพันธ์ลำดับสองบอกความโค้ง (concavity) และจุดเปลี่ยนความโค้ง",
    "v(t)=s'(t), \\quad a(t)=v'(t)=s''(t)",
    {
      warning: "สัญลักษณ์: $f''(x)=\\dfrac{d^2y}{dx^2}$ — อย่าสับสนกับ $f(x)^2$",
      graph: "derivative",
      examples: [
        ex(
          "อนุพันธ์ลำดับสองของพหุนomial",
          "Basic",
          "ใช้ power rule ซ้ำ",
          "ถ้า $f(x)=x^4-3x^2+2x$ หา $f''(x)$",
          [
            "$f'(x)=4x^3-6x+2$",
            "$f''(x)=12x^2-6$",
          ],
          "$12x^2-6$"
        ),
        ex(
          "การเคลื่อนที่ — ตำแหน่ง ความเร็ว ความเร่ง",
          "Medium",
          "อนุพันธ์ตำแหน่งได้ความเร็ว อนุพันธ์ความเร็วได้ความเร่ง",
          "ถ้า $s(t)=t^3-6t^2+9t$ (m) หาความเร่งที่ $t=2$ s",
          [
            "$v(t)=s'(t)=3t^2-12t+9$",
            "$a(t)=v'(t)=6t-12$",
            "$a(2)=6(2)-12=0$ m/s$^2$",
          ],
          "$0$ m/s$^2$"
        ),
      ],
      practice: "ถ้า $y=e^{2x}\\sin x$ หา $y''$ โดยใช้ product rule สองครั้ง",
    }
  ),

  "calculus1/curve-sketching": sec(
    "ขั้นตอน sketch กราฟ: (1) domain (2) intercepts (3) symmetry (4) asymptotes (5) $f'$ หาจุด critical และ monotonicity (6) $f''$ หา concavity และ inflection (7) รวมข้อมูลวาดกราห์",
    "f'(x)=0 \\text{ or undefined} \\Rightarrow \\text{critical points}; \\quad f''(x)=0 \\Rightarrow \\text{possible inflection}",
    {
      warning: "จุดที่ $f''=0$ ไม่จำเป็นต้องเป็น inflection — ต้องตรวจ concavity เปลี่ยนฝั่ง",
      graph: "derivative",
      examples: [
        ex(
          "วิเคราะห์ $f(x)=x^3-3x$",
          "Medium",
          "หา critical points จาก $f'=0$",
          "sketch $f(x)=x^3-3x$",
          [
            "$f'(x)=3x^2-3=3(x-1)(x+1)=0$ → $x=\\pm1$",
            "$f''(x)=6x$: concave down บน $(-\\infty,0)$, up บน $(0,\\infty)$; inflection ที่ $x=0$",
            "local max $(-1,2)$, local min $(1,-2)$; ขึ้นบน $(-\\infty,-1)$, ลง $(-1,1)$, ขึ้น $(1,\\infty)$",
          ],
          "critical: $x=\\pm1$; local max $(-1,2)$, min $(1,-2)$"
        ),
        ex(
          "Rational function — asymptotes",
          "Medium",
          "vertical: ส่วน $=0$; oblique/horizontal: จากลิมิต $x\\to\\pm\\infty$",
          "วิเคราะห์ $f(x)=\\dfrac{x^2+1}{x-1}$",
          [
            "vertical asymptote: $x=1$",
            "long division: $f(x)=x+1+\\dfrac{2}{x-1}$ → oblique asymptote $y=x+1$",
            "$f'(x)=\\dfrac{x^2-2x-1}{(x-1)^2}=0$ → $x=1\\pm\\sqrt{2}$",
          ],
          "VA: $x=1$; oblique asymptote $y=x+1$"
        ),
      ],
      practice: "วิเคราะห์และ sketch $f(x)=\\dfrac{x}{x^2-4}$ รวม asymptotes, intervals ของ increase/decrease",
    }
  ),

  "calculus1/lhopital": sec(
    "L'Hôpital's Rule: ถ้า $\\lim\\dfrac{f(x)}{g(x)}$ เป็นรูป $\\dfrac{0}{0}$ หรือ $\\dfrac{\\infty}{\\infty}$ และ derivative ของเศษ/ส่วนมีลิมิต แล้ว $\\lim\\dfrac{f}{g}=\\lim\\dfrac{f'}{g'}$ ใช้ซ้ำได้จนไม่เป็น indeterminate",
    "\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)} \\quad (\\frac{0}{0}\\text{ or }\\frac{\\infty}{\\infty})",
    {
      warning: "ใช้ได้เฉพาะรูป $0/0$ หรือ $\\infty/\\infty$ — รูป $0\\cdot\\infty$, $\\infty-\\infty$ ต้องจัดรูปก่อน",
      graph: "limit",
      examples: [
        ex(
          "รูป $0/0$ — ลิมิต trig",
          "Basic",
          "ตรวจรูป indeterminate ก่อนใช้ L'Hôpital",
          "หา $\\lim_{x\\to 0}\\dfrac{e^x-1-x}{x^2}$",
          [
            "แทน $x=0$: $\\dfrac{0}{0}$",
            "L'Hôpital: $\\dfrac{e^x-1}{2x}$ → แทนอีก: $\\dfrac{0}{0}$",
            "อีกครั้ง: $\\dfrac{e^x}{2}\\to\\dfrac{1}{2}$",
          ],
          "$\\dfrac{1}{2}$"
        ),
        ex(
          "รูป $\\infty/\\infty$",
          "Medium",
          "ใช้ L'Hôpital กับ $\\ln x$ และ $x$",
          "หา $\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}$",
          [
            "$x\\to\\infty$: $\\dfrac{\\infty}{\\infty}$",
            "L'Hôpital: $\\dfrac{1/x}{1}=\\dfrac{1}{x}\\to 0$",
          ],
          "$0$"
        ),
      ],
      practice: "หา $\\lim_{x\\to 0^+}x^x$ โดยตั้ง $y=x^x$ แล้วใช้ $\\ln y=x\\ln x$ และ L'Hôpital",
    }
  ),

  "calculus1/antiderivatives": sec(
    "ปฏิยานุพันธ์ (antiderivative) $F$ ของ $f$ คือ $F'(x)=f(x)$ อินทิกรัลไม่จำกัด $\\int f(x)\\,dx=F(x)+C$ ต้องใส่ $C$ เสมอเพราะอนุพันธ์ของค่าคงที่เป็น 0",
    "\\int f(x)\\,dx = F(x)+C, \\quad F'(x)=f(x)",
    {
      warning: "อย่าลืม $+C$ ในอินทิกรัลไม่จำกัด — ข้อสอบมักหักคะแนนถ้าไม่ใส่",
      graph: "integral",
      examples: [
        ex(
          "กฎกำลังพื้นฐาน",
          "Basic",
          "$\\int x^n dx=\\dfrac{x^{n+1}}{n+1}+C$ เมื่อ $n\\neq -1$",
          "หา $\\int (4x^3-2x+5)\\,dx$",
          [
            "$\\int 4x^3 dx=x^4$",
            "$\\int (-2x)dx=-x^2$",
            "$\\int 5\\,dx=5x$",
            "รวม: $x^4-x^2+5x+C$",
          ],
          "$x^4-x^2+5x+C$"
        ),
        ex(
          "ตรวจคำตอบด้วยการหาอนุพันธ์",
          "Medium",
          "หาอนุพันธ์ของผลลัพธ์ต้องได้ integrand เดิม",
          "หา $\\int \\dfrac{3}{x}\\,dx$",
          [
            "ใช้ $\\int \\dfrac{1}{x}dx=\\ln|x|+C$",
            "$\\int \\dfrac{3}{x}dx=3\\ln|x|+C$",
            "ตรวจ: $\\dfrac{d}{dx}(3\\ln|x|)=\\dfrac{3}{x}$ ✓",
          ],
          "$3\\ln|x|+C$"
        ),
      ],
      practice: "หา $\\int (\\sqrt{x}+x^{-3/2})\\,dx$ และ $\\int (2e^x-\\sec^2 x)\\,dx$",
    }
  ),

  "calculus1/riemann-sums": sec(
    "Riemann sum ประมาณพื้นที่ใต้กราฟ: $\\sum_{i=1}^n f(x_i^*)\\Delta x$ โดย $\\Delta x=\\dfrac{b-a}{n}$ อินทิกรัลจำกัด $\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum f(x_i^*)\\Delta x$ เมื่อ $f\\ge 0$ คือพื้นที่",
    "\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x, \\quad \\Delta x=\\frac{b-a}{n}",
    {
      warning: "เลือก sample point ($x_i^*$) ให้สอดคล้อง: left, right, หรือ midpoint — คำตอบประมาณต่างกัน",
      graph: "integral",
      examples: [
        ex(
          "Right Riemann sum",
          "Basic",
          "$x_i^*=a+i\\Delta x$ (right endpoint)",
          "ประมาณ $\\int_0^2 x\\,dx$ ด้วย $n=4$ right Riemann sum",
          [
            "$\\Delta x=\\dfrac{2-0}{4}=0.5$",
            "right endpoints: $0.5,1,1.5,2$",
            "$\\sum=0.5(0.5)+0.5(1)+0.5(1.5)+0.5(2)=2.5$",
          ],
          "$2.5$ (exact $=2$)"
        ),
        ex(
          "Midpoint rule",
          "Medium",
          "midpoint มักแม่นกว่า left/right",
          "ประมาณ $\\int_0^1 x^2\\,dx$ ด้วย $n=2$ midpoint",
          [
            "$\\Delta x=0.5$; subintervals $[0,0.5],[0.5,1]$",
            "midpoints: $0.25, 0.75$",
            "$0.5(0.25^2)+0.5(0.75^2)=0.5(0.0625)+0.5(0.5625)=0.3125$",
          ],
          "$0.3125$ (exact $=1/3$)"
        ),
      ],
      practice: "เขียน left Riemann sum สำหรับ $\\int_1^3 (x^2+1)\\,dx$ ด้วย $n=3$ แล้วคำนวณค่าประมาณ",
    }
  ),

  "calculus1/substitution-basic": sec(
    "Substitution (u-sub): ถ้า $\\int f(g(x))g'(x)\\,dx$ ตั้ง $u=g(x)$ แล้ว $du=g'(x)dx$ ได้ $\\int f(u)\\,du$ เลือก $u$ ให้ส่วน $\\int f(u)du$ ง่ายกว่า",
    "\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du, \\quad u=g(x)",
    {
      warning: "อย่าลืมเปลี่ยนกลับเป็น $x$ หรือเปลี่ยนขอบ integration ถ้าเป็น definite integral",
      graph: "integral",
      examples: [
        ex(
          "u-sub พื้นฐาน",
          "Basic",
          "มองหา function และ derivative ของมันใน integrand",
          "หา $\\int 2x\\cos(x^2)\\,dx$",
          [
            "ตั้ง $u=x^2$, $du=2x\\,dx$",
            "$\\int \\cos u\\,du=\\sin u+C$",
            "$\\sin(x^2)+C$",
          ],
          "$\\sin(x^2)+C$"
        ),
        ex(
          "Definite integral — เปลี่ยนขอบ",
          "Medium",
          "เมื่อเปลี่ยน $u$ ต้องเปลี่ยนขอบด้วย",
          "หา $\\int_0^1 3x^2\\sqrt{1+x^3}\\,dx$",
          [
            "$u=1+x^3$, $du=3x^2 dx$; $x=0\\Rightarrow u=1$, $x=1\\Rightarrow u=2$",
            "$\\int_1^2 \\sqrt{u}\\,du=\\dfrac{2}{3}u^{3/2}\\Big|_1^2=\\dfrac{2}{3}(2\\sqrt{2}-1)$",
          ],
          "$\\dfrac{2}{3}(2\\sqrt{2}-1)$"
        ),
      ],
      practice: "หา $\\int x e^{-x^2}\\,dx$ และ $\\int \\dfrac{\\ln x}{x}\\,dx$",
    }
  ),

  "calculus1/net-change": sec(
    "Net Change Theorem: ถ้า $F'(x)=f(x)$ แล้วการเปลี่ยนแปลงสะสมของ $f$ บน $[a,b]$ คือ $F(b)-F(a)=\\int_a^b f(x)\\,dx$ ใช้หาปริมาณสะสม เช่น displacement และปริมาณไหลสุทธิ",
    "F(b)-F(a)=\\int_a^b F'(x)\\,dx = \\int_a^b f(x)\\,dx",
    {
      warning: "ระยะทางรวม $\\neq$ net displacement — ระยะทางใช้ $\\int |v(t)|\\,dt$",
      graph: "integral",
      examples: [
        ex(
          "Displacement จากความเร็ว",
          "Basic",
          "net change ของตำแหน่ง = integral ของความเร็ว",
          "ถ้า $v(t)=3t^2-6t$ m/s หา displacement บน $[0,3]$ s",
          [
            "$\\Delta s=\\int_0^3 (3t^2-6t)\\,dt=[t^3-3t^2]_0^3$",
            "$=27-27=0$ m",
          ],
          "$0$ m (กลับมาจุดเริ่ม)"
        ),
        ex(
          "ปริมาณไหลสุทธิ",
          "Medium",
          "inflow บวก, outflow ลบ — integral ให้ net rate",
          "ถ้า $r(t)=50-10t$ L/min เป็นอัตราไหลเข้าถัง ($0\\le t\\le 5$) หาปริมาณสุทธิ",
          [
            "Net change $=\\int_0^5 (50-10t)\\,dt$",
            "$=[50t-5t^2]_0^5=250-125=125$ L",
          ],
          "$125$ L"
        ),
      ],
      practice: "ถ้า $v(t)=\\sin t$ m/s บน $[0,2\\pi]$ หา displacement และ total distance",
    }
  ),

  "calculus1/log-diff": sec(
    "อนุพันธ์ของ $e^x$ คือ $e^x$; ของ $\\ln x$ คือ $\\dfrac{1}{x}$ ($x>0$) กฎ chain rule ให้ $\\dfrac{d}{dx}[\\ln u]=\\dfrac{u'}{u}$ และ $\\dfrac{d}{dx}[a^x]=a^x\\ln a$",
    "\\frac{d}{dx}(e^x)=e^x, \\quad \\frac{d}{dx}(\\ln x)=\\frac{1}{x}, \\quad \\frac{d}{dx}(a^x)=a^x\\ln a",
    {
      warning: "$\\dfrac{d}{dx}(\\ln|x|)=\\dfrac{1}{x}$ สำหรับ $x\\neq 0$ — ใช้เมื่อ argument อาจเป็นลบ",
      graph: "derivative",
      examples: [
        ex(
          "Logarithmic differentiation setup",
          "Medium",
          "ใช้ $\\ln|y|=\\ln|f(x)|$ แล้ว implicit diff",
          "หา $\\dfrac{d}{dx}(x^x)$ สำหรับ $x>0$",
          [
            "ตั้ง $y=x^x$, $\\ln y=x\\ln x$",
            "$\\dfrac{y'}{y}=\\ln x+1$ → $y'=x^x(\\ln x+1)$",
          ],
          "$x^x(\\ln x+1)$"
        ),
        ex(
          "อนุพันธ์ของ $e^{g(x)}$",
          "Basic",
          "chain rule: $(e^u)'=e^u u'$",
          "หา $\\dfrac{d}{dx}e^{x^2}\\sin x$",
          [
            "product rule + chain: $e^{x^2}\\cdot 2x\\cdot\\sin x+e^{x^2}\\cos x$",
            "$=e^{x^2}(2x\\sin x+\\cos x)$",
          ],
          "$e^{x^2}(2x\\sin x+\\cos x)$"
        ),
      ],
      practice: "หา $\\dfrac{d}{dx}\\ln(\\dfrac{x^2+1}{x-1})$ โดยใช้ log properties ก่อนหาอนุพันธ์",
    }
  ),

  "calculus1/inverse-trig": sec(
    "อนุพันธ์ของ inverse trig: $\\dfrac{d}{dx}(\\arcsin x)=\\dfrac{1}{\\sqrt{1-x^2}}$, $\\dfrac{d}{dx}(\\arctan x)=\\dfrac{1}{1+x^2}$, $\\dfrac{d}{dx}(\\text{arcsec}\\,x)=\\dfrac{1}{|x|\\sqrt{x^2-1}}$ ใช้ chain rule เมื่อ argument ไม่ใช่ $x$",
    "\\frac{d}{dx}(\\arcsin x)=\\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}(\\arctan x)=\\frac{1}{1+x^2}",
    {
      warning: "domain ของ inverse trig จำกัด — $\\arcsin x$ ใช้ได้เมื่อ $-1\\le x\\le 1$",
      graph: "derivative",
      examples: [
        ex(
          "Chain rule กับ arctan",
          "Basic",
          "$(\\arctan u)'=\\dfrac{u'}{1+u^2}$",
          "หา $\\dfrac{d}{dx}\\arctan(3x)$",
          [
            "$u=3x$, $u'=3$",
            "$\\dfrac{d}{dx}\\arctan(3x)=\\dfrac{3}{1+9x^2}$",
          ],
          "$\\dfrac{3}{1+9x^2}$"
        ),
        ex(
          "อนุพันธ์ที่ได้จาก implicit — arcsin",
          "Medium",
          "จำสูตรหรือ derive จาก $\\sin y=x$",
          "หา $\\dfrac{d}{dx}\\arcsin(x^2)$",
          [
            "$\\dfrac{1}{\\sqrt{1-(x^2)^2}}\\cdot 2x$",
            "$=\\dfrac{2x}{\\sqrt{1-x^4}}$",
          ],
          "$\\dfrac{2x}{\\sqrt{1-x^4}}$"
        ),
      ],
      practice: "หา $\\dfrac{d}{dx}[x\\,\\arctan x]$ โดย product rule",
    }
  ),

  "calculus1/exp-log-integrals": sec(
    "อินทิกรัลพื้นฐาน: $\\int e^x dx=e^x+C$, $\\int a^x dx=\\dfrac{a^x}{\\ln a}+C$, $\\int \\dfrac{1}{x}dx=\\ln|x|+C$ ใช้ u-sub กับ $\\int \\dfrac{f'(x)}{f(x)}dx=\\ln|f(x)|+C$",
    "\\int e^x\\,dx=e^x+C, \\quad \\int \\frac{1}{x}\\,dx=\\ln|x|+C, \\quad \\int \\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C",
    {
      warning: "ใช้ $\\ln|x|$ ไม่ใช่ $\\ln x$ เมื่อ integrand เป็น $\\dfrac{1}{x}$ บนช่วงที่ $x$ อาจเป็นลบ",
      graph: "integral",
      examples: [
        ex(
          "รูป $\\dfrac{f'}{f}$",
          "Basic",
          "integrand เป็นอนุพันธ์/ฟังก์ชัน",
          "หา $\\int \\dfrac{2x}{x^2+1}\\,dx$",
          [
            "$u=x^2+1$, $du=2x\\,dx$",
            "$\\int \\dfrac{1}{u}du=\\ln|u|+C=\\ln(x^2+1)+C$",
          ],
          "$\\ln(x^2+1)+C$"
        ),
        ex(
          "อินทิกรัล exponential",
          "Medium",
          "จัดให้เป็น $e^u\\,du$",
          "หา $\\int e^{3x}\\,dx$",
          [
            "$u=3x$, $du=3dx$ → $\\dfrac{1}{3}\\int e^u du$",
            "$=\\dfrac{1}{3}e^{3x}+C$",
          ],
          "$\\dfrac{1}{3}e^{3x}+C$"
        ),
      ],
      practice: "หา $\\int \\dfrac{dx}{x\\ln x}$ และ $\\int 5^x\\,dx$",
    }
  ),

  "calculus1/integration-by-parts": sec(
    "Integration by parts: $\\int u\\,dv=uv-\\int v\\,du$ มาจาก product rule ใช้ LIATE เลือก $u$: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential",
    "\\int u\\,dv = uv - \\int v\\,du",
    {
      warning: "เลือก $u$ ผิดอาจทำให้ $\\int v\\,du$ ยากขึ้น — ลองสลับถ้าจำเป็น",
      graph: "integral",
      examples: [
        ex(
          "พหุนomial × exponential",
          "Medium",
          "LIATE: $u=x$, $dv=e^x dx$",
          "หา $\\int x e^x\\,dx$",
          [
            "$u=x$, $dv=e^x dx$ → $du=dx$, $v=e^x$",
            "$\\int xe^x dx=xe^x-\\int e^x dx=xe^x-e^x+C$",
          ],
          "$e^x(x-1)+C$"
        ),
        ex(
          "อินทิกรัลของ $\\ln x$",
          "Medium",
          "ตั้ง $u=\\ln x$, $dv=dx$",
          "หา $\\int \\ln x\\,dx$",
          [
            "$u=\\ln x$, $dv=dx$ → $du=\\dfrac{1}{x}dx$, $v=x$",
            "$x\\ln x-\\int x\\cdot\\dfrac{1}{x}dx=x\\ln x-x+C$",
          ],
          "$x\\ln x-x+C$"
        ),
      ],
      practice: "หา $\\int x^2\\sin x\\,dx$ (ใช้ integration by parts สองครั้ง)",
    }
  ),

  "calculus1/trig-integrals-cal1": sec(
    "อินทิกรัล $\\int\\sin^m x\\cos^n x\\,dx$: ถ้า $m$ คี่ แยก $\\sin x$ หนึ่งตัว; ถ้า $n$ คี่ แยก $\\cos x$; ถ้าทั้งคู่คู่ ใช้สูตรลดกำลัง $\\sin^2x=\\dfrac{1-\\cos2x}{2}$, $\\cos^2x=\\dfrac{1+\\cos2x}{2}$",
    "\\sin^2 x=\\frac{1-\\cos 2x}{2}, \\quad \\cos^2 x=\\frac{1+\\cos 2x}{2}",
    {
      warning: "ตรวจว่ากำลัง sin หรือ cos เป็นเลขคี่ก่อนเลือกวิธี — ใช้ผิดวิธีจะติด",
      graph: "integral",
      examples: [
        ex(
          "กำลัง sin คี่",
          "Medium",
          "แยก $\\sin x$ แล้ว u-sub $u=\\cos x$",
          "หา $\\int\\sin^3 x\\,dx$",
          [
            "$\\int\\sin^2 x\\sin x\\,dx=\\int(1-\\cos^2 x)\\sin x\\,dx$",
            "$u=\\cos x$, $du=-\\sin x\\,dx$",
            "$-\\int(1-u^2)du=-\\cos x+\\dfrac{\\cos^3 x}{3}+C$",
          ],
          "$-\\cos x+\\dfrac{\\cos^3 x}{3}+C$"
        ),
        ex(
          "กำลัง cos คู่",
          "Medium",
          "ใช้สูตรลดกำลังซ้ำ",
          "หา $\\int\\cos^2(2x)\\,dx$",
          [
            "$\\cos^2(2x)=\\dfrac{1+\\cos(4x)}{2}$",
            "$\\int=\\dfrac{x}{2}+\\dfrac{\\sin(4x)}{8}+C$",
          ],
          "$\\dfrac{x}{2}+\\dfrac{\\sin(4x)}{8}+C$"
        ),
      ],
      practice: "หา $\\int\\sin^2 x\\cos^3 x\\,dx$",
    }
  ),

  "calculus1/partial-fractions-cal1": sec(
    "Partial fractions แยก rational function ที่ $\\deg(\\text{numerator})<\\deg(\\text{denominator})$ เป็นผลรวมของเศษส่วนง่าย แล้ว integrate ทีละส่วน กรณี linear factor ซ้ำใช้ $(Ax+B)/(x-a)^k$",
    "\\frac{P(x)}{(x-a)(x-b)}=\\frac{A}{x-a}+\\frac{B}{x-b}",
    {
      warning: "ถ้า $\\deg P\\ge\\deg Q$ ต้อง polynomial long division ก่อน",
      graph: "integral",
      examples: [
        ex(
          "Distinct linear factors",
          "Medium",
          "cover-up method หา $A, B$",
          "หา $\\int\\dfrac{1}{x^2-1}\\,dx$",
          [
            "$\\dfrac{1}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}$",
            "$A=1/2$, $B=-1/2$",
            "$\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|+C$",
          ],
          "$\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C$"
        ),
        ex(
          "Repeated linear factor",
          "Hard",
          "ต้องมี $\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^2}$",
          "หา $\\int\\dfrac{x+1}{(x-1)^2}\\,dx$",
          [
            "แยก: $\\dfrac{1}{x-1}+\\dfrac{2}{(x-1)^2}$ (หลังจัด coefficients)",
            "$\\ln|x-1|-\\dfrac{2}{x-1}+C$",
          ],
          "$\\ln|x-1|-\\dfrac{2}{x-1}+C$"
        ),
      ],
      practice: "หา $\\int\\dfrac{2x+3}{x^2+x-2}\\,dx$ โดย partial fractions",
    }
  ),

  "calculus1/improper-integrals": sec(
    "Improper integral คือ integral ที่ขอบไม่จำกัด หรือ integrand ไม่จำกัดที่ขอบ กำหนดเป็นขีดจำกัด: $\\int_a^\\infty f=\\lim_{t\\to\\infty}\\int_a^t f$; ถ้าขีดจำกัดมีอยู่และจำกัด บอกว่า converges",
    "\\int_a^\\infty f(x)\\,dx=\\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx",
    {
      warning: "ต้องคำนวณ limit อย่างระมัดระวัง — อย่าแทน $\\infty$ เป็นตัวเลข",
      graph: "integral",
      examples: [
        ex(
          "Infinite interval",
          "Medium",
          "ตั้ง limit แล้วประเมิน",
          "หา $\\int_1^\\infty \\dfrac{1}{x^2}\\,dx$",
          [
            "$\\lim_{t\\to\\infty}\\int_1^t x^{-2}dx=\\lim_{t\\to\\infty}[-\\dfrac{1}{x}]_1^t$",
            "$=\\lim_{t\\to\\infty}(1-\\dfrac{1}{t})=1$ → converges",
          ],
          "$1$ (converges)"
        ),
        ex(
          "Integrand ไม่จำกัดที่ขอบ",
          "Hard",
          "แยก integral ที่จุด discontinuity",
          "หา $\\int_0^1 \\dfrac{1}{\\sqrt{x}}\\,dx$",
          [
            "$\\lim_{t\\to 0^+}\\int_t^1 x^{-1/2}dx=\\lim_{t\\to 0^+}[2\\sqrt{x}]_t^1$",
            "$=2-0=2$ → converges",
          ],
          "$2$ (converges)"
        ),
      ],
      practice: "หาว่า $\\int_1^\\infty \\dfrac{1}{x}\\,dx$ converge หรือ diverge",
    }
  ),

  "calculus1/intro-ode-cal1": sec(
    "สมการเชิงอนุพันธ์ (ODE) คือสมการที่มีอนุพันธ์ของ unknown function ลำดับของ ODE คือลำดับอนุพันธ์สูงสุด solution คือฟังก์ชันที่ทำให้สมการเป็นจริง initial value problem กำหนด $y(x_0)=y_0$",
    "F(x,y,y',\\ldots,y^{(n)})=0; \\quad y(x_0)=y_0 \\text{ (initial condition)}",
    {
      warning: "ตรวจ solution โดยแทนกลับเข้าสมการ — ขั้นตอน derive อาจสูญเสีย solution พิเศษ",
      examples: [
        ex(
          "ตรวจว่าเป็นสมการ solution",
          "Basic",
          "แทน $y$ และ $y'$ ในสมการ",
          "ตรวจว่า $y=e^{-x}$ เป็น solution ของ $y'+y=0$",
          [
            "$y'=-e^{-x}$",
            "$y'+y=-e^{-x}+e^{-x}=0$ ✓",
          ],
          "ใช่ — เป็น solution"
        ),
        ex(
          "Initial value problem",
          "Medium",
          "หา constant จาก initial condition",
          "ถ้า $y'=2x$ และ $y(0)=3$ หา $y(x)$",
          [
            "$y=\\int 2x\\,dx=x^2+C$",
            "$y(0)=C=3$ → $y=x^2+3$",
          ],
          "$y=x^2+3$"
        ),
      ],
      practice: "ตรวจว่า $y=Ce^{2x}$ เป็น general solution ของ $y'=2y$ แล้วหา $C$ ถ้า $y(0)=5$",
    }
  ),

  "calculus1/separable-ode-cal1": sec(
    "Separable ODE มีรูป $\\dfrac{dy}{dx}=g(x)h(y)$ แยกตัวแปร: $\\dfrac{dy}{h(y)}=g(x)\\,dx$ แล้ว integrate ทั้งสองข้าง ใส่ constant จาก initial condition",
    "\\frac{dy}{dx}=g(x)h(y) \\Rightarrow \\int\\frac{dy}{h(y)}=\\int g(x)\\,dx",
    {
      warning: "เมื่อหารด้วย $h(y)$ อาจสูญ steady-state solutions ที่ $h(y_0)=0$ — ตรวจแยก",
      examples: [
        ex(
          "Exponential growth",
          "Basic",
          "แยก $y$ ไปซ้าย $x$ ไปขวา",
          "แก้ $\\dfrac{dy}{dx}=ky$ ($k$ คงที่)",
          [
            "$\\dfrac{dy}{y}=k\\,dx$",
            "$\\ln|y|=kx+C_1$ → $y=Ce^{kx}$",
          ],
          "$y=Ce^{kx}$"
        ),
        ex(
          "Logistic-type separable",
          "Medium",
          "ใช้ partial fractions หลัง integrate",
          "แก้ $\\dfrac{dy}{dx}=y(1-y)$, $y(0)=1/2$",
          [
            "$\\dfrac{dy}{y(1-y)}=dx$ → partial fractions",
            "$\\ln\\left|\\dfrac{y}{1-y}\\right|=x+C$",
            "$y(0)=1/2$ → $C=0$ → $y=\\dfrac{e^x}{1+e^x}$",
          ],
          "$y=\\dfrac{e^x}{1+e^x}$"
        ),
      ],
      practice: "แก้ $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ โดย $y(1)=2$",
    }
  ),
};
