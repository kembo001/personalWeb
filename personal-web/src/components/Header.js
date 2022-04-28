import React from 'react'
import './Header.css'
import Resume from './Resume'
import Me from '../image/newMe.jpg'
import Socials from './Socials'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const fadeLeft ={
  hidden: {opacity: 0, y:100},
  visible: {opacity:1, y:0}
}


function Header() {
  return (
    <header id='home'>
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}} className= 'container headerContainer'>
        <h5 className='text-light'>Hello, My name is</h5>
        <h1
        >Brandon Kemboi</h1>
        <h5 className='text-light'>Web Developer & Problem Solver</h5>
        <Resume />
        <Socials />
        <div className='me'>
          <motion.img
          variants={fadeLeft}
          initial='hidden'
          animate='visible'
          transition={{duration: 1}}

          src={Me} alt=''/>
        </div>
      </motion.div>
    </header>
  )
}

export default Header