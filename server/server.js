const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({message: 'API works!'})
});

const port = process.env.PORT || 8080; 

app.listen(port, () => console.log(`API running on port ${port}`));