import React from 'react';
import './RecentBookings.css';

const bookings = [
  { id: '001', name: 'John Doe', date: '2025-06-10', amount: '$350' },
  { id: '002', name: 'Jane Smith', date: '2025-06-11', amount: '$420' },
  { id: '003', name: 'Mike Ross', date: '2025-06-12', amount: '$150' },
  { id: '004', name: 'Rachel Zane', date: '2025-06-13', amount: '$270' },
];

const RecentBookings = () => {
  return (
    <div className="recent-bookings">
      <h3>Recent Bookings</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.date}</td>
                <td>{b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;
