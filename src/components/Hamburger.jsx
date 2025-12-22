import { useState } from 'react';
import '../styles/hamburger.css';

export default function Hamburger({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'tab1', label: 'Home' },
    { id: 'tab2', label: 'About' },
    { id: 'tab3', label: 'Skills' },
    { id: 'tab4', label: 'Experience' },
    { id: 'tab5', label: 'Contact' },
  ];

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    setIsOpen(false); // Close menu after selection
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hamburger-container">
      <button
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`hamburger-menu-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {isOpen && (
        <div className="hamburger-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
}
