const readlineSync = require("readline-sync");

const { dangerText } = require("./functions/text-functions");
const { cursedKingdom } = require("./game");
// function loading() {
//   var h = ["|", "/", "-", "\\"];
//   var i = 0;

//   return setInterval(() => {
//     i = i > 3 ? 0 : i;
//     console.clear();
//     console.log(h[i]);
//     i++;
//   }, 300);
// }

function promptUser() {
  const result = readlineSync.keyInYN(
    "Do you want to play The Cursed Kingdom: A Descent into Madness "
  );
  if (result === true) {
    console.log("Installing now...");
    // loading();
    cursedKingdom();
  } else {
    dangerText("You Died! Searching for another warrior...");
    process.exit();
  }
}

promptUser();
module.exports = { promptUser };
