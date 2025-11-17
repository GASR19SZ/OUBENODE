import React from "react";
import "../styles/Global.css";

// Importar imágenes del menú
import ENCUESTA_IMG from "../assets/images/ENCUESTA.png";
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA_IMG from "../assets/images/ENTREGA.png";

export default function Novedades() {
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
            <li><a href="/menu">Inicio</a></li>
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
        {/* LOGO DE LA SECCIÓN */}
        <div className="contenedor-imagen-texto">
          <img src={NOVEDADES} alt="Novedades de Ouye-B Hats" />
          <p className="texto-catalogo">NOVEDADES</p>
        </div>

        <div className="linea"></div>

        {/* MENÚ DE CÍRCULOS */}
        <div className="circles">
          <div className="circle">
            <a href="/menu" aria-label="Ir a Inicio">
              <img src={INICIO} alt="Inicio" />
            </a>
          </div>
          <div className="circle">
            <a href="/catalogo" aria-label="Ir a Catálogo">
              <img src={CATALOGO} alt="Catálogo" />
            </a>
          </div>
          <div className="circle">
            <a href="/personalizar" aria-label="Ir a Personalizar">
              <img src={PERSONALIZAR} alt="Personalizar" />
            </a>
          </div>
          <div className="circle">
            <a href="/contacto" aria-label="Ir a Contacto">
              <img src={CONTACTO} alt="Contacto" />
            </a>
          </div>
          <div className="circle">
            <a href="/devoluciones" aria-label="Ir a Devoluciones">
              <img src={DEVOLUCIONES} alt="Devoluciones" />
            </a>
          </div>
          <div className="circle">
            <a href="/entrega" aria-label="Ir a Entrega">
              <img src={ENTREGA_IMG} alt="Entrega" />
            </a>
          </div>
          <div className="circle">
            <a href="/encuesta" aria-label="Ir a Encuesta">
              <img src={ENCUESTA_IMG} alt="Encuesta" />
            </a>
          </div>
        </div>

        <div className="linea"></div>

        {/* SECCIÓN 1 - ÚLTIMAS NOVEDADES */}
        <section className="seccion-novedades">
          <h2>Últimas novedades</h2>
          <p>Conoce los modelos más recientes en gorras exclusivas. ¡Solo por tiempo limitado!</p>

          <div className="productos-grid">
            <div className="producto">
              <img src="/img/gorra1.jpg" alt="Gorra limitada" />
              <h3>Gorra Urban Edition</h3>
              <p>$399 MXN</p>
            </div>

            <div className="producto">
              <img src="/img/gorra2.jpg" alt="Gorra sport" />
              <h3>Gorra Sport Fit</h3>
              <p>$349 MXN</p>
            </div>

            <div className="producto">
              <img src="/img/gorra3.jpg" alt="Gorra casual" />
              <h3>Gorra Casual Summer</h3>
              <p>$289 MXN</p>
            </div>
          </div>
        </section>

        <div className="linea"></div>

        {/* SECCIÓN 2 - LO NUEVO */}
        <section className="seccion-novedades">
          <h2>🆕 Lo Nuevo</h2>
          <p>Descubre las gorras recién llegadas, ¡únicas y con diseños de temporada!</p>

          <div className="productos-grid">
            <div className="producto">
              <img src="/img/gorra_nueva1.jpg" alt="Gorra moderna" />
              <h3>Gorra Modern Style</h3>
              <p>$429 MXN</p>
            </div>

            <div className="producto">
              <img src="/img/gorra_nueva2.jpg" alt="Gorra negra" />
              <h3>Gorra Negra Clásica</h3>
              <p>$389 MXN</p>
            </div>

            <div className="producto">
              <img src="/img/gorra_nueva3.jpg" alt="Gorra neón" />
              <h3>Gorra Edición Neón</h3>
              <p>$459 MXN</p>
            </div>
          </div>
        </section>

        <div className="linea"></div>

        {/* SECCIÓN 3 - OFERTAS */}
        <section className="seccion-novedades">
          <h2>🔥 Ofertas</h2>
          <p>Aprovecha nuestras promociones por tiempo limitado. ¡No te las pierdas!</p>

          <div className="productos-grid">
            <div className="producto">
              <img src="/img/gorra_oferta1.jpg" alt="Oferta 1" />
              <h3>Gorra Classic Beige</h3>
              <p><del>$379</del> $299 MXN</p>
            </div>

            <div className="producto">
              <img src="/img/gorra_oferta2.jpg" alt="Oferta 2" />
              <h3>Gorra Verde Militar</h3>
              <p><del>$399</del> $319 MXN</p>
            </div>

            <div className="producto">
              <img src="/img/gorra_oferta3.jpg" alt="Oferta 3" />
              <h3>Gorra Summer Blue</h3>
              <p><del>$349</del> $279 MXN</p>
            </div>
          </div>
        </section>

        <div className="linea"></div>

        {/* SECCIÓN 4 - PRÓXIMAMENTE */}
        <section className="seccion-novedades">
          <h2>⏳ Próximamente</h2>
          <p>¡Estamos preparando algo especial para ti! Muy pronto nuevas gorras estarán disponibles.</p>

          <div className="productos-grid">
            <div className="producto">
              <img src="/img/gorra_proximamente1.jpg" alt="Próximamente" />
              <h3>Nuevo diseño exclusivo</h3>
              <p><em>Disponible muy pronto</em></p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>© 2025 Ouye-B Hats. Todos los derechos reservados.</p>
          <p>
            <a href="#">Instagram</a> | <a href="#">Facebook</a> |{" "}
            <a href="#">TikTok</a> | <a href="#">WhatsApp</a>
          </p>
        </footer>
      </div>
    </div>
  );
}