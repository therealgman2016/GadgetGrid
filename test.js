require('dotenv').config();// loads env file
require('./config/database'); // loads database connection

const Box = require('./models/box');
const Item = require('./models/item');

async function createItemAndBox() {
  try {
    // Create an Item document
    const newItem = new Item({
      name: 'Item 1',
      type: 'Type 1',
      dateAdded: new Date(),
      location: 'Location 1',
      // other item properties
    });

    // Save the Item document
    const savedItem = await newItem.save();

    // Create a Box document and copy relevant properties from the Item
    const newBox = new Box({
      name: 'LTS',
      itemProperties: {
        name: savedItem.name,
        type: savedItem.type,
        dateAdded: savedItem.dateAdded,
        location: savedItem.location,
      },
    });

    // Save the Box document
    await newBox.save(); // You can await here to ensure it's saved

    console.log('Box saved with associated Item properties:', newBox);
  } catch (err) {
    console.error(err);
  }
}

createItemAndBox();
