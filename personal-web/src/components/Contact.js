import React from 'react'
import './Contact.css'
import {BsMailbox} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contacts'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className='contactOptions'>
          <article className='contact_option'>
            <BsMailbox />
            <h4>Email</h4>
            <h5>test3@gmail.com</h5>
            <a href='mailto:test3@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsLinkedin />
            <h4>LinkedID</h4>
            <a href='linkedID.com' target= '_blank'>Send a message</a>
          </article>

        </div>
        <form action=''>
          <input type= 'text' name='name' placeholder='Your Full Name' required />
          <input type= 'email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder = 'Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact