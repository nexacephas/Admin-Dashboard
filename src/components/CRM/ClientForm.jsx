// src/Components/CRM/ClientForm.jsx
import React, { useState, useEffect } from 'react';
import './CRMPage.css';

const ClientForm = ({ client, onClose, onSave }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (client) setForm(client);
  }, [client]);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{client ? 'Edit Client' : 'Add New Client'}</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
          <div className="form-actions">
            <button type="submit" className='edit'>Save</button>
            <button onClick={onClose} className="danger">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
