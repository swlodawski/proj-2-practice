const {Model, DataTypes} = require('sequelize')
// 
const sequelize = require('../config/connection');
// I am connecting the environmental variables file to be able to connect to my database and create the model tables.
class Task extends Model {};
// 
Task.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // I am setting the structure and keys of my tables so the relationship asmong tables can be established.
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true
    },
    // I am creating a table row that will accept a string for a name, allow increments to the next line and prevent the user from not entering a value.
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true  
    },
    // I am creating a table row that will accept a descripton for a name, allow increments to the next line and prevent the user from not entering a value.
    status: {   
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true
    }
        },
        // I am creating a table row that will accept a string for a status, allow increments to the next line and prevent the user from not entering a value.
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'task'
        // I am setting rules for my table that will prevent the table name from changing, allow underscores instead of dashesd and name the sequelize object 'task.'
});

module.exports = Task;
// I am exporting the sequelize task object to be used elsewhere in my application.
