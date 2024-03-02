const formulario = require("./formvalidatios");
const renderDataBackend = require("./renderDataBackend");
const renderDataMongo = require("./renderDataMongo");
const renderMoviesAjax = require("./renderJquery");
const  renderMovies = require("./renderMovies");
const renderSeries = require("./renderSeries");
const d = document;
const nav = d.querySelector("#nav");
const abrir = d.querySelector("#abrir");
const cerrar = d.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
  abrir.classList.add("hidden");
  nav.classList.add("visible")
})
cerrar.addEventListener("click",()=>{
  abrir.classList.remove("hidden");
  nav.classList.remove("visible")
})

function buscar() {
  let busqueda = document.getElementById("search").value;
  console.log(busqueda);
}

d.addEventListener("DOMContentLoaded", () => {
  const currentPage = d.body.dataset.page;
  if (currentPage === "movies") {
    renderMovies();
    renderMoviesAjax();
    renderDataBackend();
    renderDataMongo();
  } else if (currentPage === "series") {
    renderSeries();
  }else{
    formulario()
  }
  
});

