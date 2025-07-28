import DiscoverUsSection from "./discover_us_section/DiscoverUsSection";
import PrestationsSection from "./prestations_section/PrestationsSection";
import CyrcleSection from "./cyrcle_section/CyrcleSection";

function Accueil() {

	return (
		<div className='relative'>
			<CyrcleSection />
			<PrestationsSection />
			<DiscoverUsSection />
		</div>
	);
}

export default Accueil;
