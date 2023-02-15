const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
