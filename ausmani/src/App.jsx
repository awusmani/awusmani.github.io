import React, { useState } from 'react';
import Tabs from './components/Tabs';
import About from './components/About';
import Contact from './components/Contact';
import './styles/app.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="app">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        <section id="tab1" className="page-section">
          <h1>Home</h1>
          <p>Home content...</p>
        </section>

        <section id="tab2" className="page-section">
          <h1>About</h1>
          <About />
        </section>

        <section id="tab3" className="page-section">
          <h1>Experience</h1>
        </section>

        <section id="tab4" className="page-section">
          <h1>Contact</h1>
          <Contact />
        </section>
      </main>
    </div>
  );
}