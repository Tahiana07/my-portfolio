import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import fiangonana from '../../assets/images/fiangonana.png';
import clinique from '../../assets/images/clinique-antsika.PNG';
import lalao_antsika from '../../assets/images/lalao-antsika.PNG';
import fanorona from '../../assets/images/fanorona2d.PNG';
import logement from '../../assets/images/logement-app.PNG';
import iprogram from '../../assets/images/iprogram.jpg';


const Timeline = () => {
  return(
    <>
      <div className="container-timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#125F9F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #125F9F' }}
            date="2023-2024"
            iconStyle={{ background: '#125F9F', color: '#fff' }}
            //icon={<WorkIcon />}
          > {/* background: 'rgb(33, 150, 243)' */}
            {/* Image illustrative */}
            <div className="project-image">
              <img
                src={iprogram}
                alt="Project Illustration"
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
            {/* Section pour chaque techno */}
            <div className="technos-used">
              <div className="techno">React native</div>
              <div className="techno">Django</div>
              <div className="techno">Postgresql</div>
            </div>
            <h3 className="vertical-timeline-element-title">I-Program.AI</h3>
            <h4 className="vertical-timeline-element-subtitle">Création d'une application mobile</h4>
            <p>
              Projet collectif qui consiste à gérer le planning d'un utilisateur afin de combler les heures vides. C'est une 
              application dont nous y avons intégré de l'intelligence artificielle qui apprend les habitudes de son utilisateur et 
              qui lui suggèrera une activité à faire plus tard en cas de temps libres ou même l'utilisateur pourra demander directement 
              au chatbot que nous avons intégré également. L'application comporte plusieurs interfaces mais il faut que l'utilisateur  
              s'authentifie ou créer un compte pour pouvoir accéder au contenu de notre application.
            </p>
            {/* Boutons pour repository et déploiement */}
            {/*<div className="project-links">
              <a
                href="https://github.com/username/repository"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le repository
              </a>
              <a
                href="https://project-deployment-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginLeft: '10px' }}
              >
                Voir le déploiement
              </a>
            </div>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#125F9F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #125F9F' }}
            date="Avril 2023"
            iconStyle={{ background: '#125F9F', color: '#fff' }}
            //icon={<WorkIcon />}
          > {/* rgb(33, 150, 243) */}
            {/* Image illustrative */}
            <div className="project-image">
              <img
                src={fiangonana}
                alt="Project Illustration"
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
            {/* Section pour chaque techno */}
            <div className="technos-used">
              <div className="techno">ReactJS</div>
              <div className="techno">Laravel</div>
              <div className="techno">MySQL</div>
            </div>
            <h3 className="vertical-timeline-element-title">Projet Sekoly Alahady</h3>
            <h4 className="vertical-timeline-element-subtitle">Création d'une application Web de gestion</h4>
            <p>
              Projet réalisé en binôme qui consiste à gérer des étudiants : leurs notes, statistiques de notes, les cadeaux, ...
              ; les moniteurs; les classes. Il y a une page d'authentification et inscription validé par un administrateur, il y a donc différent 
              type d'utilisateurs : les administrateurs et les moniteurs qui gèrent une classe.
            </p>
            {/* Boutons pour repository et déploiement */}
            {/*<div className="project-links">
              <a
                href="https://github.com/username/repository"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le repository
              </a>
              <a
                href="https://project-deployment-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginLeft: '10px' }}
              >
                Voir le déploiement
              </a>
            </div>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#125F9F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #125F9F' }}
            date="2020 - 2021"
            iconStyle={{ background: '#125F9F', color: '#fff' }}
            //icon={<WorkIcon />}
          >
            {/* Image illustrative */}
            <div className="project-image">
              <img
                src={logement}
                alt="Project Illustration"
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
            {/* Section pour chaque techno */}
            <div className="technos-used">
              <div className="techno">Tkinter</div>
              <div className="techno">Python</div>
              <div className="techno">MySQL</div>
            </div>
            <h3 className="vertical-timeline-element-title">E-trano</h3>
            <h4 className="vertical-timeline-element-subtitle">Création d'un logiciel de gestion</h4>
            <p>
              Projet individuel qui consiste à la gestion de travaux dans un appartement : gérer l'entré de nouveau locataire, 
              la liste des locataires, la gestion des appartements c'est à dire ceux qui sont déjà prises et ceux qui n'ont pas encore de locataires, 
              et aussi la gestion de loyer, par mois, c'est à dire gérer les paiements faites par chaque locataire.
            </p>
            {/* Boutons pour repository et déploiement */}
            {/*<div className="project-links">
              <a
                href="https://github.com/username/repository"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le repository
              </a>
              <a
                href="https://project-deployment-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginLeft: '10px' }}
              >
                Voir le déploiement
              </a>
            </div>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#125F9F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #125F9F' }}
            date="2020 - 2021"
            iconStyle={{ background: '#125F9F', color: '#fff' }}
            //icon={<WorkIcon />}
          >
            {/* Image illustrative */}
            <div className="project-image">
              <img
                src={lalao_antsika}
                alt="Project Illustration"
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
            {/* Section pour chaque techno */}
            <div className="technos-used">
              <div className="techno">XML</div>
              <div className="techno">Java mobile</div>
              <div className="techno">SQLite</div>
            </div>
            <h3 className="vertical-timeline-element-title">Lalao Antsika</h3>
            <h4 className="vertical-timeline-element-subtitle">Création d'une application mobile</h4>
            <p>
              Projet collectif dont le but est de créer une application amusante et intsructive pour toutes catégories d'âges.
            </p>
            {/* Boutons pour repository et déploiement */}
            {/*<div className="project-links">
              <a
                href="https://github.com/username/repository"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le repository
              </a>
              <a
                href="https://project-deployment-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginLeft: '10px' }}
              >
                Voir le déploiement
              </a>
            </div>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#125F9F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #125F9F' }}
            date="2019-2020"
            iconStyle={{ background: '#125F9F', color: '#fff' }}
            //icon={<SchoolIcon />}
          >
            {/* Image illustrative */}
            <div className="project-image">
              <img
                src={clinique}
                alt="Project Illustration"
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
            {/* Section pour chaque techno */}
            <div className="technos-used">
              <div className="techno">HTML&CSS</div>
              <div className="techno">PHP</div>
              <div className="techno">MySQL</div>
            </div>
            <h3 className="vertical-timeline-element-title">Clinique Antsika</h3>
            <h4 className="vertical-timeline-element-subtitle">Application web de gestion</h4>
            <p>
              C'est un projet réalisé en équipe consistant à gérer les travaux dans un clinique, à 
              numériser toutes les informations comme la prise de rendez-vous, prise en charge de malades, ....
            </p>
            {/* Boutons pour repository et déploiement */}
            {/*<div className="project-links">
              <a
                href="https://github.com/username/repository"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le repository
              </a>
              <a
                href="https://project-deployment-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginLeft: '10px' }}
              >
                Voir le déploiement
              </a>
            </div>*/}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Timeline;