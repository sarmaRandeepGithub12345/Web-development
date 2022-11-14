
import mongoose from "mongoose";


const userSchema =  new mongoose.Schema({
    name:{type:String,trim:true,required:true},
    age:{type:Number,required:true,max:100,min:18},
    fees:{type:mongoose.Decimal128,required:true,validate:v=>v>=1000},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true}
})


const userModel = mongoose.model('user',userSchema)

export default userModel





