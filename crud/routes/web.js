import express from "express"
import studentController from "../controllers/studentController.js"
const router =express.Router();


router.get("/",studentController.getAllDoc)

//On clicking submit
router.post("/",studentController.createDoc)

//On clicking edit
router.get('/edit/:id',studentController.editDoc)

//update doc
router.post('/update/:id',studentController.updateDocById)

//delete doc
router.post('/delete/:id',studentController.deleteDocById)

export default router