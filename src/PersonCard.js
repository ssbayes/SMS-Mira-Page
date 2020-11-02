import React from "react";
import ReactDOM from "react-dom";
import mira2 from "./images/mira-2.jpg";

const PersonCard = (props) => {
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">
            <a>{props.tagline}</a>
          </div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
