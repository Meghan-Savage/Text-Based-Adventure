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

module.exports = { poison };
