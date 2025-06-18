import React, { useState, useRef } from 'react';
import './ChatDemo.css';

const ChatDemo = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', from: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, from: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: 'Got it! We’ll respond shortly.', from: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chat-wrapper">
      {open ? (
        <div className="chat-window animate-fadeIn">
          <div className="chat-header">
            <span>Support Chat</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      ) : (
        <div className="chat-icon bounce" onClick={() => setOpen(true)}>
          💬
        </div>
      )}
    </div>
  );
};

export default ChatDemo;
