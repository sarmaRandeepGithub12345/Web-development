const express = require('express')
const router = express.Router()
const Student = require('../model/student.js')
const checkAuth = require("../middleware/check-auth")
const cloudinary = require('cloudinary').v2

// Configuration 
cloudinary.config({
    cloud_name: "der99pbsq",
    api_key: "214811345337694",
    api_secret: "4mJ4mx_iEnNgPk_yBLg1Gk85v4E"
  });


router.get('/',checkAuth,async(req,res,next)=>{
   try {
    const result = await Student.find();
    res.status(200).json({users:result})

   } catch (error) {
    res.status(500).json({error:error})
   }
})
router.post('/', (req,res,next)=>{
    const file = req.files.photo
     cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        const {name,email,gender,phone} =req.body
        
        try {
            const student = new Student({
                name,
                email,
                gender,
                phone,
                imagePath: result.url
            })
            const ret = await student.save()
            res.status(200).json({
                newStudent:ret
            })    
        } catch (error) {
            res.status(404).json({error:error})
        }
    }) 
})

router.get('/:id',async(req,res,next)=>{
  
   try {
    //console.log(req.params.id)
    const student = await Student.findById(req.params.id)
    res.status(200).json({user:student})
   } catch (error) {
    res.status(400).json({error:error})
   }
   
})

router.delete('/',async(req,res,next)=>{
  
    try {
     //console.log(req.params.id)
     const imageUrl = req.query.imageUrl;
     const urlArray = imageUrl.split('/')
     const image = urlArray[urlArray.length-1]
     console.log(image)
     const imageName = image.split('.')[0];

     await cloudinary.uploader.destroy(imageName,(error,result)=>{
        console.log(error,result)
     })
     const student = await Student.remove({_id:req.query.id})
     res.status(200).json({user:student,message:'Product Deleted'})
    } catch (error) {
     res.status(400).json({error:error})
    }
    
})
 
router.put('/:id',async(req,res,next)=>{
    try {
        /* console.log(req.params.id)
        console.log(req.body) */
        const result = await Student.findByIdAndUpdate(req.params.id,req.body)
        console.log(result)
        res.status(200).json({user:result})

    } catch (error) {
        res.status(400).json({error:error})
        
    }
})



module.exports =router;