import React from 'react'
import './Home.css';
import fristImg1 from '../../Assets/img9.jpg';
import fristImg2 from '../../Assets/img5.jpg';
import fristImg3 from '../../Assets/img8.jpg';
import fristImg4 from '../../Assets/img7.jpg';
import { Link } from 'react-router-dom';
export default function Service() {
  
  return (
    <section>
        <div className="servicesec">
            <div className="service">
                <h3>OUR SERVICE</h3>
                <h1>PROJECT WITH EXPORT & METAL<br/>WELDING COLLABORATION</h1>
            </div>
        </div>
         <div className="service-part">
          <div className="service-content">
            <Link to={"/service"} className='img-box'>
              <img src={fristImg1} alt="welding" />
              <div className="overlay">METAL WELDING</div>
            </Link>

            <a href="/service" className='img-box'>
              <img src={fristImg2} alt="welding" />
              <div className="overlay">STEEL WELDING</div>
            </a>

            <a href="/service" className='img-box'>
              <img src={fristImg3} alt="welding" />
              <div className="overlay">CUSTOM WELDING</div>
            </a>

            <a href="/service" className='img-box'>
              <img src={fristImg4} alt="welding" />
              <div className="overlay">EXPORT WELDING</div>
            </a>
          </div> 
        </div> 
        

    </section>

  )
};
