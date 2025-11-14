//import Styles
import "./Card.css";
export default function Card({ aLink, aText, pText }) {
  return (
    <>
      <div className="card">
        <h2>{aText}</h2>
        <p>{pText}</p>
        <p>
          {" "}
          Find more :{" "}
          <a href={aLink} target="_blank">
            {" "}
            {aText}{" "}
          </a>{" "}
        </p>
      </div>
    </>
  );
}
