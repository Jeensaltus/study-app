export const moreCalculus1 = {
  chapters: [
    {
      id: "antiderivatives",
      title: "Antiderivatives",
      description: "ฟังก์ชันผกผันของการหาอนุพันธ์ และสูตรอินทิกรัลพื้นฐาน",
      sections: [
        {
          id: "indefinite-integral",
          title: "Indefinite Integral and Antiderivatives",
          source: "Stewart Calculus, Ch 4.9 & 5.1, p.307",
          concept:
            "ปฏิยานุพันธ์ $F(x)$ ของ $f(x)$ คือฟังก์ชันที่ $F'(x)=f(x)$ อินทิกรัลไม่จำกัด $\\int f(x)dx=F(x)+C$ เมื่อ $C$ คือค่าคงที่ของการอินทิกรัล (constant of integration) ต้องใส่ $C$ เสมอเพราะ $[F(x)+C]'=F'(x)$",
          formula: "\\int f(x)\\,dx = F(x) + C, \\quad \\text{where} \\quad F'(x) = f(x)",
          examples: [
            {
              title: "กฎกำลังสำหรับการอินทิเกรต",
              level: "Basic",
              tip: "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ (เมื่อ $n \\neq -1$)",
              problem: "หา $\\int (3x^4 - 2x^2 + 5)\\,dx$",
              steps: [
                "$\\int 3x^4\\,dx = 3 \\cdot \\frac{x^5}{5} = \\frac{3x^5}{5}$",
                "$\\int (-2x^2)\\,dx = -2 \\cdot \\frac{x^3}{3} = -\\frac{2x^3}{3}$",
                "$\\int 5\\,dx = 5x$",
                "รวม: $\\frac{3x^5}{5} - \\frac{2x^3}{3} + 5x + C$",
              ],
              answer: "$\\frac{3x^5}{5} - \\frac{2x^3}{3} + 5x + C$",
            },
            {
              title: "ฟังก์ชันเอกซ์โพเนนเชียลและลอการิทึม",
              level: "Medium",
              tip: "$\\int e^x\\,dx = e^x + C$ และ $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$",
              problem: "หา $\\int (e^x + \\frac{3}{x})\\,dx$",
              steps: [
                "$\\int e^x\\,dx = e^x + C_1$",
                "$\\int \\frac{3}{x}\\,dx = 3\\ln|x| + C_2$",
                "รวม: $e^x + 3\\ln|x| + C$",
              ],
              answer: "$e^x + 3\\ln|x| + C$",
            },
            {
              title: "ฟังก์ชันตรีโกณมิติ",
              level: "Medium",
              tip: "$\\int \\sin x\\,dx = -\\cos x + C$ และ $\\int \\cos x\\,dx = \\sin x + C$",
              problem: "หา $\\int (2\\sin x - 3\\cos x + \\sec^2 x)\\,dx$",
              steps: [
                "$\\int 2\\sin x\\,dx = -2\\cos x$",
                "$\\int (-3\\cos x)\\,dx = -3\\sin x$",
                "$\\int \\sec^2 x\\,dx = \\tan x$",
                "รวม: $-2\\cos x - 3\\sin x + \\tan x + C$",
              ],
              answer: "$-2\\cos x - 3\\sin x + \\tan x + C$",
            },
            {
              title: "การตรวจสอบโดยการหาอนุพันธ์",
              level: "Medium",
              tip: "ตรวจสอบคำตอบ โดยหาอนุพันธ์และเทียบกับ integrand",
              problem: "พิสูจน์ว่า $\\int (6x^2 + 1)\\,dx = 2x^3 + x + C$",
              steps: [
                "หาอนุพันธ์ของ $2x^3 + x + C$",
                "$\\frac{d}{dx}(2x^3 + x + C) = 6x^2 + 1 + 0$",
                "ได้ integrand เดิม → ตรวจสอบถูกต้อง ✓",
              ],
              answer: "พิสูจน์ได้โดยการหาอนุพันธ์",
            },
          ],
          practice: "หา $\\int (\\sqrt{x} + \\frac{1}{\\sqrt{x}} + x^{-2})\\,dx$ และ $\\int (\\csc^2 x - e^x)\\,dx$",
        },
        {
          id: "integration-by-parts",
          title: "Integration by Parts",
          source: "Stewart Calculus, Ch 7.1, p.457",
          concept:
            "ถ้า $\\int u\\,dv = uv - \\int v\\,du$ เลือก $u$ และ $dv$ ให้ส่วน $\\int v\\,du$ ง่ายกว่าส่วนเดิม ใช้กฎ LIATE: Logarithm, Inverse trig, Algebraic, Trigonometric, Exponential",
          formula: "\\int u\\,dv = uv - \\int v\\,du",
          examples: [
            {
              title: "พื้นฐาน — พหุนามคูณเอกซ์โพเนนเชียล",
              level: "Medium",
              tip: "เลือก $u = x$ (Algebraic), $dv = e^x dx$ (Exponential)",
              problem: "หา $\\int x e^{2x}\\,dx$",
              steps: [
                "ตั้ง $u = x$, $dv = e^{2x}dx$",
                "$du = dx$, $v = \\frac{e^{2x}}{2}$",
                "$\\int x e^{2x}dx = x \\cdot \\frac{e^{2x}}{2} - \\int \\frac{e^{2x}}{2}dx$",
                "$= \\frac{xe^{2x}}{2} - \\frac{1}{2} \\cdot \\frac{e^{2x}}{2}$",
                "$= \\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C = \\frac{e^{2x}(2x-1)}{4} + C$",
              ],
              answer: "$\\frac{e^{2x}(2x-1)}{4} + C$",
            },
            {
              title: "ลอการิทึมคูณพหุนาม",
              level: "Medium",
              tip: "$\\ln x$ ต้อง diff → เลือก $u = \\ln x$",
              problem: "หา $\\int x^2 \\ln x\\,dx$",
              steps: [
                "ตั้ง $u = \\ln x$, $dv = x^2 dx$",
                "$du = \\frac{1}{x}dx$, $v = \\frac{x^3}{3}$",
                "$= \\frac{x^3\\ln x}{3} - \\int \\frac{x^3}{3} \\cdot \\frac{1}{x}dx$",
                "$= \\frac{x^3\\ln x}{3} - \\frac{1}{3}\\int x^2dx$",
                "$= \\frac{x^3\\ln x}{3} - \\frac{x^3}{9} + C$",
              ],
              answer: "$\\frac{x^3\\ln x}{3} - \\frac{x^3}{9} + C$",
            },
          ],
          practice: "หา $\\int x \\sin x\\,dx$ และ $\\int (x+1)e^x\\,dx$",
        },
      ],
    },
    {
      id: "limits",
      sections: [
        {
          id: "epsilon-delta",
          title: "The Epsilon-Delta Definition of a Limit",
          concept: "นิยามเชิงลึกของลิมิต: $\\lim_{x\\to a} f(x) = L$ หมายความว่า สำหรับทุกๆ $\\epsilon > 0$ จะมี $\\delta > 0$ ที่ทำให้ ถ้า $0 < |x - a| < \\delta$ แล้ว $|f(x) - L| < \\epsilon$ เสมอ นิยามนี้ใช้เพื่อพิสูจน์ความมีอยู่จริงของลิมิตในเชิงคณิตศาสตร์ที่รัดกุมที่สุด (Rigorous proof)",
          formula: "\\forall \\epsilon > 0, \\exists \\delta > 0 \\text{ s.t. } 0 < |x - a| < \\delta \\implies |f(x) - L| < \\epsilon",
          derivation: "สมมติฐานคือ เราสามารถบังคับให้ค่าของ $f(x)$ อยู่ใกล้ $L$ มากแค่ไหนก็ได้ (ห่างกันไม่เกิน $\\epsilon$) เพียงแค่จำกัดให้ $x$ อยู่ใกล้ $a$ มากเพียงพอ (ห่างกันไม่เกิน $\\delta$ โดยไม่เท่ากับ $a$)",
          warning: "ข้อผิดพลาดที่เจอบ่อยคือ นศ. มักจะจำสลับกันระหว่าง $\\epsilon$ (ค่าของแกน y หรือ $f(x)$) กับ $\\delta$ (ค่าของแกน x) และลืมเงื่อนไข $0 < |x-a|$ ซึ่งแปลว่า $x \\neq a$",
          examples: [
            {
              level: "ง่าย (พิสูจน์เชิงเส้น)",
              problem: "จงใช้ $\\epsilon-\\delta$ พิสูจน์ว่า $\\lim_{x \\to 3} (2x - 1) = 5$",
              steps: [
                "1. ให้ $\\epsilon > 0$ เป็นจำนวนจริงใดๆ",
                "2. ต้องการหา $\\delta > 0$ ที่ทำให้ $|(2x-1)-5| < \\epsilon$ เมื่อ $0 < |x-3| < \\delta$",
                "3. จัดรูปสมการ: $|2x - 6| < \\epsilon \\implies 2|x - 3| < \\epsilon \\implies |x - 3| < \\epsilon/2$",
                "4. เลือก $\\delta = \\epsilon/2$",
                "5. บทสรุป: ถ้า $0 < |x-3| < \\delta$ จะได้ $2|x-3| < 2\\delta = 2(\\epsilon/2) = \\epsilon$ ดังนั้น $|(2x-1)-5| < \\epsilon$ จริง"
              ]
            },
            {
              level: "กลาง (พิสูจน์กำลังสอง)",
              problem: "จงร่างการหา $\\delta$ สำหรับ $\\lim_{x \\to 2} x^2 = 4$",
              steps: [
                "ต้องการ $|x^2 - 4| < \\epsilon \\implies |x-2||x+2| < \\epsilon$",
                "สมมติให้ $\\delta \\le 1$ จะได้ $1 < x < 3$ ดังนั้น $|x+2| < 5$",
                "จะได้ $5|x-2| < \\epsilon \\implies |x-2| < \\epsilon/5$",
                "ดังนั้นเลือก $\\delta = \\min(1, \\epsilon/5)$"
              ]
            }
          ]
        },
        {
          id: "squeeze-theorem",
          title: "Squeeze Theorem (Sandwich Theorem)",
          concept: "ถ้า $f(x) \\le g(x) \\le h(x)$ เมื่อ $x$ อยู่ใกล้ $a$ (อาจยกเว้นที่ $a$) และถ้า $\\lim_{x \\to a} f(x) = \\lim_{x \\to a} h(x) = L$ แล้ว $\\lim_{x \\to a} g(x) = L$ เสมอ",
          formula: "\\lim_{x\\to a} f(x) = \\lim_{x\\to a} h(x) = L \\implies \\lim_{x\\to a} g(x) = L",
          derivation: "เนื่องจากฟังก์ชัน $g(x)$ ถูก 'บีบ' (Squeezed) ให้อยู่ระหว่าง $f$ และ $h$ ตลอดเวลา เมื่อเส้นกราฟของ $f$ และ $h$ วิ่งเข้าสู่จุดเดียวกันที่ $x=a$ เส้นกราฟ $g$ ก็ไม่มีทางเลือกอื่นนอกจากต้องวิ่งเข้าสู่จุดนั้นด้วย",
          warning: "ระวัง! อย่าลืมแสดงให้เห็นชัดเจนว่าอสมการ $f(x) \\le g(x) \\le h(x)$ เป็นจริงเสมอในช่วงที่พิจารณา และอย่าลืมคำนวณลิมิตของฟังก์ชันขอบทั้งสองด้านให้ดู",
          examples: [
            {
              level: "ข้อสอบ",
              problem: "จงหา $\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right)$",
              steps: [
                "ไม่สามารถใช้กฎการคูณลิมิตได้ เพราะ $\\lim_{x \\to 0} \\sin(1/x)$ ไม่มีค่า (แกว่งกวัด)",
                "เรารู้ว่า $-1 \\le \\sin(1/x) \\le 1$ สำหรับทุก $x \\neq 0$",
                "คูณตลอดด้วย $x^2$ (ซึ่ง $\\ge 0$ เสมอ): $-x^2 \\le x^2 \\sin(1/x) \\le x^2$",
                "หาลิมิตขอบ: $\\lim_{x \\to 0} (-x^2) = 0$ และ $\\lim_{x \\to 0} (x^2) = 0$",
                "โดย Squeeze Theorem จึงสรุปได้ว่า $\\lim_{x \\to 0} x^2 \\sin(1/x) = 0$"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "derivatives",
      sections: [
        {
          id: "chain-rule-deep",
          title: "The Chain Rule (Deep Dive)",
          concept: "กฎลูกโซ่ใช้หาอนุพันธ์ของฟังก์ชันประกอบ (Composite Function) $f(g(x))$ กฎนี้เปรียบเสมือนการลอกเปลือกหัวหอม คือหาอนุพันธ์ของฟังก์ชันนอกสุดก่อน แล้วคูณด้วยอนุพันธ์ของฟังก์ชันที่อยู่ข้างใน",
          formula: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
          warning: "ข้อผิดพลาดคลาสสิก: นักศึกษามักจะหาอนุพันธ์ของฟังก์ชันนอก แล้วลืมคูณด้วยอนุพันธ์ของไส้ใน หรือบางคนดิฟไส้ในแต่เอาไปใส่ไว้ผิดที่ (แทนที่ x ของฟังก์ชันนอก)",
          examples: [
            {
              level: "ง่าย",
              problem: "จงหา $y'$ เมื่อ $y = \\sin(x^2)$",
              steps: [
                "ฟังก์ชันนอกคือ $\\sin(u)$ และไส้ในคือ $u = x^2$",
                "$y' = \\cos(x^2) \\cdot \\frac{d}{dx}(x^2)$",
                "$y' = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$"
              ]
            },
            {
              level: "ยาก (กฎลูกโซ่ซ้อนหลายชั้น)",
              problem: "จงหา $f'(x)$ เมื่อ $f(x) = e^{\\cos(\\sqrt{x})}$",
              steps: [
                "ชั้นที่ 1: $\\frac{d}{dx} e^u = e^u \\cdot u'$ ได้ $e^{\\cos(\\sqrt{x})} \\cdot \\frac{d}{dx}(\\cos(\\sqrt{x}))$",
                "ชั้นที่ 2: $\\frac{d}{dx} \\cos(v) = -\\sin(v) \\cdot v'$ ได้ $-\\sin(\\sqrt{x}) \\cdot \\frac{d}{dx}(\\sqrt{x})$",
                "ชั้นที่ 3: $\\frac{d}{dx} x^{1/2} = \\frac{1}{2\\sqrt{x}}$",
                "รวมร่าง: $f'(x) = e^{\\cos(\\sqrt{x})} \\cdot (-\\sin(\\sqrt{x})) \\cdot \\frac{1}{2\\sqrt{x}}$"
              ]
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: "cal1-epsilondelta", front: "นิยาม Epsilon-Delta ของลิมิต $\\lim_{x \\to a} f(x) = L$", back: "สำหรับทุก $\\epsilon>0$ จะมี $\\delta>0$ ที่ทำให้ถ้า $0<|x-a|<\\delta$ แล้ว $|f(x)-L|<\\epsilon$" },
    { id: "cal1-squeeze", front: "Squeeze Theorem ต้องเช็คเงื่อนไขอะไรบ้าง?", back: "1. $f(x) \\le g(x) \\le h(x)$ รอบๆ จุดนั้น\n2. ลิมิตขอบทั้งสองลู่เข้าสู่ค่า $L$ เดียวกัน" }
  ]
};
