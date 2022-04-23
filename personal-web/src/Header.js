import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav className = 'nav'>
     <a href='#' className="brand">BRandon</a>
     <ul className= 'navMenu'>
      <li className='navItem'><a href='#' className='listLink'>Home</a></li>
      <li className='navItem'><a href='#' className='listLink'>About Me</a></li>
      <li className='navItem'><a href='#' className='listLink'>Skills</a></li>
      <li className='navItem'><a href='#' className='listLink'>Projects</a></li>
      <li className='navItem'><a href='#' className='listLink'>Contact me</a></li>
     </ul>
     <div className='navToggler'>
      <div className= 'line1'></div>
      <div className= 'line2'></div>
      <div className= 'line3'></div>
     </div>
    </nav>
  )
}

export default Header