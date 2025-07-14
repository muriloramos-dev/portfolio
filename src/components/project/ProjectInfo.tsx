import React from 'react';
import { Badge } from '../ui/badge';
import { motion } from "motion/react"

type ProjectInfoProps = {
  title: string;
  description: string;
  technologies: string[];
  completed: boolean;
  props?: string;
}

export const ProjectInfo = ({ title, description, technologies, completed, props }: ProjectInfoProps) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1, zIndex: 10 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={'project-info rounded-lg border border-zinc-600 w-full px-4 py-2 flex flex-col justify-between gap-2 bg-zinc-800 h-2/3 drop-shadow-lg ' + props + (completed ? " drop-shadow-green-300" : " drop-shadow-red-500")}>
      <div className="flex justify-between items-center w-full">
        <h2 className='text-2xl font-bold text-zinc-100 font-font'>{title}</h2>
        <Badge className={(completed ? "bg-green-700 drop-shadow-green-300" : "bg-red-800 drop-shadow-red-300") + " drop-shadow-sm"}>
          <p className={completed ? "text-green-400" : "text-red-400"}>
            {completed ? "Completed" : "In Progress"}
          </p>
        </Badge>
      </div>
      <p className='text-zinc-400'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech, index) => (
          <Badge key={index} className="bg-zinc-700 text-zinc-300">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}
