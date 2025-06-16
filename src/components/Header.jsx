import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import logo from '../assets/logo_cyrcle_blanc.png'

export function Header() {
    return (
		<header className="p-16 justify-between flex items-center ">
			<img src={logo} alt="Logo" className="h-18 w-auto" />
			<div className="flex justify-end items-center space-x-2">
				<nav className="space-x-2">
					<Link to="/"><Button className="text-xl font-normal" variant="link">Accueil</Button></Link>
					<Link to="/prestations"><Button className="text-xl font-normal" variant="link">Nos Prestations</Button></Link>
					<Link to="/decouvrir"><Button className="text-xl font-normal" variant="link">Nous Découvrir</Button></Link>
					<Link to="/faq"><Button className="text-xl font-normal" variant="link">FAQ</Button></Link>
					<Link to="/contact"><Button className="text-xl font-normal" variant="link">Contact</Button></Link>
				</nav>
				<ModeToggle />
			</div>
        </header>
	)
}