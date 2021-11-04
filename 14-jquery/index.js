// jQuery practice
// shortens code

// this code below is only necessary if we are putting the CDN in the head
// $(document).ready(() => {
//   $("h1").css("color", "red")
// })

const h1Test = $("h1");

// adding style to an element - we use 2 arguments for this.
h1Test.css("color", "red")

// checking the style value of an element
console.log(h1Test.css("color"))
// checking if an element has the class we specify
console.log(h1Test.hasClass("title-test"));

// manipulating text/HTML - note we can affect all elements with the same selector
const button = $("button");
button.text("WOW")
button.html("<em>Click Here</em>")

// manipulating attributes
// sets attribute of href to google
h1Test.attr("href", "https://www.google.com/");
// returns the value of the attribute
console.log(h1Test.attr("href"));

// event listener
h1Test.click(() => {
  h1Test.css("color", "purple")
})

// adding event listener to multiple elements at once
button.click(() => {
  h1Test.css("color", "green")
})

// input field checking for keypress event
const inputField = $(".text-input-field");

// inputField.keypress((event) => {
//   console.log(event.currentTarget.value)
//   h1Test.text(`${event.key}`)
// })

// == to
inputField.on("keyup", () => {
  h1Test.text(`${event.key}`)
});

h1Test.before("<button>New</button>")
h1Test.after("<button>Old</button>")
h1Test.prepend("<strong>WOW</strong>")
h1Test.prepend("<em>AMAZING</em>")
// h1Test.remove()
