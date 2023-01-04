const mongoose = require('mongoose');

const captainSchema = new Schema({
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

export.Captain = mongoose.model('Captain', captainSchema);