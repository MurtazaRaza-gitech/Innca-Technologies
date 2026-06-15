/**
 * AuroraBackground — vivid teal/blue wave-form light effect on every page.
 *
 * Architecture:
 *   Layer 1 — Deep color orbs       (large blurred circles, colour wash)
 *   Layer 2 — SVG wave beams        (sine-curve paths crossing in an X)
 *   Layer 3 — Vertical glow columns (soft curtain pillars like the reference)
 *   Layer 4 — Dot grid texture
 *   Layer 5 — Edge vignettes        (keep text readable)
 *
 * Fixed-positioned so it renders identically on every page.
 * Mounted once in App.tsx — no per-page imports needed.
 */

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────
   SVG WAVE BEAM DEFINITIONS
   Each beam is a thick, blurred cubic-bezier path.
   Pairs of opposite-direction beams cross each other → X pattern.
   Paths use a 1440×900 viewBox that scales with the SVG.
───────────────────────────────────────────────────────── */
interface WaveBeam {
  d: string;       // SVG path data
  color: string;
  sw: number;      // stroke-width (px in viewBox coords)
  op: [number, number]; // [lo, hi] opacity keyframes
  dur: number;
  delay: number;
  blur: number;    // feGaussianBlur stdDeviation
}

const WAVE_BEAMS: WaveBeam[] = [
  // — Down-right diagonal waves (/ direction)
  {
    d: "M -200 900  C 200 500, 700 400, 900 0   C 1100 -400, 1400 100, 1600 -200",
    color: "#22D3EE", sw: 280, op: [0.13, 0.42], dur: 14, delay: 0,   blur: 55,
  },
  {
    d: "M -100 1100 C 300 700, 600 300, 900 200 C 1200 100, 1500 500, 1700 200",
    color: "#0EA5E9", sw: 220, op: [0.10, 0.35], dur: 18, delay: 2.5, blur: 65,
  },
  {
    d: "M 0 600    C 250 200, 650 600, 900 300  C 1150 0,   1450 400, 1650 100",
    color: "#22D3EE", sw: 180, op: [0.09, 0.30], dur: 11, delay: 5,   blur: 50,
  },

  // — Down-left diagonal waves (\ direction — crosses the above → X pattern)
  {
    d: "M 1600 900  C 1200 500, 700 400, 500 0   C 300 -400, 50 100,  -200 -200",
    color: "#2563EB", sw: 260, op: [0.12, 0.40], dur: 16, delay: 1,   blur: 60,
  },
  {
    d: "M 1700 1100 C 1300 700, 800 300, 500 200 C 200 100,  -50 500, -300 200",
    color: "#3B82F6", sw: 210, op: [0.10, 0.33], dur: 20, delay: 3.5, blur: 68,
  },
  {
    d: "M 1500 600  C 1200 200, 750 600, 500 300 C 250 0,    -50 400, -250 100",
    color: "#2563EB", sw: 190, op: [0.09, 0.28], dur: 13, delay: 6,   blur: 52,
  },

  // — Near-horizontal wave (adds depth at mid-screen)
  {
    d: "M -200 350 C 200 150, 600 550, 900 350  C 1200 150, 1500 450, 1700 300",
    color: "#06B6D4", sw: 170, op: [0.08, 0.26], dur: 15, delay: 4,   blur: 58,
  },
  {
    d: "M -200 550 C 300 750, 650 350, 900 550  C 1150 750, 1500 400, 1700 600",
    color: "#2563EB", sw: 160, op: [0.07, 0.24], dur: 17, delay: 7,   blur: 62,
  },
];

/* ─────────────────────────────────────────────────────────
   VERTICAL GLOW COLUMNS  (match the bright curtain look in the reference)
───────────────────────────────────────────────────────── */
const COLUMNS = [
  { c: "#00D4B8", l: "5%",  w: 85,  lo: 0.20, hi: 0.52, sA: 0.72, sB: 1.20, sw: 14, dur: 13, dly: 0.0, blur: 45 },
  { c: "#22D3EE", l: "16%", w: 110, lo: 0.24, hi: 0.58, sA: 0.68, sB: 1.24, sw: 16, dur: 11, dly: 1.4, blur: 40 },
  { c: "#0EA5E9", l: "28%", w: 75,  lo: 0.18, hi: 0.46, sA: 0.75, sB: 1.16, sw: 12, dur: 15, dly: 0.7, blur: 50 },
  { c: "#2563EB", l: "40%", w: 100, lo: 0.22, hi: 0.55, sA: 0.70, sB: 1.22, sw: 15, dur: 12, dly: 2.8, blur: 43 },
  { c: "#22D3EE", l: "52%", w: 90,  lo: 0.20, hi: 0.54, sA: 0.73, sB: 1.18, sw: 13, dur: 10, dly: 0.3, blur: 47 },
  { c: "#3B82F6", l: "63%", w: 105, lo: 0.19, hi: 0.50, sA: 0.71, sB: 1.20, sw: 14, dur: 14, dly: 1.8, blur: 44 },
  { c: "#06B6D4", l: "74%", w: 80,  lo: 0.21, hi: 0.53, sA: 0.74, sB: 1.17, sw: 12, dur: 11, dly: 3.0, blur: 46 },
  { c: "#2563EB", l: "84%", w: 95,  lo: 0.17, hi: 0.46, sA: 0.76, sB: 1.15, sw: 13, dur: 16, dly: 0.9, blur: 52 },
  { c: "#22D3EE", l: "93%", w: 70,  lo: 0.20, hi: 0.50, sA: 0.69, sB: 1.21, sw: 11, dur: 12, dly: 2.1, blur: 42 },
];

