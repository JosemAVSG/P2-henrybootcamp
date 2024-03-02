const mongoose = require('mongoose');
const movieSchema = require("../schemas/MovieSchema")

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
