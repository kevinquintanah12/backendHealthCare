const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authController = require('./controllers/authController.js');
const sequelize = require('./db/db');
const userController = require('./controllers/userController');
const sintomasPacController = require('./controllers/sintomasPacController.js');
const diagnosticoController = require('./controllers/diagnosticoController.js');
const sintomaController = require('./controllers/sintomaController.js');
const enfermedadController = require('./controllers/enfermedadController');


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.use('/api/auth', authController);
app.use('/api/user', userController);
app.use('/api/sintomasPac', sintomasPacController);
app.use('/api/diagnosticos', diagnosticoController);
app.use('/api/sintomas', sintomaController);
app.use('/api/enfermedades', enfermedadController);  // Usa el controlador

app.use('/uploads', express.static('uploads'));

app.options('*', cors());

sequelize.sync().then(() => {
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
});
