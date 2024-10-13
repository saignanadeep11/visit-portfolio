const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendVerificationEmail = async (cUser) => {
  // Generate a token with JWT
  const token = jwt.sign({ email: cUser.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  // Email content
  const verificationUrl = `http://localhost:5173/verifyMail/${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });
  const mailOptions = {
    from: "career.folio.services@gmail.com",
    to: cUser.email,
    subject: "Email Verification",
    text: `Please verify your email by clicking this link: ${verificationUrl}`,
    html: `<h1>Hello ${cUser.name}</h1><p>Please verify your email by clicking <a href="${verificationUrl}">this link</a>.</p><p>For any queries please contact us</p>`,
  };

  await transporter.sendMail(mailOptions);
};

// Call this function after user registration
// c = { email: "saignanadeep11@gmail.com" };
// sendVerificationEmail(c);
module.exports = sendVerificationEmail;
