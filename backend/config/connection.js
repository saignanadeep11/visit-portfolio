const db=require('mongoose')

const connect=(url)=>{db.connect(url).then(
  ()=>console.log("Connection with db was established")
).catch((err)=>{console.log("db error",err)})}

/*,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
}*/
module.exports={
  connect
}