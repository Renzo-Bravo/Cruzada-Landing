import fediap from "@/assets/fediap/fediap-logo.png"
import Gaurdapampa from "../guardapampa/Guardapampa.jsx";
import Line from "../line/Line.jsx";
import "./Info.css";

export default function Info() {
    return (
        <section className="info-section" id="info-id">
            <Gaurdapampa />
            <img src={fediap} alt="Fedial" className="fediap" />
            <p className="text">Las Jornadas Regionales de FEDIAP Destinado a docentes y técnicos de escuelas agrotécnicas de todo el país, durante tres días intensivos se realizarán actividades de exposición de experiencias, presentación de casos, disertaciones y networking.</p>
            <Line />
        </section>
    );
}
