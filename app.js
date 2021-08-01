const express = require('express')
const app = express()

require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/express_app', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to Database')
})

app.set('view engine', 'ejs')

const userRouter = require('./routes/UserRouter')
app.use('/', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))