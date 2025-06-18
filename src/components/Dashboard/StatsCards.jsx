import React from 'react';
import './StatsCards.css';
import {
  MdFlightTakeoff,
  MdAttachMoney,
  MdPeople,
  MdPendingActions,
} from 'react-icons/md';

const stats = [
  {
    label: 'Total Bookings',
    value: 1245,
    icon: <MdFlightTakeoff />,
    color: '#007bff',
  },
  {
    label: 'Revenue',
    value: '$87,560',
    icon: <MdAttachMoney />,
    color: '#28a745',
  },
  {
    label: 'Total Users',
    value: 534,
    icon: <MdPeople />,
    color: '#ffc107',
  },
  {
    label: 'Pending Flights',
    value: 23,
    icon: <MdPendingActions />,
    color: '#dc3545',
  },
];

const StatsCards = () => {
  return (
    <div className="stats-grid" data-aos="fade-up">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>
          <div className="stat-info">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
