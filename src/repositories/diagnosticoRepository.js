const Diagnostico = require('../models/diagnostico');

const saveDiagnostico = async (diagnosticoData) => {
    return Diagnostico.create(diagnosticoData);
};

const getDiagnosticoById = async (id) => {
    return Diagnostico.findByPk(id);
};

const getDiagnosticosByUsuarioId = async (idUsuario) => {
    return Diagnostico.findAll({
        where: { idUsuario }
    });
};

const getAllDiagnosticos = async () => {
    return Diagnostico.findAll();
};

const updateDiagnostico = async (id, diagnosticoData) => {
    const diagnostico = await Diagnostico.findByPk(id);
    if (diagnostico) {
        return diagnostico.update(diagnosticoData);
    }
    return null;
};

const deleteDiagnostico = async (id) => {
    const diagnostico = await Diagnostico.findByPk(id);
    if (diagnostico) {
        return diagnostico.destroy();
    }
    return null;
};

module.exports = {
    saveDiagnostico,
    getDiagnosticoById,
    getDiagnosticosByUsuarioId,
    getAllDiagnosticos,
    updateDiagnostico,
    deleteDiagnostico
};
