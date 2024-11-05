const express = require('express');
const router = express.Router();
const faker = require('faker');

//Instancia de la clase
const categoriesService = require('../services/categoriesService');
const service = new categoriesService();

//Ver todo
router.get('/', (req, res) => {
  const categories = service.getAll(); //Instancia del metodo get all en la intancia en service
  res.status(200).json(categories);
});

//Buscar por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.getById(id);
  res.status(200).json(category);
});

//Crear categoria
router.post('/', (req, res) => {
  const body = req.body;
  const newCat = service.create(body);
  res.status(201).json(newCat);
});

//Actualizar una categoria
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.status(200).json(category);
});

//Eliminar Product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const answer = service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
