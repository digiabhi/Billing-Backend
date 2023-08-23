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
      // this.belongsTo(models.Invoice, {
      //   foreignKey: "invoiceId",
      //   as: 'invoiceDetails',
      // });
      this.hasMany(models.Invoice, {
        foreignKey: "clientId",
      });
    }
  }
  Client.init({
    clientName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    clientAddress: {
      type:DataTypes.STRING,
      allowNull:false
    },
    clientEmail: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true
      }
    },
    contactName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    contactNo: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isNumeric:true,
        len: {
          args: 10,
          msg: "Contact No Must be 10 Digits"
        }
      }
    },
    contactEmail: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true
      }
    },
    clientPan: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isAlphanumeric: true,
        len: {
          args: 10,
          msg: "PAN Must be 10 Digits"
        }
      }
    },
    clientGst: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isAlphanumeric: true,
        len: {
          args: 15,
          msg: "GST Must be 15 Digits"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};