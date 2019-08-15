const Portfolio = require("../models/Portfolio");
const sendEmail = require("./email.send");
const msgs = require("./email.msgs");
const templates = require("./email.templates");

exports.collectEmail = (req, res) => {
  Portfolio.create(req.body)
    .then(newPortfolio =>
      sendEmail(
        newPortfolio.email,
        templates.confirm(newPortfolio._id, newPortfolio.name)
      )
    )
    .then(() => res.json({ msg: msgs.confirm }))
    .catch(err => console.log(err));
};

exports.confirmEmail = (req, res) => {
  const { id } = req.params;

  Portfolio.findById(id)
    .then(portfolio => {
      if (!portfolio) {
        res.json({ msg: msgs.couldNotFind });
      } else if (portfolio && !portfolio.confirmed) {
        Portfolio.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: msgs.confirmed }))
          .catch(err => console.log(err));
      } else {
        res.json({ msg: msgs.alreadyConfirmed });
      }
    })
    .catch(err => console.log(err));
};
