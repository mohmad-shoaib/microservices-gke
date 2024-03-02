const express = require('express');

const app = express();
var request = require('request');

app.get('/', (req, res) => {
  res.send('Welcome to Express! Release - 0.0.2');
});

app.get('/multiply/:number1/:number2', async (req, res) => {
  // console.log(process.env.FLASK_SERVICE_HOST);
  const baseUrl = process.env.FLASK_SERVICE_HOST != undefined ? process.env.FLASK_SERVICE_HOST : `http://localhost`;
  const response = await fetch(`${baseUrl}:3100/multiple/${req.params.number1}/${req.params.number2}`);
  const output = await response.json();
  res.send(`Result: ${output.result}`);
});


app.listen(3000, () => console.log('Express app is listening on port 3000'));