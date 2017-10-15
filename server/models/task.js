const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');

taskSchema = new Schema({
    task_name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    note: {
        type: String,
        required: false
    },
    responsible_user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);