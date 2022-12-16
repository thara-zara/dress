import React from 'react';
import "./Gala.css";
import ga1 from "../../assests/ga1.jpg";
import ga2 from "../../assests/ga2.jpg";
import ga3 from "../../assests/8.jpg";
const Gala = () => {
  return (
    <div className='gala'>
      <div className='gala-gala'>
        <div className='gala-left'>
            <div>
                <h3> gala</h3>
            </div>
            <div className='gala-left-img'>
            <img src={ga3} alt="img"/>
                <span>collection statement </span>
            </div>
        </div>
        <div className='gala-right'>
            <div className='gala-right-img'>
            <img src={ga2} alt="img"/>
                <span>collection formalite</span>
            </div> 
            <div className='gala-right-bottom'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. Quas accusantium 
                     cumque sequi dolorem, reprehenderit 
                     porro optio dolore autem! Sunt mollitia 
                     iusto doloribus aperiam deleniti 
                    alias tenetur aliquid, consectetur 
                    provident laborum?
                </p>
                <div>
                    <span>browse <i className="fas fa-arrow-right"/></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gala
