const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/ahvan/sports", {
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
