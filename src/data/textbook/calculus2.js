/** Auto-generated from scripts/textbook/parsed — npm run build:slides */
export const textbookCalculus2 = {
  chapters: [
  {
    "id": "mathematical-induction",
    "title": "Mathematical Induction",
    "description": "อุปนัยเชิงคณิตศาสตร์ (Chula Cal2)",
    "sections": [
      {
        "id": "induction",
        "title": "Principle of Mathematical Induction",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Appendix / Ch 9, p.700–705",
        "concept": "หลักการอุปนัยเชิงคณิตศาสตร์ (Mathematical Induction) พิสูจน์ข้อความ $P(n)$ สำหรับ $n\\ge n_0$ โดย (1) พื้นฐาน: พิสูจน์ $P(n_0)$ (2) ขั้น inductive: สมมติ $P(k)$ จริง แล้วพิสูจน์ $P(k+1)$",
        "formula": "P(n_0)\\text{ true and }[P(k)\\Rightarrow P(k+1)]\\Rightarrow P(n)\\text{ for all }n\\ge n_0",
        "warning": "ขั้น inductive ต้องใช้สมมติฐาน $P(k)$ อย่างชัดเจน — ไม่ใช่แค่พิสูจน์ $P(k+1)$ โดยไม่สมมติ",
        "examples": [
          {
            "title": "ผลรวม $1+2+\\cdots+n$",
            "level": "Basic",
            "tip": "พื้นฐาน $n=1$; inductive step บวก $k+1$ ทั้งสองข้าง",
            "problem": "พิสูจน์ $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$",
            "steps": [
              "Base: $n=1$ → LHS $=1$, RHS $=1$ ✓",
              "Assume $1+\\cdots+k=\\dfrac{k(k+1)}{2}$",
              "LHS สำหรับ $k+1$: $\\dfrac{k(k+1)}{2}+(k+1)=\\dfrac{(k+1)(k+2)}{2}$ ✓"
            ],
            "answer": "พิสูจน์ได้โดย induction"
          },
          {
            "title": "Divisibility — $3\\mid (4^n-1)$",
            "level": "Medium",
            "tip": "จัดรูป $4^{k+1}-1$ ให้มี $4^k-1$",
            "problem": "พิสูจน์ $3$ หาร $4^n-1$ สำหรับ $n\\ge 1$",
            "steps": [
              "Base: $n=1$ → $4-1=3$ ✓",
              "Assume $3\\mid(4^k-1)$ → $4^k-1=3m$",
              "$4^{k+1}-1=4(4^k)-1=4(3m+1)-1=12m+3=3(4m+1)$ ✓"
            ],
            "answer": "$3\\mid(4^n-1)$ สำหรับทุก $n\\ge 1$"
          }
        ],
        "practice": "พิสูจน์ $1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$ โดย mathematical induction"
      }
    ]
  },
  {
    "id": "applications-integration",
    "title": "Applications of Integration",
    "description": "",
    "sections": [
      {
        "id": "numerical-integration",
        "title": "Numerical Integration",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 7.7, p.506–513",
        "concept": "เมื่อหาอินทิกรัลยาก ใช้การประมาณ: Midpoint, Trapezoidal และ Simpson's rule Simpson ใช้ parabola ผ่าน 3 จุด มักแม่นที่สุด: $\\int_a^b f\\approx\\dfrac{\\Delta x}{3}[f(x_0)+4f(x_1)+f(x_2)+\\cdots]$",
        "formula": "T_n=\\frac{\\Delta x}{2}[f(x_0)+2f(x_1)+\\cdots+f(x_n)], \\quad S_n=\\frac{\\Delta x}{3}[f(x_0)+4f(x_1)+2f(x_2)+\\cdots]",
        "warning": "Simpson's rule ต้องการจำนวนช่วงย่อย $n$ เป็นเลขคู่ — ถ้า $n$ คี่ ต้องเพิ่มช่วง",
        "examples": [
          {
            "title": "Trapezoidal rule",
            "level": "Basic",
            "tip": "$\\Delta x=\\dfrac{b-a}{n}$; น้ำหนัก endpoint 1, interior 2",
            "problem": "ประมาณ $\\int_0^1 x^2\\,dx$ ด้วย trapezoidal $n=2$",
            "steps": [
              "$\\Delta x=0.5$; $x_0=0,x_1=0.5,x_2=1$",
              "$T=\\dfrac{0.5}{2}[0+2(0.25)+1]=\\dfrac{0.5}{2}(1.5)=0.375$"
            ],
            "answer": "$0.375$ (exact $=1/3$)"
          },
          {
            "title": "Simpson's rule",
            "level": "Medium",
            "tip": "pattern 1,4,2,4,...,1",
            "problem": "ประมาณ $\\int_0^2 x^2\\,dx$ ด้วย Simpson $n=2$",
            "steps": [
              "$\\Delta x=1$; $x_0=0,x_1=1,x_2=2$",
              "$S=\\dfrac{1}{3}[0+4(1)+4]=\\dfrac{8}{3}$"
            ],
            "answer": "$\\dfrac{8}{3}$ (exact $=8/3$)"
          }
        ],
        "practice": "ใช้ Simpson's rule กับ $n=4$ ประมาณ $\\int_0^\\pi \\sin x\\,dx$",
        "graph": "integral"
      }
    ]
  },
  {
    "id": "vectors-3d",
    "title": "Vectors and 3D Geometry",
    "description": "พิกัดสามมิติ เวกเตอร์ เส้นและระนาบ (Chula Cal2 — สอบ Mid หนัก)",
    "sections": [
      {
        "id": "coords-3d",
        "title": "Three-Dimensional Coordinate Systems",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 12.1, p.763–772",
        "concept": "ระบบพิกัดสามมิติ $(x,y,z)$ ใช้แกน $x,y,z$ ตั้งฉากกัน ระยะระหว่าง $P(x_1,y_1,z_1)$ กับ $Q(x_2,y_2,z_2)$ คือ $d=\\sqrt{(\\Delta x)^2+(\\Delta y)^2+(\\Delta z)^2}$ สูตร midpoint และ sphere $(x-h)^2+(y-k)^2+(z-l)^2=r^2$",
        "formula": "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}",
        "warning": "อย่าสับสน 2D กับ 3D — สูตร sphere มีพจน์ $(z-l)^2$ เพิ่มจาก circle",
        "examples": [
          {
            "title": "ระยะระหว่างสองจุด",
            "level": "Basic",
            "tip": "ใช้ distance formula 3D",
            "problem": "หาระยะระหว่าง $(1,2,3)$ กับ $(4,6,3)$",
            "steps": [
              "$d=\\sqrt{(4-1)^2+(6-2)^2+(3-3)^2}$",
              "$=\\sqrt{9+16+0}=5$"
            ],
            "answer": "$5$"
          },
          {
            "title": "สมการทรงกลม",
            "level": "Medium",
            "tip": "center-radius form",
            "problem": "หา center และ radius ของ $x^2+y^2+z^2-4x+6z-3=0$",
            "steps": [
              "complete square: $(x-2)^2+y^2+(z+3)^2=4+9+3=16$",
              "center $(2,0,-3)$, radius $r=4$"
            ],
            "answer": "center $(2,0,-3)$, $r=4$"
          }
        ],
        "practice": "หาระยะจากจุด $(0,0,0)$ ถึง plane $2x-y+2z=6$"
      },
      {
        "id": "vectors-3d",
        "title": "Vectors in 3D",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 12.2, p.772–782",
        "concept": "เวกเตอร์ใน $\\mathbb{R}^3$ มี magnitude $|\\mathbf{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}$ และทิศทาง การบวก component-wise: $\\mathbf{u}+\\mathbf{v}=(u_1+v_1,u_2+v_2,u_3+v_3)$ unit vector $\\hat{\\mathbf{v}}=\\mathbf{v}/|\\mathbf{v}|$",
        "formula": "\\mathbf{v}=\\langle v_1,v_2,v_3\\rangle, \\quad |\\mathbf{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}",
        "warning": "เวกเตอร์ไม่มีตำแหน่ง — การเลื่อนไม่เปลี่ยนเวกเตอร์ แต่เปลี่ยน initial point",
        "examples": [
          {
            "title": "Magnitude และ unit vector",
            "level": "Basic",
            "tip": "หา norm แล้วหาร",
            "problem": "หา $|\\mathbf{v}|$ และ unit vector ของ $\\mathbf{v}=\\langle 1,-2,2\\rangle$",
            "steps": [
              "$|\\mathbf{v}|=\\sqrt{1+4+4}=3$",
              "$\\hat{\\mathbf{v}}=\\langle 1/3,-2/3,2/3\\rangle$"
            ],
            "answer": "$|\\mathbf{v}|=3$, $\\hat{\\mathbf{v}}=\\langle\\tfrac{1}{3},-\\tfrac{2}{3},\\tfrac{2}{3}\\rangle$"
          },
          {
            "title": "Standard basis vectors",
            "level": "Basic",
            "tip": "$\\mathbf{i},\\mathbf{j},\\mathbf{k}$ เป็น unit vectors ตามแกน",
            "problem": "เขียน $\\mathbf{v}=\\langle 3,0,-2\\rangle$ ด้วย $\\mathbf{i},\\mathbf{j},\\mathbf{k}$",
            "steps": [
              "$\\mathbf{v}=3\\mathbf{i}-2\\mathbf{k}$"
            ],
            "answer": "$3\\mathbf{i}-2\\mathbf{k}$"
          }
        ],
        "practice": "ถ้า $\\mathbf{a}=\\langle 1,1,0\\rangle$ และ $\\mathbf{b}=\\langle 0,1,1\\rangle$ หา $|\\mathbf{a}+\\mathbf{b}|$"
      },
      {
        "id": "dot-cross",
        "title": "The Dot and Cross Products",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 12.3–12.4, p.782–798",
        "concept": "Dot product: $\\mathbf{a}\\cdot\\mathbf{b}=|\\mathbf{a}||\\mathbf{b}|\\cos\\theta=a_1b_1+a_2b_2+a_3b_3$ ใช้หามุมและ projection Cross product: $\\mathbf{a}\\times\\mathbf{b}$ ได้เวกเตอร์ตั้งฉากทั้ง $\\mathbf{a},\\mathbf{b}$ ขนาด $=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$",
        "formula": "\\mathbf{a}\\cdot\\mathbf{b}=a_1b_1+a_2b_2+a_3b_3, \\quad |\\mathbf{a}\\times\\mathbf{b}|=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta",
        "warning": "Cross product ไม่ commutative: $\\mathbf{a}\\times\\mathbf{b}=-\\mathbf{b}\\times\\mathbf{a}$",
        "examples": [
          {
            "title": "Dot product และมุม",
            "level": "Basic",
            "tip": "$\\cos\\theta=\\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$",
            "problem": "หามุมระหว่าง $\\mathbf{a}=\\langle 1,0,0\\rangle$ กับ $\\mathbf{b}=\\langle 1,1,0\\rangle$",
            "steps": [
              "$\\mathbf{a}\\cdot\\mathbf{b}=1$",
              "$\\cos\\theta=\\dfrac{1}{1\\cdot\\sqrt{2}}=\\dfrac{1}{\\sqrt{2}}$ → $\\theta=45^\\circ$"
            ],
            "answer": "$45^\\circ$"
          },
          {
            "title": "Cross product",
            "level": "Medium",
            "tip": "ใช้ determinant หรือ formula",
            "problem": "หา $\\mathbf{i}\\times\\mathbf{j}$",
            "steps": [
              "right-hand rule: $\\mathbf{i}\\times\\mathbf{j}=\\mathbf{k}$",
              "ตรวจ: determinant ได้ $\\langle 0,0,1\\rangle$"
            ],
            "answer": "$\\mathbf{k}$"
          }
        ],
        "practice": "หา projection ของ $\\mathbf{a}=\\langle 2,1,-1\\rangle$ บน $\\mathbf{b}=\\langle 1,2,2\\rangle$"
      },
      {
        "id": "lines-planes",
        "title": "Equations of Lines and Planes",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 12.5, p.798–808",
        "concept": "เส้นใน 3D: vector form $\\mathbf{r}=\\mathbf{r}_0+t\\mathbf{v}$ หรือ parametric $(x,y,z)=(x_0+at,y_0+bt,z_0+ct)$ ระนาบ: $ax+by+cz=d$ โดย $\\mathbf{n}=\\langle a,b,c\\rangle$ เป็น normal vector",
        "formula": "\\mathbf{r}=\\mathbf{r}_0+t\\mathbf{v}; \\quad ax+by+cz=d \\ (\\mathbf{n}=\\langle a,b,c\\rangle)",
        "warning": "normal vector ของ plane ไม่จำเป็นต้องเป็น unit vector — สามารถ scale ได้",
        "examples": [
          {
            "title": "สมการเส้นผ่านสองจุด",
            "level": "Basic",
            "tip": "direction vector = ต่างของจุด",
            "problem": "หาสมการเส้นผ่าน $(1,0,2)$ และ $(3,2,5)$",
            "steps": [
              "$\\mathbf{v}=\\langle 2,2,3\\rangle$",
              "$\\mathbf{r}=\\langle 1,0,2\\rangle+t\\langle 2,2,3\\rangle$"
            ],
            "answer": "$x=1+2t,\\ y=2t,\\ z=2+3t$"
          },
          {
            "title": "ระนาบจากจุดและ normal",
            "level": "Medium",
            "tip": "$a(x-x_0)+b(y-y_0)+c(z-z_0)=0$",
            "problem": "หาระนาบผ่าน $(2,-1,3)$ ที่มี normal $\\mathbf{n}=\\langle 1,2,-2\\rangle$",
            "steps": [
              "$1(x-2)+2(y+1)-2(z-3)=0$",
              "$x+2y-2z=0$"
            ],
            "answer": "$x+2y-2z=0$"
          }
        ],
        "practice": "หาระยะจาก $(1,1,1)$ ถึง plane $x+2y+2z=9$"
      },
      {
        "id": "quadric-surfaces",
        "title": "Cylinders and Quadric Surfaces",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 12.6, p.808–818",
        "concept": "Quadric surfaces คือพื้นผิวที่สมการเป็นกำลังสองของ $x,y,z$ ได้แก่ ellipsoid, hyperboloid, paraboloid, cone, cylinder จำรูปจาก traces บน coordinate planes",
        "formula": "\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1 \\text{ (ellipsoid)}; \\quad z=\\frac{x^2}{a^2}+\\frac{y^2}{b^2} \\text{ (elliptic paraboloid)}",
        "warning": "ต้องจัดรูป standard form ก่อนจำชนิด — พจน์ข้าม (cross terms) ต้องหมุนแก้",
        "examples": [
          {
            "title": "Ellipsoid",
            "level": "Basic",
            "tip": "สัญญาณ $+$ ทุกพจน์, $=1$",
            "problem": "ระบุชนิดของ $\\dfrac{x^2}{4}+\\dfrac{y^2}{9}+\\dfrac{z^2}{16}=1$",
            "steps": [
              "รูป standard ellipsoid",
              "semi-axes: $a=2,b=3,c=4$"
            ],
            "answer": "Ellipsoid"
          },
          {
            "title": "Hyperbolic paraboloid (saddle)",
            "level": "Medium",
            "tip": "สัญญาณต่างกัน: $z=\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}$",
            "problem": "ระบุชนิดของ $z=x^2-y^2$",
            "steps": [
              "trace $z=0$: $x^2=y^2$ (pair of lines)",
              "trace $z=1$: hyperbola — saddle shape"
            ],
            "answer": "Hyperbolic paraboloid"
          }
        ],
        "practice": "ระบุชนิดและ sketch traces ของ $x^2+y^2-z^2=1$"
      }
    ]
  },
  {
    "id": "multivariable",
    "title": "Multivariable Calculus",
    "description": "ฟังก์ชันหลายตัวแปร อนุพันธ์ย่อย (Chula Final ~58%)",
    "sections": [
      {
        "id": "functions-several-vars",
        "title": "Functions of Several Variables",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 14.1, p.850–860",
        "concept": "ฟังก์ชันหลายตัวแปร $f(x,y)$ หรือ $f(x,y,z)$ มี domain เป็น subset ของ $\\mathbb{R}^n$ level curves ของ $f(x,y)=k$ คือเส้น level บน xy-plane; level surfaces ใน 3D",
        "formula": "f: \\mathbb{R}^n \\supset D \\to \\mathbb{R}; \\quad f(x,y)=k \\text{ (level curve)}",
        "warning": "domain ของ $f(x,y)$ อาจถูกจำกัดโดย radical หรือ log — ตรวจทุกตัวแปร",
        "examples": [
          {
            "title": "Domain ของ $f(x,y)$",
            "level": "Basic",
            "tip": "เศษส่วนและราก — รวมเงื่อนไข",
            "problem": "หา domain ของ $f(x,y)=\\dfrac{\\ln y}{\\sqrt{4-x^2-y^2}}$",
            "steps": [
              "$\\ln y$: ต้องการ $y>0$",
              "$\\sqrt{4-x^2-y^2}$: $x^2+y^2<4$ (inside disk)",
              "domain: $\\{(x,y): x^2+y^2<4,\\ y>0\\}$"
            ],
            "answer": "$\\{(x,y): x^2+y^2<4,\\ y>0\\}$"
          },
          {
            "title": "Level curves",
            "level": "Medium",
            "tip": "ตั้ง $f(x,y)=k$ แล้ว sketch",
            "problem": "หา level curves ของ $f(x,y)=x^2+y^2$ ที่ $k=1,4$",
            "steps": [
              "$k=1$: $x^2+y^2=1$ (circle radius 1)",
              "$k=4$: $x^2+y^2=4$ (circle radius 2)"
            ],
            "answer": "circles รัศมี $1$ และ $2$"
          }
        ],
        "practice": "หาและ sketch level curves ของ $f(x,y)=xy$ ที่ $k=\\pm 1,0$"
      },
      {
        "id": "partial-derivatives",
        "title": "Partial Derivatives",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 14.3, p.870–880",
        "concept": "อนุพันธ์ย่อย $\\dfrac{\\partial f}{\\partial x}$ หาโดย derive $f$ สัมพันธ์ $x$ โดย treat $y$ (และตัวแปรอื่น) เป็นค่าคงที่ สัญลักษณ์: $f_x, f_y$ หรือ $\\dfrac{\\partial f}{\\partial x}$",
        "formula": "f_x=\\frac{\\partial f}{\\partial x}=\\lim_{h\\to 0}\\frac{f(x+h,y)-f(x,y)}{h}",
        "warning": "Clairaut's theorem: $f_{xy}=f_{yx}$ เมื่อ continuous — อย่าสลับลำดับโดยไม่ตรวจ",
        "examples": [
          {
            "title": "Partial derivatives พื้นฐาน",
            "level": "Basic",
            "tip": "treat ตัวแปรอื่นเป็น constant",
            "problem": "ถ้า $f(x,y)=x^2y+3xy^2$ หา $f_x, f_y$",
            "steps": [
              "$f_x=2xy+3y^2$",
              "$f_y=x^2+6xy$"
            ],
            "answer": "$f_x=2xy+3y^2$, $f_y=x^2+6xy$"
          },
          {
            "title": "Second partials",
            "level": "Medium",
            "tip": "derive อนุพันธ์ย่อยอีกครั้ง",
            "problem": "ถ้า $f(x,y)=e^{xy}$ หา $f_{xy}$",
            "steps": [
              "$f_x=ye^{xy}$",
              "$f_{xy}=\\dfrac{\\partial}{\\partial y}(ye^{xy})=e^{xy}+xye^{xy}=(1+xy)e^{xy}$"
            ],
            "answer": "$(1+xy)e^{xy}$"
          }
        ],
        "practice": "ถ้า $f(x,y,z)=xyz$ หา $\\dfrac{\\partial f}{\\partial z}$ และ $f_{xz}$",
        "graph": "derivative"
      },
      {
        "id": "chain-rule-multivariable",
        "title": "The Chain Rule for Multivariable Functions",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 14.5, p.890–898",
        "concept": "Chain rule หลายตัวแปร: ถ้า $z=f(x,y)$ และ $x,y$ เป็นฟังก์ชันของ $t$ แล้ว $\\dfrac{dz}{dt}=\\dfrac{\\partial f}{\\partial x}\\dfrac{dx}{dt}+\\dfrac{\\partial f}{\\partial y}\\dfrac{dy}{dt}$ กรณี implicit: $F(x,y,z)=0$ ใช้ $F_x+F_y y'+F_z z'=0$",
        "formula": "\\frac{dz}{dt}=\\frac{\\partial f}{\\partial x}\\frac{dx}{dt}+\\frac{\\partial f}{\\partial y}\\frac{dy}{dt}",
        "warning": "วาด tree diagram ช่วยไม่ให้พลาด path — ทุก path จาก $t$ ไป $z$ ต้องรวม",
        "examples": [
          {
            "title": "Chain rule กับ $t$",
            "level": "Medium",
            "tip": "หา partials แล้วคูณ derivative ของ inner",
            "problem": "ถ้า $z=x^2+y^2$, $x=\\cos t$, $y=\\sin t$ หา $\\dfrac{dz}{dt}$",
            "steps": [
              "$\\dfrac{\\partial z}{\\partial x}=2x$, $\\dfrac{\\partial z}{\\partial y}=2y$",
              "$\\dfrac{dx}{dt}=-\\sin t$, $\\dfrac{dy}{dt}=\\cos t$",
              "$\\dfrac{dz}{dt}=2\\cos t(-\\sin t)+2\\sin t(\\cos t)=0$"
            ],
            "answer": "$0$"
          },
          {
            "title": "Implicit differentiation 3D",
            "level": "Hard",
            "tip": "$F_x+F_y y'+F_z z'=0$",
            "problem": "ถ้า $x^2+y^2+z^2=1$ หา $\\dfrac{\\partial z}{\\partial x}$ ($z>0$)",
            "steps": [
              "$2x+2y\\dfrac{\\partial y}{\\partial x}+2z\\dfrac{\\partial z}{\\partial x}=0$ (treat $y$ const w.r.t. $x$)",
              "$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{x}{z}$"
            ],
            "answer": "$-\\dfrac{x}{z}$"
          }
        ],
        "practice": "ถ้า $w=xy+yz+zx$ และ $x=t, y=t^2$ หา $\\dfrac{dw}{dt}$",
        "graph": "derivative"
      },
      {
        "id": "directional-gradient",
        "title": "Directional Derivatives and Gradient",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 14.6, p.898–908",
        "concept": "Directional derivative $D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}$ โดย $\\mathbf{u}$ เป็น unit vector Gradient $\\nabla f=\\langle f_x,f_y\\rangle$ ชี้ทิศทางที่ $f$ เพิ่มเร็วที่สุด; $|\\nabla f|$ คืออัตราเพิ่มสูงสุด",
        "formula": "D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}, \\quad \\nabla f=\\langle f_x,f_y,f_z\\rangle",
        "warning": "direction vector ต้อง normalize ก่อน — ถ้าไม่ใช่ unit vector สูตรไม่ตรง",
        "examples": [
          {
            "title": "Gradient vector",
            "level": "Basic",
            "tip": "รวม partial derivatives",
            "problem": "ถ้า $f(x,y)=x^2-y^2$ หา $\\nabla f$ ที่ $(1,2)$",
            "steps": [
              "$\\nabla f=\\langle 2x,-2y\\rangle$",
              "ที่ $(1,2)$: $\\nabla f=\\langle 2,-4\\rangle$"
            ],
            "answer": "$\\langle 2,-4\\rangle$"
          },
          {
            "title": "Directional derivative",
            "level": "Medium",
            "tip": "$D_{\\mathbf{u}}f=\\nabla f\\cdot\\hat{\\mathbf{u}}$",
            "problem": "หา $D_{\\mathbf{u}}f$ ของ $f(x,y)=xy$ ที่ $(2,1)$ ทิศ $\\mathbf{u}=\\langle 1,1\\rangle$",
            "steps": [
              "$\\nabla f=\\langle y,x\\rangle$ → ที่ $(2,1)$: $\\langle 1,2\\rangle$",
              "$\\hat{\\mathbf{u}}=\\dfrac{1}{\\sqrt{2}}\\langle 1,1\\rangle$",
              "$D_{\\mathbf{u}}f=\\dfrac{1+2}{\\sqrt{2}}=\\dfrac{3}{\\sqrt{2}}$"
            ],
            "answer": "$\\dfrac{3}{\\sqrt{2}}$"
          }
        ],
        "practice": "หาทิศทางที่ $f(x,y)=x^2+xy+y^2$ เพิ่มเร็วที่สุดที่ $(1,1)$",
        "graph": "derivative"
      },
      {
        "id": "max-min-multivariable",
        "title": "Maximum and Minimum Values",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 14.7, p.908–918",
        "concept": "หาค่า max/min ของ $f(x,y)$ บน domain: (1) หา critical points จาก $f_x=0, f_y=0$ (2) second derivative test: $D=f_{xx}f_{yy}-f_{xy}^2$ — $D>0$ และ $f_{xx}>0$ → local min (3) ตรวจขอบ domain",
        "formula": "D=f_{xx}f_{yy}-f_{xy}^2; \\quad D>0,\\ f_{xx}>0 \\Rightarrow \\text{local min}",
        "warning": "Second derivative test ไม่สรุปได้เมื่อ $D=0$ — ต้องใช้วิธีอื่น",
        "examples": [
          {
            "title": "Second derivative test",
            "level": "Medium",
            "tip": "หา critical points แล้วทดสอบ $D$",
            "problem": "หา local extrema ของ $f(x,y)=x^2+y^2-2x-4y+5$",
            "steps": [
              "$f_x=2x-2=0$, $f_y=2y-4=0$ → critical $(1,2)$",
              "$f_{xx}=2, f_{yy}=2, f_{xy}=0$ → $D=4>0$, $f_{xx}>0$",
              "local minimum ที่ $(1,2)$, $f(1,2)=0$"
            ],
            "answer": "local min $(1,2)$, value $0$"
          },
          {
            "title": "Saddle point",
            "level": "Medium",
            "tip": "$D<0$ → saddle",
            "problem": "วิเคราะห์ $f(x,y)=x^2-y^2$ ที่ $(0,0)$",
            "steps": [
              "critical ที่ $(0,0)$",
              "$f_{xx}=2, f_{yy}=-2, f_{xy}=0$ → $D=-4<0$",
              "saddle point ที่ $(0,0)$"
            ],
            "answer": "saddle point ที่ origin"
          }
        ],
        "practice": "หาและจำแนก critical points ของ $f(x,y)=x^3+y^3-3xy$",
        "graph": "derivative"
      },
      {
        "id": "lagrange-multipliers",
        "title": "Lagrange Multipliers",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 14.8, p.918–926",
        "concept": "Lagrange multipliers หา extrema ของ $f(x,y)$ บน constraint $g(x,y)=0$: แก้ $\\nabla f=\\lambda\\nabla g$ และ $g=0$ ใช้เมื่อ extrema อยู่บนขอบ constraint ที่กำหนดโดย $g=0$",
        "formula": "\\nabla f=\\lambda\\nabla g, \\quad g(x,y)=0",
        "warning": "ต้องตรวจว่าได้ max หรือ min จริง — Lagrange ให้ candidate points เท่านั้น",
        "examples": [
          {
            "title": "Extremum บนวงกลม",
            "level": "Medium",
            "tip": "constraint $x^2+y^2=1$",
            "problem": "หา max/min ของ $f(x,y)=x+y$ บน $x^2+y^2=1$",
            "steps": [
              "$\\nabla f=\\langle 1,1\\rangle$, $\\nabla g=\\langle 2x,2y\\rangle$",
              "$1=2\\lambda x$, $1=2\\lambda y$ → $x=y$",
              "$2x^2=1$ → $x=\\pm\\dfrac{1}{\\sqrt{2}}$",
              "max $=\\sqrt{2}$, min $=-\\sqrt{2}$"
            ],
            "answer": "max $\\sqrt{2}$, min $-\\sqrt{2}$"
          },
          {
            "title": "Rectangular box ปริมาตรคงที่",
            "level": "Hard",
            "tip": "minimize surface area",
            "problem": "หากล่องสี่เหลี่ยมปริมาตร $V=32$ ที่มีพื้นผิวน้อยที่สุด",
            "steps": [
              "minimize $S=2(xy+yz+zx)$ s.t. $xyz=32$",
              "symmetry → $x=y=z=2$",
              "minimum surface $=24$"
            ],
            "answer": "$x=y=z=2$, min surface area $24$"
          }
        ],
        "practice": "หา max ของ $f(x,y)=xy$ บน $\\dfrac{x^2}{4}+y^2=1$ โดย Lagrange multipliers",
        "graph": "derivative"
      }
    ]
  },
  {
    "id": "double-integrals",
    "title": "Multiple Integrals",
    "description": "",
    "sections": [
      {
        "id": "double-integrals-rect",
        "title": "Double Integrals over Rectangles",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 15.1–15.2, p.928–942",
        "concept": "Double integral บนสี่เหลี่ยม $R=[a,b]\\times[c,d]$: $\\iint_R f(x,y)\\,dA=\\int_a^b\\int_c^d f(x,y)\\,dy\\,dx$ Fubini's theorem: สลับลำดับ integration ได้ถ้า $f$ continuous",
        "formula": "\\iint_R f(x,y)\\,dA=\\int_a^b\\int_c^d f(x,y)\\,dy\\,dx",
        "warning": "limits ของ integral ต้องสอดคล้องกับ region — dx ก่อน/หลัง dy เปลี่ยน limits",
        "examples": [
          {
            "title": "Iterated integral พื้นฐาน",
            "level": "Basic",
            "tip": "integrate ทีละตัวแปร",
            "problem": "หา $\\int_0^1\\int_0^2 xy\\,dy\\,dx$",
            "steps": [
              "$\\int_0^2 xy\\,dy=x\\dfrac{y^2}{2}\\Big|_0^2=2x$",
              "$\\int_0^1 2x\\,dx=[x^2]_0^1=1$"
            ],
            "answer": "$1$"
          },
          {
            "title": "Volume ใต้ surface",
            "level": "Medium",
            "tip": "$V=\\iint_R f(x,y)\\,dA$ เมื่อ $f\\ge 0$",
            "problem": "หาปริมาตรใต้ $z=1-x-y$ บน $R: 0\\le x\\le 1, 0\\le y\\le 1-x$",
            "steps": [
              "$\\int_0^1\\int_0^{1-x}(1-x-y)\\,dy\\,dx$",
              "inner: $[(1-x)y-y^2/2]_0^{1-x}=(1-x)^2/2$",
              "$\\int_0^1\\dfrac{(1-x)^2}{2}dx=\\dfrac{1}{6}$"
            ],
            "answer": "$\\dfrac{1}{6}$"
          }
        ],
        "practice": "หา $\\iint_R (x+y)\\,dA$ โดย $R=[0,2]\\times[0,1]$",
        "graph": "integral"
      },
      {
        "id": "double-integrals-general",
        "title": "Double Integrals over General Regions",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 15.2–15.3, p.938–952",
        "concept": "Region ทั่วไป Type I: $D=\\{(x,y): a\\le x\\le b, g_1(x)\\le y\\le g_2(x)\\}$ Type II: สลับบทบาท $x,y$ เลือก type ที่ทำให้ limits ง่าย",
        "formula": "D=\\{(x,y): a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\}",
        "warning": "วาด region ก่อนตั้ง limits — ข้อผิดพลาดที่พบบ่อยคือ limits ของ $y$ ผิด",
        "examples": [
          {
            "title": "Type I region",
            "level": "Medium",
            "tip": "fix $x$ แล้ว integrate $y$ จาก lower ถึง upper curve",
            "problem": "หา $\\iint_D xy\\,dA$ โดย $D$ อยู่ใต้ $y=x$ และเหนือ $y=x^2$ สำหรับ $0\\le x\\le 1$",
            "steps": [
              "$D: 0\\le x\\le 1, x^2\\le y\\le x$",
              "$\\int_0^1\\int_{x^2}^x xy\\,dy\\,dx$",
              "inner: $\\dfrac{x}{2}(x^2-x^4)$ → $\\int_0^1\\dfrac{x^3-x^5}{2}dx=\\dfrac{1}{24}$"
            ],
            "answer": "$\\dfrac{1}{24}$"
          },
          {
            "title": "Type II — เปลี่ยนลำดับ",
            "level": "Hard",
            "tip": "บาง region ง่ายกว่าเมื่อ integrate $x$ ก่อน",
            "problem": "หา area ของ $D: 0\\le y\\le 1, y\\le x\\le 1$",
            "steps": [
              "Type II: $\\int_0^1\\int_y^1 1\\,dx\\,dy$",
              "$=\\int_0^1(1-y)\\,dy=\\dfrac{1}{2}$"
            ],
            "answer": "$\\dfrac{1}{2}$"
          }
        ],
        "practice": "หา $\\iint_D e^x\\,dA$ โดย $D$ เป็น triangle ด้วย vertices $(0,0),(1,0),(1,1)$",
        "graph": "integral"
      },
      {
        "id": "double-integrals-polar",
        "title": "Double Integrals in Polar Coordinates",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 15.4, p.952–962",
        "concept": "ใน polar coordinates: $x=r\\cos\\theta$, $y=r\\sin\\theta$, $dA=r\\,dr\\,d\\theta$ ใช้เมื่อ region หรือ integrand มี symmetry วงกลม/เส้นรอบวง",
        "formula": "x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ dA=r\\,dr\\,d\\theta",
        "warning": "อย่าลืม factor $r$ ใน $dA$ — ถ้าไม่มีจะได้ area/volume ผิด",
        "examples": [
          {
            "title": "Disk ใน polar",
            "level": "Basic",
            "tip": "$0\\le r\\le R$, $0\\le\\theta\\le 2\\pi$",
            "problem": "หา area ของ disk รัศมี $R$ ด้วย polar",
            "steps": [
              "$A=\\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\theta$",
              "$=\\int_0^{2\\pi}\\dfrac{R^2}{2}d\\theta=\\pi R^2$"
            ],
            "answer": "$\\pi R^2$"
          },
          {
            "title": "Integrand มี $x^2+y^2$",
            "level": "Medium",
            "tip": "$x^2+y^2=r^2$ ทำให้ integrand ง่าย",
            "problem": "หา $\\iint_D (x^2+y^2)\\,dA$ โดย $D: x^2+y^2\\le 4$",
            "steps": [
              "$\\int_0^{2\\pi}\\int_0^2 r^2\\cdot r\\,dr\\,d\\theta$",
              "$=\\int_0^{2\\pi}\\dfrac{16}{4}d\\theta=8\\pi$"
            ],
            "answer": "$8\\pi$"
          }
        ],
        "practice": "หา volume ใต้ $z=\\sqrt{x^2+y^2}$ บน $x^2+y^2\\le 1$ โดย polar coordinates",
        "graph": "integral"
      }
    ]
  },
  {
    "id": "differential-equations",
    "title": "Introduction to Differential Equations",
    "description": "",
    "sections": [
      {
        "id": "intro-ode",
        "title": "Introduction to Differential Equations",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 9.1, p.549–558",
        "concept": "สมการเชิงอนุพันธ์ (ODE) ระบุความสัมพันธ์ระหว่างฟังก์ชันและอนุพันธ์ของมัน ลำดับของ ODE คืออนุพันธ์สูงสุด initial value problem กำหนด $y$ และอนุพันธ์ที่จุดเริ่ม",
        "formula": "F(x,y,y',\\ldots,y^{(n)})=0; \\quad y(x_0)=y_0",
        "warning": "existence-uniqueness ต้องการ $f$ continuous และ Lipschitz — ไม่ใช่ทุก ODE มี solution เดียว",
        "examples": [
          {
            "title": "ระบุ order และ linearity",
            "level": "Basic",
            "tip": "linear: coefficients ของ $y^{(k)}$ เป็นฟังก์ชันของ $x$ เท่านั้น",
            "problem": "ระบุ order ของ $y''+xy'+y=\\sin x$",
            "steps": [
              "อนุพันธ์สูงสุดคือ $y''$ → order 2",
              "linear in $y, y', y''$"
            ],
            "answer": "order 2, linear"
          },
          {
            "title": "ตรวจ general solution",
            "level": "Medium",
            "tip": "แทนกลับเข้าสมการ",
            "problem": "ตรวจว่า $y=C_1 e^x+C_2 e^{-x}$ เป็น solution ของ $y''-y=0$",
            "steps": [
              "$y''=C_1 e^x+C_2 e^{-x}=y$",
              "$y''-y=0$ ✓"
            ],
            "answer": "ใช่ — general solution"
          }
        ],
        "practice": "ระบุ order และ linearity ของ $y'''+(y')^2=y$"
      },
      {
        "id": "separable-equations",
        "title": "Separable Equations",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 9.3, p.568–576",
        "concept": "Separable ODE: $\\dfrac{dy}{dx}=g(x)h(y)$ แยก $\\dfrac{dy}{h(y)}=g(x)dx$ แล้ว integrate ทั้งสองข้าง ใส่ constant จาก initial condition",
        "formula": "\\frac{dy}{dx}=g(x)h(y) \\Rightarrow \\int\\frac{dy}{h(y)}=\\int g(x)\\,dx",
        "warning": "ตรวจ steady-state solutions ที่ $h(y_0)=0$ แยก — อาจหายเมื่อหาร",
        "examples": [
          {
            "title": "Exponential decay",
            "level": "Basic",
            "tip": "แยกตัวแปรแล้ว integrate",
            "problem": "แก้ $\\dfrac{dy}{dx}=-2y$, $y(0)=5$",
            "steps": [
              "$\\dfrac{dy}{y}=-2dx$ → $\\ln|y|=-2x+C$",
              "$y=Ke^{-2x}$; $y(0)=5$ → $K=5$"
            ],
            "answer": "$y=5e^{-2x}$"
          },
          {
            "title": "Logistic equation",
            "level": "Medium",
            "tip": "partial fractions หลังแยกตัวแปร",
            "problem": "แก้ $\\dfrac{dy}{dx}=y(1-y)$, $y(0)=1/2$",
            "steps": [
              "$\\dfrac{dy}{y(1-y)}=dx$",
              "$\\ln\\left|\\dfrac{y}{1-y}\\right|=x+C$",
              "$y(0)=1/2$ → $C=0$ → $y=\\dfrac{e^x}{1+e^x}$"
            ],
            "answer": "$y=\\dfrac{e^x}{1+e^x}$"
          }
        ],
        "practice": "แก้ $\\dfrac{dy}{dx}=\\dfrac{x}{y^2}$ โดย $y(1)=1$"
      },
      {
        "id": "linear-first-order",
        "title": "Linear First-Order Equations",
        "source": "Stewart Calculus Early Transcendentals 9th ed., Ch 9.5, p.591–600",
        "concept": "Linear first-order ODE: $y'+P(x)y=Q(x)$ ใช้ integrating factor $\\mu(x)=e^{\\int P(x)dx}$ แล้ว $(\\mu y)'=\\mu Q$ ได้ $\\mu y=\\int\\mu Q\\,dx+C$",
        "formula": "y'+P(x)y=Q(x), \\quad \\mu=e^{\\int P\\,dx}, \\quad y=\\frac{1}{\\mu}\\left(\\int\\mu Q\\,dx+C\\right)",
        "warning": "integrating factor ต้อง integrate $P(x)$ ถูกต้อง — อย่าลืม constant ใน exponent ถ้า $P$ ไม่ใช่ antiderivative ง่าย",
        "examples": [
          {
            "title": "Integrating factor พื้นฐาน",
            "level": "Medium",
            "tip": "$\\mu=e^{\\int P dx}$",
            "problem": "แก้ $y'+2y=6$, $y(0)=1$",
            "steps": [
              "$\\mu=e^{2x}$",
              "$(e^{2x}y)'=6e^{2x}$ → $e^{2x}y=3e^{2x}+C$",
              "$y=3+Ce^{-2x}$; $y(0)=1$ → $C=-2$"
            ],
            "answer": "$y=3-2e^{-2x}$"
          },
          {
            "title": "Variable coefficient",
            "level": "Hard",
            "tip": "$P(x)=1/x$ → $\\mu=x$",
            "problem": "แก้ $xy'+y=x^2$ ($x>0$)",
            "steps": [
              "แบ่ง $x$: $y'+\\dfrac{1}{x}y=x$",
              "$\\mu=x$ → $(xy)'=x^2$ → $xy=\\dfrac{x^3}{3}+C$",
              "$y=\\dfrac{x^2}{3}+\\dfrac{C}{x}$"
            ],
            "answer": "$y=\\dfrac{x^2}{3}+\\dfrac{C}{x}$"
          }
        ],
        "practice": "แก้ $y'+y\\tan x=\\sec x$ โดย integrating factor"
      }
    ]
  }
]
};
