import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import logo from '../assets/logo_cyrcle_blanc.png'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
    return (
		<header className="p-8 pb-0 md:p-16 justify-between flex items-center ">
			<img src={logo} alt="Logo" className="h-18 w-auto" />
			<div className="hidden md:flex justify-end items-center space-x-16">
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
					<Link to="/contact" className="relative p-1 px-2 group text-xl font-normal text-foreground border-1 rounded-xl border-foreground hover:text-background hover:bg-foreground hover:border-transparent transition-all duration-300">
						Contact
						<span className="absolute left-1/2 -translate-x-1/2 translate-y-2 -bottom-1 w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"/>
					</Link>
				</nav>
				<ModeToggle />
			</div>

			<div className="md:hidden flex items-center">
				<Sheet>
					<SheetTrigger asChild>
						<button className="p-2">
							x
						</button>
					</SheetTrigger>
					<SheetContent side="right" className="p-6 space-y-6">
						<img src={logo} alt="Logo" className="h-8 w-8" />
						<nav className="flex flex-col space-y-4 text-xl">
						<Link to="/">Accueil</Link>
						<Link to="/prestations">Nos Prestations</Link>
						<Link to="/decouvrir">Nous Découvrir</Link>
						<Link to="/faq">FAQ</Link>
						<Link to="/contact">Contact</Link>
						</nav>
						<ModeToggle />
					</SheetContent>
				</Sheet>
			</div>
        </header>
	)
}