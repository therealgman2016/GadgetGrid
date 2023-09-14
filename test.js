const Box = require('./models/box')
const Item = require('./models/item')

// create an Item document
const newItem = new Item({
    name: 'hdmi',
    type: 'hdmi',
    dateAdded: '09/14/23',
    location: 'LTS'
})

// save the Item document
newItem.save((err, savedItem) => {
    if (err) {
        console.error(err)
    } else {
        // create Box document and copy relavent info from Item
        const newBox = new Box({
            name: 'LTS',
            itemProperties: {
                name: savedItem.name,
                type: savedItem.type,
                dateAdded: savedItem.dateAdded,
                location: savedItem.location
            }
        })
    }

    // save the Box
    newBox.save((err, savedBox) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Box saved with assositated Item properties', savedBox)
        }
    })
})

