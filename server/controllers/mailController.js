// server/controllers/mailController.js
const nodemailer = require("nodemailer");

exports.sendMailtoCyrcle = async (req, res) => {
	try {
		const { nom, email, tel, typeEntreprise, objet, message } = req.body;
        if (!nom || !email || !message) {
            return res.status(400).json({ error: "Champs requis manquants" });
        }
        
		const transporter = nodemailer.createTransport({
			service: "gmail", // or use custom SMTP
			auth: {
				user: process.env.NODEJS_GMAIL_APP_USER, // your email
				pass: process.env.NODEJS_GMAIL_APP_PASSWORD, // your email password or app password
			},
		});

		const mailOptions = {
			from: email,
			to: "greinerrap@cy-tech.fr", // fixed address to receive the form
			subject: `Message de ${nom} – ${objet || "Sans objet"}`,
			text: `
Nom : ${nom}
Email : ${email}
Téléphone : ${tel || "Non fourni"}
Type d’entreprise : ${typeEntreprise || "Non spécifié"}
Objet : ${objet || "Non précisé"}

Message :
${message}
`,
		};

		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email envoyé avec succès" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Erreur lors de l’envoi de l’email" });
	}
};
