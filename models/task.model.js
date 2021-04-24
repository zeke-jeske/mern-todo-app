import mongoose from 'mongoose'
const Schema = mongoose.Schema

const taskSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  description: { type: String, default: '' },
  dueDate: {
    year: Number,
    month: Number,
    day: Number,
  },
})

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)

module.exports = Task
