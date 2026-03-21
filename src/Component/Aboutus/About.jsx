import React, { useState } from "react";
import "./About.css";
import aboutImg from '../../Assets/about.jpg';

function About() {
  const [active, setActive] = useState(0);

  const content = [
    {
      title: "About Our Work",
      text: "We turn raw metal into powerful structures with precision welding and expert craftsmanship. Every joint we create is built to last and designed to perform."
    },
    {
      title: "Who We Are",
      text: "With years of experience in welding, we deliver strong, reliable, and high-quality metal works tailored to your needs. Quality and safety are our top priorities."
    },
    {
      title: "About Us",
      text: "Strong metal. Strong bonds. That’s what we build with every weld."
    },
    {
      title: "Our Mission",
      text: "We aim to provide dependable welding solutions that combine strength, durability, and precision—ensuring complete customer satisfaction."
    }
  ];

  return (
    <section>
      <div className="aboutsec">
        <div className="about-title">
          <h1>PRECISION WELDING THAT CREATES <br/>STRENGTH YOU CAN TRUST </h1>
        </div>
      </div>
    <div className="about">
      <div className="about-container">

        <div className="about-img">
          <img src={aboutImg} alt="welding" />
        </div>

        <div className="about-content">

          <div className="about-tabs">
            {content.map((item, index) => (
              <button
                key={index}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                Option {index + 1}
              </button>
            ))}
          </div>

          <div key={active} className="about-text fade">
            <h2>{content[active].title}</h2>
            <p>{content[active].text}</p>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
}

export default About;