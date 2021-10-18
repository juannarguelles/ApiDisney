const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db');

class User extends Model {}
User.init(
  {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "El nombre solo puede contener letras"
      },
      len: {
        args: [2, 255],
        msg: "El nombre tiene que ser minimamente de dos caracters"
      }
    }
  },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "El email tiene que ser un correo valido"
      }
    }
  },
    password:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 255],
        msg: "La contraseña tiene que tener minimamente 6 caracteres"
      }
    }
  },
  },{
    sequelize,
    timestamps: false,
    tableName: 'users'
  }
);

module.exports = User;