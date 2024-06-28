import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) =>( {
    initial: { y: -10 },
    animate: {
        y: [10, -10],
            transition: {
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
}
)
const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}}
             className='text-center my-20 text-4xl'>Technologies</motion.h1>
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
             className="flex items-center flex-wrap justify-center gap-4">
                <motion.div  variants={iconVariants(2.5)} initial='inital' animate="animate"
                 className="rounded-2xl flex border-4   cursor-pointer border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-500' />
                </motion.div>
                <motion.div  variants={iconVariants(3)} initial='inital' animate="animate"
                className="rounded-2xl  flex border-4 cursor-pointer border-neutral-800 p-4">
                    <SiRedux className='text-7xl  text-purple-500' />
                </motion.div>
                <motion.div  variants={iconVariants(5)} initial='inital' animate="animate"
                className="rounded-2xl  flex border-4 cursor-pointer border-neutral-800 p-4">
                    <FaNode className='text-7xl  text-green-500' />
                </motion.div>
                <motion.div  variants={iconVariants(2)} initial='inital' animate="animate"
                className="rounded-2xl  flex border-4 cursor-pointer border-neutral-800 p-4">
                    <SiExpress className='text-7xl  text-cyan-500' />
                </motion.div>
                <motion.div  variants={iconVariants(6)} initial='inital' animate="animate"
                className="rounded-2xl  flex border-4 cursor-pointer border-neutral-800 p-4">
                    <SiMongodb className='text-7xl  text-green-500' />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies
