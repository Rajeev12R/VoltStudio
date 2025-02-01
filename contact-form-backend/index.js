// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "neil.torphy21@ethereal.email",
    pass: "785bydBpa5fNU1gQBp",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer error:", error);
  } else {
    console.log("Server is ready to take messages");
  }
});


// POST route for handling contact form submission
app.post('/send', (req, res) => {
  const { firstName, lastName, email, company, website, message, newsletter } = req.body;

  const mailOptions = {
    from: email, // sender address
    to: process.env.EMAIL_USER, // your email where the form data will be sent
    subject: `New Message from ${firstName} ${lastName}`, // email subject
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Website: ${website}
      Message: ${message}
      Subscribe to newsletter: ${newsletter ? 'Yes' : 'No'}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Failed to send the email.' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
