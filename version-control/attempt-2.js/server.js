const express = require("express");
const { gameStory } = require("../../story");

const port = 2000;
const app = express();

app.get("/story/:id", (req, res) => {
  const userChoice = +req.params.id;

  for (let i = 0; i < gameStory.length; i++) {
    console.log("i: ", i);
    console.log("gameStory: ", gameStory[i]);

    if (userChoice === gameStory[i].id) {
      res.send(gameStory[i]);
    }
  }
});
app.get("/story", (req, res) => {
  res.send(gameStory);
});

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(port, () => {
  console.log("GIT GUD from port 2000");
});
