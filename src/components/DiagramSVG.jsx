/**
 * DiagramSVG — inline SVG diagrams for physics and calculus examples
 * Each diagram is a pure SVG with labels, no external dependencies.
 */

const T = ({ x, y, children, ...props }) => (
  <text x={x} y={y} fontFamily="Sarabun, sans-serif" fontSize="12" fill="#334155" {...props}>
    {children}
  </text>
);

const Arrow = ({ x1, y1, x2, y2, color = "#378ADD", dashed = false }) => {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len, uy = dy / len;
  const hx = x2 - ux * 10, hy = y2 - uy * 10;
  return (
    <g>
      <line
        x1={x1} y1={y1} x2={hx} y2={hy}
        stroke={color} strokeWidth="2"
        strokeDasharray={dashed ? "5,3" : "none"}
      />
      <polygon
        points={`${x2},${y2} ${hx - uy * 5},${hy + ux * 5} ${hx + uy * 5},${hy - ux * 5}`}
        fill={color}
      />
    </g>
  );
};

// ─── Diagrams ────────────────────────────────────────────────────────────────

function LadderWall() {
  return (
    <svg viewBox="0 0 220 200" className="w-full max-w-xs">
      {/* Ground */}
      <line x1="20" y1="170" x2="200" y2="170" stroke="#64748b" strokeWidth="3" />
      {/* Wall */}
      <line x1="20" y1="10" x2="20" y2="170" stroke="#64748b" strokeWidth="3" />
      {/* Hatching ground */}
      {[0,1,2,3,4,5].map(i => <line key={i} x1={30+i*25} y1={170} x2={20+i*25} y2={185} stroke="#94a3b8" strokeWidth="1.5" />)}
      {/* Hatching wall */}
      {[0,1,2,3,4].map(i => <line key={i} x1={20} y1={20+i*30} x2={5} y2={30+i*30} stroke="#94a3b8" strokeWidth="1.5" />)}
      {/* Ladder */}
      <line x1="20" y1="40" x2="140" y2="170" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
      {/* Dimensions */}
      <Arrow x1={155} y1={170} x2={155} y2={40} color="#1D9E75" />
      <Arrow x1={155} y1={40} x2={155} y2={170} color="#1D9E75" />
      <T x={160} y={110} fill="#1D9E75">y</T>
      <Arrow x1={20} y1={185} x2={140} y2={185} color="#EF4444" />
      <T x={70} y={198} fill="#EF4444">x</T>
      {/* Ladder length */}
      <T x={60} y={90} fill="#F59E0B" fontWeight="bold">L = 5 m</T>
      {/* velocity arrows */}
      <Arrow x1={140} y1={170} x2={175} y2={170} color="#6C63FF" />
      <T x={178} y={174} fill="#6C63FF" fontSize="11">dx/dt</T>
      <Arrow x1={20} y1={40} x2={20} y2={15} color="#EF4444" />
      <T x={25} y={12} fill="#EF4444" fontSize="11">dy/dt</T>
    </svg>
  );
}

function ConeTank() {
  return (
    <svg viewBox="0 0 200 220" className="w-full max-w-xs">
      {/* Cone outline */}
      <path d="M 100 20 L 20 180 L 180 180 Z" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2" />
      {/* Water level */}
      <path d="M 100 20 L 62 120 L 138 120 Z" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1.5" />
      {/* Dimensions */}
      {/* Radius arrow */}
      <Arrow x1={100} y1={120} x2={138} y2={120} color="#EF4444" />
      <T x={112} y={115} fill="#EF4444">r</T>
      {/* Height arrow */}
      <Arrow x1={150} y1={20} x2={150} y2={120} color="#1D9E75" />
      <Arrow x1={150} y1={120} x2={150} y2={20} color="#1D9E75" />
      <T x={155} y={75} fill="#1D9E75">h</T>
      {/* Full height */}
      <line x1={185} y1={20} x2={185} y2={180} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
      <T x={188} y={105} fill="#64748b">H=6</T>
      {/* Full radius */}
      <Arrow x1={100} y1={193} x2={180} y2={193} color="#64748b" />
      <T x={125} y={207} fill="#64748b">R=3</T>
      {/* Water out */}
      <Arrow x1={100} y1={185} x2={100} y2={210} color="#378ADD" />
      <T x={105} y={208} fill="#378ADD" fontSize="11">dV/dt=−2</T>
    </svg>
  );
}

