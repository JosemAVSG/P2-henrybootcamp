const fetch = require("./fetchAxios");
const d = document;
const mongo = d.getElementById("mongo");

const renderDataMongo = async () => {

  const data =  await fetch.fetchData("https://p2-henrybootcamp-production.up.railway.app/moviesDb");
 
  data.forEach((pelicula) => {
    var anchor = d.createElement("a");
    anchor.setAttribute("href", "#");
    var card = d.createElement("div");
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
  });
};
module.exports = renderDataMongo;