require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json()); // para parsear JSON en las solicitudes

// Rutas de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando 🚀' });
});

// Conexión a MongoDB y levantar servidor
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Conectado a MongoDB');

        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
    }
};

startServer();
