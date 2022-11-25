import mongoose from "mongoose";






const connectdb = async(url)=>{

    try {
        const db ={
            dbName : process.env.dbN
        }
        await mongoose.connect(url,db)
        console.log('Database connected Successfully with express backend')
    } catch (error) {
        console.log(error)
    }


}
export default connectdb