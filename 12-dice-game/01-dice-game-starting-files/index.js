// create a variable that contains a random number from 1 to 6
// use Math.floor(Math.random())

// const randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber);

// select element and then change its attribute with an event listener on click
// in order to make the number shown be random each time, we need to set the randomNumber const inside of the function so that a new random number is made each time the function is called
const diceOne = document.querySelector(".img1");
diceOne.addEventListener( "click", (event) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  event.currentTarget.setAttribute("src", `./images/dice${randomNumber}.png`)
})

// same thing for second dice

const diceTwo = document.querySelector(".img2");
diceTwo.addEventListener( "click", (event) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  event.currentTarget.setAttribute("src", `./images/dice${randomNumber}.png`)
})
