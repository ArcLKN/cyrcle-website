import { Link } from "react-router-dom";
import PrestationCarousel from "./PrestationCarousel";

export default function PrestationsSection() {

	return (
		<section aria-labelledby="prestations-heading" className="relative">
			<div className='flex flex-col lg:flex-row items-start lg:items-center my-16 lg:my-42 lg:space-x-12'>
				<span className='hidden lg:flex lg:ml-10 align-middle w-48 h-[3px] bg-foreground -translate-x-20' />
				<h1 id="prestations-heading" className='text-5xl md:text-7xl lg:text-9xl font-manrope'>PRESTATIONS</h1>
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
		</section>
	)
}