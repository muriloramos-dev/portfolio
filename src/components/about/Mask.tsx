import React from 'react';
import { motion } from 'motion/react';
import useLocateCursor from '@/hooks/useLocateCursor';

export const Mask = ({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement | null> }) => {

  const { x, y } = useLocateCursor();

  const rect = aboutRef.current?.getBoundingClientRect();
  const relativeX = rect ? x - rect.left : 0;
  const relativeY = rect ? y - rect.top : 0;
  

  const [isHovered, setIsHovered] = React.useState(false);
  const size = isHovered ? 400 : 40;

  return (
    <motion.div
      animate={{ maskPosition: `${relativeX - size / 2}px ${relativeY - size / 2}px`, maskSize: `${size}px` }}
      transition={{ type: "tween", ease: "backOut" }}
      className="mask-div absolute bg-red-600 mask-no-repeat mask-size-[400px] mask-position-[50%] text-black w-full h-full flex items-center justify-center">
      <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="mt-25 text-2xl text-slate-900 tracking-widest font-medium p-12 w-[60%]">My educational path reflects my commitment to continuous learning: I completed a Technical Program in <span className="text-lime-300">IT</span> at <span className="text-lime-300">SENAC</span>, studied <span className="text-lime-300">English</span> for five years at <span className="text-lime-300">IBEU</span>, and I’m currently pursuing a degree in <span className="text-lime-300">Systems Analysis and Development</span>, where I apply my knowledge to both personal and academic projects. I like to think of the interfaces I create as immersive and interactive experiences, which is why I explore visual technologies like <span className="text-lime-300">ScrollTrigger</span> animations, <span className="text-lime-300">SVG</span> masking effects, custom cursors, parallax scrolling, and even simulated water effects with <span className="text-lime-300">GSAP</span>—always aiming to deliver a unique touch to every project. I’m dedicated, resilient, and value deep understanding and conceptual clarity before applying any tool. I enjoy experimenting, learning through mistakes, and constantly improving. My goal is to work with teams that share the same creative energy and drive for innovation, contributing clean code, fresh ideas, and an ever-evolving mindset.
      </p>
    </motion.div>
  )
}
