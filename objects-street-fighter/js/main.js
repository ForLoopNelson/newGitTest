//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Streetfightcharacters(name, specialMove, strength, yell) {
  this.charName = name;
  this.charMove = specialMove;
  this.charMight = strength;
  this.charVoice = yell;
}

let ryu = new Streetfightcharacters("Ryu", "Shoruken", 200, "hiyaaa");

let Zangief = new Streetfightcharacters("Zangief", "Chest Pump", 400, "ARRGGG");
