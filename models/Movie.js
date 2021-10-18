const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Movie extends Model {}
Movie.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        creation_date: { type: DataTypes.DATE,
            validate:{
                isDate: {
                    args: true,
                    msg: "La fecha no es válida"
                },
            }
        },
        qualification: { 
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    args: true,
                    msg: "La calificación debe ser un número del 1 al 5"
                },
                min: {
                    args: 1,
                    msg: "La calificación debe ser superior o igual a 1"
                },
                max: {
                    args: 5,
                    msg: "La calificación debe ser inferior o igual a 5"
                }
            },
        },
    },{
        sequelize,
        timestamps: false,
        tableName: 'movie'
});

module.exports = Movie;