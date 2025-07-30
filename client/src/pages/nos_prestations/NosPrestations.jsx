import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import image_design_industriel_white from "@/assets/image_design_industriel_white.png";
import image_data_management_white from "@/assets/image_data_management_white.png";
import image_design_espace_white from "@/assets/image_design_espace_white.png";
import image_workshop_white from "@/assets/image_workshop_double_white.png";
import image_design_evenementiel_white from "@/assets/image_design_evenementiel_white.png";
import image_design_industriel_black from "@/assets/image_design_industriel_black.png";
import image_data_management_black from "@/assets/image_data_management_black.png";
import image_design_espace_black from "@/assets/image_design_espace_black.png";
import image_workshop_black from "@/assets/image_workshop_double_black.png";
import image_design_evenementiel_black from "@/assets/image_design_evenementiel_black.png";

import image_developpement_web_gray from "@/assets/image_developpement_web_gray.png";
import image_strategie_experience_gray from "@/assets/image_strategie_experience_gray.png";
import PrestationCardRecto from "./PrestationCardRecto";
import PrestationCardVerso from "./PrestationCardVerso";

function NosPrestations() {
	const { theme } = useTheme();

	const prestationRefs = useRef([]);

	const scrollToNext = (index) => {
		prestationRefs.current[index + 1]?.scrollIntoView({
			behavior: "smooth",
		});
	};

	const [flippedIndexes, setFlippedIndexes] = useState([]);

	const toggleFlip = (index) => {
		setFlippedIndexes((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	const prestations = [
		{
			id: "design_industriel",
			title: "DESIGN INDUSTRIEL",
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
				white: image_design_industriel_white,
				black: image_design_industriel_black,
				parameters: {
					alt: "Design Industriel Image",
					className: "-translate-y-24 bottom-0",
				}
			},
		},
		{
			id: "identite_de_marque",
			title: "IDENTITÉ DE MARQUE",
			skills: ["Typographie", "Graphisme", "Adobe", "Branding", "Figma"],
			description:
				"Nous vous accompagnons dans la création et le développement de l'identité de votre marque, reflétant votre personnalité et votre connexion au monde",
		},
		{
			id: "developpement_web",
			title: "DÉVELOPPEMENT WEB",
			skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
			description:
				"Nous mettons en œuvre nos compétences en informatique et en design, alliant créativité et fonctionnalité, au service du site web de votre entreprise.",
			image: {
				gray: image_developpement_web_gray,
				parameters: {
					alt: "Développement Web Image",
					className: "left-0 opacity-100 translate-y-76 md:translate-y-36 md:scale-115 md:translate-x-4 lg:translate-x-100 lg:translate-y-10 lg:scale-130",
				}
			},
		},
		{
			id: "strategie_experience",
			title: "STRATÉGIE D'EXPÉRIENCE",
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
				gray: image_strategie_experience_gray,
				parameters: {
					alt: "Stratégie Expérience Image",
					className: "bottom-0 -translate-y-48 opacity-100 lg:-translate-x-50 lg:scale-150",
				}
			},
		},
		{
			id: "design_espace",
			title: "DESIGN D'ESPACE",
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
				white: image_design_espace_white,
				black: image_design_espace_black,
				parameters: {
					alt: "Design Espace Image",
					className: "bottom-0 -translate-y-60 lg:bottom-auto lg:-translate-x-20 lg:-translate-y-0 scale-150",
				}
			},
		},
		{
			id: "design_evenementiel",
			title: "DESIGN ÉVÉNEMENTIEL",
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
				white: image_design_evenementiel_white,
				black: image_design_evenementiel_black,
				parameters: {
					alt: "Design Évènementiel Image",
					className: "bottom-0 -translate-y-24 lg:bottom-auto lg:-translate-y-0",
				}
			},
		},
		{
			id: "workshop",
			title: "WORKSHOP",
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
				white: image_workshop_white,
				black: image_workshop_black,
				parameters: {
					alt: "Workshop Image",
					className: "bottom-0 lg:bottom-auto lg:-translate-x-20 -translate-y-56 lg:-translate-y-0 lg:scale-125",
				}
			},
		},
		{
			id: "data_management",
			title: "DATA MANAGEMENT",
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
				white: image_data_management_white,
				black: image_data_management_black,
				parameters: {
					alt: "Design Espace Image",
					className: "bottom-0 -translate-y-48 lg:bottom-auto lg:-translate-y-0",
				}
			},
		},
	];

	const location = useLocation();

	useEffect(() => {
		const { search, hash } = window.location;
		const params = new URLSearchParams(search);
		const doFlip = params.get("flipped");

		if (doFlip && hash) {
			const hashId = hash.replace("#", "");

			const index = prestations.findIndex((p) => p.id === hashId);

			if (index !== -1) {
				setFlippedIndexes((prev) =>
					prev.includes(index) ? [...prev] : [...prev, index]
				);
			}
		}
	}, [location]);

	const getImageSrc = (prestation) => {
		if (theme === "light")
			return prestation.image?.black || prestation.image?.gray || false;
		return prestation.image?.white || prestation.image?.gray || false;
	};

	const renderPrestations = () => {
		return prestations.map((prestation, index) => {
			const imageSrc = getImageSrc(prestation);

			return (
				<article
					id={prestation.id}
					key={index}
					ref={(el) => (prestationRefs.current[index] = el)}
					className='relative w-full h-200 lg:h-200 mb-40 flex justify-center items-center'
					aria-labelledby={`${prestation.id}-title`}
				>
					{/* RECTO */}
					<PrestationCardRecto prestations={prestations} prestation={prestation} theme={theme} scrollToNext={scrollToNext} toggleFlip={toggleFlip} flippedIndexes={flippedIndexes} index={index} />
					{/* VERSO */}
					<PrestationCardVerso prestations={prestations} prestation={prestation} theme={theme} scrollToNext={scrollToNext} toggleFlip={toggleFlip} imageSrc={imageSrc} flippedIndexes={flippedIndexes} index={index} />
				</article>
			);
		});
	};

	return <section className='flex flex-col h-full w-full'>{renderPrestations()}</section>;
}

export default NosPrestations;
