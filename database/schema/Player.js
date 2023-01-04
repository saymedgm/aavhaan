const mongoose = require('mongoose');
import College from './college.js';
const Sport = require("./database/schema/Sports");

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true  
    },
    sports: [
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Sport'
    ], 
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    }, 
});

export.Player = mongoose.model('Player', playerSchema);