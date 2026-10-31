export const porfolio = () => {
    const app = document.getElementById("app");
    const projets = [
        {
            titre: "CA2E - Application de formation",
            description: "Application web permettant de gérer les activités des formateurs et des apprenants.",
            technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Docker"],
            github: "https://github.com/allonzo23/CA2E",
            demo: null
        },
        {
            titre: "AEFANA - Gestion d'association",
            description: "Application de gestion des membres, des mandats, du bureau et de la caisse d'une association.",
            technologies: ["Python", "PostgreSQL", "JavaScript", "HTML", "CSS"],
            github: null,
            demo: null
        },
        {
            titre: "Gestion des emplois",
            description: "Projet d'étude visant à mettre en relation les chercheurs d'emploi et les entreprises.",
            technologies: ["Next.js", "NestJS", "PostgreSQL"],
            github: null,
            demo: null
        }
    ];
    app.innerHTML = `
    <section class="portfolio">
            <div class="portfolio-header">
                <h1>Mes projets</h1>
                <p>
                    Découvrez quelques projets réalisés ou développés
                    dans le cadre de mon apprentissage et de mon expérience.
                </p>
            </div>

            <div class="portfolio-container" id="projets-container">
                ${projets.map(projet => `
                    <article class="projet-card">
                        <div class="projet-image">
                            <span>💻</span>
                        </div>

                        <div class="projet-content">
                            <h2>${projet.titre}</h2>
                            <p>${projet.description}</p>

                            <div class="projet-technologies">
                                ${projet.technologies.map(tech => `
                                    <span>${tech}</span>
                                `).join("")}
                            </div>

                            <div class="projet-liens">
                                ${projet.github
            ? `<a href="${projet.github}" target="_blank" rel="noopener noreferrer">Code source</a>`
            : `<span class="lien-indisponible">Code source à ajouter</span>`
        }

                                ${projet.demo
            ? `<a href="${projet.demo}" target="_blank" rel="noopener noreferrer">Voir le projet</a>`
            : `<span class="lien-indisponible">Démo à venir</span>`
        }
                            </div>
                        </div>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}