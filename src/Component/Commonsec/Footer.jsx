import React from "react";
import "./Common.css";
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img3.jpg';
import img3 from '../../Assets/img4.jpg';
import img4 from '../../Assets/img5.jpg';
import img5 from '../../Assets/img6.jpeg';
import img6 from '../../Assets/img7.jpg';
import { Link } from "react-router-dom";

export default function Footer() {

  const links = [
    { id: 1, label: "About Us", path: "/about" },
    { id: 2, label: "Meet Our Team", path: "/team" },
    { id: 3, label: "Latest News", path: "/news" },
    { id: 4, label: "Our Project", path: "/project" },
    { id: 5, label: "Contact", path: "/contact" }
  ];

  const contact = [
    { id: 1, icon: "fa-phone", text: "+91 79043 92859", link: "tel:+917904392859" },
    { id: 2, icon: "fa-envelope", text: "service@gmail.com", link: "mailto:service@gmail.com" },
    { id: 3, icon: "fa-location-dot", text: "Thanjavur", link: "https://maps.google.com" }
  ];

  const gallery = [
    { id: 1, img: img1},
    { id: 2, img: img2},
    { id: 3, img: img3},
    { id: 4, img: img4},
    { id: 5, img: img5},
    { id: 6, img: img6}
  ];

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col">
          <h2 className="logo1">⚡WELDING</h2>
          <p>
            There are many variations passages of Lorem Ipsum available,
            but the majority have suffered alteration
          </p>

          <div className="social">
            <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
            <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
            <a href="https://pinterest.com"><i className="bi bi-pinterest"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-col">
          <h3>LINKS</h3>
          <ul>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-col">
          <h3>CONTACT</h3>

          {contact.map((item) => (
            <a href={item.link} key={item.id} className="contact-item">
              <i className={`fa ${item.icon}`}></i>
              <span>{item.text}</span>
            </a>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="footer-col">
          <h3>GALLERY</h3>

          <div className="gallery">
            {gallery.map((item) => (
              <img key={item.id} src={item.img} alt="gallery"/>
            ))}
          </div>
        </div>

      </div>

      <div className="copyright">
        © Copyright 2026 by Welding Market
      </div>

    </footer>
  );
}