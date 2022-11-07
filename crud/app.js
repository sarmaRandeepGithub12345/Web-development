import express from 'express'
import {join} from 'path'
import web from "./routes/web.js"
import connectDB from './db/connectdb.js';
const app=express();
const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://localhost:27017"
const port =process.env.PORT || '3000'


//Establish connection with database
connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))


//Static files
app.use("/student",express.static(join(process.cwd(),"public")))

//for enabling bootstrap in edit page
app.use("/student/edit",express.static(join(process.cwd(),"public")))



app.set("view engine","ejs")

//Load routes
app.use("/student",web)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})

