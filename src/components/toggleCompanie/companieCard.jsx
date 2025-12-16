import { useState } from "react";
import "./CompanieCard.css";

export default function CompanieCard({ title, text, price }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`companie-card ${open ? "open" : ""}`}>
      <button
        className="companie-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3>{title}</h3>
        <span className="toggle-icon">{open ? "−" : "+"}</span>
      </button>

      <div
        className="companie-content"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <p className="companie-text">{text}</p>
        <button className="precio">{price}</button>
      </div>
    </article>
  );
}
