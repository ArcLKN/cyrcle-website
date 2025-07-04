import cercleBlanc from "../assets/cercle blanc.png";
import cercleNoir from "../assets/cercle noir.png";
import { useTheme } from "@/components/theme-provider";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form data:", data);
	};

	const { theme, setTheme } = useTheme();
	const cercle = theme === "light" ? cercleNoir : cercleBlanc;

	return (
		<div className='flex flex-row h-screen w-full items-center space-x-16'>
			<div className='flex flex-col w-1/2 h-screen justify-center relative'>
				<img
					src={cercle}
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
					src={cercle}
					alt='Cercle blanc'
					className='pointer-events-none h-180 w-auto absolute translate-y-40 -translate-x-64'
				/>
			</div>
			<span className='align-middle h-full w-[1px] bg-foreground opacity-50' />
			<div className='w-1/2 items-center justify-center relative'>
				{/* Ici mettre le form avec nom, adresse mail, tel, type entreprise, objet, message et bouton envoyer*/}

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-2'>
						<Label htmlFor='nom'>Nom</Label>
						<Input
							id='nom'
							{...register("nom", { required: true })}
						/>
						{errors.nom && (
							<p className='text-sm text-red-500'>
								Ce champ est requis.
							</p>
						)}
					</div>

					<div className='flex space-x-4 w-full'>
						<div className='space-y-2 w-1/2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								type='email'
								id='email'
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<p className='text-sm text-red-500'>
									Ce champ est requis.
								</p>
							)}
						</div>

						<div className='space-y-2 w-1/2'>
							<Label htmlFor='tel'>Téléphone</Label>
							<Input type='tel' id='tel' {...register("tel")} />
						</div>
					</div>

					<div className='space-y-2'>
						<Label>Type d’entreprise</Label>
						<Select
							onValueChange={(val) =>
								setValue("typeEntreprise", val)
							}
						>
							<SelectTrigger>
								<SelectValue placeholder='Sélectionnez' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='startup'>Startup</SelectItem>
								<SelectItem value='PME'>PME</SelectItem>
								<SelectItem value='grandGroupe'>
									Grand Groupe
								</SelectItem>
								<SelectItem value='autre'>Autre</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='objet'>Objet</Label>
						<Input id='objet' {...register("objet")} />
					</div>

					<div className='space-y-2'>
						<Label htmlFor='message'>Message</Label>
						<Textarea
							id='message'
							rows={4}
							{...register("message")}
						/>
					</div>

					<Button type='submit' className='w-full'>
						Envoyer
					</Button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
