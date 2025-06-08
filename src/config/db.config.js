const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  // test: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: 'mysql'
  // },
  // production: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: 'mysql',
  //   logging: false, // Disable logging in production
  //   dialectOptions: {
  //     ssl: {
  //       require: true, // This will help you connect to the database using SSL
  //       rejectUnauthorized: false // This is important for self-signed certificates
  //     }
  //   }
  // }
};

module.exports = config;