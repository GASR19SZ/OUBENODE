// backend/database.js - Vamos a hacerlo más detallado
import mysql from 'mysql2/promise';

const dbConfig = {
    host: "localhost",
    user: "root", 
    password: "",  // ¿Está vacía tu contraseña?
    database: "ouyeb", // ¿Existe esta base de datos?
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Función mejorada para diagnosticar
export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Conexión a MySQL exitosa');
        
        // Verificar si la base de datos existe
        const [databases] = await connection.execute('SHOW DATABASES');
        console.log('📊 Bases de datos disponibles:', databases.map(db => db.Database));
        
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ Error detallado de conexión:');
        console.error('🔍 Mensaje:', error.message);
        console.error('🔍 Código:', error.code);
        console.error('🔍 Número error:', error.errno);
        
        // Diagnóstico específico
        if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('🔐 Error de acceso - Verifica usuario/contraseña');
        } else if (error.code === 'ER_BAD_DB_ERROR') {
            console.error('🗄️ La base de datos "ouyeb" no existe');
        } else if (error.code === 'ECONNREFUSED') {
            console.error('🚫 MySQL no está corriendo o el puerto es incorrecto');
        }
        
        return false;
    }
};

export default pool;