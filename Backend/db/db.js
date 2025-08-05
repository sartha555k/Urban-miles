const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      console.log("ERROR to connect to MongoDb", err);
    });
}

module.exports = connectToDb;
