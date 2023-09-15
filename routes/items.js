const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/items')

router.get('/new', itemCtrl.new)


module.exports = router