import Line from "../line/Line.jsx";
import "./Speakers.css";

export default function Speakers() {
  const speakers = [
    {
      nombre: "Nombre y Apellido",
      charla: "Título de charla",
    },
    {
      nombre: "Nombre y Apellido",
      charla: "Título de charla",
    },
    {
      nombre: "Nombre y Apellido",
      charla: "Título de charla",
    },
  ];

  return (
    <section className="speakers-section" id="speakers">
      <h2 className="title">Disertantes</h2>

      <div className="speakers-grid">
        {speakers.map((d, index) => (
          <div key={index} className="speakers-card">
            <div className="foto-placeholder">
              <i className="fas fa-user-alt"></i>
            </div>

            <h3>{d.nombre}</h3>
            <p>{d.charla}</p>
          </div>
        ))}
      </div>
        <Line />
    </section>
  );
}
