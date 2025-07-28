import {
    CarouselItem,
} from "@/components/ui/carousel";
import { HashLink } from "react-router-hash-link";

export function PrestationCarouselItem({ sectionId, label, position }) {

    return (
        <CarouselItem className='basis-1/1 sm:basis-1/2 xl:basis-1/4'>
            <HashLink
                smooth
                to={`/prestations?flipped=true#${sectionId}`}
                className='w-full h-full'
            >
                <div className='group flex flex-col w-92 h-92 md:w-92 md:h-92 lg:w-148 lg:h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500'>
                    <div className='absolute top-1/2 flex flex-col items-center'>
                        <div className='w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500' />
                        {
                            position === "left" ? (
                                <span className='absolute h-0.5 left-1/2 w-46 md:w-46 lg:w-74 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500' />
                            ) : position === "right" ? (
                                <span className='absolute h-0.5 right-1/2 w-46 md:w-46 lg:w-74 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500' />) : (
                                <span className='absolute h-0.5 w-92 md:w-92 lg:w-148 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500' />
                            )
                        }
                        <p className='mt-2 text-center group-hover:text-background transition-all duration-500'>
                            {label}
                        </p>
                    </div>
                </div>
            </HashLink>
        </CarouselItem>
    )
}
