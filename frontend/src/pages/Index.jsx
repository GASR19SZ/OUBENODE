import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Global.css";

// Importar imágenes desde assets
import LOGO from "../assets/images/LOGO.png";
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";
import ENCUESTA from "../assets/images/ENCUESTA.png";

export default function Index() {
  const [mostrarLogin, setMostrarLogin] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    confirmar: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (mostrarLogin) {
        // LOGIN
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            contrasena: formData.contrasena
          })
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          navigate("/menu");
        } else {
          setError(data.error);
        }
      } else {
        // REGISTRO
        if (formData.contrasena !== formData.confirmar) {
          setError("Las contraseñas no coinciden");
          return;
        }

        const response = await fetch("http://localhost:3000/api/auth/registro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: formData.nombre,
            email: formData.email,
            contrasena: formData.contrasena
          })
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Registro exitoso. Ahora inicia sesión.");
          setMostrarLogin(true);
          setFormData({ nombre: '', email: '', contrasena: '', confirmar: '' });
        } else {
          setError(data.error);
        }
      }
    } catch (error) {
      setError("Error de conexión con el servidor");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container-principal">
      {/* Menú Hamburguesa */}
      <div className="menu-hamburguesa">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú" role="button" tabIndex="0">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav-menu" aria-label="Menú principal">
          <ul>
            <li><a href="#login">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#personalizar">Personalizar</a></li>
            <li><a href="#devoluciones">Devoluciones</a></li>
            <li><a href="#entrega">Entrega</a></li>
            <li><a href="#encuesta">Encuesta</a></li>
          </ul>
        </nav>
      </div>

      {/* LOGO */}
      <main className="container">
        <section className="logo">
          <img src={LOGO} alt="Ouye-B Hats" />
        </section>

        <div className="linea"></div>

        {/* CÍRCULOS VERTICALES */}
        <div className="circles-vertical">
          <div className="circle"><a href="#menu"><img src={INICIO} alt="Inicio" /></a></div>
          <div className="circle"><a href="#catalogo"><img src={CATALOGO} alt="Catálogo" /></a></div>
          <div className="circle"><a href="#novedades"><img src={NOVEDADES} alt="Novedades" /></a></div>
          <div className="circle"><a href="#personalizar"><img src={PERSONALIZAR} alt="Personalizar" /></a></div>
          <div className="circle"><a href="#contacto"><img src={CONTACTO} alt="Contacto" /></a></div>
          <div className="circle"><a href="#devoluciones"><img src={DEVOLUCIONES} alt="Devoluciones" /></a></div>
          <div className="circle"><a href="#entrega"><img src={ENTREGA} alt="Entrega" /></a></div>
          <div className="circle"><a href="#encuesta"><img src={ENCUESTA} alt="Encuesta" /></a></div>
        </div>

        {/* FORMULARIOS */}
        <section className="contenedor">
          {error && <div className="error-message">{error}</div>}

          {mostrarLogin ? (
            <div id="form-login" className="formulario activo">
              <h2>Iniciar Sesión</h2>
              <form onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Correo electrónico" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="password" 
                  name="contrasena" 
                  placeholder="Contraseña" 
                  value={formData.contrasena}
                  onChange={handleChange}
                  required 
                />
                <button type="submit">Entrar</button>
              </form>
              <div className="cambiar">
                ¿No tienes cuenta?{" "}
                <a href="#" onClick={() => setMostrarLogin(false)}>
                  Crear una cuenta
                </a>
              </div>
            </div>
          ) : (
            <div id="form-register" className="formulario activo">
              <h2>Crear Cuenta</h2>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="nombre" 
                  placeholder="Nombre completo" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Correo electrónico" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="password" 
                  name="contrasena" 
                  placeholder="Contraseña" 
                  value={formData.contrasena}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="password" 
                  name="confirmar" 
                  placeholder="Confirmar contraseña" 
                  value={formData.confirmar}
                  onChange={handleChange}
                  required 
                />
                <button type="submit">Registrarse</button>
              </form>
              <div className="cambiar">
                ¿Ya tienes cuenta?{" "}
                <a href="#" onClick={() => setMostrarLogin(true)}>
                  Iniciar sesión
                </a>
              </div>
            </div>
          )}
        </section>

        <div className="linea"></div>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Ouye-B Hats. Todos los derechos reservados.</p>
        <p>
          <a href="https://www.instagram.com/ouyeb_hats/">Instagram</a> | 
          <a href="#">Facebook</a> | 
          <a href="#">TikTok</a> | 
          <a href="#">WhatsApp</a>
        </p>
      </footer>
    </div>
  );
}