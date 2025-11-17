import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Global.css";

// Importar imágenes
import ENCUESTA_IMG from "../assets/images/ENCUESTA.png";
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";

export default function Encuesta() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    satisfaccion: "",
    motivo: "",
    personalizar: "",
    comentario: ""
  });
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleNavigation = (ruta) => {
    navigate(ruta);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje("");

    try {
      // URL CORRECTA según tu configuración
      const response = await fetch("http://localhost:3000/api/encuesta/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setMensaje("✅ " + data.mensaje);
        
        // Limpiar formulario
        setFormData({
          satisfaccion: "",
          motivo: "",
          personalizar: "",
          comentario: ""
        });

        // Redirigir después de 2 segundos
        setTimeout(() => {
          navigate("/menu");
        }, 2000);

      } else {
        setMensaje("❌ " + (data.error || 'Error al enviar la encuesta'));
      }
    } catch (error) {
      console.error("Error completo:", error);
      setMensaje("❌ Error de conexión. Verifica que el servidor esté ejecutándose.");
    } finally {
      setEnviando(false);
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
            <li><button onClick={() => handleNavigation("/contacto")}>Contacto</button></li>
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
          <img src={ENCUESTA_IMG} alt="Imagen de encuesta" />
          <p className="texto-catalogo">ENCUESTA</p>
        </div>

        <div className="linea"></div>

        {/* CÍRCULOS */}
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
        </div>

        <div className="linea"></div>

        {/* ENCUESTA */}
        <section className="encuesta" id="encuesta">
          <h2>📝 Ayúdanos a mejorar</h2>
          <p>Responde esta breve encuesta para brindarte un mejor servicio.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="satisfaccion">¿Qué tan satisfecho estás con la tienda?</label>
            <select 
              id="satisfaccion" 
              name="satisfaccion" 
              value={formData.satisfaccion}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="excelente">Excelente</option>
              <option value="bueno">Bueno</option>
              <option value="regular">Regular</option>
              <option value="malo">Malo</option>
            </select>

            <label htmlFor="motivo">¿Por qué visitaste Ouye-B Hats hoy?</label>
            <input
              type="text"
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              placeholder="Ej. Buscar una gorra, ver novedades..."
              required
            />

            <label>¿Te gustaría personalizar tu propia gorra?</label>
            <div className="opciones">
              <label>
                <input 
                  type="radio" 
                  name="personalizar" 
                  value="sí" 
                  checked={formData.personalizar === "sí"}
                  onChange={handleChange}
                  required 
                /> Sí
              </label>
              <label>
                <input 
                  type="radio" 
                  name="personalizar" 
                  value="no"
                  checked={formData.personalizar === "no"}
                  onChange={handleChange}
                /> No
              </label>
            </div>

            <label htmlFor="comentario">¿Algún comentario o sugerencia?</label>
            <textarea
              id="comentario"
              name="comentario"
              rows="4"
              value={formData.comentario}
              onChange={handleChange}
              placeholder="Escribe tu opinión..."
            ></textarea>

            <button type="submit" disabled={enviando}>
              {enviando ? "📤 Enviando..." : "Enviar encuesta"}
            </button>
          </form>

          {/* Mensaje de resultado */}
          {mensaje && (
            <div className={`mensaje-encuesta ${mensaje.includes('✅') ? 'exito' : 'error'}`}>
              {mensaje}
            </div>
          )}
        </section>

        <div className="linea"></div>
      </div>

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
  );
}