import mongoose from "mongoose";

//Defining Schema 
const studentSchema=new mongoose.Schema({
    name:{type:String, required:true, trim:true}/*trim is used to cut any space that is given in between for no reason by client}*/,
age:{type:Number, required:true, min:18, max:60},
fees:{type:mongoose.Decimal128, required:true, validate:(v)=>{
    v>=5000.5
}}

})

//Model - Compiling Schema
const StudentModel = mongoose.model("student",studentSchema)


export default StudentModel
