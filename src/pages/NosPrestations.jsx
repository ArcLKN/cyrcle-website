import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import cercleBlanc from '../assets/cercle blanc.png'

function NosPrestations() {

  const prestations = [
    { title: 'DESIGN INDUSTRIEL', skills: ['Sketches', '3DS Max', 'Rhino 3D', 'Prototypes', 'Réalisation d\'objets et meubles manufacturés'] },
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
      <div key={index} className='mb-128'>
			  <img src={cercleBlanc} alt="Cercle blanc" className="pointer-events-none h-300 w-auto absolute -translate-x-52 -translate-y-112" />
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <span className="mx-16 align-middle w-52 h-[3px] bg-foreground inline-block" />
            <h1 className='text-8xl font-manrope'>{prestation.title}</h1>
          </div>
          <div>
            <Separator orientation="vertical" className="min-h-full w-1 bg-foreground"/>
            <ul className="list-disc ml-5 w-60 space-y-4">
              {prestation.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
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
