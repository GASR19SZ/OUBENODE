// frontend/src/utils/api.js
const API_BASE = 'http://localhost:3000/api';

export const api = {
  // Auth
  login: (email, password) => 
    fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, contrasena: password })
    }).then(res => res.json()),

  register: (nombre, email, password) =>
    fetch(`${API_BASE}/auth/registro`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, contrasena: password })
    }).then(res => res.json()),

  // Contacto
  enviarContacto: (nombre, email, mensaje) =>
    fetch(`${API_BASE}/contacto/enviar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, mensaje })
    }).then(res => res.json()),

  // Encuesta
  enviarEncuesta: (datos) =>
    fetch(`${API_BASE}/encuesta/guardar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    }).then(res => res.json())
};