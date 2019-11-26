// variables

var choices = document.getElementsByClassName("choices");
var userChoice = "";
var compChoices = ["Rock", "Paper", "Scissors"]
var compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];

var win = 0
var lose = 0
var tie = 0


//find + print user choice

for(var i= 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
      document.getElementById("output").innerHTML =
      "You chose" + " " + userChoice + ".";
        startGame();
    });
  };

// print computer choice

function printCompChoice() {
  document.getElementById("output2").innerHTML =
  "The computer chose" + " " + compChoice + ".";
};


// find and print winner

    // lose
  function startGame() {
    if (userChoice == "Rock" && compChoice == "Paper" || 
      userChoice == "Scissors" && compChoice == "Rock" ||
      userChoice == "Paper" && compChoice =="Scissors") {
        printCompChoice();
          document.getElementById("output3").innerHTML =
          "You lost. :(";
  } else if 

    // tie
    (userChoice == "Rock" && compChoice == "Rock" ||
    userChoice == "Paper" && compChoice == "Paper" ||
    userChoice == "Scissors" && compChoice == "Scissors") {
      printCompChoice();
        document.getElementById("output3").innerHTML =
        "You tied!";
  } else if 
  
    // win
    (userChoice == "Rock" && compChoice == "Scissors" ||
    userChoice == "Scissors" && compChoice == "Paper" || 
    userChoice == "Paper" && compChoice == "Rock") {
      printCompChoice();
        document.getElementById("output3").innerHTML =
        "Congratulations! You won!";
  }
  else {
    document.getElementById("output3").innerHTML =
      "Computing error - please try again!";
  };
};