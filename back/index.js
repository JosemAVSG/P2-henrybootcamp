const dbConnect = require("./src/db");
const app = require("./src/server");
const PORT = process.env.PORT || 8080;

dbConnect();
app.listen(PORT,()=>{
    console.log("Ejecutandose en el puerto 3000")
})