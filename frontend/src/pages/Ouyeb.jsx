import React from "react";
import "../styles/Global.css";

// Importar imágenes del menú y logos
import LOGO from "../assets/images/LOGO.png";
import SPORT from "../assets/images/lort.png";
import CASU from "../assets/images/CASU.png"; // ← CORREGIDO: CASU en lugar de CASUAL

// Importar imágenes de productos - NOMBRES CORRECTOS
import GORRA1 from "../assets/images/GORRA1.png";
import GORRA2 from "../assets/images/GORRA2.png";
import GORRA3 from "../assets/images/GORRA 3.png";  // Con espacio
import GORRA4 from "../assets/images/GORRA 4.png";  // Con espacio
import GORRA5 from "../assets/images/GORRA 5.png";  // Con espacio
import GORRA6 from "../assets/images/GORRA 6.png";  // Con espacio
import GORRA7 from "../assets/images/GORRA 7.png";  // Con espacio
import GORRA8 from "../assets/images/GORRA 8.png";  // Con espacio
import GORRA9 from "../assets/images/GORRA 9.png";  // Con espacio
import GORRA10 from "../assets/images/GORRA 10.png"; // Con espacio
import GORRA11 from "../assets/images/GORRA 11.png"; // Con espacio
import GORRA12 from "../assets/images/GORRA 12.png"; // Con espacio
import GORRA13 from "../assets/images/GORRA 13.png"; // Con espacio
import GORRA14 from "../assets/images/GORRA 14.png"; // Con espacio

export default function Catalogo() {
  return (
    <div className="page-catalogo">

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
        <p className="texto-catalogo">CAPS OUYE-B</p>
      </div>

      <div className="linea"></div>

      {/* Círculos */}
      <div className="circles">
        <div className="circle">
          <a href="/sport"><img src={SPORT} alt="SPORT" /></a>
        </div>
        <div className="circle">
          <a href="/casual"><img src={CASU} alt="CASUAL" /></a> {/* ← CORREGIDO */}
        </div>
      </div>

      <div className="linea"></div>

      {/* Productos */}
      <div className="grid" id="gorras">
        
        {/* Columna 1 */}
        <div className="col1">
          <div className="box alto produc">
            <img src={GORRA1} alt="Gorra OUYE-B 1" />
            <p>$250 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA2} alt="Gorra OUYE-B 2" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA9} alt="Gorra OUYE-B 9" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA11} alt="Gorra OUYE-B 11" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA13} alt="Gorra OUYE-B 13" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="col2">
          <div className="box alto produc">
            <img src={GORRA3} alt="Gorra OUYE-B 3" />
            <p>$280 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA4} alt="Gorra OUYE-B 4" />
            <p>$270 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA10} alt="Gorra OUYE-B 10" />
            <p>$270 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA12} alt="Gorra OUYE-B 12" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box bajo produc">
            <img src={GORRA14} alt="Gorra OUYE-B 14" />
            <p>$300 MXN</p>
            <button>Compra</button>
          </div>
        </div>

        {/* Columna 3 */}
        <div className="col3">
          <div className="box medio produc">
            <img src={GORRA5} alt="Gorra OUYE-B 5" />
            <p>$260 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box medio produc">
            <img src={GORRA6} alt="Gorra OUYE-B 6" />
            <p>$290 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box medio produc">
            <img src={GORRA7} alt="Gorra OUYE-B 7" />
            <p>$240 MXN</p>
            <button>Compra</button>
          </div>
          <div className="box medio produc">
            <img src={GORRA8} alt="Gorra OUYE-B 8" />
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