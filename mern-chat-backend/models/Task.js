const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
    },
    isImportant:{
        type: Boolean,
        default: false
    },
    deadline:{
        type: Date,
    }, 
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
