import React from 'react'
import './Common.css';
import Button from './Button';
import { Link } from "react-router-dom";
import Login from '../Login in/Login';

 function Header() {
  const menu =[
    {id:1,label:"HOME",path:"/"},
    {id:2,label:"ABOUT",path:"/about"},
    {id:3,label:"SERVICE",path:"/service"},
    {id:4,label:"SHOP",path:"/shop"},
    {id:5,label:"CONTACT",path:"/contact"}
  ];
  return (
    <header>
      <div className="headersec">
        <div className="profile">
            <h1>⚡WELDING MARKET</h1>
            <Link to="/login"><Button login= "SIGN IN"/></Link>
        </div>
      </div>

      <div className="logo">
        <div className="logo-part">
          <a href="#"><i class="bi bi-envelope"></i>kowsikowsi200409@gmail.com</a>
          <a href="#"><i class="bi bi-telephone"></i>+91 79043 92859</a>
          <a href="#"><i class="bi bi-geo-alt"></i>Thanjvur</a>
        </div>
        <div className="icon">
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-pinterest"></i></a>
        </div>
      </div>
       <div className="title-info">
        <div className="title">
          <h1>WELDING</h1>
        </div>
        <div className="menus">
          <ul>
          {menu.map(({id,label,path})=>{
            return(
              <li key={id}>
                <Link to={path}>{label}</Link>
              </li>
            )
          })}
          </ul>
        </div>
       </div>
    </header>
    
  )
};
export default Header;
