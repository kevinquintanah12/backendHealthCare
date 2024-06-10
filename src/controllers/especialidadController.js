const especialidadService = require('../services/especialidadService');

const saveEspecialidad = async (req, res) => {
    const especialidadData = req.body;
    const result = await especialidadService.saveEspecialidad(especialidadData);
    if (result.success) {
        res.status(201).json(result.especialidad);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const getEspecialidadById = async (req, res) => {
    const { id } = req.params;
    const result = await especialidadService.getEspecialidadById(id);
    if (result.success) {
        res.status(200).json(result.especialidad);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const getAllEspecialidades = async (req, res) => {
    const result = await especialidadService.getAllEspecialidades();
    if (result.success) {
        res.status(200).json(result.especialidades);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const updateEspecialidad = async (req, res) => {
    const { id } = req.params;
    const especialidadData = req.body;
    const result = await especialidadService.updateEspecialidad(id, especialidadData);
    if (result.success) {
        res.status(200).json(result.especialidad);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const deleteEspecialidad = async (req, res) => {
    const { id } = req.params;
    const result = await especialidadService.deleteEspecialidad(id);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(404).json({ message: result.message });
    }
};

module.exports = {
    saveEspecialidad,
    getEspecialidadById,
    getAllEspecialidades,
    updateEspecialidad,
    deleteEspecialidad
};
