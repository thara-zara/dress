import React from 'react';
import "./Wedding.css";
import wed2 from "../../assests/wed2.jpg";
import wed3 from "../../assests/wed3.jpg";
import wed5 from "../../assests/wed5.jpg";
import wed from "../../assests/2.jpg";
import wed1 from "../../assests/10.jpg";

const Wedding = () => {
  return (
    <div className='wedding'>
      <h3>wedding</h3>
      <div className='wedding-cover'>
        <img src={wed1} alt="img"/>
        <span>the bride</span>
      </div>
      <div className='weding-bottom'>
        <div className='wedding-text'>
            <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Quas accusantium 
                    cumque sequi dolorem, reprehenderit 
                    porro optio dolore autem! Sunt mollitia 
                    iusto doloribus aperiam deleniti 
            </p>
            <div>
                <span>browse <i className="fas fa-arrow-right"/></span>
            </div>
        </div>
        <div className='wedding-bottom-img1'>
            <img src={wed} alt="img"/>
            <span>
                mother <br/> of the bride
            </span>
        </div>
        <div className='wedding-bottom-img2'>
            <img src={wed3} alt="img"/>
            <span>
                bridesmade
            </span>
        </div>
      </div>
    </div>
  )
}

export default Wedding
