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
            Sponsors {openSponsors ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openSponsors && (
            <div className="menu-content">
              <ul>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/sponsorLogo1.png"
                    alt="Sponsor 1"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/sponsorLogo2.png"
                    alt="Sponsor 2"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/sponsorLogo3.png"
                    alt="Sponsor 3"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/sponsorLogo4.png"
                    alt="Sponsor 4"
                  />
                </li>
                <li>
                  <img
                    className="sponsorLogo"
                    src="./src/assets/sponsors/Imagotipo Crecer vertical (verde institucional sobre fondo blanco).jpg"
                    alt="Sponsor Logo 5"
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
            Auspician {openAuspician ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
            Instituciones Aliadas{" "}
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
