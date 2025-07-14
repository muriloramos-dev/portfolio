import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const WaterRippleBackground = ({ waterEffect }: { waterEffect: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef(0);
  const ripplesRef = useRef<HTMLDivElement[]>([]);
  const effectEnabledRef = useRef(waterEffect);

  // Atualiza o valor de referência sempre que `waterEffect` mudar
  useEffect(() => {
    effectEnabledRef.current = waterEffect;
  }, [waterEffect]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Verifica se o efeito está ativo
      if (!effectEnabledRef.current) return;

      const now = Date.now();
      if (now - lastTimeRef.current < 50) return;
      lastTimeRef.current = now;

      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = '30px';
      ripple.style.height = '30px';
      ripple.style.borderRadius = '50%';
      ripple.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      ripple.style.background = 'rgba(255, 255, 255, 0.05)';
      ripple.style.pointerEvents = 'none';
      ripple.style.transform = 'translate(-50%, -50%) scale(1)';
      ripple.style.mixBlendMode = 'difference';
      ripple.style.filter = 'blur(1px)';
      ripple.style.zIndex = '1';

      container.appendChild(ripple);
      ripplesRef.current.push(ripple);

      if (ripplesRef.current.length > 10) {
        const old = ripplesRef.current.shift();
        old?.remove();
      }

      gsap.to(ripple, {
        scale: 4,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => {
          ripple.remove();
          ripplesRef.current = ripplesRef.current.filter((r) => r !== ripple);
        },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // <- apenas no mount

  return (
    <div
      id="water"
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};
