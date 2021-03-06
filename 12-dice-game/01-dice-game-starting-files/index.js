// create a variable that contains a random number from 1 to 6
// use Math.floor(Math.random())

// const randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber);

// select element and then change its attribute with an event listener on click
// in order to make the number shown be random each time, we need to set the randomNumber const inside of the function so that a new random number is made each time the function is called
const diceOne = document.querySelector(".img1");
const diceTwo = document.querySelector(".img2");

diceOne.addEventListener( "click", (event) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  event.currentTarget.setAttribute("src", `./images/dice${randomNumber}.png`)
  diceTwo.setAttribute("src", `./images/dice${randomNumber2}.png`)

  // logic for displaying who wins
  // we select the title element
  // then depending on the random number we change the text
  const title = document.querySelector(".title");

  if (randomNumber > randomNumber2) {
    title.innerHTML = "You Win!!!";
  } else if (randomNumber === randomNumber2) {
    title.innerHTML= "It's a draw!";
  } else {
    title.innerHTML = "CPU Wins!!!";
  }
})

// same thing for second dice

// diceTwo.addEventListener( "click", (event) => {
//   const randomNumber = Math.floor(Math.random() * 6) + 1
//   event.currentTarget.setAttribute("src", `./images/dice${randomNumber}.png`)
// })

// actually, would be better and easier to make dice 2 auto update upon dice one being clicked
