import { Link } from "react-router-dom";
import LinkedinLogo from "@/assets/Linkedin-logo-black.webp";

export default function TeamProfileCard({ infos, index }) {
	return (
		<figure className='group relative w-32 xs:w-36 sm:w-48 lg:w-52 xl:w-64 h-auto hover:border-background transition-all duration-500'>
			<Link
				to={infos?.linkedin ? infos.linkedin : "#"}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={
					infos?.linkedin
						? `Profil LinkedIn de ${infos?.name}`
						: `Profil de ${infos?.name}`
				}
			>
				<img
					src={`${import.meta.env.BASE_URL}${infos.image}`}
					alt={
						infos.name
							? `Portrait de ${infos.name}`
							: `Portrait du membre d'équipe numéro ${index + 1}`
					}
					className='mb-4 w-full h-auto aspect-[3/4] object-cover transition-all duration-500 group-hover:scale-110'
				/>
				{infos?.linkedin && (
					<img
						src={LinkedinLogo}
						alt='LinkedIn Logo'
						className='hidden lg:flex absolute bottom-1/3 lg:bottom-1/4 left-1/6 scale-90 group-hover:scale-100 opacity-0 -translate-x-1/2 -translate-y-1/2 transform group-hover:opacity-100 transition-all duration-300 w-12 h-12 mr-6 hover:scale-110'
					/>
				)}
			</Link>

			<figcaption className='flex flex-col h-34 w-full text-center md:text-start'>
				<p className='font-manrope text-xl md:text-2xl font-extralight'>
					{infos?.name}
				</p>
				<p className='opacity-50 font-manrope text-md font-extralight'>
					{infos?.role}
				</p>
			</figcaption>
		</figure>
	);
}
