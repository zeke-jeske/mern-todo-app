const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const apiRouter = require('./routes/api')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(cors())

if (process.env.NODE_ENV == 'production') {
  // Serve the React frontend when in production mode
  app.use(express.static(path.join(__dirname, 'client/build')))
} else {
  // Prevent infinite redirecting loops when in development mode
  app.get('/', (req, res) => {
    res.status(404).json({
      message:
        'The development version of this site is being served at localhost:3000',
    })
  })
}

// Database setup
const uri = process.env.DB_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB connection established successfully!')
})

app.use('/api/v1', apiRouter)

// 404
app.get('/*', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log('Server listening on port: ' + port)
})
