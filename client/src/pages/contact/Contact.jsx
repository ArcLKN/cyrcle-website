import cercleBlanc from "@/assets/cercle blanc.png";
import cercleNoir from "@/assets/cercle noir.png";
import { useTheme } from "@/components/theme-provider";
import ContactForm from "./ContactForm";
import RotatingCircle from "@/components/RotatingCircle";

function Contact() {

	const { theme, setTheme } = useTheme();
	const cercle = theme === "light" ? cercleNoir : cercleBlanc;

	return (
		<div className='flex flex-col lg:flex-row h-screen w-full items-center space-y-8 lg:space-y-0 lg:space-x-16'>
			<div className='flex flex-col w-full h-auto lg:w-1/2 lg:h-screen justify-center relative'>
				<img
					src={cercle}
					alt='Cercle blanc'
					className='pointer-events-none h-180 w-auto absolute -translate-y-32 translate-x-32'
				/>
				<h1 className='text-3xl md:text-6xl font-manrope font-extralight'>
					CYRCLE :
				</h1>
				<p className='text-3xl md:text-6xl font-manrope'>
					le design qui fait tourner vos projets !
				</p>
				<img
					src={cercle}
					alt='Cercle blanc'
					className='pointer-events-none h-180 w-auto absolute translate-y-40 -translate-x-64'
				/>
			</div>
			<span className='align-middle h-[1px] w-full lg:h-full lg:w-[1px] bg-foreground opacity-50' />
			<div className='w-full md:w-2/3 lg:1/2 items-center justify-center relative'>
				<ContactForm />
			</div>
		</div>
	);
}

export default Contact;
