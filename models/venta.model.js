const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    procesador: { type: String, required: true },
    generacion: { type: String, required: true },
    ram: { type: String, required: true },
    almacenamiento: { type: String, required: true },
    capacidad: { type: String, required: true },
    graficos: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
}, { collection: 'ventas' });

module.exports = mongoose.model('Venta', ventaSchema);
