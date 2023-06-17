'use strict';
const {Op} = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Items',[{
      name: 'Cuppa Board',
      hsn: 154213,
      price: 78,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Folding Board',
      hsn: 154213,
      price: 80,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Duplex Board',
      hsn: 154213,
      price: 82,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items',{[Op.or]:[{hsn:154213}]})
  }
};
