const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('request');
  return res.json({ data:[], success: true });
});

app.listen(3005, () => console.log('server listening on 3005'));