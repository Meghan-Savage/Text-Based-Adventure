const readlineSync = require("readline-sync");
const textFunctions = require("./functions/text-functions");
const { poison } = require("./functions/interactive.js");
const { openFile } = require("./public/test");

const youDied = textFunctions.youDiedText;
const danger = textFunctions.dangerText;
const bleed = textFunctions.bleedText;
const pressText = textFunctions.pressText;

async function getStory(storyId) {
  const storyResult = await fetch(`http://localhost:3000/story/${storyId}`);
  const data = await storyResult.json();

  if (data.hasOwnProperty("poison")) {
    console.log(data.story);
    setTimeout(poison, 5000);
    setTimeout(pressText, 9250);
  } else if (data.hasOwnProperty("youDied")) {
    console.log(data.story);
    youDied();
    process.exit();
  } else if (data.hasOwnProperty("petTheDog")) {
    openFile();
  } else {
    console.log(data.story);
  }
}
async function getOptions(optionsId) {
  const optionResult = await fetch(`http://localhost:3000/story/${optionsId}`);
  const data = await optionResult.json();

  if (data.options.length === 0) {
    return null;
  }

  const option = data.options.map((option) => {
    return option.descriptionText;
  });
  const userResponse = readlineSync.keyInSelect(option, "What do you do now?");

  const nextPath = data.options[userResponse].nextPath;
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

  let storyId = 1;
  let optionsId = 1;

  while (true) {
    await getStory(storyId);
    const nextOptions = await getOptions(optionsId);

    if (nextOptions === null) {
      console.log(" ");
      break;
    }

    storyId = nextOptions;
    optionsId = nextOptions;
    console.clear();
  }
}

cursedKingdom();
module.exports = { cursedKingdom };
