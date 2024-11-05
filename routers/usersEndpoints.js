const express = require('express');
const router = express.Router();
const faker = require('faker');

//Instancia de la clase
const usersService = require('../services/usersService');
const service = new usersService();

//Ver todo
router.get('/', (req, res) => {
  const users = service.getAll(); //Instancia del metodo get all en la intancia en service
  res.status(200).json(users);
});

//Buscar por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.getById(id);
  res.status(200).json(user);
});

//Crear Products
router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

//Actualizar un producto
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.status(200).json(user);
});

//Eliminar Product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const answer = service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
