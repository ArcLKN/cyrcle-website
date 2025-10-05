// prestations.jsx
// ✅ Import all images from /src/assets/prestations/
import designIndustrielWhite from "../assets/prestations/image_design_industriel_white.png";
import designIndustrielBlack from "../assets/prestations/image_design_industriel_black.png";
import developpementWebGray from "../assets/prestations/image_developpement_web_gray.png";
import strategieExperienceGray from "../assets/prestations/image_strategie_experience_gray.png";
import designEspaceWhite from "../assets/prestations/image_design_espace_white.png";
import designEspaceBlack from "../assets/prestations/image_design_espace_black.png";
import designEvenementielWhite from "../assets/prestations/image_design_evenementiel_white.png";
import designEvenementielBlack from "../assets/prestations/image_design_evenementiel_black.png";
import workshopWhite from "../assets/prestations/image_workshop_white.png";
import workshopBlack from "../assets/prestations/image_workshop_black.png";
import dataManagementWhite from "../assets/prestations/image_data_management_white.png";
import dataManagementBlack from "../assets/prestations/image_data_management_black.png";

export const prestations = [
	{
		id: "design_industriel",
		title: "DESIGN INDUSTRIEL",
		label: "Design Industriel",
		skills: [
			"Sketches",
			"3DS Max",
			"Rhino 3D",
			"Prototypes",
			"Réalisation d'objets et meubles manufacturés",
		],
		description:
			"Nous vous aidons à transformer vos idées en un produit innovant et ce, jusqu'à sa fabrication artisanale. Notre savoir-faire permet d'unir esthétique et fonctionnalité, tout en étant attaché aux enjeux du 21è siècle.",
		image: {
			white: designIndustrielWhite,
			black: designIndustrielBlack,
			parameters: {
				alt: "Design Industriel Image",
				className: "-translate-y-24 bottom-0",
			},
		},
	},
	{
		id: "identite_de_marque",
		title: "IDENTITÉ DE MARQUE",
		label: "Identité de marque",
		skills: ["Typographie", "Graphisme", "Adobe", "Branding", "Figma"],
		description:
			"Nous vous accompagnons dans la création et le développement de l'identité de votre marque, reflétant votre personnalité et votre connexion au monde",
	},
	{
		id: "developpement_web",
		title: "DÉVELOPPEMENT WEB",
		label: "Développement web",
		skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
		description:
			"Nous mettons en œuvre nos compétences en informatique et en design, alliant créativité et fonctionnalité, au service du site web de votre entreprise.",
		image: {
			gray: developpementWebGray,
			parameters: {
				alt: "Développement Web Image",
				className:
					"left-0 opacity-100 translate-y-76 md:translate-y-36 md:scale-115 md:translate-x-4 lg:translate-x-100 lg:translate-y-10 lg:scale-130",
			},
		},
	},
	{
		id: "strategie_experience",
		title: "STRATÉGIE D'EXPÉRIENCE",
		label: "Stratégie d'expérience",
		skills: [
			"Observation",
			"Persona",
			"Interviews",
			"Audit",
			"Sondages",
			"Benchmark",
			"Storyboard",
		],
		description:
			"Nous vous assistons dans la recherche et l'optimisation de l'expérience utilisateur, pour ainsi développer la solution la plus pertinente face aux enjeux de vos clients.",
		image: {
			gray: strategieExperienceGray,
			parameters: {
				alt: "Stratégie Expérience Image",
				className:
					"bottom-0 -translate-y-48 opacity-100 lg:-translate-x-50 lg:scale-150",
			},
		},
	},
	{
		id: "design_espace",
		title: "DESIGN D'ESPACE",
		label: "Design d'espace",
		skills: [
			"Maquette d'objet",
			"Sketches",
			"3DS Max",
			"Rhino 3D",
			"Signalétique",
		],
		description:
			"Nous vous aidons à imaginer des espaces qui favorisent les interactions et enrichissent la vie quotidienne des utilisateurs.",
		image: {
			white: designEspaceWhite,
			black: designEspaceBlack,
			parameters: {
				alt: "Design Espace Image",
				className:
					"bottom-0 -translate-y-60 lg:bottom-auto lg:-translate-x-20 lg:-translate-y-0 scale-150",
			},
		},
	},
	{
		id: "design_evenementiel",
		title: "DESIGN ÉVÉNEMENTIEL",
		label: "Stratégie Événementiel",
		skills: [
			"Adobe",
			"Graphisme",
			"Photographie",
			"Signalétique",
			"Scénographie",
		],
		description:
			"Nous vous épaulons dans la conception et la gestion de vos événements pour garantir une expérience immersive et marquante pour les utilisateurs.",
		image: {
			white: designEvenementielWhite,
			black: designEvenementielBlack,
			parameters: {
				alt: "Design Évènementiel Image",
				className:
					"bottom-0 -translate-y-24 lg:bottom-auto lg:-translate-y-0",
			},
		},
	},
	{
		id: "workshop",
		title: "WORKSHOP",
		label: "Workshop",
		skills: [
			"Design Thinking",
			"Facilitation Graphique",
			"Mind Mapping",
			"Intelligence Collective",
			"Management interculturel",
		],
		description:
			"Nous organisons des ateliers de workshop en interne pour dévoiler à votre équipe le pouvoir du design.",
		image: {
			white: workshopWhite,
			black: workshopBlack,
			parameters: {
				alt: "Workshop Image",
				className:
					"bottom-0 lg:bottom-auto lg:-translate-x-20 -translate-y-56 lg:-translate-y-0 lg:scale-125",
			},
		},
	},
	{
		id: "data_management",
		title: "DATA MANAGEMENT",
		label: "Data management",
		skills: [
			"Commandes UNIX",
			"Excel",
			"Analyse",
			"Visualisation",
			"Gestion de bases de données",
		],
		description:
			"Nous proposons des services de tri et d'organisation de données, pour des bases de données fiables et plus accessibles.",
		image: {
			white: dataManagementWhite,
			black: dataManagementBlack,
			parameters: {
				alt: "Design Espace Image",
				className:
					"bottom-0 -translate-y-48 lg:bottom-auto lg:-translate-y-0",
			},
		},
	},
];
