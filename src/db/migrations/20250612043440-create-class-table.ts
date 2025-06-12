import { QueryInterface } from "sequelize";


export default{
    async up(queryInterface:QueryInterface){
        await queryInterface.sequelize.query(`
          CREATE TABLE IF NOT EXISTS GymClasses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            center_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            is_recurring BOOLEAN NOT NULL,
            days_of_week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
            start_date DATE,
            end_date DATE,
            scheduled_date DATE,
            start_time TIME NOT NULL,
            end_time TIME NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at DATETIME DEFAULT NULL,
            FOREIGN KEY (center_id) REFERENCES centers(id) ON DELETE CASCADE
            )
    `)
    },

    async down(queryInterface:QueryInterface){
        await queryInterface.sequelize.query(`
          DROP TABLE IF EXISTS GymClasses
        `)
    }
}