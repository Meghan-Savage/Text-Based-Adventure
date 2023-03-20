const readlineSync = require("readline-sync");

const { dangerText } = require("./text-functions");
const { cursedKingdom } = require("../game");

function promptUser() {
  const result = readlineSync.keyInYN(
    "Do you want to play The Cursed Kingdom: A Descent into Madness "
  );
  if (result === true) {
    console.log("Installing now...");
    cursedKingdom();
  } else {
    dangerText("You Died! Searching for another warrior...");
    process.exit();
  }
}
module.exports = { promptUser };
