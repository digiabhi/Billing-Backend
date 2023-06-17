'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      vendor_email: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isEmail: true
        }
      },
      contact_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      contact_no: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isNumeric:true,
          min: 10,
          max: 10
        }
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isEmail: true
        }
      },
      pan: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
          min: 10,
          max: 10
        }
      },
      gst: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
          min: 15,
          max: 15
        }
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
    await queryInterface.dropTable('Clients');
  }
};