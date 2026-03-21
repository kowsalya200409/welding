import React, { Component } from 'react'
import './Home.css';

export default class Price extends Component {
  render() {
    return (
      <section>
        <div className="pricesec">
            <div className="price-title">
                <h3>PRICEING PLANE</h3>
                <h1>SELLECT A PLAN ACCORDING TO <br/> YOUR REQUIREMENTS</h1>
                <button>MONTHLY</button>
                <button>YEARLY</button>
            </div>
        </div>
        <div className='pricing'>
            <div className="price-box">
              <div className="price-card">
                <h1>₹ 10000</h1>
                <h4>METAL WELDING</h4>
                <h3>ALL SERVICES INCLUDE:</h3>
                <ul>
                  <li><i class="bi bi-check"></i>1 Website</li>
                  <li><i class="bi bi-check"></i>20GB Storage</li>
                  <li><i class="bi bi-check"></i>30, Visits Monthly</li>
                  <li><i class="bi bi-check"></i>Free SSL</li>
                  <li><i class="bi bi-check"></i>Daily Backup</li>
                </ul>
                <button>SELECT PLAN</button>
              </div>
            </div>

            <div className="price-box">
              <div className="price-card">
                <h1>₹ 50000</h1>
                <h4>STEEL WELDING</h4>
                <h3>ALL SERVICES INCLUDE:</h3>
                <ul>
                  <li><i class="bi bi-check"></i>1 Website</li>
                  <li><i class="bi bi-check"></i>20GB Storage</li>
                  <li><i class="bi bi-check"></i>30, Visits Monthly</li>
                  <li><i class="bi bi-check"></i>Free SSL</li>
                  <li><i class="bi bi-check"></i>Daily Backup</li>
                </ul>
                <button>SELECT PLAN</button>
              </div>
            </div>

            <div className="price-box">
              <div className="price-card">
                <h1>₹80000</h1>
                <h4>CUSTOM WELDING</h4>
                <h3>ALL SERVICES INCLUDE:</h3>
                <ul>
                  <li><i class="bi bi-check"></i>1 Website</li>
                  <li><i class="bi bi-check"></i>20GB Storage</li>
                  <li><i class="bi bi-check"></i>30, Visits Monthly</li>
                  <li><i class="bi bi-check"></i>Free SSL</li>
                  <li><i class="bi bi-check"></i>Daily Backup</li>
                </ul>
                <button>SELECT PLAN</button>
              </div>
            </div>
        </div>
        <div className="moving-section">
          <div className="moving-text">
            WELDING-ABRICATION - CUTTING - TOOLS - INDUSTRIAL - METAL WORKS - EQUIPMENT
         </div>
        </div>
      </section>
    )
  }
}
