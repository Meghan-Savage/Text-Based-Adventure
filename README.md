# Cursed Kingdom

Cursed Kingdom is a text-based adventure game in which the player must navigate a dangerous world full of peril and intrigue. As the player progresses through the game, they will encounter various challenges and obstacles, and must make choices that will affect the outcome of their journey.

This project is a Node.js application that creates a simple web server using the Express framework to serve a text based adventure game. The server listens on port 3000 and provides endpoints to retrieve the game story data.

## Prerequisites

Before running this application, you need to have Node.js and NPM (Node Package Manager) installed on your machine. You can download them from the official Node.js website [here](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine.
2. Open your terminal or command prompt and navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

To start the server, run `node server.js` in your terminal or command prompt. You should see a message in the console that says "app listening on 3000".

Once the server is running, you can access the following endpoints:

- `/`: displays the message "game start".
- `/story`: returns the entire game story as a JSON object.
- `/story/:id`: returns a specific story object with the given ID.

If you enter an invalid URL or endpoint, you will see a 404 error message.

## Functions

### youDiedText()

This function outputs a message in the console using red text, indicating that the user has died in red text.

### dangerText(string)

This function takes a string as an argument and outputs it to the console using red text.

### spiderText(string)

This function takes a string as an argument and outputs it to the console using green text on a black background to create a "poison" effect.

### bleedText(string)

This function takes a string as an argument and outputs it to the console using red text on a white background to create a "bleeding" effect.

### pressText()

This function prompts the user to press the 'p' key and measures how many times the user presses the key within 5 seconds. If the user presses the key more than 28 times, they "beat the poison." Otherwise, the function calls the youDiedText() function to indicate that the user has died.

### poison()

This function outputs a "poisoned" message to the console using green text on a black background. The message changes every few seconds to create an animation effect.

## Story.js

This is a JavaScript code that defines an array of objects called gameStory. Each object represents a specific stage or scenario in a text-based game. Each object has an id property that identifies the scenario and a story property that describes the situation the player is in. Each object also has an options property that is an array of objects representing the choices the player can make at that stage.

The options array contains objects that have a descriptionText property representing the description of the option, and a nextPath property that indicates the id of the scenario that the game should go to if the player chooses that option. Some objects also have additional properties, such as youDied and poison, that indicate the end result of choosing a certain option.

## Game Logic

### Code Breakdown:

The game uses several functions to display text, get user input, and fetch data from the server.

Required modules:

```javascript
const readlineSync = require("readline-sync");
const textFunctions = require("./functions/text-functions");
const { poison } = require("./functions/text-functions");
const { openFile } = require("./public/test");
```

1. readline-sync: used to get user input from the console.
2. textFunctions: contains functions that display text in the console.
3. poison: a function that displays a message to the user when they have been poisoned.
4. openFile: a function that displays a message to the user when they find a file.

getStory: retrieves the story data for a given story id from the server, displays the story in the console, and calls the appropriate function depending on the data received.
getOptions: retrieves the options data for a given options id from the server, prompts the user to choose an option, and returns the next path based on the user's choice.

## Acknowledgements

This project was created with the help of the following resources:

- [Express.js documentation](https://expressjs.com/)
- [Node.js documentation](https://nodejs.org/en/docs/)
