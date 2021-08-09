const mongoose = require('mongoose');

const streetGameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    gameYear: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('streetGame', streetGameSchema);