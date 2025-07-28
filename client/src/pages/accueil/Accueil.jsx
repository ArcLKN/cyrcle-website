import cercleBlanc from "@/assets/cercle blanc.png";
import cercleNoir from "@/assets/cercle noir.png";
import { useTheme } from "@/components/theme-provider";
import DiscoverUsSection from "./discover_us_section/DiscoverUsSection";
import PrestationsSection from "./prestations_section/PrestationsSection";
import CyrcleSection from "./cyrcle_section/CyrcleSection";

function Accueil() {

	const { theme, setTheme } = useTheme();
	const cercle = theme === "light" ? cercleNoir : cercleBlanc;

	return (
		<div className='relative'>
			<CyrcleSection cercle={cercle} />
			<PrestationsSection />
			<DiscoverUsSection cercle={cercle} />
		</div>
	);
}

export default Accueil;
