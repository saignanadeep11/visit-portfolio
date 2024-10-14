const { user } = require("../models/userModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { createHmac } = require("crypto");
const { createToken, validateToken } = require("../config/authentication");
const isUserLogin = require("../config/isUserLogin");
const sendVerificationEmail = require("../config/sendVerification");

// const fs=require('fs')
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new user({ name, email, password });
  // console.log(req.cookies.token)
  try {
    await newUser.save();
    const tokenUser = await user.findOne({ email });
    const token = createToken(tokenUser);

    // console.log(req)
    // fs.appendFileSync
    res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
        domain: process.env.FRONTEND_URL,
        sameSite: "Lax",
        path: "/",
      })
      .json({ success: true, newUser });
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.verifyUser = async (req, res) => {
  const { email, password } = req.body;
  const curUser = await user.findOne({ email });
  if (!curUser) {
    return res.status(409).json({ error: "User Not Found" });
  }
  const curHashPassword = createHmac("sha256", curUser.salt)
    .update(password)
    .digest("hex");
  if (curUser.password != curHashPassword) {
    return res.status(200).json({ error: "Wrong Password" });
  }
  const CurToken = {
    name: `${curUser.name}`,
    email: `${curUser.email}`,
    uuid: `${curUser.uuid}`,
  };
  const token = createToken(CurToken);
  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      domain: process.env.FRONTEND_URL,
      sameSite: "Lax",
      path: "/",
    })
    .json({ success: true, return: "User login Successful" });
};

exports.isUserLog = async (req, res) => {
  const userTok = await isUserLogin(req, res);
  const curUser = validateToken(userTok);
  const st = `${curUser}`;
  if (st) {
    return res.status(200).json(curUser);
  } else {
    return res.status(401);
  }
  return res.json(user);
};

exports.userLogOut = async (req, res) => {
  if (req.cookies.token) {
    return res
      .cookie("token", "", {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
        domain: process.env.FRONTEND_URL,
        sameSite: "Lax",
        path: "/",
      })
      .status(204)
      .json({ status: "User sucessfully log" });
  } else {
    return res.status(409).json({ status: "no User found" });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = validateToken(token);
    if (!decoded) {
      return res.status(401).json({ status: "Invalid Token" });
    }
    const cUser = await user.findOne({ email: decoded.email });
    if (!cUser.email) {
      return res
        .status(400)
        .json({ status: "Invalid token or user not found" });
    }
    await user.updateOne(
      { email: cUser.email },
      { $set: { isMailVerified: true } }
    );
    // cUser.isMailVerified = true;
    // await cUser.save();

    return res.status(200).json({ status: "Email verified successfully" });
  } catch {
    return res.status(400).json({ status: "Invalid or expired token" });
  }
};

exports.sendVerifyEmail = async (req, res) => {
  try {
    const userTok = await isUserLogin(req, res);
    const curUser = validateToken(userTok);
    const cur = await user.findOne({ email: curUser.email });
    if (cur.isMailVerified) {
      return res.status(200).json({ status: "Mail Verified" });
    }
    await sendVerificationEmail(curUser);

    return res.status(200).json({ status: "email send" });
  } catch (err) {
    return res.status(409).json({ error: "Invalid or expired token", err });
  }
};

exports.isMailVerified = async (req, res) => {
  try {
    const userTok = await isUserLogin(req, res);
    const cur = validateToken(userTok);
    const curUser = await user.findOne({ email: cur.email });
    if (curUser.isMailVerified) {
      return res.status(200).json({ status: "Mail Verified" });
    } else {
      return res.status(201).json({ error: "Mail Not Verified", err });
    }
  } catch (err) {
    return res.status(201).json({ error: "Mail Not Verified", err });
  }
};

exports.getAdminUser = async (req, res) => {
  try {
    const allUsers = await user.find();

    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(401).json({ error: err });
  }
};
