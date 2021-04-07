const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        require: true
    },
    images: [String],

}, {
    timestamps: true
});

module.exports = mongoose.model('post', schema);
