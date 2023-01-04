const mongoose = require("mongoose");


const teamPlayerSchema = new mongoose.Schema({
    name: String, 
    email: String,
    phone: String,
    qualified: Boolean,
    sports: String,
});
exports.teamPlayer = mongoose.model("teamPlayer", collageSchema);