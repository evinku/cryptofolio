const { CLIENT_ORIGIN } = require("../config");

module.exports = {
  confirm: id => ({
    subject: "React Confirm Email",
    html: `
      <a href='http://localhost:3000/confirm/${id}'>
        click to confirm email
      </a>
    `,
    text: `Copy and paste this link: http://localhost:3000/confirm/${id}`
  })
};
