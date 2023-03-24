const express = require("express");
const { youDied, youDiedText } = require("./functions/text-functions");
const story = require("./story");

const app = express();
const port = 3000;
// "/story"is an endpoint
app.get("/story", (req, res) => {
  res.send(story);
});

app.get("/story/:id", (req, res) => {
  const storyId = +req.params.id;

  if (!parseInt(storyId)) {
    res.status(404).send("<h1>Story Not Found</h1>");
  }

  for (let i in story.gameStory) {
    if (storyId === story.gameStory[i].id) {
      res.send(story.gameStory[i].story);
    }
  }
});

app.get("/gameover", (req, res) => {
  youDied();
  process.exit();
});

app.listen(port, (req, res) => {
  console.log(`app listening on ${port}`);
});
