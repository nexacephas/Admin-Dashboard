// src/Pages/Email/EmailView.jsx
import React, { useState } from 'react';
import ComposeModal from './ComposeModal';

const EmailView = ({ email, onBack }) => {
  const [composeType, setComposeType] = useState(null);

  const handleReply = () => setComposeType('reply');
  const handleReplyAll = () => setComposeType('reply-all');
  const handleForward = () => setComposeType('forward');

  const handleCloseCompose = () => setComposeType(null);

  return (
    <div className="email-view">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>{email.subject}</h2>
      <p><strong>From:</strong> {email.from}</p>
      <div className="email-body">
        <p>{email.body}</p>
      </div>

      <div className="reply-options">
        <button onClick={handleReply}>↩ Reply</button>
        <button onClick={handleReplyAll}>🔁 Reply All</button>
        <button onClick={handleForward}>📤 Forward</button>
      </div>

      {composeType && (
        <ComposeModal
          onClose={handleCloseCompose}
          type={composeType}
          originalEmail={email}
        />
      )}
    </div>
  );
};

export default EmailView;
