// import React, { useState } from 'react';
import React from 'react';
// import { styled } from '@mui/material/styles';
// import InteractiveCard from '../components/InteractiveCards/InteractiveCards';
import Timeline from '../components/Timeline/Timeline';
// import { Grid } from '@mui/material';
// import { Fade, Flip, Rotate, Zoom } from 'react-awesome-reveal';
// import { Container, Row, Col } from 'react-bootstrap'
// import clinique from '../assets/images/clinique-antsika.PNG';
// import lalao_antsika from '../assets/images/lalao-antsika.PNG';
// import e_lamina from '../assets/images/e-lamina.PNG';
// import fanorona from '../assets/images/fanorona2d.PNG';
// import logement from '../assets/images/logement-app.PNG';
import '../assets/styles/Projets.css';


const Projets = () => {
	/*const Item = styled(Paper)(() => ({
		backgroundColor: '#98d6a9',
		padding: 8,
		textAlign: 'center',
		color: 'black',
	}));*/

	/*const cardsData = [
    {
      id: 1,
      title: "E-lamina",
      subheader: "2021-2022",
      description:
        "Création d'une application web",
      detailedDescription:
        'Projet collectif utilisant les technologies Javascript. Il s\'agit de créer un dashboard afin de gérer l\'agenda d\'un utilisateur, l\'utilisation de calendriers en faisant des "drag and drop", gérer des différentes tâches avec la méthode PERT(Program Evaluation and Review Technique). Ce projet était réalisé avec VueJs et express.',
      imageUrl: e_lamina  // URL de l'image
    },
    {
      id: 2,
      title: "Fanorona",
      subheader: "2021-2022",
      description:
        "Création de jeux",
      detailedDescription:
        'Projet collectif utilisant le langage de programmation Javascript. Le but était de créer un "board game Malagasy", nous avons choisi "fanoron-telo" et nous avons implémenté 2 versions de ce jeu, l\'une est une fanorona 2D et l\'autre est en 3D (utilisant three.js, une bibliothèque javascript 3D).',
      imageUrl: fanorona  // URL de l'image
    },
    {
      id: 3,
      title: "Logement App",
      subheader: "2020-2021",
      description:
        "Création d'un logiciel de gestion",
      detailedDescription:
        'Projet individuel réalisé avec python pour la gestion de travaux dans un appartement : gérer l\'entré de nouveau locataire, la liste des locataires, la gestion des appartements c\'est à dire ceux qui sont déjà prises et ceux qui n\'ont pas encore de locataires, et aussi la gestion de loyer, par mois, c\'est à dire gérer les paiements faites par chaque locataire. Comme interface utilisateur, j\'ai utilisé Tkinter, une bibliothèque UI(User Interface) de python. Comme SGBDR(Systèmes de Gestion de Base de Données Relationnelles), j\'ai utilisé MySQL.',
      imageUrl: logement  // URL de l'image
    },
    {
      id: 4,
      title: "Lalao Antsika",
      subheader: "2020-2021",
      description:
        "Création d'une application mobile",
      detailedDescription:
        "",
      imageUrl: lalao_antsika  // URL de l'image
    },
    {
      id: 5,
      title: "Clinique Antsika",
      subheader: "2019-2020",
      description:
        "Applications Web de gestion",
      detailedDescription:
        "",
      imageUrl: clinique  // URL de l'image
    }
  ];

  // État pour suivre quelle carte est étendue
  const [expandedCards, setExpandedCards] = useState(
    cardsData.map(() => false)
  );

  // Gérer le clic pour étendre ou réduire une carte spécifique
  const handleExpandClick = (index) => {
    setExpandedCards((prevExpandedCards) =>
      prevExpandedCards.map((expanded, i) =>
        i === index ? !expanded : expanded
      )
    );
  };*/

	return(
		<>
			<div className="text-container">
				<h1 style={{ color: '#fff' }}>Mes projets d'études</h1>
			</div>
			{/*<div className="container-cards">
				<Container>
					<Grid item xs={4}>

						<Card>
							<CardMedia
								sx={{ height: 200 }}
								image={clinique}
								title="Clinique Antsika"
							/>
							<CardContent>
								<Typography>
									lorem ipsum dolor amet!
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Item elevation={3}>Two</Item>
					</Grid>
					<Grid item xs={4}>
						<Item elevation={3}>Three</Item>
					</Grid>
					<Grid item xs={4}>
						<Item elevation={3}>Four</Item>
					</Grid>
					<Grid item xs={4}>
						<Item elevation={3}>Five</Item>
					</Grid>
					<Grid item xs={4}>
						<Item elevation={3}>Six</Item>
					</Grid>
					<Row>
						{cardsData.map((card, index) => (
		        	<Col lg={4} md={6} xs={12}>
			        	<Zoom cascade>
			        		<InteractiveCard
						        key={card.id}
						        card={card}
						        expanded={expandedCards[index]}
						        onExpandClick={() => handleExpandClick(index)}
					        />
			        	</Zoom>
			        </Col>
				    ))}
					</Row>
				</Container>
			</div>*/}
			<Timeline />
		</>
	)
}

export default Projets;