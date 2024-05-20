const { DataTypes } = require('sequelize');
const sequelize = require('../db/db2');
const Enfermedad = require('./enfermedad');

const Especialidad = sequelize.define('Especialidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Especialidad.belongsToMany(Enfermedad, { through: 'EspecialidadEnfermedad' });

module.exports = Especialidad;
