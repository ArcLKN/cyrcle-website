import cercleBlanc from "../assets/cercle blanc.png";

function Contact() {
	return (
		<div className='flex flex-row h-screen w-full items-center'>
			<div className='flex flex-col w-1/2 h-screen justify-center relative'>
				<img
					src={cercleBlanc}
					alt='Cercle blanc'
					className='pointer-events-none h-180 w-auto absolute -translate-y-32 translate-x-32'
				/>
				<h1 className='text-6xl font-manrope font-extralight'>
					CYRCLE :
				</h1>
				<p className='text-6xl font-manrope'>
					le design qui fait tourner vos projets !
				</p>
				<img
					src={cercleBlanc}
					alt='Cercle blanc'
					className='pointer-events-none h-180 w-auto absolute translate-y-40 -translate-x-64'
				/>
			</div>
			<span className='align-middle h-full w-[1px] bg-foreground opacity-50' />
			<div></div>
		</div>
	);
}

export default Contact;
