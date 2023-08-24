'use strict';

const {Op} = require("sequelize");
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

    await queryInterface.bulkInsert('Clients',[{
      clientName: 'Sriman Traders LLP',
      clientAddress: 'Uttam Nagar,Delhi',
      clientEmail: 'srimantradersllp@gmail.com',
      contactName: 'Abhinav',
      contactNo:'9999999998',
      contactEmail: 'abhinav.kaunwara@gmail.com',
      clientPan: 'IYMPS6460J',
      clientGst: '07AWGHSAIOMFNSH',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        clientName: 'FrameKode LLP',
        clientAddress: 'Bahadurgarh, Haryana',
        clientEmail: 'framekode@gmail.com',
        contactName: 'Sai Sir',
        contactNo:'9999999998',
        contactEmail: 'sai.abhishek@gmail.com',
        clientPan: 'TYSUI8154I',
        clientGst: '06TIAHSAIOMFNSH',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientName: 'DMLOT Infotech Pvt. Ltd.',
        clientAddress: 'Nangloi,Delhi',
        clientEmail: 'dmlot@gmail.com',
        contactName: 'Anurag Bamal',
        contactNo:'9999999998',
        contactEmail: 'exemployeeabhinav@gmail.com',
        clientPan: 'DMLOT6460C',
        clientGst: '07AWGHSOURSHBVH',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientName: 'Fiblib Digital Networks',
        clientAddress: 'Rajdhani Park,Delhi',
        clientEmail: 'fiblib@gmail.com',
        contactName: 'Buntee Jee',
        contactNo:'9999999998',
        contactEmail: 'yebhiabhinav@gmail.com',
        clientPan: 'FIBLI9851C',
        clientGst: '07AYSHNKIYDKLSP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Clients',{[Op.or]:[{contactNo:'9999999998'}]})
  }
};
