import { useState } from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from "typewriter-effect"
import Navbar from './Navbar.jsx'
import Employment from './Employment.jsx'
import Qualify from './Qualify.jsx'
import Footer from './Footer.jsx'
import './App.css'
import iceCreamImage from './assets/images/logos/ice-cream-solo.png'
import myLogo from './assets/images/logos/ian-logo-white.png'
import $ from 'jquery';

function App() {
  return (
    <>
      <Navbar />
      <div className='body-section'>
          <div className="mobile-brand bg-body-tertiary animate__animated animate__fadeInDown">
            <img src={myLogo} className='animate__animated animate__fadeInDown'/>
          </div>
        <div className='App'>
          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div className="container">
             <div className='hero-contain bg-body-tertiary animate__animated animate__fadeInDown'> 
              <p>i am a web developer with more than 7 years experience
              </p>
              <div className='headline-contain'>
                <p className='tagline'>
                  I build beautiful sites quickly and efficiently
                </p>
                <button className='contact animate__animated animate__fadeInDown'>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='imager'>
          <img className='bigImage' src={computerImage} />
        </div> */}
        <div className='intro bg-body-tertiary' id='who'>
          <p className="body-text animate__animated animate__fadeInLeft">
            Hello, my name is Ian and I am a Frontend developer with 6 years of experience. 
            <br/>
          </p>
        </div>
      </div>
      <Employment />
      <section className='new-section'>
        <div className='container'>
          <p>
            I am comfortable working in the UI/UX/Web design sphere as well as the development space. I have a wealth of front end experience as well as a degree in Graphic Design.
          </p>
          <img src={iceCreamImage} />
          </div>
      </section>
      <Qualify />
      <Footer />
    </>
  )
}
// const el = document.querySelector('.navbar-light .navbar-nav a.nav-link');
// if (el) {
//   el.addEventListener('click', function(e) {
//     document.querySelector('.navbar-collapse').classList.toggle('show');
//   })
// }
export default App
