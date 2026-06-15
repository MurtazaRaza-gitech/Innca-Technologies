import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   VERTICAL LIGHT PILLARS
   Wide blurred columns that breathe up/down
───────────────────────────────────────────── */
const PILLARS = [
  { color: "#22D3EE", left: "3%",  width: 130, dur: 12, delay: 0.0,  yA: 60,  opA: 0.13, opB: 0.38, scA: 0.72, scB: 1.18, blur: 45 },
  { color: "#2563EB", left: "13%", width: 160, dur: 16, delay: 2.2,  yA: 40,  opA: 0.10, opB: 0.32, scA: 0.78, scB: 1.22, blur: 55 },
  { color: "#22D3EE", left: "24%", width: 110, dur: 10, delay: 1.0,  yA: 80,  opA: 0.15, opB: 0.42, scA: 0.68, scB: 1.14, blur: 40 },
  { color: "#2563EB", left: "36%", width: 145, dur: 14, delay: 3.5,  yA: 55,  opA: 0.11, opB: 0.34, scA: 0.75, scB: 1.20, blur: 52 },
  { color: "#22D3EE", left: "48%", width: 125, dur: 11, delay: 0.5,  yA: 70,  opA: 0.14, opB: 0.40, scA: 0.70, scB: 1.16, blur: 46 },
  { color: "#2563EB", left: "59%", width: 150, dur: 15, delay: 1.8,  yA: 50,  opA: 0.12, opB: 0.36, scA: 0.74, scB: 1.19, blur: 53 },
  { color: "#22D3EE", left: "71%", width: 120, dur: 9,  delay: 2.8,  yA: 75,  opA: 0.13, opB: 0.39, scA: 0.71, scB: 1.15, blur: 44 },
  { color: "#2563EB", left: "82%", width: 155, dur: 17, delay: 0.8,  yA: 45,  opA: 0.10, opB: 0.30, scA: 0.80, scB: 1.24, blur: 57 },
  { color: "#22D3EE", left: "92%", width: 105, dur: 13, delay: 4.0,  yA: 65,  opA: 0.12, opB: 0.37, scA: 0.73, scB: 1.17, blur: 43 },
];

/* ─────────────────────────────────────────────
   DIAGONAL X-CROSSING BEAMS
   Rotated rectangles that create the X pattern
───────────────────────────────────────────── */
const DIAGONALS = [
  { color: "#22D3EE", rotate:  20, left: "5%",  width: 260, dur: 20, delay: 0,   op: 0.12, blur: 70 },
  { color: "#2563EB", rotate: -20, left: "55%", width: 240, dur: 24, delay: 3,   op: 0.10, blur: 80 },
  { color: "#22D3EE", rotate:  32, left: "38%", width: 210, dur: 17, delay: 1.5, op: 0.11, blur: 65 },
  { color: "#2563EB", rotate: -32, left: "20%", width: 250, dur: 22, delay: 5,   op: 0.09, blur: 75 },
  { color: "#22D3EE", rotate:  14, left: "68%", width: 230, dur: 19, delay: 2,   op: 0.10, blur: 68 },
  { color: "#2563EB", rotate: -14, left: "76%", width: 220, dur: 23, delay: 4,   op: 0.09, blur: 78 },
];

/* ─────────────────────────────────────────────
   LARGE BACKGROUND ORBS
   Massive blurred glows for color depth
───────────────────────────────────────────── */
const ORBS = [
  { color: "#2563EB", cx: "12%", cy: "30%", size: 700, dur: 22, delay: 0,   opA: 0.16, opB: 0.28 },
  { color: "#22D3EE", cx: "72%", cy: "18%", size: 600, dur: 28, delay: 6,   opA: 0.13, opB: 0.24 },
  { color: "#2563EB", cx: "45%", cy: "65%", size: 520, dur: 20, delay: 3,   opA: 0.14, opB: 0.25 },
  { color: "#22D3EE", cx: "85%", cy: "55%", size: 450, dur: 25, delay: 9,   opA: 0.12, opB: 0.22 },
];

export function AuroraBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";
  const g = isLight ? 0.35 : 1.0; // global opacity multiplier

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* ── Large color orbs ────────────────────── */}
      {ORBS.map((o, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: "absolute",
            left: o.cx,
            top: o.cy,
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: `blur(${o.size * 0.42}px)`,
            mixBlendMode: "screen",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [o.opA * g, o.opB * g, o.opA * g],
            scale:   [1, 1.18, 0.88, 1],
            x:       [0, 35, -25, 0],
            y:       [0, -45, 30, 0],
          }}
          transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Diagonal X-beams ────────────────────── */}
      {DIAGONALS.map((d, i) => (
        <motion.div
          key={`diag-${i}`}
          style={{
            position: "absolute",
            left: d.left,
            top: "-25%",
            width: d.width,
            height: "170vh",
            background: `linear-gradient(to bottom, transparent 0%, ${d.color} 25%, ${d.color} 75%, transparent 100%)`,
            filter: `blur(${d.blur}px)`,
            mixBlendMode: "screen",
            rotate: `${d.rotate}deg`,
            transformOrigin: "50% 35%",
          }}
          animate={{
            opacity: [d.op * g, d.op * 1.7 * g, d.op * 0.5 * g, d.op * g],
            y:       [0, -40, 25, 0],
          }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Vertical aurora pillars ──────────────── */}
      {PILLARS.map((p, i) => (
        <motion.div
          key={`pillar-${i}`}
          style={{
            position: "absolute",
            left: p.left,
            top: "-20vh",
            width: p.width,
            height: "155vh",
            background: `linear-gradient(to bottom,
              transparent 0%,
              ${p.color} 12%,
              ${p.color} 55%,
              ${p.color} 88%,
              transparent 100%)`,
            filter: `blur(${p.blur}px)`,
            mixBlendMode: "screen",
            transformOrigin: "50% 0%",
          }}
          animate={{
            opacity: [p.opA * g, p.opB * g, p.opA * g],
            scaleY:  [p.scA, p.scB, p.scA],
            y:       [0, p.yA, 0],
          }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Horizontal wave shimmer lines ───────── */}
      {[
        { top: "32%", colors: "#22D3EE, #2563EB, #22D3EE", dur: 8,  delay: 0,   op: 0.22 },
        { top: "58%", colors: "#2563EB, #22D3EE, #2563EB", dur: 11, delay: 2.5, op: 0.18 },
        { top: "78%", colors: "#22D3EE, #2563EB, #22D3EE", dur: 9,  delay: 1,   op: 0.15 },
      ].map((line, i) => (
        <motion.div
          key={`wave-${i}`}
          style={{
            position: "absolute",
            top: line.top,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, transparent 0%, ${line.colors}, transparent 100%)`,
            filter: "blur(6px)",
            mixBlendMode: "screen",
          }}
          animate={{
            opacity: [line.op * 0.4 * g, line.op * g, line.op * 0.3 * g, line.op * g, line.op * 0.4 * g],
            scaleX:  [0.82, 1.06, 0.88, 1.06, 0.82],
          }}
          transition={{ duration: line.dur, delay: line.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Subtle dot-grid texture ──────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          opacity: isLight ? 0.25 : 0.7,
        }}
      />

      {/* ── Edge vignettes so content stays readable */}
      <div style={{
        position: "absolute", inset: "0 0 auto 0", height: "12%",
        background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)",
        zIndex: 6,
      }} />
      <div style={{
        position: "absolute", inset: "auto 0 0 0", height: "30%",
        background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
        zIndex: 6,
      }} />
    </div>
  );
}
