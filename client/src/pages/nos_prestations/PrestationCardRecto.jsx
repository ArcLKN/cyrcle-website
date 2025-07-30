import RotatingCircle from "@/components/RotatingCircle"
import DoubleDown from "@/components/ui/doubleDown";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function PrestationCardRecto({ prestations, prestation, theme, scrollToNext, toggleFlip, flippedIndexes, index }) {

    return (

        <div
            className={`absolute flex flex-col w-full h-full lg:h-full justify-between transition-transform duration-700 transform-style-preserve-3d backface-hidden rotate-y-0 ${flippedIndexes.includes(index)
                ? "rotate-y-180"
                : "rotate-y-0"
                }`}
        >
            <div className='lg:mt-54 lg:mb-18'>
                <RotatingCircle className="max-w-164 md:max-w-192 lg:max-w-none lg:h-300 -translate-x-52 lg:-translate-y-122" doAnimate={false} />
                <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 lg:max-space-x-16'>
                    <div className='flex flex-col lg:flex-row lg:h-64'>
                        <span className='mb-8 lg:mb-0 lg:mx-16 lg:translate-y-12 align-middle w-42 h-[3px] bg-foreground inline-block' />
                        <h2
                            id={`${prestation.id}-title`}
                            className={`text-5xl md:text-7xl lg:text-9xl font-manrope font-light break-words hyphens-auto`}
                        >
                            {prestation.title}
                        </h2>
                    </div>
                    <div className='flex space-x-12 items-start lg:items-center w-52'>
                        <span className='align-middle h-64 w-[1px] bg-foreground opacity-50' />
                        <ul className='list-disc lg:ml-5 w-full space-y-4'>
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
                    <Separator className='flex-1 !h-0.25 bg-foreground my-0 lg:my-12 w-auto opacity-50' />
                    <Button
                        className='w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300'
                        onClick={() => toggleFlip(index)}
                    >
                        Découvrir
                    </Button>
                </div>
            </div>
        </div>
    )
}