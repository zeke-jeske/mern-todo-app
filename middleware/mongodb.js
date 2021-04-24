import mongoose from 'mongoose'

const connectDB = (handler) => async (req, res) => {
  if (!mongoose.connections[0].readyState) {
    // Use new db connection
    console.log('Connecting to database...')
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log('Connected to MongoDB!')
  }

  return handler(req, res)
}

export default connectDB
