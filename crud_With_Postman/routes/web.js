import express from 'express';
import functcontrol from '../controllers/controller.js';
const router =express.Router()


router.post('/',functcontrol.createDoc)
router.get('/',functcontrol.getAllDoc)

router.get('/:id',functcontrol.getSingleDoc)



router.put('/:id',functcontrol.updateDoc)

router.delete('/:id',functcontrol.deleteDoc)

export default router

