import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaHandshake, FaFistRaised, FaComments } from 'react-icons/fa';
import styles from './Carousel3D.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel3D = () => {
  const cards = [
    {
      id: 1,
      icon: <FaCode size={50} color="white" />, // Définir la couleur de l'icône explicitement
      title: "Capacité d'adaptation",
      description: "Je suis à l'aise à la variation de l'usage des langages de programmation et possède de l'expérience à l'installation des outils et IDE nécéssaires.",
      className: 'card-react',
    },
    {
      id: 2,
      icon: <FaHandshake size={50} color="white" />,
      title: 'Aisance relationnelle',
      description: "Je suis une personne qui entretient un travail très proffessionnel, je n'engendre aucun problème relationnel qui pourrait nuire l'ambiance au travail.",
      className: 'card-nodejs',
    },
    {
      id: 3,
      icon: <FaFistRaised size={50} color="white" />,
      title: "Grand d'esprit d'équipe",
      description: "Je suis à l'écoute de chaque membre et réactif. Je respecte notamment les consignes, les deadlines et je respecte à égal chaque membre de mon d'équipe.",
      className: 'card-python',
    },
    {
      id: 4,
      icon: <FaComments size={50} color="white" />,
      title: 'Excellente communication',
      description: "Je suis une personne ouverte et toujours à l'écoute. A part le langage maternel, je peux tant que bien parler couramment en français.",
      className: 'card-css3',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-carousel">
      <div className="container-overlay"></div>
      <div className="filter-overlay"></div>
      <Container className="App">
        <h1 className="text-center my-5 pt-3 zindex-apply" style={{ color: '#022253' }}>Autres compétences</h1>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Slider {...settings}>
              {cards.map((card) => (
                <div key={card.id} className={`card-carousel ${card.className}`}>
                  <div className="card-icon">{card.icon}</div>
                  <h2 className="card-title">{card.title}</h2>
                  <h3 className="card-description">{card.description}</h3>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carousel3D;