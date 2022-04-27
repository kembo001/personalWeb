import React from 'react'
import './Skills.css'
// import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {GrMysql} from 'react-icons/gr'
import {DiMongodb} from 'react-icons/di'

function Skills() {
  return (
     <section id='skills'>
      <h5>My skills</h5>
      <h2>What I can do</h2>
      <p className='text-light' id='skillsP'>Learning is a lifestyle for me – I am always eager for new challenges. I am proficient in the following technologies, but also I am always looking to expand.</p>
      <div className='container experienceContainer'>
        <div className='frontend'>
          <h3 className='text-light'>Frontend Development</h3>
          <div className='experienceContent'>
            <article className='text-light'>
            <AiFillHtml5 size={35} className='experienceContainerLogo' />
            <h4>HTML</h4>
            </article>
            <article className='text-light'>
            <DiCss3 size={35} className='experienceContainerLogo' />
            <h4>CSS</h4>
            </article>
            <article className='text-light'>
            <FaBootstrap size={35} className='experienceContainerLogo' />
            <h4>Bootstrap</h4>
            </article>
            <article className='text-light'>
            <IoLogoJavascript size={35} className='experienceContainerLogo' />
            <h4>JavaScript</h4>
            </article>
            <article className='text-light'>
            <FaReact size={35} className='experienceContainerLogo' />
            <h4>REACT</h4>
            </article>
          </div>
        </div>
        <div className='backend'>
        <h3 className='text-light'>Backend Development</h3>
          <div className='experienceContent'>
            <article className='text-light'>
            <IoLogoNodejs size={35} className='experienceContainerLogo' />
            <h4>NodeJS</h4>
            </article>
            <article className='text-light'>
            <GrMysql size={35} className='experienceContainerLogo' />
            <h4>MySQL</h4>
            </article>
            <article className='text-light'>
            <DiMongodb size={35} className='experienceContainerLogo' />
            <h4>MongoDB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills