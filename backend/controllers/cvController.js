const cv=require('../models/cvModel')
const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();

exports.createCv=async(req,res)=>{
  const {uuid,name,headLine,about,skills,experience,contactInfo}=req.body;
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
  const curUserUuid=req.body;
  // console.log(curUserUuid)
  try{

    const user=await cv.findOne(curUserUuid);
    res.status(200).json(user)
  }
  catch(err){
    res.status(404).json({error:err.message})
  }
  // const {uuid,name,headline,about,skills,experience,contactInfo}=user;
  
}