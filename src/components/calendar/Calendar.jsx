import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import "./Calendar.css";
import Guardapampa from "../guardapampa/Guardapampa.jsx";

export default function Accordion() {
  const [openSponsors, setOpenSponsors] = useState(false);
  const [openAuspician, setOpenAuspician] = useState(false);
  const [openInstituciones, setOpenInstituciones] = useState(false);

  return (
    <section className="calendar-section" id="calendar-id">
      <div>
        <h2 className="title">Cronograma de actividades</h2>
      </div>
      <div className="menu-container">
        <div className="menuDesplegable">
          <button
            className="menu-btn"
            onClick={() => setOpenSponsors(!openSponsors)}
          >
            30 - Abril {openSponsors ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openSponsors && (
            <div className="menu-content">
              <ul>
                <li>10</li>
                <li>11</li>
                <li>12</li>
              </ul>
            </div>
          )}
        </div>

        <div className="menuDesplegable">
          <button
            className="menu-btn"
            onClick={() => setOpenAuspician(!openAuspician)}
          >
            01 - Marzo {openAuspician ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openAuspician && (
            <div className="menu-content">
              <ul>
                <li>13</li>
                <li>14</li>
                <li>15</li>
              </ul>
            </div>
          )}
        </div>

        <div className="menuDesplegable">
          <button
            className="menu-btn"
            onClick={() => setOpenInstituciones(!openInstituciones)}
          >
            02 - Marzo{" "}
            {openInstituciones ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
          </button>

          {openInstituciones && (
            <div className="menu-content">
              <ul>
                <li>16</li>
                <li>17</li>
                <li>18</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Guardapampa />
    </section>
  );
}
