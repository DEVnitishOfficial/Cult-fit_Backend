import { QueryInterface } from "sequelize";

export default {
  async up(queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS waitlists (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        class_instance_id INT NOT NULL,
        position INT NOT NULL,
        status ENUM('waiting','promoted','cancelled') NOT NULL DEFAULT 'waiting',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deleted_at DATETIME DEFAULT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (class_instance_id) REFERENCES class_instances(id) ON DELETE CASCADE
      )
    `);
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS waitlists
    `);
  }
}
