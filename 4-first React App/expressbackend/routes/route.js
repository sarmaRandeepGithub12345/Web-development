import express from 'express'
import classController from '../controllers/controller.js'

const router=express.Router()


router.get('/student',classController.getAllDoc)


export default router