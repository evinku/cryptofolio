const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

module.exports = async (to, content) => {
  const contacts = {
    from: process.env.MAIL_USER,
    to
  };

  const email = Object.assign({}, content, contacts);

  await transporter.sendMail(email);
};
