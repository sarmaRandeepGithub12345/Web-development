import express from 'express'
import userController from '../controllers/controller.js'
const router = express.Router()




router.get('/registration',userController.getRegistration)

router.get('/login',userController.getLogin)
router.get('/home',userController.getHome)


router.post('/login',userController.postLogin)
router.post('/registration',userController.postRegistration)


export default router



