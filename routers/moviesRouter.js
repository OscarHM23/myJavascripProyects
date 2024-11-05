const express = require('express');

const router = express.Router();

let movies = [
  { id: 1, title: 'La trampa', year: 2024, category: 'Suspenso' },
  { id: 2, title: 'Inception', year: 2010, category: 'Sci-Fi' },
  { id: 3, title: 'El conjuro 2', year: 2016, category: 'Terror' },
  { id: 4, title: 'Juego de Gemelas', year: 1998, category: 'Comedia' },
  { id: 5, title: 'Interstellar', year: 2014, category: 'Sci-Fi' },
  { id: 6, title: 'Coraline', year: 2009, category: 'Stop Motion' },
  { id: 7, title: 'Transformers', year: 2009, category: 'Sci-Fi' },
  { id: 8, title: 'El castillo vagabundo', year: 2006, category: 'Romance' },
  { id: 9, title: 'LalaLand', year: 2016, category: 'Terror' },
  { id: 10, title: 'Camino hacia el terror', year: 2003, category: 'Terror' },
];

//Obtener todas las peliculas
router.get('/', (req, res) => {
  res.json(movies);
});

//Obtener pelicula por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find((m) => m.id == id); //Buscar que los id coincidan
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie Not Found' });
  }
});

//Crear una pelicula
router.post('/', (req, res) => {
  const { title, year, category } = req.body;
  const newMovie = {
    id: movies.length + 1,
    title,
    year,
    category,
  };
  movies.push(newMovie);
  res.status(201).json({
    message: 'Movie Created',
    data: newMovie,
  });
});

//Actualizar una pelicula por ID
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { title, year, category } = req.body;
  const movie = movies.find((m) => m.id == id); //Buscar que los id coincidan

  if (movie) {
    if (title) movie.title = title;
    if (year) movie.year = year;
    if (category) movie.category = category;
    res.json({
      message: 'updated',
      data: movie,
    });
  } else {
    res.status(404).json({ message: 'Movie not Found AbrahamGPT' });
  }
});

//Eliminar
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((m) => m.id == id);
  if (movieIndex !== -1) {
    movies.splice(movieIndex, 1);
    res.json({
      message: 'Movie Deleted',
      id,
    });
  } else {
    res.status(404).json({ message: 'Movie not Found' });
  }
});

module.exports = router;
