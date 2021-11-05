
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

// detect when any button is clicked
const button = $(".btn");

button.on("click", () => {
  // we get the id of the button the user clicks on
  // and then we add that to the userClickedPattern array
  // and check if that is the same as the gamePattern
  // if not, then we tell player they lost

  // to get the id of the button the user clicked on, we can use button.attr("id") to get the value of the id
  const userChosenColour = button.attr("id");

  // then we push to the array
  userClickedPattern.push(userChosenColour)

  // we call the playSound function that takes the ID of the button clicked to parse the right audio file
  playSound(userChosenColour);
})


// nextSequence function
// controls the next sequence given in the simon game
// i.e. when you get it correct, randomly selects another colour and adds to sequence
const nextSequence = () => {
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
  const audioObject = new Audio(`./sounds/${name}.mp3`);
  // play audio
  audioObject.play();
}
