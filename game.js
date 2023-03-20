const readlineSync = require("readline-sync");
const stories = require("./story");
const textFunctions = require("./functions/text-functions");

const storyOne = stories.gameStory.storyPathOne;
const storyTwo = stories.gameStory.storyPathTwo;
const storyThree = stories.gameStory.storyPathThree;

const youDied = textFunctions.youDiedText;
const danger = textFunctions.dangerText;
const poison = textFunctions.spiderText;
const Bleed = textFunctions.BleedText;

let storyPath;

function cursedKingdom() {
  let userName = readlineSync.question("Hey prisoner, give me your name: ");

  while (!userName) {
    userName = readlineSync.question("Hey prisoner, give me your name: ");
  }

  const formattedUserName =
    userName[0].toUpperCase() +
    userName.slice(1, userName.length).toLowerCase();

  console.log(`Welcome to your demise ${formattedUserName}!`);

  console.log(
    `You wake up in a dark and damp dungeon, feeling disoriented. You realize you've been chained up and your head is pounding. You hear the clink of armor outside the door, and you try to move to get a better look, but your chains hold you in place.`
  );

  let options = [
    "Try to break free from the chains!",
    "Stay still and wait for your captors to enter.",
    "Yell for help!",
  ];

  let userResponse = readlineSync.keyInSelect(
    options,
    "What action do you take to survive? "
  );

  if (userResponse === 0) {
    console.log(storyOne[0].story);
    youDied();
    process.exit();
  } else if (userResponse === 1) {
    console.log(storyTwo[0].story);
    options = storyTwo[0].options;
    storyPath = storyTwo;
  } else if (userResponse === 2) {
    console.log(storyThree[0].story);
    options = storyThree[0].options;
    storyPath = storyThree;
  }

  userResponse = readlineSync.keyInSelect(options, "What do you do next?!");

  if (userResponse === 0) {
    console.log(storyPath[1].story);
    options = storyPath[1].options;
  } else if (userResponse === 1) {
    console.log(storyPath[2].story);
    options = storyPath[2].options;
  } else if (userResponse === 2) {
    console.log(storyPath[3].story);
    options = storyPath[3].options;
  }
}

module.exports = { cursedKingdom };
