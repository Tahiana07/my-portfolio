import React, { useState, useEffect, useRef } from 'react';
// import { FaHandPaper } from 'react-icons/fa';
// import { Bounce } from 'react-reveal';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import '../assets/styles/Accueil.css';
import profil from '../assets/images/profil_4.png';
import wave_hand from '../assets/images/main.png';
// import './Greeting.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';

const Accueil = () => {

  const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Développeur", "Designer Web", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) ;}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <div className="body">
      <section className="greeting">
        <Container 
          className="shadow-6"
          style={{ backgroundColor: '#02255F', borderRadius: '10px' }}  
        >
          <Row className="align-items-center">
            {/* Colonne contenant l'image (en haut sur mobile) */}
            <Col lg={4} md={5} sm={12} className="order-lg-2 order-1 text-center timeline">
              <Slide direction="right" damping={1}>
                <div className="picture-a">
                  <div className="image-container">
                    <img src={profil} alt="Profile" className="profile-image" />
                    <div className="decorative-circle"></div>
                  </div>
                </div>
              </Slide>
            </Col>

            {/* Colonne contenant le texte (en dessous de l'image sur mobile) */}
            <Col lg={8} md={7} sm={12} className="order-lg-1 order-2 mt-3 mt-sm-0 text-content">
              <div>
                <Fade cascade damping={0.5}>
                  <h2 className="greeting-text-title">Bonjour
                    <span className="wave-hand">
                      <img src={wave_hand} alt="wave hand" />
                    </span>
                  </h2>
                  <h3 className="greeting-subtitle">
                    Je m'appelle <span className="highlight-lightblue">Njaka Tahiana RASOLOFOMANANA</span><br />
                    Je suis un <span className="highlight-yellow">{text}</span>
                  </h3>
                  <p className="greeting-description">
                    Étudiant en quatrième année en informatique et Télécommunication à l'Institut Supérieur Polytechnique de Madagascar.
                    Sérieux et dynamique, je peux apporter les connaissances que j'ai acquises et mes capacités pour contribuer aux
                    bons performances de votre entreprise.
                  </p>
                  <a href="https://drive.google.com/uc?export=download&id=1oCisWz2rM_JS9c1l9LjhBP3GUlA57v7e" className="btn btn-outline-secondary cv-b" style={{ color: '#fff' }}>Télécharger CV</a>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </section>  
    </div>
  );
};

export default Accueil;
