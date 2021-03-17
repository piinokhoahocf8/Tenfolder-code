const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    resetLink:{
        data: String,
        default: ''
    },
    dayOfBirth:{
        data: Date,
        require: true
    },
    address:{
        data: String,
        require: true
    },
    gender:{
        data: String,
        require: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('User', schema);


