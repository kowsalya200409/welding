const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const QRCode = require("qrcode");

const app = express();

app.use(cors());
app.use(express.json());

// DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Diya@2004",
  database: "shop"
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("DB Connected");
});

app.post("/api/order", (req, res) => {

  const { firstName, lastName, address, city, zip, phone, notes } = req.body;

  const sql = `
    INSERT INTO orders
    (firstname, lastname, address, city, zip, phone, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql,
    [firstName, lastName, address, city, zip, phone, notes],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ orderId: result.insertId });
    }
  );
});

// PAYMENT
app.post("/api/payment", async (req, res) => {
  try {
    const { orderId, amount, method } = req.body;

    const sql = `
      INSERT INTO payments (order_id, amount, payment_method)
      VALUES (?, ?, ?)
    `;

    db.query(sql, [orderId, amount, method]);

    const upiLink = `upi://pay?pa=kowsikowsi200409-1@okhdfcbank&pn=Shop&am=${amount}&cu=INR`;

    if (method === "QR") {
      const qr = await QRCode.toDataURL(upiLink);
      return res.json({ type: "qr", qr });
    }

    if (method === "GPay") {
      return res.json({ type: "upi", link: upiLink });
    }

    res.json({ type: "none" });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () =>
  console.log("Server running on 5000")
);