const tempData = require("./tempData.js");
const d=document;
const board = d.getElementById("board");

const renderMovies = () => {
    tempData.forEach((pelicula) => {
      let anchor = document.createElement("a");
      anchor.setAttribute("href", "#");
      let card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
              <img alt="${pelicula.title}" src=${pelicula.poster}></>
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
      board.appendChild(anchor);
    });
  };

module.exports = renderMovies;