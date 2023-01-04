import Player from './Player.js';
import College from './college.js';
const mongoose = require('mongoose');

const teamSchema = new Schema({
    collegeName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    }
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }, 
    players: {
        type: [
            mongoose.Schema.Types.ObjectId
        ], 
        ref: 'Player', 
    }, 

})

module.export = mongoose.model('Team', teamSchema);