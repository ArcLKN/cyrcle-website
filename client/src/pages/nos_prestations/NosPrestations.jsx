import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import PrestationCardRecto from "./PrestationCardRecto";
import PrestationCardVerso from "./PrestationCardVerso";
import { Button } from "@/components/ui/button";
import { prestations } from "@/data/prestations";

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
					<PrestationCardRecto
						prestations={prestations}
						prestation={prestation}
						theme={theme}
						scrollToNext={scrollToNext}
						toggleFlip={toggleFlip}
						flippedIndexes={flippedIndexes}
						index={index}
					/>
					<PrestationCardVerso
						prestations={prestations}
						prestation={prestation}
						theme={theme}
						scrollToNext={scrollToNext}
						toggleFlip={toggleFlip}
						imageSrc={imageSrc}
						flippedIndexes={flippedIndexes}
						index={index}
					/>
				</article>
			);
		});
	};

	return (
		<section className='flex flex-col h-full w-full items-center'>
			{renderPrestations()}
			<Button
				className='min-w-auto'
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				aria-label='Remonter en haut de la page'
			>
				Go back to top
			</Button>
		</section>
	);
}

export default NosPrestations;
