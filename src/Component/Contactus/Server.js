const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Diya@2004",
  database: "shop"
});

db.connect((err) => {
  if (err) {
    console.log(" DB ERROR:", err);
  } else {
    console.log(" MySQL Connected");
  }
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log(" Incoming Data:", req.body);

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, Email, Message required"
    });
  }

  const sql = "INSERT INTO contact (name,email,phone,subject,message) VALUES (?,?,?,?,?)";

  db.query(sql, [name, email, phone, subject, message], (err, result) => {
    if (err) {
      console.log(" DB Error:", err);

      return res.status(500).json({
        success: false,
        message: err.message   
      });
    }

    console.log("Inserted ID:", result.insertId);

    return res.status(200).json({
      success: true,
      message: "Saved Successfully"
    });
  });
});

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});