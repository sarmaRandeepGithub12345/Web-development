import connectMongo from "@/database/db";
import userModel from "@/models/models";
export default async function handler(req, res) {
    connectMongo();
    const { method } = req;
  
  if (method === "GET") {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  if (method === "POST") {
    try {
      const { name, email, salary, status,avatar ,date} = req.body;
      
      console.log(name)
      const user = await userModel.create({
        avatar,
        name,
        email,
        salary,
        date,
        status,
      });
      res.status(200).json({ user: user });
    } catch (error) {
      res.status(400).json(error);
    }
  }
 
}
