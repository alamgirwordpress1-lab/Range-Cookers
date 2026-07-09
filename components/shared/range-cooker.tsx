import { type FinishId } from "@/lib/product";
import { cn } from "@/lib/utils";

/**
 * PLACEHOLDER PRODUCT VISUAL.
 * A finish-aware SVG illustration of a 90cm range cooker, drawn entirely in
 * code so the page ships with no external assets. Swap this for real product
 * photography (one image per finish) before publishing — see README checklist.
 */

type Palette = {
  body: string;
  top: string;
  hob: string;
  panel: string;
  door: string;
  handle: string;
  edge: string;
  gloss: number;
  brushed: boolean;
};

const PALETTES: Record<FinishId, Palette> = {
  "stainless-steel": {
    body: "#D7DBDF",
    top: "#C3C8CD",
    hob: "#B7BCC2",
    panel: "#CCD1D6",
    door: "#D0D4D8",
    handle: "#EEF0F2",
    edge: "#A7ADB3",
    gloss: 0.5,
    brushed: true,
  },
  "matt-black": {
    body: "#2C2C31",
    top: "#242428",
    hob: "#1D1D21",
    panel: "#2F2F34",
    door: "#2A2A2F",
    handle: "#C7CACE",
    edge: "#3D3D43",
    gloss: 0.14,
    brushed: false,
  },
  "matt-white": {
    body: "#EBE9E3",
    top: "#DFDCD4",
    hob: "#D4D1C9",
    panel: "#E5E2DB",
    door: "#E8E5DE",
    handle: "#CFCEC7",
    edge: "#D0CDC4",
    gloss: 0.32,
    brushed: false,
  },
};

function Burner({ cx, cy, size }: { cx: number; cy: number; size: number }) {
  const half = size / 2;
  return (
    <g>
      {/* cast iron grate */}
      <rect
        x={cx - half}
        y={cy - half}
        width={size}
        height={size}
        rx={10}
        fill="#26262B"
        stroke="#37373D"
        strokeWidth={1.5}
      />
      <line x1={cx - half + 8} y1={cy} x2={cx + half - 8} y2={cy} stroke="#3c3c43" strokeWidth={3} />
      <line x1={cx} y1={cy - half + 8} x2={cx} y2={cy + half - 8} stroke="#3c3c43" strokeWidth={3} />
      {/* burner */}
      <circle cx={cx} cy={cy} r={size * 0.28} fill="#1b1b1f" />
      <circle cx={cx} cy={cy} r={size * 0.28} fill="none" stroke="#54545c" strokeWidth={2} />
      <circle cx={cx} cy={cy} r={size * 0.14} fill="#0f0f12" />
    </g>
  );
}

function Knob({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g className="ft">
      <circle cx={cx} cy={cy} r={15} fill="#2b2b2f" />
      <circle cx={cx} cy={cy} r={15} fill="none" stroke="#B4B4B4" strokeWidth={2.5} />
      <line
        x1={cx}
        y1={cy}
        x2={cx}
        y2={cy - 10}
        stroke="#EDEDED"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </g>
  );
}

