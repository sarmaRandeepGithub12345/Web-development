import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectdb from './db/connectdb.js';
import web from './routes/web.js'
const app= express();

const port= process.env.port
const url=process.env.url
connectdb(url)
app.use(express.json());



app.use('/',web)




app.listen(port,()=>{
    console.log(`App listening on port : ${port}`)
})