import { DataTypes, QueryInterface } from "sequelize";

// export  default {
//   async up(queryInterface: QueryInterface) {
//     await queryInterface.sequelize.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         first_name VARCHAR(255) NOT NULL,
//         last_name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL UNIQUE,
//         phone VARCHAR(20) NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
//         strike_count INT DEFAULT 0,
//         no_show_count INT DEFAULT 0,
//         banned_until DATETIME DEFAULT NULL,
//         createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//         updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//         deletedAt DATETIME DEFAULT NULL
//       )
//     `);
//   },
//   async down(queryInterface: QueryInterface) {
//     await queryInterface.sequelize.query(`
//       DROP TABLE IF EXISTS users
//     `);
//   }
// }


export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
      },
      strike_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      no_show_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      banned_until: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      created_At: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(), // Or Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_At: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      deleted_At: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
  },
};
