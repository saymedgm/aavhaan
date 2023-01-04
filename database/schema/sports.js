const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
    sportsName: {
        type: String,
        required: true,
    },
})
exports.Sport = mongoose.model("Sport", sportsSchema) 

Sport.create({
    sportsName: "Football", 
    sportsName: "Cricket", 
})