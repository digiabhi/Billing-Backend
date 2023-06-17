'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    address: {
      type:DataTypes.STRING,
      allowNull:false
    },
    client_email: {
      type: DataTypes.String,
      allowNull:false,
      validate: {
        isEmail: true
      }
    },
    contact_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    contact_no: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isNumeric:true,
        min: 10,
        max: 10
      }
    },
    contact_email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true
      }
    },
    pan: {
      type:DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        min: 10,
        max: 10
      }
    },
    gst: {
      type:DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        min: 15,
        max: 15
      }
    }
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};