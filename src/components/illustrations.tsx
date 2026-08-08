type P = { className?: string };

const S = {
  fill: "none",
  stroke: "#9a9a9a",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Plus({ x, y, r = 7 }: { x: number; y: number; r?: number }) {
  return (
    <g {...S}>
      <path d={`M${x - r} ${y}H${x + r}`} />
      <path d={`M${x} ${y - r}V${y + r}`} />
    </g>
  );
}

export function DocIllustration({ className }: P) {
  return (
    <svg viewBox="0 0 165 150" className={className} aria-hidden="true">
      <g {...S}>
        <rect x="58" y="8" width="76" height="118" rx="4" />
        <path d="M72 34h48M72 50h48M72 66h48M72 82h34" />
        <rect x="6" y="72" width="70" height="46" rx="4" />
        <rect x="16" y="82" width="20" height="20" rx="2" />
        <path d="M44 84h22M44 92h22" />
        <circle cx="46" cy="108" r="3" />
        <circle cx="56" cy="108" r="3" />
        <circle cx="66" cy="108" r="3" />
        <path d="M147 22l8 6-38 62-10 4 2-10z" />
      </g>
      <Plus x={30} y={26} />
      <Plus x={150} y={104} r={5} />
    </svg>
  );
}

export function ScreensIllustration({ className }: P) {
  return (
    <svg viewBox="0 0 175 135" className={className} aria-hidden="true">
      <g {...S}>
        <rect x="6" y="10" width="118" height="86" rx="4" />
        <path d="M20 26h44M20 38h44" />
        <rect x="20" y="52" width="24" height="24" rx="2" />
        <rect x="52" y="52" width="24" height="24" rx="2" />
        <rect x="84" y="52" width="24" height="24" rx="2" />
        <path d="M65 96v14M46 116h38" />
        <rect x="112" y="34" width="52" height="88" rx="6" fill="#fff" />
        <path d="M124 52h28M124 64h28M124 76h28M124 88h18" />
        <path d="M130 112h16" />
      </g>
      <Plus x={150} y={16} />
      <Plus x={166} y={40} r={5} />
    </svg>
  );
}

export function PhoneGearIllustration({ className }: P) {
  return (
    <svg viewBox="0 0 175 135" className={className} aria-hidden="true">
      <g {...S}>
        <rect x="46" y="8" width="66" height="112" rx="8" />
        <path d="M58 30h42M58 44h42M58 58h42M58 72h26" />
        <path d="M70 106h18" />
        <circle cx="126" cy="76" r="18" fill="#fff" />
        <circle cx="126" cy="76" r="8" />
        <path d="M126 52v-8M126 108v-8M150 76h8M94 76h8M143 59l6-6M103 99l6-6M143 93l6 6M103 53l6 6" />
      </g>
      <Plus x={20} y={44} />
      <Plus x={26} y={78} r={5} />
      <Plus x={148} y={20} />
    </svg>
  );
}

export function GlobeIllustration({ className }: P) {
  return (
    <svg viewBox="0 0 175 135" className={className} aria-hidden="true">
      <g {...S}>
        <circle cx="82" cy="64" r="52" />
        <ellipse cx="82" cy="64" rx="24" ry="52" />
        <path d="M30 64h104M40 36h84M40 92h84" />
        <circle cx="118" cy="96" r="24" fill="#fff" />
        <path d="M136 114l18 18" />
      </g>
      <Plus x={16} y={26} />
      <Plus x={12} y={106} r={5} />
      <Plus x={158} y={30} r={5} />
    </svg>
  );
}