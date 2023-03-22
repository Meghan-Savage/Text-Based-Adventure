const gameStory = [
  {
    id: 1,
    story:
      "You wake up in a dark and damp dungeon, feeling disoriented. You realize you've been chained up and your head is pounding. You hear the clink of armor outside the door, and you try to move to get a better look, but your chains hold you in place.",
    options: [
      { descriptionText: "Try to break free from the chains!", nextPath: 2 },
      {
        descriptionText: "Stay still and wait for your captors to enter.",
        nextPath: 3,
      },
      { descriptionText: "Yell for help!", nextPath: 17 },
    ],
  },

  {
    id: 2,
    story:
      "You struggle against the chains, but they're too tight. You start to panic and make too much noise, alerting your captors. They enter the room and execute you on the spot. Game over.",
    options: [],
  },

  {
    id: 3,
    story:
      "Your captors enter the room, and you can make out their figures in the dim light. They don't seem to have noticed that you're awake. You can try to attack them or wait for them to leave.",
    options: [
      { descriptionText: "Attack the captors.", nextPath: 4 },
      { descriptionText: "Wait for the captors to leave.", nextPath: 5 },
    ],
  },
  {
    id: 4,
    story:
      "You manage to break free from the chains and attack the captors. You grab one of their swords and fight them off. As you make your escape, you come across a fork in the road.",
    options: [
      { descriptionText: "Head towards the abandoned castle", nextPath: 6 },
      { descriptionText: "Head towards the battlefield.", nextPath: 7 },
      { descriptionText: "Head towards the forest.", nextPath: 15 },
    ],
  },
  {
    id: 5,
    story:
      "As you lie in wait for your captors to leave, a small black spider creeps up your sleeve, its fangs sinking deep into your skin and injecting a deadly venom that courses through your veins.",
    options: [],
  },
  {
    id: 6,
    story:
      "You make your way towards the abandoned castle, but as you enter, you realize it's a trap. The captors were waiting for you, and you're outnumbered. They capture you and torture you until you die. Game over.",
    options: [],
  },
  {
    id: 7,
    story:
      "You make it to the battlefield, but it's overrun with enemy soldiers. You can try to sneak through or fight your way through.",
    options: [
      { descriptionText: "Sneak through the battlefield.", nextPath: 8 },
      {
        descriptionText: "Fight your way through the battlefield.",
        nextPath: 9,
      },
    ],
  },
  {
    id: 8,
    story:
      "As you attempt to sneak through the chaos of the raging battlefield, you suddenly find yourself face-to-face with an enemy mage. In a split second, they unleash a poisonous cloud that surrounds you, choking your lungs and blinding your vision. You cough and struggle for breath, but it's too late. The poison starts to overcome you. Game over.",
    options: [],
  },
  {
    id: 9,
    story:
      "After enduring the horrors of the battlefield and fighting your way through, you stumble upon a small, peaceful village that offers a momentary respite from the chaos.",
    options: [
      { descriptionText: "Enter the village and rest.", nextPath: 10 },
      { descriptionText: "Avoid the village and keep moving.", nextPath: 11 },
    ],
  },
  {
    id: 10,
    story:
      "As you enter the quaint and peaceful village, you breathe a sigh of relief and take a moment to rest and rejuvenate. However, as you drift off to sleep, you are suddenly jolted awake by a loud shattering sound. A jar has been hurled through the window, and its contents begin to seep out, filling the room with a noxious and unknown gas. You try to cover your mouth and nose, but it's too late. The gas overwhelms your senses, and your vision blurs as you collapse to the ground, your adventure ending in a tragic and unexpected twist. Game over.",
    options: [],
  },
  {
    id: 11,
    story:
      "You avoid the village and keep moving. You come across a river and can try to cross it or follow it.",
    options: [
      { descriptionText: "Try to cross the river.", nextPath: 12 },
      { descriptionText: "Follow the river.", nextPath: 13 },
    ],
  },
  {
    id: 12,
    story:
      "As you attempt to traverse the rushing river, you quickly realize that it is far deeper and stronger than you anticipated. The force of the water drags you under, and you succumb to the currents, your adventure ending in a tragic and watery demise. Game over.",
    options: [],
  },
  {
    id: 13,
    story:
      "You follow the river and eventually come across a castle. You can try to enter the castle or keep moving.",
    options: [
      { descriptionText: "Try to enter the castle.", nextPath: 14 },
      { descriptionText: "Keep moving.", nextPath: 15 },
    ],
  },
  {
    id: 14,
    story:
      "as you approach the towering castle, you notice an army of heavily armed guards patrolling the perimeter, their watchful eyes scanning the horizon for any sign of intruders. You weigh your options carefully, but before you can make a move, They spot you and, with no mercy, capture you, bringing your adventure to an abrupt end. Game over.",
    options: [],
  },
  {
    id: 15,
    story:
      "You keep moving and eventually come across a forest. You can try to navigate through the forest or go around it.",
    options: [
      { descriptionText: "Navigate through the forest.", nextPath: 16 },
      { descriptionText: "Go around the forest.", nextPath: 19 },
    ],
  },
  {
    id: 16,
    story:
      "As you weave your way through the dense foliage of the forest, you eventually stumble upon a small clearing that opens up before you. Within the clearing, you catch a glimpse of a lone dog, its fur matted and its eyes gleaming with curiosity.",
    options: ["Pet the dog."],
  },

  {
    id: 17,
    story:
      "You yell for help, but nobody responds. You hear footsteps approaching the door, and you can try to convince your captors to release you or stay silent.",
    options: [
      {
        descriptionText: "Convince your captors to release you.",
        nextPath: 18,
      },
      { descriptionText: "attack your captors", nextPath: 4 },
    ],
  },
  {
    id: 18,
    story:
      "You try to convince your captors to release you, but they don't listen. They execute you on the spot. Game over.",
    options: [],
  },
  {
    id: 19,
    story:
      "As you make your way past the forest, an ominous shadow catches your eye in the murky sky above. You freeze in terror as it rapidly descends towards you, revealing a monstrous bird with razor-sharp talons and a gaping beak filled with jagged teeth. Before you can even scream, the colossal creature swoops down with lightning speed and snatches you up in its deadly grip. You feel its crushing force as you helplessly struggle, only to be ripped apart by its savage jaws, your screams echoing through the woods as your life is brutally ended.Game Over",
    options: [],
  },
];
console.log(gameStory);
module.exports = { gameStory };
