
export const projetAefana = () => {

    const app = document.getElementById("app");

    app.innerHTML = `

        <section class="aefana-page">

            <!-- Retour au portfolio -->
            <a href="#porfolio" class="retour-portfolio">
                <i data-lucide="arrow-left"></i>
                Retour aux projets
            </a>

            <!-- En-tête -->
            <div class="aefana-header">

                <div class="aefana-header-content">

                    <span class="aefana-label">
                        PROJET PERSONNEL
                    </span>

                    <h1>AEFANA</h1>

                    <h2>
                        Application web de gestion associative
                    </h2>

                    <p>
                        Une solution numérique destinée à centraliser
                        et faciliter la gestion administrative et
                        financière d'une association.
                    </p>

                    <span class="aefana-statut">
                        <i data-lucide="clock"></i>
                        En phase de conception
                    </span>

                </div>

                <div class="aefana-header-icon">
                    <i data-lucide="users-round"></i>
                </div>

            </div>

            <!-- Présentation -->
            <section class="aefana-section">

                <div class="section-title">
                    <span>01</span>
                    <h2>Présentation du projet</h2>
                </div>

                <p>
                    AEFANA est un projet de conception d'une
                    application web de gestion associative.
                    Il vise à moderniser et à simplifier le suivi
                    des activités administratives et financières
                    de l'association.

                    L'application permettra de centraliser les
                    informations des membres, d'organiser les
                    mandats universitaires, de gérer les
                    responsabilités du bureau et d'assurer
                    le suivi des opérations financières.
                </p>

            </section>

            <!-- Problématique -->
            <section class="aefana-section">

                <div class="section-title">
                    <span>02</span>
                    <h2>Problématique</h2>
                </div>

                <p>
                    La gestion d'une association implique plusieurs
                    opérations administratives et financières.
                    Lorsque ces opérations sont suivies séparément,
                    il devient plus difficile de conserver un
                    historique cohérent et de contrôler les
                    informations.

                    Le projet AEFANA vise donc à proposer une
                    application centralisée permettant de mieux
                    organiser ces différentes activités.
                </p>

            </section>

            <!-- Objectifs -->
            <section class="aefana-section">

                <div class="section-title">
                    <span>03</span>
                    <h2>Objectifs du projet</h2>
                </div>

                <div class="aefana-objectifs">

                    <article class="objectif-card">
                        <i data-lucide="users"></i>
                        <h3>Gestion des membres</h3>
                        <p>
                            Centraliser les informations et
                            assurer le suivi des membres.
                        </p>
                    </article>

                    <article class="objectif-card">
                        <i data-lucide="calendar-days"></i>
                        <h3>Gestion des mandats</h3>
                        <p>
                            Organiser les mandats et conserver
                            leur historique.
                        </p>
                    </article>

                    <article class="objectif-card">
                        <i data-lucide="briefcase-business"></i>
                        <h3>Gestion du bureau</h3>
                        <p>
                            Organiser les fonctions et les
                            responsabilités des membres du bureau.
                        </p>
                    </article>

                    <article class="objectif-card">
                        <i data-lucide="wallet"></i>
                        <h3>Gestion financière</h3>
                        <p>
                            Suivre les cotisations, les paiements,
                            les recettes et les dépenses.
                        </p>
                    </article>

                    <article class="objectif-card">
                        <i data-lucide="chart-no-axes-combined"></i>
                        <h3>Rapports</h3>
                        <p>
                            Faciliter le suivi et la consultation
                            des informations de gestion.
                        </p>
                    </article>

                </div>

            </section>

            <!-- Fonctionnalités -->
            <section class="aefana-section">

                <div class="section-title">
                    <span>04</span>
                    <h2>Fonctionnalités prévues</h2>
                </div>

                <div class="aefana-fonctionnalites">

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion des membres
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion des mandats
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion des fonctions du bureau
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion des cotisations
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion des paiements
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion de la caisse
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Gestion des dépenses
                    </div>

                    <div class="fonctionnalite-item">
                        <i data-lucide="check-circle-2"></i>
                        Génération des rapports
                    </div>

                </div>

            </section>

            <!-- Technologies -->
            <section class="aefana-section">

                <div class="section-title">
                    <span>05</span>
                    <h2>Technologies utilisées</h2>
                </div>

                <div class="aefana-technologies">

                    <div class="technologie">
                        <i data-lucide="code"></i>
                        <span>HTML5</span>
                    </div>

                    <div class="technologie">
                        <i data-lucide="palette"></i>
                        <span>CSS3</span>
                    </div>

                    <div class="technologie">
                        <i data-lucide="file-code"></i>
                        <span>JavaScript</span>
                    </div>

                    <div class="technologie">
                        <i data-lucide="server"></i>
                        <span>Python</span>
                    </div>

                    <div class="technologie">
                        <i data-lucide="database"></i>
                        <span>PostgreSQL</span>
                    </div>

                </div>

            </section>

            <!-- Conception UML à venir -->
            <section class="aefana-section">

                <div class="section-title">
                    <span>06</span>
                    <h2>Conception et modélisation</h2>
                </div>

                <p>
                    La modélisation UML permettra de représenter
                    les acteurs, les fonctionnalités et la structure
                    des données de l'application.
                </p>

                <div class="uml-a-venir">

                    <div>
                        <i data-lucide="workflow"></i>
                        <h3>Diagramme de cas d'utilisation</h3>
                        <span>À venir</span>
                    </div>

                    <div>
                        <i data-lucide="network"></i>
                        <h3>Diagramme de classes</h3>
                        <span>À venir</span>
                    </div>

                </div>

            </section>

            <!-- Pied de page -->
            <section class="aefana-conclusion">

                <i data-lucide="lightbulb"></i>

                <h2>Un projet en cours de conception</h2>

                <p>
                    AEFANA ambitionne de fournir un outil centralisé,
                    structuré et évolutif pour accompagner la gestion
                    administrative et financière de l'association.
                </p>

                <a href="#porfolio" class="btn-retour">
                    Découvrir les autres projets
                    <i data-lucide="arrow-right"></i>
                </a>

            </section>

        </section>

    `;

    if (window.lucide) {
        window.lucide.createIcons();
    }

};
