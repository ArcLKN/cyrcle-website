import cercleBlanc from '../assets/cercle blanc.png'
import { Separator } from "@/components/ui/separator"

function Accueil() {
    return (
      <div className='relative'>
			  <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-250 w-auto absolute -translate-x-16 -translate-y-64" />
        <div className="flex flex-col font-manrope px-8 space-y-12">
          <div className='flex items-center'>
            <h1 className="text-9xl">CYRCLE</h1>
            <span className="ml-10 align-middle w-48 h-[3px] bg-foreground" />
          </div>
          <h1 className="text-9xl justify-end text-right">THE POWER OF</h1>
          <h1 className="text-9xl justify-end text-right">DESIGN</h1>
        </div>
			  <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-250 w-auto absolute translate-x-300 -translate-y-72" />
        <Separator className="!h-0.25 bg-foreground mb-6 mt-24" />
        <div className='flex justify-between'>
          <p>cy école de design</p>
          <div className='text-right'>
            <p>34 rue de la croix, 78100</p>
            <p>saint-germain-en-laye</p>
          </div>
        </div>
      </div>
    )
  }
  
export default Accueil
  