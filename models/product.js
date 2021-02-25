const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', schema);