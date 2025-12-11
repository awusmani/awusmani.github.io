import Tabs from './components/Tabs';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import './styles/app.css';
import Experience from './components/Experience';
import Home from './components/Home';

export default function App() {

  return (
    <div className="app">
      <Header />

      <main>
        <section id="tab1" className="page-section">
          <Home />
        </section>

        <section id="tab2" className="page-section">
          <About />
        </section>

        <section id="tab3" className="page-section">
          <Experience />
        </section>

        <section id="tab4" className="page-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}