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
