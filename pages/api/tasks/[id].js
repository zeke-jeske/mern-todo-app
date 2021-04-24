import connectDB from 'middleware/mongodb'
import Task from 'models/task.model'
import { isTargetLikeServerless } from 'next/dist/next-server/server/config'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await connectDB()

  try {
    switch (method) {
      case 'PATCH':
        console.log('PATCH request')
        const task = await Task.findByIdAndUpdate(id, req.body)
        res.status(200).json(task)
        break
      case 'DELETE':
        console.log('DELETE request')
        await Task.findByIdAndDelete(id)
        res.status(204).end('Task deleted')
        break
      default:
        res.status(405).end(`Method ${method} not allowed`)
    }
  } catch (err) {
    console.error(err)
    res.status(400)
  }
}
