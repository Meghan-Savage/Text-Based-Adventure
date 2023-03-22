const express = require("express");
const { youDied, youDiedText } = require("./functions/text-functions");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("landing page");
  res.send("<h1>Start Game!</h1>");
});
app.get("/died", (req, res) => {
  console.log("Time to die kids!");
  res.send("<h1 style='color:red'>YOU DIED!</h1>");
});
app.post("/poison", (req, res) => {
  console.log("crawling up your arm");
  res.send("<h1 style='color:green'>fucking spider!</h1>");
});
app.post("/player", (req, res) => {
  console.log({
    Name: "Seifer",
    Age: 31,
    Gender: "Male",
    Class: "Prisoner",
  });
  res.send({
    Name: "Seifer",
    Age: 31,
    Gender: "Male",
    Class: "Prisoner",
  });
});

app.get("/gameover", (req, res) => {
  youDied();
  process.exit();
});

app.listen(port, (res, req) => {
  console.log(`app listening on ${port}`);
});
