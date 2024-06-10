const Medico = require('../models').Medico;

const saveMedico = async (medicoData) => {
    return Medico.create(medicoData);
};

const getMedicoById = async (id) => {
    return Medico.findByPk(id, {
        include: ['Especialidad', 'Clinica'] // Incluimos las asociaciones
    });
};

const getAllMedicos = async () => {
    return Medico.findAll({
        include: ['Especialidad', 'Clinica'] // Incluimos las asociaciones
    });
};

const updateMedico = async (id, medicoData) => {
    const medico = await Medico.findByPk(id);
    if (medico) {
        return medico.update(medicoData);
    }
    return null;
};

const deleteMedico = async (id) => {
    const medico = await Medico.findByPk(id);
    if (medico) {
        return medico.destroy();
    }
    return null;
};

module.exports = {
    saveMedico,
    getMedicoById,
    getAllMedicos,
    updateMedico,
    deleteMedico
};
