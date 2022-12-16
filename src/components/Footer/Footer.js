import React from 'react';
import "./Footer.css";
import f1 from "../../assests/f1.jpg";

const Footer = () => {
  return (
    <div className='foot'>
        <div className='foot-img'>
            <img src={f1} alt="img"/>
        </div>
        <div className='footer'>
            <div className='social'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
            </div>
            <div className='logo'>
                <span></span>
            </div>
            <div className='copyright'>
                @2022 noces couture all right reserved
            </div>
        </div>
    </div>
    
  )
}

export default Footer