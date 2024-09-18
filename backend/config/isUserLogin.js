
const isUerLogin=(req,res)=>{

  // console.log(req.cookies.token)
  if(req.cookies.token){
    return req.cookies.token;
  }
  else{
    return false
  }
}
module.exports=isUerLogin;