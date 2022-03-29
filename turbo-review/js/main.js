// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "coffee";
drink = drink.trim();
console.log(drink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let moreWords = "I am a baddie, I write bad code. and I eat apple";
if (moreWords.includes("apple")) {
  console.log("Apple is here");
} else {
  console.log("No apple");
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let rando = Math.random();
  if (rando < 0.33) {
    return "rock";
  } else if (rando < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
  let botChoice = rockPaperScissors();
  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    console.log("You are the Winner!!");
  } else if (playerChoice === botChoice) {
    console.log("You tied");
  } else {
    console.log("You lose");
  }
}
// checkWin("paper");
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr) {
  arr.forEach((choice) => checkWin(choice));
}
playGameXTimes(["rock", "paper", "scissors"]);