function BoxCut() {
  return (
    <svg viewBox="0 0 240 200" className="w-full max-w-sm">
      {/* Full square */}
      <rect x="20" y="20" width="200" height="160" fill="#F1F5F9" stroke="#64748b" strokeWidth="2" />
      {/* Cut corners - shaded */}
      {[[20,20],[200,20],[20,140],[200,140]].map(([cx,cy],i) => (
        <rect key={i} x={cx} y={cy} width="20" height="20" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
      ))}
      {/* Fold lines */}
      <line x1="40" y1="20" x2="40" y2="160" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5,3" />
      <line x1="200" y1="20" x2="200" y2="160" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5,3" />
      <line x1="20" y1="40" x2="220" y2="40" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5,3" />
      <line x1="20" y1="140" x2="220" y2="140" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5,3" />
      {/* Labels */}
      <T x={22} y={32} fill="#EF4444" fontWeight="bold">x</T>
      <Arrow x1={40} y1={185} x2={200} y2={185} color="#64748b" />
      <Arrow x1={200} y1={185} x2={40} y2={185} color="#64748b" />
      <T x={105} y={198} fill="#64748b">12−2x</T>
      <Arrow x1={8} y1={40} x2={8} y2={140} color="#64748b" />
      <T x={1} y={95} fill="#64748b" style={{writingMode:'tb'}}>12−2x</T>
      <T x={45} y={95} fill="#378ADD" fontSize="13" fontWeight="bold">Base</T>
      <T x={50} y={110} fill="#1D9E75" fontSize="11">V=x(12−2x)²</T>
    </svg>
  );
}

function FenceRect() {
  return (
    <svg viewBox="0 0 240 180" className="w-full max-w-sm">
      {/* Field */}
      <rect x="40" y="30" width="160" height="100" fill="#D1FAE5" stroke="#1D9E75" strokeWidth="2.5" />
      {/* Fence posts */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={40+i*23-3} y={25} width="6" height="10" fill="#92400e" />
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={40+i*23-3} y={125} width="6" height="10" fill="#92400e" />
      ))}
      {[0,1,2,3].map(i => (
        <rect key={i} x={35} y={30+i*33-3} width="10" height="6" fill="#92400e" />
      ))}
      {[0,1,2,3].map(i => (
        <rect key={i} x={195} y={30+i*33-3} width="10" height="6" fill="#92400e" />
      ))}
      {/* Dimensions */}
      <Arrow x1={40} y1={155} x2={200} y2={155} color="#378ADD" />
      <Arrow x1={200} y1={155} x2={40} y2={155} color="#378ADD" />
      <T x={105} y={170} fill="#378ADD" fontWeight="bold">x</T>
      <Arrow x1={220} y1={30} x2={220} y2={130} color="#EF4444" />
      <Arrow x1={220} y1={130} x2={220} y2={30} color="#EF4444" />
      <T x={225} y={85} fill="#EF4444" fontWeight="bold">y</T>
      <T x={90} y={85} fill="#1D9E75" fontSize="11">2x+2y=200</T>
      <T x={95} y={100} fill="#64748b" fontSize="11">A=xy → max</T>
    </svg>
  );
}

