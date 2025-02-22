import React, { useState } from 'react';
import './SettingsButton.css';
import './Modal.css';
import './ToggleDark.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header
      style={{
        padding: '1rem',
        display: "flex",
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'black',
        position: 'relative',
      }}
    >
      <button
        className="setting-btn"
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        onClick={toggleModal}
      >
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar1"></span>
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button className="modal-close" onClick={toggleModal}>
              Close
            </button>
            <h1>Settings</h1>
            <p>Toggle Dark Mode:</p>
            <label className="switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
