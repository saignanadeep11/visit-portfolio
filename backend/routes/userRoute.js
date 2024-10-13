const express = require("express");
const {
  createUser,
  verifyUser,
  isUserLog,
  userLogOut,
  verifyEmail,
  sendVerifyEmail,
  isMailVerified,
  getAdminUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/api/SignUp", createUser);

router.post("/api/login", verifyUser);

router.get("/api/isUser", isUserLog);

router.post("/api/logOut", userLogOut);

router.get("/api/verifyEmail/:token", verifyEmail);

router.post("/api/sendEmail", sendVerifyEmail);

router.get("/api/isMailVerified", isMailVerified);
router.get("/api/getAdminUser", getAdminUser);
module.exports = router;
