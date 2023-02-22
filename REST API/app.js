const express = require('express')
const dotnev= require('dotenv')
dotnev.config()
const app = express()
const studentRoute = require('./api/routes/student')
const userRoute = require('./api/routes/user')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')


mongoose.set('strictQuery', true);
mongoose.connect(process.env.mongo_url)

mongoose.connection.on('error',err=>{
   console.log('Connection failed')
});
mongoose.connection.on('connected',connected=>{
   console.log('Connected with database')
});
app.use(fileUpload({
  useTempFiles:true
}))


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/student',studentRoute)
app.use('/user',userRoute)

app.use((req,res,next)=>{
  res.status(404).json({
    error:'bad request'
  })
})

app.use((req,res,next)=>{
  res.status(200).json({
    message:'app is running'
  })  
})
module.exports = app;