import React from 'react'
import './About.css'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className= 'container aboutContainer'>
        <div className='aboutContent'>
          <h2 className= 'text-light'>
          Full stack Web Developer with a passion for problem solving and creativity. Self-driven because of the love of Web Development and what I can do with it in the future. I am currently available 
          for any kind of work. <a href='#contacts' className='btn btn-primary' id="letsTalk">Contact me</a> to see what we can do for eachother
            
            
            
           
          </h2>
        </div>
      </div>
    </section>
  )
}

export default About