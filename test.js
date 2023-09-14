// BROKE

require('dotenv').config();// loads env file
require('./config/database'); // loads database connection

const Box = require('./models/box');
const Item = require('./models/item');

async function createItemAndBox() {
  try {
    

    // Create a Box document and copy relevant properties from the Item
    const newBox = new Box({
      name: 'LTS',
      },
    );

    // Save the Box document
    await newBox.save(); // You can await here to ensure it's saved

    // Create an Item document
    const newItem = ({
        name: 'Item 2',
        type: 'Type 1',
        dateAdded: new Date(),
        location: 'Location 1',
        // other item properties
    })

    newBox.itemProperties.push(newItem)

    await newBox.save()

    console.log('Box saved with associated Item properties:', newBox);
  } catch (err) {
    console.error(err);
  }
}

createItemAndBox();
