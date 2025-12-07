import { useState } from 'react';
import Tabs from './Tabs';
import '../styles/Header.css';

export default function Header({ setContent }) {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setContent(tabId);
  };

  return (
    <header className="header">
      <h1 className="logo">Abdul Wasay Usmani</h1>
      <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
    </header>
  );
}
