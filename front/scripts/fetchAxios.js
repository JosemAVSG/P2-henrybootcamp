const axios = require("axios");

function fetchDataPromises(url) {
  axios
    .get(url)
    .then((response) => {
      console.log("Respuesta:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error al realizar la petición:", error);
      return error;
    });
}

async function fetchData(url) {
  try {
    const response = await axios.get(url);

    console.log("Respuesta:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al realizar la petición:", error);
    return error;
  }
}

module.exports = {
  fetchData, fetchDataPromises
}