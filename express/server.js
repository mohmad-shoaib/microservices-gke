const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express! Release - 0.0.1');
});

app.listen(3000, () => console.log('Express app is listening on port 3000'));