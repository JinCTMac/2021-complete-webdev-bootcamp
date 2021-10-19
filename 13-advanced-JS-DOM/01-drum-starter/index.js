// Adding event listeners to buttons

// function that will happen when a button gets clicked on/keyup on

const clickHandler = () => {
  // alert("get clicked!");
  // const audio = new Audio("./sounds/tom-1.mp3");
  // audio.play();
  // we need to use the this keyword to refer to the specific button being clicked
  // for some reason, cannot access this keyword in this function
  // likely because it doesn't pass on the data for this to the function
}

// allButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     clickHandler();
//   })
// })

// 1. Eventlistener for buttons

const allButtons = document.querySelectorAll('.drum');

// console.log(this) only works with an old fashioned function for some reason
allButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // console.log(this);
    // this.style.color = "white";

    const buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      default: console.log(key);
    }
  })
});
