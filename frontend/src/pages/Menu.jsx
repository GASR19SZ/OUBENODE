import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Global.css";

// Importar todas las imágenes desde assets
import LOGO from "../assets/images/LOGO.png";
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";
import ENCUESTA from "../assets/images/ENCUESTA.png";

export default function Menu() {
  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState("Usuario");
  const [cargando, setCargando] = useState(false);

  // Verificar si el usuario está logueado
  useEffect(() => {
    const token = localStorage.getItem("token");
    const usuario = localStorage.getItem("usuario");
    
    if (!token) {
      navigate("/");
      return;
    }

    if (usuario) {
      const usuarioData = JSON.parse(usuario);
      setNombreUsuario(usuarioData.nombre);
    }
  }, [navigate]);

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  // Navegación
  const handleNavigation = (ruta) => {
    navigate(ruta);
  };

  if (cargando) {
    return (
      <div className="cargando">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Menú hamburguesa */}
      <div className="menu-hamburguesa">
        <input type="checkbox" id="menuToggle" />
        <label
          htmlFor="menuToggle"
          className="hamburger"
          aria-label="Abrir menú"
          role="button"
          tabIndex="0"
        >
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
            <li><button onClick={handleLogout}>Cerrar sesión</button></li>
          </ul>
        </nav>
      </div>

      <div className="container">
        {/* LOGO */}
        <div className="logo">
          <img src={LOGO} alt="Ouye-B Hats" />
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
            <button onClick={() => handleNavigation("/contacto")}>
              <img src={CONTACTO} alt="Contacto" />
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

        {/* BIENVENIDA */}
        <div className="contenedor">
          <div className="glass-bienvenida">
            <h2>¡Bienvenido, {nombreUsuario}!</h2>
            <p>Gracias por formar parte de Ouye-B Hats.</p>
            <p>RECUERDA QUE SOMOS TU MARCA CONFIABLE Y QUE TE DARA ESTILO OUYE-B</p>
          </div>
        </div>

        <div className="linea"></div>

        {/* FOOTER */}
        <footer>
          <p>© 2025 Ouye-B Hats. Todos los derechos reservados.</p>
          <p>
            <a href="https://www.instagram.com/ouyeb_hats/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a> |
            <a href="#">Facebook</a> |
            <a href="#">TikTok</a> |
            <a href="#">WhatsApp</a>
          </p>
        </footer>
      </div>
    </div>
  );
}