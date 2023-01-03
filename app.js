const mongoose  = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect("mongodb://localhost:27017/ahvan/sports", {useNewUrlParser: true}).then(() => {
    console.log(`CONNECTED TO MONGO!`);
})
.catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
});

const sportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    [//dtu
        {

        }
    ], 
    [
        {

        }
    ]
})

// const Badminton = mongoose.model("Badminton", sportsSchema);



app.get('/sports/:id', async (req, res) => {
    const { id } = req.params;
    const findSports = await Sports.findById(id);
    res.send(findSports._id)
})

app.listen(3000, () => {
    console.log('Server started');
})