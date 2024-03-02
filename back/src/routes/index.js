const {Router} = require("express");
const { getMovies, getMoviesDb, createMovieDB} = require("../controllers/index");
const validateSchema = require("../middlewares/validator.middleware");
const validateMovie = require("../middlewares/validatorMovie.middleware");
const zodMovieSchema = require("../schemas/zodmovieSchema");
const router = Router();

router.get("/movies", getMovies)
router.get("/moviesDb", getMoviesDb)
router.post("/moviesDb",validateSchema(zodMovieSchema),validateMovie,createMovieDB)

module.exports = router;