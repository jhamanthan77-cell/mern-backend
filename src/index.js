// require ('dotenv'). config ({path:'./env'})
 import dotenv from "dotenv";
// import mongoose from "mongoose";
//  import {DB_NAME} from "./constants";=
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
});
console.log("MONGODB_URI:", process.env.MONGODB_URI);



connectDB()
.then(()=>{
     app.listen (process.env.port ||8000)
     console.log(`server is running at port :${process.env .PORT}`);
     

})
.catch ((err)=>{
    console.log("mongo db connection failed !!!, err");
    
})
















// import express from "express"
//  const app=express();

// // iife- function immediately execute krdo!!!!!

//  ;( async()=>{ 
//     try {
//        await mongoose.connect(`${ process. env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", ()=>{
//         console.log("ERR", error);
//         throw error;
        
        
//        })
//         app. litsen(process.env.PORT,()=>{
//             console.log(`APP IS LISTENING ON PORT ${
//                 process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR", error);
//          throw err;
        
        
//     }
//  })()

 