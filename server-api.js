module.exports = function(app) {
  const Portfolio = require("./models/Portfolio");

  app.get("/api/portfolios", (req, res) => {
    Portfolio.find()
      .then(portfolios => res.json(portfolios))
      .catch(err => res.json(err));
  });

  app.post("/api/portfolios", (req, res) => {
    Portfolio.create(req.body)
      .then(portfolio => res.json(portfolio))
      .catch(err => res.json(err));
  });

  app.patch("/api/portfolios/:id", (req, res) => {
    const { id } = req.params;
    Portfolio.findByIdAndUpdate(id, req.body, { new: true })
      .then(portfolio => res.json(portfolio))
      .catch(err => res.json(err));
  });
};
