import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MdLightMode, MdDarkMode, MdNotificationsNone, MdApps, MdAnalytics, MdPeople,
  MdEmail, MdEvent, MdChat, MdAssignment, MdShoppingCart, MdTravelExplore, MdNotifications
} from 'react-icons/md';
import { FaCaretDown } from 'react-icons/fa';
import './Navbar.css';
import profile_img from '../../assets/My profile pic.jpg';
import ChatDemo from '../ChatDemo/ChatDemo';
import { Link } from 'react-router-dom';

const initialNotifications = [
  {
    img: profile_img,
    name: "Jessie Samson",
    action: "💬 Mentioned you in a comment.",
    timeAgo: "10m",
    timestamp: "10:41 AM August 7, 2021"
  },
  {
    img: profile_img,
    name: "Jane Foster",
    action: "📅 Created an event.",
    timeAgo: "20m",
    timestamp: "10:20 AM August 7, 2021"
  },
];

const appItems = [
  { icon: <MdAnalytics />, label: 'Analytics', bg: '#263238', color: '#90caf9' },
  { icon: <MdPeople />, label: 'Users', bg: '#1b5e20', color: '#aed581' },
  { icon: <MdEmail />, label: 'Email', bg: '#004d40', color: '#80cbc4' },
  { icon: <MdEvent />, label: 'Events', bg: '#bf360c', color: '#ffab91' },
  { icon: <MdChat />, label: 'Chat', bg: '#1b5e20', color: '#a5d6a7' },
  { icon: <MdAssignment />, label: 'Projects', bg: '#880e4f', color: '#f8bbd0' },
  { icon: <MdShoppingCart />, label: 'Ecommerce', bg: '#4a148c', color: '#ce93d8' },
  { icon: <MdTravelExplore />, label: 'Travel', bg: '#0d47a1', color: '#64b5f6' },
  { icon: <MdNotifications />, label: 'Notify', bg: '#b71c1c', color: '#ef9a9a' },
  { icon: <MdApps />, label: 'Apps', bg: '#827717', color: '#f0f4c3' },
  { icon: <MdLightMode />, label: 'Theme', bg: '#f57f17', color: '#fff59d' },
];

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [notifOpen, setNotifOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const navigate = useNavigate();

  const avatarRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.navbar-icon') &&
        !e.target.closest('.user-avatar') &&
        !e.target.closest('.dropdown-panel')
      ) {
        setNotifOpen(false);
        setAppsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <nav className="dashboard-navbar dark">
      <div className="navbar-left">
        <input type="text" className="search-bar" placeholder="Search..." aria-label="Search" />
      </div>

      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </button>

        <ChatDemo />

        {/* Notifications */}
        <div
          className={`navbar-icon ${notifOpen ? 'active' : ''}`}
          onClick={() => {
            setNotifOpen(!notifOpen);
            setAppsOpen(false);
            setDropdownOpen(false);
          }}
          aria-label="Notifications"
        >
          <MdNotificationsNone />
          {notifications.length > 0 && <span className="notif-badge">{notifications.length}</span>}
          {notifOpen && (
            <div className="dropdown-panel notifications-dropdown show">
              <div className="notif-header">
                <h4>Notifications</h4>
                <button className="clear-btn" onClick={() => setNotifications([])}>Clear All</button>
              </div>
              <ul>
                {notifications.length === 0 ? (
                  <p className="no-notif">No new notifications</p>
                ) : (
                  notifications.slice(0, 10).map((n, i) => (
                    <li key={i} className="notif-item">
                      <img src={n.img} alt={n.name} />
                      <div className="notif-content">
                        <strong>{n.name}</strong>
                        <p>{n.action} <span className="time">{n.timeAgo}</span></p>
                        <small>{n.timestamp}</small>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Apps */}
        <div
          className={`navbar-icon ${appsOpen ? 'active' : ''}`}
          onClick={() => {
            setAppsOpen(!appsOpen);
            setNotifOpen(false);
            setDropdownOpen(false);
          }}
          aria-label="Apps"
        >
          <MdApps />
          {appsOpen && (
            <div className="dropdown-panel apps-dropdown show">
              <h4>Quick Apps</h4>
              <div className="apps-grid">
                {appItems.map((app, i) => (
                  <div
                    key={i}
                    className="app-item"
                    style={{ backgroundColor: app.bg, color: app.color }}
                  >
                    <div style={{ fontSize: '24px' }}>{app.icon}</div>
                    <span>{app.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile with Dropdown */}
        <div
          className="user-avatar"
          ref={avatarRef}
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
            setNotifOpen(false);
            setAppsOpen(false);
          }}
          aria-label="User menu"
        >
          <img src={profile_img} alt="User" />
          <FaCaretDown style={{ marginLeft: '6px', fontSize: '14px' }} />
          {dropdownOpen && (
            <div className="dropdown-panel avatar-dropdown show">
              <ul>
                <li onClick={() => navigate('/dashboard/profile')}>Profile</li>
                <li onClick={() => navigate('/dashboard/settings')}>Settings</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
