const mongoose = require("mongoose");
const Sport = require("./schema/Sports.js");

exports.connectMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/ahvan", {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
      console.log(`OH NO! MONGO CONNECTION ERROR!`);
      console.log(err);
    });
};