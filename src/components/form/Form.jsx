import Guardapampa from "../guardapampa/Guardapampa.jsx";
import Line from "../line/Line.jsx";
import logo from "@/assets/logo/logo-en-blanco-sin-fondo.png";
import "./Form.css";

export default function Form() {
  return (
    <section className="form-section" id="form-id">
      <Guardapampa />

      <div className="form-inner">
        <h2 className="title">Formulario de inscripción</h2>

        <p className="text">
          Únete a nosotros en este encuentro transformador. La inscripción
          incluye todas las conferencias, talleres, materiales y refrigerios.
        </p>

        <div className="date-price">
          <p>Costo por persona</p>
          <p>$150.000</p>
        </div>

        <div className="form-wrapper">
          <div className="form-image">
            <img src={logo} alt="Logo Cruzada Patagónica" />
          </div>

          <div className="form-card">
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Ej: Juan" required />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  placeholder="Ej: Pérez"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>

              <button type="submit" className="btn-enviar">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      <Line />
    </section>
  );
}
