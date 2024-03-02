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

module.exports = { getMovies, getMoviesDb, createMovieDB };
