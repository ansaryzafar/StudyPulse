const mongoose = require('mongoose')
const tagSchema = new Schema({
    name: { 
        type: String, 
        required: true },
    color: { type: String }
});

module.exports = mongoose.model('Tag', tagSchema);
