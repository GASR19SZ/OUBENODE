import express from 'express';
import pool from '../database.js';

const router = express.Router();

// POST /api/encuesta/guardar - Reemplaza guardar_encuesta.php
router.post('/guardar', async (req, res) => {
    try {
        const { satisfaccion, motivo, personalizar, comentario } = req.body;

        await pool.execute(
            'INSERT INTO encuesta (satisfaccion, motivo, personalizar, comentario) VALUES (?, ?, ?, ?)',
            [satisfaccion, motivo, personalizar, comentario]
        );

        res.json({ 
            mensaje: 'Gracias por responder la encuesta 😊',
            success: true
        });

    } catch (error) {
        console.error('Error encuesta:', error);
        res.status(500).json({ error: 'Error al guardar respuesta' });
    }
});

export default router;