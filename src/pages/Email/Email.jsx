// src/Pages/Email/Email.jsx
import React, { useState } from 'react';
import './Email.css';
import EmailList from './EmailList';
import EmailView from './EmailView';
import ComposeModal from './ComposeModal';
import { MdInbox, MdSend, MdStar, MdDelete } from 'react-icons/md';
const Email = () => {
  const [selected, setSelected] = useState(null);
  const [composeOpen, setComposeOpen] = useState(false);

  return (
    <div className="email-container">
      <aside className="email-sidebar">
        <button onClick={() => setComposeOpen(true)} className="compose-button">
          ✉️ Compose
        </button>
        <ul className="email-folders">
       <li><MdInbox /> Inbox</li>
        <li><MdSend /> Sent</li>
        <li><MdStar /> Starred</li>
        <li><MdDelete /> Trash</li>
              </ul>
      </aside>

      <main className="email-main">
        {!selected ? (
          <EmailList onSelect={setSelected} />
        ) : (
          <EmailView email={selected} onBack={() => setSelected(null)} />
        )}
      </main>

      {composeOpen && <ComposeModal onClose={() => setComposeOpen(false)} />}
    </div>
  );
};

export default Email;
