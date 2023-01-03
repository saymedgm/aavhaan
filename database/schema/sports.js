const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

exports.Sport = mongoose.model("Sport", sportsSchema) 