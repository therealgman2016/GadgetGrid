const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = require('./item')

const boxSchema = new Schema({
    label: String,
    itemProperties: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Box', boxSchema)
