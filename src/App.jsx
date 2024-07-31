
import { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Coding from './components/codingSites/Coding.jsx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="loading-dots"><span className='loading'>Loading</span>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      ) : (
        <>
            <Header />
            
            <Nav />
            
            <About />
            
            <Experience />

            <Coding />
            
            <Services />
            
            <Portfolio />
            
            <Testimonials />
            
            <Contact />
            
            <Footer />

            
        </>
      )}
    </>
  );
}

export default App;

