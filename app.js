const express = require('express');
const app = express();
const { connectMongoose } = require('./database/connection')
const sportsSchema = require("./database/schema/sports");

connectMongoose();

// const Badminton = mongoose.model("Badminton", sportsSchema);

app.get('/sports/:id', async (req, res) => {
    const { id } = req.params;
    const findSports = await Sports.findById(id);
    res.send(findSports._id)
})

app.listen(3000, () => {
    console.log('Server started');
})