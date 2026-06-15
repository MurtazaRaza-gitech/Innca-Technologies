/**
 * AuroraBackground — Two opposing C-arc glows.
 *
 * Uses SVG quadratic-bezier paths for precise arc shapes:
 *
 *   Upper C  → thick sea-green/teal arc that bows across the top
 *              (like a dome, teal core fading outward)
 *
 *   Lower C  → thick blue arc that bows across the bottom
 *              (mirror of upper)
 *
 * Background is otherwise near-black.
 * Both arcs pulse/breathe via framer-motion opacity + scale.
 * position: fixed so the effect appears on every page.
 */

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AuroraBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

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
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          {/* Upper C — teal glow filter */}
          <filter id="blur-top" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="55" result="blur" />
          </filter>
          <filter id="blur-top-inner" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="25" result="blur" />
          </filter>

          {/* Lower C — blue glow filter */}
          <filter id="blur-bot" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="55" result="blur" />
          </filter>
          <filter id="blur-bot-inner" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="25" result="blur" />
          </filter>

          {/* Centre shimmer */}
          <filter id="blur-center" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="45" />
          </filter>
        </defs>

        {/* ══════════════════════════════════════════
            UPPER  C — sea-green / teal
            Quadratic bezier: starts top-left, peaks above screen
            at centre, ends top-right → dome arcing across the top
        ══════════════════════════════════════════ */}

        {/* Outer soft halo */}
        <motion.path
          d="M -80 220 Q 720 -280 1520 220"
          stroke="#22D3EE"
          strokeWidth="320"
          fill="none"
          filter="url(#blur-top)"
          style={{ opacity: isLight ? 0.18 : 0.55 }}
          animate={{ opacity: isLight ? [0.14, 0.22, 0.14] : [0.40, 0.68, 0.40] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner bright core */}
        <motion.path
          d="M 80 180 Q 720 -200 1360 180"
          stroke="#00FFD4"
          strokeWidth="140"
          fill="none"
          filter="url(#blur-top-inner)"
          style={{ opacity: isLight ? 0.12 : 0.45 }}
          animate={{ opacity: isLight ? [0.08, 0.18, 0.08] : [0.30, 0.55, 0.30] }}
          transition={{ duration: 7, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bright rim highlight */}
        <motion.path
          d="M 200 140 Q 720 -120 1240 140"
          stroke="#AAFFF0"
          strokeWidth="40"
          fill="none"
          filter="url(#blur-top-inner)"
          style={{ opacity: isLight ? 0.06 : 0.22 }}
          animate={{ opacity: isLight ? [0.04, 0.10, 0.04] : [0.14, 0.28, 0.14] }}
          transition={{ duration: 7, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ══════════════════════════════════════════
            LOWER  C — electric blue
            Mirror of the upper: dome at the bottom
        ══════════════════════════════════════════ */}

        {/* Outer soft halo */}
        <motion.path
          d="M -80 680 Q 720 1180 1520 680"
          stroke="#2563EB"
          strokeWidth="320"
          fill="none"
          filter="url(#blur-bot)"
          style={{ opacity: isLight ? 0.18 : 0.55 }}
          animate={{ opacity: isLight ? [0.14, 0.22, 0.14] : [0.40, 0.68, 0.40] }}
          transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner bright core */}
        <motion.path
          d="M 80 720 Q 720 1200 1360 720"
          stroke="#60A5FA"
          strokeWidth="140"
          fill="none"
          filter="url(#blur-bot-inner)"
          style={{ opacity: isLight ? 0.12 : 0.45 }}
          animate={{ opacity: isLight ? [0.08, 0.18, 0.08] : [0.30, 0.55, 0.30] }}
          transition={{ duration: 8, delay: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bright rim highlight */}
        <motion.path
          d="M 200 760 Q 720 1140 1240 760"
          stroke="#BAD6FF"
          strokeWidth="40"
          fill="none"
          filter="url(#blur-bot-inner)"
          style={{ opacity: isLight ? 0.06 : 0.22 }}
          animate={{ opacity: isLight ? [0.04, 0.10, 0.04] : [0.14, 0.28, 0.14] }}
          transition={{ duration: 8, delay: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ══════════════════════════════════════════
            CENTRE GLOW — where the two arcs meet
        ══════════════════════════════════════════ */}
        <motion.ellipse
          cx="720"
          cy="450"
          rx="380"
          ry="140"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1"
          style={{ opacity: 0 }} /* invisible stroke, only glow matters */
          filter="url(#blur-center)"
        />
        <motion.ellipse
          cx="720"
          cy="450"
          rx="300"
          ry="100"
          fill="rgba(34,211,238,0.06)"
          filter="url(#blur-center)"
          style={{ opacity: isLight ? 0 : 1 }}
          animate={{ opacity: isLight ? [0, 0] : [0.4, 0.9, 0.4] }}
          transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* ── Dot grid texture ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: isLight ? 0.18 : 0.65,
        }}
      />
    </div>
  );
}
