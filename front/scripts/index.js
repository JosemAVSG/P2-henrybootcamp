import tempData from "./tempData.js";
import seriesData from "./seriesData.js";
const d = document;
const board = d.getElementById("board");
console.log(tempData);
function buscar() {
  let busqueda = document.getElementById("search").value;
  console.log(busqueda);
}

// const renderMoviesAjax = () => {
//   $.get("https://students-api.2.us-1.fl0.io/movies",(data,status)=>{
//   console.log(data);
//   console.log(status);
//   if(status === "success"){
//      data.forEach((pelicula) => {

//     var anchor = document.createElement("a");
//     anchor.setAttribute("href", "#");
//     var card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//             <img src=${pelicula.poster}></>
//              <h2>${pelicula.title}</h2>
//              <div>
//              <p><strong>Director:</strong> ${pelicula.director}</p>
//              <p><strong>Año:</strong> ${pelicula.year}</p>
//              <p><strong>Rate:</strong> ${pelicula.rate}/10</p>
//              <p><strong>Genero:</strong> ${pelicula.genre}</p>
//              <p><strong>Duracion:</strong> ${pelicula.duration}</p>
//              </div>
//         `;
//     anchor.appendChild(card);
//     board.appendChild(anchor);
//   }); 
//   }else{
//     throw new Error("No se puedieron encontrar los datos")
//   }
//  })
//        };

const renderMovies = () => {
  tempData.forEach((pelicula) => {
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    var card = document.createElement("div");
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
    board.appendChild(anchor);
  });
};
const renderSeries = () => {
  seriesData.forEach((serie) => {
    // Crear una tarjeta para cada película

    var anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
              <img src=${serie.poster}/>
               <h2>${serie.title}</h2>
               <div>
               <p><strong>Director:</strong> ${serie.creator}</p>
               <p><strong>Año:</strong> ${serie.year}</p>
               <p><strong>Rate:</strong> ${serie.rate}/10</p>
               <p><strong>Genero:</strong> ${serie.genre}</p>
               <p><strong>Duracion:</strong> ${serie.duration}</p>
               </div>  
          `;
    // Agregar la tarjeta al contenedor
    anchor.appendChild(card);
    board.appendChild(anchor);
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
