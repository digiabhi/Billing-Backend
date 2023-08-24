'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Enums } = require('../utils/common');
const {KG,UNITS,PCS,BOX} = Enums.UNIT_TYPES;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      hsn: {
        type: Sequelize.STRING,
        allowNull:false
      },
      buyPrice: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
          isNumeric: true
        }
      },
      sellPrice: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
          isNumeric: true
        }
      },
      totalQuantity: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
          isNumeric: true
        }
      },
      unit: {
        type: Sequelize.ENUM,
        values:[KG,UNITS,PCS,BOX],
        defaultValue:UNITS,
        allowNull:false,
      },
      tracking: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};