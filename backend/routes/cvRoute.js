const express=require("express")
const router=express.Router();
const {createCv,getCv}=require('../controllers/cvController')

router.post('/api/createCv',createCv)
router.get('/api/getCv',getCv)
module.exports=router;