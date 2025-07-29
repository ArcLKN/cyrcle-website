import cercleBlanc from "@/assets/cercle blanc.png";
import cercleNoir from "@/assets/cercle noir.png";
import { useTheme } from "@/components/theme-provider";

export default function RotatingCircle({ className, delay = "0s", doAnimate = true }) {

    const { theme, setTheme } = useTheme();
    const cercle = theme === "light" ? cercleNoir : cercleBlanc;

    return (
        <img
            src={cercle}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute max-w-164 md:max-w-192 lg:max-w-none lg:h-300 w-auto ${doAnimate ? "animate-custom-rotate" : ""} ${className}`}
            style={{ animationDelay: delay }}
        />
    );
}