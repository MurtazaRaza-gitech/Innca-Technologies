import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AuroraBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = resolvedTheme === "light";
  const opacityClass = isLight ? "opacity-10" : "opacity-40";

  const bars = [
    { color: "bg-[#00CBA4]", left: "10%", delay: 0, duration: 4, height: "120vh" },
    { color: "bg-[#00B8D9]", left: "30%", delay: 1, duration: 6, height: "100vh" },
    { color: "bg-[#2563EB]", left: "50%", delay: 0.5, duration: 5, height: "130vh" },
    { color: "bg-[#7C3AED]", left: "70%", delay: 2, duration: 7, height: "110vh" },
    { color: "bg-[#00CBA4]", left: "85%", delay: 1.5, duration: 4.5, height: "125vh" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute inset-0 w-full h-full ${opacityClass} mix-blend-screen filter blur-[80px]`}>
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 w-[100px] rounded-full ${bar.color}`}
            style={{
              left: bar.left,
              height: bar.height,
              top: "-10vh",
            }}
            animate={{
              scaleY: [0.8, 1.2, 0.8],
              y: [0, 50, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: bar.duration,
              delay: bar.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--background))_100%)] z-20" />
      
      {/* Particle grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px] z-20" />
    </div>
  );
}
