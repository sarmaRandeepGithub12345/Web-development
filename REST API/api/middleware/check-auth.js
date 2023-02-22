const jwt = require('jsonwebtoken')

const checkAuth=(req,res,next)=>{
  try {
   const token = req.headers.authorization.split(" ")[1];
   //console.log(token) 
   const verify =jwt.verify(token,process.env.jwt_secret_key)
   if(verify){
   next()
   }
  } catch (error) {
    return res.status(400).json({msg:"token did not match"})
  }
}
module.exports =checkAuth