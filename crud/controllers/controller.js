import classmateModel from "../models/models.js";


class Renderer {
    //-------------------------------------------------
    static getAlldoc = async (req, res) => {
        try {
            const result = await classmateModel.find();

            res.render('index', { data: result });
        } catch (error) {
            console.log(error)
        }
    }
    //-------------------------------------------------    
    static createDoc = async (req, res) => {
        const { name, age, fees } = req.body;
        try {
            const stu = new classmateModel({
                name: name,
                age: age,
                fees: fees
            })
            const result = await stu.save()
            console.log(result)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
    }
    //-----------------------------------------------
    static DeleteDoc = async (req, res) => {
        try {
            const result = await classmateModel.findByIdAndDelete(req.params.id)
            console.log(result);
            res.redirect('/student')

        } catch (error) {
            console.log(error)
        }

    }

    //--------------------------------------------------------
    static updateDoc = async (req, res) => {

        try {
            //Getting the required document from database using id from the url http://localhost:3000/student/edit/636cffaccc8ccb56a8d44b71?        
            const result = await classmateModel.findById(req.params.id)
            const obj = {
                name: result.name,
                age: result.age,
                fees: result.fees
            }
            const id=req.params.id
            res.render('edit', 
            { obj ,
              id
            });

        } catch (error) {
            console.log(error)
        }
    }



    static finaliseUpdate = async(req, res) => {
      try {
        const uni=req.params.id;
    
        const result = await classmateModel.findByIdAndUpdate(uni,{name:req.body.name,age:req.body.age,fees:req.body.fees})
        

        res.redirect('/student')

      } catch (error) {
        console.log(error)
      }
      
    }

}


export default Renderer
