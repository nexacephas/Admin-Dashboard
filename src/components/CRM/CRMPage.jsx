// src/Components/CRM/CRMPage.jsx
import React, { useState, useEffect } from 'react';
import './CRMPage.css';
import ClientProfile from './ClientProfile';
import ClientForm from './ClientForm';

const dummyClients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '08123456789', joined: '2024-09-01', bookings: 5 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', joined: '2025-02-15', bookings: 2 },
  { id: 3, name: 'Emeka O.', email: 'emeka@yahoo.com', phone: '08011223344', joined: '2025-05-09', bookings: 3 },
  { id: 3, name: 'Emeka O.', email: 'emeka@yahoo.com', phone: '08011223344', joined: '2025-05-09', bookings: 3 },
  { id: 3, name: 'Emeka O.', email: 'emeka@yahoo.com', phone: '08011223344', joined: '2025-05-09', bookings: 3 },
  { id: 3, name: 'Emeka O.', email: 'emeka@yahoo.com', phone: '08011223344', joined: '2025-05-09', bookings: 3 },
  { id: 3, name: 'Emeka O.', email: 'emeka@yahoo.com', phone: '08011223344', joined: '2025-05-09', bookings: 3 },
  { id: 3, name: 'Emeka O.', email: 'emeka@yahoo.com', phone: '08011223344', joined: '2025-05-09', bookings: 3 },
];

const CRMPage = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editClient, setEditClient] = useState(null);

  useEffect(() => {
    setClients(dummyClients); // Replace with backend fetch
  }, []);

  const handleDelete = (id) => {
    const filtered = clients.filter(client => client.id !== id);
    setClients(filtered);
    if (selectedClient?.id === id) setSelectedClient(null);
  };

  const handleSave = (client) => {
    if (client.id) {
      // Update
      const updated = clients.map(c => c.id === client.id ? client : c);
      setClients(updated);
    } else {
      // New client
      const newClient = { ...client, id: Date.now(), joined: new Date().toISOString(), bookings: 0 };
      setClients([newClient, ...clients]);
    }
    setShowForm(false);
    setEditClient(null);
  };

  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crm-page">
      <div className="crm-header">
        <h2>Client Management</h2>
        <div className="crm-actions">
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => { setShowForm(true); setEditClient(null); }}>+ Add Client</button>
        </div>
      </div>

      <div className="client-table">
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Bookings</th><th>Joined</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map(client => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.bookings}</td>
                <td>{new Date(client.joined).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => setSelectedClient(client)} className='veiw'>View</button>
                  <button onClick={() => { setEditClient(client); setShowForm(true);} } className='edit'>Edit</button>
                  <button onClick={() => handleDelete(client.id)} className="danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedClient && <ClientProfile client={selectedClient} onClose={() => setSelectedClient(null)} />}
      {showForm && <ClientForm client={editClient} onClose={() => { setShowForm(false); setEditClient(null); }} onSave={handleSave} />}
    </div>
  );
};

export default CRMPage;
