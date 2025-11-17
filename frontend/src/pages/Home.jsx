import React, { useState } from "react";
import "../styles/Global.css";

export default function Login() {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [mostrarForm, setMostrarForm] = useState("login"); // login | register

  // Bloquear accesos si no está logueado
  const bloquearSiNoLogueado = (e) => {
    if (!estaLogueado) {
      e.preventDefault();
      alert("Debes iniciar sesión para acceder a esta sección.");
    }
  };

  // Enviar login (aquí después conectas tu backend)
  const enviarLogin = (e) => {
    e.preventDefault();
    const datos = new FormData(e.target);
    const email = datos.get("email");
    const pass = datos.get("contrasena");

    console.log("LOGIN:", email, pass);

    // Simular login existente
    setEstaLogueado(true);
    alert("Sesión iniciada (simulado).");
  };

  // Enviar registro
  const enviarRegistro = (e) => {
    e.preventDefault();
    const datos = new FormData(e.target);

    const pass1 = datos.get("contrasena");
    const pass2 = datos.get("confirmar");

    if (pass1 !== pass2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("REGISTRO:", datos.get("nombre"), datos.get("email"));
    alert("Cuenta creada (simulado).");
    setMostrarForm("login");
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
            <li><a href="/menu" onClick={bloquearSiNoLogueado}>Inicio</a></li>
            <li><a href="/catalogo" onClick={bloquearSiNoLogueado}>Catálogo</a></li>
            <li><a href="/novedades" onClick={bloquearSiNoLogueado}>Novedades</a></li>
            <li><a href="/personalizar" onClick={bloquearSiNoLogueado}>Personalizar</a></li>
            <li><a href="/devoluciones" onClick={bloquearSiNoLogueado}>Devoluciones</a></li>
            <li><a href="/entrega" onClick={bloquearSiNoLogueado}>Entrega</a></li>
            <li><a href="/encuesta" onClick={bloquearSiNoLogueado}>Encuesta</a></li>
            <li><a href="/logout">Cerrar sesión</a></li>
          </ul>
        </nav>
      </div>

      {/* Contenido */}
      <main className="container">

        {/* Logo */}
        <section className="logo">
          <img src="/img/LOGO.png" alt="Ouye-B Hats" />
        </section>

        <div className="linea"></div>

        {/* Menú de círculos vertical */}
        <div className="circles-vertical">
          <div className="circle"><a href="/menu" onClick={bloquearSiNoLogueado}><img src="/img/INICIO.png" alt="Inicio" /></a></div>
          <div className="circle"><a href="/catalogo" onClick={bloquearSiNoLogueado}><img src="/img/CATALOGO.png" alt="Catálogo" /></a></div>
          <div className="circle"><a href="/novedades" onClick={bloquearSiNoLogueado}><img src="/img/NOVEDADES.png" alt="Novedades" /></a></div>
          <div className="circle"><a href="/personalizar" onClick={bloquearSiNoLogueado}><img src="/img/PERSONALIZAR.png" alt="Personalizar" /></a></div>
          <div className="circle"><a href="/contacto" onClick={bloquearSiNoLogueado}><img src="/img/CONTACTO.png" alt="Contacto" /></a></div>
          <div className="circle"><a href="/devoluciones" onClick={bloquearSiNoLogueado}><img src="/img/DEVOLUCIONES.png" alt="Devoluciones" /></a></div>
          <div className="circle"><a href="/entrega" onClick={bloquearSiNoLogueado}><img src="/img/ENTREGA.png" alt="Entrega" /></a></div>
          <div className="circle"><a href="/encuesta" onClick={bloquearSiNoLogueado}><img src="/img/ENCUESTA.png" alt="Encuesta" /></a></div>
        </div>

        {/* FORMULARIOS */}
        <section className="contenedor">

          {mostrarForm === "login" && (
            <div className="formulario activo">
              <h2>Iniciar Sesión</h2>
              <form onSubmit={enviarLogin}>
                <input type="email" name="email" placeholder="Correo electrónico" required />
                <input type="password" name="contrasena" placeholder="Contraseña" required />
                <button type="submit">Entrar</button>
              </form>
              <div className="cambiar">
                ¿No tienes cuenta?{" "}
                <a href="#" onClick={() => setMostrarForm("register")}>Crear una cuenta</a>
              </div>
            </div>
          )}

          {mostrarForm === "register" && (
            <div className="formulario activo">
              <h2>Crear Cuenta</h2>
              <form onSubmit={enviarRegistro}>
                <input type="text" name="nombre" placeholder="Nombre completo" required />
                <input type="email" name="email" placeholder="Correo electrónico" required />
                <input type="password" name="contrasena" id="pass1" placeholder="Contraseña" required />
                <input type="password" name="confirmar" id="pass2" placeholder="Confirmar contraseña" required />
                <button type="submit">Registrarse</button>
              </form>
              <div className="cambiar">
                ¿Ya tienes cuenta?{" "}
                <a href="#" onClick={() => setMostrarForm("login")}>Iniciar sesión</a>
              </div>
            </div>
          )}

        </section>

        <div className="linea"></div>
      </main>

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
