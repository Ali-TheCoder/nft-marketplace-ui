"use client";

import { useEffect, useState } from "react";

type Star = { x: number; y: number; s: number; o: number; d: number; delay: number };

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const count = 120;
    const next = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 1 + Math.random() * 2.2,
      o: 0.25 + Math.random() * 0.65,
      d: 2 + Math.random() * 6,
      delay: Math.random() * 2,
    }));

    setStars(next);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {stars.map((st, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-white"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: `${st.s}px`,
            height: `${st.s}px`,
            opacity: st.o,
            animation: `twinkle ${st.d}s ease-in-out ${st.delay}s infinite`,
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.7);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
