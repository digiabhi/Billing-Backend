'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendor.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    address: {
      type:DataTypes.STRING,
      allowNull:false
    },
    vendor_email: {
      type: DataTypes.STRING,
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
        len: {
          args: 10,
          msg: "Contact No Must be 10 Digits"
        }
      }
    },
    contact_email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    pan: {
      type:DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        len: {
          args: 10,
          msg: "PAN Must be 10 Digits"
        }
      }
    },
    gst: {
      type:DataTypes.STRING,
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
    modelName: 'Vendor',
  });
  return Vendor;
};