// src/Components/CRM/ClientProfile.jsx
import React from 'react';
import './CRMPage.css';

const ClientProfile = ({ client, onClose }) => {
  // Simulated booking history
  const bookings = [
    { id: 1, date: '2024-12-01', destination: 'Lagos → Abuja', status: 'Completed' },
    { id: 1, date: '2024-12-01', destination: 'Lagos → Abuja', status: 'Completed' },
    { id: 1, date: '2024-12-01', destination: 'Lagos → Abuja', status: 'Completed' },
    { id: 1, date: '2024-12-01', destination: 'Lagos → Abuja', status: 'Completed' },
    { id: 2, date: '2025-01-05', destination: 'Abuja → PH', status: 'Cancelled' },
    { id: 2, date: '2025-01-05', destination: 'Abuja → PH', status: 'Cancelled' },
    { id: 2, date: '2025-01-05', destination: 'Abuja → PH', status: 'Cancelled' },
     { id: 1, date: '2024-12-01', destination: 'Lagos → Abuja', status: 'Completed' },
    { id: 1, date: '2024-12-01', destination: 'Lagos → Abuja', status: 'Completed' },
    { id: 2, date: '2025-01-05', destination: 'Abuja → PH', status: 'Cancelled' },
    { id: 2, date: '2025-01-05', destination: 'Abuja → PH', status: 'Cancelled' },
  ];

  return (
    <div className="user-modal">
      <div className="modal-content wide">
        <h3>Client Profile: {client.name}</h3>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
        <p><strong>Joined:</strong> {new Date(client.joined).toLocaleDateString()}</p>

        <h4>Booking History</h4>
        <table>
          <thead>
            <tr><th>Date</th><th>Route</th><th>Status</th></tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.date}</td>
                <td>{b.destination}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={onClose} style={{ marginTop: '1rem' }} className='veiw'>Close</button>
      </div>
    </div>
  );
};

export default ClientProfile;
