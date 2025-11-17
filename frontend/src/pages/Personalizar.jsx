import React, { useState, useRef } from "react";
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

export default function Personalizar() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [imagenPrevia, setImagenPrevia] = useState("");
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [subiendo, setSubiendo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Navegación
  const handleNavigation = (ruta) => {
    navigate(ruta);
  };

  // Mostrar vista previa de la imagen
  const mostrarVistaPrevia = (event) => {
    const archivo = event.target.files[0];
    if (archivo) {
      setArchivoSeleccionado(archivo);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagenPrevia(e.target.result);
      };
      reader.readAsDataURL(archivo);
    } else {
      setImagenPrevia("");
      setArchivoSeleccionado(null);
    }
  };

  // Subir diseño
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!archivoSeleccionado) {
      setMensaje("❌ Por favor selecciona una imagen");
      return;
    }

    setSubiendo(true);
    setMensaje("");

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("diseno", archivoSeleccionado);

      const response = await fetch("http://localhost:3000/api/personalizar/subir", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();
      
      if (response.ok) {
        setMensaje("✅ " + data.mensaje);
        setImagenPrevia("");
        setArchivoSeleccionado(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setMensaje("❌ " + data.error);
      }
    } catch (error) {
      setMensaje("❌ Error al subir la imagen");
    } finally {
      setSubiendo(false);
    }
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
          <img src={PERSONALIZAR} alt="Imagen de personalizar" />
          <p className="texto-catalogo">PERSONALIZAR</p>
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

        {/* FORMULARIO DE PERSONALIZACIÓN */}
        <div className="custom-section">
          <h2>Sube tu diseño personalizado</h2>
          <p>Elige una imagen desde tu dispositivo que represente cómo deseas tu gorra personalizada:</p>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="file" 
              ref={fileInputRef}
              name="diseno" 
              accept="image/*" 
              onChange={mostrarVistaPrevia}
              required 
            />
            
            <div id="preview">
              {imagenPrevia ? (
                <img src={imagenPrevia} alt="Vista previa del diseño" />
              ) : (
                <p><em>Tu imagen aparecerá aquí...</em></p>
              )}
            </div>

            <button type="submit" className="boton-enviar" disabled={subiendo}>
              {subiendo ? "📤 Subiendo..." : "🎨 Enviar diseño"}
            </button>
          </form>

          {/* Mensaje de resultado */}
          {mensaje && (
            <div className={`mensaje-personalizar ${mensaje.includes('✅') ? 'exito' : 'error'}`}>
              {mensaje}
            </div>
          )}
        </div>

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