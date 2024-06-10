const express = require('express');
const router = express.Router();
const diagnosticoController = require('../controllers/diagnosticoController');

// Ruta para crear un nuevo diagnóstico
router.post('/', diagnosticoController.saveDiagnostico);

// Ruta para obtener un diagnóstico por su ID
router.get('/:id', diagnosticoController.getDiagnosticoById);

// Ruta para obtener todos los diagnósticos de un usuario por su ID de usuario
router.get('/usuario/:idUsuario', diagnosticoController.getDiagnosticosByUsuarioId);

// Ruta para obtener todos los diagnósticos
router.get('/', diagnosticoController.getAllDiagnosticos);

// Ruta para actualizar un diagnóstico por su ID
router.put('/:id', diagnosticoController.updateDiagnostico);

// Ruta para eliminar un diagnóstico por su ID
router.delete('/:id', diagnosticoController.deleteDiagnostico);

module.exports = router;
