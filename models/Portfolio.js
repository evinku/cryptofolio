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
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  confirmed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
