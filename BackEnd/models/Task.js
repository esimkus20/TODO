import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskName: String,
});

export default mongoose.model("Task", taskSchema);
