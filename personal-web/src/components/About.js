import React from 'react'
import './About.css'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className= 'container aboutContainer'>
        <div className='aboutContent'>
          <h2 className= 'text-light'>A web developer on and off the clock, a problem solver at heart, with a keen eye towards responsiveness. Check out my work to see what I'm talking about!

I am currently available for any kind of work. <a href='#contacts' className='btn btn-primary' id="letsTalk">Lets Talk</a> to get the ball rolling!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default About