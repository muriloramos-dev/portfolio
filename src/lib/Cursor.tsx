import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const CustomCursor = () => {
  const tailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (tailRef.current) {
        gsap.set(tailRef.current, {
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        ref={tailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full bg-white blur-xs mix-blend-difference
            -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};
