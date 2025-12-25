import { useState } from "react";
import "./CompanieCard.css";

export default function CompanieCard({ title, text, price }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`glass-card ${open ? "is-open" : ""}`}>
      <div className="card-header" onClick={() => setOpen(!open)}>
        <h3 className="card-title">{title}</h3>
        <span className="toggle-icon">{open ? "−" : "+"}</span>
      </div>

      <div
        className="card-content"
        style={{ height: open ? "350px" : "0px" }}
      >
        <div className="content-body" style={{ height: "350px"}}>
          <p className="description-text">{text}</p>
          <button className="price-button">{price}</button>
        </div>
      </div>
    </article>
  );
}
