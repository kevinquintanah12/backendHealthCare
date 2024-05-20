'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    static associate(models) {
      Medico.belongsTo(models.Especialidad, { foreignKey: 'especialidadId' });
      Medico.belongsTo(models.Clinica, { foreignKey: 'clinicaId' });
    }
  };
  Medico.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    especialidadId: DataTypes.INTEGER,
    clinicaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medico',
  });
  return Medico;
};
