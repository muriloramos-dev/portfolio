import React from 'react'
import SVGComponent from './Svg'
import { ThemeToggle } from '@/lib/ThemeToggle';
import { motion } from 'motion/react';
import gsap from 'gsap';

export const Navbar = () => {

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="mt-4 mx-6 flex justify-between items-center text-white font-font text-6xl fixed top-0 left-0 right-0" >
      <div className="">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-zinc-400"
          onClick={() => { gsap.to(window, { scrollTo: { y: '.trigger' }, duration: 1.5, ease: 'power2.inOut' }) }}
        >
          Murilo R.
        </motion.h1>
      </div>
      <div className="flex gap-8">
        <SVGComponent title='About' link='#about' />
        <SVGComponent title='Projects' link='#project' />
        <button></button>
      </div>
      <div className="">
        <SVGComponent title='Contact' link='#contact' />
      </div>
    </div>
  )
}
