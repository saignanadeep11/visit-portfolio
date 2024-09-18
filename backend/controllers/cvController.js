const cv=require('../models/cvModel')
const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();
const { validateToken } = require('../config/authentication');
const isUerLogin = require('../config/isUserLogin');


exports.createCv=async(req,res)=>{
  const userLoginInfo=isUerLogin(req,res);
  if(userLoginInfo){
    curUser=validateToken(userLoginInfo)
  }
  else{
    res.status(409).json({error:"User is not login"})
  }
  const uuid=curUser.uuid;
  const {name,headLine,about,skills,experience,contactInfo}=req.body;
  const newcv=new cv({uuid,name,headLine,about,skills,experience,contactInfo})
  try{
    await newcv.save();
    res.status(201).json(newcv)
  }
  catch(err){
    res.status(409).json({error:err.message})
  }
}

exports.getCv=async(req,res)=>{
  const userLoginInfo=isUerLogin(req,res);
  if(userLoginInfo){
    curUser=validateToken(userLoginInfo)
  }
  else{
    res.status(409).json({error:"User is not login"})
  }
  const uuid=curUser.uuid;
  try{
    const user=await cv.findOne({uuid});
    res.status(200).json(user)
  }
  catch(err){
    res.status(404).json({error:err.message})
  }
  // const {uuid,name,headline,about,skills,experience,contactInfo}=user;
  
}