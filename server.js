const express = require("express");
const { youDied } = require("./functions/text-functions");
const story = require("./story");

const app = express();
const port = 3000;

//param would be url/.ca/name of show or subreddit, id is the container colon means pattern
app.get("/story/:id", (req, res) => {
  const storyId = +req.params.id;

  if (!parseInt(storyId)) {
    res.status(404).send("<h1>Story Not Found</h1>");
  }

  for (let i in story.gameStory) {
    if (storyId === story.gameStory[i].id) {
      res.send(story.gameStory[i]);
    }
  }
});

app.get("/gameover", (req, res) => {
  youDied();
  process.exit();
});

// "/story"is an endpoint
app.get("/story", (req, res) => {
  res.send(story);
});

app.get("/", (req, res) => {
  res.send("<h1>game start</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404 not found</h1>");
});

app.listen(port, (req, res) => {
  console.log(`app listening on ${port}`);
});
