const Item = require('../models/item')

function newItem(req, res, next) {
    res.render('items/new', { errorMsg: ''})

}

async function create(req, res) {
    try {
        await Item.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the items index after we implement it
        res.redirect('/items');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('items/new', { errorMsg: err.message });
      }
}


async function index(req, res) {
    const items = await Item.find({});
    res.render('items/index', { items });
  }


module.exports = {
    new: newItem,
    create,
    index
}