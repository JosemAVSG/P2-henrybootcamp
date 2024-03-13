const fetch = require("./fetchAxios");
const axios = require('axios')
const d = document;
const mongo = d.getElementById("mongo");

function openUpdateModal(pelicula) {
  // Lógica para abrir el modal de actualización
  let updateModal = new bootstrap.Modal(document.getElementById('updateModal'));

  updateModal.show();
  d.querySelector('#confirmUpdateBtn').addEventListener('click', function() {
    // Lógica para actualizar la película si el usuario confirma la acción
    const movieId = pelicula._id;

    const updatedMovieData = {
      _id: movieId,
      title: d.querySelector('#title').value,
      year:parseInt(d.getElementById('year').value),
      director: d.querySelector('#director').value,
      duration: d.querySelector('#duration').value,
      genre:d.getElementById('genre').value.split(',').map(name => name.trim()),
      rate:parseFloat(d.getElementById('rate').value),
      poster: d.querySelector('#poster').value
  };
  console.log(updatedMovieData);
    updateMovie(updatedMovieData);
    // Cierra el modal de actualización
    updateModal.hide();})
}

async function updateMovie(pelicula) {
  try {

      const currentMovieDetails = await axios.get(`https://fancy-cummerbund-jay.cyclic.app/moviesDb/${pelicula._id}`);
      console.log(currentMovieDetails);
      const updatedMovieDetails = {
          ...currentMovieDetails.data,
          ...pelicula
      };
        console.log(updatedMovieDetails);
     
      const response = await axios.put(`https://fancy-cummerbund-jay.cyclic.app/moviesDb/${pelicula._id}`, updatedMovieDetails);
      
      console.log(response.data);
  } catch (error) {
      console.error('Error al actualizar la película:', error);
  }
}




async function deleteMovie(movieId) {
  console.log(movieId);
  try {
    const response = await axios.delete(`https://fancy-cummerbund-jay.cyclic.app/moviesDb/${movieId}`)
    
      console.log(response.data);
     
  } catch (error) {
      console.error('Error al eliminar la película:', error);
  }
}

function openDeleteModal(pelicula) {

  // Lógica para abrir un modal de confirmación de eliminación con los detalles de la película
  let deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
  deleteModal.show();
  document.getElementById('movieTitle').innerText = pelicula.title;
  // Agrega un evento de clic al botón de confirmación de eliminación dentro del modal
  document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
    // Lógica para eliminar la película si el usuario confirma la acción
    deleteMovie(pelicula._id);
    // Cierra el modal de confirmación
    deleteModal.hide();
});
}

function openActionModal(pelicula) {
  // Abre el modal de acción
  let actionModal = new bootstrap.Modal(document.getElementById('actionModal'));
  actionModal.show();

  // Agrega un evento de clic al botón de actualizar dentro del modal
  document.getElementById('updateActionBtn').addEventListener('click', function() {
      // Cierra el modal
      actionModal.hide();
      // Llama a la función para abrir el modal de actualización
      openUpdateModal(pelicula);
  });

  // Agrega un evento de clic al botón de eliminar dentro del modal
  document.getElementById('deleteActionBtn').addEventListener('click', function() {
      // Cierra el modal
      actionModal.hide();
      // Llama a la función para abrir el modal de eliminación
      openDeleteModal(pelicula);
  });
}

const renderDataMongo = async () => {

  const data =  await fetch.fetchData("https://fancy-cummerbund-jay.cyclic.app/moviesDb");
 
  data.forEach((pelicula) => {
    let anchor = d.createElement("a");
    anchor.setAttribute("href", "#");
    let card = d.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
              <img src=${pelicula.poster}></>
               <h2>${pelicula.title}</h2>
               <div>
               <p><strong>Director:</strong> ${pelicula.director}</p>
               <p><strong>Año:</strong> ${pelicula.year}</p>
               <p><strong>Rate:</strong> ${pelicula.rate}/10</p>
               <p><strong>Genero:</strong> ${pelicula.genre}</p>
               <p><strong>Duracion:</strong> ${pelicula.duration}</p>
              
               </div>
          `;
    anchor.appendChild(card);
    mongo.appendChild(anchor);
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      openActionModal(pelicula);
  });
  });
};
module.exports = renderDataMongo;