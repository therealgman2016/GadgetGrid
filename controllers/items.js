function newItem(req, res, next) {
    res.render('items/new', {
        errorMsg: ''
    })
}



module.exports = {
    new: newItem
}