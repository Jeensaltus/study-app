import { ex, sec } from "./helpers.mjs";

export default {
  "calculus2/induction": sec(
    "หลักการอุปนัยเชิงคณิตศาสตร์ (Mathematical Induction) พิสูจน์ข้อความ $P(n)$ สำหรับ $n\\ge n_0$ โดย (1) พื้นฐาน: พิสูจน์ $P(n_0)$ (2) ขั้น inductive: สมมติ $P(k)$ จริง แล้วพิสูจน์ $P(k+1)$",
    "P(n_0)\\text{ true and }[P(k)\\Rightarrow P(k+1)]\\Rightarrow P(n)\\text{ for all }n\\ge n_0",
    {
      warning: "ขั้น inductive ต้องใช้สมมติฐาน $P(k)$ อย่างชัดเจน — ไม่ใช่แค่พิสูจน์ $P(k+1)$ โดยไม่สมมติ",
      examples: [
        ex(
          "ผลรวม $1+2+\\cdots+n$",
          "Basic",
          "พื้นฐาน $n=1$; inductive step บวก $k+1$ ทั้งสองข้าง",
          "พิสูจน์ $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$",
          [
            "Base: $n=1$ → LHS $=1$, RHS $=1$ ✓",
            "Assume $1+\\cdots+k=\\dfrac{k(k+1)}{2}$",
            "LHS สำหรับ $k+1$: $\\dfrac{k(k+1)}{2}+(k+1)=\\dfrac{(k+1)(k+2)}{2}$ ✓",
          ],
          "พิสูจน์ได้โดย induction"
        ),
        ex(
          "Divisibility — $3\\mid (4^n-1)$",
          "Medium",
          "จัดรูป $4^{k+1}-1$ ให้มี $4^k-1$",
          "พิสูจน์ $3$ หาร $4^n-1$ สำหรับ $n\\ge 1$",
          [
            "Base: $n=1$ → $4-1=3$ ✓",
            "Assume $3\\mid(4^k-1)$ → $4^k-1=3m$",
            "$4^{k+1}-1=4(4^k)-1=4(3m+1)-1=12m+3=3(4m+1)$ ✓",
          ],
          "$3\\mid(4^n-1)$ สำหรับทุก $n\\ge 1$"
        ),
      ],
      practice: "พิสูจน์ $1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$ โดย mathematical induction",
    }
  ),

  "calculus2/numerical-integration": sec(
    "เมื่อหาอินทิกรัลยาก ใช้การประมาณ: Midpoint, Trapezoidal และ Simpson's rule Simpson ใช้ parabola ผ่าน 3 จุด มักแม่นที่สุด: $\\int_a^b f\\approx\\dfrac{\\Delta x}{3}[f(x_0)+4f(x_1)+f(x_2)+\\cdots]$",
    "T_n=\\frac{\\Delta x}{2}[f(x_0)+2f(x_1)+\\cdots+f(x_n)], \\quad S_n=\\frac{\\Delta x}{3}[f(x_0)+4f(x_1)+2f(x_2)+\\cdots]",
    {
      warning: "Simpson's rule ต้องการจำนวนช่วงย่อย $n$ เป็นเลขคู่ — ถ้า $n$ คี่ ต้องเพิ่มช่วง",
      graph: "integral",
      examples: [
        ex(
          "Trapezoidal rule",
          "Basic",
          "$\\Delta x=\\dfrac{b-a}{n}$; น้ำหนัก endpoint 1, interior 2",
          "ประมาณ $\\int_0^1 x^2\\,dx$ ด้วย trapezoidal $n=2$",
          [
            "$\\Delta x=0.5$; $x_0=0,x_1=0.5,x_2=1$",
            "$T=\\dfrac{0.5}{2}[0+2(0.25)+1]=\\dfrac{0.5}{2}(1.5)=0.375$",
          ],
          "$0.375$ (exact $=1/3$)"
        ),
        ex(
          "Simpson's rule",
          "Medium",
          "pattern 1,4,2,4,...,1",
          "ประมาณ $\\int_0^2 x^2\\,dx$ ด้วย Simpson $n=2$",
          [
            "$\\Delta x=1$; $x_0=0,x_1=1,x_2=2$",
            "$S=\\dfrac{1}{3}[0+4(1)+4]=\\dfrac{8}{3}$",
          ],
          "$\\dfrac{8}{3}$ (exact $=8/3$)"
        ),
      ],
      practice: "ใช้ Simpson's rule กับ $n=4$ ประมาณ $\\int_0^\\pi \\sin x\\,dx$",
    }
  ),

  "calculus2/coords-3d": sec(
    "ระบบพิกัดสามมิติ $(x,y,z)$ ใช้แกน $x,y,z$ ตั้งฉากกัน ระยะระหว่าง $P(x_1,y_1,z_1)$ กับ $Q(x_2,y_2,z_2)$ คือ $d=\\sqrt{(\\Delta x)^2+(\\Delta y)^2+(\\Delta z)^2}$ สูตร midpoint และ sphere $(x-h)^2+(y-k)^2+(z-l)^2=r^2$",
    "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}",
    {
      warning: "อย่าสับสน 2D กับ 3D — สูตร sphere มีพจน์ $(z-l)^2$ เพิ่มจาก circle",
      examples: [
        ex(
          "ระยะระหว่างสองจุด",
          "Basic",
          "ใช้ distance formula 3D",
          "หาระยะระหว่าง $(1,2,3)$ กับ $(4,6,3)$",
          [
            "$d=\\sqrt{(4-1)^2+(6-2)^2+(3-3)^2}$",
            "$=\\sqrt{9+16+0}=5$",
          ],
          "$5$"
        ),
        ex(
          "สมการทรงกลม",
          "Medium",
          "center-radius form",
          "หา center และ radius ของ $x^2+y^2+z^2-4x+6z-3=0$",
          [
            "complete square: $(x-2)^2+y^2+(z+3)^2=4+9+3=16$",
            "center $(2,0,-3)$, radius $r=4$",
          ],
          "center $(2,0,-3)$, $r=4$"
        ),
      ],
      practice: "หาระยะจากจุด $(0,0,0)$ ถึง plane $2x-y+2z=6$",
    }
  ),

  "calculus2/vectors-3d": sec(
    "เวกเตอร์ใน $\\mathbb{R}^3$ มี magnitude $|\\mathbf{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}$ และทิศทาง การบวก component-wise: $\\mathbf{u}+\\mathbf{v}=(u_1+v_1,u_2+v_2,u_3+v_3)$ unit vector $\\hat{\\mathbf{v}}=\\mathbf{v}/|\\mathbf{v}|$",
    "\\mathbf{v}=\\langle v_1,v_2,v_3\\rangle, \\quad |\\mathbf{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}",
    {
      warning: "เวกเตอร์ไม่มีตำแหน่ง — การเลื่อนไม่เปลี่ยนเวกเตอร์ แต่เปลี่ยน initial point",
      examples: [
        ex(
          "Magnitude และ unit vector",
          "Basic",
          "หา norm แล้วหาร",
          "หา $|\\mathbf{v}|$ และ unit vector ของ $\\mathbf{v}=\\langle 1,-2,2\\rangle$",
          [
            "$|\\mathbf{v}|=\\sqrt{1+4+4}=3$",
            "$\\hat{\\mathbf{v}}=\\langle 1/3,-2/3,2/3\\rangle$",
          ],
          "$|\\mathbf{v}|=3$, $\\hat{\\mathbf{v}}=\\langle\\tfrac{1}{3},-\\tfrac{2}{3},\\tfrac{2}{3}\\rangle$"
        ),
        ex(
          "Standard basis vectors",
          "Basic",
          "$\\mathbf{i},\\mathbf{j},\\mathbf{k}$ เป็น unit vectors ตามแกน",
          "เขียน $\\mathbf{v}=\\langle 3,0,-2\\rangle$ ด้วย $\\mathbf{i},\\mathbf{j},\\mathbf{k}$",
          [
            "$\\mathbf{v}=3\\mathbf{i}-2\\mathbf{k}$",
          ],
          "$3\\mathbf{i}-2\\mathbf{k}$"
        ),
      ],
      practice: "ถ้า $\\mathbf{a}=\\langle 1,1,0\\rangle$ และ $\\mathbf{b}=\\langle 0,1,1\\rangle$ หา $|\\mathbf{a}+\\mathbf{b}|$",
    }
  ),

  "calculus2/dot-cross": sec(
    "Dot product: $\\mathbf{a}\\cdot\\mathbf{b}=|\\mathbf{a}||\\mathbf{b}|\\cos\\theta=a_1b_1+a_2b_2+a_3b_3$ ใช้หามุมและ projection Cross product: $\\mathbf{a}\\times\\mathbf{b}$ ได้เวกเตอร์ตั้งฉากทั้ง $\\mathbf{a},\\mathbf{b}$ ขนาด $=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$",
    "\\mathbf{a}\\cdot\\mathbf{b}=a_1b_1+a_2b_2+a_3b_3, \\quad |\\mathbf{a}\\times\\mathbf{b}|=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta",
    {
      warning: "Cross product ไม่ commutative: $\\mathbf{a}\\times\\mathbf{b}=-\\mathbf{b}\\times\\mathbf{a}$",
      examples: [
        ex(
          "Dot product และมุม",
          "Basic",
          "$\\cos\\theta=\\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$",
          "หามุมระหว่าง $\\mathbf{a}=\\langle 1,0,0\\rangle$ กับ $\\mathbf{b}=\\langle 1,1,0\\rangle$",
          [
            "$\\mathbf{a}\\cdot\\mathbf{b}=1$",
            "$\\cos\\theta=\\dfrac{1}{1\\cdot\\sqrt{2}}=\\dfrac{1}{\\sqrt{2}}$ → $\\theta=45^\\circ$",
          ],
          "$45^\\circ$"
        ),
        ex(
          "Cross product",
          "Medium",
          "ใช้ determinant หรือ formula",
          "หา $\\mathbf{i}\\times\\mathbf{j}$",
          [
            "right-hand rule: $\\mathbf{i}\\times\\mathbf{j}=\\mathbf{k}$",
            "ตรวจ: determinant ได้ $\\langle 0,0,1\\rangle$",
          ],
          "$\\mathbf{k}$"
        ),
      ],
      practice: "หา projection ของ $\\mathbf{a}=\\langle 2,1,-1\\rangle$ บน $\\mathbf{b}=\\langle 1,2,2\\rangle$",
    }
  ),

  "calculus2/lines-planes": sec(
    "เส้นใน 3D: vector form $\\mathbf{r}=\\mathbf{r}_0+t\\mathbf{v}$ หรือ parametric $(x,y,z)=(x_0+at,y_0+bt,z_0+ct)$ ระนาบ: $ax+by+cz=d$ โดย $\\mathbf{n}=\\langle a,b,c\\rangle$ เป็น normal vector",
    "\\mathbf{r}=\\mathbf{r}_0+t\\mathbf{v}; \\quad ax+by+cz=d \\ (\\mathbf{n}=\\langle a,b,c\\rangle)",
    {
      warning: "normal vector ของ plane ไม่จำเป็นต้องเป็น unit vector — สามารถ scale ได้",
      examples: [
        ex(
          "สมการเส้นผ่านสองจุด",
          "Basic",
          "direction vector = ต่างของจุด",
          "หาสมการเส้นผ่าน $(1,0,2)$ และ $(3,2,5)$",
          [
            "$\\mathbf{v}=\\langle 2,2,3\\rangle$",
            "$\\mathbf{r}=\\langle 1,0,2\\rangle+t\\langle 2,2,3\\rangle$",
          ],
          "$x=1+2t,\\ y=2t,\\ z=2+3t$"
        ),
        ex(
          "ระนาบจากจุดและ normal",
          "Medium",
          "$a(x-x_0)+b(y-y_0)+c(z-z_0)=0$",
          "หาระนาบผ่าน $(2,-1,3)$ ที่มี normal $\\mathbf{n}=\\langle 1,2,-2\\rangle$",
          [
            "$1(x-2)+2(y+1)-2(z-3)=0$",
            "$x+2y-2z=0$",
          ],
          "$x+2y-2z=0$"
        ),
      ],
      practice: "หาระยะจาก $(1,1,1)$ ถึง plane $x+2y+2z=9$",
    }
  ),

  "calculus2/quadric-surfaces": sec(
    "Quadric surfaces คือพื้นผิวที่สมการเป็นกำลังสองของ $x,y,z$ ได้แก่ ellipsoid, hyperboloid, paraboloid, cone, cylinder จำรูปจาก traces บน coordinate planes",
    "\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1 \\text{ (ellipsoid)}; \\quad z=\\frac{x^2}{a^2}+\\frac{y^2}{b^2} \\text{ (elliptic paraboloid)}",
    {
      warning: "ต้องจัดรูป standard form ก่อนจำชนิด — พจน์ข้าม (cross terms) ต้องหมุนแก้",
      examples: [
        ex(
          "Ellipsoid",
          "Basic",
          "สัญญาณ $+$ ทุกพจน์, $=1$",
          "ระบุชนิดของ $\\dfrac{x^2}{4}+\\dfrac{y^2}{9}+\\dfrac{z^2}{16}=1$",
          [
            "รูป standard ellipsoid",
            "semi-axes: $a=2,b=3,c=4$",
          ],
          "Ellipsoid"
        ),
        ex(
          "Hyperbolic paraboloid (saddle)",
          "Medium",
          "สัญญาณต่างกัน: $z=\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}$",
          "ระบุชนิดของ $z=x^2-y^2$",
          [
            "trace $z=0$: $x^2=y^2$ (pair of lines)",
            "trace $z=1$: hyperbola — saddle shape",
          ],
          "Hyperbolic paraboloid"
        ),
      ],
      practice: "ระบุชนิดและ sketch traces ของ $x^2+y^2-z^2=1$",
    }
  ),

  "calculus2/functions-several-vars": sec(
    "ฟังก์ชันหลายตัวแปร $f(x,y)$ หรือ $f(x,y,z)$ มี domain เป็น subset ของ $\\mathbb{R}^n$ level curves ของ $f(x,y)=k$ คือเส้น level บน xy-plane; level surfaces ใน 3D",
    "f: \\mathbb{R}^n \\supset D \\to \\mathbb{R}; \\quad f(x,y)=k \\text{ (level curve)}",
    {
      warning: "domain ของ $f(x,y)$ อาจถูกจำกัดโดย radical หรือ log — ตรวจทุกตัวแปร",
      examples: [
        ex(
          "Domain ของ $f(x,y)$",
          "Basic",
          "เศษส่วนและราก — รวมเงื่อนไข",
          "หา domain ของ $f(x,y)=\\dfrac{\\ln y}{\\sqrt{4-x^2-y^2}}$",
          [
            "$\\ln y$: ต้องการ $y>0$",
            "$\\sqrt{4-x^2-y^2}$: $x^2+y^2<4$ (inside disk)",
            "domain: $\\{(x,y): x^2+y^2<4,\\ y>0\\}$",
          ],
          "$\\{(x,y): x^2+y^2<4,\\ y>0\\}$"
        ),
        ex(
          "Level curves",
          "Medium",
          "ตั้ง $f(x,y)=k$ แล้ว sketch",
          "หา level curves ของ $f(x,y)=x^2+y^2$ ที่ $k=1,4$",
          [
            "$k=1$: $x^2+y^2=1$ (circle radius 1)",
            "$k=4$: $x^2+y^2=4$ (circle radius 2)",
          ],
          "circles รัศมี $1$ และ $2$"
        ),
      ],
      practice: "หาและ sketch level curves ของ $f(x,y)=xy$ ที่ $k=\\pm 1,0$",
    }
  ),

  "calculus2/partial-derivatives": sec(
    "อนุพันธ์ย่อย $\\dfrac{\\partial f}{\\partial x}$ หาโดย derive $f$ สัมพันธ์ $x$ โดย treat $y$ (และตัวแปรอื่น) เป็นค่าคงที่ สัญลักษณ์: $f_x, f_y$ หรือ $\\dfrac{\\partial f}{\\partial x}$",
    "f_x=\\frac{\\partial f}{\\partial x}=\\lim_{h\\to 0}\\frac{f(x+h,y)-f(x,y)}{h}",
    {
      warning: "Clairaut's theorem: $f_{xy}=f_{yx}$ เมื่อ continuous — อย่าสลับลำดับโดยไม่ตรวจ",
      graph: "derivative",
      examples: [
        ex(
          "Partial derivatives พื้นฐาน",
          "Basic",
          "treat ตัวแปรอื่นเป็น constant",
          "ถ้า $f(x,y)=x^2y+3xy^2$ หา $f_x, f_y$",
          [
            "$f_x=2xy+3y^2$",
            "$f_y=x^2+6xy$",
          ],
          "$f_x=2xy+3y^2$, $f_y=x^2+6xy$"
        ),
        ex(
          "Second partials",
          "Medium",
          "derive อนุพันธ์ย่อยอีกครั้ง",
          "ถ้า $f(x,y)=e^{xy}$ หา $f_{xy}$",
          [
            "$f_x=ye^{xy}$",
            "$f_{xy}=\\dfrac{\\partial}{\\partial y}(ye^{xy})=e^{xy}+xye^{xy}=(1+xy)e^{xy}$",
          ],
          "$(1+xy)e^{xy}$"
        ),
      ],
      practice: "ถ้า $f(x,y,z)=xyz$ หา $\\dfrac{\\partial f}{\\partial z}$ และ $f_{xz}$",
    }
  ),

  "calculus2/chain-rule-multivariable": sec(
    "Chain rule หลายตัวแปร: ถ้า $z=f(x,y)$ และ $x,y$ เป็นฟังก์ชันของ $t$ แล้ว $\\dfrac{dz}{dt}=\\dfrac{\\partial f}{\\partial x}\\dfrac{dx}{dt}+\\dfrac{\\partial f}{\\partial y}\\dfrac{dy}{dt}$ กรณี implicit: $F(x,y,z)=0$ ใช้ $F_x+F_y y'+F_z z'=0$",
    "\\frac{dz}{dt}=\\frac{\\partial f}{\\partial x}\\frac{dx}{dt}+\\frac{\\partial f}{\\partial y}\\frac{dy}{dt}",
    {
      warning: "วาด tree diagram ช่วยไม่ให้พลาด path — ทุก path จาก $t$ ไป $z$ ต้องรวม",
      graph: "derivative",
      examples: [
        ex(
          "Chain rule กับ $t$",
          "Medium",
          "หา partials แล้วคูณ derivative ของ inner",
          "ถ้า $z=x^2+y^2$, $x=\\cos t$, $y=\\sin t$ หา $\\dfrac{dz}{dt}$",
          [
            "$\\dfrac{\\partial z}{\\partial x}=2x$, $\\dfrac{\\partial z}{\\partial y}=2y$",
            "$\\dfrac{dx}{dt}=-\\sin t$, $\\dfrac{dy}{dt}=\\cos t$",
            "$\\dfrac{dz}{dt}=2\\cos t(-\\sin t)+2\\sin t(\\cos t)=0$",
          ],
          "$0$"
        ),
        ex(
          "Implicit differentiation 3D",
          "Hard",
          "$F_x+F_y y'+F_z z'=0$",
          "ถ้า $x^2+y^2+z^2=1$ หา $\\dfrac{\\partial z}{\\partial x}$ ($z>0$)",
          [
            "$2x+2y\\dfrac{\\partial y}{\\partial x}+2z\\dfrac{\\partial z}{\\partial x}=0$ (treat $y$ const w.r.t. $x$)",
            "$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{x}{z}$",
          ],
          "$-\\dfrac{x}{z}$"
        ),
      ],
      practice: "ถ้า $w=xy+yz+zx$ และ $x=t, y=t^2$ หา $\\dfrac{dw}{dt}$",
    }
  ),

  "calculus2/directional-gradient": sec(
    "Directional derivative $D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}$ โดย $\\mathbf{u}$ เป็น unit vector Gradient $\\nabla f=\\langle f_x,f_y\\rangle$ ชี้ทิศทางที่ $f$ เพิ่มเร็วที่สุด; $|\\nabla f|$ คืออัตราเพิ่มสูงสุด",
    "D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}, \\quad \\nabla f=\\langle f_x,f_y,f_z\\rangle",
    {
      warning: "direction vector ต้อง normalize ก่อน — ถ้าไม่ใช่ unit vector สูตรไม่ตรง",
      graph: "derivative",
      examples: [
        ex(
          "Gradient vector",
          "Basic",
          "รวม partial derivatives",
          "ถ้า $f(x,y)=x^2-y^2$ หา $\\nabla f$ ที่ $(1,2)$",
          [
            "$\\nabla f=\\langle 2x,-2y\\rangle$",
            "ที่ $(1,2)$: $\\nabla f=\\langle 2,-4\\rangle$",
          ],
          "$\\langle 2,-4\\rangle$"
        ),
        ex(
          "Directional derivative",
          "Medium",
          "$D_{\\mathbf{u}}f=\\nabla f\\cdot\\hat{\\mathbf{u}}$",
          "หา $D_{\\mathbf{u}}f$ ของ $f(x,y)=xy$ ที่ $(2,1)$ ทิศ $\\mathbf{u}=\\langle 1,1\\rangle$",
          [
            "$\\nabla f=\\langle y,x\\rangle$ → ที่ $(2,1)$: $\\langle 1,2\\rangle$",
            "$\\hat{\\mathbf{u}}=\\dfrac{1}{\\sqrt{2}}\\langle 1,1\\rangle$",
            "$D_{\\mathbf{u}}f=\\dfrac{1+2}{\\sqrt{2}}=\\dfrac{3}{\\sqrt{2}}$",
          ],
          "$\\dfrac{3}{\\sqrt{2}}$"
        ),
      ],
      practice: "หาทิศทางที่ $f(x,y)=x^2+xy+y^2$ เพิ่มเร็วที่สุดที่ $(1,1)$",
    }
  ),

  "calculus2/max-min-multivariable": sec(
    "หาค่า max/min ของ $f(x,y)$ บน domain: (1) หา critical points จาก $f_x=0, f_y=0$ (2) second derivative test: $D=f_{xx}f_{yy}-f_{xy}^2$ — $D>0$ และ $f_{xx}>0$ → local min (3) ตรวจขอบ domain",
    "D=f_{xx}f_{yy}-f_{xy}^2; \\quad D>0,\\ f_{xx}>0 \\Rightarrow \\text{local min}",
    {
      warning: "Second derivative test ไม่สรุปได้เมื่อ $D=0$ — ต้องใช้วิธีอื่น",
      graph: "derivative",
      examples: [
        ex(
          "Second derivative test",
          "Medium",
          "หา critical points แล้วทดสอบ $D$",
          "หา local extrema ของ $f(x,y)=x^2+y^2-2x-4y+5$",
          [
            "$f_x=2x-2=0$, $f_y=2y-4=0$ → critical $(1,2)$",
            "$f_{xx}=2, f_{yy}=2, f_{xy}=0$ → $D=4>0$, $f_{xx}>0$",
            "local minimum ที่ $(1,2)$, $f(1,2)=0$",
          ],
          "local min $(1,2)$, value $0$"
        ),
        ex(
          "Saddle point",
          "Medium",
          "$D<0$ → saddle",
          "วิเคราะห์ $f(x,y)=x^2-y^2$ ที่ $(0,0)$",
          [
            "critical ที่ $(0,0)$",
            "$f_{xx}=2, f_{yy}=-2, f_{xy}=0$ → $D=-4<0$",
            "saddle point ที่ $(0,0)$",
          ],
          "saddle point ที่ origin"
        ),
      ],
      practice: "หาและจำแนก critical points ของ $f(x,y)=x^3+y^3-3xy$",
    }
  ),

  "calculus2/lagrange-multipliers": sec(
    "Lagrange multipliers หา extrema ของ $f(x,y)$ บน constraint $g(x,y)=0$: แก้ $\\nabla f=\\lambda\\nabla g$ และ $g=0$ ใช้เมื่อ extrema อยู่บนขอบ constraint ที่กำหนดโดย $g=0$",
    "\\nabla f=\\lambda\\nabla g, \\quad g(x,y)=0",
    {
      warning: "ต้องตรวจว่าได้ max หรือ min จริง — Lagrange ให้ candidate points เท่านั้น",
      graph: "derivative",
      examples: [
        ex(
          "Extremum บนวงกลม",
          "Medium",
          "constraint $x^2+y^2=1$",
          "หา max/min ของ $f(x,y)=x+y$ บน $x^2+y^2=1$",
          [
            "$\\nabla f=\\langle 1,1\\rangle$, $\\nabla g=\\langle 2x,2y\\rangle$",
            "$1=2\\lambda x$, $1=2\\lambda y$ → $x=y$",
            "$2x^2=1$ → $x=\\pm\\dfrac{1}{\\sqrt{2}}$",
            "max $=\\sqrt{2}$, min $=-\\sqrt{2}$",
          ],
          "max $\\sqrt{2}$, min $-\\sqrt{2}$"
        ),
        ex(
          "Rectangular box ปริมาตรคงที่",
          "Hard",
          "minimize surface area",
          "หากล่องสี่เหลี่ยมปริมาตร $V=32$ ที่มีพื้นผิวน้อยที่สุด",
          [
            "minimize $S=2(xy+yz+zx)$ s.t. $xyz=32$",
            "symmetry → $x=y=z=2$",
            "minimum surface $=24$",
          ],
          "$x=y=z=2$, min surface area $24$"
        ),
      ],
      practice: "หา max ของ $f(x,y)=xy$ บน $\\dfrac{x^2}{4}+y^2=1$ โดย Lagrange multipliers",
    }
  ),

  "calculus2/double-integrals-rect": sec(
    "Double integral บนสี่เหลี่ยม $R=[a,b]\\times[c,d]$: $\\iint_R f(x,y)\\,dA=\\int_a^b\\int_c^d f(x,y)\\,dy\\,dx$ Fubini's theorem: สลับลำดับ integration ได้ถ้า $f$ continuous",
    "\\iint_R f(x,y)\\,dA=\\int_a^b\\int_c^d f(x,y)\\,dy\\,dx",
    {
      warning: "limits ของ integral ต้องสอดคล้องกับ region — dx ก่อน/หลัง dy เปลี่ยน limits",
      graph: "integral",
      examples: [
        ex(
          "Iterated integral พื้นฐาน",
          "Basic",
          "integrate ทีละตัวแปร",
          "หา $\\int_0^1\\int_0^2 xy\\,dy\\,dx$",
          [
            "$\\int_0^2 xy\\,dy=x\\dfrac{y^2}{2}\\Big|_0^2=2x$",
            "$\\int_0^1 2x\\,dx=[x^2]_0^1=1$",
          ],
          "$1$"
        ),
        ex(
          "Volume ใต้ surface",
          "Medium",
          "$V=\\iint_R f(x,y)\\,dA$ เมื่อ $f\\ge 0$",
          "หาปริมาตรใต้ $z=1-x-y$ บน $R: 0\\le x\\le 1, 0\\le y\\le 1-x$",
          [
            "$\\int_0^1\\int_0^{1-x}(1-x-y)\\,dy\\,dx$",
            "inner: $[(1-x)y-y^2/2]_0^{1-x}=(1-x)^2/2$",
            "$\\int_0^1\\dfrac{(1-x)^2}{2}dx=\\dfrac{1}{6}$",
          ],
          "$\\dfrac{1}{6}$"
        ),
      ],
      practice: "หา $\\iint_R (x+y)\\,dA$ โดย $R=[0,2]\\times[0,1]$",
    }
  ),

  "calculus2/double-integrals-general": sec(
    "Region ทั่วไป Type I: $D=\\{(x,y): a\\le x\\le b, g_1(x)\\le y\\le g_2(x)\\}$ Type II: สลับบทบาท $x,y$ เลือก type ที่ทำให้ limits ง่าย",
    "D=\\{(x,y): a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\}",
    {
      warning: "วาด region ก่อนตั้ง limits — ข้อผิดพลาดที่พบบ่อยคือ limits ของ $y$ ผิด",
      graph: "integral",
      examples: [
        ex(
          "Type I region",
          "Medium",
          "fix $x$ แล้ว integrate $y$ จาก lower ถึง upper curve",
          "หา $\\iint_D xy\\,dA$ โดย $D$ อยู่ใต้ $y=x$ และเหนือ $y=x^2$ สำหรับ $0\\le x\\le 1$",
          [
            "$D: 0\\le x\\le 1, x^2\\le y\\le x$",
            "$\\int_0^1\\int_{x^2}^x xy\\,dy\\,dx$",
            "inner: $\\dfrac{x}{2}(x^2-x^4)$ → $\\int_0^1\\dfrac{x^3-x^5}{2}dx=\\dfrac{1}{24}$",
          ],
          "$\\dfrac{1}{24}$"
        ),
        ex(
          "Type II — เปลี่ยนลำดับ",
          "Hard",
          "บาง region ง่ายกว่าเมื่อ integrate $x$ ก่อน",
          "หา area ของ $D: 0\\le y\\le 1, y\\le x\\le 1$",
          [
            "Type II: $\\int_0^1\\int_y^1 1\\,dx\\,dy$",
            "$=\\int_0^1(1-y)\\,dy=\\dfrac{1}{2}$",
          ],
          "$\\dfrac{1}{2}$"
        ),
      ],
      practice: "หา $\\iint_D e^x\\,dA$ โดย $D$ เป็น triangle ด้วย vertices $(0,0),(1,0),(1,1)$",
    }
  ),

  "calculus2/double-integrals-polar": sec(
    "ใน polar coordinates: $x=r\\cos\\theta$, $y=r\\sin\\theta$, $dA=r\\,dr\\,d\\theta$ ใช้เมื่อ region หรือ integrand มี symmetry วงกลม/เส้นรอบวง",
    "x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ dA=r\\,dr\\,d\\theta",
    {
      warning: "อย่าลืม factor $r$ ใน $dA$ — ถ้าไม่มีจะได้ area/volume ผิด",
      graph: "integral",
      examples: [
        ex(
          "Disk ใน polar",
          "Basic",
          "$0\\le r\\le R$, $0\\le\\theta\\le 2\\pi$",
          "หา area ของ disk รัศมี $R$ ด้วย polar",
          [
            "$A=\\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\theta$",
            "$=\\int_0^{2\\pi}\\dfrac{R^2}{2}d\\theta=\\pi R^2$",
          ],
          "$\\pi R^2$"
        ),
        ex(
          "Integrand มี $x^2+y^2$",
          "Medium",
          "$x^2+y^2=r^2$ ทำให้ integrand ง่าย",
          "หา $\\iint_D (x^2+y^2)\\,dA$ โดย $D: x^2+y^2\\le 4$",
          [
            "$\\int_0^{2\\pi}\\int_0^2 r^2\\cdot r\\,dr\\,d\\theta$",
            "$=\\int_0^{2\\pi}\\dfrac{16}{4}d\\theta=8\\pi$",
          ],
          "$8\\pi$"
        ),
      ],
      practice: "หา volume ใต้ $z=\\sqrt{x^2+y^2}$ บน $x^2+y^2\\le 1$ โดย polar coordinates",
    }
  ),

  "calculus2/intro-ode": sec(
    "สมการเชิงอนุพันธ์ (ODE) ระบุความสัมพันธ์ระหว่างฟังก์ชันและอนุพันธ์ของมัน ลำดับของ ODE คืออนุพันธ์สูงสุด initial value problem กำหนด $y$ และอนุพันธ์ที่จุดเริ่ม",
    "F(x,y,y',\\ldots,y^{(n)})=0; \\quad y(x_0)=y_0",
    {
      warning: "existence-uniqueness ต้องการ $f$ continuous และ Lipschitz — ไม่ใช่ทุก ODE มี solution เดียว",
      examples: [
        ex(
          "ระบุ order และ linearity",
          "Basic",
          "linear: coefficients ของ $y^{(k)}$ เป็นฟังก์ชันของ $x$ เท่านั้น",
          "ระบุ order ของ $y''+xy'+y=\\sin x$",
          [
            "อนุพันธ์สูงสุดคือ $y''$ → order 2",
            "linear in $y, y', y''$",
          ],
          "order 2, linear"
        ),
        ex(
          "ตรวจ general solution",
          "Medium",
          "แทนกลับเข้าสมการ",
          "ตรวจว่า $y=C_1 e^x+C_2 e^{-x}$ เป็น solution ของ $y''-y=0$",
          [
            "$y''=C_1 e^x+C_2 e^{-x}=y$",
            "$y''-y=0$ ✓",
          ],
          "ใช่ — general solution"
        ),
      ],
      practice: "ระบุ order และ linearity ของ $y'''+(y')^2=y$",
    }
  ),

  "calculus2/separable-equations": sec(
    "Separable ODE: $\\dfrac{dy}{dx}=g(x)h(y)$ แยก $\\dfrac{dy}{h(y)}=g(x)dx$ แล้ว integrate ทั้งสองข้าง ใส่ constant จาก initial condition",
    "\\frac{dy}{dx}=g(x)h(y) \\Rightarrow \\int\\frac{dy}{h(y)}=\\int g(x)\\,dx",
    {
      warning: "ตรวจ steady-state solutions ที่ $h(y_0)=0$ แยก — อาจหายเมื่อหาร",
      examples: [
        ex(
          "Exponential decay",
          "Basic",
          "แยกตัวแปรแล้ว integrate",
          "แก้ $\\dfrac{dy}{dx}=-2y$, $y(0)=5$",
          [
            "$\\dfrac{dy}{y}=-2dx$ → $\\ln|y|=-2x+C$",
            "$y=Ke^{-2x}$; $y(0)=5$ → $K=5$",
          ],
          "$y=5e^{-2x}$"
        ),
        ex(
          "Logistic equation",
          "Medium",
          "partial fractions หลังแยกตัวแปร",
          "แก้ $\\dfrac{dy}{dx}=y(1-y)$, $y(0)=1/2$",
          [
            "$\\dfrac{dy}{y(1-y)}=dx$",
            "$\\ln\\left|\\dfrac{y}{1-y}\\right|=x+C$",
            "$y(0)=1/2$ → $C=0$ → $y=\\dfrac{e^x}{1+e^x}$",
          ],
          "$y=\\dfrac{e^x}{1+e^x}$"
        ),
      ],
      practice: "แก้ $\\dfrac{dy}{dx}=\\dfrac{x}{y^2}$ โดย $y(1)=1$",
    }
  ),

  "calculus2/linear-first-order": sec(
    "Linear first-order ODE: $y'+P(x)y=Q(x)$ ใช้ integrating factor $\\mu(x)=e^{\\int P(x)dx}$ แล้ว $(\\mu y)'=\\mu Q$ ได้ $\\mu y=\\int\\mu Q\\,dx+C$",
    "y'+P(x)y=Q(x), \\quad \\mu=e^{\\int P\\,dx}, \\quad y=\\frac{1}{\\mu}\\left(\\int\\mu Q\\,dx+C\\right)",
    {
      warning: "integrating factor ต้อง integrate $P(x)$ ถูกต้อง — อย่าลืม constant ใน exponent ถ้า $P$ ไม่ใช่ antiderivative ง่าย",
      examples: [
        ex(
          "Integrating factor พื้นฐาน",
          "Medium",
          "$\\mu=e^{\\int P dx}$",
          "แก้ $y'+2y=6$, $y(0)=1$",
          [
            "$\\mu=e^{2x}$",
            "$(e^{2x}y)'=6e^{2x}$ → $e^{2x}y=3e^{2x}+C$",
            "$y=3+Ce^{-2x}$; $y(0)=1$ → $C=-2$",
          ],
          "$y=3-2e^{-2x}$"
        ),
        ex(
          "Variable coefficient",
          "Hard",
          "$P(x)=1/x$ → $\\mu=x$",
          "แก้ $xy'+y=x^2$ ($x>0$)",
          [
            "แบ่ง $x$: $y'+\\dfrac{1}{x}y=x$",
            "$\\mu=x$ → $(xy)'=x^2$ → $xy=\\dfrac{x^3}{3}+C$",
            "$y=\\dfrac{x^2}{3}+\\dfrac{C}{x}$",
          ],
          "$y=\\dfrac{x^2}{3}+\\dfrac{C}{x}$"
        ),
      ],
      practice: "แก้ $y'+y\\tan x=\\sec x$ โดย integrating factor",
    }
  ),
};
