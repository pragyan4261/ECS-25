<<<<<<< HEAD
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/database.js";

dotenv.config({
    path:"./.env"
})

const PORT=process.env.PORT || 3000

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Up & Running on Port ${PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed",err)
=======
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/database.js";

dotenv.config({
    path:"./.env"
})

const PORT=process.env.PORT || 3000

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Up & Running on Port ${PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed",err)
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
})