const {user}=require('../models/userModel')
const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();
const {createHmac,}=require('crypto');
const { createToken } = require('../config/authentication');

exports.createUser= async(req,res)=>{
  const {name,email,password}=req.body;
  const newUser=new user({name,email,password})
  try{
      await newUser.save();
      res.status(201).json(newUser)
  }
  catch(err){
    res.status(409).json({error:err.message})
  }
}

exports.verifyUser=async(req,res)=>{
  const {email,password}=req.body;
  const curUser=await user.findOne({email})
  if(!curUser){
    return 
  }
  const curHashPassword=createHmac('sha256',curUser.salt).update(password).digest('hex');
  if(user.password!=curHashPassword){
    return res.status()
  }
  const token=createToken(user)
  return res.cookie("token",token).redirect('/')
}
