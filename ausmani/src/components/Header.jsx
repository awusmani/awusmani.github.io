import { useState } from 'react';
import Tabs from './Tabs';
import '../styles/header.css';

export default function Header({ setContent }) {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setContent(tabId);
  };

  return (
    <header className="header">
      <div className="header-left" aria-hidden>
        {/* optional logo area - keep empty for now */}
      </div>

      <div className="header-center">
        <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      <div className="header-right">
        <nav className="social-links" aria-label="Social links">
          <a
            className="social-link"
            href="https://github.com/awusmani"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            {/* GitHub SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.7 5.39-5.27 5.67.42.36.79 1.07.79 2.15 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            className="social-link"
            href="https://www.linkedin.com/in/awusmani"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H8.58V9h3.41v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.55v6.18zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.57V9h3.54v11.45z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
