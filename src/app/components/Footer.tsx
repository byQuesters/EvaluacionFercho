// /components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer 
      role="contentinfo" 
      className="footer-component"
      aria-labelledby="footer-heading"
    >
      <div className="container">
        <h2 id="footer-heading" className="sr-only">Pie de página</h2>

        <div className="footer-grid">
          <div className="footer-section">
            <h3>Sobre los ODS</h3>
            <p>
              Los Objetivos de Desarrollo Sostenible son un llamado universal a la acción para poner fin a la pobreza, proteger el planeta y garantizar que todas las personas gocen de paz y prosperidad.
            </p>
          </div>

          <div className="footer-section">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/tema">Temas ODS</a></li>
              <li><a href="/cv">CV</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Accesibilidad</h3>
            <ul>
              <li><a href="/accesibilidad">Declaración de accesibilidad</a></li>
              <li><a href="/mapa-sitio">Mapa del sitio</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} - Sitio sobre ODS. Desarrollado con accesibilidad en mente.</p>
        </div>
      </div>
    </footer>
  );
}
