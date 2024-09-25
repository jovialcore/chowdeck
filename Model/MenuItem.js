const {DataTypes} = require('sequelize')

const sequelize = require('../database')

const MenuItem = sequelize.define('MenuItem',  {
    name : {
        type: DataTypes.STRING,
        allowNull : false
    },

    description: {
        type : DataTypes.TEXT,
    },
    price : {
        type : DataTypes.DECIMAL(10,2),
        allowNull : false,
    
    }
})

module.exports = MenuItem