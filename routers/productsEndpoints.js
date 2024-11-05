const express = require('express');
const router = express.Router();
const faker = require('faker');

//Instancia de la clase
const productsService = require('../services/productsService');
const service = new productsService();

//Ver todo
router.get('/', (req, res) => {
  const products = service.getAll(); //Instancia del metodo get all en la intancia en service
  res.status(200).json(products);
});

//Buscar por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.getById(id);
  res.status(200).json(product);
});

//Crear Products
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

//Actualizar un producto
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json(product);
});

//Eliminar Product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const answer = service.delete(id);
  res.status(200).json(answer);
});

module.exports = router;
