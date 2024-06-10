const Especialidad = require('./especialidad');
const Enfermedad = require('./enfermedad');

Especialidad.belongsToMany(Enfermedad, { through: 'EspecialidadEnfermedad' });
Enfermedad.belongsToMany(Especialidad, { through: 'EspecialidadEnfermedad' });
