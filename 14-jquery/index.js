// jQuery practice
// shortens code

// this code below is only necessary if we are putting the CDN in the head
// $(document).ready(() => {
//   $("h1").css("color", "red")
// })

const h1Test = $("h1");

// adding style to an element
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
