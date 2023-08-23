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
      buyPrice: 78,
      sellPrice: 81,
      tracking:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Folding Board',
      hsn: 154213,
      buyPrice: 80,
        sellPrice: 82,
        tracking:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Duplex Board',
      hsn: 154213,
      buyPrice: 82,
        sellPrice: 84,
        tracking:false,
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
