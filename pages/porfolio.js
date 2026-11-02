
export const porfolio = () => {
    const app = document.getElementById("app");

    const projets = [
        {
            id: 1,
            titre: "CA2E - Application de gestion de formation",
            description: "Application web destinée à faciliter la gestion des activités pédagogiques, le suivi des tâches et la collaboration entre les formateurs et les apprenants.",
            details: "Ce projet m'a permis de mettre en pratique le développement Full Stack ainsi que l'automatisation du déploiement d'une application web. J'ai participé au développement frontend, backend et à la mise en place de l'infrastructure CI/CD.",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Docker",
                "GitHub Actions",
                "Grafana"
            ],
            statut: "Réalisé",
            github: "https://github.com/allonzo23/CA2E",
            demo: null,
            categorie: "Full Stack & DevOps"
        },
        {
            id: 2,
            titre: "AEFANA - Gestion d'association",
            description: "Application de gestion associative permettant d'administrer les membres, les mandats universitaires, le bureau, les cotisations et les opérations financières.",
            details: "Ce projet consiste à concevoir une solution centralisée pour faciliter l'administration d'une association. Il comprend la gestion des membres, des responsabilités, des mandats et le suivi financier.",
            technologies: [
                "Python",
                "PostgreSQL",
                "JavaScript",
                "HTML5",
                "CSS3"
            ],
            statut: "En développement",
            github: null,
            demo: null,
            categorie: "Python & Backend"
        },
        {
            id: 3,
            titre: "Gestion des emplois",
            description: "Plateforme web destinée à mettre en relation les chercheurs d'emploi et les entreprises à travers la publication des offres et la gestion des candidatures.",
            details: "Ce projet d'étude vise à concevoir une plateforme permettant aux entreprises de publier des offres d'emploi et aux chercheurs d'emploi de consulter les opportunités et de soumettre leurs candidatures.",
            technologies: [
                "Next.js",
                "NestJS",
                "PostgreSQL",
                "Prisma"
            ],
            statut: "En développement",
            github: null,
            demo: null,
            categorie: "Développement Web"
        }
    ];

    app.innerHTML = `
        <section class="portfolio">

            <div class="portfolio-header">
                <span class="portfolio-subtitle">MES RÉALISATIONS</span>

                <h1>Mes projets</h1>

                <p>
                    Découvrez quelques projets réalisés ou actuellement
                    en développement, illustrant mes compétences en
                    développement Full Stack, Python et DevOps.
                </p>
            </div>

            <div class="portfolio-container" id="projets-container">

                ${projets.map(projet => `
                    <article class="projet-card">

                        <div class="projet-image">
                            <span>💻</span>
                        </div>

                        <div class="projet-content">

                            <div class="projet-entete">
                                <span class="projet-categorie">
                                    ${projet.categorie}
                                </span>

                                <span class="projet-statut ${projet.statut === "Réalisé"
            ? "termine"
            : "encours"
        }">
                                    ${projet.statut}
                                </span>
                            </div>

                            <h2>${projet.titre}</h2>

                            <p>${projet.description}</p>

                            <div class="projet-technologies">
                                ${projet.technologies.map(tech => `
                                    <span>${tech}</span>
                                `).join("")}
                            </div>

                            <div class="projet-liens">

                                <button
                                    class="btn-details"
                                    data-id="${projet.id}">
                                    Découvrir le projet
                                </button>

                                ${projet.github
            ? `
                                        <a
                                            href="${projet.github}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="btn-github">
                                            <i data-lucide="github"></i>
                                            Code source
                                        </a>
                                    `
            : `
                                        <span class="lien-indisponible">
                                            Code source non publié
                                        </span>
                                    `
        }

                            </div>

                        </div>

                    </article>
                `).join("")}

            </div>

            <div id="projet-details"></div>

        </section>
    `;

    // Afficher les détails d'un projet
    const boutons = document.querySelectorAll(".btn-details");
    const detailsContainer = document.getElementById("projet-details");

    boutons.forEach(bouton => {
        bouton.addEventListener("click", () => {

            const id = Number(bouton.dataset.id);

            const projet = projets.find(p => p.id === id);

            detailsContainer.innerHTML = `
                <div class="details-projet">

                    <h2>${projet.titre}</h2>

                    <span class="projet-statut ${projet.statut === "Réalisé"
                    ? "termine"
                    : "encours"
                }">
                        ${projet.statut}
                    </span>

                    <h3>Présentation</h3>
                    <p>${projet.details}</p>

                    <h3>Technologies utilisées</h3>

                    <div class="projet-technologies">
                        ${projet.technologies.map(tech => `
                            <span>${tech}</span>
                        `).join("")}
                    </div>

                    <button class="btn-fermer" id="fermer-details">
                        Fermer
                    </button>

                </div>
            `;

            document.getElementById("fermer-details")
                .addEventListener("click", () => {
                    detailsContainer.innerHTML = "";
                });

            detailsContainer.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Initialiser les icônes Lucide si la bibliothèque est chargée
    if (window.lucide) {
        window.lucide.createIcons();
    }
};
