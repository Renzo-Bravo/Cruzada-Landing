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
            <li>
              <a href="#hero">Inicio</a>
            </li>
            <li>
              <a href="#info-id">Evento</a>
            </li>
            <li>
              <a href="#speakers">Disertantes</a>
            </li>
            <li>
              <a href="#calendar-id">Cronograma</a>
            </li>
            <li>
              <a href="#form-id">Inscripción</a>
            </li>
            <li>
              <a href="#footer-id">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <p className="contact-footer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="telephone-footer"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            +54 9 11 0000 0000
          </p>
          <p className="contact-footer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="envelope-footer"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            fundacion@cruzadapatagonica.org{" "}
          </p>
          <div className="footer-social">
            <a
              href="https://www.youtube.com/@CruzadaPatagonica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h-.002c-2.136 0-4.27.016-6.405.064-.62.014-1.23.19-1.69.65-.46.46-.636 1.07-.65 1.69C.016 6.539 0 8.674 0 8.674s.016 2.136.064 4.27c.014.62.19 1.23.65 1.69.46.46 1.07.636 1.69.65 2.136.048 6.405.064 6.405.064s4.27-.016 6.405-.064c.62-.014 1.23-.19 1.69-.65.46-.46.636-1.07.65-1.69.048-2.136.064-4.27.064-4.27s-.016-2.136-.064-4.27c-.014-.62-.19-1.23-.65-1.69-.46-.46-1.07-.636-1.69-.65C12.321 2.015 10.187 2 8.051 2ZM6.5 11.5v-6l5 3-5 3Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/cruzadapatagonica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.83 0 5.56.01 4.7.05c-.86.04-1.45.17-1.97.37a3.9 3.9 0 0 0-1.41.92A3.9 3.9 0 0 0 .4 2.75c-.2.52-.33 1.11-.37 1.97C.01 5.56 0 5.83 0 8s.01 2.44.05 3.3c.04.86.17 1.45.37 1.97.2.52.48.96.92 1.41.45.45.89.72 1.41.92.52.2 1.11.33 1.97.37.86.04 1.13.05 3.3.05s2.44-.01 3.3-.05c.86-.04 1.45-.17 1.97-.37a3.9 3.9 0 0 0 1.41-.92c.45-.45.72-.89.92-1.41.2-.52.33-1.11.37-1.97.04-.86.05-1.13.05-3.3s-.01-2.44-.05-3.3c-.04-.86-.17-1.45-.37-1.97a3.9 3.9 0 0 0-.92-1.41A3.9 3.9 0 0 0 13.25.4c-.52-.2-1.11-.33-1.97-.37C10.44.01 10.17 0 8 0Zm0 3.9A4.1 4.1 0 1 1 3.9 8 4.1 4.1 0 0 1 8 3.9Zm4.27-.5a.96.96 0 1 1-.96-.96.96.96 0 0 1 .96.96Z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/fundacioncruzadapatagonica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049A8 8 0 1 0 7.14 16V10.41H5.11V8.05h2.03V6.28c0-2 1.2-3.11 3.02-3.11.88 0 1.8.16 1.8.16v1.98h-1.02c-1 0-1.31.62-1.31 1.26v1.48h2.23l-.36 2.36h-1.87V16A8 8 0 0 0 16 8.05Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="footer-copy">
        © 2025 Cruzada Patagónica – Todos los derechos reservados
      </div>
    </footer>
  );
}
