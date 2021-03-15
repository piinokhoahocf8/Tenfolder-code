var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
require('dotenv').config()

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.get('/', function() {
  res.json({
    message: 'Welcome to SeekFood API.'
  })
})
app.use('/auth', authRoute)
app.use('/user', userRoute)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})