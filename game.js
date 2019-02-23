//create an array for alphabets
var computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// variables and setting everything to the default value. Also Making your guess an Empty array to push the OnKeyUp function to it, in order to later display it

var wins = 0;
var losses = 0;
var GuessesLeft = 9;
var GuessSoFar = [];

// create variables to hold the references to specific places in the HTML

var myGuess = document.getElementById("myGuess");
var computerGuess = document.getElementById("computerGuess");

//random number code and computer guess here times the items of arrays in your variable, This shud be outside your KeyUp function

var RandomLetter =
  computerChoice[Math.floor(Math.random() * computerChoice.length) + 1];

// Make a funtion rest button for the game, when the user either wins or looses.
function reset() {
  console.log("Inside reset");
  GuessesLeft = 9;
  $("#GuessesLeft").text("GuessesLeft: " + GuessesLeft);
  RandomLetter =
    computerChoice[Math.floor(Math.random() * computerChoice.length) + 1];
  console.log(RandomLetter);
  GuessSoFar = [];
  $("#myGuess").text("Your Guesses so far: " + GuessSoFar);
}

// make an onkeyup funtion here.
// User guesses here
// followed by an If statements, break down potential outcomes and what will happen once the user wins, loses, etc.
console.log(RandomLetter);
document.onkeyup = function(event) {
  var myGuess = event.key.toLowerCase();
  console.log("myGuess " + myGuess);

  if (myGuess === RandomLetter) {
    wins++;
    $("#wins").text("wins: " + wins);
    reset();
  } else {
    GuessesLeft--;
    $("#GuessesLeft").text("GuessesLeft: " + GuessesLeft);
    GuessSoFar.push(myGuess);
    $("#myGuess").text("Your Guesses so far: " + GuessSoFar);
    if (GuessesLeft === 0) {
      losses++;
      $("#losses").text("losses: " + losses);
      reset();
    }
  }
};

//for loop so if the correct key equals to the random letter, increase the wins and rest the game to the original form, but make sure you keep your wins tallied up,
// if the wrong key is pressed decrease from your guess count,
