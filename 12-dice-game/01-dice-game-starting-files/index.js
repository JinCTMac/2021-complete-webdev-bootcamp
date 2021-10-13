// create a variable that contains a random number from 1 to 6
// use Math.floor(Math.random())

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber);

// select element and then change its attribute with an event listener on click
const diceOne = document.querySelector(".img1");
diceOne.addEventListener( "click", (event) => {
  event.currentTarget.setAttribute("src", `./images/dice${randomNumber}.png`)
})
