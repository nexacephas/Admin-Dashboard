import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        <button className="action-btn">New Booking</button>
        <button className="action-btn">Generate Report</button>
        <button className="action-btn">Contact Support</button>
        <button className="action-btn">Settings</button>
      </div>
    </div>
  );
};

export default QuickActions;
