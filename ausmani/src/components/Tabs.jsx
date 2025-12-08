import { useState, useRef, useEffect } from 'react';
import '../styles/Tabs.css';

export default function Tabs({ activeTab, setActiveTab }) {
  const tabRefs = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isResizing, setIsResizing] = useState(false);

  const tabs = [
    { id: 'tab1', label: 'Home' },
    { id: 'tab2', label: 'About' },
    { id: 'tab3', label: 'Contact' },
  ];

  const updateUnderline = () => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlineStyle({
        width: `${currentTab.offsetWidth}px`,
        left: `${currentTab.offsetLeft}px`,
      });
    }
  };

  // Update underline when active tab changes
  useEffect(() => {
    if (!isResizing) {
      updateUnderline();
    }
  }, [activeTab, isResizing]);

  // Update underline on window resize (jump instantly)
  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true); // disable transition
      updateUnderline();
      // Re-enable transition after short delay
      setTimeout(() => setIsResizing(false), 50);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            ref={el => (tabRefs.current[tab.id] = el)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <span
        className={`tab-underline ${isResizing ? 'no-transition' : ''}`}
        style={underlineStyle}
      ></span>
    </div>
  );
}
