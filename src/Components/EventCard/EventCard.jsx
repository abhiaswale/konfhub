import React from "react";
import eventImage from "../assets/event-card.png";
import cardIcon from "../assets/icon.svg";
import mic from "../assets/mic.svg";
import info from "../assets/info.svg";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <div className="card">
      <section className="card-symbol">
        <img src={cardIcon} alt="icon"></img>
      </section>
      <section className="event-image">
        <img src={eventImage} alt="event-hall"></img>
      </section>
      <div className="event-details">
        <h4>{props.data.name}</h4>
        <div className="card-bottom">
          <div className="section1">
            <img src={mic} alt="mic"></img>
            <p>Raddison Blue</p>
          </div>
          <div className="section1">
            <img src={info} alt="info"></img>
            {props.data.is_free ? <p>Free |</p> : <p>Paid |</p>}
            {props.data.is_virtual ? <p> Online</p> : <p> Offline</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
