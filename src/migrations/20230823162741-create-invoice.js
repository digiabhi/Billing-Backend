'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Enums } = require('../utils/common');
const {GST0,GST5,GST12,GST18,GST28} = Enums.TAX_SLABS;
const {KG,UNITS,PCS,BOX} = Enums.UNIT_TYPES;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceId: {
        type: Sequelize.STRING,
        allowNull:false
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "Clients",
          key: "id",
        },
      },
      invoiceDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      poId: {
        type: Sequelize.STRING
      },
      itemId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
          isNumeric: true
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      description: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.ENUM,
        values:[KG,UNITS,PCS,BOX],
        defaultValue:UNITS,
        allowNull:false,
      },
      tax: {
        type: Sequelize.ENUM,
        values:[GST0,GST5,GST12,GST18,GST28],
        defaultValue:GST18,
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
    await queryInterface.dropTable('Invoices');
  }
};