// Statische Vektor-Illustrationen (kein Foto nötig, laden immer, keine Bewegung).
const BG = '#2f353c';
const DARK = '#262b31';
const GOLD = '#c4955a';
const CREAM = '#eadfca';
const SLATE = '#5a626b';

const grid = (cols, rows) =>
  Array.from({ length: rows }, (_, j) => Array.from({ length: cols }, (_, i) => [i, j])).flat();

const Sparkle = ({ x, y, s = 1 }) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M0-18L4-4L18 0L4 4L0 18L-4 4L-18 0L-4-4Z"
    fill={CREAM}
  />
);

const Car = ({ body = GOLD }) => (
  <>
    <path
      d="M130 360 L170 290 Q185 270 215 268 L440 262 Q480 262 505 290 L545 320 L640 335 Q670 340 670 365 L670 390 L130 390 Z"
      fill={body}
    />
    <polygon points="195,325 218,288 325,285 325,325" fill={CREAM} />
    <polygon points="345,325 345,285 440,283 482,325" fill={CREAM} />
    <circle cx="230" cy="395" r="46" fill="#1c2025" />
    <circle cx="230" cy="395" r="20" fill={CREAM} />
    <circle cx="560" cy="395" r="46" fill="#1c2025" />
    <circle cx="560" cy="395" r="20" fill={CREAM} />
  </>
);

const scenes = {
  gebaeudemanagement: (
    <>
      <rect y="450" width="800" height="70" fill={DARK} />
      <rect x="200" y="100" width="200" height="350" fill={CREAM} />
      {grid(4, 6).map(([i, j]) => (
        <rect key={`a${i}${j}`} x={220 + i * 45} y={125 + j * 52} width="30" height="36" fill="#3d444c" />
      ))}
      <rect x="420" y="200" width="170" height="250" fill={GOLD} />
      {grid(3, 4).map(([i, j]) => (
        <rect key={`b${i}${j}`} x={440 + i * 50} y={222 + j * 55} width="32" height="38" fill={CREAM} opacity="0.85" />
      ))}
      <rect x="90" y="290" width="90" height="160" fill={SLATE} />
      {grid(2, 3).map(([i, j]) => (
        <rect key={`c${i}${j}`} x={106 + i * 38} y={308 + j * 45} width="24" height="30" fill={BG} />
      ))}
      <Sparkle x={620} y={150} s={1.3} />
      <Sparkle x={680} y={240} s={0.8} />
      <Sparkle x={150} y={200} s={0.9} />
      <polygon points="640,400 710,400 698,450 652,450" fill={GOLD} />
      <path d="M648 400 Q675 360 702 400" fill="none" stroke={CREAM} strokeWidth="5" />
    </>
  ),

  'it-services': (
    <>
      <rect x="190" y="100" width="420" height="270" rx="14" fill={CREAM} />
      <rect x="210" y="120" width="380" height="230" fill={DARK} />
      {[
        [235, 150, 120, GOLD],
        [255, 178, 200, CREAM],
        [255, 206, 150, CREAM],
        [235, 234, 90, GOLD],
        [255, 262, 220, CREAM],
        [255, 290, 130, CREAM],
      ].map(([x, y, w, c]) => (
        <rect key={y} x={x} y={y} width={w} height="10" rx="5" fill={c} />
      ))}
      <rect x="370" y="370" width="60" height="50" fill={SLATE} />
      <rect x="320" y="420" width="160" height="14" rx="7" fill={CREAM} />
      <circle cx="665" cy="185" r="52" fill="none" stroke={GOLD} strokeWidth="16" strokeDasharray="13.6 13.6" />
      <circle cx="665" cy="185" r="40" fill={GOLD} />
      <circle cx="665" cy="185" r="16" fill={BG} />
      <rect x="80" y="320" width="160" height="110" rx="8" fill={GOLD} />
      <rect x="80" y="320" width="160" height="22" rx="8" fill={CREAM} />
      <rect x="98" y="360" width="90" height="10" rx="5" fill={CREAM} />
      <rect x="98" y="384" width="120" height="10" rx="5" fill={DARK} opacity="0.5" />
    </>
  ),

  automobile: (
    <>
      <rect y="440" width="800" height="80" fill={DARK} />
      {[40, 190, 340, 490, 640].map((x) => (
        <rect key={x} x={x} y="480" width="90" height="6" fill={SLATE} />
      ))}
      <Car />
      <Sparkle x={640} y={170} s={1.1} />
      <Sparkle x={160} y={190} s={0.8} />
    </>
  ),

  unfallfahrzeuge: (
    <>
      <rect y="440" width="800" height="80" fill={DARK} />
      <g transform="translate(-20 40) scale(0.88)">
        <Car body={CREAM} />
      </g>
      <path d="M520 330 l22 -26 l-14 -18 l26 -22" fill="none" stroke={GOLD} strokeWidth="6" strokeLinejoin="round" />
      <g transform="rotate(-35 640 280)">
        <rect x="625" y="210" width="30" height="230" rx="15" fill={GOLD} />
        <circle cx="640" cy="200" r="48" fill={GOLD} />
        <rect x="623" y="140" width="34" height="62" fill={BG} />
      </g>
    </>
  ),

  personalvermittlung: (
    <>
      <rect y="440" width="800" height="80" fill={DARK} />
      <path d="M310 440 Q310 300 400 300 Q490 300 490 440 Z" fill={GOLD} />
      <circle cx="400" cy="225" r="46" fill={CREAM} />
      <path d="M160 440 Q160 340 235 340 Q310 340 310 440 Z" fill={CREAM} />
      <circle cx="235" cy="283" r="36" fill={GOLD} />
      <path d="M490 440 Q490 340 565 340 Q640 340 640 440 Z" fill={CREAM} />
      <circle cx="565" cy="283" r="36" fill={GOLD} />
      <path d="M235 215 Q400 80 565 215" fill="none" stroke={GOLD} strokeWidth="4" strokeDasharray="6 12" />
      <circle cx="235" cy="215" r="9" fill={GOLD} />
      <circle cx="565" cy="215" r="9" fill={GOLD} />
      <circle cx="400" cy="130" r="9" fill={CREAM} />
    </>
  ),

  'import-export': (
    <>
      <rect y="400" width="800" height="120" fill={DARK} />
      <circle cx="270" cy="240" r="130" fill={DARK} stroke={CREAM} strokeWidth="6" />
      <ellipse cx="270" cy="240" rx="130" ry="46" fill="none" stroke={CREAM} strokeWidth="4" />
      <ellipse cx="270" cy="240" rx="56" ry="130" fill="none" stroke={CREAM} strokeWidth="4" />
      <line x1="270" y1="110" x2="270" y2="370" stroke={CREAM} strokeWidth="4" />
      <rect x="470" y="330" width="110" height="64" fill={GOLD} />
      <rect x="590" y="330" width="110" height="64" fill={CREAM} />
      <rect x="530" y="262" width="110" height="64" fill={SLATE} />
      {[490, 510, 550, 570, 610, 630, 670, 690, 550, 570, 590, 610].map((x, i) => (
        <rect key={i} x={x} y={i < 8 ? 336 : 268} width="4" height={i < 8 ? 52 : 52} fill={BG} opacity="0.35" />
      ))}
      <path d="M430 150 Q560 70 690 170" fill="none" stroke={GOLD} strokeWidth="6" />
      <polygon points="700,176 668,176 684,148" fill={GOLD} transform="rotate(35 690 170)" />
    </>
  ),
};

