import postmanModel from "../models/models.js"

class functcontrol {
    //Done
    static createDoc = async (req, res) => {
        try {

            const doc = new postmanModel(req.body);

            const result = await doc.save()
            res.send(result)

        } catch (error) {
            console.log(error)
        }
    }
    //Done
    static getAllDoc = async (req, res) => {
        try {
            const result = await postmanModel.find();
            console.log(result);
            res.send(result)

        } catch (error) {
            console.log(error)
        }
    }
    //Done
    static getSingleDoc = async (req, res) => {
        try {
            const doc = await postmanModel.findById(req.params.id)
            console.log(doc)
            res.send(doc)

        } catch (error) {
            console.log(error)
        }
    }

    static updateDoc = async (req, res) => {
        try {
const result = await postmanModel.findByIdAndUpdate(req.params.id,req.body)
res.send(result)
console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    static deleteDoc = async (req, res) => {
        try {
            
            const result = await postmanModel.findByIdAndDelete(req.params.id)
            
           res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export default functcontrol