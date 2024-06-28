import React from 'react'
import logo from '../assets/logo.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
   <nav className='  mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-20 rounded-full' src={logo} alt="Logo" />
    </div>
    <div className='flex m-8 items-center justify-center  text-2xl gap-5'>
      <FaLinkedin/>
      <FaGithub/>
      <FaInstagram/>
      <FaSquareXTwitter/>

    </div>
   </nav>
  )
}

export default Navbar
