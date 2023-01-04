import Sport from './Sports.js';
import Team from './Team.js';

const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    sports: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sports'
    }, 
    team: [
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Team'
    ],
    ref: 'Team'
})