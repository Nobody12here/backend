const mongoose = require("mongoose");
const { AssignmentModel } = require("../model/Assignment");

async function addAssignment(req, res) {
    const subject = req.body.subject;
    const deadline = req.body.deadline;
    try {
        const newAssignment = new AssignmentModel({
            assignmentName: subject,
            deadline: deadline,
            completed: false
        })
        const savedAssignment = await newAssignment.save();
        res.status(201).json(savedAssignment);
    }
    catch (error) {
        console.log("Error = ", error);
        res.status(401).json({ Error: error })
    }
}
async function viewAll(req, res) {
    try {
        const assignments = await AssignmentModel.find({});
        if (assignments) {
            console.log(assignments);
            res.status(201).json( assignments )
        }
        else {
            console.log("No assignments present")
            res.status(404).json({ Error: "No assignments present" })
        }
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ Error: error })
    }
}
async function removeAssignment(req, res) {
    const assignmentId = req.params.id;
    console.log(assignmentId)
    try {
        const removedAssignment = await AssignmentModel.findByIdAndDelete(assignmentId)
        if (removedAssignment) {
            res.status(200).json(removedAssignment);
        }
        else {
            res.status(404).json({ Error: "Assignment not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ Error: error });
    }
}

async function updateAssignment(req, res) {
    const assignmentId = req.params.id;
    const { subject, deadline, completed } = req.body;
    try {
        const updatedAssignment = await AssignmentModel.findByIdAndUpdate(
            assignmentId,
            { assignmentName: subject, deadline: deadline, completed: completed },
            { new: true }
        );
        if (updatedAssignment) {
            res.status(200).json(updatedAssignment);
        }
        else {
            res.status(404).json({ Error: "Assignment not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ Error: error });
    }
}

module.exports = { addAssignment,viewAll,removeAssignment,updateAssignment };


