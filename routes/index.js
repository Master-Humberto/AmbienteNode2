const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hi</title>
    </head>
    <body>
      <h1>
        Oi
        <span style="color: red">!</span>
        <span style="color: orange">!</span>
        <span style="color: yellow">!</span>
        <span style="color: green">!</span>
        <span style="color: blue">!</span>
      </h1>
    </body>
    </html>
  `);
});

module.exports = router;
