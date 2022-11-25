
import StudentModel from "../models/models.js"
class classController {

static getAllDoc=async (req,res)=>{

    try {
      const result =await StudentModel.find()
      console.log(result)
      res.send(result)
    } catch (error) {
        console.log(error)
    }
}



}
export default classController