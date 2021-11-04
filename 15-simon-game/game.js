
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

// nextSequence function
// controls the next sequence given in the simon game
// i.e. when you get it correct, randomly selects another colour and adds to sequence
const nextSequence = () => {
  // to make a random number, we need Math.floor(Math.random())
  // where Math.floor rounds the number down and Math.random() makes a random num between 0 and 1(upperbound)
  // we multiply by 3 and add 1 to ensure only positive numbers above 0
  const randomNumber = Math.floor(Math.random() * 3) + 1
  const randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
}