/* ─────────────────────────────────────────────────────────
   DEEP GLOW ORBS
───────────────────────────────────────────────────────── */
const ORBS = [
  { c: "#22D3EE", cx: "15%", cy: "22%", r: 650, lo: 0.25, hi: 0.42, dur: 20, dly: 0   },
  { c: "#2563EB", cx: "78%", cy: "18%", r: 700, lo: 0.22, hi: 0.38, dur: 26, dly: 5   },
  { c: "#0EA5E9", cx: "45%", cy: "72%", r: 580, lo: 0.23, hi: 0.40, dur: 18, dly: 3   },
  { c: "#2563EB", cx: "88%", cy: "58%", r: 500, lo: 0.18, hi: 0.32, dur: 23, dly: 8   },
];

export function AuroraBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";
  const g = isLight ? 0.28 : 1.0;

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      {/* ── Layer 1: Deep glow orbs ─────────────── */}
      {ORBS.map((o, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: "absolute",
            left: o.cx, top: o.cy,
            width: o.r, height: o.r,
            borderRadius: "50%",
            background: o.c,
            filter: `blur(${o.r * 0.43}px)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [o.lo * g, o.hi * g, o.lo * g],
            scale:   [1, 1.15, 0.88, 1],
            x:       [0, 28, -18, 0],
            y:       [0, -38, 22, 0],
          }}
          transition={{ duration: o.dur, delay: o.dly, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Layer 2: SVG wave beams crossing in X ── */}
      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <defs>
          {WAVE_BEAMS.map((_, i) => (
            <filter key={`f-${i}`} id={`wf-${i}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={_.blur} result="blur" />
            </filter>
          ))}
        </defs>

        {WAVE_BEAMS.map((beam, i) => (
          <motion.path
            key={`wb-${i}`}
            d={beam.d}
            stroke={beam.color}
            strokeWidth={beam.sw}
            fill="none"
            filter={`url(#wf-${i})`}
            animate={{
              strokeOpacity: [beam.op[0] * g, beam.op[1] * g, beam.op[0] * 0.7 * g, beam.op[1] * g, beam.op[0] * g],
              /* Subtle y-shift gives the wave a "flowing" feel */
            }}
            transition={{
              duration: beam.dur,
              delay: beam.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>

      {/* ── Layer 3: Vertical aurora curtain columns ── */}
      {COLUMNS.map((p, i) => (
        <motion.div
          key={`col-${i}`}
          style={{
            position: "absolute",
            left: p.l,
            top: "-18vh",
            width: p.w,
            height: "155vh",
            background: `linear-gradient(to bottom,
              transparent 0%,
              ${p.c} 8%,
              ${p.c} 55%,
              ${p.c} 92%,
              transparent 100%)`,
            filter: `blur(${p.blur}px)`,
            transformOrigin: "50% 0%",
          }}
          animate={{
            opacity: [p.lo * g, p.hi * g, p.lo * g],
            scaleY:  [p.sA, p.sB, p.sA],
            x:       [0, p.sw, -p.sw * 0.6, p.sw * 0.3, 0],
          }}
          transition={{
            opacity: { duration: p.dur,       delay: p.dly, repeat: Infinity, ease: "easeInOut" },
            scaleY:  { duration: p.dur * 1.1, delay: p.dly, repeat: Infinity, ease: "easeInOut" },
            x:       { duration: p.dur * 1.9, delay: p.dly, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* ── Layer 4: Dot grid ────────────────────── */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: isLight ? 0.20 : 0.75,
        }}
      />

      {/* ── Layer 5: Edge vignettes ──────────────── */}
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: "8%",
        background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)", zIndex: 9 }} />
      <div style={{ position: "absolute", inset: "auto 0 0 0", height: "22%",
        background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)", zIndex: 9 }} />
    </div>
  );
}
