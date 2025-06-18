// src/pages/ChatPage.jsx
import React, { useState } from 'react';
import './ChatPage.css';
import { motion, AnimatePresence } from 'framer-motion';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there!', sender: 'user' },
    { id: 2, text: 'Hello! How can I help?', sender: 'admin' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        text: input,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="chat-page">
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <h2>Chats</h2>
        </div>
        <div className="chat-list">
          <div className="chat-user active"><span>John Doe</span></div>
          <div className="chat-user"><span>Admin</span></div>
        </div>
      </aside>

      <main className="chat-main">
        <div className="chat-header">John Doe</div>
        <div className="chat-messages">
          <AnimatePresence>
            {messages.map(msg => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`message ${msg.sender === 'user' ? 'sent' : 'received'}`}
              >
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
