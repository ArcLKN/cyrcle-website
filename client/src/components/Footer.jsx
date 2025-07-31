import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom'

export function Footer() {
    return <footer className="p-8 md:p-24 border-t text-center" aria-label="Pied de page du site">
        <div className="flex flex-col md:flex-row justify-between space-y-4 space-x-4 mb-4">
            <div className="flex flex-col items-start">
                <p href="/" className="text-xl font-bold">Cyrcle</p>
                <p href="/" className="text-xl font-bold text-left">Le design qui fait tourner vos projets</p>
            </div>
            <nav aria-label="Liens du footer">
                <ul className="flex flex-col items-start space-y-2">
                    <li><Link to="/" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Accueil</Link></li>
                    <li><Link to="/prestations" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Nos Prestations</Link></li>
                    <li><Link to="/decouvrir" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Nous Découvrir</Link></li>
                    <li><Link to="/faq" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">FAQ</Link></li>
                    <li><Link to="/contact" className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300">Contact</Link></li>
                </ul>
            </nav>
        </div>
        <Separator className="opacity-30 bg-foreground mb-12 mt-12" />
        <small className="block text-sm opacity-50">© {new Date().getFullYear()} Cyrcle</small>
    </footer>
}
