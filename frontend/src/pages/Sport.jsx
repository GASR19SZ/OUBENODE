import React from "react";
import "../styles/Global.css";

// Importar imágenes del menú y logos
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA from "../assets/images/ENTREGA.png";

// Importar imágenes específicas de Sport
import LOGO from "../assets/images/LOGO.png";
import OUYEB_MARCA from "../assets/images/ouyemarca.png";
import CASU from "../assets/images/CASU.png";

// Importar imágenes de productos Sport
import SPORTONE from "../assets/images/SPORTONE.png";
import SPORT2 from "../assets/images/SPORT2.png";
import SPORT3 from "../assets/images/SPORT3.png";
import SPORT4 from "../assets/images/SPORT 4.png";
import SPORT5 from "../assets/images/SPORT5.png";
import SPOT6 from "../assets/images/SPOT6.png";
import SPOR4 from "../assets/images/SPOR4.png";
import SPORT7 from "../assets/images/SPORT7.png";
import SPORT8 from "../assets/images/SPORT8.png";
import SPORT9 from "../assets/images/sport9.png";
import SPORT10 from "../assets/images/sport10.png";
import SPORT11 from "../assets/images/SPORT11.png";

export default function Sport() {
  return (
    <div className="page-sport">

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
        <p className="texto-catalogo">CAPS SPORT</p>
      </div>

      <div className="linea"></div>

      {/* Círculos */}
      <div className="circles">
        <div className="circle">
          <a href="/ouyeb"><img src={OUYEB_MARCA} alt="OUYE-B" /></a>
        </div>
        <div className="circle">
          <a href="/casual"><img src={CASU} alt="CASUAL" /></a>
        </div>
      </div>

      <div className="linea"></div>

      {/* Productos */}
      <div className="grid" id="gorras">
        <div className="col1">
          <div className="box alto produc">
            <img src={SPORTONE} alt="Gorra sport 1" />
            <p>$250 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={SPORT2} alt="Gorra sport 2" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={SPORT3} alt="Gorra sport 3" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={SPORT4} alt="Gorra sport 4" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
        </div>
        <div className="col2">
          <div className="box alto produc">
            <img src={SPORT5} alt="Gorra sport 5" />
            <p>$280 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={SPOT6} alt="Gorra sport 6" />
            <p>$270 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={SPOR4} alt="Gorra sport 7" />
            <p>$270 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={SPORT7} alt="Gorra sport 8" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
        </div>
        <div className="col3">
          <div className="box medio produc">
            <img src={SPORT8} alt="Gorra sport 9" />
            <p>$260 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box medio produc">
            <img src={SPORT9} alt="Gorra sport 10" />
            <p>$290 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box medio produc">
            <img src={SPORT10} alt="Gorra sport 11" />
            <p>$240 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box medio produc">
            <img src={SPORT11} alt="Gorra sport 12" />
            <p>$310 MXN</p>
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