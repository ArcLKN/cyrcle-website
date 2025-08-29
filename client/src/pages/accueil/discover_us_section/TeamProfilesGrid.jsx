import TeamProfileCard from "./TeamProfileCard";
import { teamProfiles } from "@/data/teamProfiles";

export default function TeamProfilesGrids() {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-items-center'>
			{teamProfiles.map((infos, index) => (
				<TeamProfileCard key={index} infos={infos} index={index} />
			))}
		</div>
	);
}
