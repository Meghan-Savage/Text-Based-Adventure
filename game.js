const readlineSync = require("readline-sync");
const textFunctions = require("./functions/text-functions");
const { poison } = require("./functions/interactive.js");

const youDied = textFunctions.youDiedText;
const danger = textFunctions.dangerText;
const Bleed = textFunctions.BleedText;

async function getStory(storyId) {
  const storyResult = await fetch(`http://localhost:3000/story/${storyId}`);
  const data = await storyResult.json();

  if (data.hasOwnProperty("poison")) {
    console.log(data.story);
    setTimeout(poison, 8000);
  } else if (data.hasOwnProperty("youDied")) {
    console.log(data.story);
    youDied();
    process.exit();
  } else {
    console.log(data.story);
  }
}
async function getOptions(optionsId) {
  const optionResult = await fetch(`http://localhost:3000/story/${optionsId}`);
  const data = await optionResult.json();
  const option = data.options.map((option) => {
    return option.descriptionText;
  });
  console.log("option", option);
  const userResponse = readlineSync.keyInSelect(option, "What do you do now?");

  const nextPath = data.options[userResponse].nextPath;
  console.log("nextPath", nextPath);
  return nextPath;
}

async function cursedKingdom() {
  let userName = readlineSync.question("Hey prisoner, give me your name: ");

  while (!userName) {
    userName = readlineSync.question("Hey prisoner, give me your name: ");
  }

  const formattedUserName =
    userName[0].toUpperCase() +
    userName.slice(1, userName.length).toLowerCase();

  console.log(`Welcome to your demise ${formattedUserName}!`);

  getStory(1);
  const startOption = await getOptions(1);

  getStory(startOption);

  const nextOptions = await getOptions(startOption);

  getStory(nextOptions);
  // instead of calling each function after another design a loop
}
cursedKingdom();
module.exports = { cursedKingdom };
