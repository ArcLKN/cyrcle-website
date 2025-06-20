import { useRef, useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import cercleBlanc from '../assets/cercle blanc.png'
import doubleDown from '../assets/Double Down.png'
import { Link } from 'react-router-dom'
import image_design_industriel from '../assets/image_design_industriel.png'

function NosPrestations() {

  const prestationRefs = useRef([])

  const scrollToNext = (index) => {
    prestationRefs.current[index + 1]?.scrollIntoView({ behavior: 'smooth' })
  }

  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
  setFlippedIndex((prev) => (prev === index ? null : index));
  };

  const prestations = [
    { title: 'DESIGN INDUSTRIEL', 
      skills: ['Sketches', '3DS Max', 'Rhino 3D', 'Prototypes', 'Réalisation d\'objets et meubles manufacturés'], 
      description: 'Nous vous aidons à transformer vos idées en un produit innovant et ce, jusqu\'à sa fabrication artisanale. Notre savoir-faire permet d\'unir esthétique et fonctionnalité, tout en étant attaché aux enjeux du 21è siècle.', 
      image: image_design_industriel },
    { title : 'IDENTITÉ DE MARQUE', skills: ['Typographie', 'Graphisme', 'Adobe', 'Branding', 'Figma'] },
    { title: 'DÉVELOPPEMENT WEB', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'] },
    { title : 'STRATÉGIE D\'EXPÉRIENCE', skills: ['Observation', 'Persona', 'Interviews', 'Audit', 'Sondages', 'Benchmark', 'Storyboard'] },
    { title : "DESIGN D\'ESPACE", skills: ['Planification', 'Aménagement', 'Conception', '3D', 'Réalisation de plans'] },
    { title : 'DESIGN ÉVÉNEMENTIEL', skills: ['Conception', 'Planification', 'Logistique', 'Gestion de projet', 'Création d\'expériences immersives'] },
    { title : 'WORKSHOP', skills: ['Ateliers', 'Formation', 'Collaboration', 'Créativité', 'Innovation'] },
    { title : 'DATA MANAGEMENT', skills: ['Collecte de données', 'Analyse', 'Visualisation', 'Reporting', 'Gestion de bases de données'] },
  ]
  const renderPrestations = () => {
    return prestations.map((prestation, index) => (
      <div key={index} ref={(el) => (prestationRefs.current[index] = el)} className='relative w-full h-200 mb-24 flex justify-center items-center'>
        {/* RECTO */}
        <div className={`absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d backface-hidden rotate-y-0 ${flippedIndex === index ? "rotate-y-180" : "rotate-y-0"}`}>
          <div className='mt-54 mb-18'>
            <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-300 w-auto absolute -translate-x-52 -translate-y-122" />
            <div className='flex items-center justify-between space-x-16'>
              <div className='flex h-64'>
                <span className="mx-16 translate-y-12 align-middle w-52 h-[3px] bg-foreground inline-block" />
                <h1 className='text-9xl font-manrope font-light'>{prestation.title}</h1>
              </div>
              <div className="flex space-x-12 items-center">
                <span className="align-middle h-64 w-[1px] bg-foreground opacity-50" />
                <ul className="list-disc ml-5 w-60 space-y-4">
                  {prestation.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className="mb-10 align-middle h-32 w-[3px] bg-foreground translate-x-7" />
            <div className='flex items-center space-x-12'>
              <div className='flex flex-col space-y-4 items-center'>
              {
                index > 0 && (
                  <Button className="w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300" onClick={() => prestationRefs.current[index - 1]?.scrollIntoView({ behavior: 'smooth' })}><img src={doubleDown} alt="Suivant" className="w-6 h-auto scale-y-[-1]" /></Button>
                )
              }
              {index < prestations.length - 1 && (
                <Button className="w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300" onClick={() => scrollToNext(index)}><img src={doubleDown} alt="Suivant" className="w-6 h-auto" /></Button>
              )}
              </div>
              <Separator className="flex-1 !h-0.25 bg-foreground my-12 w-auto opacity-50" />
              <Button className="w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300" onClick={() => toggleFlip(index)}>Découvrir</Button>
            </div>
          </div>
        </div>
        {/* VERSO */}
        <div className={`absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d backface-hidden ${flippedIndex === index ? "rotate-y-0" : "rotate-y-180"}`}>
          <div className='mt-54 mb-18'>
            <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-300 w-auto absolute -translate-x-52 -translate-y-122" />
            <div className='flex items-center space-x-16'>
              <div className='flex flex-col items-start w-52 space-y-4'>
                <span className="align-middle w-full h-[3px] bg-foreground" />
                <h1 className='text-3xl font-manrope font-light'>{prestation.title}</h1>
              </div>
              <span className="align-middle h-64 w-[1px] bg-foreground opacity-50" />
              <div className="flex flex-col space-y-4">
                <p className='text-lg font-manrope font-light'>{prestation.description}</p>
              <div className="flex space-x-12 items-center">
                <ul className="list-disc ml-5 w-60 space-y-4">
                  {prestation.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
              </div>
              {prestation.image && (
                <img src={prestation.image} alt={prestation.title} className="w-64 h-auto object-cover rounded-lg shadow-lg" />
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <span className="mb-10 align-middle h-32 w-[3px] bg-foreground translate-x-7" />
            <div className='flex items-center space-x-12'>
              <div className='flex flex-col space-y-4 items-center'>
              {
                index > 0 && (
                  <Button className="w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300" onClick={() => prestationRefs.current[index - 1]?.scrollIntoView({ behavior: 'smooth' })}><img src={doubleDown} alt="Suivant" className="w-6 h-auto scale-y-[-1]" /></Button>
                )
              }
              {index < prestations.length - 1 && (
                <Button className="w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300" onClick={() => scrollToNext(index)}><img src={doubleDown} alt="Suivant" className="w-6 h-auto" /></Button>
              )}
              </div>
              <Separator className="flex-1 !h-0.25 bg-foreground my-12 w-auto opacity-50" />
              <Button className="w-24 bg-background border-1 rounded-2xl border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300" onClick={() => toggleFlip(index)}>Retour</Button>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex flex-col">
      {renderPrestations()}
    </div>
  )
}

export default NosPrestations