function AreaBetween() {
  // y=2x-x^2 vs y=x^2, intersect at x=0,1
  const pts1 = Array.from({length:21},(_,i)=>{
    const x=i/20; return [40+x*160, 130-(2*x-x*x)*80];
  });
  const pts2 = Array.from({length:21},(_,i)=>{
    const x=i/20; return [40+x*160, 130-x*x*80];
  });
  const fill1 = [...pts1, ...[...pts2].reverse()].map(([x,y])=>`${x},${y}`).join(' ');
  return (
    <svg viewBox="0 0 240 180" className="w-full max-w-sm">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="150" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="20" y1="130" x2="220" y2="130" stroke="#64748b" strokeWidth="1.5"/>
      <Arrow x1={30} y1={130} x2={30} y2={10} color="#64748b" />
      <Arrow x1={30} y1={130} x2={220} y2={130} color="#64748b" />
      <T x={215} y={145}>x</T>
      <T x={35} y={15}>y</T>
      {/* Shaded area */}
      <polygon points={fill1} fill="#DBEAFE" opacity="0.7" />
      {/* y=2x-x^2 */}
      <polyline points={pts1.map(([x,y])=>`${x},${y}`).join(' ')} fill="none" stroke="#378ADD" strokeWidth="2.5"/>
      {/* y=x^2 */}
      <polyline points={pts2.map(([x,y])=>`${x},${y}`).join(' ')} fill="none" stroke="#EF4444" strokeWidth="2.5"/>
      {/* Labels */}
      <T x={170} y={70} fill="#378ADD">y=2x−x²</T>
      <T x={170} y={105} fill="#EF4444">y=x²</T>
      <T x={100} y={90} fill="#6C63FF" fontWeight="bold">A=⅓</T>
      {/* x=0 and x=1 marks */}
      <line x1="40" y1="125" x2="40" y2="135" stroke="#64748b" strokeWidth="1.5"/>
      <T x={37} y={148}>0</T>
      <line x1="200" y1="125" x2="200" y2="135" stroke="#64748b" strokeWidth="1.5"/>
      <T x={197} y={148}>1</T>
    </svg>
  );
}

function FBDFlat() {
  return (
    <svg viewBox="0 0 240 180" className="w-full max-w-sm">
      {/* Ground */}
      <line x1="20" y1="130" x2="220" y2="130" stroke="#64748b" strokeWidth="3"/>
      {[0,1,2,3,4,5,6,7,8,9].map(i=>(
        <line key={i} x1={20+i*20} y1={130} x2={10+i*20} y2={145} stroke="#94a3b8" strokeWidth="1.5"/>
      ))}
      {/* Box */}
      <rect x="90" y="90" width="60" height="40" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2" rx="3"/>
      <T x={110} y={115} fontWeight="bold">m</T>
      {/* Weight */}
      <Arrow x1={120} y1={130} x2={120} y2={160} color="#EF4444"/>
      <T x={125} y={165} fill="#EF4444">mg</T>
      {/* Normal */}
      <Arrow x1={120} y1={90} x2={120} y2={55} color="#1D9E75"/>
      <T x={125} y={52} fill="#1D9E75">N</T>
      {/* Applied force */}
      <Arrow x1={150} y1={110} x2={195} y2={110} color="#6C63FF"/>
      <T x={198} y={114} fill="#6C63FF">F</T>
      {/* Friction */}
      <Arrow x1={90} y1={110} x2={50} y2={110} color="#F59E0B"/>
      <T x={30} y={114} fill="#F59E0B">f</T>
      {/* Acceleration */}
      <Arrow x1={120} y1={75} x2={185} y2={75} color="#64748b" dashed/>
      <T x={188} y={79} fill="#64748b" fontSize="11">a</T>
    </svg>
  );
}

function FBDIncline() {
  return (
    <svg viewBox="0 0 240 200" className="w-full max-w-sm">
      {/* Ground */}
      <line x1="20" y1="170" x2="220" y2="170" stroke="#64748b" strokeWidth="2"/>
      {/* Incline */}
      <path d="M 20 170 L 200 170 L 200 60 Z" fill="#F1F5F9" stroke="#64748b" strokeWidth="2.5"/>
      {/* Hatching */}
      {[0,1,2,3,4,5].map(i=>(
        <line key={i} x1={20+i*30} y1={170} x2={10+i*30} y2={183} stroke="#94a3b8" strokeWidth="1.5"/>
      ))}
      {/* Angle label */}
      <path d="M 170 170 A 25 25 0 0 0 188 148" fill="none" stroke="#64748b" strokeWidth="1.5"/>
      <T x={168} y={158} fontSize="11">θ</T>
      {/* Box on incline */}
      <g transform="rotate(-28, 140, 120)">
        <rect x="120" y="105" width="40" height="30" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2" rx="3"/>
        <T x={132} y={125} fontWeight="bold">m</T>
      </g>
      {/* Forces */}
      {/* mg down */}
      <Arrow x1={145} y1={130} x2={145} y2={170} color="#EF4444"/>
      <T x={150} y={175} fill="#EF4444">mg</T>
      {/* Normal (perpendicular to incline) */}
      <Arrow x1={140} y1={115} x2={115} y2={80} color="#1D9E75"/>
      <T x={105} y={75} fill="#1D9E75">N</T>
      {/* mg sinθ along incline */}
      <Arrow x1={145} y1={130} x2={170} y2={155} color="#F59E0B" dashed/>
      <T x={172} y={153} fill="#F59E0B" fontSize="11">mg sinθ</T>
      {/* mg cosθ perpendicular */}
      <Arrow x1={145} y1={130} x2={120} y2={155} color="#6C63FF" dashed/>
      <T x={80} y={165} fill="#6C63FF" fontSize="11">mg cosθ</T>
    </svg>
  );
}

