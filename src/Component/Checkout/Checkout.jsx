import './Checkout.css';
import axios from "axios";
import { useState, useEffect } from 'react';

export default function Checkout() {

  const [cartItems, setCartItems] = useState([]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [qr, setQr] = useState("");
  const [upiLink, setUpiLink] = useState("");
  const [orderplaced, setorderplaced] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    try {
      const orders = await axios.post("http://localhost:5000/api/order", form);
      const orderId = orders.data.orderId;

      const paymentRes = await axios.post(
        "http://localhost:5000/api/payment",
        {
          orderId,
          amount: totalAmount,
          method: paymentMethod
        }
      );

      if (paymentRes.data.type === "qr") {
        setQr(paymentRes.data.qr);
      }

      if (paymentRes.data.type === "upi") {
        setUpiLink(paymentRes.data.link);
      }

      setorderplaced(true);

    } catch (error) {
      console.log(error);
      alert("Server error!");
    }
  };

  return (
    <section>
      <div className="checkoutsec">
        <div className="checkout-title">
          <h3>PRECISION WELDING FOR STRONG, RELIABLE <br/> AND LASTING PERFORMANCE</h3>           
        </div>
      </div>
    <div className="checkout-wrapper">
      {!orderplaced ? (
        <form className="checkout-form" onSubmit={handleSubmit}>

          <h2>BILLING DETAILS</h2>

          <input name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input name="address" placeholder="Address" onChange={handleChange} required />
          <input name="city" placeholder="City" onChange={handleChange} required />
          <input name="zip" placeholder="ZIP" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />

          {/*  TOTAL */}
          <h3>Total: ₹{totalAmount}</h3>

          <h3>Select Payment</h3>

          <label>
            <input type="radio" value="QR"
              onChange={(e) => setPaymentMethod(e.target.value)} />
            QR Code
          </label>

          <label>
            <input type="radio" value="GPay"
              onChange={(e) => setPaymentMethod(e.target.value)} />
            Google Pay
          </label>

          <button type="submit">PLACE ORDER</button>

        </form>
      ) : (
        <div className="checkout-form">
          <h2>Complete Payment</h2>

          {qr && <img src={qr} alt="QR Code" width="200" />}

          {upiLink && (
            <a href={upiLink}>
              <button>Pay with GPay</button>
            </a>
          )}
        </div>
      )}

    </div>
  </section>
  );
}