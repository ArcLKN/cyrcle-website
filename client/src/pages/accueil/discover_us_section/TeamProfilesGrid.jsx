
import TeamProfileCard from "./TeamProfileCard";

export default function TeamProfilesGrids() {

    const profileImages = import.meta.glob("/src/assets/image *.png", {
        eager: true,
    });
    const profileImageList = Object.values(profileImages);


    const profilesInfo = [
        {
            name: "Lou Gicquel",
            role: "Présidente",
            image: profileImageList[0],
            linkedin: "https://www.linkedin.com/in/lougicquel/",
        },
        {
            name: "Appoline Boiselle",
            role: "Secrétaire Générale",
            image: profileImageList[1],
            linkedin: "https://www.linkedin.com/in/appoline-boiselle-382652262/",
        },
        {
            name: "Mathis Dufal",
            role: "Responsable Trésorerie",
            image: profileImageList[2],
            linkedin: "https://www.linkedin.com/in/mathis-dufal-631346208/",
        },
        {
            name: "Mahdi Jaafar",
            role: "Responsable Développement commercial",
            image: profileImageList[3],
            linkedin: "https://www.linkedin.com/in/mahdi-jaafar-983670238/",
        },
        {
            name: "Sophie Mereyde",
            role: "Responsable Ressources Humaines",
            image: profileImageList[4],
            linkedin: "https://www.linkedin.com/in/sophiemereyde/",
        },
        {
            name: "Bastien Meunier",
            role: "Responsable Chargé d'Affaires",
            image: profileImageList[5],
            linkedin: "https://www.linkedin.com/in/bastien-meunier-578b58245/",
        },
        {
            name: "N'Gnima Coulibaly",
            role: "Responsable Qualité",
            image: profileImageList[6],
            linkedin: "https://www.linkedin.com/in/n%E2%80%99gnima-coulibaly-237638239/",
        },
        {
            name: "Adrien Wilmart",
            role: "Responsable Technique",
            image: profileImageList[7],
            linkedin: "https://www.linkedin.com/in/adrienwlmrt/",
        },
        {
            name: "Aymène Ben Mohamed",
            role: "Responsable Communication",
            image: profileImageList[8],
            linkedin: "https://www.linkedin.com/in/aym%C3%A8ne-ben-mohamed/",
        },
    ];

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-items-center'>
            {profilesInfo.map((infos, index) => (
                <TeamProfileCard
                    key={index}
                    infos={infos}
                    index={index}
                />
            ))}
        </div>
    )
}