const medicoService = require('../services/medicoService');

const saveMedico = async (req, res) => {
    const medicoData = req.body;
    const result = await medicoService.saveMedico(medicoData);
    if (result.success) {
        res.status(201).json(result.medico);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const getMedicoById = async (req, res) => {
    const { id } = req.params;
    const result = await medicoService.getMedicoById(id);
    if (result.success) {
        res.status(200).json(result.medico);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const getAllMedicos = async (req, res) => {
    const result = await medicoService.getAllMedicos();
    if (result.success) {
        res.status(200).json(result.medicos);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const updateMedico = async (req, res) => {
    const { id } = req.params;
    const medicoData = req.body;
    const result = await medicoService.updateMedico(id, medicoData);
    if (result.success) {
        res.status(200).json(result.medico);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const deleteMedico = async (req, res) => {
    const { id } = req.params;
    const result = await medicoService.deleteMedico(id);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(404).json({ message: result.message });
    }
};

module.exports = {
    saveMedico,
    getMedicoById,
    getAllMedicos,
    updateMedico,
    deleteMedico
};
