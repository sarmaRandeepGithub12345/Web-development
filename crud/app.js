import express from 'express'
import router from './routes/web.js'
import {join} from 'path'
import connectDB from './db/connectDB.js';
import createDoc from './models/models.js'
const app=express();

const port =process.env.PORT || '3000'

//rendering static files
app.use('/student',express.static(join(process.cwd(),'public')))
app.use('/student/edit',express.static(join(process.cwd(),'public')))



//Middleware to parse req.body data
app.use(express.urlencoded({extended:false}));


//Setting up template engine
app.set('view engine','ejs')

//Setting up router
app.use('/student',router)

//Connecting Database
const DATABASE_URL= process.env.DATABASE_URL || 'mongodb://localhost:27017'
connectDB(DATABASE_URL)



app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})
