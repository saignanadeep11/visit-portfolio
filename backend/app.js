const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const user = require("./routes/userRoute");
const cv = require("./routes/cvRoute");
const ca = require("./config/isUserLogin");
const { validateToken } = require("./config/authentication");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

app.use("/user", user);
app.use("/cv", cv);

module.exports = {
  app,
};
