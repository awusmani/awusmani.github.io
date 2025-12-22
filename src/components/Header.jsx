import { useState } from 'react';
import Tabs from './Tabs';
import '../styles/header.css';
import Hamburger from './Hamburger';

export default function Header() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <header className="header">
      <div className="header-left" aria-hidden>
        <img src="/android-chrome-512x512.png" alt="myLogo" />
        <Hamburger activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="header-center">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="header-right">
        <a
          href="https://github.com/awusmani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github-mark.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/awusmani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/InBug-Black.png" alt="LinkedIn" />
        </a>
      </div>
    </header>
  );
}
