import cercleBlanc from "../assets/cercle blanc.png";
import cercleNoir from "../assets/cercle noir.png";
import { useTheme } from "@/components/theme-provider";
import doubleDown from "../assets/Double Down.png";
import { Separator } from "@/components/ui/separator";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Accueil() {
	const { theme, setTheme } = useTheme();
	const cercle = theme === "light" ? cercleNoir : cercleBlanc;

	const profileImages = import.meta.glob("/src/assets/image *.png", {
		eager: true,
	});
	const profileImageList = Object.values(profileImages);
	const profilesInfo = [
		{ name: "Lou", role: "Présidente", image: profileImageList[0] },
		{
			name: "Appoline Boiselle",
			role: "Secrétariat Général",
			image: profileImageList[1],
		},
		{
			name: "Mathis Dufal",
			role: "Responsable Trésorerie",
			image: profileImageList[2],
		},
		{
			name: "Mahdi Jaafar",
			role: "Responsable Développement commercial",
			image: profileImageList[3],
		},
		{
			name: "Sophie Mereyde",
			role: "Responsable Ressources Humaines",
			image: profileImageList[4],
		},
		{
			name: "Bastien Meunier",
			role: "Responsable Chargé 'Affaires",
			image: profileImageList[5],
		},
		{
			name: "N'Gnima Coulibaly",
			role: "Responsable Qualité",
			image: profileImageList[6],
		},
		{
			name: "Adrien Wilmart",
			role: "Responsable Technique",
			image: profileImageList[7],
		},
		{
			name: "Aymène Ben Mohamed",
			role: "Responsable Communication",
			image: profileImageList[8],
		},
	];

	const sectionIds = [
		"identite_de_marque",
		"developpement_web",
		"strategie_experience",
		"design_espace",
		"strategie_evenementiel",
		"workshop",
		"data_management",
		"design_industriel",
	];

	return (
		<div className='relative'>
			<img
				src={cercle}
				alt='Cercle blanc'
				className='pointer-events-none absolute max-w-164 md:max-w-none md:h-300 w-auto -translate-x-74 md:-translate-x-52 -translate-y-84 md-translate-y-112 animate-custom-rotate'
			/>
			<div className='flex flex-col font-manrope md:px-8 space-y-12'>
				<div className='flex items-center'>
					<h1 className='text-7xl md:text-9xl'>CYRCLE</h1>
					<span className='ml-10 align-middle w-48 h-[3px] bg-foreground' />
				</div>
				<div className='flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 md:justify-end'>
					<h1 className='text-7xl md:text-9xl justify-left text-left'>
						THE
					</h1>
					<h1 className='text-7xl md:text-9xl justify-center text-center'>
						POWER
					</h1>
					<h1 className='text-7xl md:text-9xl justify-right text-right'>
						OF
					</h1>
				</div>
				<h1 className='text-7xl md:text-9xl justify-end text-right'>DESIGN</h1>
			</div>
			<img
				src={cercle}
				alt='Cercle blanc'
				className='pointer-events-none absolute max-w-164 md:max-w-none md:h-300 w-auto right-0 translate-x-80 -translate-y-126  animate-custom-rotate [animation-delay:5s]'
			/>
			<Separator className='!h-0.25 bg-foreground mb-6 mt-12 md:mt-24' />
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
			<div className='flex flex-row items-center my-16 md:my-42 space-x-12'>
				<span className='ml-10 align-middle w-48 h-[3px] bg-foreground -translate-x-20' />
				<h1 className='text-7xl md:text-9xl font-manrope'>PRESTATIONS</h1>
				<div className='flex flex-col'>
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
			<Carousel
				className='-translate-x-32 w-[125%]'
				opts={{
					dragFree: true,
				}}
			>
				<CarouselContent className='ml-32 mr-32'>
					<CarouselItem key={0} className='basis-1/4'>
						<HashLink
							smooth
							to={`/prestations?flipped=true#${sectionIds[0]}`}
							className='w-full h-full'
						>
							<div className='group flex flex-col w-148 h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500'>
								<div className='absolute top-1/2 flex flex-col items-center'>
									<div className='w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500' />
									<span className='absolute h-0.5 left-1/2 w-74 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500' />
									<p className='mt-2 text-center group-hover:text-background transition-all duration-500'>
										Identité de marque
									</p>
								</div>
							</div>
						</HashLink>
					</CarouselItem>
					{[
						"Développement web",
						"Stratégie d'expérience",
						"Design d'espace",
						"Stratégie Événementiel",
						"Workshop",
						"Data management",
					].map((label, index) => (
						<CarouselItem key={index + 1} className='basis-1/4'>
							<HashLink
								smooth
								to={`/prestations?flipped=true#${sectionIds[index + 1]
									}`}
								className='w-full h-full'
							>
								<div className='group flex flex-col w-148 h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500'>
									<div className='absolute top-1/2 flex flex-col items-center'>
										<div className='w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500' />
										<span className='absolute h-0.5 w-148 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500' />
										<p className='mt-2 text-center group-hover:text-background transition-all duration-500'>
											{label}
										</p>
									</div>
								</div>
							</HashLink>
						</CarouselItem>
					))}
					<CarouselItem key={9} className='basis-1/4'>
						<HashLink
							smooth
							to={`/prestations?flipped=true#design_industriel`}
							className='w-full h-full'
						>
							<div className='group flex flex-col w-148 h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500'>
								<div className='absolute top-1/2 flex flex-col items-center'>
									<div className='w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500' />
									<span className='absolute h-0.5 right-1/2 w-74 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500' />
									<p className='mt-2 text-center group-hover:text-background transition-all duration-500'>
										Design Industriel
									</p>
								</div>
							</div>
						</HashLink>
					</CarouselItem>
					<CarouselItem className='basis-1/4'></CarouselItem>
				</CarouselContent>
			</Carousel>
			<img
				src={cercle}
				alt='Cercle blanc'
				className='pointer-events-none absolute max-w-164 md:max-w-none md:h-300 w-auto -right-0 translate-x-92 -translate-y-32  animate-custom-rotate [animation-delay:9s]'
			/>
			<div className='flex items-center mt-42 mb-32 space-x-12'>
				<div className='flex flex-col'>
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
				<h1 className='text-7xl md:text-9xl font-manrope'>NOUS DÉCOUVRIR</h1>
				<span className='ml-10 align-middle w-96 h-[3px] bg-foreground translate-x-24' />
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-items-center'>
				{profilesInfo.map((infos, index) => (
					<div
						key={index}
						className='group relative w:32 md:48 lg:w-64 h-auto overflow-hidden hover:border-background transition-all duration-500'
					>
						<img
							src={infos.image.default}
							alt={`Image ${index}`}
							className='mb-4 w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
						/>
						<div className="flex flex-col h-32 md:h-auto w-full text-center md:text-start">
							<p className='font-manrope text-2xl font-extralight'>
								{infos.name}
							</p>
							<p className='opacity-50 font-manrope text-m font-extralight'>
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
