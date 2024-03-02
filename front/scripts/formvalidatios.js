const axios = require('axios');

function formulario() {
    const form = document.getElementById('movieForm');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');

    clearBtn.addEventListener('click', function() {
        form.reset();
    });

    submitBtn.addEventListener('click', async(e)=> {
        e.preventDefault;
        const title = document.getElementById('title').value;
        const director = document.getElementById('director').value;
        const year = parseInt(document.getElementById('year').value);
        const genre = document.getElementById('genre').value.split(',').map(name => name.trim());
        const rate = parseFloat(document.getElementById('rate').value);
        const duration = document.getElementById('duration').value;
        const poster = document.getElementById('poster').value;
     
        
        if (title && director && year && genre && rate && duration && poster ) {  
            
            try {
                console.log('Enviando datos al servidor...');
                const response = await axios.post('https://p2-henrybootcamp-production.up.railway.app/moviesDb', {
                    title,
                    year,
                    director,
                    duration,
                    genre,
                    rate,
                    poster
                });
                console.log('Película creada exitosamente:', response.data.movie);
                form.reset();
            } catch (error) {
                console.error('Error al crear la película:', error.response.data);
            }
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
};
module.exports=formulario;