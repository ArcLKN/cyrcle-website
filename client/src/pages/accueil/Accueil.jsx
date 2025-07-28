import React, { useEffect } from "react";
import cercleBlanc from "@/assets/cercle blanc.png";
import cercleNoir from "@/assets/cercle noir.png";
import { useTheme } from "@/components/theme-provider";
import doubleDown from "@/assets/Double Down.png";
import { Separator } from "@/components/ui/separator";
import PrestationCarousel from "./PrestationCarousel";
import { Link } from "react-router-dom";
import LinkedinLogo from "@/assets/Linkedin-logo-black.webp";

function Accueil() {

	const { theme, setTheme } = useTheme();
	const cercle = theme === "light" ? cercleNoir : cercleBlanc;

	const profileImages = import.meta.glob("/src/assets/image *.png", {
		eager: true,
	});
	const profileImageList = Object.values(profileImages);
	const profilesInfo = [
		{
			name: "Lou Gicquel",
			role: "Présidente",
			image: profileImageList[0],
			linkedin: "https://www.linkedin.com/in/lougicquel/",
		},
		{
			name: "Appoline Boiselle",
			role: "Secrétaire Générale",
			image: profileImageList[1],
			linkedin: "https://www.linkedin.com/in/appoline-boiselle-382652262/",
		},
		{
			name: "Mathis Dufal",
			role: "Responsable Trésorerie",
			image: profileImageList[2],
			linkedin: "https://www.linkedin.com/in/mathis-dufal-631346208/",
		},
		{
			name: "Mahdi Jaafar",
			role: "Responsable Développement commercial",
			image: profileImageList[3],
			linkedin: "https://www.linkedin.com/in/mahdi-jaafar-983670238/",
		},
		{
			name: "Sophie Mereyde",
			role: "Responsable Ressources Humaines",
			image: profileImageList[4],
			linkedin: "https://www.linkedin.com/in/sophiemereyde/",
		},
		{
			name: "Bastien Meunier",
			role: "Responsable Chargé d'Affaires",
			image: profileImageList[5],
			linkedin: "https://www.linkedin.com/in/bastien-meunier-578b58245/",
		},
		{
			name: "N'Gnima Coulibaly",
			role: "Responsable Qualité",
			image: profileImageList[6],
			linkedin: "https://www.linkedin.com/in/n%E2%80%99gnima-coulibaly-237638239/",
		},
		{
			name: "Adrien Wilmart",
			role: "Responsable Technique",
			image: profileImageList[7],
			linkedin: "https://www.linkedin.com/in/adrienwlmrt/",
		},
		{
			name: "Aymène Ben Mohamed",
			role: "Responsable Communication",
			image: profileImageList[8],
			linkedin: "https://www.linkedin.com/in/aym%C3%A8ne-ben-mohamed/",
		},
	];

	return (
		<div className='relative'>
			<img
				src={cercle}
				alt='Cercle blanc'
				className='pointer-events-none absolute max-w-164 md:max-w-192 lg:max-w-none lg:h-300 w-auto -translate-x-74 lg:-translate-x-52 -translate-y-84 md-translate-y-112 animate-custom-rotate'
			/>
			<div className='flex flex-col font-manrope lg:px-8 space-y-12'>
				<div className='flex items-center'>
					<h1 className='text-7xl lg:text-9xl'>CYRCLE</h1>
					<span className='ml-10 align-middle w-48 h-[3px] bg-foreground' />
				</div>
				<div className='flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 md:justify-end'>
					<h1 className='text-7xl lg:text-9xl justify-left text-left'>
						THE
					</h1>
					<h1 className='text-7xl lg:text-9xl justify-center text-center'>
						POWER
					</h1>
					<h1 className='text-7xl lg:text-9xl justify-right text-right'>
						OF
					</h1>
				</div>
				<h1 className='text-7xl lg:text-9xl justify-end text-right'>DESIGN</h1>
			</div>
			<img
				src={cercle}
				alt='Cercle blanc'
				className='pointer-events-none absolute max-w-164 lg:max-w-none lg:h-300 w-auto right-0 translate-x-80 -translate-y-126  animate-custom-rotate [animation-delay:5s]'
			/>
			<Separator className='!h-0.25 bg-foreground mb-6 mt-12 lg:mt-24' />
			<div className='flex justify-between mb-8'>
				<p>cy école de design</p>
				<div className='text-right'>
					<p>34 rue de la croix, 78100</p>
					<p>saint-germain-en-laye</p>
				</div>
			</div>
			<img
				src={doubleDown}
				alt='doubleDown'
				className='mx-auto pointer-events-none h-12 w-12 animate-bounce'
			/>
			<div className='flex flex-col lg:flex-row items-start lg:items-center my-16 lg:my-42 lg:space-x-12'>
				<span className='hidden lg:flex lg:ml-10 align-middle w-48 h-[3px] bg-foreground -translate-x-20' />
				<h1 className='text-5xl md:text-7xl lg:text-9xl font-manrope'>PRESTATIONS</h1>
				<div className='flex flex-row space-x-4 lg:flex-col'>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						DESIGN
					</Link>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						INFORMATIQUE
					</Link>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						ÉVÉNEMENTIEL
					</Link>
				</div>
			</div>
			<PrestationCarousel />
			<img
				src={cercle}
				alt='Cercle blanc'
				className='pointer-events-none absolute max-w-164 md:max-w-192 lg:max-w-none lg:h-300 w-auto -right-0 translate-x-92 -translate-y-32  animate-custom-rotate [animation-delay:9s]'
			/>
			<div className='flex flex-col lg:flex-row items-start lg:items-center mt-42 mb-32 space-x-12'>
				<div className='text-right hidden lg:flex flex-row lg:flex-col space-y-3'>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						LA TEAM
					</Link>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						NOTRE ESPRIT
					</Link>
				</div>
				<h1 className='text-5xl md:text-7xl lg:text-9xl font-manrope'>NOUS DÉCOUVRIR</h1>
				<div className='flex lg:hidden flex-row lg:flex-col space-x-4'>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						LA TEAM
					</Link>
					<Link
						to='/'
						className='opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300'
					>
						NOTRE ESPRIT
					</Link>
				</div>
				<span className='hidden lg:flex ml-10 align-middle w-96 h-[3px] bg-foreground translate-x-24' />
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-items-center'>
				{profilesInfo.map((infos, index) => (
					<div
						key={index}
						className='group relative w-32 xs:w-36 sm:w-48 lg:w-52 xl:w-64 h-auto hover:border-background transition-all duration-500'
						href={infos?.linkedin ? infos.linkedin : "#"}
					// If you want to make the image clickable, you can wrap it in a Link
					>
						<Link
							to={infos?.linkedin ? infos.linkedin : "#"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={infos.image.default}
								alt={`Image ${index}`}
								className='mb-4 w-full h-auto aspect-[3/4] object-cover transition-all duration-500 group-hover:scale-110'
							/>
							{infos?.linkedin &&
								<img src={LinkedinLogo} alt="LinkedIn Logo" className="hidden lg:flex absolute bottom-1/3 lg:bottom-1/4 left-1/6 scale-90 group-hover:scale-100 opacity-0 -translate-x-1/2 -translate-y-1/2 transform group-hover:opacity-100 transition-all duration-300 w-12 h-12 mr-6 hover:scale-110" />
							}
						</Link>

						<div className="flex flex-col h-34 w-full text-center md:text-start">
							<p className='font-manrope text-xl md:text-2xl font-extralight'>
								{infos.name}
							</p>
							<p className='opacity-50 font-manrope text-md font-extralight'>
								{infos.role}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Accueil;
