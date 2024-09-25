const express = require('express')

const router = express.Router()

const vendorController = require('../Controllers/VendorController')



router.get('/vendor', vendorController.listMenuItems);


module.exports = router