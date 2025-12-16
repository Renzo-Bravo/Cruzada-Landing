import CompanieCard from "../toggleCompanie/companieCard.jsx";
import Line from "../line/Line.jsx";
import "./Companie.css";

export default function Empresas() {
  return (
    <section className="companie-section" id="companie-id">
      <h2 className="title">Empresas</h2>

      <div className="container">
        <CompanieCard
          title="Sponsor Agua"
          price="$3.500.000"
          text="Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing
            Posibilidad de promoción de acciones dentro de las Jornadas Fediap
            2026"
        />

        <CompanieCard
          title="Sponsor Tierra"
          price="$2.500.000"
          text="Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing"
        />

        <CompanieCard
          title="Sponsor Fuego"
          price="$1.500.000"
          text=" Proyección de logo durante el evento. Presencia del logo en redes
            sociales, en el newsletter institucional y en la landing"
        />
      </div>

      <Line />

      <h2 className="title">Becas</h2>

      <div className="container-becas">
        <CompanieCard
          title="Becas Alimentación"
          price="$120.000"
          text="Gastos de almuerzo, merienda y cena para 3 días..."
        />

        <CompanieCard
          title="Becas Pernocte"
          price="$45.000"
          text="Gastos de alojamiento y desayuno para 3 días..."
        />
      </div>
    </section>
  );
}
