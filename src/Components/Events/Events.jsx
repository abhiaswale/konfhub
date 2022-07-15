import React from "react";
import EventCard from "../EventCard/EventCard";
import "./Events.css";
const Events = ({ eventData, eventCount }) => {
  return (
    <div className="events-grid">
      <div className="total-events">{eventCount}+ Events</div>
      <div className="events-card">
        {eventData.map((event) => (
          <EventCard key={event.event_id} data={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
