import Tabs from './components/Tabs';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import './styles/app.css';
import Experience from './components/Experience';

export default function App() {

  return (
    <div className="app">
      <Header />

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
          <Experience />
        </section>

        <section id="tab4" className="page-section">
          <h1>Contact</h1>
          <Contact />
        </section>
      </main>
    </div>
  );
}