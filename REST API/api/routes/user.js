const express = require('express')
const router = express.Router()
const User = require('../model/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'User route working'
    })
})
router.post('/signup',(req,res,next)=>{
 
    const {username , phone, email,userType } =req.body    
    bcrypt.hash(req.body.password,10,async (err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }else{
          const user = new User({
            username,
            password : hash,
            phone,
            email,
            userType
          })  
          try {
            const result = await user.save()
           
            res.status(200).json({user:result})
          } catch (error) {
            res.status(500).json({error:error})
          }
        }
    })
        
})

router.post('/login',async(req,res,next)=>{
try {
  const {username , password} =req.body
  //console.log(username)
  const user = await User.find({username});
  console.log(user)
  if(user.length<1){
   return res.status(401).json({msg:"User does not exist"})
  }
  
  const isMatch = bcrypt.compare(password,user[0].password)
  if(isMatch){
    const token = jwt.sign({
      username:user[0].username,
      userType:user[0].userType,
      email:user[0].email,
      phone:user[0].phone,
    },process.env.jwt_secret_key,{
      expiresIn:"24h"
    });
    res.status(200).json({
      username:user[0].username,
      userType:user[0].userType,
      email:user[0].email,
      phone:user[0].phone,
      token:token
    })

  }else{
    res.status(400).json({error:"Password does not match"})
  }

} catch (error) {
   res.status(500).json({error:error})
}

})


module.exports =router;