const d = document;
const seriesData=require("./seriesData.js");
const board = d.getElementById("board");
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

 module.exports = renderSeries;