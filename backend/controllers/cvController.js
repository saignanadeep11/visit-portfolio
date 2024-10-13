const cv = require("../models/cvModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { validateToken } = require("../config/authentication");
const isUerLogin = require("../config/isUserLogin");

exports.createCv = async (req, res) => {
  const userLoginInfo = isUerLogin(req, res);
  if (userLoginInfo) {
    curUser = validateToken(userLoginInfo);
  } else {
    res.status(409).json({ error: "User is not login" });
  }
  const uuid = curUser.uuid;

  const { name, headLine, about, skills, experience, contactInfo } = req.body;
  const newcv = {
    uuid,
    name,
    headLine,
    about,
    skills,
    experience,
    contactInfo,
  };
  try {
    const response = await cv.create(newcv);
    res.status(201).json(response);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

exports.getCv = async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await cv.findOne({ uuid });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
  // const {uuid,name,headline,about,skills,experience,contactInfo}=user;
};

exports.getMyCv = async (req, res) => {
  const userLoginInfo = isUerLogin(req, res);
  let curUser = null;
  if (userLoginInfo) {
    curUser = validateToken(userLoginInfo);
  } else {
    res.status(409).json({ error: "User is not login" });
    return;
  }
  try {
    const uuid = curUser.uuid;
    // const  = `${curUserUuid}`;
    const curUserCv = await cv.findOne({ uuid });
    res.status(200).json(curUserCv);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

exports.deleteMyCv = async (req, res) => {
  const userLoginInfo = isUerLogin(req, res);
  let curUser = null;
  if (userLoginInfo) {
    curUser = validateToken(userLoginInfo);
  } else {
    res.status(409).json({ error: "User is not login" });
  }
  const curUserUuid = curUser.uuid;
  try {
    const curUserCv = await cv.deleteOne({ uuid: curUserUuid });
    res.status(200).json(curUserCv);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

exports.getAdminCv = async (req, res) => {
  try {
    const cvList = await cv.find();
    res.status(200).json(cvList);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
