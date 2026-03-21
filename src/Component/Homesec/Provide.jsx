import React from 'react'
import './Home.css';
import Leftimg from '../../Assets/img3.jpg';
import Leftimg2 from '../../Assets/img4.jpg';

export default function Provide() {
  return (
    <header>
        <div className="provide">
            <div className="provide-left">
                <img src={Leftimg} alt="well" />
                <img src={Leftimg2} alt="well" />
            </div>
        
            <div className="provide-right">
                <button>Welocome to Welding</button>
                <h1>WE'RE EXPORT TO QUALITY</h1>
                 <p>
                    We are exports in providing superior products at a lower cost,
                    and we have worked on Metal, Refinery, and power projects.
                    Our steel goods are of great quality, and we have a good
                    reputation with our clients. I believe this is a 
                    nice start to a long-term relationship
                </p>
                <div className="provide-icon">
                    <ul>
                       <li><i class="bi bi-check"></i>We Provide 24/7 service</li>
                       <li><i class="bi bi-check"></i>We strick to deadline</li>
                       <li><i class="bi bi-check"></i>We offer upfront pricing</li>
                       <li><i class="bi bi-check"></i>We use latest technology</li>
                    </ul>
                </div>
                <div className="provide-key">
                    <h1>WELDER PRO PROFESSIONAL WELDING COMPANY</h1>
                </div>
        </div>   
        </div>
    </header>
  )
}
