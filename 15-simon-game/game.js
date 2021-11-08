
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

// check if the game has started or not
let started = false;

// level variable
let level = 0;

// detect when any button is clicked
const button = $(".btn");

// check for first click
$(document).click(() => {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// sound and animation on click of button
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userChosenColour)
});

// nextSequence function
const nextSequence = () => {
  // increasing level by 1
  level += 1
  console.log(level)

  // update title to account for level increase
  $("#level-title").text("Level " + level);

  // to make a random number, we need Math.floor(Math.random())
  // where Math.floor rounds the number down and Math.random() makes a random num between 0 and 1(upperbound)
  // we multiply by 4 to allow it to select a value between 0 and 3 corresponding to index
  const randomNumber = Math.floor(Math.random() * 4)
  // we define a random chosen colour by indexing a random value from a defined array of colours, buttonColours
  const randomChosenColour = buttonColours[randomNumber]
  // then to define the sequence of colours, we append it to another array, holding the sequence of colours gamePattern
  gamePattern.push(randomChosenColour)

  // selecting button with same id as randomChosenColour
  const chosenButton = $("#" + randomChosenColour);
  // flash animation
  chosenButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //playing sound with playSound function
  playSound(chosenButton)

}

const playSound = (name) => {
  // we take the name as the value of the id from the clicked button
  // we call this playSound() function in the event listener for the button click
  // so on click, the ID of the button is passed into this function, which plays the according sound for the button, passing the ID into the template literal
  // which parses the right sound file
  const audioObject = new Audio(`sounds/${name}.mp3`);
  // play audio
  audioObject.play();
}

const animatePress = (currentColour) => {
  // takes single parameter, currentColour - that is the ID of the colour of the clicked button, which we pass in from the eventListener
  // use jQuery to add the .pressed css class to the button that has been clicked on
  const clickedButton = $("#" + currentColour);
  clickedButton.addClass("pressed");

  // after 100 ms we timeout the pressed class
  setTimeout(() => {
    clickedButton.removeClass("pressed");
  }, 100)
}


// Step 8: checkAnswer function
const checkAnswer = (currentLevel) => {

}
