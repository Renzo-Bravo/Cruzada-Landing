import "./Footer.css";
import Logo from "@/assets/logo/logo-en-blanco-sin-fondo.png";
import FondoFooter from "@/assets/design/food-bank_56.png";

export default function Footer() {
  return (
    <footer className="footer" id="footer-id">
      <div className="footer-head">
        <img src={FondoFooter} alt="Fondo Footer" className="fondo-img" />
      </div>

      <section className="footer-end">
        <div className="footer-column">
          <img src={Logo} alt="Cruzada Logo" className="footer-logo" />
          <p className="footer-description">
            Evento solidario para familias, empresas y organizaciones.
          </p>
        </div>

        <div className="footer-column">
          <h4>Secciones</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#evento"></a>Evento</li>
            <li><a href="#disertantes">Disertantes</a></li>
            <li><a href="#disertantes">Cronograma</a></li>
            <li><a href="#joinSection">Inscripción</a></li>
            <li><a href="#disertantes">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <p>📞 +54 9 11 0000 0000</p>
          <p>📩 fundacion@cruzadapatagonica.org </p>
          <div className="footer-social">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </section>

      <div className="footer-copy">
        © 2025 Cruzada Patagónica – Todos los derechos reservados
      </div>
    </footer>
  );
}

