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

mongoose.connect('mongodb://localhost:27017/food-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use('/auth', authRoute)
app.use('/user', userRoute)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})