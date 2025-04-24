const Venta = require('../models/venta.model');

const crearVenta = async (req, res) => {
    try {
        const nuevaVenta = new Venta(req.body);
        const ventaGuardada = await nuevaVenta.save();
        res.status(201).json(ventaGuardada);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al crear la venta' });
    }
};

const obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
};

module.exports = {
    crearVenta,
    obtenerVentas
};
