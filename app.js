const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


const Vendor = require('./Model/Vendor')
const MenuItem = require('./Model/MenuItem')
const Customer = require('./Model/Customer')


Vendor.hasMany(MenuItem)
MenuItem.belongsTo(Vendor)

//routes:

const routes = require('./Routes/routes')

app.use('/api', routes)


const sequelize = require('./database')
sequelize.sync({ alter: true }).then(() => {
    console.log('Database has been synchronized')
})
