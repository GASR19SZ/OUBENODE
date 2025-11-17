import express from 'express';
import pool from '../database.js';

const router = express.Router();

// POST /api/contacto/enviar - Reemplaza enviar_formulario.php
router.post('/enviar', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ error: 'Por favor completa todos los campos.' });
        }

        // Insertar en base de datos
        await pool.execute(
            'INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)',
            [nombre, email, mensaje]
        );

        res.json({ 
            mensaje: 'Tu mensaje se envió correctamente. ¡Gracias por contactarnos!',
            success: true
        });

    } catch (error) {
        console.error('Error contacto:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
});

export default router;