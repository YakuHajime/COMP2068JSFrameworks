// Import prompt package
const prompt = require("prompt");

// Start prompt
prompt.start();

// Ask user for input
prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  // Convert input to uppercase (similar to .ToUpper() in C#)
  let userSelection = result.userSelection.toUpperCase();

  console.log("You have entered: " + userSelection);

  // Generate computer selection
  let randomNum = Math.random();
  let computerSelection;

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  console.log("Computer chose: " + computerSelection);

  // Decide the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "PAPER") ||
    (userSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (userSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    console.log("Computer Wins!");
  } else {
    console.log("Invalid input. Please enter ROCK, PAPER, or SCISSORS.");
  }
});
