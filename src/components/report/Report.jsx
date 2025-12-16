import "./Report.css";

export default function Report() {
  return (
    <section className="contact-section" id="contact-id">
      <div className="ediciones">
        <div>
          <h2 className="title">Ediciones anteriores</h2>
        </div>
        <p className="text">
          Edición 2025 “Jornadas regionales de FEDIAP Inteligencia Artificial”
        </p>
        <span>Fuentes:</span>
        <a href="#">LINK1</a>
        <a href="#">LINK2</a>
      </div>

      <div className="contacto">
        <h2 className="title">Contacto</h2>
        <p className="text">Dudas, consultas y más información:</p>

        <div className="contact-item">
          <a href="mailto:sergioruemente@cruzadapatatonica.org">
            sergiorumente@cruzadapatatonica.org
          </a>
        </div>

        <div className="contact-item">
          <a href="tel:+541155770930">+54 11 55770930</a>
        </div>
      </div>
    </section>
  );
}
