import doubleDown from "@/assets/Double Down.png";
import { Separator } from "@/components/ui/separator";
import RotatingCircle from "../../../components/RotatingCircle";

export default function CyrcleSection() {

    return (
        <section aria-labelledby="cyrcle-heading" className="relative">
            <RotatingCircle className='-translate-x-74 lg:-translate-x-52 -translate-y-84 md-translate-y-112' />
            <div className='flex flex-col font-manrope lg:px-8 space-y-12'>
                <div className='flex items-center'>
                    <h1 id="cyrcle-heading" className='text-7xl lg:text-9xl'>CYRCLE</h1>
                    <span className='ml-10 align-middle w-48 h-[3px] bg-foreground' />
                </div>
                <div className='flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 md:justify-end'>
                    <h2 className='text-7xl lg:text-9xl justify-left text-start'>
                        THE
                    </h2>
                    <h2 className='text-7xl lg:text-9xl justify-center text-center'>
                        POWER
                    </h2>
                    <h2 className='text-7xl lg:text-9xl justify-right text-end'>
                        OF
                    </h2>
                </div>
                <h1 className='text-7xl lg:text-9xl justify-end text-end'>DESIGN</h1>
            </div>
            <RotatingCircle className='right-0 translate-x-80 -translate-y-126' delay="5s" />
            <Separator className='!h-0.25 bg-foreground mb-6 mt-12 lg:mt-24' />
            <div className='flex justify-between mb-8'>
                <p>cy école de design</p>
                <address className='text-end'>
                    <p>34 rue de la croix, 78100</p>
                    <p>saint-germain-en-laye</p>
                </address>
            </div>
            <img
                src={doubleDown}
                alt=''
                aria-hidden="true"
                className='mx-auto pointer-events-none h-12 w-12 animate-bounce'
            />
        </section>
    )
}