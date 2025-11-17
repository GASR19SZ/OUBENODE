import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Global.css";

// Importar imágenes
import LOGO from "../assets/images/LOGO.png";
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";
import ENCUESTA from "../assets/images/ENCUESTA.png";

export default function Contacto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "", 
    mensaje: ""
  });
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Navegación
  const handleNavigation = (ruta) => {
    navigate(ruta);
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje("");
    
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/contacto/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setMensaje("✅ " + data.mensaje);
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setMensaje("❌ " + data.error);
      }
    } catch (error) {
      setMensaje("❌ Error de conexión con el servidor");
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Menú hamburguesa */}
      <div className="menu-hamburguesa">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú" role="button" tabIndex="0">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav-menu" aria-label="Menú principal">
          <ul>
            <li><button onClick={() => handleNavigation("/menu")}>Inicio</button></li>
            <li><button onClick={() => handleNavigation("/catalogo")}>Catálogo</button></li>
            <li><button onClick={() => handleNavigation("/novedades")}>Novedades</button></li>
            <li><button onClick={() => handleNavigation("/personalizar")}>Personalizar</button></li>
            <li><button onClick={() => handleNavigation("/devoluciones")}>Devoluciones</button></li>
            <li><button onClick={() => handleNavigation("/entrega")}>Entrega</button></li>
            <li><button onClick={() => handleNavigation("/encuesta")}>Encuesta</button></li>
            <li><button onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("usuario");
              navigate("/");
            }}>Cerrar sesión</button></li>
          </ul>
        </nav>
      </div>

      <div className="container">
        {/* LOGO */}
        <div className="contenedor-imagen-texto">
          <img src={CONTACTO} alt="Imagen de contacto" />
          <p className="texto-catalogo">CONTACTO</p>
        </div>

        <div className="linea"></div>

        {/* MENÚ DE CÍRCULOS */}
        <div className="circles">
          <div className="circle">
            <button onClick={() => handleNavigation("/menu")}>
              <img src={INICIO} alt="Inicio" />
            </button>
          </div>
          <div className="circle">
            <button onClick={() => handleNavigation("/catalogo")}>
              <img src={CATALOGO} alt="Catálogo" />
            </button>
          </div>
          <div className="circle">
            <button onClick={() => handleNavigation("/novedades")}>
              <img src={NOVEDADES} alt="Novedades" />
            </button>
          </div>
          <div className="circle">
            <button onClick={() => handleNavigation("/personalizar")}>
              <img src={PERSONALIZAR} alt="Personalizar" />
            </button>
          </div>
          <div className="circle">
            <button onClick={() => handleNavigation("/devoluciones")}>
              <img src={DEVOLUCIONES} alt="Devoluciones" />
            </button>
          </div>
          <div className="circle">
            <button onClick={() => handleNavigation("/entrega")}>
              <img src={ENTREGA} alt="Entrega" />
            </button>
          </div>
          <div className="circle">
            <button onClick={() => handleNavigation("/encuesta")}>
              <img src={ENCUESTA} alt="Encuesta" />
            </button>
          </div>
        </div>

        <div className="linea"></div>

        {/* FORMULARIO DE CONTACTO */}
        <section className="contacto">
          <h2>Contáctanos</h2>
          <p>¿Tienes dudas, sugerencias o necesitas ayuda? Estamos para ayudarte.</p>

          <form onSubmit={handleSubmit} className="formulario-contacto">
            <label htmlFor="nombre">Nombre:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              required 
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              rows="5" 
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>

          {/* Mensaje de resultado */}
          {mensaje && (
            <div className={`mensaje-resultado ${mensaje.includes('✅') ? 'exito' : 'error'}`}>
              {mensaje}
            </div>
          )}

          <div className="info-contacto">
            <p><strong>Correo:</strong> contacto@ouye-bhats.com</p>
            <p><strong>WhatsApp:</strong> +52 55 1234 5678</p>
            <p><strong>Horario:</strong> Lunes a viernes, 9:00 a.m. – 6:00 p.m.</p>
            <p>
              <strong>Redes:</strong> 
              <a href="https://www.instagram.com/ouyeb_hats/" target="_blank" rel="noopener noreferrer">Instagram</a> | 
              <a href="#">Facebook</a> | 
              <a href="#">TikTok</a>
            </p>
          </div>
        </section>

        <div className="linea"></div>

        {/* FOOTER */}
        <footer>
          <p>© 2025 Ouye-B Hats. Todos los derechos reservados.</p>
          <p>
            <a href="https://www.instagram.com/ouyeb_hats/" target="_blank" rel="noopener noreferrer">Instagram</a> |
            <a href="#">Facebook</a> |
            <a href="#">TikTok</a> |
            <a href="#">WhatsApp</a>
          </p>
        </footer>
      </div>
    </div>
  );
}