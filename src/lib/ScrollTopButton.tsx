import { motion } from 'motion/react';
import Up from '@/assets/up.png';
import gsap from 'gsap';

export const ScrollTopButton = () => {
  return (
    <motion.button
      className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => { gsap.to(window, { scrollTo: { y: "#home" }, duration: 1.5, ease: 'power2.inOut' }) }}
    >
      <img src={Up} alt="Scroll Down" className="w-6 h-6 inline-block" />
    </motion.button>
  )
}
