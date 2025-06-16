import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
    return <header className="p-4 border-b flex justify-between items-center">
            <nav className="space-x-2">
              <Link to="/"><Button variant="ghost">Accueil</Button></Link>
              <Link to="/prestations"><Button variant="ghost">Nos Prestations</Button></Link>
              <Link to="/decouvrir"><Button variant="ghost">Nous Découvrir</Button></Link>
              <Link to="/faq"><Button variant="ghost">FAQ</Button></Link>
              <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
            </nav>
            <ModeToggle />
          </header>
}