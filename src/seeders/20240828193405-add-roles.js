'use strict';

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
    await queryInterface.bulkInsert('Roles',[
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'airline_staff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'agent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'system_manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'booking_agent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'flight_staff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'customer_representative',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'customer_service_representative',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'service_representative',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'service_staff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'service_manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'service_admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'service_agent',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
