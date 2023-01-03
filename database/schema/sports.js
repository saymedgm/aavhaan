const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = sportsSchema