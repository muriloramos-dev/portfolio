import { ScrollTopButton } from '@/lib/ScrollTopButton'
import Linkedin from '@/assets/linkedin.png'
import Github from '@/assets/github.png'
import Email from '@/assets/email.png'
import WhatsApp from '@/assets/whatsapp.png'
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <div id='contact' className='h-screen relative flex items-center justify-center gap-4'>

      <motion.a
        target='_blank'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-zinc-400'
        href="https://www.linkedin.com/in/murilo-ramos-53a388255/">
        <img src={Linkedin} alt="" />
      </motion.a>
      <motion.a
        target='_blank'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-zinc-400'
        href="https://github.com/muriloramos-dev">
        <img src={Github} alt="" className='invert' />
      </motion.a>
      <motion.a
        target='_blank'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-zinc-400'
        href="mailto:murilojose.ramos@outlook.com">
        <img src={Email} alt="" />
      </motion.a>
      <motion.a
        target='_blank'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-zinc-400'
        href="https://wa.me/5521964703804">
        <img src={WhatsApp} alt="" />
      </motion.a>
      <ScrollTopButton />
    </div>
  )
}
