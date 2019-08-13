const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const api = require("./server-api");

// setup server
const app = express();
app.use(express.json());

// read .env file
dotenv.config();

// read and parse .env.local file
try {
  const localConfig = dotenv.parse(fs.readFileSync(".env.local"));
  process.env = {
    ...process.env,
    ...localConfig
  };
} catch (error) {}

// setup mongoose
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

// static file serving
app.use(express.static(path.join(__dirname, "build")));

// catch all handler for client deeplinks
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// init api
api(app);

app.listen(process.env.PORT || 4000);
