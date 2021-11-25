// taken from https://expressjs.com/en/starter/hello-world.html

// Step 1 - We require the express package
const express = require('express');
const bodyParser = require('body-parser')

// Step 2 - we make a function, App, and bind to it the express package
const app = express();
// setting up bodyparser
app.use(bodyParser.urlencoded({extended: true}));

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

  // we can access the request.body which returns an object/json that we can access properties from
  // these properties are visible in the name attributes inside of the form
  // console.log(req.body.num1)
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sum = 0;

  sum = num1 + num2
  res.send(`Thanks for posting that. The result of this calculation is ${sum}`)
})

// BMI CALCULATOR HTTP REQUESTS


// get request
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

// post request
app.post('/bmicalculator', (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let sum = 0;

  sum = (weight/(height * height))
  res.send(`Your BMI is ${sum}`)
})
