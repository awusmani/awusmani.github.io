import { useState } from 'react';
import Tabs from './Tabs';
import '../styles/header.css';

export default function Header() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <header className="header">
      <div className="header-left" aria-hidden>
        <a
          href="https://github.com/awusmani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/public/github-mark.png" alt="GitHub" />
        </a>
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
          <img src="/public/github-mark.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/awusmani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/public/InBug-Black.png" alt="LinkedIn" />
        </a>
      </div>
    </header>
  );
}
