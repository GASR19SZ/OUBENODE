import React from "react";
import "../styles/Global.css";

// Importar imágenes del menú y logos
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";

// Importar imágenes específicas de Casual
import LOGO from "../assets/images/LOGO.png";
import OUYEB_MARCA from "../assets/images/ouyemarca.png";
import SPORT from "../assets/images/lort.png";

// Importar imágenes de productos Casual
import CASU1 from "../assets/images/CASU1.png";
import CASU2 from "../assets/images/CASU2.png";
import CASU3 from "../assets/images/CASU3.png";
import CASU4 from "../assets/images/CASU4.png";
import CASU5 from "../assets/images/CASU5.png";
import CASU6 from "../assets/images/CASU6.png";
import CASU7 from "../assets/images/CASU7.png";
import CASU8 from "../assets/images/CASU8.png";
import CASU9 from "../assets/images/CASU9.png";

export default function Casual() {
  return (
    <div className="page-casual">

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
            <li><a href="/menu">Inicio</a></li>
            <li><a href="/catalogo">Catálogo</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/personalizar">Personalizar</a></li>
            <li><a href="/devoluciones">Devoluciones</a></li>
            <li><a href="/entrega">Entrega</a></li>
            <li><a href="/encuesta">Encuesta</a></li>
            <li><a href="/logout">Cerrar sesión</a></li>
          </ul>
        </nav>
      </div>

      {/* Logo + título */}
      <div className="contenedor-imagen-texto">
        <img src={LOGO} alt="Logo de Ouye-B Hats" />
        <p className="texto-catalogo">CAPS CASUAL</p>
      </div>

      <div className="linea"></div>

      {/* Círculos */}
      <div className="circles">
        <div className="circle">
          <a href="/ouyeb"><img src={OUYEB_MARCA} alt="OUYE-B" /></a>
        </div>
        <div className="circle">
          <a href="/sport"><img src={SPORT} alt="SPORT" /></a>
        </div>
      </div>

      <div className="linea"></div>

      {/* Productos */}
      <div className="grid">
        <div className="col1">
          <div className="box">
            <img src={CASU1} alt="Gorra casual 1" />
            <p>$250 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box">
            <img src={CASU2} alt="Gorra casual 2" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box">
            <img src={CASU3} alt="Gorra casual 3" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
        </div>
        <div className="col2">
          <div className="box">
            <img src={CASU4} alt="Gorra casual 4" />
            <p>$280 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box">
            <img src={CASU5} alt="Gorra casual 5" />
            <p>$270 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box">
            <img src={CASU6} alt="Gorra casual 6" />
            <p>$270 MXN</p>
            <button>Compra</button>
          </div>
        </div>
        <div className="col3">
          <div className="box">
            <img src={CASU7} alt="Gorra casual 7" />
            <p>$260 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box">
            <img src={CASU8} alt="Gorra casual 8" />
            <p>$290 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box">
            <img src={CASU9} alt="Gorra casual 9" />
            <p>$240 MXN</p>
            <button>Compra</button>
          </div>
        </div>
      </div>

      <div className="linea"></div>

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