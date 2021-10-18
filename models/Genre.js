const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db');

class Genre extends Model {}
Genre.init(
    {
        name: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING }
    },{
        sequelize,
        timestamps: false,
        tableName: 'genre'
});

module.exports = Genre