import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className='text-4xl my-10 text-center'>Get In Touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>Phone No.  <span className='px-4'>{CONTACT.phoneNo}</span></p>
        <p className='my-4'>Email <a  className='mx-2 border-b' href=''>{CONTACT.email}</a></p>
         <span className='px-4'></span></div>
    </div>
  )
}

export default Contact
