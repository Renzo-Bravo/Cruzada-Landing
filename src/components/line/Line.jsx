import "./Line.css";

export default function Line({ width = "80%", margin = "2.5rem" }) {
  return (
    <div
      className="line"
      style={{
        width,
        margin,
      }}
      aria-hidden="true"
    />
  );
}
