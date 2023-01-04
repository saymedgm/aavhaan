import Player from './Player.js';
import Captain from './Captain.js';
import College from './college.js';
const mongoose = require('mongoose');

const teamSchema = new Schema({
    collegeName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    }
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
    }, 
    players: {
        type: [
            mongoose.Schema.Types.ObjectId
        ], 
        ref: 'Player', 
    }, 

})

module.export = mongoose.model('Team', teamSchema);