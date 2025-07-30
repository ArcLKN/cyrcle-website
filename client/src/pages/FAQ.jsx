import { useTheme } from "@/components/theme-provider";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import souche1_white from "@/assets/souche_1.png";
import souche1_black from "@/assets/souche_1_black.png";

function FAQ() {
	const { theme, setTheme } = useTheme();
	const souche = theme === "dark" ? souche1_white : souche1_black;
	return (
		<div className='flex flex-col md:flex-row justify-between items-center'>
			<h1 className='text-7xl lg:text-9xl'>FAQ</h1>
			<img
				src={souche}
				alt='souche'
				className='pointer-events-none absolute h-248 w-auto top-1/2 left-1/2 -translate-x-124 -translate-y-100 opacity-50'
			/>
			<Accordion type='single' collapsible className='w-full max-w-2xl'>
				<AccordionItem className='p-4 md:md:px-8' value='item-1'>
					<AccordionTrigger className='text-md'>
						Comment nous contacter ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						<p>À travers notre page de contact, notre adresse mail <a href="mailto:cyrcle.cydesign@gmail.com">cyrcle.cydesign@gmail.com</a> ou encore notre <a href="https://www.linkedin.com/company/cyrcle-design/">compte linkedin</a>.
							Nous sommes disponibles pour réponde à vos questionnements et vos potentiels projets.</p>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 md:px-8' value='item-2'>
					<AccordionTrigger className='text-md'>
						Où sommes-nous situés ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Notre école est située à Saint germain en laye à IxCampus, un campus mêlant entreprise et étudiant.
						Nous pouvons nous déplacer pour certaines missions.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 md:px-8' value='item-3'>
					<AccordionTrigger className='text-md'>
						Quels services proposons-nous ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Nous accompagnons entreprises et collectivités dans leurs projets d’innovation grâce à une approche pluridisciplinaire.
						Nos prestations incluent la stratégie d’expérience, le design industriel, l’identité de marque (graphisme, digital, développement web), le design d’espace et le design événementiel.
						Nous animons également des workshops sur mesure et réalisons des audits pour répondre à des problématiques internes et orienter les prises de décision.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 md:px-8' value='item-4'>
					<AccordionTrigger className='text-md'>
						Quels sont nos tarifs ? Offrons-nous des réductions ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Nos tarifs sont mis en place en accord avec votre projet en fonction d’une grille tarifaire établie pour rémunérer nos étudiants à la hauteur de leurs travails.
						Un budget final est réalisé en collaboration avec nos membres pour répondre au mieux à votre problématique.
						Pour cette raison, nous ne proposons aucune réduction.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 md:px-8' value='item-5'>
					<AccordionTrigger className='text-md'>
						Quelle est l'histoire de notre jeune entreprise ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Née de l’initiative de trois étudiants de CY école de design,  Lou Gicquel, Appoline Boiselle et Mathis Dufal,  notre junior entreprise est le fruit d’une volonté commune d’ajouter une dimension entrepreneuriale à leur formation d’ingénieur-designer.
						Avec l’ambition de faire grandir les talents de l’école et de renforcer ses liens avec le monde professionnel, ils fondent CYRCLE design.
						Un an plus tard, l'association intègre officiellement le mouvement des Junior-Entreprises et propose désormais des missions rétribuées aux étudiants, favorisant leur montée en compétences et le rayonnement de l’école.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 md:px-8' value='item-6'>
					<AccordionTrigger className='text-md'>
						Quels sont les délais de nos prestations ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Nos délais s’adaptent aux besoins et aux contraintes de votre entreprise, dans la mesure du possible.
						Toutefois, en tant que junior entreprise, nos consultants sont des étudiants qui mènent leurs missions en parallèle de leurs études.
						Cela signifie qu’ils ne peuvent pas travailler à temps plein, ce qui peut rallonger certains délais.
						Nous veillons cependant à proposer un calendrier réaliste et à respecter les échéances fixées ensemble.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default FAQ;
