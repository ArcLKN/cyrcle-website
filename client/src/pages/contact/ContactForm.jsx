import { useState } from "react";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm, Controller } from "react-hook-form";

const COMPANY_TYPES = [
    { value: 'startup', label: 'Startup' },
    { value: 'PME', label: 'PME' },
    { value: 'grandGroupe', label: 'Grand Groupe' },
    { value: 'autre', label: 'Autre' },
];

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nom: '',
            email: '',
            tel: '',
            typeEntreprise: '',
            objet: '',
            message: '',
        }
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });

            // Send form data to your Cloudflare function
            const response = await fetch("/submit", {  // '/submit' is your function endpoint
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({ type: 'success', message: 'Message envoyé avec succès !' });
                reset(); // Reset form after success
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Une erreur est survenue lors de l\'envoi.'
                });
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setSubmitStatus({
                type: 'error',
                message: 'Erreur de connexion. Veuillez réessayer.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="space-y-6">
            {submitStatus && (
                <Alert variant={submitStatus.type === 'error' ? 'destructive' : 'default'}>
                    <AlertDescription>
                        {submitStatus.type === 'success' ? '✓ ' : '⚠ '}
                        {submitStatus.message}
                    </AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name field */}
                <div className="space-y-2">
                    <Label htmlFor="nom">
                        Nom <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="nom"
                        {...register("nom", {
                            required: "Le nom est requis.",
                            minLength: {
                                value: 2,
                                message: "Le nom doit contenir au moins 2 caractères."
                            }
                        })}
                        aria-invalid={errors.nom ? 'true' : 'false'}
                        className={errors.nom ? 'border-red-500 focus:border-red-500' : ''}
                    />
                    {errors.nom && (
                        <p className="text-sm text-red-500" role="alert">
                            {errors.nom.message}
                        </p>
                    )}
                </div>

                {/* Email and Phone row */}
                <div className="flex flex-col xs:flex-row space-y-6 xs:space-y-0 xs:space-x-4 w-full">
                    <div className="space-y-2 w-full xs:w-1/2">
                        <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "L'email est requis.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Veuillez entrer un email valide.",
                                },
                            })}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500" role="alert">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 w-full xs:w-1/2">
                        <Label htmlFor="tel">Téléphone</Label>
                        <Input
                            type="tel"
                            id="tel"
                            {...register("tel", {
                                pattern: {
                                    value: /^[\d\s\-\+\(\)]+$/,
                                    message: "Veuillez entrer un numéro de téléphone valide."
                                }
                            })}
                            aria-invalid={errors.tel ? 'true' : 'false'}
                            className={errors.tel ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.tel && (
                            <p className="text-sm text-red-500" role="alert">
                                {errors.tel.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Company type select */}
                <div className="space-y-2">
                    <Label>Type d'entreprise</Label>
                    <Controller
                        name="typeEntreprise"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={errors.typeEntreprise ? 'border-red-500' : ''}>
                                    <SelectValue placeholder="Sélectionnez le type d'entreprise" />
                                </SelectTrigger>
                                <SelectContent>
                                    {COMPANY_TYPES.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                            {type.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.typeEntreprise && (
                        <p className="text-sm text-red-500" role="alert">
                            {errors.typeEntreprise.message}
                        </p>
                    )}
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                    <Label htmlFor="objet">Objet</Label>
                    <Input
                        id="objet"
                        {...register("objet", {
                            maxLength: {
                                value: 100,
                                message: "L'objet ne peut pas dépasser 100 caractères."
                            }
                        })}
                        aria-invalid={errors.objet ? 'true' : 'false'}
                        className={errors.objet ? 'border-red-500 focus:border-red-500' : ''}
                    />
                    {errors.objet && (
                        <p className="text-sm text-red-500" role="alert">
                            {errors.objet.message}
                        </p>
                    )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        rows={4}
                        {...register("message", {
                            maxLength: {
                                value: 1000,
                                message: "Le message ne peut pas dépasser 1000 caractères."
                            }
                        })}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
                        placeholder="Décrivez votre demande..."
                    />
                    {errors.message && (
                        <p className="text-sm text-red-500" role="alert">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Submit button */}
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Envoi en cours...
                        </>
                    ) : (
                        'Envoyer'
                    )}
                </Button>
            </form>
        </div>
    );
}
