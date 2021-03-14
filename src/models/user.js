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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', schema);


