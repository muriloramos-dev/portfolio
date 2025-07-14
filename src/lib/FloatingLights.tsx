import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NUM_BUBBLES = 15;

type BubbleData = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
};

export const FloatingLights = () => {
  const [bubbles] = useState<BubbleData[]>(() =>
    Array.from({ length: NUM_BUBBLES }).map((_, i) => {
      const margin = 600; // 👈 aumente a área além da tela
      return {
        id: i,
        startX: -margin + Math.random() * (window.innerWidth + margin * 2),
        startY: -margin + Math.random() * (window.innerHeight + margin * 2),
        endX: -margin + Math.random() * (window.innerWidth + margin * 2),
        endY: -margin + Math.random() * (window.innerHeight + margin * 2),
        size: 40 + Math.random() * 40,
      };
    })
  );

  const [litBubbles, setLitBubbles] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const newLit = new Set<number>();
      const count = 3;
      while (newLit.size < count) {
        const randomIndex = Math.floor(Math.random() * NUM_BUBBLES);
        newLit.add(randomIndex);
      }
      setLitBubbles(newLit);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {bubbles.map(({ id, size, startX, startY, endX, endY }) => {
        const nearCursor = litBubbles.has(id);

        return (
          <motion.div
            key={id}
            className="absolute rounded-full mix-blend-difference"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: "white",
              opacity: nearCursor ? 0.25 : 0.08,
              filter: `blur(${nearCursor ? "6px" : "20px"})`,
            }}
            initial={{ x: startX, y: startY }}
            animate={{ x: endX, y: endY }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};
