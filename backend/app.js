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

const path = require("path");
// const { fileURLToPath } = require("url");
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(__dirname, __filename);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

app.use("/user", user);
app.use("/cv", cv);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
setInterval(() => {
  console.log("Running at port ", process.env.PORT);
}, 5000);
module.exports = {
  app,
};
