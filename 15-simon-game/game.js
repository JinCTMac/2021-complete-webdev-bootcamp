
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

const clickhandler = (value) => {
  // we get the id of the button the user clicks on
  // and then we add that to the userClickedPattern array
  // and check if that is the same as the gamePattern
  // if not, then we tell player they lost
  const userChosenColour = value.target.id;
}

// nextSequence function
// controls the next sequence given in the simon game
// i.e. when you get it correct, randomly selects another colour and adds to sequence
const nextSequence = () => {
  // to make a random number, we need Math.floor(Math.random())
  // where Math.floor rounds the number down and Math.random() makes a random num between 0 and 1(upperbound)
  // we multiply by 3 and add 1 to ensure only positive numbers above 0
  const randomNumber = Math.floor(Math.random() * 3) + 1
  // we define a random chosen colour by indexing a random value from a defined array of colours, buttonColours
  const randomChosenColour = buttonColours[randomNumber]
  // then to define the sequence of colours, we append it to another array, holding the sequence of colours gamePattern
  gamePattern.push(randomChosenColour)

  // selecting button with same id as randomChosenColour
  const chosenButton = $(`#${randomChosenColour}`);
  // flash animation
  chosenButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // setting sound object to be equal to the sound of the button
  const audioObject = new Audio(`./sounds/${randomChosenColour}.mp3`);
  // play audio
  audioObject.play();

  // detect when button is clicked
  chosenButton.on("click", (event) => {
    clickHandler(event);
  })
}
