'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clinica.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    latitud: DataTypes.NUMERIC,
    longitud: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Clinica',
  });
  return Clinica;
};