//import Styles
import "./ResultCard.css";

export default function ResultCard({ info }) {
  let purpose = info.purpose === null ? "" : info.purpose;
  return (
    <>
      <div className="result-card">
        <h3>{info.name}</h3>
        <p>{purpose}</p>
        <p>{info.phone_number}</p>
        <p>
          {info.address} {info.state} {info.city}
        </p>
        <p>
          Find more : <a href={info.website}>{info.name}</a>
        </p>
      </div>
    </>
  );
}
