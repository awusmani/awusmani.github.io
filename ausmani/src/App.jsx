import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
  const [content, setContent] = useState('tab1');

  const renderContent = () => {
    switch (content) {
      case 'tab1':
        return <p>Welcome to the Home tab!</p>;
      case 'tab2':
        return <About />;
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
