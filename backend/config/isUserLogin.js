const isUerLogin = (req, res) => {
  if (req.cookies.token) {
    return req.cookies.token;
  } else {
    return false;
  }
};
module.exports = isUerLogin;
