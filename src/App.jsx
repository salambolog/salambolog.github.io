import { useState } from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from "typewriter-effect"
import Navbar from './Navbar.jsx'
import Employment from './Employment.jsx'
import Qualify from './Qualify.jsx'
import Footer from './Footer.jsx'
import './App.css'
import computerImage from './assets/images/donut.png'
import iceCreamImage from './assets/images/logos/ice-cream-solo.png'
import myLogo from './assets/images/logos/ian-logo-white.png'

function App() {
  return (
    <>
      <Navbar />
      <div className='body-section'>
          <div className="mobile-brand">
            <img src={myLogo} />
          </div>
        <div className='App'>
          <div className="container">
             <div className='hero-contain'> 
              <p>I am
                <TypeWriter options={{
                  strings: ['a web developer', 'an artist', 'a freelancer', 'a CSS Addict'],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                }} />
              </p>
              <div className='headline-contain'>
                <p className='tagline'>
                  From art school to a keyboard near you!
                </p>
                <button className='contact'>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='imager'>
          <img className='bigImage' src={computerImage} />
        </div>
        <div className='intro' id='who'>
          <p className="body-text">
            Hello, My name is Ian and I am a Frontend developer with 6 years of experience. 
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

export default App
