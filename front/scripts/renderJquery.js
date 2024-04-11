const d=document;
const server = d.getElementById("server")
const renderMoviesAjax = () => {

  $.get("https://students-api.up.railway.app/movies",(data,status)=>{
  console.log(data);
  console.log(status);
  if(status === "success"){
     data.forEach((pelicula) => {

    let anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    let card = document.createElement("div");
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
    server.appendChild(anchor);
  }); 
  }else{
    throw new Error("No se puedieron encontrar los datos")
  }
 })
       };

module.exports = renderMoviesAjax;
