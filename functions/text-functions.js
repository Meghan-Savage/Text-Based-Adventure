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
        `You pressed the button ${count} times... Breaking your weak finger. Git Gud`
      ),
        youDiedText();
    } else {
      console.log(`You pressed the button ${count} times.Too slow Git Gud`);
      youDiedText();
    }
    process.exit();
  }, 5000);
}
function poison() {
  var frame = 0;
  var frames = [
    "You",
    "Are",
    "Poisoned!",
    "         ",
    "Poisoned!",
    "         ",
    "Poisoned!",
    "         ",
    "Poisoned!",
    "         ",
    "Poisoned!",
    "         ",
    "Poisoned!",
  ];
  var showNext = () => {
    console.clear();

    console.log(`\x1b[42m\x1b[30m${frames[frame]}\x1b[0m`);

    if (frame === 12) {
      return;
    }

    setTimeout(
      showNext,
      frames[frame] === "Poisoned!" || frames[frame] === "         "
        ? 100
        : 1500
    );
    // next frame and loop
    frame++;
    if (frame >= frames.length) {
      frame = 0;
    }
  };
  showNext();
}

module.exports = {
  dangerText,
  youDiedText,
  spiderText,
  bleedText,
  pressText,
  poison,
};
