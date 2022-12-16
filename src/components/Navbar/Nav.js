import React from 'react';
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav-bar'>
      <div className='logo'>
        <span></span>
      </div>
      <div className='nav-items'>
        <ul>
            <li>about</li>
            <li>evening</li>
            <li>wedding</li>
            <li>gala</li>
            <li>accessories</li>
            <li>botiqules</li>
            <li>shows</li>
            <li>contact</li>
        </ul>
      </div>
      <span className='line'>|</span>
      <div className='social'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  )
}

export default Nav
