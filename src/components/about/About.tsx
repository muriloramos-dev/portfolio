import React from 'react'
import Card from './Card'
import { ScrollButton } from '@/lib/ScrollButton'

export const About = ({ setWaterEffect }: { setWaterEffect: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div id='about' className='h-screen flex flex-col items-center justify-center text-white relative'>
      <Card setWaterEffect={setWaterEffect} />
      <ScrollButton link="project" />
    </div>
  )
}
