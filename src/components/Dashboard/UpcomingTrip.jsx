import React from 'react';
import './UpcomingTrip.css';
import { FaPlaneDeparture, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const UpcomingTrip = () => {
  const trip = {
    destination: 'Paris, France',
    departure: 'Lagos, Nigeria',
    date: 'July 20, 2025',
    time: '09:30 AM',
    airline: 'Air France AF777',
    terminal: 'Terminal 3',
    gate: 'B12',
  };

  return (
    <div className="upcoming-trip">
      <h3>Upcoming Trip</h3>
      <div className="trip-details">
        <div className="trip-icons">
          <FaPlaneDeparture className="trip-icon" />
        </div>
        <div className="trip-info">
          <p><FaMapMarkerAlt /> <strong>From:</strong> {trip.departure}</p>
          <p><FaMapMarkerAlt /> <strong>To:</strong> {trip.destination}</p>
          <p><FaCalendarAlt /> <strong>Date:</strong> {trip.date} at {trip.time}</p>
          <p><strong>Airline:</strong> {trip.airline}</p>
          <p><strong>Terminal:</strong> {trip.terminal} — <strong>Gate:</strong> {trip.gate}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTrip;
