import { useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import cercleBlanc from "../assets/cercle blanc.png";
import cercleNoir from "../assets/cercle noir.png";
import doubleDown from "../assets/Double Down.png";
import avalana from "../assets/Avalana.png";
import { Link } from "react-router-dom";
import image_design_industriel from "../assets/image_design_industriel.png";

function NosPrestations() {
	const { theme, setTheme } = useTheme();
	const cercle = theme === "light" ? cercleNoir : cercleBlanc;

	const prestationRefs = useRef([]);

	const scrollToNext = (index) => {
		prestationRefs.current[index + 1]?.scrollIntoView({
			behavior: "smooth",
		});
	};

	const [flippedIndex, setFlippedIndex] = useState(null);

	const toggleFlip = (index) => {
		setFlippedIndex((prev) => (prev === index ? null : index));
	};

	const prestations = [
		{
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
			image: image_design_industriel,
		},
		{
			title: "IDENTITÉ DE MARQUE",
			skills: ["Typographie", "Graphisme", "Adobe", "Branding", "Figma"],
			description:
				"Nous vous accompagnons dans la création et le développement de l'identité de votre marque, reflétant votre personnalité et votre connexion au monde",
		},
		{
			title: "DÉVELOPPEMENT WEB",
			skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
			description:
				"Nous mettons en œuvre nos compétences en informatique et en design, alliant créativité et fonctionnalité, au service du site web de votre entreprise.",
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
	];

	const renderPrestations = () => {
		return prestations.map((prestation, index) => (
			<div
				key={index}
				ref={(el) => (prestationRefs.current[index] = el)}
				className='relative w-full h-200 mb-24 flex justify-center items-center'
			>
				{/* RECTO */}
				<div
					className={`absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d backface-hidden rotate-y-0 ${
						flippedIndex === index ? "rotate-y-180" : "rotate-y-0"
					}`}
				>
					<div className='mt-54 mb-18'>
						<img
							src={cercle}
							alt='Cercle blanc'
							className='pointer-events-none h-300 w-auto absolute -translate-x-52 -translate-y-122'
						/>
						<div className='flex items-center justify-between space-x-16'>
							<div className='flex h-64'>
								<span className='mx-16 translate-y-12 align-middle w-52 h-[3px] bg-foreground inline-block' />
								<h1 className='text-9xl font-manrope font-light'>
									{prestation.title}
								</h1>
							</div>
							<div className='flex space-x-12 items-center'>
								<span className='align-middle h-64 w-[1px] bg-foreground opacity-50' />
								<ul className='list-disc ml-5 w-60 space-y-4'>
									{prestation.skills.map(
										(skill, skillIndex) => (
											<li key={skillIndex}>{skill}</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className='flex flex-col'>
						<span className='mb-10 align-middle h-32 w-[3px] bg-foreground translate-x-7' />
						<div className='flex items-center space-x-12'>
							<div className='flex flex-col space-y-4 items-center'>
								{index > 0 && (
									<Button
										className='w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300'
										onClick={() =>
											prestationRefs.current[
												index - 1
											]?.scrollIntoView({
												behavior: "smooth",
											})
										}
									>
										<img
											src={doubleDown}
											alt='Suivant'
											className='w-6 h-auto scale-y-[-1]'
										/>
									</Button>
								)}
								{index < prestations.length - 1 && (
									<Button
										className='w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300'
										onClick={() => scrollToNext(index)}
									>
										<img
											src={doubleDown}
											alt='Suivant'
											className='w-6 h-auto'
										/>
									</Button>
								)}
							</div>
							<Separator className='flex-1 !h-0.25 bg-foreground my-12 w-auto opacity-50' />
							<Button
								className='w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300'
								onClick={() => toggleFlip(index)}
							>
								Découvrir
							</Button>
						</div>
					</div>
				</div>
				{/* VERSO */}
				<div
					className={`absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d backface-hidden ${
						flippedIndex === index ? "rotate-y-0" : "rotate-y-180"
					}`}
				>
					<div className='mt-46 mb-18'>
						<img
							src={cercleBlanc}
							alt='Cercle blanc'
							className='pointer-events-none h-124 w-auto absolute -translate-x-58 -translate-y-78'
						/>
						<div className='flex items-center space-x-16 justify-between'>
							<div className='flex flex-col items-start w-52 space-y-8'>
								<span className='align-middle w-full h-[3px] bg-foreground' />
								<h1 className='text-3xl font-manrope font-light'>
									{prestation.title}
								</h1>
							</div>
							<img
								src={cercleBlanc}
								alt='Cercle blanc'
								className='pointer-events-none h-136 w-auto absolute -translate-x-38 translate-y-64'
							/>
							<span className='align-middle h-64 scale-y-200 w-[1px] bg-foreground opacity-50' />
							<div className='flex flex-col space-y-8 w-full'>
								{prestation.title === "IDENTITÉ DE MARQUE" && (
									<div className='w-full flex justify-end relative'>
										<span className='absolute top-0 left-0 w-[200%] -translate-x-16 h-px border-t border-dashed border-gray-400' />
										<span className='absolute bottom-0 left-0 w-[116%] -translate-x-16 h-px border-t border-dashed border-gray-400' />
										<div className='w-sm -translate-x-12 self-end'>
											<span className='absolute bottom-0 left-0 h-74 w-px border-l border-dashed border-gray-400' />
											<span className='absolute top-0 right-0 h-221 -translate-y-46 w-px border-l border-dashed border-gray-400' />

											<span className='absolute top-0 left-24 h-66 -translate-y-46 w-px border-l border-dashed border-gray-400' />
											<div className='absolute top-20 left-23 w-2 h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
											<div className='absolute top-21 left-19 w-10 h-10 border-dashed border-1 rounded-full border-gray-400' />

											<span className='absolute top-0 left-34 h-51 -translate-y-46 w-px border-l border-dashed border-gray-400' />
											<div className='absolute top-5 left-33 w-2 h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
											<div className='absolute top-6 left-29 w-10 h-10 border-dashed border-1 rounded-full border-gray-400' />

											<span className='absolute -bottom-4 left-62 h-148 translate-y-full w-px border-l border-dashed border-gray-400' />
											<div className='absolute -bottom-4 left-61 w-2 h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
											<div className='absolute -bottom-3 left-57 w-10 h-10 border-dashed border-1 rounded-full border-gray-400' />

											<span className='absolute -bottom-4 left-80 h-148 translate-y-full w-px border-l border-dashed border-gray-400' />
											<div className='absolute -bottom-4 left-79 w-2 h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
											<div className='absolute -bottom-3 left-75 w-10 h-10 border-dashed border-1 rounded-full border-gray-400' />
											<img
												src={avalana}
												alt='Avalana'
												className='w-full h-auto'
											/>
										</div>
									</div>
								)}
								<p className='text-lg font-manrope font-light max-w-2xl'>
									{prestation.description}
								</p>
								<div className='flex space-x-12 items-center'>
									<ul className='list-disc ml-5 w-60 space-y-4'>
										{prestation.skills.map(
											(skill, skillIndex) => (
												<li key={skillIndex}>
													{skill}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
							{prestation.image && (
								<img
									src={prestation.image}
									alt={prestation.title}
									className='absolute right-0 w-156 h-auto object-cover rounded-lg shadow-lg'
								/>
							)}
						</div>
					</div>
					<div className='flex flex-col'>
						<span className='mb-10 align-middle h-32 w-[3px] bg-foreground translate-x-7' />
						<div className='flex items-center space-x-12'>
							<div className='flex flex-col space-y-4 items-center'>
								{index > 0 && (
									<Button
										className='w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300'
										onClick={() =>
											prestationRefs.current[
												index - 1
											]?.scrollIntoView({
												behavior: "smooth",
											})
										}
									>
										<img
											src={doubleDown}
											alt='Suivant'
											className='w-6 h-auto scale-y-[-1]'
										/>
									</Button>
								)}
								{index < prestations.length - 1 && (
									<Button
										className='w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300'
										onClick={() => scrollToNext(index)}
									>
										<img
											src={doubleDown}
											alt='Suivant'
											className='w-6 h-auto'
										/>
									</Button>
								)}
							</div>
							<Separator className='flex-1 !h-0.25 bg-foreground w-auto opacity-50' />
							<Button
								className='w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300'
								onClick={() => toggleFlip(index)}
							>
								Retour
							</Button>
						</div>
					</div>
				</div>
			</div>
		));
	};

	return <div className='flex flex-col'>{renderPrestations()}</div>;
}

export default NosPrestations;
