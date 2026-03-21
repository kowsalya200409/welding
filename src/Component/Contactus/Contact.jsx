import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill required fields ");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      alert("Invalid Email ");
      return;
    }

    console.log(" Sending:", form);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      console.log(" Response:", res);

      if (res.status === 200) {
        alert("Message Sent Successfully ");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }

    } catch (err) {
      console.log(" ERROR:", err);

      if (err.response) {
        alert(err.response.data.message); 
      } else {
        alert("Server not running ");
      }
    }
  };

  return (
    <section>
      <div className="contactsec">
         <div className="contact">
          <h1>LET'S BUILD SOMETHING STRONG<br/> TOGETHER-CONTACT US NOW</h1>
         </div>
      </div>
    <div className="contact-container">

      <h2>CONTACT WITH US</h2>
      <h1>FEEL FREE TO WRITE US ANYTIME</h1>

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Write a Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">SEND MESSAGE</button>

      </form>
    </div>
    </section>
  );
}