import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import souche1 from "@/assets/souche_1.png";
import souche2 from "@/assets/souche_2.png";
import souche3 from "@/assets/souche_3.png";

function NousDecouvrir() {
	const [textIndex, setTextIndex] = useState(0);

	const texts = [
		{
			title: "Qui sommes-nous ?",
			text: "CYRCLE : L’innovation au service des entreprises/Façonner l’avenir par le Design\nCYRCLE Design est la Junior Création de CY École de Design. Fondée et gérée par des étudiants, notre association a pour mission de créer un pont entre le monde académique et le monde professionnel en offrant des prestations de qualité, soutenues par des compétences fraîches et innovantes. Nous apportons aux entreprises un accès direct aux talents de demain, avec une	approche à la fois créative et pragmatique.",
		},
		{
			title: "Notre vision",
			text: "Dans un monde en constante évolution, le design s'impose comme un levier essentiel de transformation. De la matière à la décision, les étudiants de CY École de Design sont formés pour relever les défis du 21ème siècle, apportant des solutions créatives et engagées.",
		},
		{
			title: "Pourquoi faisons-nous cela ?",
			text: "CYRCLE Design permet aux étudiants de CY École de Design de se confronter dès leurs études aux réalités du monde de l’entreprise. Grâce à des missions concrètes, ils développent des compétences pratiques, affinent leur sens de l’adaptabilité et apprennent à gérer des projets de A à Z. ",
		},
		{
			title: "Pourquoi faire appel à nous ?",
			text: "En confiant vos projets à CYRCLE Design, vous choisissez une équipe jeune, motivée, et imprégnée des dernières tendances en design. Nos étudiants offrent un regard neuf, une créativité sans limite et une capacité d’adaptation précieuse dans un monde en constante évolution. CYRCLE vous offre un accompagnement dynamique et sur-mesure, où chaque idée est une opportunité d’innover.",
		},
		{
			title: "Nos valeurs",
			text: "Alignée avec les valeurs de CY École de Design, CYRCLE s’engage à intégrer dans chaque projet les enjeux actuels de notre société et de notre environnement. Nos démarches sont ancrées dans le respect de l’éthique et de la durabilité, garantissant des solutions responsables, innovantes et en phase avec les défis d’aujourd’hui et de demain",
		},
	];

	return (
		<div className='space-y-8 max-w-2/3'>
			<h1 className='text-5xl font-bold'>{texts[textIndex].title}</h1>
			<p>{texts[textIndex].text}</p>
			<div className='flex flex-row space-x-4 my-36'>
				{textIndex > 0 && (
					<Button
						className='w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300'
						onClick={() => setTextIndex(Math.max(textIndex - 1, 0))}
					>
						Précédent
					</Button>
				)}
				{textIndex < texts.length - 1 && (
					<Button
						className='w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300'
						onClick={() =>
							setTextIndex(
								Math.min(textIndex + 1, texts.length - 1)
							)
						}
					>
						Suivant
					</Button>
				)}
			</div>
			<img
				src={souche1}
				alt='souche1'
				className='pointer-events-none absolute right-0 top-0 h-164 w-auto -translate-x-112 translate-y-24 opacity-50'
			/>
			<img
				src={souche2}
				alt='souche2'
				className='pointer-events-none absolute right-0 top-0 h-164 w-auto -translate-x-38 translate-y-36 opacity-50'
			/>
			<img
				src={souche3}
				alt='souche3'
				className='pointer-events-none absolute right-0 top-0 h-164 w-auto -translate-x-0 translate-y-54 opacity-50'
			/>
		</div>
	);
}

export default NousDecouvrir;