export function RangeCooker({
  finishId,
  className,
}: {
  finishId: FinishId;
  className?: string;
}) {
  const c = PALETTES[finishId];
  const knobX = [150, 210, 270, 330, 390, 450];

  return (
    <svg
      viewBox="0 0 600 640"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={`Master 90cm range cooker shown in ${finishId.replace("-", " ")}`}
    >
      <defs>
        <linearGradient id="rc-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rc-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3b42" />
          <stop offset="45%" stopColor="#161619" />
          <stop offset="100%" stopColor="#0e0e11" />
        </linearGradient>
        <clipPath id="rc-body-clip">
          <rect x={100} y={150} width={400} height={410} rx={16} />
        </clipPath>
        <clipPath id="rc-door-clip">
          <rect x={100} y={372} width={400} height={170} rx={14} />
        </clipPath>
      </defs>

      <style>{`.ft{transition:fill .45s ease, stroke .45s ease}`}</style>

      {/* grounding shadow */}
      <ellipse cx={300} cy={606} rx={214} ry={24} fill="#1a1712" opacity={0.14} />

      {/* legs */}
      <rect className="ft" x={126} y={556} width={22} height={30} rx={5} fill={c.edge} />
      <rect className="ft" x={452} y={556} width={22} height={30} rx={5} fill={c.edge} />

      {/* back guard */}
      <rect className="ft" x={112} y={118} width={376} height={38} rx={9} fill={c.top} />
      <circle cx={300} cy={137} r={7} fill="#9A9A9A" opacity={0.9} />

      {/* main body */}
      <rect className="ft" x={100} y={150} width={400} height={410} rx={16} fill={c.body} />

      <g clipPath="url(#rc-body-clip)">
        {/* cooktop */}
        <rect className="ft" x={100} y={156} width={400} height={158} fill={c.hob} />
        {/* burners: four corners + central dual-ring power burner */}
        <Burner cx={196} cy={205} size={78} />
        <Burner cx={404} cy={205} size={78} />
        <Burner cx={196} cy={276} size={78} />
        <Burner cx={404} cy={276} size={78} />
        {/* central dual-ring power burner (larger, twin ring) */}
        <g>
          <rect x={254} y={194} width={92} height={92} rx={12} fill="#26262B" stroke="#37373D" strokeWidth={1.5} />
          <line x1={262} y1={240} x2={338} y2={240} stroke="#3c3c43" strokeWidth={3} />
          <line x1={300} y1={202} x2={300} y2={278} stroke="#3c3c43" strokeWidth={3} />
          <circle cx={300} cy={240} r={26} fill="#1b1b1f" />
          <circle cx={300} cy={240} r={26} fill="none" stroke="#54545c" strokeWidth={2} />
          <circle cx={300} cy={240} r={15} fill="none" stroke="#54545c" strokeWidth={2} />
          <circle cx={300} cy={240} r={6} fill="#0f0f12" />
        </g>

        {/* fascia / control panel */}
        <rect className="ft" x={100} y={314} width={400} height={54} fill={c.panel} />
        {knobX.map((x) => (
          <Knob key={x} cx={x} cy={341} />
        ))}

        {/* brushed steel texture (steel finish only) */}
        {c.brushed && (
          <g opacity={0.22}>
            {Array.from({ length: 40 }).map((_, i) => (
              <line
                key={i}
                x1={110 + i * 10}
                y1={156}
                x2={110 + i * 10}
                y2={560}
                stroke={i % 2 ? "#ffffff" : "#7d8288"}
                strokeWidth={1}
              />
            ))}
          </g>
        )}
      </g>

      {/* oven door */}
      <g>
        <rect className="ft" x={100} y={372} width={400} height={170} rx={14} fill={c.door} />
        {/* handle */}
        <rect x={138} y={384} width={324} height={11} rx={5.5} fill={c.handle} className="ft" />
        <rect x={148} y={387} width={304} height={3} rx={1.5} fill="#ffffff" opacity={0.4} />
        {/* triple-glazed glass window */}
        <rect x={140} y={406} width={320} height={112} rx={10} fill="url(#rc-glass)" />
        <rect x={140} y={406} width={320} height={112} rx={10} fill="none" stroke={c.edge} strokeWidth={2} className="ft" />
        <rect x={152} y={414} width={296} height={36} rx={6} fill="url(#rc-gloss)" opacity={0.28} />
      </g>

      {/* plinth */}
      <rect className="ft" x={100} y={542} width={400} height={20} rx={6} fill={c.panel} />

      {/* soft top gloss across the whole appliance */}
      <g clipPath="url(#rc-body-clip)">
        <rect x={100} y={150} width={400} height={120} fill="url(#rc-gloss)" opacity={c.gloss * 0.5} />
      </g>
    </svg>
  );
}
