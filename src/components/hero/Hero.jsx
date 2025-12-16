import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          VII Jornadas Regionales de FEDIAP
          <span>CoFormación Docente de Escuelas Agrotécnicas</span>
        </h2>

        <h2 className="hero-subtitle">
          Educación agrotécnica y sustentabilidad: energías renovables y
          pedagogía en escuelas rurales
        </h2>

        <div className="hero-info">
          <p className="hero-date">30 y 31 de Marzo / 1 de Abril · 2026</p>
          <p className="hero-location">
            CEI San Ignacio · Junín de los Andes · Neuquén
          </p>
        </div>

        <a href="#joinSection" className="inscripcion-button">
          Inscribite ahora
        </a>
      </div>
    </section>
  );
}
