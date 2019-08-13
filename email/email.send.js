const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "neuefischecryptofolio@gmail.com",
    pass: "tmybtwrhekwukrhc"
  }
});

module.exports = async (to, content) => {
  const contacts = {
    from: "neuefischecryptofolio@gmail.com",
    to
  };

  const email = Object.assign({}, content, contacts);

  await transporter.sendMail(email);
};
