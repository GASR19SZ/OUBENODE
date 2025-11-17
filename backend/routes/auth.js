import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../database.js';

const router = express.Router();

// POST /api/auth/login - Reemplaza login.php
router.post('/login', async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        // Validar campos (igual que tu PHP)
        if (!email || !contrasena) {
            return res.status(400).json({ error: 'Email y contraseña son requeridos.' });
        }

        // Buscar usuario por email (igual que tu PHP)
        const [users] = await pool.execute(
            'SELECT id, nombre, contrasena FROM usuarios WHERE email = ?', 
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({ error: 'El correo no está registrado.' });
        }

        const user = users[0];

        // Verificar contraseña (reemplaza password_verify)
        const validPassword = await bcrypt.compare(contrasena, user.contrasena);

        if (!validPassword) {
            return res.status(401).json({ error: 'Contraseña incorrecta.' });
        }

        // Crear token JWT (reemplaza $_SESSION)
        const token = jwt.sign({ 
            id: user.id, 
            nombre: user.nombre,
            email: email
        }, 'secreto_ouyeb', { expiresIn: '24h' });

        // Respuesta exitosa (reemplaza header Location)
        res.json({ 
            mensaje: 'Login exitoso',
            token: token,
            usuario: {
                id: user.id,
                nombre: user.nombre,
                email: email
            }
        });

    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// POST /api/auth/registro - Reemplaza registro.php
router.post('/registro', async (req, res) => {
    try {
        const { nombre, email, contrasena } = req.body;

        // Validar campos
        if (!nombre || !email || !contrasena) {
            return res.status(400).json({ error: 'Todos los campos son requeridos.' });
        }

        // Verificar si email ya existe (igual que tu PHP)
        const [existing] = await pool.execute(
            'SELECT id FROM usuarios WHERE email = ?', 
            [email]
        );

        if (existing.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado. Por favor, usa otro.' });
        }

        // Hashear contraseña (reemplaza password_hash)
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        // Insertar usuario (igual que tu PHP)
        const [result] = await pool.execute(
            'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)',
            [nombre, email, hashedPassword]
        );

        res.json({ 
            mensaje: 'Usuario registrado exitosamente',
            usuarioId: result.insertId
        });

    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
});

// GET /api/auth/verificar - Para verificar token (reemplaza session_start())
router.get('/verificar', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ error: 'Token no proporcionado' });
        }

        const decoded = jwt.verify(token, 'secreto_ouyeb');
        
        // Verificar que el usuario aún existe en la BD
        const [users] = await pool.execute(
            'SELECT id, nombre, email FROM usuarios WHERE id = ?',
            [decoded.id]
        );

        if (users.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        res.json({ 
            usuario: users[0],
            valido: true
        });

    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
});

export default router;