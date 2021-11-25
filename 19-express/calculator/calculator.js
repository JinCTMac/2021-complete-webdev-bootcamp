// taken from https://expressjs.com/en/starter/hello-world.html

// Step 1 - We require the express package
const express = require('express');

// Step 2 - we make a function, App, and bind to it the express package
const app = express();

// Step 3 - we set the port for localhost equal to 3000
const port = 3000;

// Step 4 - a callback function that tells us that our app is listening onto the port we specified, which will show up as a console.log inside of our terminal
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// forms the body of the page - when we access the root URL, /, it will return a response of 'Hello World!', via a get request
// this is what happens when a browser makes a get request
// we can also send back HTML wrapped in quotes instead of just plain text

// Route 1 - the root/homepage
app.get('/', (req, res) => {
  // we need __dirname to send the filepath of the html file
  // before we would send the local filepath
  // but on deployment the filepath will be different, so we need the __dirname (directory name) to give the filepath of the current file NO MATTER WHERE IT IS HOSTED
  // console.log(__dirname)
  // returns the directory in the terminal
  res.sendFile(__dirname + "/index.html")
})

// Route 2 - the POST request handler for the root
app.post('/', (req, res) => {
  res.send("Thanks for posting that!")
})
