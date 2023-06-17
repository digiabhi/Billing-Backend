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
      client_email: {
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
          len: {
            args: 10,
            msg: "Contact No Must be 10 Digits"
          }
        }
      },
      contact_email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      pan: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
          len: {
            args: 10,
            msg: "PAN Must be 10 Digits"
          }
        }
      },
      gst: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
          len: {
            args: 15,
            msg: "GST Must be 15 Digits"
          }
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