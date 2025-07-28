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
				{sectionData.map(({ sectionId, label }, index) => {
					const position =
						index === 0
							? "left"
							: index === sectionData.length - 1
								? "right"
								: "middle";

					return (
						<PrestationCarouselItem
							key={sectionId}
							sectionId={sectionId}
							label={label}
							position={position}
						/>
					);
				})}
				<CarouselItem className='basis-1/4'></CarouselItem>
			</CarouselContent>
		</Carousel>
	)
}
