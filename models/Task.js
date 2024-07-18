const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection');

class Task extends Model {};

Task.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    {
    
    },
    {
        
    }
})
