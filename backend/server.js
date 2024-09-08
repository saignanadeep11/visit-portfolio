const express=require('express')
const {app}=require('./app')
const {connect}=require('./config/connection')

connect("mongodb://127.0.0.1:27017/visitMyCv")
// const add =require('./tes')
// add()
const server=app.listen(8000,()=>{
  console.log("server running at 8000")
})
