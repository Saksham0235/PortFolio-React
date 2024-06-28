import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>

        {PROJECTS.map((proj,index)=>{
            return(
                <div key='index' className='flex flex-wrap mb-8  lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}
                     className="w-full justify-center lg:w-1/4">
                    <img src={proj.image} alt={proj.title} width={250} height={150} className='mb-5 mt-3 rounded mx-auto lg:mx-0'/>
                    </motion.div>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='font-semibold mb-2  text-center lg:text-left'>{proj.title}</h6>
                    <p className='mb-4  text-neutral-400'>{proj.description}</p>
                    {proj.technologies.map((tech,index)=>{
                        return(
                            <span key={index} className='rounded mr-2 bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-900'>{tech}</span>
                        )
                    })}
                    </motion.div>
                    
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Projects
