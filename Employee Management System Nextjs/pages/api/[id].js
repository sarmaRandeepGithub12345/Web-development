import connectMongo from "@/database/db";
import userModel from "@/models/models";
export default async function handler(req, res) {
   connectMongo();
   const {
      method,
    } = req;
  const {id}=req.query
    
    
    //console.log(method,id)
    if (method === "PUT") {
        try {
           
           
            const user= await userModel.findByIdAndUpdate(id,req.body) //*/
           res.status(200).json(user) 
        } catch (error) {
           res.status(400).json(error)
        }
     }
     
  if (method === "DELETE") {
    
   try {
   
       const user =await userModel.findByIdAndDelete(id);    
       res.status(200).json(user)
   } catch (error) {
       res.status(400).json(error)
   }
 }
   if(method === 'GET'){
      try {
         const user = await userModel.findById(id);
         res.status(200).json(user)
      } catch (error) {
         res.status(400).json(error)
      }
   }
}