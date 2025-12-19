import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Calendar.css";
import Guardapampa from "../guardapampa/Guardapampa.jsx";

export default function CalendarList() {
  const [calendar, setCalendar] = useState([]);
  const [openDay, setOpenDay] = useState(null);

  useEffect(() => {
    fetch("/data/calendar.json")
      .then((res) => res.json())
      .then((data) => {
        setCalendar(data.days);
        if (data.days.length > 0) setOpenDay(data.days[0].id);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleDay = (id) => {
    setOpenDay(openDay === id ? null : id);
  };

  return (
    <section className="calendar-section" id="calendar-id">
      <div className="calendar-header">
        <h2 className="title">Cronograma de actividades</h2>
        <div className="title-underline"></div>
      </div>

      <div className="calendar-container">
        {calendar.map((day) => (
          <div
            className={`day-card ${openDay === day.id ? "is-active" : ""}`}
            key={day.id}
          >
            <div className="day-title" onClick={() => toggleDay(day.id)}>
              <h3>{day.fecha}</h3>
              {openDay === day.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            <div className="events-wrapper">
              <div className="events-list">
                {day.eventos &&
                  day.eventos.map((event, index) => (
                    <div className="event-row" key={index}>
                      <div className="time-column">
                        <span className="time-badge">{event.hora}</span>
                      </div>

                      <div className="content-column">
                        <p className="event-activity">{event.actividad}</p>

                        {event.disertante && (
                          <p className="event-speaker">
                            <strong>Diserta:</strong> {event.disertante}
                          </p>
                        )}

                        {event.detalles && (
                          <div className="event-details">
                            {event.detalles.map((detalle, detailIx) => (
                              <div key={detailIx} className="detail-group">
                                <span className="detail-category">
                                  {detalle.categoria}
                                </span>
                                <ul className="detail-items">
                                  {detalle.items.map((item, itemIx) => (
                                    <li key={itemIx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {event.nota && (
                          <span className="event-note">*{event.nota}</span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Guardapampa />
    </section>
  );
}
