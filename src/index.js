import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: "/env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on POrt ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Error while connecting the DB!!!",error);
})