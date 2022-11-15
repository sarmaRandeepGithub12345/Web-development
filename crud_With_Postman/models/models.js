import mongoose from "mongoose";

const postSchema =new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:10,max:100},
    fees:{type:mongoose.Decimal128, required:true,validate: v =>
        v>= 1000.50}
})

//Here 'classmateModel' other name for 'scholars'
const postmanModel = mongoose.model('test',postSchema);

export default postmanModel



