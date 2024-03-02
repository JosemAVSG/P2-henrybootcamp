function validateMovieData(req, res, next) {
    const { title,year, director,duration, genre,rate, poster, } = req.body;

    if (!title || !director || !year || !genre || !rate || !poster || !duration) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    
    if (isNaN(year) || year.toString().length !== 4) {
        return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos' });
    }
    next();
}

module.exports = validateMovieData;
