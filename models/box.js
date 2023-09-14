const mongoose = require('mongoose')
const Schema = mongoose.Schema


const boxSchema = new Schema({
    label: String,
    itemProperites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Box', boxSchema)
