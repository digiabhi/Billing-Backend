'use strict';
const { Enums } = require('../utils/common');
const {KG,UNITS,PCS,BOX} = Enums.UNIT_TYPES;
/** @type {import('sequelize-cli').Migration} */
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
      unit: {
        type: Sequelize.ENUM,
        values:[KG,UNITS,PCS,BOX],
        defaultValue:UNITS,
        allowNull:false,
      },
      tracking: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
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