module.exports = function(app) {
  const Portfolio = require("./models/Portfolio");
  const emailController = require("./email/email.controller");

  app.get("/api/portfolios", (req, res) => {
    Portfolio.find()
      .then(portfolios => res.json(portfolios))
      .catch(err => res.json(err));
  });

  app.post("/api/portfolios", emailController.collectEmail);

  app.patch("/api/portfolios/confirm/:id", emailController.confirmEmail);
};
