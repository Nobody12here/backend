const mongoose = require('mongoose');
const AssignmentSchema = new mongoose.Schema({
    assignmentName: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    completed: {
        type: Boolean,
    },
})

const AssignmentModel = mongoose.model('Assignment', AssignmentSchema);


module.exports = {AssignmentModel};