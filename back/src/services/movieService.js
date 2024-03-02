const Movie = require("./movies");
const MovieDB = require("../models/movieModel");
const movies = [
  new Movie(
    "Guardians of the Galaxy Vol. 2",
    2017,
    "James Gunn",
    "2h 16min",
    ["Action", "Adventure", "Comedy"],
    7.7,

    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
  ),
  new Movie(
    "Star Wars: Episode IV - A New Hope",
    1977,
    "George Lucas",
    "2h 1min",
    ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    8.7,
    "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  ),
  new Movie(
    "The Lord of the Rings: The Fellowship of the Ring",
    2001,
    "Peter Jackson",
    "2h 58min",
    ["Action", "Adventure", "Drama", "Fantasy"],
    8.8,

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  ),
  new Movie(
    "The Shawshank Redemption",
    1994,
    "Frank Darabont",
    "2h 22min",
    ["Drama"],
    9.3,

    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  ),
  new Movie(
    "Inception",
    2010,
    "Christopher Nolan",
    "2h 28min",
    ["Action", "Adventure", "Sci-Fi", "Thriller"],
    8.8,

    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  ),
  new Movie(
    "The Matrix",
    1999,
    "Lana Wachowski, Lilly Wachowski",
    "2h 16min",
    ["Action", "Sci-Fi"],
    8.7,
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
  ),
];

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
  createMovie
};
