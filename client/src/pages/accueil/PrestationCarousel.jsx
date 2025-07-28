import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { PrestationCarouselItem } from "./PrestationCarouselItem";

export default function PrestationCarousel() {

	const sectionData = [
		{
			sectionId: "identite_de_marque",
			label: "Identité de marque",
		},
		{
			sectionId: "developpement_web",
			label: "Développement web",
		},
		{
			sectionId: "strategie_experience",
			label: "Stratégie d'expérience",
		},
		{
			sectionId: "design_espace",
			label: "Design d'espace",
		},
		{
			sectionId: "strategie_evenementiel",
			label: "Stratégie Événementiel",
		},
		{
			sectionId: "workshop",
			label: "Workshop",
		},
		{
			sectionId: "data_management",
			label: "Data management",
		},
		{
			sectionId: "design_industriel",
			label: "Design Industriel",
		}
	];


	return (
		<Carousel
			className='-translate-x-16 md:-translate-x-32 w-[125%]'
			opts={{
				dragFree: true,
			}}
		>
			<CarouselContent className='mx-16 xs:mx-24 sm:mx-36 md:mx-48 lg:mx-32'>
				<PrestationCarouselItem
					key={0}
					sectionId={sectionData[0].sectionId}
					label={sectionData[0].label}
					position={"left"}
				/>
				{sectionData.slice(1, -1).map((label, index) => (
					<PrestationCarouselItem
						key={index + 1}
						sectionId={sectionData[index + 1].sectionId}
						label={sectionData[index + 1].label}
						position={"middle"}
					/>
				))}
				<PrestationCarouselItem
					key={sectionData.length - 1}
					sectionId={sectionData[sectionData.length - 1].sectionId}
					label={sectionData[sectionData.length - 1].label}
					position={"right"}
				/>
				<CarouselItem className='basis-1/4'></CarouselItem>
			</CarouselContent>
		</Carousel>
	)
}
