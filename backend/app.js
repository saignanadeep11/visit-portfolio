const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')

const user=require('./routes/userRoute')
const cv=require('./routes/cvRoute')

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/user',user)
app.use('/cv',cv)
app.get('/',(req,res)=>{
  return res.send("hii")
})

module.exports={
  app
}