import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS centers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(100),
        state VARCHAR(100),
        pincode VARCHAR(20) NOT NULL,
        location VARCHAR(255),
        is_active BOOLEAN DEFAULT TRUE,
        created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_At DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deleted_At DATETIME DEFAULT NULL
      )
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS centers`);
  },
};