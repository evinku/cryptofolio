const Portfolio = require("../models/Portfolio");
const sendEmail = require("./email.send");
const msgs = require("./email.msgs");
const templates = require("./email.templates");

exports.collectEmail = (req, res) => {
  const { email } = req.body;

  Portfolio.findOne({ email })
    .then(portfolio => {
      // We have a new user! Send them a confirmation email.
      if (!portfolio) {
        Portfolio.create(req.body)
          .then(newPortfolio =>
            sendEmail(newPortfolio.email, templates.confirm(newPortfolio._id))
          )
          .then(() => res.json({ msg: msgs.confirm }))
          .catch(err => console.log(err));
      }

      // We have already seen this email address. But the user has not
      // clicked on the confirmation link. Send another confirmation email.
      else if (portfolio && !portfolio.confirmed) {
        sendEmail(portfolio.email, templates.confirm(portfolio._id)).then(() =>
          res.json({ msg: msgs.resend })
        );
      }

      // The user has already confirmed this email address
      else {
        res.json({ msg: msgs.alreadyConfirmed });
      }
    })
    .catch(err => console.log(err));
};

// The callback that is invoked when the user visits the confirmation
// url on the client and a fetch request is sent in componentDidMount.
exports.confirmEmail = (req, res) => {
  const { id } = req.params;

  Portfolio.findById(id)
    .then(portfolio => {
      // A user with that id does not exist in the DB. Perhaps some tricky
      // user tried to go to a different url than the one provided in the
      // confirmation email.
      if (!portfolio) {
        res.json({ msg: msgs.couldNotFind });
      }

      // The user exists but has not been confirmed. We need to confirm this
      // user and let them know their email address has been confirmed.
      else if (portfolio && !portfolio.confirmed) {
        Portfolio.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: msgs.confirmed }))
          .catch(err => console.log(err));
      }

      // The user has already confirmed this email address.
      else {
        res.json({ msg: msgs.alreadyConfirmed });
      }
    })
    .catch(err => console.log(err));
};
