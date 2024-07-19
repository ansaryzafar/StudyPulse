
const goalSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    title: { 
        type: String, 
        required: true },
    description: { type: String },
    targetDuration: { 
        type: Number, 
        required: true },
    currentDuration: { 
        type: Number, 
        default: 0 },
    createdAt: { 
        type: Date, 
        default: Date.now },
    updatedAt: { 
        type: Date, 
        default: Date.now }
});

module.exports = mongoose.model('Goal', goalSchema);
