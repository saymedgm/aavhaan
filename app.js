import Player from './database/schema/Player.js';
const express = require('express');
const app = express();
const { connectMongoose } = require('./database/connection')
const Sport = require("./database/schema/Sports");


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


createPlayer();
    async function createPlayer() {
        try{
            const playerReg = await Player.create({
                name: "Divanshu",
                email: "div@gmail.com",
                phone: "123456789",
                
              })
              console.log(playerReg);
        } catch(e){
      console.log(e.message);
    }
}