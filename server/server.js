const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`app is runnning on http://localhost:${PORT}`);
});
