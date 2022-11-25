import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import router from './routes/route.js'
import connectdb from './db/connectdb.js'
const app= express()

const port = process.env.port

const url = process.env.url
app.use(express.json())
app.use(cors())


app.use('/api',router)
connectdb(url)



app.listen(port,()=>{
    console.log(`App listening on Port : ${port}`)
})





