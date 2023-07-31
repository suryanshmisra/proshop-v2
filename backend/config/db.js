import mongoose from 'mongoose'

const connectDB= async ()=>{
    try {
        console.log("mongo uri",process.env.MONGO_URI,{ useNewUrlParser: true })
     const conn=await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true })
     console.log("mongo uri",process.env.MONGO_URI)
     console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(error){
      console.log(`Error: ${error.message}`)
      process.exit(1)
    }
} 

export default connectDB