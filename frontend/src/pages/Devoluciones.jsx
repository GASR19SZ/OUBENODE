import React from "react";
import "../styles/Global.css";

// Importar imágenes del menú
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import ENTREGA from "../assets/images/ENTREGA.png";
import ENCUESTA from "../assets/images/ENCUESTA.png";
import DEVOLUCIONES_IMG from "../assets/images/DEVOLUCIONES.png";

export default function Devoluciones() {
  return (
    <div>

      {/* Menú hamburguesa */}
      <div className="menu-hamburguesa">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="hamburger" role="button">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav-menu">
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

        {/* LOGO */}
        <div className="contenedor-imagen-texto">
          <img src={DEVOLUCIONES_IMG} alt="Imagen de gorras" />
          <p className="texto-catalogo">DEVOLUCIONES</p>
        </div>

        <div className="linea"></div>

        {/* CÍRCULOS */}
        <div className="circles">
          <div className="circle"><a href="/menu"><img src={INICIO} alt="Inicio" /></a></div>
          <div className="circle"><a href="/catalogo"><img src={CATALOGO} alt="Catálogo" /></a></div>
          <div className="circle"><a href="/novedades"><img src={NOVEDADES} alt="Novedades" /></a></div>
          <div className="circle"><a href="/personalizar"><img src={PERSONALIZAR} alt="Personalizar" /></a></div>
          <div className="circle"><a href="/contacto"><img src={CONTACTO} alt="Contacto" /></a></div>
          <div className="circle"><a href="/entrega"><img src={ENTREGA} alt="Entrega" /></a></div>
          <div className="circle"><a href="/encuesta"><img src={ENCUESTA} alt="Encuesta" /></a></div>
        </div>

        <div className="linea"></div>

        {/* SECCIÓN DEVOLUCIONES */}
        <section className="devoluciones">
          <h2>Política de Devoluciones</h2>
          <p>
            En Ouye-B Hats, queremos que estés 100% satisfecho con tu compra.
            Si no estás contento con tu gorra, revisa nuestra política de devoluciones.
          </p>

          <h3>¿En qué casos puedo hacer una devolución?</h3>
          <ul>
            <li>Recibiste un producto incorrecto (modelo, color o talla equivocada).</li>
            <li>El producto llegó dañado o defectuoso.</li>
            <li>Tu pedido llegó incompleto.</li>
          </ul>

          <h3>¿En qué casos no aplica la devolución?</h3>
          <ul>
            <li>Gorras personalizadas a tu gusto.</li>
            <li>Productos usados, sin empaque o sin etiquetas.</li>
            <li>Solicitudes hechas después de 7 días naturales desde la entrega.</li>
          </ul>

          <h3>¿Cómo hago una devolución?</h3>
          <ol>
            <li>Envía un correo a <strong>devoluciones@ouyebhats.com</strong> o escríbenos por WhatsApp.</li>
            <li>Incluye tu nombre completo, número de pedido, motivo y fotos del producto.</li>
            <li>Nos comunicaremos contigo en máximo 48 horas.</li>
          </ol>

          <h3>Reembolsos o cambios</h3>
          <p>
            Una vez recibamos y revisemos el producto, se emitirá un reembolso o cambio en un máximo de 5 días hábiles.
          </p>

          <h3>Contacto</h3>
          <p>
            ¿Tienes dudas? Escríbenos a  
            <a href="mailto:devoluciones@ouyebhats.com">devoluciones@ouyebhats.com</a>  
            o vía WhatsApp al +52 55 1234 5678.
          </p>
        </section>

        {/* FOOTER */}
        <footer>
          <p>© 2025 Ouye-B Hats. Todos los derechos reservados.</p>
          <p>
            <a href="#">Instagram</a> |
            <a href="#">Facebook</a> |
            <a href="#">TikTok</a> |
            <a href="#">WhatsApp</a>
          </p>
        </footer>

      </div>
    </div>
  );
}