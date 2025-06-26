import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import doubleDownWhite from "@/assets/Double Down.png";
import doubleDownBlack from "@/assets/Double Down Black.png";

export default function DoubleDown({ theme, action, direction }) {
	const doubleDown = theme === "light" ? doubleDownBlack : doubleDownWhite;
	const doubleDownHover =
		theme === "light" ? doubleDownWhite : doubleDownBlack;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Button
			className='w-14 h-14 rounded-full bg-background border-1 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300'
			onClick={() => action && action()}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src={isHovered ? doubleDownHover : doubleDown}
				alt={direction === "down" ? "Suivant" : "Précédent"}
				className={
					direction === "up"
						? "w-6 h-auto scale-y-[-1]"
						: "w-6 h-auto"
				}
			/>
		</Button>
	);
}
