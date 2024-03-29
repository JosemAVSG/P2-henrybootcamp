const fetch = require("./fetchAxios");
const d = document;
const backend = d.getElementById("backend");

const renderDataBackend = async() => {
 
        const data = await fetch.fetchData("https://fancy-cummerbund-jay.cyclic.app/movies");

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
    backend.appendChild(anchor);
  });


};

module.exports= renderDataBackend;