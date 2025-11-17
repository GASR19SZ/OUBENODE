import React from "react";
import "../styles/Global.css";

// Importar imágenes del menú
import INICIO from "../assets/images/INICIO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";
import ENCUESTA from "../assets/images/ENCUESTA.png";

// Importar imágenes del catálogo
import CATALOGO_IMG from "../assets/images/CATALOGO.png";
import OUYE from "../assets/images/OUYE.png";
import CASUAL from "../assets/images/CASUAL.png";
import SPORT from "../assets/images/SPORT.png";

export default function Catalogo() {
  return (
    <div>

      {/* Menú hamburguesa */}
      <div className="menu-hamburguesa">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="hamburger" role="button" tabIndex="0">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav-menu">
          <ul>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/catalogo">Catálogo</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/personalizar">Personalizar</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/devoluciones">Devoluciones</a></li>
            <li><a href="/entrega">Entrega</a></li>
            <li><a href="/encuesta">Encuesta</a></li>
            <li><a href="/logout">Cerrar sesión</a></li>
          </ul>
        </nav>
      </div>

      <div className="container">

        {/* Logo */}
        <div className="contenedor-imagen-texto">
          <img src={CATALOGO_IMG} alt="Imagen de gorras" />
          <p className="texto-catalogo">CATÁLOGO</p>
        </div>

        <div className="linea"></div>

        {/* Círculos */}
        <div className="circles">
          <div className="circle">
            <a href="/home">
              <img src={INICIO} alt="Inicio" />
            </a>
          </div>
          <div className="circle">
            <a href="/novedades">
              <img src={NOVEDADES} alt="Novedades" />
            </a>
          </div>
          <div className="circle">
            <a href="/personalizar">
              <img src={PERSONALIZAR} alt="Personalizar" />
            </a>
          </div>
          <div className="circle">
            <a href="/contacto">
              <img src={CONTACTO} alt="Contacto" />
            </a>
          </div>
          <div className="circle">
            <a href="/devoluciones">
              <img src={DEVOLUCIONES} alt="Devoluciones" />
            </a>
          </div>
          <div className="circle">
            <a href="/entrega">
              <img src={ENTREGA} alt="Entrega" />
            </a>
          </div>
          <div className="circle">
            <a href="/encuesta">
              <img src={ENCUESTA} alt="Encuesta" />
            </a>
          </div>
        </div>

        <div className="linea"></div>

        {/* Categoría OUYE-B */}
        <section className="hero">
          <img src={OUYE} className="hero-img" alt="Categoría OUYE-B" />
          <div className="hero-texto">
            <h1>OUYE-B</h1>
            <a className="cta" href="/ouyeb">🛒 ¡VER!</a>
          </div>
        </section>

        <div className="linea"></div>

        {/* Categoría CASUAL */}
        <section className="hero">
          <img src={CASUAL} className="hero-img" alt="Categoría Casual" />
          <div className="hero-texto">
            <h1>CASUAL</h1>
            <a className="cta" href="/casual">🛒 ¡VER!</a>
          </div>
        </section>

        <div className="linea"></div>

        {/* Categoría SPORT */}
        <section className="hero">
          <img src={SPORT} className="hero-img" alt="Categoría Sport" />
          <div className="hero-texto">
            <h1>SPORT</h1>
            <a className="cta" href="/sport">🛒 ¡VER!</a>
          </div>
        </section>

        <div className="linea"></div>

      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Ouye-B Hats. Todos los derechos reservados.</p>
        <p>
          <a href="#">Instagram</a> | <a href="#">Facebook</a> | 
          <a href="#">TikTok</a> | <a href="#">WhatsApp</a>
        </p>
      </footer>

    </div>
  );
}