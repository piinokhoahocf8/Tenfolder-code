const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
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
    category: {
        type: String,
        require: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('post', schema);
