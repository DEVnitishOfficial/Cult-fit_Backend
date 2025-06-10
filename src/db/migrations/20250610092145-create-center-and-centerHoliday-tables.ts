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
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt DATETIME DEFAULT NULL
      )
    `);

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS center_holidays (
        id INT AUTO_INCREMENT PRIMARY KEY,
        center_id INT NOT NULL,
        reason VARCHAR(255),
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (center_id) REFERENCES centers(id) ON DELETE CASCADE
      )
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS center_holidays`);
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS centers`);
  },
};
