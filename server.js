const express = require("express");
const { youDiedText } = require("./functions/text-functions");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("landing page");
  res.send("<h1>Start Game!</h1>");
});

app.get("/gameover", (req, res) => {
  youDiedText();
});

app.listen(port, (res, req) => {
  console.log(`app listening on ${port}`);
});
