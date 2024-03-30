const express = require("express");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config.js");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`app is connected to database`);
    app.listen(PORT, () => {
      console.log(`app is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
