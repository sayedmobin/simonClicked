// Number 2.2 Create a button Color
var buttonColors = ["red", "blue", "green", "yellow"];
// Number 2.5 Create gamePattern
var gamePattern = [];

// Number 4.3 Create empty Array
var userClickedPattern = [];

// Number 4.1 IF the game started
var started = false;
// Number 7.2 Create a new Variable
var level = 0;

// Number 2.2: create RandomChosenNumber
var randomChosenColor;

// Number 4.2 Create a new variable
var userChosenColor;

// Step 7 Starts Here
  // Detect keyboard press First timeout
  $(document).keydown(function() {
    if (!started) {

      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  // Step 4 Starts Here
    // Number 4.1 Detect clicked Button
  $(".btn").on("click", function() {

    // Number 4.2 Create a new variable
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    // Number 8.2 Index of last answer in CheckAnswer function
    checkAnswer(userClickedPattern.length -1);
  });

function nextSequence() {
  userClickedPattern = [];
  // Increase level by one each time
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

// Step 2 Starts Here
  // Number 2.1: create a random number
  var randomNumber;
    randomNumber = Math.trunc(Math.random() * 4);

  // Number 2.2: create RandomChosenNumber
  randomChosenColor = buttonColors[randomNumber];
 // Number 2.6 Add the randomChosenColor to the end of gamepattern
  gamePattern.push(randomChosenColor);
// Step 3 Starts Here
  // Number 3.2 Animate the choosen button
  var changeButton = $("#" + randomChosenColor);
  flash(changeButton);

  // Number 3.3 Play sound on choosen button
  playSound(randomChosenColor);
}


// Step 8 Starts Here checkAnswer function
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
  } else {
        playSound("wrong");
        addAndRemoveCLass($("body"), "game-over", 1000);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

      }
} // end of checkanswer function



  // Number 3.2 Manual Function to animate any button
  function flash(button) {
    button.fadeOut(100).fadeIn(100);
  }

  // Number 5.4 Create audio function
  function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
  }

  // Step 6 Starts Here
  function animatePress(currentColor) {
    // Number 6.3 Add class Pressed
    var myclass = $("." + currentColor);
    addAndRemoveCLass(myclass, "pressed", "pressed", 100);

  }

// This is my custom function to make my life easier
  function addAndRemoveCLass(where, myClass, howlong) {
    where.addClass(myClass);
    setTimeout(function () {
      where.removeClass(myClass);
    }, howlong);
  }

// This is a custom Function to restart the game
  function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
  }


// End of project - Sayed Mobin Sadat
