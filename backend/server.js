import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { testConnection } from './database.js';

// Importar rutas
import authRoutes from './routes/auth.js';
import contactoRoutes from './routes/contacto.js';
import encuestaRoutes from './routes/encuesta.js';
import personalizarRoutes from './routes/personalizar.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Crear carpeta uploads si no existe
import fs from 'fs';
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads', { recursive: true });
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/encuesta', encuestaRoutes);
app.use('/api/personalizar', personalizarRoutes);

// Rutas de prueba
app.get('/api/test', (req, res) => {
    res.json({ 
        mensaje: "✅ Backend Ouye-B Hats funcionando",
        tecnologia: "Node.js + Express + MySQL",
        rutas: {
            auth: ['/api/auth/login', '/api/auth/registro', '/api/auth/verificar'],
            contacto: '/api/contacto/enviar',
            encuesta: '/api/encuesta/guardar',
            personalizar: '/api/personalizar/subir'
        }
    });
});

app.get('/api/tablas', async (req, res) => {
    try {
        const pool = (await import('./database.js')).default;
        const [tablas] = await pool.execute('SHOW TABLES FROM ouyeb');
        res.json({ 
            base_de_datos: 'ouyeb',
            tablas: tablas.map(t => t.Tables_in_ouyeb)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, async () => {
    console.log(`🧢 Servidor Node.js ejecutándose en: http://localhost:3000`);
    console.log('🔍 Probando conexión a MySQL...');
    
    setTimeout(async () => {
        await testConnection();
    }, 1000);
});