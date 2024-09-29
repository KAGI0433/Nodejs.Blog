const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type:String,
        require: true
    },
    createdAt: {
        type: String,
        default: new Date().toString()
    },
   

});

module.exports = mongoose.model('Post', PostSchema);