export function competence() {
    const app = document.getElementById("app");
    app.innerHTML = `
            

        <section class="competences">

            <div class="competences-header">
                <h1>Mes compétences</h1>

                <p>
                    Découvrez les technologies et les outils
                    que j'utilise pour concevoir, développer
                    et déployer des applications web.
                </p>
            </div>

            <div class="competences-container">

                <!-- FRONTEND -->

                <article class="competence-card">

                    <div class="competence-icon">🎨</div>

                    <h2>Frontend Development</h2>

                    <p>
                        Création d'interfaces web modernes,
                        interactives et responsives.
                    </p>

                    <div class="technologies">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                    </div>

                </article>

                <!-- BACKEND -->

                <article class="competence-card">

                    <div class="competence-icon">⚙️</div>

                    <h2>Backend Development</h2>

                    <p>
                        Développement de la logique métier,
                        création d'API REST et gestion des
                        échanges entre les applications.
                    </p>

                    <div class="technologies">
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Python</span>
                        <span>FastAPI</span>
                        <span>Django</span>
                    </div>

                </article>

                <!-- DATABASE -->

                <article class="competence-card">

                    <div class="competence-icon">🗄️</div>

                    <h2>Database Management</h2>

                    <p>
                        Conception, organisation et gestion
                        des bases de données relationnelles.
                    </p>

                    <div class="technologies">
                        <span>PostgreSQL</span>
                        <span>MySQL</span>
                        <span>SQL</span>
                    </div>

                </article>

                <!-- DEVOPS -->

                <article class="competence-card">

                    <div class="competence-icon">🚀</div>

                    <h2>DevOps & Deployment</h2>

                    <p>
                        Conteneurisation, automatisation
                        des déploiements et surveillance
                        des applications.
                    </p>

                    <div class="technologies">
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>Docker</span>
                        <span>Docker Compose</span>
                        <span>GitHub Actions</span>
                        <span>Docker Hub</span>
                        <span>VPS</span>
                        <span>Grafana</span>
                        <span>cAdvisor</span>
                    </div>

                </article>

                <!-- DATA SCIENCE -->

                <article class="competence-card">

                    <div class="competence-icon">📊</div>

                    <h2>Data Science</h2>

                    <p>
                        Initiation à l'analyse et à la
                        manipulation des données avec Python.
                    </p>

                    <div class="technologies">
                        <span>Python</span>
                        <span>NumPy</span>
                        <span>Pandas</span>
                        <span>Matplotlib</span>
                    </div>

                    <small class="learning">
                        En cours d'apprentissage
                    </small>

                </article>

                <!-- OUTILS -->

                <article class="competence-card">

                    <div class="competence-icon">💻</div>

                    <h2>Environnement & Outils</h2>

                    <p>
                        Utilisation des environnements de
                        développement et des systèmes
                        d'exploitation.
                    </p>

                    <div class="technologies">
                        <span>Linux / Debian</span>
                        <span>Windows</span>
                        <span>VS Code</span>
                        <span>Insomnia</span>
                    </div>

                </article>

            </div>

        </section>    
    
    `;
}