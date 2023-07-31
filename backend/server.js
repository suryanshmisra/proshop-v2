import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
dotenv.config()

import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

connectDB() //Connect to MongoDB

const app=express();

app.get("/",(req,res)=>{
    res.send("API is Running")
})



app.use("/api/products",productRoutes)
app.use(errorHandler);
app.use(notFound);

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server running on port ${port}`))
