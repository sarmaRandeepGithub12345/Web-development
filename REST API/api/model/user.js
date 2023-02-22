const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   username:String,
   password:String,
   phone:Number,
   email:String,
   userType:String,
})

module.exports = mongoose.model('user',userSchema)
