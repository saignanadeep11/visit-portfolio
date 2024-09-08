const JWT=require('jsonwebtoken')
const secret="IwillAddInEnv";
function createToken(user){
  const payload={
    name:user.name,
    email:user.email,
    uuid:user.uuid,
  }
  const token=JWT.sign(payload,secret)
  return token;
}

function validateToken(token){
  const payload=JWT.verify(token,secret)
  return payload
}

module.exports={
  createToken,
  validateToken,
}