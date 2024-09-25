const vendor = require('../Model/Vendor')
const menuItem = require('../Model/MenuItem')


class VendorController {

    async listMenuItems(req, res) {

        try {
            const menuItems = await menuItem.findAll({
                where: { VendorId: req.vendor.id }
            })

            res.json(menuItems)
        } catch (error) {
            res.status(500).json({ message: "Error fetching  menu items " })

        }
    }


}

module.exports = new VendorController()