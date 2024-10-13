const db = require("mongoose");

const connect = async (url) => {
  try {
    await db
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log("Connection with db was established"))
      .catch((err) => {
        console.log("db error", err);
      });
  } catch (error) {
    console.log("db error", error);
  }
};

module.exports = {
  connect,
};
