class Movie {
    constructor(title, director, year,duration,genre,rate,poster) {
        if (!title || !director || !year || !duration || !rate || !poster) {
            throw new Error('Se requieren las propiedades "title", "director" y "year" para crear una película.');
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration=duration;
        this.genre=genre;
        this.rate=rate;
        this.poster=poster;
    }
}


module.exports = Movie;
