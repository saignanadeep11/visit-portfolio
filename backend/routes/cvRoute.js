const express = require("express");
const router = express.Router();
const {
  createCv,
  getCv,
  getMyCv,
  deleteMyCv,
  getAdminCv,
} = require("../controllers/cvController");

router.post("/api/createCv", createCv);
router.get("/api/getCv/:uuid", getCv);
router.get("/api/getMyCv", getMyCv);
router.delete("/api/deleteCv", deleteMyCv);

router.get("/api/getAdmin", getAdminCv);
module.exports = router;
