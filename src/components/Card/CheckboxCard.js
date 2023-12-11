import React from "react";
import "./CheckboxCard.css";
import TickCircle from "../../assets/icons/tick-circle.svg";
function CheckboxCard({ image, selected, onclick, name, heading, content }) {
  return (
    <div
      className={`col-12 col-md-4 p-3 plan-card ${selected ? "selected" : ""}`}
      onClick={() => onclick(name)}
    >
      <div className="d-flex justify-content-end">
        {selected ? (
          <img src={TickCircle} className="checkmark" alt="TickCircle" />
        ) : (
          <span className="checkmark"></span>
        )}
      </div>
      <img src={image} alt="TeamWorkRafiki1" />
      <div className="content">
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default CheckboxCard;
