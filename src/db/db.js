require('dotenv').config({ path: '.env' }); // Cargar variables de entorno desde el archivo .env.db1
const { Sequelize } = require('sequelize');

const sequelize1 = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   dialect: 'postgres'
});

module.exports = { sequelize1 };
