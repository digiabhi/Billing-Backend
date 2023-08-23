'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      clientAddress: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      clientEmail: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isEmail: true
        }
      },
      contactName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      contactNo: {
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
      contactEmail: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isEmail: true
        }
      },
      clientPan: {
        type: Sequelize.STRING,
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