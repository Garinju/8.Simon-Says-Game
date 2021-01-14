//determine if the user already start the game//
var buttonColor = ["green", "red", "yellow", "blue"];
var computerPattern = [];
var userPattern = [];
var isGameStarted = false;
var levelNumber = 0;



$(document).keypress(function() {
  if (!isGameStarted) {
    $("h1").html("level " + levelNumber);
    computerTurn();
    isGameStarted = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);
  console.log(userPattern);
  checkAnswer(userPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (computerPattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === computerPattern.length) {
      $("h1").text("Kerja Bagus Bangsat!!!!");
      setTimeout(function() {
        computerTurn();
      },2000);
    }
  }
  else {
    $("h1").text("Salah BEGO!!!!");
    setTimeout(function() {
      location.reload();
    }, 1000);
  }
}


function computerTurn() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userPattern = [];
  levelNumber++;
  $("#level-title").text("Level " + levelNumber);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  computerPattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(computerPattern);
}
