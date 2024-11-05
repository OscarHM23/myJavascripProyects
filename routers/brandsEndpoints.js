const express = require('express');
const router = express.Router();
const faker = require('faker');

//Instancia de la clase
const brandsService = require('../services/brandsService');
const service = new brandsService();

//Ver todo
router.get('/', (req, res) => {
  const brands = service.getAll(); //Instancia del metodo get all en la intancia en service
  res.status(200).json(brands);
});

//Buscar por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const brand = service.getById(id);
  res.status(200).json(brand);
});

//Crear Products
router.post('/', (req, res) => {
  const body = req.body;
  const newBrand = service.create(body);
  res.status(201).json(newBrand);
});

//Actualizar un producto
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const brand = service.update(id, body);
  res.status(200).json(brand);
});

//Eliminar Product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const answer = service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
