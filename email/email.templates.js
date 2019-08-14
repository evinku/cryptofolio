module.exports = {
  confirm: id => ({
    subject: "<Cryptofolio> Please verify your email",
    html: `
    Click <a href='${
      process.env.CLIENT_ORIGIN
    }/api/portfolios/confirm/${id}'>here</a> to verify your email. 
    After the verification is done, others will see your portfolio.

    HAPPY TRADING!
    `
  })
};
