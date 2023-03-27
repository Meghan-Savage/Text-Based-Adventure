const readlineSync = require("readline-sync");

function youDiedText() {
  return console.log("\x1B[31mYOU DIED!\x1B[0m");
}

function dangerText(string) {
  return console.log(`\x1B[31m${string}\x1B[0m`);
}

function spiderText(string) {
  return console.log(`\x1b[42m\x1b[30m${string}\x1b[0m`);
}
function bleedText(string) {
  return console.log(`\x1b[41m\x1b[1m${string}\x1b[0m`);
}

function pressText() {
  console.log("Press 'p' to fight the poison!!! You WILL DIE IN 5 SECONDS");

  let count = 0;
  let timer;

  process.stdin.setRawMode(true);
  process.stdin.resume();

  process.stdin.on("data", function (key) {
    if (key.toString() === "p") {
      count++;
    }
  });

  timer = setTimeout(() => {
    if (count > 28) {
      console.log("You beat the poison!");
      console.log(
        `You pressed the button ${count} times... you broke your finger and can no longer play the game!`
      ),
        youDiedText();
    } else {
      console.log(`You pressed the button ${count} times.`);
      youDiedText();
    }
    process.exit();
  }, 5000);
}

module.exports = { dangerText, youDiedText, spiderText, bleedText, pressText };
