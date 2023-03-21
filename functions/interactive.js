//function spiderText(string) {
//return console.log(`\x1b[42m\x1b[30m${string}\x1b[0m`);
(function () {
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
})();
