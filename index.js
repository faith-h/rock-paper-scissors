// variables

var choices = document.getElementsByClassName("choices");
var userChoice = "";
var compChoices = ["Rock", "Paper", "Scissors"]
var compChoice = ''
var win = 0;
var tie = 0;
var lose = 0;

//find + print user choice

for(var i= 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
      document.getElementById("output").innerHTML =
      "You chose" + " " + userChoice + ".";
        compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
        startGame();
    });
  };

// print computer choice

for(var i= 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
  document.getElementById("output2").innerHTML =
  "The computer chose" + " " + compChoice + "."
  });
};

// begin game

  function startGame() {
    if (userChoice == "Rock" && compChoice == "Paper" || 
      userChoice == "Scissors" && compChoice == "Rock" ||
      userChoice == "Paper" && compChoice =="Scissors") {
          userLose();
  } else if (userChoice == "Rock" && compChoice == "Rock" ||
    userChoice == "Paper" && compChoice == "Paper" ||
    userChoice == "Scissors" && compChoice == "Scissors") {
        userTie();

  } else if (userChoice == "Rock" && compChoice == "Scissors" ||
    userChoice == "Scissors" && compChoice == "Paper" || 
    userChoice == "Paper" && compChoice == "Rock") {
        userWin();
  }
  else {
    document.getElementById("output3").innerHTML =
      "Computing error - please try again!";
  };
};

// display game results

function userLose() {
  document.getElementById("output3").innerHTML =
  "You lost. :(";
    lose++;
      document.getElementById("lose").innerHTML =
      "Losses:" + lose
};

function userTie() {
  document.getElementById("output3").innerHTML =
  "You tied.";
    tie++;
      document.getElementById("tie").innerHTML =
      "Ties:" + tie
};

function userWin() {
  document.getElementById("output3").innerHTML =
  "Congratulations! You won!";
    win++;
      document.getElementById("win").innerHTML =
      "Wins:" + win
};