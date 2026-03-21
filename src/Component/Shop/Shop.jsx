import React from 'react';
import './Shop.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import shopimg1 from '../../Assets/shop9.png';
import shopimg2 from '../../Assets/shop8.png';
import shopimg3 from '../../Assets/shop7.png';
import shopimg4 from '../../Assets/shop6.png';
import shopimg5 from '../../Assets/shop5.png';
import shopimg6 from '../../Assets/shop4.png';
import shopimg7 from '../../Assets/shop3.png';
import shopimg8 from '../../Assets/shop2.png';
import shopimg9 from '../../Assets/shop1.png';

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const products = [
    { id: 1, title: "BOSS SOFA", price: 15000, img: shopimg1 },
    { id: 2, title: "COMFY CHAIR", price: 20000, img: shopimg2 },
    { id: 3, title: "LONG CHAIR", price: 18000, img: shopimg3 },
    { id: 4, title: "LONG STOOL", price: 5000, img: shopimg4 },
    { id: 5, title: "OFFICE CHAIR", price: 8000, img: shopimg5 },
    { id: 6, title: "RELAX CHAIR", price: 12000, img: shopimg6 },
    { id: 7, title: "ROUND CHAIR", price: 9000, img: shopimg7 },
    { id: 8, title: "SMART CHAIR", price: 11000, img: shopimg8 },
    { id: 9, title: "SOFA CHAIR", price: 13000, img: shopimg9 },
  ];

  const handleAdd = (item) => {
    addToCart(item);
    navigate("/card"); 
  };

  return (
    <section>
      <div className="shopsec">
        <div className="shop-text">
          <h1>QUALITY WELDING CRAFED WITH<br/> SKILL AND PRECISION</h1>
        </div>
      </div>
    <div className="shop-container">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} />
          <h2>{item.title}</h2>
          <p>₹{item.price}</p>

          <button onClick={() => handleAdd(item)}>
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
    </section>
  );
}