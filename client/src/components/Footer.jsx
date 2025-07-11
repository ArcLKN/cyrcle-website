import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom'

export function Footer() {
    return <footer className="p-8 md:p-24 border-t text-center">
        <div className="flex flex-col md:flex-row justify-between space-y-4 space-x-4 mb-4">
            <div className="flex flex-col items-start">
                <a href="/" className="text-xl font-bold">Cyrcle</a>
                <a href="/" className="text-xl font-bold text-left">Le design qui fait tourner vos projets</a>
            </div>
            <div className="flex flex-col items-start space-y-2">
                <Link to="/" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Accueil</Link>
                <Link to="/prestations" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Nos Prestations</Link>
                <Link to="/decouvrir" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Nous Découvrir</Link>
                <Link to="/faq" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">FAQ</Link>
                <Link to="/contact" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Contact</Link>
            </div>
        </div>
        <Separator className="opacity-30 bg-foreground mb-12 mt-12" />
        © {new Date().getFullYear()} Cyrcle
    </footer>
}
