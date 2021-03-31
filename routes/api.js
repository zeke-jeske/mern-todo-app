const router = require('express').Router()
const Task = require('../models/task.model')

// Handle GET requests to retrieve all the tasks
router.route('/').get((req, res) => {
  console.log('GET request received')
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// Handle POST requests to create a new task
router.route('/').post((req, res) => {
  console.log('POST request received:', req.body)

  const { name, completed } = req.body
  const newTask = new Task({ name, completed })

  newTask
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(400).json({ error: err })
    })
})

// Handle PATCH requests to modify tasks
router.route('/:taskId').patch((req, res) => {
  console.log('PATCH request recieved:', req.body)
  const { name, completed } = req.body
  const _id = req.params.taskId
  Task.updateOne(
    { _id },
    {
      $set: req.body,
    },
    (err, task) => {
      if (err) {
        console.log(err)
        res.status(400).json({ error: err })
      } else {
        console.log('Task updated successfully')
        res.status(200).json('Task updated')
      }
    },
  )
})

// Handle DELETE requests to delete tasks
router.route('/:taskId').delete((req, res) => {
  const _id = req.params.taskId
  console.log('DELETE request recieved for task:', _id)
  Task.deleteOne({ _id }, (err) => {
    if (err) {
      console.log(err)
      res.status(400).json({ error: err })
    } else {
      console.log('Task deleted succesfully')
      res.status(200).json('Task deleted')
    }
  })
})

module.exports = router
