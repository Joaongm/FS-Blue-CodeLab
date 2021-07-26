const mongoose, { Schema, Model } = require('mongoose');

const streetGameSchema = new Schema({
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

module.exports = Model('streetGame', streetGameSchema);