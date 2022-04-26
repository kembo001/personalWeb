import React from 'react'
import './Header.css'
import Resume from './Resume'
import Me from '../image/newMe.jpg'
import Socials from './Socials'

function Header() {
  return (
    <header>
      <div className= 'container headerContainer'>
        <h5 className='text-light'>Hello, My name is</h5>
        <h1 id='home'>Brandon Kemboi</h1>
        <h5 className='text-light'>Web Developer & Problem Solver</h5>
        <Resume />
        <Socials />
        <div className='me'>
          <img src={Me} alt=''/>
        </div>
      </div>
    </header>
  )
}

export default Header