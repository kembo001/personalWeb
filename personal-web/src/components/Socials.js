import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function Socials() {
  return (
    <div className='headerSocials'>
      <a href='https://linkedin.com/in/brandonkemboi' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/kembo001' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default Socials