const textFunction = require("../functions/text-functions.js");
const readlineSync = require("readline-sync");

// declare functions
const youDied = textFunction.youDiedText;
const danger = textFunction.dangerText;
const poison = textFunction.spiderText;
const Bleed = textFunction.BleedText;

let userName = readlineSync.question("Hey prisoner, give me your name: ");

while (!userName) {
  userName = readlineSync.question("Hey prisoner, give me your name: ");
}

const formattedUserName =
  userName[0].toUpperCase() + userName.slice(1, userName.length).toLowerCase();

console.log(`Welcome to your demise ${formattedUserName}!`);

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

if (userResponse === 0) {
  console.log(
    "You struggle against the chains, but they're too tight. You start to panic and make too much noise, alerting your captors. They enter the room and execute you on the spot. Game over"
  );
  youDied();
  process.exit();
} else if (userResponse === 1) {
  console.log(
    "Your captors enter the room, and you can make out their figures in the dim light. They don't seem to have noticed that you're awake. You can try to attack them or wait for them to leave."
  );
  options = ["Try to attack them", "Wait for them to leave."];
  userResponse = readlineSync.keyInSelect(options, "What do you do now? ");

  if (userResponse === 0) {
    console.log(
      "You manage to break free from the chains and attack the captors. You grab one of their swords and fight them off. As you make your escape, you come across a fork in the road."
    );
    options = [
      "Head towards the abandoned castle",
      "Head towards the battlefield.",
      "Head towards the forest.",
    ];
    userResponse = readlineSync.keyInSelect(options, "What do you do now? ");
    if (userResponse === 0) {
      console.log(
        "You make your way towards the abandoned castle, but as you enter, you realize it's a trap. The captors were waiting for you, and you're outnumbered. They capture you and torture you until you die. Game over."
      );
      youDied();
      process.exit();
    } else if (userResponse === 1) {
      console.log(
        "You make it to the battlefield, but it's overrun with enemy soldiers. You can try to sneak through or fight your way through."
      );
      options = [
        "Sneak through the battlefield.",
        "Fight your way through the battlefield.",
      ];
      userResponse = readlineSync.keyInSelect(options, "What do you do now? ");
      if (userResponse === 0) {
        console.log(
          "You try to sneak through the battlefield, but you're spotted by an enemy soldier. They capture you and take you to their leader, who executes you. Game over."
        );
        youDied();
        process.exit();
      } else if (userResponse === 1) {
        console.log(
          "You manage to fight your way through the battlefield and come across a village."
        );
        options = [
          "Enter the village and rest.",
          "Avoid the village and keep moving.",
        ];
        userResponse = readlineSync.keyInSelect(
          options,
          "What do you do now? "
        );
        if (userResponse === 0) {
          console.log(
            "You enter the village and rest. As you're sleeping, you're ambushed by the villagers who turn out to be working with your captors. You're killed in your sleep. Game over."
          );
          youDied();
          process.exit();
        } else if (userResponse === 1) {
          console.log(
            "You avoid the village and keep moving. You come across a river and can try to cross it or follow it."
          );
          options = ["Try to cross the river.", "Follow the river."];

          userResponse = readlineSync.keyInSelect(
            options,
            "What do you do now? "
          );
          if (userResponse === 0) {
            console.log(
              "You try to cross the river, but it's too deep and you get swept away. You drown. Game over."
            );
            youDied();
            process.exit();
          } else if (userResponse === 1) {
            console.log(
              "You follow the river and eventually come across a castle. You can try to enter the castle or keep moving."
            );
            options = ["Try to enter the castle.", "Keep moving."];
            userResponse = readlineSync.keyInSelect(
              options,
              "What do you do now? "
            );
            if (userResponse === 0) {
              console.log(
                "You try to enter the castle, but it's heavily guarded. You're spotted and captured. Game over."
              );
              youDied();
              process.exit();
            } else if (userResponse === 1) {
              console.log(
                "You keep moving and eventually come across a forest. You can try to navigate through the forest or go around it."
              );
              options = [
                "Navigate through the forest.",
                "Go around the forest.",
              ];
              userResponse = readlineSync.keyInSelect(
                options,
                "What do you do now? "
              );
              if (userResponse === 0) {
                console.log(
                  "You navigate through the forest and come across a clearing. In the clearing, you see a dog."
                );
                options = ["Pet the dog."];
                userResponse = readlineSync.keyInSelect(
                  options,
                  "What do you do now? "
                );
                if (userResponse === 0) {
                  console.log("The dog runs at you and attacks you");
                  youDied();
                  process.exit();
                }
              } else if (userResponse === 1) {
                console.log(
                  "You run into a band of thieves,they mug you and stab you in the neck"
                );
                youDied();
                process.exit();
              }
            }
          }
        }
      }
    } else if (userResponse === 2) {
      console.log(
        "You navigate through the forest and come across a clearing. In the clearing, you see a dog."
      );
      (options = ["Pet the dog."]),
        (userResponse = readlineSync.keyInSelect(
          options,
          "What do you do now? "
        ));
      if (userResponse === 0) {
        console.log("The dog runs at you and attacks you");
        youDied();
        process.exit();
      }
    }
  } else if (userResponse === 1) {
    console.log(
      "as you are waiting for the captors to leave a small black spider crawls up your sleeve and bites you! You have been poisoned."
    );
    poison("spider bite");
    youDied();
    process.exit();
  }
} else if (userResponse === 2) {
  console.log(
    "You yell for help, but nobody responds. You hear footsteps approaching the door, and you can try to convince your captors to release you or stay silent."
  );
  options = ["Convince your captors to release you.", "attack your captors"];
  userResponse = readlineSync.keyInSelect(options, "What do you do now? ");
  if (userResponse === 0) {
    console.log(
      "You try to convince your captors to release you, but they don't listen. They execute you on the spot. Game over."
    );
    youDied();
    process.exit();
  } else if (userResponse === 1) {
    console.log(
      "You manage to break free from the chains and attack the captors. You grab one of their swords and fight them off. As you make your escape, you come across a fork in the road."
    );
    options = [
      "Head towards the abandoned castle",
      "Head towards the battlefield.",
      "Head towards the forest.",
    ];
    userResponse = readlineSync.keyInSelect(options, "What do you do now? ");

    if (userResponse === 0) {
      console.log(
        "You make your way towards the abandoned castle, but as you enter, you realize it's a trap. The captors were waiting for you, and you're outnumbered. They capture you and torture you until you die. Game over."
      );
      youDied();
      process.exit();
    } else if (userResponse === 1) {
      console.log(
        "You make it to the battlefield, but it's overrun with enemy soldiers. You can try to sneak through or fight your way through."
      );
      options = [
        "Sneak through the battlefield.",
        "Fight your way through the battlefield.",
      ];
      userResponse = readlineSync.keyInSelect(options, "What do you do now? ");
      if (userResponse === 0) {
        console.log(
          "You try to sneak through the battlefield, but you're spotted by an enemy soldier. They capture you and take you to their leader, who executes you. Game over."
        );
        youDied();
        process.exit();
      } else if (userResponse === 1) {
        console.log(
          "You manage to fight your way through the battlefield and come across a village."
        );
        options = [
          "Enter the village and rest.",
          "Avoid the village and keep moving.",
        ];
        userResponse = readlineSync.keyInSelect(
          options,
          "What do you do now? "
        );
        if (userResponse === 0) {
          console.log(
            "You enter the village and rest. As you're sleeping, you're ambushed by the villagers who turn out to be working with your captors. You're killed in your sleep. Game over."
          );
          youDied();
          process.exit();
        } else if (userResponse === 1) {
          console.log(
            "You avoid the village and keep moving. You come across a river and can try to cross it or follow it."
          );
          options = ["Try to cross the river.", "Follow the river."];

          userResponse = readlineSync.keyInSelect(
            options,
            "What do you do now? "
          );
          if (userResponse === 0) {
            console.log(
              "You try to cross the river, but it's too deep and you get swept away. You drown. Game over."
            );
            youDied();
            process.exit();
          } else if (userResponse === 1) {
            console.log(
              "You follow the river and eventually come across a castle. You can try to enter the castle or keep moving."
            );
            options = ["Try to enter the castle.", "Keep moving."];
            userResponse = readlineSync.keyInSelect(
              options,
              "What do you do now? "
            );
            if (userResponse === 0) {
              console.log(
                "You try to enter the castle, but it's heavily guarded. You're spotted and captured. Game over."
              );
              youDied();
              process.exit();
            } else if (userResponse === 1) {
              console.log(
                "You keep moving and eventually come across a forest. You can try to navigate through the forest or go around it."
              );
              options = [
                "Navigate through the forest.",
                "Go around the forest.",
              ];
              userResponse = readlineSync.keyInSelect(
                options,
                "What do you do now? "
              );
              if (userResponse === 0) {
                console.log(
                  "You navigate through the forest and come across a clearing. In the clearing, you see a dog."
                );
                options = ["Pet the dog."];
                userResponse = readlineSync.keyInSelect(
                  options,
                  "What do you do now? "
                );
                if (userResponse === 0) {
                  console.log("The dog runs at you and attacks you");
                  youDied();
                  process.exit();
                }
              } else if (userResponse === 1) {
                console.log(
                  "You run into a band of thieves,they mug you and stab you in the neck"
                );
                youDied();
                process.exit();
              }
            }
          }
        }
      }
    } else if (userResponse === 2) {
      console.log(
        "You navigate through the forest and come across a clearing. In the clearing, you see a dog."
      );
      (options = ["Pet the dog."]),
        (userResponse = readlineSync.keyInSelect(
          options,
          "What do you do now? "
        ));
      if (userResponse === 0) {
        console.log("The dog runs at you and attacks you");
        youDied();
        process.exit();
      }
    }
  } else if (userResponse === 1) {
    console.log(
      "as you are waiting for the captors to leave a small black spider crawls up your sleeve and bites you! You have been poisoned."
    );
    poison("spider bite");
    youDied();
    process.exit();
  }
}
