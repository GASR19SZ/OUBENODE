import express from 'express';
import multer from 'multer';
import path from 'path';
import pool from '../database.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Configurar multer para subir archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, 'diseno_' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Solo se permiten imágenes: jpg, png, jpeg, gif, webp.'));
        }
    }
});

// POST /api/personalizar/subir - Reemplaza subir_diseño.php
router.post('/subir', verifyToken, upload.single('diseno'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se recibió ninguna imagen' });
        }

        const usuario_id = req.user.id;
        const ruta_imagen = req.file.path;

        // Guardar en base de datos
        await pool.execute(
            'INSERT INTO diseños_personalizados (usuario_id, ruta_imagen) VALUES (?, ?)',
            [usuario_id, ruta_imagen]
        );

        res.json({ 
            mensaje: '¡Diseño subido exitosamente!',
            imagen: ruta_imagen,
            success: true
        });

    } catch (error) {
        console.error('Error subir diseño:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;