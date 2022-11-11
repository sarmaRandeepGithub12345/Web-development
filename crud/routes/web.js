import express from "express";
import Renderer from "../controllers/controller.js";
const router=express.Router();

/*done*/
router.get('/',Renderer.getAlldoc);

/*done*/
router.post('/',Renderer.createDoc)//Clicking Submit

/*done */
router.post('/delete/:id',Renderer.DeleteDoc)

/*done */
router.get('/edit/:id',Renderer.updateDoc)//get /student/edit

router.post('/update/:id',Renderer.finaliseUpdate)




export default router