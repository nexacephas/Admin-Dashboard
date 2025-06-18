import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <section className="setting-section">
            <h3>Profile Information</h3>
            <div className="setting-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
          </section>
        );
      case 'security':
        return (
          <section className="setting-section">
            <h3>Account Security</h3>
            <div className="setting-group">
              <label>Current Password</label>
              <input type="password" placeholder="••••••••" />
              <label>New Password</label>
              <input type="password" placeholder="••••••••" />
              <button>Update Password</button>
            </div>
          </section>
        );
      case 'notifications':
        return (
          <section className="setting-section">
            <h3>Notification Preferences</h3>
            <div className="setting-group">
              <label><input type="checkbox" /> Email Notifications</label>
              <label><input type="checkbox" /> SMS Alerts</label>
              <label><input type="checkbox" /> Push Notifications</label>
            </div>
          </section>
        );
      case 'appearance':
        return (
          <section className="setting-section">
            <h3>Theme & Appearance</h3>
            <div className="setting-group">
              <label>Theme</label>
              <select>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </section>
        );
      case 'language':
        return (
          <section className="setting-section">
            <h3>Language & Region</h3>
            <div className="setting-group">
              <label>Language</label>
              <select>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
              <label>Time Zone</label>
              <select>
                <option value="WAT">West Africa Time (WAT)</option>
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Standard Time (EST)</option>
              </select>
            </div>
          </section>
        );
      case 'apps':
        return (
          <section className="setting-section">
            <h3>Connected Apps</h3>
            <div className="setting-group connected-apps">
              <div className="app-card">
                <p>Google</p>
                <button>Disconnect</button>
              </div>
              <div className="app-card">
                <p>Facebook</p>
                <button>Disconnect</button>
              </div>
            </div>
          </section>
        );
      case 'privacy':
        return (
          <section className="setting-section">
            <h3>Privacy & Data</h3>
            <div className="setting-group">
              <label><input type="checkbox" /> Allow data collection for analytics</label>
              <label><input type="checkbox" /> Enable personalized recommendations</label>
              <button className="danger-btn">Delete Account</button>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-layout">
      <aside className="settings-sidebar">
        <h2>Settings</h2>
        <ul>
          <li onClick={() => setActiveSection('profile')} className={activeSection === 'profile' ? 'active' : ''}>Profile Info</li>
          <li onClick={() => setActiveSection('security')} className={activeSection === 'security' ? 'active' : ''}>Account Security</li>
          <li onClick={() => setActiveSection('notifications')} className={activeSection === 'notifications' ? 'active' : ''}>Notifications</li>
          <li onClick={() => setActiveSection('appearance')} className={activeSection === 'appearance' ? 'active' : ''}>Appearance</li>
          <li onClick={() => setActiveSection('language')} className={activeSection === 'language' ? 'active' : ''}>Language & Region</li>
          <li onClick={() => setActiveSection('apps')} className={activeSection === 'apps' ? 'active' : ''}>Connected Apps</li>
          <li onClick={() => setActiveSection('privacy')} className={activeSection === 'privacy' ? 'active' : ''}>Privacy & Data</li>
        </ul>
      </aside>

      <main className="settings-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Settings;
