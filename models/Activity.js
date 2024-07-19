const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Tag' }],

    startTime: { 
        type: Date, 
        required: true },

    endTime: { 
        type: Date },

    duration: { 
        type: Number },

    createdAt: { 
        type: Date, 
        default: Date.now },

    updatedAt: { 
        type: Date,
        default: Date.now },

    completed: {
        type: Boolean,
        default: false
    }
    
    
})

module.exports = mongoose.model('Activity', activitySchema)
