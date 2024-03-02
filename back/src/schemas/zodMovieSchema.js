const z = require("zod");

const zodMovieSchema = z.object({
    title: z.string(),
    year: z.number(),
    director: z.string(),
    duration: z.string(),
    genre: z.array(z.string()),
    rate: z.number().positive(), 
    poster: z.string(),
})

module.exports = zodMovieSchema