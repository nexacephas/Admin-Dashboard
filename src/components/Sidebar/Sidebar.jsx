import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdExpandMore,
  MdExpandLess,
  MdMenu,
  MdChevronLeft
} from 'react-icons/md';
import './Sidebar.css';
import { sidebarData } from './SidebarData';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="mobile-toggle-btn" onClick={handleMobileToggle}>
        <MdMenu />
      </button>

      {/* Overlay */}
      <div
        className={`overlay ${mobileOpen ? 'show' : ''}`}
        onClick={handleMobileToggle}
      ></div>

      <aside
        className={`sidebar ${collapsed ? 'collapsed' : ''} ${
          mobileOpen ? 'open' : ''
        }`}
      >
        <div className="sidebar-header">
          {!collapsed && <h2 className="sidebar-title">Phoenix Admin</h2>}
          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MdMenu /> : <MdChevronLeft />}
          </button>
        </div>

        {sidebarData.map((section, idx) => (
          <div className="sidebar-section" key={idx}>
            <h4
              className="sidebar-section-title"
              onClick={() => section.dropdown && toggleDropdown(section.title)}
            >
              {!collapsed && (
                <>
                  {section.title}
                  {section.dropdown && (
                    <span className="dropdown-icon">
                      {openDropdown === section.title ? <MdExpandLess /> : <MdExpandMore />}
                    </span>
                  )}
                </>
              )}
            </h4>
            <ul
              className={`sidebar-links ${section.dropdown ? 'dropdown' : ''} ${
                openDropdown === section.title || !section.dropdown ? 'show' : 'hide'
              }`}
            >
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `link-item ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)} // Close on link click (mobile)
                  >
                    <span className="icon">{link.icon}</span>
                    {!collapsed && <span>{link.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
