require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const ventasRoutes = require('./routes/ventas.routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Rutas
app.use('/ventas', ventasRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando 🚀' });
});

// Conectar a DB y levantar servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
});
