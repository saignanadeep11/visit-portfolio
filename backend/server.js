const express = require("express");
const { app } = require("./app");
const { connect } = require("./config/connection");

connect(process.env.MONGO_URL);
// const add =require('./tes')
// add()
const server = app.listen(process.env.PORT, () => {
  console.log(`server running at ${process.env.PORT}`);
});
