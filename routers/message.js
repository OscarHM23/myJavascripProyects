const express = require('express');
const faker = require('faker');

const router1 = express.Router();

router1.get('/', (req, res) => {
  res.send(
    'Hello my name is Oscar Herrera Mendoza and i am so happy to be here',
  );
});

module.exports = router1;
