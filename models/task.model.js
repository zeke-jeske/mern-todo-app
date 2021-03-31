const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  description: { type: String, default: '' },
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
