let readlineSync = require("readline-sync");

console.log(
  `You wake up in a dark and damp dungeon, feeling disoriented. You realize you've been chained up and your head is pounding. You hear the clink of armor outside the door, and you try to move to get a better look, but your chains hold you in place.`
);

let options = [
  "Try to break free from the chains!",
  "Stay still and wait for your captors to enter.",
  "Yell for help!",
];

let userResponse = readlineSync.keyInSelect(
  options,
  "What action do you take to survive? "
);
console.log("userResponse", userResponse);

if (userResponse === 0) {
  console.log("You have chosen to: ", options[userResponse], "\n");

  console.log(
    `You struggle against the chains, but they're too tight. You start to panic and make too much noise, alerting your captors. They enter the room and execute you on the spot.`
  );
  console.log("%cYOU DIED!", "color:red");

  let userChoice = readlineSync.question("did you like my game? ");
  if ((userChoice = "yes")) {
    console.log("I'm glad you did have a good time next time! ");
  }
}

console.log(
  `Option 2: Your captors enter the room, and you can make out their figures in the dim light. They don't seem to have noticed that you're awake. You can try to attack them or wait for them to leave.`
);

console.log(`Option 2.1: Attack the captors.`);
console.log(`Option 2.2: Wait for the captors to leave.`);

console.log(
  `Option 2.1: You manage to break free from the chains and attack the captors. You grab one of their swords and fight them off. As you make your escape, you come across a fork in the road.`
);

console.log(`Option 2.1.1: Head towards the abandoned castle.`);
console.log(`Option 2.1.2: Head towards the battlefield.`);
console.log(`Option 2.1.3: Head towards the forest.`);

console.log(`Option 2.1.1: You make your way towards the abandoned castle, but as you enter, you realize it's a trap. The captors were waiting for you, and you're outnumbered. They capture you and torture you until you die. Game over.
`);

console.log(
  `Option 2.1.2: You make it to the battlefield, but it's overrun with enemy soldiers. You can try to sneak through or fight your way through.`
);

console.log(`Option 2.1.2.1: Sneak through the battlefield.`);
console.log(`Option 2.1.2.2: Fight your way through the battlefield.`);

console.log(
  `Option 2.1.2.1: You try to sneak through the battlefield, but you're spotted by an enemy soldier. They capture you and take you to their leader, who executes you. Game over.`
);

console.log(
  `Option 2.1.2.2: You manage to fight your way through the battlefield and come across a village.`
);

console.log(`Option 2.1.2.2.1: Enter the village and rest.`);
console.log(`Option 2.1.2.2.2: Avoid the village and keep moving.`);

console.log(
  `Option 2.1.2.2.1: You enter the village and rest. As you're sleeping, you're ambushed by the villagers who turn out to be working with your captors. You're killed in your sleep. Game over.`
);

console.log(
  `Option 2.1.2.2.2: You avoid the village and keep moving. You come across a river and can try to cross it or follow it.`
);

console.log(`Option 2.1.2.2.2.1: Try to cross the river.`);
console.log(`Option 2.1.2.2.2.2: Follow the river.`);

console.log(
  `Option 2.1.2.2.2.1: You try to cross the river, but it's too deep and you get swept away. You drown. Game over.`
);

console.log(
  `Option 2.1.2.2.2.2: You follow the river and eventually come across a castle. You can try to enter the castle or keep moving.`
);

console.log(`Option 2.1.2.2.2.2.1: Try to enter the castle.`);
console.log(`Option 2.1.2.2.2.2.2: Keep moving.`);

console.log(
  `Option 2.1.2.2.2.2.1: You try to enter the castle, but it's heavily guarded. You're spotted and captured. Game over.`
);

console.log(
  `Option 2.1.2.2.2.2.2: You keep moving and eventually come across a forest. You can try to navigate through the forest or go around it.`
);

console.log(`Option 2.1.2.2.2.2.2.1: Navigate through the forest.`);
console.log(`Option 2.1.2.2.2.2.2.2: Go around the forest.`);

console.log(
  `Option 2.1.2.2.2.2.2.1: You navigate through the forest and come across a clearing. In the clearing, you see a dog.`
);

console.log(`Option 2.1.2.2.2.2.2.1.1: Pet the dog.`);
console.log(`Option 2.1.2.2.2.2.2.1.2: Ignore the dog and keep moving.`);

console.log(`Option 2.1.2.2.2.2.2.1.1: You pet the dog.....YOU DIED!!`);

console.log(
  `Option 3: You yell for help, but nobody responds. You hear footsteps approaching the door, and you can try to convince your captors to release you or stay silent.`
);

console.log(`Option 3.1: Convince your captors to release you.`);
console.log(`Option 3.2: Stay silent.`);

console.log(
  `Option 3.1: You try to convince your captors to release you, but they don't listen. They execute you on the spot. Game over.`
);

console.log(
  `Option 3.2.1: You manage to break free from the chains and attack the captors. You grab one of their swords and fight them off. As you make your escape, you come across a fork in the road.`
);
// leads you to previous options 2.1.1, 2.1.2, 2.1.3
console.log(`Option 3.2.1.1: Head towards the abandoned castle.`);
console.log(`Option 3.2.1.2: Head towards the battlefield.`);
console.log(`Option 3.2.1.3: Head towards the forest.`);
