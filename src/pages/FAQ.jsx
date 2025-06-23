import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
	return (
		<div className='flex justify-between items-center'>
			<h1 className='text-7xl text-bold'>FAQ</h1>
			<Accordion type='single' collapsible className='w-full max-w-2xl'>
				<AccordionItem className='p-4 px-8' value='item-1'>
					<AccordionTrigger className='text-md'>
						Comment nous contacter ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Vitae congue eu consequat ac felis placerat vestibulum
						lectus mauris ultrices. Cursus sit amet dictum sit amet
						justo donec enim diam porttitor lacus luctus accumsan
						tortor posuere.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 px-8' value='item-2'>
					<AccordionTrigger className='text-md'>
						Où sommes-nous situés ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Vitae congue eu consequat ac felis placerat vestibulum
						lectus mauris ultrices. Cursus sit amet dictum sit amet
						justo donec enim diam porttitor lacus luctus accumsan
						tortor posuere.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 px-8' value='item-3'>
					<AccordionTrigger className='text-md'>
						Quels services proposons-nous ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Vitae congue eu consequat ac felis placerat vestibulum
						lectus mauris ultrices. Cursus sit amet dictum sit amet
						justo donec enim diam porttitor lacus luctus accumsan
						tortor posuere.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 px-8' value='item-4'>
					<AccordionTrigger className='text-md'>
						Quels sont nos tarifs ? Offrons-nous des réductions ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Vitae congue eu consequat ac felis placerat vestibulum
						lectus mauris ultrices. Cursus sit amet dictum sit amet
						justo donec enim diam porttitor lacus luctus accumsan
						tortor posuere.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 px-8' value='item-5'>
					<AccordionTrigger className='text-md'>
						Quelle est l'histoire de notre jeune entreprise ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Vitae congue eu consequat ac felis placerat vestibulum
						lectus mauris ultrices. Cursus sit amet dictum sit amet
						justo donec enim diam porttitor lacus luctus accumsan
						tortor posuere.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className='p-4 px-8' value='item-6'>
					<AccordionTrigger className='text-md'>
						Quels sont les délais de nos prestations ?
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						Vitae congue eu consequat ac felis placerat vestibulum
						lectus mauris ultrices. Cursus sit amet dictum sit amet
						justo donec enim diam porttitor lacus luctus accumsan
						tortor posuere.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default FAQ;
