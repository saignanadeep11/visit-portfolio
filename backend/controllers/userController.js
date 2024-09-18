const {user}=require('../models/userModel')
const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();
const {createHmac,}=require('crypto');
const { createToken } = require('../config/authentication');
// const fs=require('fs')
exports.createUser= async(req,res)=>{
  
  const {name,email,password}=req.body;
  const newUser=new user({name,email,password})
  // console.log(req.cookies.token)
  try{
      await newUser.save();
      const tokenUser=await user.findOne({email})
      const token=createToken(tokenUser)
      
      // console.log(req)
      // fs.appendFileSync
      res.status(201).cookie("token",token).json({success:true,newUser})
  }
  catch(err){
    res.status(401).json(err)
  }
}


exports.verifyUser=async(req,res)=>{
  const {email,password}=req.body;
  const curUser=await user.findOne({email})
  console.log(curUser)
  if(!curUser){
    return res.status(409).json({erorr:"User Not Found"})
  }
  const curHashPassword=createHmac('sha256',curUser.salt).update(password).digest('hex');
  if(curUser.password!=curHashPassword){
    return res.status(200).json({error:"Wrong Password"})
  }
  const token=createToken(user)
  return res.cookie("token",token).json({success:true,"return":"User login Successful"})
}
