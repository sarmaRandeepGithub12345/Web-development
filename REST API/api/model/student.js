const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
   name:String,
   email:String,
   phone:Number,
   gender:String,
   imagePath:String
})

module.exports = mongoose.model('Student',studentSchema)
