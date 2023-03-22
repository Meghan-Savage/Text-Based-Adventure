function flashText(text, loopCount, delay) {
  // this create a string of spaces the same length as the text
  // this is needed to ensure that the green background is the same length as the text when there's no text
  let blankText = " ".repeat(text.length);
  let frame = 0;
  let frames = [text, blankText];

  //this loop creates the frames array with the text and blankText allowing us to set how long the function runs for
  for (let i = 0; i < loopCount; i++) {
    frames.push(text);
    frames.push(blankText);
  }

  return new Promise((resolve) => {
    function showNext() {
      // this clears the console so that the text is not repeated
      console.clear();
      // this sets the background to green and the text to white
      console.log(`\x1b[42m\x1b[30m${frames[frame]}\x1b[0m`);
      frame++;
      if (frame >= frames.length) {
        resolve();
        // this clears the console so that the text when the funciton is done running
        console.clear();
      } else {
        // this sets the delay between flashes
        setTimeout(showNext, delay);
      }
    }

    showNext();
  });
}

flashText("You Are Poisoned!", 10, 200);
