const Enfermedad = require('../models/enfermedad');

const saveEnfermedad = async (enfermedadData) => {
    return Enfermedad.create(enfermedadData);
};

const getEnfermedadById = async (id) => {
    return Enfermedad.findByPk(id);
};

const getAllEnfermedades = async () => {
    return Enfermedad.findAll();
};

const updateEnfermedad = async (id, enfermedadData) => {
    const enfermedad = await Enfermedad.findByPk(id);
    if (enfermedad) {
        return enfermedad.update(enfermedadData);
    }
    return null;
};

const deleteEnfermedad = async (id) => {
    const enfermedad = await Enfermedad.findByPk(id);
    if (enfermedad) {
        return enfermedad.destroy();
    }
    return null;
};

const getEnfermedadByNombreOriginal = async (nombreOriginal) => {
    return Enfermedad.findOne({
        where: { nombreOriginal }
    });
};

module.exports = {
    saveEnfermedad,
    getEnfermedadById,
    getAllEnfermedades,
    updateEnfermedad,
    deleteEnfermedad,
    getEnfermedadByNombreOriginal
};
