import cercleBlanc from '../assets/cercle blanc.png'
import doubleDown from '../assets/Double Down.png'
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

function Accueil() {
    return (
      <div className='relative'>
			  <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-250 w-auto absolute -translate-x-16 -translate-y-64 animate-pulse" />
        <div className="flex flex-col font-manrope px-8 space-y-12">
          <div className='flex items-center'>
            <h1 className="text-9xl">CYRCLE</h1>
            <span className="ml-10 align-middle w-48 h-[3px] bg-foreground" />
          </div>
          <h1 className="text-9xl justify-end text-right">THE POWER OF</h1>
          <h1 className="text-9xl justify-end text-right">DESIGN</h1>
        </div>
			  <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-250 w-auto absolute translate-x-300 -translate-y-72 animate-pulse" />
        <Separator className="!h-0.25 bg-foreground mb-6 mt-24" />
        <div className='flex justify-between'>
          <p>cy école de design</p>
          <div className='text-right'>
            <p>34 rue de la croix, 78100</p>
            <p>saint-germain-en-laye</p>
          </div>
        </div>
			  <img src={doubleDown} alt="doubleDown" className="mx-auto pointer-events-none h-12 w-12 animate-bounce" />
			  <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none absolute h-250 w-auto -translate-x-32" />
        <div className="flex flex-row items-center my-64 space-x-12">
          <span className="ml-10 align-middle w-48 h-[3px] bg-foreground -translate-x-20" />
          <h1 className="text-9xl font-manrope">PRESTATIONS</h1>
          <div className='flex flex-col'>
            <Link to="/" className="opacity-50 hover:opacity-100 transition-all duration-300">DESIGN</Link>
            <Link to="/" className="opacity-50 hover:opacity-100 transition-all duration-300">INFORMATIQUE</Link>
            <Link to="/" className="opacity-50 hover:opacity-100 transition-all duration-300">ÉVÉNEMENTIEL</Link>
          </div>
        </div>
        <Carousel className="-translate-x-32 w-[125%]">
          <CarouselContent className="ml-32 mr-32">
              <CarouselItem key={0} className="basis-1/4">
                <div className="group flex flex-col w-148 h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500">
                  <div className="absolute top-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500" />
                    <span className="absolute h-0.5 left-1/2 w-74 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500" />
                    <p className="mt-2 text-center group-hover:text-background transition-all duration-500">Identité de marque</p>
                  </div>
                </div>
              </CarouselItem>
            {[
              "Identité de marque",
              "Développement web",
              "Stratégie d'expérience",
              "Stratégie d'espace",
              "Stratégie Événementiel",
              "Workshop",
              "Data management",
            ].map((label, index) => (
              <CarouselItem key={index+1} className="basis-1/4">
                <div className="group flex flex-col w-148 h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500">
                  <div className="absolute top-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500" />
                    <span className="absolute h-0.5 w-148 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500" />
                    <p className="mt-2 text-center group-hover:text-background transition-all duration-500">{label}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
            <CarouselItem key={9} className="basis-1/4">
              <div className="group flex flex-col w-148 h-148 rounded-full border-dashed border-2 border-foreground items-center hover:bg-foreground hover:border-none transition-all duration-500">
                <div className="absolute top-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 -translate-y-1/2  bg-foreground rounded-full group-hover:bg-background transition-all duration-500" />
                  <span className="absolute h-0.5 right-1/2 w-74 bg-foreground group-hover:bg-background group-hover:z-50 transition-all duration-500" />
                  <p className="mt-2 text-center group-hover:text-background transition-all duration-500">Design Industriel</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4"></CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className='flex items-center my-64 space-x-12'>
          <div className='flex flex-col'>
            <Link to="/" className="opacity-50 hover:opacity-100 transition-all duration-300">LA TEAM</Link>
            <Link to="/" className="opacity-50 hover:opacity-100 transition-all duration-300">NOTRE ESPRIT</Link>
          </div>
          <h1 className="text-9xl font-manrope">NOUS DÉCOUVRIR</h1>
          <span className="ml-10 align-middle w-96 h-[3px] bg-foreground translate-x-24" />
        </div>
      </div>
    )
  }
  
export default Accueil
  