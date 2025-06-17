import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import logo from '../assets/logo_cyrcle_blanc.png'

export function Header() {
    return (
		<header className="p-16 justify-between flex items-center ">
			<img src={logo} alt="Logo" className="h-18 w-auto" />
			<div className="flex justify-end items-center space-x-16">
				<nav className="space-x-16">
					<Link to="/" className="relative group text-xl font-normal">
						Accueil
						<span className="absolute left-1/2 -translate-x-1/2 translate-y-2 -bottom-1 w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"/>
					</Link>
					<Link to="/prestations" className="relative group text-xl font-normal">
						Nos Prestations
						<span className="absolute left-1/2 -translate-x-1/2 translate-y-2 -bottom-1 w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"/>
					</Link>
					<Link to="/decouvrir" className="relative group text-xl font-normal">
						Nous Découvrir
						<span className="absolute left-1/2 -translate-x-1/2 translate-y-2 -bottom-1 w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"/>
					</Link>
					<Link to="/faq" className="relative group text-xl font-normal">
						FAQ
						<span className="absolute left-1/2 -translate-x-1/2 translate-y-2 -bottom-1 w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"/>
					</Link>
					<Link to="/contact" className="relative group text-xl font-normal">
						Contact
						<span className="absolute left-1/2 -translate-x-1/2 translate-y-2 -bottom-1 w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"/>
					</Link>
				</nav>
				<ModeToggle />
			</div>
        </header>
	)
}