function AtwoodMachine() {
  return (
    <svg viewBox="0 0 200 220" className="w-full max-w-xs">
      {/* Ceiling */}
      <line x1="40" y1="20" x2="160" y2="20" stroke="#64748b" strokeWidth="3"/>
      {[0,1,2,3,4,5].map(i=>(
        <line key={i} x1={40+i*24} y1={20} x2={30+i*24} y2={5} stroke="#94a3b8" strokeWidth="1.5"/>
      ))}
      {/* Pulley */}
      <circle cx="100" cy="30" r="12" fill="#e2e8f0" stroke="#64748b" strokeWidth="2"/>
      <circle cx="100" cy="30" r="4" fill="#64748b"/>
      {/* Rope */}
      <line x1="88" y1="30" x2="60" y2="30" stroke="#92400e" strokeWidth="2"/>
      <line x1="60" y1="30" x2="60" y2="100" stroke="#92400e" strokeWidth="2"/>
      <line x1="112" y1="30" x2="140" y2="30" stroke="#92400e" strokeWidth="2"/>
      <line x1="140" y1="30" x2="140" y2="120" stroke="#92400e" strokeWidth="2"/>
      {/* Mass 1 (lighter) */}
      <rect x="40" y="100" width="40" height="35" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2" rx="3"/>
      <T x={52} y={122} fontWeight="bold">m₁=3</T>
      {/* Mass 2 (heavier) */}
      <rect x="120" y="120" width="40" height="40" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" rx="3"/>
      <T x={130} y={144} fontWeight="bold">m₂=5</T>
      {/* Tension arrows */}
      <Arrow x1={60} y1={100} x2={60} y2={70} color="#1D9E75"/>
      <T x={65} y={68} fill="#1D9E75" fontSize="11">T</T>
      <Arrow x1={140} y1={120} x2={140} y2={88} color="#1D9E75"/>
      <T x={145} y={86} fill="#1D9E75" fontSize="11">T</T>
      {/* Weight arrows */}
      <Arrow x1={60} y1={135} x2={60} y2={160} color="#EF4444"/>
      <T x={65} y={168} fill="#EF4444" fontSize="11">m₁g</T>
      <Arrow x1={140} y1={160} x2={140} y2={185} color="#EF4444"/>
      <T x={145} y={193} fill="#EF4444" fontSize="11">m₂g</T>
      {/* Acceleration */}
      <Arrow x1={20} y1={100} x2={20} y2={135} color="#6C63FF" dashed/>
      <T x={1} y={120} fill="#6C63FF" fontSize="10">a↓</T>
      <Arrow x1={180} y1={130} x2={180} y2={95} color="#6C63FF" dashed/>
      <T x={183} y={110} fill="#6C63FF" fontSize="10">a↑</T>
    </svg>
  );
}

function CircularTop() {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-xs">
      {/* Circle track */}
      <circle cx="100" cy="110" r="70" fill="none" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="8,4"/>
      {/* Top of loop */}
      <circle cx="100" cy="40" r="10" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2"/>
      <T x={92} y={44} fontSize="10" fontWeight="bold">m</T>
      {/* Normal force (down at top) */}
      <Arrow x1={100} y1={50} x2={100} y2={75} color="#1D9E75"/>
      <T x={105} y={73} fill="#1D9E75">N</T>
      {/* Weight (down) */}
      <Arrow x1={100} y1={30} x2={100} y2={5} color="#EF4444"/>
      <T x={105} y={5} fill="#EF4444">mg</T>
      {/* Velocity (horizontal) */}
      <Arrow x1={110} y1={40} x2={155} y2={40} color="#F59E0B"/>
      <T x={158} y={44} fill="#F59E0B">v</T>
      {/* Centripetal to center */}
      <Arrow x1={100} y1={55} x2={100} y2={95} color="#6C63FF" dashed/>
      <T x={105} y={80} fill="#6C63FF" fontSize="10">toward center</T>
      {/* Center */}
      <circle cx="100" cy="110" r="4" fill="#64748b"/>
      <T x={105} y={114} fill="#64748b" fontSize="11">center</T>
      {/* Radius */}
      <line x1="100" y1="110" x2="100" y2="40" stroke="#64748b" strokeWidth="1" strokeDasharray="4,3"/>
      <T x={72} y={78} fill="#64748b" fontSize="11">r</T>
      {/* Equation */}
      <T x={20} y={185} fill="#6C63FF" fontSize="11">N+mg = mv²/r</T>
      <T x={15} y={198} fill="#64748b" fontSize="10">min speed: N=0</T>
    </svg>
  );
}

