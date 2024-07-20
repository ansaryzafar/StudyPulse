const mongoose = require('mongoose')
const sessionSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },

    activities: [{
        type: Schema.Types.ObjectId, 
        ref: 'Activity' }],

    startTime: { 
        type: Date, 
        required: true },
    endTime: { type: Date },
    duration: { type: Number },
    createdAt: { 
        type: Date, 
        default: Date.now },
    updatedAt: { 
        type: Date, 
        default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
