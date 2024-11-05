const express = require('express'); // Intancia express
const faker = require('faker');

const router1 = express.Router();

const workersList = [
  {
    id: 1,
    name: 'Oscar',
    lastname: 'Gómez',
    age: 30,
    workerH: 40,
    active: true,
  },
  {
    id: 2,
    name: 'Ana',
    lastname: 'Martínez',
    age: 25,
    workerH: 35,
    active: true,
  },
  {
    id: 3,
    name: 'Luis',
    lastname: 'Pérez',
    age: 40,
    workerH: 20,
    active: false,
  },
  {
    id: 4,
    name: 'Pepe',
    lastname: 'Problemas',
    edad: 45,
    numHoras: 20,
    activo: false,
  },
  {
    id: 5,
    nombre: 'Daniel',
    apellido: 'Juarez',
    edad: 30,
    numHoras: 23,
    activo: false,
  },
  {
    id: 6,
    nombre: 'Miguel',
    apellido: 'Pérez',
    age: 30,
    workerH: 10,
    active: true,
  },
  {
    id: 7,
    name: 'Alejandro',
    lastname: 'Munoz',
    age: 230,
    workerH: 23,
    active: false,
  },
  {
    id: 8,
    name: 'Luis',
    lastname: 'pEREZ',
    age: 50,
    workerH: 20,
    active: true,
  },
  {
    id: 9,
    name: 'Josfino',
    lastname: 'lopez',
    age: 230,
    workerH: 23,
    active: false,
  },
  {
    id: 10,
    name: 'Pepe',
    lastname: 'Rodriguez',
    age: 50,
    workerH: 20,
    active: true,
  },
];

router1.get('/', (req, res) => {
  res.json(workersList);
});

router1.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

router1.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router1.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});

module.exports = router1;
