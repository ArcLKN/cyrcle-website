import TeamProfilesGrids from "./TeamProfilesGrid";
import { Link } from "react-router-dom";

export default function DiscoverUsSection({ cercle }) {

    return (
        <div>
            <img
                src={cercle}
                alt=''
                aria-hidden="true"
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
            <TeamProfilesGrids />
        </div>
    )
}