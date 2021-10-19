// JS code for drum kit

// const clickHandler = () => {
//   // alert("get clicked!");
//   // const audio = new Audio("./sounds/tom-1.mp3");
//   // audio.play();
//   // we need to use the this keyword to refer to the specific key being clicked
//   // for some reason, cannot access this keyword in this function
//   // likely because it doesn't pass on the data for this to the function
// }

const keyCheck = (key) => {
    switch (key) {
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
}

// animation that occurs when key is pressed

const buttonAnimation = (key) => {
  const pressedKey = document.querySelector(`.${key}`)
  pressedKey.classList.add("pressed");

  // we can add a delay to remove the class via setTimeout
  setTimeout(function() {
    pressedKey.classList.remove("pressed");
  }, 100);
}

// Eventlisteners

const allKeys = document.querySelectorAll('.drum');

// console.log(this) only works with an old fashioned function for some reason
allKeys.forEach((key) => {
  // for clicks
  key.addEventListener('click', function(event) {
    // console.log(this);
    const key = this.innerHTML;
    keyCheck(key);
    buttonAnimation(key);

  })

  // for keyups
  key.addEventListener('keyup', function(event) {
    const key = this.innerHTML;
    // we need to use event.key, so that it searches for the keyup event
    // because the event object has a key property, which tells us which key was pressed
    // if we just used key instead of event.key, it would respond to all key presses of any key
    keyCheck(event.key)
    buttonAnimation(event.key);
  })
});
