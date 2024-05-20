'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db2');

const Enfermedad = sequelize.define('Enfermedad', {
    idEnfermedad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreOriginal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombreEspañol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    especialistasTratan: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    clinicaTratante: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Clinicas',
            key: 'idClinica'
        }
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
});

Enfermedad.belongsToMany(Especialidad, { through: 'EspecialidadEnfermedad' });

module.exports = Enfermedad;
