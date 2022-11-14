import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './db/connectDB.js'
import web from './routes/web.js'
import {join} from 'path'
const app = express()

const port = process.env.port
const DATABASE_URL= process.env.DATABASE_URL

//Static Middleware
app.use('/',express.static(join(process.cwd(),'public')))
app.use(express.urlencoded({extended:false}));

//Setting up template engine
app.set('view engine','ejs')

//connecting with database by sending database url
connectDB(DATABASE_URL)

app.use('/',web)

app.listen(port,()=>{
    console.log(`App listening on port : ${port}`)
})

