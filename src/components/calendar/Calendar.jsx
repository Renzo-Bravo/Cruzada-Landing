import { useEffect, useState } from "react";
import "./Calendar.css";
import Guardapampa from "../guardapampa/Guardapampa.jsx";

export default function CalendarList() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    fetch("/data/calendar.json")
      .then((res) => res.json())
      .then((data) => setCalendar(data.days))
      .catch((err) => console.error("Error cargando cronograma:", err));
  }, []);

  return (
    <section className="calendar-section" id="calendar-id">
      <div className="calendar-header">
        <h2 className="title">Cronograma de actividades</h2>
        <div className="title-underline"></div>
      </div>

      <div className="calendar-container">
        {calendar.map((day) => (
          <div className="day-card" key={day.id}>
            <div className="day-title">
              <h3>{day.fecha}</h3>
            </div>
            
            <div className="events-list">
              {day.eventos && day.eventos.map((evento, index) => (
                <div className="event-row" key={index}>
                  <div className="time-column">
                    <span className="time-badge">{evento.hora}</span>
                  </div>
                  <div className="content-column">
                    <p className="event-activity">{evento.actividad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Guardapampa />
    </section>
  );
}