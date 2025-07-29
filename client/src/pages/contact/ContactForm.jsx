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
import { useForm } from "react-hook-form";


export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:3001/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Message envoyé !");
            } else {
                alert("Erreur : " + result.error);
            }
        } catch (err) {
            console.error(err);
            alert("Erreur d'envoi");
        }
    };

    return (
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

            <div className='flex flex-col xs:flex-row space-y-6 xs:space-y-0 xs:space-x-4 w-full'>
                <div className='space-y-2 w-full xs:w-1/2'>
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

                <div className='space-y-2 w-full xs:w-1/2'>
                    <Label htmlFor='tel'>Téléphone</Label>
                    <Input type='tel' id='tel' {...register("tel")} />
                </div>
            </div>

            <div className='space-y-2'>
                <Label>Type d’entreprise</Label>
                <Select
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
    )
}