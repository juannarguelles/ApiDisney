const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db')

class Character extends Model {}
Character.init( 
        {   
            Id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            image:{ type: DataTypes.STRING },
            name: { type: DataTypes.STRING },
            age: { 
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        args: true,
                        msg: "La edad debe ser un número"
                    },
                    min: {
                        args: 1,
                        msg: "La edad debe ser superior a 1"
                    },
                }
            },
            weight: { type: DataTypes.FLOAT },
            history: { type: DataTypes.TEXT,  allowNull: false },
        },{ 
            sequelize,
            timestamps: false,
            tableName: 'character' 
        });

module.exports = Character