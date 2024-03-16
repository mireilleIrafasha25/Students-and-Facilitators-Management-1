import express from "express";
import mongoose from "mongoose";
import route from "./routes/studentroutes.js";
import facilitatorroute from "./routes/facilitator.js";
const app=express();
app.use(express.json()) // Middleware for parsing json bodies
app.use(route) // connecting student route 
app.use(facilitatorroute) // connecting  facilitator route
const port=6000
mongoose.connect("mongodb://localhost:27017/studentfacilitator")
app.listen(port,()=>
{
    console.log(`server running on port ${port}`)
});