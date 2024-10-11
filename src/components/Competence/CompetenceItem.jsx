import React from 'react';
import './CompetenceItem.css';

const CompetenceItem = () => {
  return (
    <div className="work-experience-container">
      <h1>Autres compétences</h1>
      <div className="timeline-container">
        {/* Left side */}
        <div className="timeline-left">
          <div className="timeline-box left">
            <h3>Aisance relationnelle</h3>
            <p>Je suis une personne qui entretient un travail très proffessionnel, je n'engendre 
            aucun problème relationnel qui pourrait nuire l'ambiance au travail.</p>
          </div>
          <div className="timeline-box left2">
            <h3>Excellente communication</h3>
            <p>Je suis une personne ouverte et toujours à l'écoute. A part le langage maternel, je peux tant que bien parler 
            couramment en français.</p>
          </div>
        </div>

        {/* Center with stars */}
        <div className="timeline-center">
          <div className="circle"><span className="star">★</span></div>
          <div className="circle"><span className="star">★</span></div>
          <div className="circle"><span className="star">★</span></div>
          <div className="circle"><span className="star">★</span></div>
          <div className="vertical-line"></div>
        </div>

        {/* Right side */}
        <div className="timeline-right">
          <div className="timeline-box right">
            <h3>Capacité d'adaptation</h3>
            <p>Je suis à l'aise à la variation de l'usage des langages de programmation et possède de l'expérience à 
            l'installation des outils et IDE nécéssaires.</p>
          </div>
          <div className="timeline-box right2">
            <h3>Grand d'esprit d'équipe</h3>
            <p>Je suis à l'écoute de chaque membre et réactif.
            Je respecte notamment les consignes, les deadlines et je respecte à égal chaque membre 
            de mon d'équipe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetenceItem;