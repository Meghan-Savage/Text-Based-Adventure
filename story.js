const gameStory = [
  {
    id: 1,
    story:
      "You struggle against the chains, but they're too tight. You start to panic and make too much noise, alerting your captors. They enter the room and execute you on the spot. Game over.",
    options: [],
  },

  {
    id: 2,
    story:
      "Your captors enter the room, and you can make out their figures in the dim light. They don't seem to have noticed that you're awake. You can try to attack them or wait for them to leave.",
    options: ["Attack the captors.", "Wait for the captors to leave."],
  },
  {
    story:
      "You manage to break free from the chains and attack the captors. You grab one of their swords and fight them off. As you make your escape, you come across a fork in the road.",
    options: [
      "Head towards the abandoned castle",
      "Head towards the battlefield.",
      "Head towards the forest.",
    ],
  },
  {
    story:
      "As you are waiting for the captors to leave a small black spider crawls up your sleeve and bites you! You have been poisoned.",
    options: [],
  },
  {
    story:
      "You make your way towards the abandoned castle, but as you enter, you realize it's a trap. The captors were waiting for you, and you're outnumbered. They capture you and torture you until you die. Game over.",
    options: [],
  },
  {
    story:
      "You make it to the battlefield, but it's overrun with enemy soldiers. You can try to sneak through or fight your way through.",
    options: [
      "Sneak through the battlefield.",
      "Fight your way through the battlefield.",
    ],
  },
  {
    story:
      "You try to sneak through the battlefield, but you're spotted by an enemy soldier. They capture you and take you to their leader, who executes you. Game over.",
    options: [],
  },
  {
    story:
      "You manage to fight your way through the battlefield and come across a village.",
    options: [
      "Enter the village and rest.",
      "Avoid the village and keep moving.",
    ],
  },
  {
    story:
      "You enter the village and rest. As you're sleeping, you're ambushed by the villagers who turn out to be working with your captors. You're killed in your sleep. Game over.",
    options: [],
  },
  {
    story:
      "You avoid the village and keep moving. You come across a river and can try to cross it or follow it.",
    options: ["Try to cross the river.", "Follow the river."],
  },
  {
    story:
      "You try to cross the river, but it's too deep and you get swept away. You drown. Game over.",
    options: [],
  },
  {
    story:
      "You follow the river and eventually come across a castle. You can try to enter the castle or keep moving.",
    options: ["Try to enter the castle.", "Keep moving."],
  },
  {
    story:
      "You try to enter the castle, but it's heavily guarded. You're spotted and captured. Game over.",
    options: [],
  },
  {
    story:
      "You keep moving and eventually come across a forest. You can try to navigate through the forest or go around it.",
    options: [
      { descriptionText: "Navigate through the forest.", nextPath: 52 },
      { descriptionText: "Go around the forest.", nextPath: 53 },
    ],
  },
  {
    id: 52,
    story:
      "You navigate through the forest and come across a clearing. In the clearing, you see a dog.",
    options: ["Pet the dog."],
  },

  {
    id: 3,
    story:
      "You yell for help, but nobody responds. You hear footsteps approaching the door, and you can try to convince your captors to release you or stay silent.",
    options: ["Convince your captors to release you.", "attack your captors"],
  },
  {
    story:
      "You try to convince your captors to release you, but they don't listen. They execute you on the spot. Game over.",
    options: [],
  },
];

module.exports = { gameStory };
