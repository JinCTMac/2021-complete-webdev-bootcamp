// taken from https://expressjs.com/en/starter/hello-world.html

// Step 1 - We require the express package
const express = require('express');

// Step 2 - we make a function, App, and bind to it the express package
const app = express();

// Step 3 - we set the port for localhost equal to 3000
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
