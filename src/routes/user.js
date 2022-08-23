const express = require('express')
const userSchema = require('../models/user')

const router = express.Router()

//create users
router.post('/users', (req, res) => {
    const user = userSchema(req.body)

    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//get all users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//get a user
router.get('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//update a user
router.put('/users/:id', (req, res) => {
    const {id} = req.params
    const { fullName, login, password, email} = req.body

    userSchema
    .updateOne({ _id: id}, { $set: {fullName, login, password, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// delete a user
router.delete('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema
    .remove( { _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router