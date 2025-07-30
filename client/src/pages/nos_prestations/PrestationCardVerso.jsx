import RotatingCircle from "@/components/RotatingCircle"
import DoubleDown from "@/components/ui/doubleDown";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import avalanaWhite from "@/assets/Avalana.png";
import avalanaBlack from "@/assets/Avalana black.png";

export default function PrestationCardRecto({ prestations, prestation, theme, scrollToNext, toggleFlip, imageSrc, flippedIndexes, index }) {

	const avalana = theme === "light" ? avalanaBlack : avalanaWhite;

	return (

		<div
			className={`absoluteflex flex-col justify-between w-full h-full transition-transform duration-700 transform-style-preserve-3d backface-hidden ${flippedIndexes.includes(index)
				? "rotate-y-0"
				: "rotate-y-180"
				}`}
		>
			<div className='lg:mt-46 lg:mb-18'>
				<RotatingCircle className="max-w-92 md:max-w-92 lg:max-w-none lg:h-124 -translate-x-24 lg:-translate-x-58 -translate-y-36 lg:-translate-y-78" doAnimate={false} />
				<div className='flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16 justify-between'>
					<div className='flex flex-col items-start w-52 space-y-8'>
						<span className='align-middle w-full h-[3px] bg-foreground' />
						<h1 className='text-3xl font-manrope font-light'>
							{prestation.title}
						</h1>
					</div>

					<RotatingCircle className="max-w-92 md:max-w-92 lg:max-w-none lg:h-136 -translate-x-38 translate-y-64" doAnimate={false} />
					<span className='align-middle w-64 h-[1px] lg:h-64 lg:scale-y-200 lg:w-[1px] bg-foreground opacity-50' />
					<div className='flex flex-col space-y-8 w-full'>
						{prestation.title ===
							"IDENTITÉ DE MARQUE" && (
								<div className='w-full flex justify-end relative'>
									<span className='absolute top-0 left-0 w-[200%] -translate-x-16 h-px border-t border-dashed border-gray-400' />
									<span className='absolute bottom-0 left-0 w-[150%] -translate-x-16 h-px border-t border-dashed border-gray-400' />
									<div className='w-sm -translate-x-12 self-end'>
										<span className='absolute bottom-0 left-0 h-35 lg:h-74 w-px border-l border-dashed border-gray-400' />
										<span className='absolute top-0 right-0 h-144 lg:h-221 -translate-y-8 lg:-translate-y-46 w-px border-l border-dashed border-gray-400' />

										<span className='absolute top-0 left-1/4 translate-x-0.5 lg:translate-x-1 h-1/1 lg:h-66 -translate-y-8  lg:-translate-y-46 w-px border-l border-dashed border-gray-400' />
										<div className='absolute bottom-0 -translate-y-7 left-1/4 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
										<div className='absolute bottom-0 -translate-y-2 lg:translate-y-2 left-1/4 -translate-x-2.5 lg:-translate-x-4 w-6 h-6 lg:w-10 lg:h-10 border-dashed border-1 rounded-full border-gray-400' />

										<span className='absolute top-0 left-4/11 h-13 lg:h-51 -translate-y-8  lg:-translate-y-46 w-px border-l border-dashed border-gray-400' />
										<div className='absolute top-5 left-4/11 -translate-x-0.5 lg:-translate-x-1 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
										<div className='absolute top-6 left-4/11 -translate-x-2.5 lg:-translate-x-5 w-6 h-6 lg:w-10 lg:h-10 border-dashed border-1 rounded-full border-gray-400' />

										<span className='absolute -bottom-3 lg:-bottom-4 left-3/5 translate-x-0.5 lg:translate-x-1 h-111 lg:h-148 translate-y-full w-px border-l border-dashed border-gray-400' />
										<div className='absolute -bottom-3 lg:-bottom-4 left-3/5 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
										<div className='absolute -bottom-2 lg:-bottom-3 left-3/5 -translate-x-2.5 lg:-translate-x-4 w-6 h-6 lg:w-10 lg:h-10 border-dashed border-1 rounded-full border-gray-400' />

										<span className='absolute -bottom-3 lg:-bottom-4 left-4/5 translate-x-0.5 lg:translate-x-1 h-111 lg:h-148 translate-y-full w-px border-l border-dashed border-gray-400' />
										<div className='absolute -bottom-3 lg:-bottom-4 left-4/5 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-400 rounded-full shadow-lg overflow-hidden' />
										<div className='absolute -bottom-2 lg:-bottom-3 left-4/5 -translate-x-2.5 lg:-translate-x-4 w-6 h-6 lg:w-10 lg:h-10 border-dashed border-1 rounded-full border-gray-400' />
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
					{imageSrc && (
						<img
							src={imageSrc}
							alt={prestation.title}
							className={`absolute right-0 w-156 h-auto object-cover opacity-50 ${prestation.image?.parameters?.className || ""}`}
						/>
					)}
				</div>
			</div>
			<div className='flex flex-col'>
				<span className='mb-10 align-middle h-[3px] w-32 lg:h-32 lg:w-[3px] bg-foreground translate-x-7' />
				<div className='flex items-center space-x-12'>
					<div className='flex flex-col space-y-4 items-center'>
						{index > 0 && (
							<DoubleDown
								theme={theme}
								action={() =>
									prestationRefs.current[
										index - 1
									]?.scrollIntoView({
										behavior: "smooth",
									})
								}
								direction='up'
							/>
						)}
						{index < prestations.length - 1 && (
							<DoubleDown
								theme={theme}
								action={() => scrollToNext(index)}
								direction='down'
							/>
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
	)
}