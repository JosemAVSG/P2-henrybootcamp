const db= require("mongoose");
require ("dotenv").config();
const dbConnect = async ()=>{
        try {
         await db.connect(process.env.DB_URL);
            console.log('DB is Connected');
        } catch (error) {
            console.log(error);    
            process.exit(1);
        }
}

module.exports = dbConnect;