export default function Illustration({ name, label = '' }) {
  return (
    <svg
      className="illustration"
      viewBox="0 0 800 520"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="520" fill={BG} />
      {scenes[name]}
    </svg>
  );
}

// Vollflächiger Hero-Hintergrund (Stadt-Szene). Ein echtes Foto hero.jpg ersetzt ihn automatisch.
const rnd = (n) => ((n * 9301 + 49297) % 233280) / 233280;

function layer(seed, minW, maxW, minH, maxH) {
  const out = [];
  let x = -40;
  let i = seed;
  while (x < 1600) {
    const w = Math.round(minW + rnd(i++) * (maxW - minW));
    const h = Math.round(minH + rnd(i++) * (maxH - minH));
    out.push({ x, w, h });
    x += w + Math.round(rnd(i++) * 14);
  }
  return out;
}

const back = layer(3, 90, 150, 330, 560);
const mid = layer(11, 80, 140, 220, 420);
const front = layer(23, 100, 180, 120, 280);

function Windows({ b, base, seed, op }) {
  const cols = Math.floor((b.w - 24) / 26);
  const rows = Math.floor((b.h - 30) / 34);
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rnd(seed + b.x + r * 7 + c * 13) > 0.55) {
        cells.push(
          <rect key={r + '-' + c} x={b.x + 14 + c * 26} y={base - b.h + 18 + r * 34} width="14" height="20" fill={GOLD} opacity={op} />
        );
      }
    }
  }
  return <>{cells}</>;
}

export function Skyline() {
  return (
    <svg className="hero-art" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141f2d" />
          <stop offset="0.65" stopColor="#26333f" />
          <stop offset="1" stopColor="#4a4540" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.5" cy="1" r="0.7">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.45" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#hero-sky)" />
      <rect width="1600" height="900" fill="url(#hero-glow)" />
      {back.map((b) => (
        <rect key={'b' + b.x} x={b.x} y={900 - b.h} width={b.w} height={b.h} fill="#ffffff" opacity="0.05" />
      ))}
      {mid.map((b) => (
        <g key={'m' + b.x}>
          <rect x={b.x} y={900 - b.h} width={b.w} height={b.h} fill="#1b2430" opacity="0.7" />
          <Windows b={b} base={900} seed={5} op={0.35} />
        </g>
      ))}
      {front.map((b) => (
        <g key={'f' + b.x}>
          <rect x={b.x} y={900 - b.h} width={b.w} height={b.h} fill="#161c25" />
          <Windows b={b} base={900} seed={9} op={0.6} />
        </g>
      ))}
    </svg>
  );
}
