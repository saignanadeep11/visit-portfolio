const express=require('express')
const {createUser,verifyUser}=require('../controllers/userController')

const router=express.Router();

router.post('/api/SignUp',createUser);
 
router.post('/api/login',verifyUser)
module.exports=router
