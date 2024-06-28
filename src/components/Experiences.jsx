import React from 'react'
import { EXPERIENCES } from '../constants/index'
import { motion } from 'framer-motion'

const Experiences = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}
                className='text-center text-4xl my-20'>Experiences</motion.h1>
            <div>
                {EXPERIENCES.map((element) => {
                    return (
                        <>
                            <div className='mb-8 flex flex-wrap lg:justify-center'>
                                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}
                                 className="w-full lg:w-1/4">
                                    <p className='text-neutral-400 text-sm mb-2'>{element.year}</p>
                                </motion.div>
                                <motion.div whileInView={{opacity:1,x:-100}} initial={{opacity:0,x:0}} transition={{duration:1}}  className="w-full max-w-xl lg:w-1/4">
                                    <h6 className='mb-2 font-semibold '>
                                        {element.role} - <span className='text-sm text-purple-400'>{element.company}</span>
                                    </h6>
                                    <p className='mb-4 text-neutral-400'>{element.description}</p>
                                    {element.technologies.map((tech) => {
                                        return (
                                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm cursor-pointer text-purple-800'>{tech}</span>
                                        )
                                    }
                                    )}
                                </motion.div>
                            </div>
                        </>
                    )
                })}</div>
        </div>
    )
}

export default Experiences
