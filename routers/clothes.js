const express = require('express');
const faker = require('faker');
const router = express.Router();

const clothesList = [
  {
    id: 1,
    brandName: 'Pirma',
    fabric: 'algodon',
    genre: 'male',
  },
  {
    id: 2,
    brandName: 'Nike',
    fabric: 'algodon',
    genre: 'male',
  },
  {
    id: 3,
    brandName: 'Puma',
    fabric: 'algodon',
    genre: 'female',
  },
  {
    id: 4,
    brandName: 'Under Armou',
    fabric: 'algodon',
    genre: 'male',
  },
  {
    id: 5,
    brandName: 'CK',
    fabric: 'algodon',
    genre: 'male',
  },
  {
    id: 6,
    brandName: 'Lacoste',
    fabric: 'algodon',
    genre: 'male',
  },
  {
    id: 7,
    brandName: 'HM',
    fabric: 'algodon',
    genre: 'FEMALE',
  },
  {
    id: 8,
    brandName: 'Ferragamo',
    fabric: 'algodon',
    genre: 'male',
  },
  {
    id: 9,
    brandName: 'Matin Armou',
    fabric: 'sport',
    genre: 'male',
  },
  {
    id: 10,
    brandName: 'CK',
    fabric: 'sport',
    genre: 'male',
  },
];

router.get('/', (req, res) => {
  res.json(clothesList);
});

module.exports = router;
