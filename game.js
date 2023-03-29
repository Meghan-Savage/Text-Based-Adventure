const readlineSync = require("readline-sync");
const axios = require("axios");
const textFunctions = require("./functions/text-functions");
const { poison } = require("./functions/text-functions");
const { openFile } = require("./public/test");

const youDied = textFunctions.youDiedText;
const danger = textFunctions.dangerText;
const bleed = textFunctions.bleedText;
const pressText = textFunctions.pressText;

async function getStory(storyId) {
  let storyResult;
  let data;

  try {
    storyResult = await axios.get(`http://localhost:3000/story/${storyId}`);
    data = await storyResult.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve story");
  }

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
  const optionResult = await axios.get(
    `http://localhost:3000/story/${optionsId}`
  );
  const data = await optionResult.data;

  if (data.options.length === 0) {
    return null;
  }

  const option = data.options.map((option) => {
    return option.descriptionText;
  });
  const userResponse = readlineSync.keyInSelect(option, "What do you do now?");
  if (userResponse === -1) {
    console.clear();
    console.log(
      "You ran away like a coward, tripping over your own feet and falling into a pit of snakes "
    );
    youDied();
    process.exit();
  }
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

module.exports = { cursedKingdom };
