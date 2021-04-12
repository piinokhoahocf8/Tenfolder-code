var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
require('dotenv').config()

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const uploadRoute = require('./routes/upload');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');

const app = express()
const port = 3000

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.get('/', function(req, res, next) {
  res.json({
    message: 'Welcome to SeekFood API.'
  })
})
app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/upload', uploadRoute)
app.use('/post', postRoute)
app.use('/comment', commentRoute)

//error handler
app.use(function (err, req, res, next) {
  res.status(500).json({
    error: err.stack
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})