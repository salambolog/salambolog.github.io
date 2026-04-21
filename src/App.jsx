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
import bibandLogo from "./assets/images/logos/new-biband-logo.png"
import redFlower from "./assets/images/new-red-flower.png"
import wreath from "./assets/images/new-container-flowers.webp"
import $ from 'jquery';

function App() {
  return (
    <>
      <Navbar />
      <div className='body-section'>
          <img src={redFlower} className='redFlower' alt="red flower" />
          <div className="mobile-brand bg-body-tertiary animate__animated animate__fadeInDown">
            <img src={myLogo} className='animate__animated animate__fadeInDown'/>
          </div>
        <div className='App'>
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="container">
             <div className='hero-contain bg-body-tertiary animate__animated animate__fadeInDown'> 
              <p>i am a web developer with more than 8 years experience
              </p>
              <div className='headline-contain'>
                <p className='tagline'>
                  I build beautiful sites quickly and efficiently
                </p>
                <button className='contact animate__animated animate__fadeInDown learn-more btn btn-primary'>
                  <a href='mailto:salambolog@gmail.com'>Contact Me</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='intro bg-body-tertiary' id='who'>
          <p className="body-text animate__animated animate__fadeInLeft">
            My name is Ian and I have several years of experience with an array of skills. 
            <br/>
          </p>
        </div>
      </div>
      <div id='now'>
        <div className='container'>
          <div className="flower-container">
            <img src={wreath} className='wreath-image' alt="wedding invitation" />
          </div>
          <div className='bibander'>
            <h2>Current Role:</h2>
            <h2>Biband Dental Matrix</h2>
            <img src={bibandLogo} className='current-image' />
          </div>
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
export default App
