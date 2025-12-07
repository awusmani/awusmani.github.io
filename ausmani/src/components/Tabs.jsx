import { useState } from 'react';
import '../styles/Tabs.css'; // optional for styling

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const tabs = [
    { id: 'aboutMe', label: 'About Me', content: 'This is the content for About Me.' },
    { id: 'exp', label: 'Experience', content: 'This is the content for Experience.' },
    { id: 'tab3', label: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map(tab => (
          activeTab === tab.id && (
            <div key={tab.id}>
              <p>{tab.content}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
