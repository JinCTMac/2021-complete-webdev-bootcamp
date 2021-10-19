// Adding event listeners to buttons

// function that will happen when a button gets clicked on/keyup on

const clickHandler = () => {
  // alert("get clicked!");
  const audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
}


// all buttons

const allButtons = document.querySelectorAll('.drum');

allButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    clickHandler();
  })
})
