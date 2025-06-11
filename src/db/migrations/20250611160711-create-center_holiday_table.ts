
import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS center_holidays (
        id INT AUTO_INCREMENT PRIMARY KEY,
        center_id INT NOT NULL,
        reason VARCHAR(255),
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_At DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (center_id) REFERENCES centers(id) ON DELETE CASCADE
      )
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS center_holidays`);
  },
};
