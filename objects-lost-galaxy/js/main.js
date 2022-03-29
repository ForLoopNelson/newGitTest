//Create a mouse object that has four properties and three methods
const mouse = {
  size: "small",
  color: "white",
  tail: "long",
  Mname: "squeakers",
};

function describe(mousey) {
  return `The mouse is ${mousey.size}, it's color is ${mousey.color}, it's tail length is ${mousey.tail} and it's name is ${mousey.Mname}`;
}

console.log(describe(mouse));
