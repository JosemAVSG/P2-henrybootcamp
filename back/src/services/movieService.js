const Movie = require("./movies");
const MovieDB = require("../models/movieModel");
const movies = [
  new Movie(
    "Guardians of the Galaxy Vol. 2",
    "James Gunn",
    2017,
    "2h 16min",
    ["Action", "Adventure", "Comedy"],
    7.7,

    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
  ),
  new Movie(
    "Star Wars: Episode IV - A New Hope",
    "George Lucas",
    1977,
    "2h 1min",
    ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    8.7,
    "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  ),
  new Movie(
    "The Lord of the Rings: The Fellowship of the Ring",
    "Peter Jackson",
    2001,
    "2h 58min",
    ["Action", "Adventure", "Drama", "Fantasy"],
    8.8,

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  ),
  new Movie(
    "The Shawshank Redemption",
    "Frank Darabont",
    1994,
    "2h 22min",
    ["Drama"],
    9.3,

    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  ),
  new Movie(
    "Inception",
    "Christopher Nolan",
    2010,
    "2h 28min",
    ["Action", "Adventure", "Sci-Fi", "Thriller"],
    8.8,

    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  ),
  new Movie(
    "The Matrix",
    "Lana Wachowski, Lilly Wachowski",
    1999,
    "2h 16min",
    ["Action", "Sci-Fi"],
    8.7,
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
  ),
];

const getMovie= async (req, res) => {
  try {
      const movie = await MovieDB.findById(req.params.id);
    return movie;
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await MovieDB.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(updatedMovie);
  } catch (error) {
    return error
  }
};


const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await MovieDB.findByIdAndDelete(req.params.id);
    return deletedMovie
  } catch (error) {
    return error
  }
};
const createMovie = async (req) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const newMovie = new MovieDB({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });

  try {
    const savedMovie = await newMovie.save();
    return savedMovie;
  } catch (error) {
    return error;
  }
};

const getAllMoviesDb = async () => {
  try {
    const movies = await MovieDB.find();
    return movies;
  } catch (error) {
    return error;
  }
};
const getAllMovies = () => {
  return movies;
};

module.exports = {
  getAllMovies,
  getAllMoviesDb,
  createMovie,
  deleteMovie,
  updateMovie,
  getMovie
};
