import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/Global.css'; // Importar el estilo global

// Importar páginas
import Index from './pages/Index';
import Menu from './pages/Menu';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Encuesta from './pages/Encuesta';
import Personalizar from './pages/Personalizar';
import Devoluciones from './pages/Devoluciones';
import Entrega from './pages/Entrega';
import Novedades from './pages/Novedades';
import Ouyeb from './pages/Ouyeb';
import Casual from './pages/Casual';
import Sport from './pages/Sport';

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <Routes>
            {/* Ruta pública */}
            <Route path="/" element={<Index />} />
            
            {/* Rutas protegidas */}
            <Route 
              path="/menu" 
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/catalogo" 
              element={
                <ProtectedRoute>
                  <Catalogo />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/contacto" 
              element={
                <ProtectedRoute>
                  <Contacto />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/encuesta" 
              element={
                <ProtectedRoute>
                  <Encuesta />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/personalizar" 
              element={
                <ProtectedRoute>
                  <Personalizar />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/devoluciones" 
              element={
                <ProtectedRoute>
                  <Devoluciones />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/entrega" 
              element={
                <ProtectedRoute>
                  <Entrega />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/novedades" 
              element={
                <ProtectedRoute>
                  <Novedades />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ouyeb" 
              element={
                <ProtectedRoute>
                  <Ouyeb />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/casual" 
              element={
                <ProtectedRoute>
                  <Casual />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/sport" 
              element={
                <ProtectedRoute>
                  <Sport />
                </ProtectedRoute>
              } 
            />
            
            {/* Ruta por defecto */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;