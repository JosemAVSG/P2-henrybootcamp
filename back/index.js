const dbConnect = require("./src/db");
const app = require("./src/server");
const PORT = process.env.PORT || 3000;

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
}).catch((error) => {
    console.log(error);
})