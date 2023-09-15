const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    type: String,
    location: String,
    dateAdded: String

}, {
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)