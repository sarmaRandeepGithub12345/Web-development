import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    avatar:{type:String,required:true},
    name :{type:String, required: true },
    email:{type:String, required: true },
    salary:{type:String, required: true },
    date:{type:Date, required: true },
    status:{type:String, required: true}
},{timestamps:true})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel