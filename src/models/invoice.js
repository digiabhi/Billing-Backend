'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require("../utils/common");
const {GST0,GST5,GST12,GST18,GST28} = Enums.TAX_SLABS;
const {KG,UNITS,PCS,BOX} = Enums.UNIT_TYPES;
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, {
        foreignKey: "clientId",
        as: 'clientDetail',
      });
    }
  }
  Invoice.init({
    invoiceId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    clientId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    invoiceDate: {
      type:DataTypes.DATE,
      allowNull:false
    },
    dueDate: {
      type:DataTypes.DATE,
      allowNull:false
    },
    poId: {
      type:DataTypes.STRING
    },
    itemId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric: true
      }
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric: true
      }
      },
    description: {
      type:DataTypes.STRING
    },
    unit: {
      type:DataTypes.ENUM,
      values:[KG,UNITS,PCS,BOX],
      defaultValue:UNITS,
      allowNull:false
    },
    tax: {
      type:DataTypes.ENUM,
      values:[GST0,GST5,GST12,GST18,GST28],
      defaultValue:GST12,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};