const axios = require('axios');

function formulario() {
    const form = document.getElementById('movieForm');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');
    const message = document.getElementById('mensaje');
    clearBtn.addEventListener('click', function() {
        form.reset();
        message.style.visibility="hidden";
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
                const response = await axios.post('https://fancy-cummerbund-jay.cyclic.app/moviesDb', {
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
                setTimeout(()=>{
                    message.innerHTML=`<p>Pelicula Creada Exitosamente</p>`;
                    message.style. background="rgb(55, 138, 55)";
                    message.style.visibility="visible";
                },2000)
            } catch (error) {
                console.error('Error al crear la película:', error.response.data);
                setTimeout(()=>{
                    message.innerHTML=`<p>Eror Al Crear la Pelicula</p>`;
                    message.style.backgroundColor="rgb(148, 37, 37)";
                    message.style.visibility="visible";
                },2000)
            }
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
};
module.exports=formulario;