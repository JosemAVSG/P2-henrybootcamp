import tempData from "./tempData.js";
import seriesData from "./seriesData.js"
const d = document;
const board = d.getElementById("board");
console.log(tempData);
function buscar() {
  let busqueda = document.getElementById("search").value;
  console.log(busqueda);
}

const renderMovies = () => {
  tempData.forEach((pelicula) => {
    // Crear una tarjeta para cada película
    var card = document.createElement("div");
    card.classList.add("card");
    // Construir el contenido de la tarjeta con los datos de la película
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

    // Agregar la tarjeta al contenedor
    board.appendChild(card);
  });
};
const renderSeries = () => {
    seriesData.forEach((serie) => {
      // Crear una tarjeta para cada película
      var card = document.createElement("div");
      card.classList.add("card");
      // Construir el contenido de la tarjeta con los datos de la película
      card.innerHTML = `
              <img src=${serie.poster}></>
               <h2>${serie.title}</h2>
               <div>
               <p><strong>Director:</strong> ${serie.director}</p>
               <p><strong>Año:</strong> ${serie.year}</p>
               <p><strong>Rate:</strong> ${serie.rate}/10</p>
               <p><strong>Genero:</strong> ${serie.genre}</p>
               <p><strong>Duracion:</strong> ${serie.duration}</p>
               </div>
          `;
      // Agregar la tarjeta al contenedor
      board.appendChild(card);
    });
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    const currentPage = d.body.dataset.page;

    if (currentPage === "movies") {
        renderMovies();
    } else if (currentPage === "series") {
        renderSeries();
    }
});


