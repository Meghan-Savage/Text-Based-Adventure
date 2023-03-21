function youDiedText() {
  return console.log("\x1B[31mYOU DIED!\x1B[0m");
}

function dangerText(string) {
  return console.log(`\x1B[31m${string}\x1B[0m`);
}

function spiderText(string) {
  return console.log(`\x1b[42m\x1b[30m${string}\x1b[0m`);
}
function BleedText(string) {
  return console.log(`\x1b[41m\x1b[1m${string}\x1b[0m`);
}

function pressText(string) {
  let count = 0;

  // Set up input stream to read from the terminal
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  // Add event listener to detect when a key is pressed
  process.stdin.on("data", function (key) {
    // If the key pressed is 'q', exit the program
    if (key === "p") {
      console.log(`You pressed the button ${count} times.`);
      process.exit();
    }

    // Otherwise, increment the count variable
    count++;
  });

  // Set up timer to exit the program if count is less than 15 after 7 seconds
  setTimeout(function () {
    if (count < 15) {
      console.log(
        `You pressed the button ${count} times, which is less than 15. Program exiting.`
      );
      process.exit();
    }
  }, 7000);
}

module.exports = { dangerText, youDiedText, spiderText, BleedText };
