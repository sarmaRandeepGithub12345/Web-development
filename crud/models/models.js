import mongoose from "mongoose";


//Defining schema or collection-setting restrictions for creating a studentSchema
const studentSchema =new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:100},
    fees:{type:mongoose.Decimal128, required:true,validate: v =>
        v>= 6000.50}
})

//Here 'classmateModel' other name for 'scholars'
const classmateModel = mongoose.model('scholar',studentSchema);

export default classmateModel