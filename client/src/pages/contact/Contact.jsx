import ContactForm from "./ContactForm";
import RotatingCircle from "@/components/RotatingCircle";

function Contact() {

	return (
		<div className='flex flex-col lg:flex-row h-screen w-full items-center space-y-8 lg:space-y-0 lg:space-x-16'>
			<section aria-labelledby="contact-heading" className='flex flex-col w-full h-auto lg:w-1/2 lg:h-screen justify-center relative'>
				<RotatingCircle className="-translate-y-32 translate-x-32 max-w-164 md:max-w-192 lg:max-w-none h-140 lg:h-180" doAnimate={false} />
				<h1 id="contact-heading" className='text-3xl md:text-6xl font-manrope font-extralight'>
					CYRCLE :
				</h1>
				<h2 className='text-3xl md:text-6xl font-manrope'>
					le design qui fait tourner vos projets !
				</h2>
				<RotatingCircle className="translate-y-40 -translate-x-64 max-w-164 md:max-w-192 lg:max-w-none h-140 lg:h-180" doAnimate={false} />
			</section>
			<span className='align-middle h-[1px] w-full lg:h-full lg:w-[1px] bg-foreground opacity-50' aria-hidden="true" />
			<section aria-labelledby="contact-form" className='w-full md:w-2/3 lg:1/2 items-center justify-center relative'>
				<ContactForm />
			</section>
		</div>
	);
}

export default Contact;
