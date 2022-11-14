import mongoose from "mongoose";


const connectDB =async (DATABASE_URL)=>{
try {
        const DB_OPTIONS = {
            dbName:process.env.DB_Name
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log(`Your database has succesfully been connected`)            
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
