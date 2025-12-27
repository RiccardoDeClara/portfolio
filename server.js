const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running on port 5001"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/", (req, res) => {
  res.send("Contact Server is Running");
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const company = req.body.company;
  const message = req.body.message; 

  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form - Portfolio",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 30px 20px;
        }
        .info-group {
          margin-bottom: 20px;
          border-left: 4px solid #667eea;
          padding-left: 15px;
        }
        .label {
          font-size: 12px;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
          font-weight: 600;
        }
        .value {
          font-size: 16px;
          color: #333;
          word-break: break-word;
        }
        .message-section {
          background-color: #f9f9f9;
          border-radius: 6px;
          padding: 15px;
          margin-top: 20px;
          border-left: 4px solid #667eea;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 20px;
          text-align: center;
          color: #999;
          font-size: 12px;
          border-top: 1px solid #eee;
        }
        .divider {
          height: 1px;
          background-color: #eee;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>📬 Portfolio Contact Form</h1>
        </div>

        <!-- Content -->
        <div class="content">
          <div class="info-group">
            <div class="label">👤 Name</div>
            <div class="value">${name}</div>
          </div>

          <div class="info-group">
            <div class="label">📧 Email</div>
            <div class="value">
              <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                ${email}
              </a>
            </div>
          </div>

          <div class="info-group">
            <div class="label">📱 Phone</div>
            <div class="value">
              <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">
                ${phone}
              </a>
            </div>
          </div>

          <div class="info-group">
            <div class="label">🏢 Company</div>
            <div class="value">${company}</div>
          </div>

          <div class="divider"></div>

          <div class="message-section">
            <div class="label">💬 Message</div>
            <div class="value" style="margin-top: 10px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>This is an automated email from your portfolio contact form.</p>
          <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent", email: mail });
    }
  });
});