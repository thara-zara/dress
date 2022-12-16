import React from 'react';
import "./Evening.css";
import ev1 from "../../assests/ev1.jpg";
import ev2 from "../../assests/ev2.jpg";
import ev3 from "../../assests/ev3.jpg";
import ev4 from "../../assests/ev4.jpg";

const Evening = () => {
  return (
    <div className='evening'>
        <div className='even'>
            <div className='ev-left'>
                <div className='ev-top'>
                    <img src={ev1} alt="img"/>
                    <span>
                        collection la dem
                        {/* <hr></hr> */}
                    </span>
                </div>
                <div className='ev-bottom'>
                    <img src={ev4} alt="img"/>
                    <img src={ev3} alt="img"/>
                </div>
            </div>
            <div className='ev-right'>
                <div className='ev-right-top'>
                    <h3>evening</h3>
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
                <div className='ev-right-bottom'>
                    <img src={ev2} alt="img"/>
                    <span>
                        collection violette
                        {/* <hr></hr> */}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Evening
