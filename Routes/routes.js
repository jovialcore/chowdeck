const express = require('express')

const router = express.Router()

const Vendor = require('../Model/Vendor')

const MenuItem = require('../Model/MenuItem')


router.get('/vendor', async (req, res) => {
    res.json({ message: 'we have just written our first code in nodejs application' })
})


module.exports = router