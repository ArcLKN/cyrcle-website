import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { PrestationCarouselItem } from "./PrestationCarouselItem";
import { prestations } from "@/data/prestations";

export default function PrestationCarousel() {
	return (
		<Carousel
			className='-translate-x-16 md:-translate-x-32 w-[125%]'
			opts={{
				dragFree: true,
			}}
		>
			<CarouselContent className='mx-16 xs:mx-24 sm:mx-36 md:mx-48 lg:mx-32'>
				{prestations.map(({ id, label }, index) => {
					const position =
						index === 0
							? "left"
							: index === prestations.length - 1
							? "right"
							: "middle";

					return (
						<PrestationCarouselItem
							key={id}
							sectionId={id}
							label={label}
							position={position}
						/>
					);
				})}
				<CarouselItem className='basis-1/4'></CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
