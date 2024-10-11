import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
	faCameraRetro,
	faDragon,
	faFootballBall,
	faHelicopter
} from "@fortawesome/free-solid-svg-icons";

export default [
	{
		id:1,
		bgColor: "#F54748",
		icon: <FontAwesomeIcon icon={ faCameraRetro } size="3x" />,
		title: "Capacité d'adaptation",
		desc:
			"Je suis à l'aise à la variation de l'usage des langages de programmation et possède de l'expérience à l'installation des outils et IDE nécéssaires."
	},
	{
		id:2,
		bgColor: "#7952B3",
		icon: <FontAwesomeIcon icon={ faDragon } size="3x" />,
		title: "Aisance relationnelle",
		desc:
			"Je suis une personne qui entretient un travail très proffessionnel, je n'engendre aucun problème relationnel qui pourrait nuire l'ambiance au travail."
	},
	{
		id:3,
		bgColor: "#1597BB",
		icon: <FontAwesomeIcon icon={ faFootballBall } size="3x" />,
		title: "Grand d'esprit d'équipe",
		desc:
			"Je suis à l'écoute de chaque membre et réactif. Je respecte notamment les consignes, les deadlines et je respecte à égal chaque membre de mon d'équipe."
	},
	{
		id:4,
		bgColor: "#185ADB",
		icon: <FontAwesomeIcon icon={ faHelicopter } size="3x" />,
		title: "Excellente communication",
		desc:
			"Je suis une personne ouverte et toujours à l'écoute. A part le langage maternel, je peux tant que bien parler couramment en français."
	}
];