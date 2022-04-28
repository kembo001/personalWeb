import React from 'react'
import CV from '../image/Resume (3).pdf'

function Resume() {
  return (
    <div className='resume'>
     <a href ={CV} download className='btn'>Download Resume</a>
     <a href ="#contacts" className='btn'>Contact Me</a>
    </div>
  )
}

export default Resume