const JWT = require("jsonwebtoken");
function createToken(user) {
  const payload = {
    name: user.name,
    email: user.email,
    uuid: user.uuid,
  };
  const token = JWT.sign(payload, process.env.JWT_SECRET);
  return token;
}

function validateToken(token) {
  const payload = false;
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    console.log(`error ${err}`);
    return;
  }
  return payload;
}

module.exports = {
  createToken,
  validateToken,
};
