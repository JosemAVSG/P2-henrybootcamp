const {Router} = require("express");
const { getMovies, getMoviesDb, createMovieDB, deleteMovieDb, updateMovieDb, getMovieDb} = require("../controllers/index");
const validateSchema = require("../middlewares/validator.middleware");
const validateMovie = require("../middlewares/validatorMovie.middleware");
const zodMovieSchema = require("../schemas/zodmovieSchema");
const router = Router();

router.get("/movies", getMovies)
router.get("/moviesDb", getMoviesDb)
router.get("/moviesDb/:id",getMovieDb)
router.post("/moviesDb",validateSchema(zodMovieSchema),validateMovie,createMovieDB)
router.delete("/moviesDb/:id",deleteMovieDb)
router.put("/moviesDb/:id",validateMovie, updateMovieDb)
module.exports = router;