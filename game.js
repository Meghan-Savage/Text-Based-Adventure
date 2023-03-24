const readlineSync = require("readline-sync");
const textFunctions = require("./functions/text-functions");

const youDied = textFunctions.youDiedText;
const danger = textFunctions.dangerText;
const poison = textFunctions.spiderText;
const Bleed = textFunctions.BleedText;

function cursedKingdom() {
  let userName = readlineSync.question("Hey prisoner, give me your name: ");

  while (!userName) {
    userName = readlineSync.question("Hey prisoner, give me your name: ");
  }

  const formattedUserName =
    userName[0].toUpperCase() +
    userName.slice(1, userName.length).toLowerCase();

  console.log(`Welcome to your demise ${formattedUserName}!`);

  async function getStory() {
    let storyResult = await fetch("localhost:3000/story/");
  }
}

module.exports = { cursedKingdom };
