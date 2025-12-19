import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Guardapampa from "../guardapampa/Guardapampa.jsx";
import "./Gratitude.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Sponsors Agua",
      logos: [
        { src: "/src/assets/sponsors/inta.png", alt: "Inta" },
      ],
    },
    {
      title: "Sponsors Tierra",
      logos: [
        {
          src: "/src/assets/sponsors/sociedad-rural.png",
          alt: "Sociedad Rural",
        },
        {
          src: "/src/assets/sponsors/potenciar-solidario.png",
          alt: "Potenciar Solidario",
        },
      ],
    },
    {
      title: "Sponsors Fuego",
      logos: [
        {
          src: "/src/assets/sponsors/Imagotipo Crecer vertical (verde institucional sobre fondo blanco).jpg",
          alt: "Crecer",
        },
        {
          src: "/src/assets/sponsors/paralelo sur logo png (1) (1).png",
          alt: "Paralelo Sur",
        },
      ],
    },
  ];

  return (
    <section className="gratitude-section" id="gratitude-id">
      <Guardapampa />
      <h2 className="title">Agradecimientos</h2>
      <div className="title-underline"></div>

      <div className="menu-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`menu-item ${activeIndex === index ? "is-open" : ""}`}
          >
            <button className="menu-btn" onClick={() => toggleAccordion(index)}>
              <span>{section.title}</span>
              {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            <div
              className="menu-content"
              style={{ maxHeight: activeIndex === index ? "1000px" : "0px" }}
            >
              <ul className="logo-grid">
                {section.logos.map((logo, i) => (
                  <li key={i}>
                    <img
                      className="sponsor-logo"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
