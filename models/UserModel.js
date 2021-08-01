const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
   name: String,
   email: String,
   role: String,
   added: {
       type: Date,
       default: new Date()
   }
  })

  module.exports = mongoose.model("Post", userSchema)