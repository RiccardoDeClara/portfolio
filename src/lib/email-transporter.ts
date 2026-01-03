import nodemailer from 'nodemailer';

type EmailPayload = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  contents: string;
};

export async function validateInputs(data: EmailPayload) {
  const { email, firstName } = data;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error('Invalid email address');
  }

  if (!firstName) {
    throw new Error('First name must be at least 2 characters long');
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail(data: EmailPayload) {
  const { email, firstName, lastName, phone, company, contents } = data;
  const name = firstName + " " + lastName;

  const mailOptions = {
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
              <a href="tel:${phone || ''}" style="color: #667eea; text-decoration: none;">
                ${phone || ''}
              </a>
            </div>
          </div>

          <div class="info-group">
            <div class="label">🏢 Company</div>
            <div class="value">${company || ''}</div>
          </div>

          <div class="divider"></div>

          <div class="message-section">
            <div class="label">💬 Message</div>
            <div class="value" style="margin-top: 10px; line-height: 1.6;">
              ${contents.replace(/\n/g, '<br>') || ''}
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

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: error instanceof Error ? error : new Error('Unknown error sending email') };
  }
}
