const express = require('express');

const app = express();

const data = [];

app.get('/add/:value', (req, res) => {
  const value = req.params.value;
  data.push(value);
  res.send(`Data "${value}" added successfully!`);
});

app.get('/print', (req, res) => {
  res.send(`Data: ${data.join(', ')}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
