import React from 'react';
import "./Hero.css";
import women from "../../assests/woman1.jpg"
import women2 from "../../assests/1.jpg"
import Nav from '../Navbar/Nav';

const Hero = () => {
  return (
    <div className='hero'>
      <Nav/>
        <div className='main-hero'>
            <div className="hero-text">
                <span><h1>exquisite collections</h1></span>
                <span><h3>by noces couture</h3></span>
                <div className='btn'>
                <span>explore  <i className="fas fa-arrow-down"/></span>
                </div>
            </div>
            <div className='hero-img'>
                <img src={women2} alt="img"/> 
            </div>
        </div>
    </div>
  )
}

export default Hero
