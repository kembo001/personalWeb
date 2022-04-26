import React from 'react'
import CV from '../image/CV.pdf'

function Resume() {
  return (
    <div className='resume'>
     <a href ={CV} download className='btn'>Download Resume</a>
     <a href ="#contact" className='btn'>Contact Me</a>
    </div>
  )
}

export default Resume