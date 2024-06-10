const clinicaService = require('../services/clinicaService');

const saveClinica = async (req, res) => {
    const clinicaData = req.body;
    const result = await clinicaService.saveClinica(clinicaData);
    if (result.success) {
        res.status(201).json(result.clinica);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const getClinicaById = async (req, res) => {
    const { id } = req.params;
    const result = await clinicaService.getClinicaById(id);
    if (result.success) {
        res.status(200).json(result.clinica);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const getAllClinicas = async (req, res) => {
    const result = await clinicaService.getAllClinicas();
    if (result.success) {
        res.status(200).json(result.clinicas);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const updateClinica = async (req, res) => {
    const { id } = req.params;
    const clinicaData = req.body;
    const result = await clinicaService.updateClinica(id, clinicaData);
    if (result.success) {
        res.status(200).json(result.clinica);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const deleteClinica = async (req, res) => {
    const { id } = req.params;
    const result = await clinicaService.deleteClinica(id);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(404).json({ message: result.message });
    }
};

module.exports = {
    saveClinica,
    getClinicaById,
    getAllClinicas,
    updateClinica,
    deleteClinica
};