function Collision1D() {
  return (
    <svg viewBox="0 0 260 160" className="w-full max-w-sm">
      {/* Before */}
      <T x={10} y={25} fontWeight="bold" fill="#334155">Before</T>
      <line x1="10" y1="32" x2="250" y2="32" stroke="#e2e8f0" strokeWidth="1"/>
      {/* Car A before */}
      <rect x="20" y="45" width="50" height="30" rx="5" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2"/>
      <T x={30} y={64}>A: 1000</T>
      <Arrow x1={70} y1={60} x2={110} y2={60} color="#378ADD"/>
      <T x={72} y={52} fill="#378ADD" fontSize="11">20 m/s</T>
      {/* Car B before */}
      <rect x="155" y="45" width="50" height="30" rx="5" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2"/>
      <T x={163} y={64}>B: 1500</T>
      <T x={168} y={52} fill="#64748b" fontSize="11">rest</T>
      {/* Arrow */}
      <T x={115} y={95} fontSize="20" fill="#64748b">↓</T>
      {/* After */}
      <T x={10} y={120} fontWeight="bold" fill="#334155">After</T>
      <line x1="10" y1="127" x2="250" y2="127" stroke="#e2e8f0" strokeWidth="1"/>
      <rect x="80" y="135" width="100" height="30" rx="5" fill="#F3E8FF" stroke="#6C63FF" strokeWidth="2"/>
      <T x={108} y={154}>A+B: 2500</T>
      <Arrow x1={180} y1={150} x2={215} y2={150} color="#6C63FF"/>
      <T x={192} y={143} fill="#6C63FF" fontSize="11">8 m/s</T>
    </svg>
  );
}

function ProjectileCliff() {
  return (
    <svg viewBox="0 0 260 200" className="w-full max-w-sm">
      {/* Cliff */}
      <path d="M 0 80 L 60 80 L 60 180 L 0 180 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2"/>
      <T x={10} y={130} fill="#64748b" fontSize="11">H=45m</T>
      {/* Ground */}
      <line x1="0" y1="180" x2="260" y2="180" stroke="#64748b" strokeWidth="2.5"/>
      {/* Hatching ground */}
      {[0,1,2,3,4,5,6,7,8].map(i=>(
        <line key={i} x1={60+i*24} y1={180} x2={50+i*24} y2={193} stroke="#94a3b8" strokeWidth="1.5"/>
      ))}
      {/* Projectile trajectory */}
      <path d="M 60 80 Q 130 60 210 180" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="7,3"/>
      {/* Launch point */}
      <circle cx="60" cy="80" r="5" fill="#EF4444"/>
      {/* v0 arrow */}
      <Arrow x1={60} y1={80} x2={105} y2={55} color="#378ADD"/>
      <T x={85} y={52} fill="#378ADD" fontSize="11">v₀=25m/s</T>
      {/* angle */}
      <path d="M 80 80 A 20 20 0 0 0 72 63" fill="none" stroke="#64748b" strokeWidth="1.5"/>
      <T x={82} y={73} fontSize="11">30°</T>
      {/* vx label */}
      <Arrow x1={60} y1={80} x2={105} y2={80} color="#1D9E75" dashed/>
      <T x={65} y={94} fill="#1D9E75" fontSize="10">vₓ=21.65</T>
      {/* vy label */}
      <Arrow x1={60} y1={80} x2={60} y2={55} color="#EF4444" dashed/>
      <T x={63} y={52} fill="#EF4444" fontSize="10">vy=12.5</T>
      {/* Landing point */}
      <circle cx="210" cy="180" r="5" fill="#EF4444"/>
      {/* Range */}
      <Arrow x1={60} y1={195} x2={210} y2={195} color="#6C63FF"/>
      <Arrow x1={210} y1={195} x2={60} y2={195} color="#6C63FF"/>
      <T x={115} y={209} fill="#6C63FF" fontSize="11">x ≈ 98.7 m</T>
    </svg>
  );
}

