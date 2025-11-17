import React from "react";
import "../styles/Global.css";

// Importar imágenes
import ENCUESTA_IMG from "../assets/images/ENCUESTA.png";
import INICIO from "../assets/images/INICIO.png";
import CATALOGO from "../assets/images/CATALOGO.png";
import NOVEDADES from "../assets/images/NOVEDADES.png";
import PERSONALIZAR from "../assets/images/PERSONALIZAR.png";
import CONTACTO from "../assets/images/CONTACTO.png";
import DEVOLUCIONES from "../assets/images/DEVOLUCIONES.png";
import ENTREGA_IMG from "../assets/images/ENTREGA.png"; // Agregar esta importación

export default function Entrega() {
  const rastrearPaquete = (e) => {
    e.preventDefault();
    const guia = e.target.guia.value.trim();
    if (guia !== "") {
      const url = `https://www.dhl.com/mx-es/home/rastreo.html?tracking-id=${guia}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="container">

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
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/devoluciones">Devoluciones</a></li>
            <li><a href="/entrega">Entrega</a></li>
            <li><a href="/encuesta">Encuesta</a></li>
            <li><a href="/logout">Cerrar sesión</a></li>
          </ul>
        </nav>
      </div>

      {/* Logo - CAMBIADO */}
      <div className="contenedor-imagen-texto">
        <img src={ENTREGA_IMG} alt="Imagen de gorras" />
        <p className="texto-catalogo">ENTREGA</p>
      </div>

      <div className="linea"></div>

      {/* Círculos de menú - TODOS CAMBIADOS */}
      <div className="circles">
        <div className="circle"><a href="/menu"><img src={INICIO} alt="Inicio" /></a></div>
        <div className="circle"><a href="/catalogo"><img src={CATALOGO} alt="Catálogo" /></a></div>
        <div className="circle"><a href="/novedades"><img src={NOVEDADES} alt="Novedades" /></a></div>
        <div className="circle"><a href="/personalizar"><img src={PERSONALIZAR} alt="Personalizar" /></a></div>
        <div className="circle"><a href="/contacto"><img src={CONTACTO} alt="Contacto" /></a></div>
        <div className="circle"><a href="/devoluciones"><img src={DEVOLUCIONES} alt="Devoluciones" /></a></div>
        <div className="circle"><a href="/encuesta"><img src={ENCUESTA_IMG} alt="Encuesta" /></a></div>
      </div>

      <div className="linea"></div>

      {/* Sección de entrega */}
      <section className="entrega">
        <h2>Información de Entrega</h2>
        <p>En Ouye-B Hats trabajamos para que recibas tu gorra lo más rápido posible y en perfectas condiciones. Aquí te explicamos cómo funcionan nuestras entregas.</p>

        <h3>Tipos de envío</h3>
        <ul>
          <li><strong>Envío estándar:</strong> de 3 a 5 días hábiles (una vez confirmado el pago).</li>
          <li><strong>Envío exprés:</strong> de 1 a 2 días hábiles (disponible con costo adicional).</li>
          <li><strong>Entrega local:</strong> disponible en ciertas zonas de CDMX y Estado de México.</li>
        </ul>

        <h3>Costo de envío</h3>
        <p>El envío tiene un costo fijo de $99 MXN. ¡Envío gratis en compras mayores a $999 MXN!</p>

        <h3>Empresas de paquetería</h3>
        <p>Trabajamos con DHL y Estafeta. Al enviar tu pedido, recibirás un número de guía para rastrear tu paquete.</p>

        <h3>¿Dónde entregamos?</h3>
        <p>Realizamos envíos a toda la República Mexicana. Por ahora, no contamos con envíos internacionales.</p>

        <h3>¿Tienes dudas sobre tu entrega?</h3>
        <p>Escríbenos a <a href="mailto:envios@ouyebhats.com">envios@ouyebhats.com</a> o vía WhatsApp al +52 55 1234 5678.</p>
      </section>

      <div className="linea"></div>

      {/* Rastreo */}
      <section className="rastreo">
        <h3>📦 ¿Dónde va mi paquete?</h3>
        <p>Si ya realizaste tu compra y tienes tu número de guía, puedes rastrear tu pedido aquí:</p>

        <form onSubmit={rastrearPaquete}>
          <label htmlFor="guia">Ingresa tu número de guía:</label>
          <input type="text" id="guia" name="guia" placeholder="Ej. 1234567890" required />
          <button type="submit">Rastrear</button>
        </form>

        <p><strong>O selecciona la paquetería:</strong></p>
        <ul>
          <li><a href="https://www.dhl.com/mx-es/home/rastreo.html" target="_blank" rel="noreferrer">Rastrear en DHL</a></li>
          <li><a href="https://www.estafeta.com/Herramientas/Rastreo" target="_blank" rel="noreferrer">Rastrear en Estafeta</a></li>
        </ul>
      </section>

      <div className="linea"></div>

      {/* Footer */}
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
  );
}