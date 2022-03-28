const mongoose = require('mongoose');

const JobSchema = mongoose.Schema(
    {
        company: {
            type: String,
            require: [true, 'company is required'],
            minlenght: 3,
            maxlenght: 50,
        },
        position: {
            type: String,
            required: [true, 'position is required'],
            maxlenght: 10,
        },
        status: {
            type: String,
            enum: ['interview', 'declined', 'pending'],
            default: 'pending',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'createdBy is required'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
