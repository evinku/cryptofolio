module.exports = {
  confirm: (id, name) => ({
    subject: "<Cryptofolio> Please verify your email",
    html: `
    Click <a href='${
      process.env.CLIENT_ORIGIN
    }/confirm/${id}'>here</a> to upload your portfolio (${name}). 
    After the verification is done, others will see your portfolio.

    HAPPY TRADING!
    `
  })
};
