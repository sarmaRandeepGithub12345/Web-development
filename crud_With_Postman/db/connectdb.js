import mongoose from "mongoose";




const connectdb =async (url)=>{
    try {
        const db_details={
            dbName:process.env.dNme
        }
        await mongoose.connect(url,db_details)
        console.log(`Database successfully connected`)   
    } catch (error) {
        console.log(error)
    }
}
export default connectdb
