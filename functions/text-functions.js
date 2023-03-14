function youDiedText() {
  return console.log("\x1B[31mYOU DIED!\x1B[0m");
}

function dangerText(string) {
  return console.log(`\x1B[31m${string}\x1B[0m`);
}

module.exports = { dangerText, youDiedText };
