import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import "./Gratitude.css";

export default function Accordion() {
  const [openSponsors, setOpenSponsors] = useState(false);
  const [openAuspician, setOpenAuspician] = useState(false);
  const [openInstituciones, setOpenInstituciones] = useState(false);

  return (
    <section className="gratitude-section" id="gratitude-id">
      <div>
        <h2 className="title">Agradecimientos</h2>
      </div>
      <div className="menu-container">
        <div className="menuDesplegable">
          <button
            className="menu-btn"
            onClick={() => setOpenSponsors(!openSponsors)}
          >
            Sponsors Fuego {openSponsors ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openSponsors && (
            <div className="menu-content">
              <ul>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/help-argentina.png"
                    alt="Help Argentina logo"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/sociedad-rural.png"
                    alt="Sociedad Rural logo"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/potenciar-solidario.png"
                    alt="Potenciar Solidario logo"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/inta.png"
                    alt="Inta logo"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/Imagotipo Crecer vertical (verde institucional sobre fondo blanco).jpg"
                    alt="Crecer logo"
                  />
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="menuDesplegable">
          <button
            className="menu-btn"
            onClick={() => setOpenAuspician(!openAuspician)}
          >
            Sponsors Tierra {openAuspician ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openAuspician && (
            <div className="menu-content">
              <ul>
                <li>Auspiciante 1</li>
                <li>Auspiciante 2</li>
                <li>Auspiciante 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="menuDesplegable">
          <button
            className="menu-btn"
            onClick={() => setOpenInstituciones(!openInstituciones)}
          >
            Sponsors Agua{" "}
            {openInstituciones ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
          </button>

          {openInstituciones && (
            <div className="menu-content">
              <ul>
                <li>Institución 1</li>
                <li>Institución 2</li>
                <li>Institución 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
