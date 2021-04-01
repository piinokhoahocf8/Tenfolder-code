const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
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
    images: [
        String
    ],
    // likes: [{type:ObjectId,ref:'User'}],
    // comment: [{
    //     type: String,
    //     postedBy:{type:ObjectId,ref:'User'}
    // }],
    // postedBy:{
    //     type:ObjectId,
    //     ref:'User'
    // },
    timestamps: true
});

module.exports = mongoose.model('post', schema);
