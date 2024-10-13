const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendVerificationEmail = async (cUser) => {
  const token = jwt.sign({ email: cUser.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const verificationUrl = `${process.env.FRONTEND_URL}/${token}`;

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
    text: `Hello ${cUser.name},
    Thank you for signing up for career folio.
    Please verify your email by clicking this link: ${verificationUrl} . This link will expire in 1 hour. If you did not sign up for career folio please ignore this mail. 
    For any queries please contact us. `,
    html: `<h1>Hello ${cUser.name}</h1>
    <p>Thank you for signing up for career folio.</p>

    <p>Please verify your email by clicking <a href="${verificationUrl}">this link</a>.
    <p>This link will expire in 1 hour. If you did not sign up for career folio please ignore this mail. </p>
    </p><p>For any queries please contact us.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

// Call this function after user registration
// sendVerificationEmail(c);
module.exports = sendVerificationEmail;
