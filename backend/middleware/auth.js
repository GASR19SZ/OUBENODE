import jwt from 'jsonwebtoken';

// Middleware para verificar token (reemplaza session_start())
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Token requerido.' });
    }

    try {
        const verified = jwt.verify(token, 'secreto_ouyeb');
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

export default { verifyToken };