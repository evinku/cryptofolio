const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
