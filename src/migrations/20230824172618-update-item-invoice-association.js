'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Invoices", {
      type: "foreign key",
      fields: ["itemId"],
      name: "item_fkey_constraint",
      references: {
        table: "Items",
        field: "id",
      },
      constraints:false,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Invoices", "item_fkey_constraint");
  }
};
