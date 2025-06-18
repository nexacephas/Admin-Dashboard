// src/Pages/Email/ComposeModal.jsx
import React from 'react';

const ComposeModal = ({ onClose, type = 'new', originalEmail = {} }) => {
  const getPrefill = () => {
    switch (type) {
      case 'reply':
        return {
          to: originalEmail.from,
          subject: `Re: ${originalEmail.subject}`,
          body: `\n\n--- Original Message ---\n${originalEmail.body}`
        };
      case 'reply-all':
        return {
          to: `${originalEmail.from}; other@recipients.com`,
          subject: `Re: ${originalEmail.subject}`,
          body: `\n\n--- Original Message ---\n${originalEmail.body}`
        };
      case 'forward':
        return {
          to: '',
          subject: `Fwd: ${originalEmail.subject}`,
          body: `\n\n--- Forwarded Message ---\nFrom: ${originalEmail.from}\n${originalEmail.body}`
        };
      default:
        return { to: '', subject: '', body: '' };
    }
  };

  const { to, subject, body } = getPrefill();

  return (
    <div className="compose-overlay">
      <div className="compose-modal">
        <h3>{type === 'new' ? 'New Message' : type === 'forward' ? 'Forward Message' : 'Reply'}</h3>
        <input type="text" defaultValue={to} placeholder="To" />
        <input type="text" defaultValue={subject} placeholder="Subject" />
        <textarea defaultValue={body} placeholder="Type your message..."></textarea>
        <div className="modal-actions">
          <button className="send-btn">Send</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;
