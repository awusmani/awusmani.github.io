import { useState, useRef, useEffect } from 'react';
import '../styles/Tabs.css';

export default function Tabs({ activeTab, setActiveTab }) {
  const tabRefs = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({}); // useState, not useRef

  const tabs = [
    { id: 'tab1', label: 'Home' },
    { id: 'tab2', label: 'About' },
    { id: 'tab3', label: 'Contact' },
  ];

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlineStyle({
        width: `${currentTab.offsetWidth}px`,
        left: `${currentTab.offsetLeft}px`,
      });
    }
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
      <span className="tab-underline" style={underlineStyle}></span>
    </div>
  );
}
