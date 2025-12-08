import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
  const [content, setContent] = useState('tab1');

  const renderContent = () => {
    switch (content) {
      case 'tab1':
        return <p>Welcome to the Home tab!</p>;
      case 'tab2':
        return <p>Learn more About us here.</p>;
      case 'tab3':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header setContent={setContent} />
      <main style={{ padding: '20px' }}>{renderContent()}</main>
      <Footer />
    </div>
  );
}
