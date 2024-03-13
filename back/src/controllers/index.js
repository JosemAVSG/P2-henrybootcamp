const movieService = require("../services/movieService");
const getMovies = (req, res) => {
  const movies = movieService.getAllMovies();
  res.json(movies);
};

const getMoviesDb = async (req, res) => {
  const movies = await movieService.getAllMoviesDb();
  res.json(movies);
};
const createMovieDB = async (req, res) => {
  try {
    const newMovie = await movieService.createMovie(req);
    res
      .status(201)
      .json({ message: "Película creada exitosamente", movie: newMovie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteMovieDb = async (req, res) => {

  try {
    const deletedMovie = await movieService.deleteMovie(req);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovieDb = async (req, res) => {

  try {
    const update = await movieService.updateMovie(req);
    if (!update) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieDb= async (req, res) => {
  try {
      const movie = await movieService.getMovie(req)
      if (movie) {
          res.json(movie);
      } else {
          res.status(404).json({ message: 'Película no encontrada' });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = { getMovies, getMoviesDb, createMovieDB,deleteMovieDb,updateMovieDb,getMovieDb };
