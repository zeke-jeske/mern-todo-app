import connectDB from 'middleware/mongodb'
import Task from 'models/task.model'

async function handler(req, res) {
  const {
    body: { name, completed },
    method,
  } = req

  try {
    switch (method) {
      case 'GET':
        console.log('GET request')
        const tasks = await Task.find()
        res.status(200).json(tasks)
        break
      case 'POST':
        console.log('POST request')
        const task = await Task.create(req.body)
        res.status(201).json(task)
        break
      default:
        res.status(405).end(`Method ${method} not allowed`)
    }
  } catch (err) {
    console.error(err)
    res.status(400)
  }
}

export default connectDB(handler)
