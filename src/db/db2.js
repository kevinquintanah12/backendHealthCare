require('dotenv').config({ path: '.env' }); // Cargar variables de entorno desde el archivo .env

const { Sequelize } = require('sequelize');

const sequelize2 = new Sequelize(process.env.DB2_NAME, process.env.DB2_USER, process.env.DB2_PASSWORD, {
   host: process.env.DB2_HOST,
   port: process.env.DB2_PORT,
   dialect: 'postgres'
});

sequelize.sync({ force: true })
  .then(() => {
    console.log('Tablas creadas con éxito');
    // Coloca aquí el resto de tu código
  })
  .catch(err => {
    console.error('Error al crear las tablas:', err);
  });

module.exports = sequelize2;
