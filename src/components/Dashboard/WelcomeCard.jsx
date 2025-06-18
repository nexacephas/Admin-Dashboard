import React from 'react';
import './WelcomeCard.css';

const WelcomeCard = () => {
  const user = {
    name: 'Jola',
    role: 'Administrator',
  };

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? 'Good morning'
      : currentHour < 18
      ? 'Good afternoon'
      : 'Good evening';

  return (
    <div className="welcome-card" data-aos="fade-up">
      <div className="welcome-left">
        <h2>{`${greeting}, ${user.name} 👋`}</h2>
        <p>Welcome back to your dashboard. You have full control here!</p>
      </div>
      <div className="welcome-right">
        <span className="role-badge">{user.role}</span>
      </div>
    </div>
  );
};

export default WelcomeCard;
