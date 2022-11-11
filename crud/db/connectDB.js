import mongoose from "mongoose";


//Connecting MongoDB to express using mongoose
const connectDB =async (DATABASE_URL)=>{
    try {
const DB_OPTIONS={
    
    dbName:'project',
   
}

        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log('Successfully connected')
    } catch (err) {
        console.log(err)
    }
}
export default connectDB



