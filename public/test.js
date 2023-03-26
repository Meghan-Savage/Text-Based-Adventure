const { exec } = require("child_process");
const path = require("path");

const videoPath = path.join(__dirname, "pet-the-dog.mp4"); // replace with your video file path

exec(`start ${videoPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
