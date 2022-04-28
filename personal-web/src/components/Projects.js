import React from 'react'
import './Projects.css'
import amazonClone from '../image/AmazonClone.png'
import bookReviews from '../image/Book Reviews.png'
import fitnessTracker from '../image/Fitness tracker.png'
import mealPlan from '../image/Meal plan.png'
import personalweb from '../image/personalweb.png'
import googleBooks from '../image/googleSearchEngine.png'

function Projects() {
  return (
     <section id='projects'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className='container projectsContainer'>
        
        <article>
        <h3>Amazon Clone</h3>
          <div className='projectsImage'>
            <img src={amazonClone} alt=''/>
            <div className='projectdescription'>
              <p>In this project, I try to recreate the popular shopping website, Amazon. </p>
               <p> You can do such things like Log in to your personal page, add & remove items from cart and use the website just as if it was the original.</p> 
               <p> I used REACT to create the project and Firebase for authentication & to deploy my application.</p>
            </div>
            </div>
          <a href='https://github.com/kembo001/amazonCloneWithReact' className='btn' target='_blank'>Repo</a>
          <a href='https://clone-4f818.web.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
       
        
        
        
        
        
        
        
        <article>
        <h3>Book Reviews</h3>
          <div className='projectsImage'>
            <img src={bookReviews} alt=''/>
            <div className='projectdescription'>
              <p>The objective of this website was to create an application where you can publish and rate books they have previously read. </p>
               <p>The app follows the MVC structure pattern. Using Handlebars.js to display the site, sequelize as the Object-Relational Mapping with a mySQL database.</p>
            </div>
            </div>
          <a href='https://github.com/annsabie/bookreviews.git' className='btn' target='_blank'>Repo</a>
          <a href='https://sabiebookreview.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article>
        <h3>Book Search Engine</h3>
          <div className='projectsImage'>
            <img src={googleBooks} alt=''/>
            <div className='projectdescription'>
            <p>For this project, I used Google Books API search engine, built with MERN, to create a site where users can look up their favorite books and reviews on them. </p>
               <p>This application uses a login and sign up function.</p>
            </div>
            </div>
          <a href='https://github.com/kembo001/bookSearchEngine' className='btn' target='_blank'>Repo</a>
          <a href='https://goofy-kare-75cadd.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        
        

       

        <article>
        <h3>Meal Plan</h3>
          <div className='projectsImage'>
            <img src={mealPlan} alt=''/>
            <div className='projectdescription'>
              <p>The objective of this project was to create a website that has an interactive front-end application. As a group, we decided to create a meal planning website using Spoonacular as our third-party API</p>
               <p> For our additional library we used Choreographer.js which set the background to continually fade as the user scrolls down the page.</p>
            </div>
            </div>
          <a href='https://github.com/kembo001/mealPlan' className='btn' target='_blank'>Repo</a>
          <a href='https://kembo001.github.io/mealPlan/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article>
        <h3>Fitness Tracker</h3>
          <div className='projectsImage'>
            <img src={fitnessTracker} alt=''/>
            <div className='projectdescription'>
              <p>In this application, I created a workout tracker. It creates and tracks your daily workouts. You'll be able to log each workout you have done and the name, type, weight, sets, reps and duration of the workout will pop up.</p>
               <p> This application uses MongoDB as the database.</p>
            </div>
            </div>
          <a href='https://github.com/kembo001/fitnessTracker.git' className='btn' target='_blank'>Repo</a>
          <a href='https://kemboi-fitness-tracker.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        

        <article>
        <h3>Personal Website</h3>
          <div className='projectsImage'>
            <img src={personalweb} alt=''/>
            <div className='projectdescription'>
              <p>The site you are on right now! Coded from scratch, I used this opportunity to learn more about React and to test my skills</p>
               <p>I used new designs for the nav bar, added animations and used EmailJS for the contact form below.</p>
            </div>
            </div>
          <a href='https://github.com/kembo001/personalWeb' className='btn' target='_blank'>Repo</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        
      </div>
    </section>
  )
}

export default Projects