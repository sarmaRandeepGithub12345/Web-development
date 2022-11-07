import StudentModel from "../models/Student.js";

class studentController {
    //On clicking submit this function will be run-POST method of the form
    static createDoc = async (req, res) => {
        console.log("Create Doc post method");
        //console.log(req.body)

        try {
            const { name, age, fees } = req.body;
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees,
            });

            //Saving Document
            const result = await doc.save();
            //console.log(result)

            res.redirect("/student");
        } catch (error) {
            console.log(error);
        }
    };

    //to read data from database ,then send the data to index.ejs page to display
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();
            // console.log(result)
            res.render("index", { data: result });
        } catch (error) {
            console.log(error);
        }
        //res.render("index")
    };
    static editDoc = async (req, res) => {
        //console.log(req.params.id)
        
        try {
            const result=await StudentModel.findById(req.params.id);
            console.log(result)
            res.render("edit",{data:result});
        } catch (error) {
            console.log(error)
        }
        
        
    };

    //On clicking 'Update' button on edit.ejs 
    static updateDocById = async(req, res) => {
/* console.log(req.params.id)
console.log(req.body) */
try {
    const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body)
console.log(result)

} catch (error) {
    console.log(error)
}
        res.redirect("/student");
    };




    static deleteDocById =async (req, res) => {
try {
    const result=await StudentModel.findByIdAndDelete(req.params.id)
    res.redirect("/student");
} catch (error) {
    console.log(error)
}
       
    };
}

export default studentController;