function CircleArea() {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-xs">
      {/* Circle */}
      <circle cx="100" cy="100" r="70" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2"/>
      {/* Radius */}
      <line x1="100" y1="100" x2="170" y2="100" stroke="#EF4444" strokeWidth="2"/>
      <Arrow x1={100} y1={100} x2={170} y2={100} color="#EF4444"/>
      <T x={125} y={95} fill="#EF4444" fontWeight="bold">r</T>
      {/* dA/dt */}
      <T x={55} y={95} fill="#1D9E75" fontSize="12">dA/dt = ?</T>
      <T x={60} y={112} fill="#64748b" fontSize="11">A = πr²</T>
      {/* dr/dt label */}
      <Arrow x1={170} y1={100} x2={195} y2={100} color="#6C63FF"/>
      <T x={170} y={92} fill="#6C63FF" fontSize="11">dr/dt=3</T>
    </svg>
  );
}

function ElasticCollision() {
  return (
    <svg viewBox="0 0 260 160" className="w-full max-w-sm">
      <T x={10} y={22} fontWeight="bold" fill="#334155">Before</T>
      <line x1="10" y1="28" x2="250" y2="28" stroke="#e2e8f0" strokeWidth="1"/>
      <circle cx="50" cy="65" r="22" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2"/>
      <T x={40} y={69} fontWeight="bold">m₁=2</T>
      <Arrow x1={72} y1={65} x2={115} y2={65} color="#378ADD"/>
      <T x={75} y={57} fill="#378ADD" fontSize="11">3 m/s</T>
      <circle cx="175" cy="65" r="15" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2"/>
      <T x={165} y={69} fontWeight="bold">m₂=1</T>
      <T x={165} y={57} fill="#64748b" fontSize="11">rest</T>
      <T x={115} y={100} fontSize="20" fill="#64748b">↓</T>
      <T x={10} y={118} fontWeight="bold" fill="#334155">After</T>
      <line x1="10" y1="124" x2="250" y2="124" stroke="#e2e8f0" strokeWidth="1"/>
      <circle cx="80" cy="148} " r="22" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2"/>
      <circle cx="80" cy="148" r="22" fill="#DBEAFE" stroke="#378ADD" strokeWidth="2"/>
      <T x={70} y={152} fontWeight="bold">m₁=2</T>
      <Arrow x1={102} y1={148} x2={130} y2={148} color="#378ADD"/>
      <T x={105} y={140} fill="#378ADD" fontSize="11">1 m/s</T>
      <circle cx="195" cy="148" r="15" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2"/>
      <T x={185} y={152} fontWeight="bold">m₂=1</T>
      <Arrow x1={210} y1={148} x2={240} y2={148} color="#EF4444"/>
      <T x={215} y={140} fill="#EF4444" fontSize="11">4 m/s</T>
    </svg>
  );
}

function RelatedRatesCircle() {
  return <CircleArea />;
}

// ─── Map & Export ────────────────────────────────────────────────────────────

const DIAGRAMS = {
  "ladder-wall": LadderWall,
  "cone-tank": ConeTank,
  "box-cut": BoxCut,
  "fence-rect": FenceRect,
  "area-between": AreaBetween,
  "circle-area": CircleArea,
  "fbd-flat": FBDFlat,
  "fbd-incline": FBDIncline,
  "atwood": AtwoodMachine,
  "circular-top": CircularTop,
  "collision-1d": Collision1D,
  "elastic-collision": ElasticCollision,
  "projectile-cliff": ProjectileCliff,
};

export default function DiagramSVG({ type }) {
  const Component = DIAGRAMS[type];
  if (!Component) return null;
  return (
    <div className="my-3 flex justify-center rounded bg-slate-50 p-3 dark:bg-slate-800">
      <Component />
    </div>
  );
}
