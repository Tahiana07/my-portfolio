import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarBootstrap from './components/Navbar/NavBarBootstrap';
import Accueil from './pages/Accueil';
import Competences from './pages/Competences';
import './App.css'
import Contacts from './pages/Contacts';
import Projets from './pages/Projets';
import Hologram from './components/3DComponents/Hologram';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('apropos');
  const [showScrollButton, setShowScrollButton] = useState(false);

  const aproposRef = useRef(null);
  const competencesRef = useRef(null);
  const projetsRef = useRef(null);
  const contactsRef = useRef(null);

  const sections = [
    { id: 'apropos', ref: aproposRef },
    { id: 'competences', ref: competencesRef },
    { id: 'projets', ref: projetsRef },
    { id: 'contacts', ref: contactsRef },
  ]

  // Fonction pour gérer le défilement et changer la section active
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Détecter la section visible
    sections.forEach(({ id, ref }) => {
      const sectionTop = ref.current.offsetTop - 100; // Ajuste cette valeur si nécessaire
      const sectionHeight = ref.current.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(id);
      }
    });

    // Afficher ou cacher le bouton "Retour à l'accueil"
    setShowScrollButton(scrollPosition > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour remonter à l'accueil
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simuler un délai de chargement de 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-body">
          <div className="cube-loader">
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
      ) : (
        <>
          <NavBarBootstrap activeSection={activeSection} />

          <div className="content">
            <section id="apropos" ref={aproposRef}>
              <Accueil />
            </section>
            <Hologram />
            <section id="competences" ref={competencesRef}>
              <Competences />
            </section>
            <section id="projets" ref={projetsRef}>
              <Projets />
            </section>
            <section id="contacts" ref={contactsRef}>
              <Contacts />
            </section>
          </div>

          {/* Bouton pour revenir à l'accueil */}
          {showScrollButton && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              ↑ A propos            
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
