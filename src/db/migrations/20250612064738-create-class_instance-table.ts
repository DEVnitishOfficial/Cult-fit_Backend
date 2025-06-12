import { QueryInterface } from "sequelize";


export default{
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS class_instances (
        id INT AUTO_INCREMENT PRIMARY KEY,
        class_id INT NOT NULL,
        class_instance_date DATE NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL,
        is_cancelled BOOLEAN DEFAULT FALSE,
        cancellation_reason VARCHAR(255) DEFAULT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deleted_at DATETIME DEFAULT NULL,
        FOREIGN KEY (class_id) REFERENCES GymClasses(id) ON DELETE CASCADE
      )
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS class_instances`);
  },
}