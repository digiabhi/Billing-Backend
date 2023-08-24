'use strict';
const {
  Model
} = require('sequelize');
const { Enums } = require('../utils/common');
const {KG,UNITS,PCS,BOX} = Enums.UNIT_TYPES;
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Invoice, {
        foreignKey: "itemId"
      });
    }
  }
  Item.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    hsn: {
      type:DataTypes.STRING,
      allowNull:false
    },
    buyPrice: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric: true
      }
    },
    sellPrice: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric: true
      }
    },
    totalQuantity: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric: true
      }
    },
    unit: {
      type:DataTypes.ENUM,
      values:[KG,UNITS,PCS,BOX],
      defaultValue:UNITS,
      allowNull:false
    },
    tracking: {
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};