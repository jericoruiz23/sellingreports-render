require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const ventasRoutes = require('./routes/ventas.routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: 'https://jericoruiz23.github.io', // o usa una función si quieres varios orígenes
    methods: ['GET', 'POST'],
    credentials: false,
}));


// Rutas
app.use('/ventas', ventasRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando 🚀' });
});

app.get('/prueba-db', async (req, res) => {
    try {
        const resultado = await mongoose.connection.db.listCollections().toArray();
        res.json(resultado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Conectar a DB y levantar servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en el puerto: ${PORT}`);
    });
});
