const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/items')

router.get('/new', itemCtrl.new)
router.post('/', itemCtrl.create)
router.get('/', itemCtrl.index)


module.exports = router