const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)