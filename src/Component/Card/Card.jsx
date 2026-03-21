import './Card.css';
import { useContext } from "react";
import { CartContext } from "../Shop/CartContext";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const { cartItems, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section>
      <div className="card-logo">
        <div className="card-profile">
          <h1>STRONG JOINTS RELIABLE WELDING <br/> FOR EVERY PROJECT</h1>
        </div>Strong joints, reliable welding for every project.
      </div>

    <div className="cart-page">
      <h2 className="title">Cart</h2>

      {/* TABLE HEADER */}
      <div className="cart-header">
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>SUBTOTAL</span>
        <span>REMOVE</span>
      </div>

      {/* CART ITEMS */}
      {cartItems.map((item) => (
        <div className="cart-row" key={item.id}>
          
          <div className="item-info">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>

          <span>₹{item.price}</span>

          <div className="qty-box">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <span>₹{item.price * item.quantity}</span>

          <span
            className="remove-btn"
            onClick={() => removeItem(item.id)}
          >
            ×
          </span>
        </div>
      ))}

      <div className="bottom-section">

        <div className="cart-totals">
          <h2>CART TOTALS</h2>

          <div className="line"></div>

          <div className="row">
            <span>SUBTOTAL</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="row">
            <span>SHIPPING</span>
            <span>Free shipping</span>
          </div>

          <div className="row total">
            <span>TOTAL</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>
        </div>

      </div>

    </div>
    </section>
  );
}